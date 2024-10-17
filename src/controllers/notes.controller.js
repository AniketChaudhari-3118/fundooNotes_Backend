import HttpStatus from 'http-status-codes';
import notesService from '../services/notes.service'


// Create a new note
export const createNote = async (req, res) => {
    try {
        const { title, description } = req.body;
       // const userId = req.user._id;  // Assuming the userId is available in the request object after authentication
        const note = await notesService.createNote({ title, description });
        res.status(201).json(note);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// Get all notes for the logged-in user
export const getUserNotes = async (req, res) => {
    try {
        const userId = req.user._id;
        const notes = await notesService.getUserNotes(userId);
        res.status(200).json(notes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// Update a user's note
export const updateNote = async (req, res) => {
    try {
        const { noteId } = req.params;
        const userId = req.user._id;
        const updatedNote = await notesService.updateNote(noteId, userId, req.body);
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
        const { noteId } = req.params;
        const userId = req.user._id;
        const deletedNote = await notesService.deleteNote(noteId, userId);
        if (!deletedNote) {
            return res.status(404).json({ message: 'Note not found' });
        }
        res.status(200).json({ message: 'Note deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};