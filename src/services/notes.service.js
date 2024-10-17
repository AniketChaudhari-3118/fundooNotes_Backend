import Note from '../models/notes.model'


//create new note
export const createNote = async (title, description) => {
    try {
        const note = await Note.create({ title, description });
        return note;
    } catch (error) {
        throw new Error(error.message);
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
export const updateNote = async (noteId, userId, updateData) => {
    try {
        return await Note.findOneAndUpdate({ _id: noteId, userId }, updateData, { new: true });
    } catch (error) {
        throw new Error(error.message);
    }
};


// Delete a note by noteId and userId
export const deleteNote = async (noteId, userId) => {
    try {
        return await Note.findOneAndDelete({ _id: noteId, userId });
    } catch (error) {
        throw new Error(error.message);
    }
};