import HttpStatus from 'http-status-codes';
import * as notesService from '../services/notes.service'


// Create a new note
export const createNote = async (req, res) => {
    try {
        // const userId = req.user._id;  // Assuming the userId is available in the request object after authentication
        const note = await notesService.newNote(req.body);
        res.status(201).json(note);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// Get all notes for the logged-in user
export const getUserNotes = async (req, res) => {
    try {
        const notes = await notesService.getUserNotes(req._id);
        res.status(200).json(notes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// Update a user's note
export const updateNote = async (req, res) => {
    try {
        const updatedNote = await notesService.updateNote(req._id, req.body);
        if (!updatedNote) {
            return res.status(404).json({ message: 'Note not found' });
        }
        res.status(200).json(updatedNote);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// Delete a note
export const deleteNote = async (req, res) => {
    try {
        const deletedNote = await notesService.deleteNote(req._id);
        if (!deletedNote) {
            return res.status(404).json({ message: 'Note not found' });
        }
        res.status(200).json({ message: 'Note deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};