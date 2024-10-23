import express from 'express';
import * as userController from '../controllers/user.controller.js';
import { authenticate, authenticateToken, userAuth } from '../middlewares/auth.middleware.js';
import { user } from '../models/user.model.js';



const router = express.Router();

router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);

/**
 * @swagger
 * 
 * tags:
 *   - name: User
 *     description: "Tag that contains all APIs for user."
 *   - name: Note
 *     description: "Tag that contains all APIs for note."
 * 
 * api/v1/user/register:
 *   post:
 *     summary: Register a user
 *     description: This API registers a user with email and password.
 *     tags:
 *       - User
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: user@example.com
 *               password:
 *                 type: string
 *                 example: secret
 *     responses:
 *       200:
 *         description: Successful registration
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
 *       401:
 *         description: Invalid email or password
 * 
 * api/v1/user/login:
 *   post:
 *     summary: Login a user
 *     description: This API logs in a user with email and password.
 *     tags:
 *       - User
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: user@example.com
 *               password:
 *                 type: string
 *                 example: secret
 *     responses:
 *       200:
 *         description: Successful login
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
 *       401:
 *         description: Invalid email or password
 */


router.get('/get', async (req, res, next) => {
    try {
        const data = await user.find();

        res.status(200).send({
            message: "Users fetched successfully...",
            data: data,
            status: "200 - Ok "
        })
    }
    catch (error) {
        console.log(error);
        next(error)

    }
})

export default router;
