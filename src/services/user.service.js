import { user } from "../models/user.model";
import bcrypt from 'bcrypt';
const jwt = require('jsonwebtoken');
import dotenv from 'dotenv';
dotenv.config();

export const registerUser = async (body) => {
  const data = await user.create(body); 
  return data;
};

export const loginUser = async (email, password) => {
  
  const data = await user.findOne({email}); //find user by email and password
  //Compare the provided password with the hashed password in the database
  const isMatch = await bcrypt.compare(password, data.password);
  if (isMatch) {
    return data;
  } 
  else {
    return null;
  }
}

export const generateToken = async(body) =>{
  const payload = body;
  const secreteKey = process.env.SECRET_KEY;
  const token = jwt.sign(payload, secreteKey, {expiresIn: '1h'});
  return token;
}

