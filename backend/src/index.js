/**
 * this file is the entry point of the application
 * author: Refaat 🌻
 */
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import SharkRouter from './routers/SharkRouter.js';
import AuthRouter from './routers/AuthRouter.js'

// configure environemnt variables. comment this out before deploying!
dotenv.config({ path: '../.env' });

// create an instance of express
const app = express();

// bind middleware
app.use(cors());            // enables cross origin requests
app.use(express.json());    // enables express to parse JSON payloads
app.use(SharkRouter);       // binds the SharkRouter to this app
app.use(AuthRouter);        // binds the AuthRouter to this app

// binds host & port if the database connection is successful 
mongoose.set('strictQuery', false);
mongoose.connect(process.env.CONNECTION_STRING || 'mongodb://localhost:27017/tutorial')
    .then(() => {
        app.listen(process.env.PORT || 3333, () => {
            console.log('database connection successful!');
            console.log('listening @ http://localhost:3333 🐸')
        });
    })
    .catch((error) => {
        console.log(error);
        console.log('program terminated');
    });