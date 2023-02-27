/**
 * this file defines a Shark schematic & exports a compiled Shark model
 * author: Refaat 🌻
 */
import mongoose from "mongoose";

const SharkSchematic = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'a shark cannot be nameless!']
    }
});

export default mongoose.model('Shark', SharkSchematic);