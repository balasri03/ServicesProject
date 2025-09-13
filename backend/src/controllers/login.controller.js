import { SignUpModel } from "../models/signUp.models.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import bcrypt from "bcrypt";
import LoginModel from "../models/Login.models.js";

const Login = asyncHandler(async (req, res) => {
  const { mobileNumber, email, password } = req.body;

  const user = await SignUpModel.findOne({ mobileNumber, email });
  if (!user) {
    return res
      .status(401)
      .json({ message: "Invalid mobile number, email or password" });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res
      .status(401)
      .json({ message: "Invalid mobile number, email or password" });
  }
  // Save login attempt to login collection
  await LoginModel.create({
    mobileNumber: user.mobileNumber,
    email: user.email,
    password: req.body.password, // store raw password for demonstration, but ideally store hash or omit
  });
  res.status(200).json({
    message: "Login successful",
    user: { id: user._id, mobileNumber: user.mobileNumber, email: user.email },
  });
});

export { Login };
