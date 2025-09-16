import mongoose from "mongoose";

const paintingSchema = new mongoose.Schema(
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
    experience: {
      type: Number,
      required: false,  // optional
    },
    serviceType: {
      type: String,
      enum: ["Residential", "Commercial", "Both"],
      required: false,
    },
  },
  {
    timestamps: true,
    collection: "painting", // fixes collection name
  }
);

const Painting = mongoose.model("painting", paintingSchema);

export default Painting;
