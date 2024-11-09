import express from 'express';
import User from '../models/User.js';

const router = express.Router();

// Get user profile
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
      .populate('activeChallenges.challenge')
      .populate('achievements');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update carbon footprint
router.patch('/:id/carbon-footprint', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    user.carbonFootprint = {
      ...user.carbonFootprint,
      ...req.body
    };
    user.carbonFootprint.total = 
      user.carbonFootprint.transport +
      user.carbonFootprint.energy +
      user.carbonFootprint.waste;
    
    await user.save();
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Join challenge
router.post('/:id/challenges/:challengeId', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    user.activeChallenges.push({
      challenge: req.params.challengeId,
      progress: 0,
      startDate: new Date()
    });
    
    await user.save();
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;