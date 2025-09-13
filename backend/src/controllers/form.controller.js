import FormModel from '../models/form.models.js' 
import {asyncHandler} from '../utils/asyncHandler.js'

const FormController=asyncHandler(async(req,res)=>{
    const {address,avilabilityTime,wagesWanttoPay,contactInfo}=req.body
    const form=new FormModel({address,avilabilityTime,wagesWanttoPay,contactInfo})
    await form.save()
    res.status(201).json({message:'Form submitted successfully'})
})

export {FormController}