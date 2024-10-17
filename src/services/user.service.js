import { user } from "../models/user.model";
import bcrypt from 'bcrypt';

export const registerUser = async (body) => {
  const data = await user.create(body);
  return data;
};

export const loginUser = async (email, password) => {
  console.log("hello");
  const data = await user.findOne({email}); //find user by email and password
  // Compare the provided password with the hashed password in the database
  const isMatch = await bcrypt.compare(password, data.password);
  if (isMatch) {
    return data;
  } else {
    return null;
  }
}

