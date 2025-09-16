import mongoose from "mongoose";

const electricalSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    experience: {
      type: Number,
      required: true,
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
    serviceArea: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,          // ✅ adds createdAt & updatedAt
    collection: "electricals",  // ✅ ensures MongoDB collection name = "electrical"
  }
);

const Electrical = mongoose.model("electricals", electricalSchema);

export default Electrical;
