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

export default noteRoute;