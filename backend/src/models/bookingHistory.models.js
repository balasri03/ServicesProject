import mongoose from "mongoose";

const bookingHistorySchema = new mongoose.Schema({
  serviceType: {
    type: String,
    required: true,
  },
  bookingDate: {
    type: Date,
    default: Date.now,
  },
},{collection:'BookingHistory'});

export const BookingHistoryModel = mongoose.model("BookingHistory", bookingHistorySchema);