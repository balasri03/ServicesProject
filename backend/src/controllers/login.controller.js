// import LoginModel from '../models/Login.models.js'
// import {asyncHandler} from '../utils/asyncHandler.js'
// const Login= asyncHandler(async(req,res)=>{
//     const {mobileNumber,password}=req.body
//     const user=await LoginModel.findOne({mobileNumber})
//     if(!user || !(await user.matchPassword(password))){
//         return res.status(401).json({message:'Invalid mobile number or password'})
//     }
//     res.status(200).json({message:'Login successful'})
// })

// export {Login}


import { SignUpModel } from '../models/signUp.models.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import bcrypt from 'bcrypt';

const Login = asyncHandler(async (req, res) => {
    const { mobileNumber, password } = req.body;
    const user = await SignUpModel.findOne({ mobileNumber });
    if (!user) {
        return res.status(401).json({ message: 'Invalid mobile number or password' });
    }
    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(401).json({ message: 'Invalid mobile number or password' });
    }
    res.status(200).json({ message: 'Login successful' });
});

export { Login };