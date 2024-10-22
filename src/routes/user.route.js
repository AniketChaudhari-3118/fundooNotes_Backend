import express from 'express';
import * as userController from '../controllers/user.controller.js';
import { authenticate, authenticateToken, userAuth } from '../middlewares/auth.middleware.js';
import { user } from '../models/user.model.js';


const router = express.Router();

router.post('/', userController.registerUser);

/**
 * @swagger
 * /register:
 *     post:
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
 *         description: Successful Register
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
 * /login:
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
router.post('/login', userAuth, userController.loginUser);


/**
 * @swagger
 * /api/v1/users/get:
 *   get:
 *     summary: Login a user
 *     description: This API logs in a user with email and password.
 *     tags:
 *       - User
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
