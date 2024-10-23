import express from 'express';
import * as noteController from '../controllers/notes.controller.js'
import { authenticate, userAuth } from '../middlewares/auth.middleware';

const noteRoute = express.Router();

// Create a new note
noteRoute.post('/create', noteController.createNote);

// Get all notes for the logged-in user
noteRoute.get('/fetch', noteController.getUserNotes);

// Update a note by ID
noteRoute.put('/update/:noteId', noteController.updateNote);

// Delete a note by ID
noteRoute.delete('/delete/:noteId', noteController.deleteNote);


/**
 * @swagger
 * 
 * components: 
 *     schemas:    
 *         User: 
 *             type: object 
 *             required: 
 *                 - name 
 *                 - email
 *                 - password 
 *             properties:
 *                 name: 
 *                     type: string
 *                     description: this is name of user 
 *                 email:
 *                     type: string
 *                     description: This is email of user
 *                 password:
 *                     type: string
 *                     description: This is password of user
 *         Notes: 
 *             type: object 
 *             required: 
 *                 - noteId
 *                 - Title
 *                 - Description
 *             properties:
 *                 noteID: 
 *                     type: string
 *                     description: this is noteId of user 
 *                 Title:
 *                     type: string
 *                     description: This is Title of Note
 *                 Description:
 *                     type: string
 *                     description: This is Description of Note

 * api/v1/notes/create:
 *   post:
 *     summary: Create a note
 *     description: To create a new note and save in DB
 *     tags:
 *       - notes    
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
 *         description: Successfully created note
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
 *       401:
 *         description: Unable to create a new note
 * 
 * api/v1/notes//fetch:
 *   get:
 *     summary: Fetch the notes
 *     description: To fetch notes from the DB
 *     tags:
 *       - notes
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
 *         description: Successfully fetched notes
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
 *       401:
 *         description: Unable to fetch the notes
 * 
 * api/v1/notes/update/{noteId}:
 *   put:
 *     summary: Update a note
 *     description: To update a note and save in DB
 *     tags:
 *       - notes
 *     parameters:
 *       - in: path
 *         name: noteId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the note to update
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
 *         description: Successfully updated note
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
 *       401:
 *         description: Unable to update the note
 * 
 * api/v1/notes/delete/{noteId}:
 *   delete:
 *     summary: Delete a note
 *     description: To delete a note from the DB
 *     tags:
 *       - notes
 *     parameters:
 *       - in: path
 *         name: noteId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the note to delete
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
 *         description: Successfully deleted the note
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
 *       401:
 *         description: Unable to delete the note
 */


export default noteRoute;