import mongoose from 'mongoose';

const transportSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  type: {
    type: String,
    enum: ['walk', 'bike', 'public', 'car'],
    required: true
  },
  distance: {
    type: Number,
    required: true
  },
  co2Saved: Number,
  date: {
    type: Date,
    default: Date.now
  },
  route: {
    start: {
      type: { type: String },
      coordinates: [Number]
    },
    end: {
      type: { type: String },
      coordinates: [Number]
    }
  }
}, {
  timestamps: true
});

transportSchema.index({ route: '2dsphere' });

export default mongoose.model('Transport', transportSchema);