import mongoose from 'mongoose'
const FormShcema=new mongoose.Schema({
    address:{
        type:String,
        required:true
    },
    availabilityTime:{
        type:String,
        required: true
    },
    wagesWanttoPay:{
        type:String,
        required:true
    },
    contactInfo:{
        type:String,
        required:true
    }
},{collection:'form'})


export default mongoose.model('form',FormShcema)