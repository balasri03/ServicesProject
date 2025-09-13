import FormModel from '../models/form.models.js' 
import {asyncHandler} from '../utils/asyncHandler.js'

const FormController = asyncHandler(async (req, res) => {
    const { name, address, availabilityTime, contactInfo } = req.body;
    const form = new FormModel({ name, address, availabilityTime, contactInfo });
    await form.save();
    res.status(201).json({ message: 'Form submitted successfully' });
});
export {FormController}