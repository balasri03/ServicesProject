import mongoose from "mongoose";

const cleaningSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    availabilityTime: {
      type: String,
      required: true,
      trim: true,
    },
    contactInfo: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true },{
    Collection:'cleaning'
  }
);
 
const CleaningModel = mongoose.model("cleaning", cleaningSchema);

export default CleaningModel;
