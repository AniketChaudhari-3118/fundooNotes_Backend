import express from 'express';
import * as userController from '../controllers/user.controller.js';


const router = express.Router();

router.post('/', userController.registerUser);
router.post('/login', userController.loginUser);

export default router;
