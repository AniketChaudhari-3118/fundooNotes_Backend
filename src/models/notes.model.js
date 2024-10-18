import { required } from '@hapi/joi';
import { Schema, model } from 'mongoose';


const noteSchema = new Schema(
    {
        Title: {
            type: String,
            required: true,

        },
        Description: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true
        // versionKey: true
    }
);

export default model('Note', noteSchema);