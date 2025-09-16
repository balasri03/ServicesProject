import mongoose from "mongoose";

const carpentrySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  experience: {
    type: Number,
    required: true,
    min: 0,
  },
  availabilityTime: {
    type: String,
    required: true,
  },
  contactInfo: {
    type: String,
    required: true,
    trim: true,
  },
  serviceArea: {
    type: String,
    required: true,
  },
}, { timestamps: true ,
    collection:'carpentry'
});

const Carpentry = mongoose.model("Carpentry", carpentrySchema);

export default Carpentry;
