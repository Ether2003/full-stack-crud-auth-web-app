/**
 * this router handles API calls for the authentication process
 * author: Refaat 🌻
 */
import express from 'express';
const router = express.Router();

import AuthController from '../controllers/AuthController/_.js';
import validateBody from '../middleware/validateBody.js';

import AuthenticateSchematic from '../schematics/AuthenticateSchematic.js';
import RegisterSchematic from '../schematics/RegisterSchematic.js';

router.post('/auth/register',
    validateBody(RegisterSchematic),
    AuthController.registerUser);

router.post('/auth/authenticate',
    validateBody(AuthenticateSchematic),
    AuthController.authenticateUser);

export default router;