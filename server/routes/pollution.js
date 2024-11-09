import express from 'express';
import axios from 'axios';

const router = express.Router();

// Get current pollution levels for a location
router.get('/:lat/:lon', async (req, res) => {
  try {
    const { lat, lon } = req.params;
    // In production, replace with actual API call to pollution data service
    const mockData = {
      aqi: 75,
      level: 'Moderate',
      pollutants: {
        pm25: 15,
        pm10: 45,
        no2: 25
      },
      recommendations: [
        'Consider reducing outdoor activities',
        'Keep windows closed during peak hours'
      ]
    };
    
    res.json(mockData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get pollution alerts for a region
router.get('/alerts/:region', async (req, res) => {
  try {
    const { region } = req.params;
    // In production, implement actual alert logic
    const alerts = {
      active: true,
      level: 'High',
      message: 'Air quality index is above normal levels',
      timestamp: new Date()
    };
    
    res.json(alerts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;