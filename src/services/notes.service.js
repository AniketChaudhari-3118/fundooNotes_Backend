import { log } from 'winston';
import Note from '../models/notes.model'


//create new note
export const newNote = async (body) => {
    try {
        const note = await Note.create(body);
        return note;
    } catch (error) {
        console.log(error);
    }
};


// Get all notes for a user
export const getUserNotes = async (userId) => {
    try {
        return await Note.find({ userId });
    } catch (error) {
        throw new Error(error.message);
    }
};


// Update a user's note
export const updateNote = async (userId, updateData) => {
    try {
        return await Note.findOneAndUpdate({ userId }, updateData, { new: true });
    } catch (error) {
        throw new Error(error.message);
    }
};


// Delete a note by noteId and userId
export const deleteNote = async (userId) => {
    try {
        return await Note.findOneAndDelete({ userId });
    } catch (error) {
        throw new Error(error.message);
    }
};