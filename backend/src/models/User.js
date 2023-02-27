/**
 * this file defines a User schematic & exports a compiled User model
 * author: Refaat 🌻
 */
import mongoose from "mongoose";

const UserSchematic = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'an email is required!']
    },

    password: {
        type: String,
        required: [true, 'an email is required!']
    },

    role: {
        type: Number,
        default: 0
    }
});

export default mongoose.model('User', UserSchematic);