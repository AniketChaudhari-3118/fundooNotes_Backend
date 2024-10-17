import express from 'express';
import * as noteController from '../controllers/notes.controller'
import { authenticate, userAuth, authenticateToken } from '../middlewares/auth.middleware';

const router = express.Router();

// Create a new note
router.post('/create', noteController.createNote);

// Get all notes for the logged-in user
router.get('/fetch', noteController.getUserNotes);

// Update a note by ID
router.put('/update/:noteId', noteController.updateNote);

// Delete a note by ID
router.delete('/delete/:noteId', noteController.deleteNote);

export default router;