import express from 'express';
import Challenge from '../models/Challenge.js';

const router = express.Router();

// Get all active challenges
router.get('/', async (req, res) => {
  try {
    const challenges = await Challenge.find({ active: true })
      .populate('participants', 'name points');
    res.json(challenges);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create new challenge
router.post('/', async (req, res) => {
  const challenge = new Challenge({
    ...req.body,
    active: true
  });

  try {
    const newChallenge = await challenge.save();
    res.status(201).json(newChallenge);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update challenge progress
router.patch('/:id/progress', async (req, res) => {
  try {
    const challenge = await Challenge.findById(req.params.id);
    if (!challenge) {
      return res.status(404).json({ message: 'Challenge not found' });
    }
    
    // Update challenge progress logic here
    
    res.json(challenge);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;