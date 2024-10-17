import HttpStatus from 'http-status-codes';
import * as service from '../services/user.service.js'
import bcrypt from 'bcrypt';

export const registerUser = async (req, res) => {
    try {
        const { password, ...otherData } = req.body; // extract password and other data
        const hashedPassword = await bcrypt.hash(password, 10); // hash the password
        const data = await service.registerUser({...otherData, password: hashedPassword});
        //console.log(data);
        res.status(HttpStatus.CREATED).json({
            code: HttpStatus.CREATED,
            data: data,
            message: 'User Registered Successfully'
        });
        return data;
    } catch (error) {
        console.log(error);
        res.json(error);
    }
}

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body; //extract email and password from the request body
        console.log(email, password);
        
        const data = await service.loginUser(email, password);
        if (data) {
            res.status(200).json({ message: 'Login Successful', data });
        } else {
            res.status(401).json({ message: 'Invalid email or password' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
}