import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  carbonFootprint: {
    transport: Number,
    energy: Number,
    waste: Number,
    total: Number
  },
  achievements: [{
    type: String,
    ref: 'Achievement'
  }],
  points: {
    type: Number,
    default: 0
  },
  level: {
    type: Number,
    default: 1
  },
  activeChallenges: [{
    challenge: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Challenge'
    },
    progress: Number,
    startDate: Date
  }]
}, {
  timestamps: true
});

export default mongoose.model('User', userSchema);