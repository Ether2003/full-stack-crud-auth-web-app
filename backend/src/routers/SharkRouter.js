/**
 * this file 
 * this file handles API calls for the Shark resource
 * author: Refaat 🌻
 */
import express from 'express';
const router = express.Router();

import SharkController from '../controllers/SharkController/_.js';
import isAuthenticated from '../middleware/isAuthenticated.js';
import validateBody from '../middleware/validateBody.js';
import SharkSchematic from '../schematics/SharkSchematic.js';
import validateObjectId from '../middleware/validateObjectId.js';

router.get('/api/sharks',
    isAuthenticated,
    SharkController.getAllSharks);

router.post('/api/sharks',
    isAuthenticated,
    validateBody(SharkSchematic),
    SharkController.createShark);

router.put('/api/sharks/:id',
    isAuthenticated,
    validateObjectId,
    validateBody(SharkSchematic),
    SharkController.updateShark);

router.delete('/api/sharks/:id',
    isAuthenticated,
    validateObjectId,
    SharkController.deleteShark);

export default router;