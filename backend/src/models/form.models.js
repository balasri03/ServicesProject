import mongoose from "mongoose";


const formSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  availabilityTime: {
    type: String,
    required: true,
  },
  contactInfo: {
    type: String,
    required: true,
  },
},{collection:'form'});


export default mongoose.model('form',formSchema)

