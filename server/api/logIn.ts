import { defineEventHandler, readBody } from "h3";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import UserModel from "@/server/models/User";
import connectToDB from "@/utils/connectToDB";

const secret = process.env.SECRET_KEY;

if (!secret) {
  throw new Error("SECRET_KEY environment variable is not defined");
}

const generateAccessToken = (id: string) => {
  const payload = {
    id,
  };
  return jwt.sign(payload, secret!, { expiresIn: "24h" });
};

export default defineEventHandler(async (event) => {
  try {
    await connectToDB();

    const body = await readBody(event);
    const { login, password } = body;

    const user = await UserModel.findOne({ login });
    if (!user) {
      return {
        success: false,
        message: "User not found.",
      };
    }

    const isPasswordValid = bcrypt.compareSync(password, user.password);
    if (!isPasswordValid) {
      return {
        success: false,
        message: "Invalid password.",
      };
    }

    const token = generateAccessToken(user._id.toString());

    return {
      success: true,
      message: "Login successful!",
      token,
      fio: user.fio,
    };
  } catch (error) {
    console.error("Error during login:", error);
    return {
      success: false,
      message: "An error occurred during login.",
    };
  }
});
