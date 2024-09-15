import { defineEventHandler, readBody } from "h3";
import bcrypt from "bcryptjs";
import UserModel from "@/server/models/User";
import mongoose from "mongoose";

const ObjectId = mongoose.Types.ObjectId;

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const { userId, currentPass, newPass } = body;

    if (!ObjectId.isValid(userId)) {
      return { statusCode: 400, message: "Invalid User ID" };
    }

    const user = await UserModel.findOne({ _id: new ObjectId(String(userId)) });

    const isMatch = await bcrypt.compare(currentPass, user!.password);
    if (!isMatch) {
      return { statusCode: 401, message: "Current password is incorrect" };
    }

    const hashedPass = await bcrypt.hash(newPass, 7);
    user!.password = hashedPass;

    await user!.save();

    return { success: true, message: "Password updated successfully" };
  } catch (error) {
    console.error("Error updating password:", error);
    return { statusCode: 500, message: "Internal Server Error" };
  }
});
