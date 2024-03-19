import express from 'express';
import { getAllAthletes, createAthlete, updateAthlete } from '../controllers/athleteController.js';
import authMiddleware from '../middleware/AuthMiddleware.js';

const router = express.Router();

router.get('/', getAllAthletes);
router.post('/', authMiddleware, createAthlete);
router.put('/:id', authMiddleware, updateAthlete);

export default router;
