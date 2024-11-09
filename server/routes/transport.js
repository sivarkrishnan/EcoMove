import express from 'express';
import Transport from '../models/Transport.js';

const router = express.Router();

// Log transport activity
router.post('/', async (req, res) => {
  const transport = new Transport({
    ...req.body,
    co2Saved: calculateCO2Saved(req.body.type, req.body.distance)
  });

  try {
    const newTransport = await transport.save();
    res.status(201).json(newTransport);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get user's transport history
router.get('/user/:userId', async (req, res) => {
  try {
    const history = await Transport.find({ userId: req.userId })
      .sort({ date: -1 })
      .limit(10);
    res.json(history);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

function calculateCO2Saved(type, distance) {
  const co2PerKm = {
    walk: 0,
    bike: 0,
    public: 0.04,
    car: 0.2
  };
  
  return (co2PerKm.car - co2PerKm[type]) * distance;
}

export default router;