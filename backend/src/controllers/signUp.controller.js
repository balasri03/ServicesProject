import { SignUpModel } from '../models/signUp.models.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import bcrypt from 'bcrypt';

const SignUp = asyncHandler(async (req, res) => {
    const { mobileNumber, password, fullName, email } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await SignUpModel.create({
        mobileNumber,
        password: hashedPassword,
        fullName,
        email
    });
    res.status(201).json({
        success: true,
        data: user
    });
});

export { SignUp };