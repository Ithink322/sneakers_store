import { defineEventHandler, readBody } from "h3";
import UserModel from "@/server/models/User";
import mongoose from "mongoose";

const ObjectId = mongoose.Types.ObjectId;
export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const { userId, ...updatedFields } = body;
    if (!ObjectId.isValid(userId)) {
      return { statusCode: 400, message: "Invalid User ID" };
    }

    const user = await UserModel.findOne({ _id: new ObjectId(String(userId)) });

    Object.keys(updatedFields).forEach((key) => {
      if (updatedFields[key] !== undefined) {
        user!.set(key, updatedFields[key]);
      }
    });

    await user!.save();

    return {
      success: true,
      message: "Profile edited successfully",
      updatedProfile: user,
    };
  } catch (error) {
    console.error("Failed to edit profile:", error);
    return { statusCode: 500, message: "Internal Server Error" };
  }
});
