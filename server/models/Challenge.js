import mongoose from 'mongoose';

const challengeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['transport', 'energy', 'waste', 'general'],
    required: true
  },
  duration: {
    type: Number,
    required: true // in days
  },
  points: {
    type: Number,
    required: true
  },
  participants: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  requirements: {
    type: Map,
    of: mongoose.Schema.Types.Mixed
  },
  active: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

export default mongoose.model('Challenge', challengeSchema);