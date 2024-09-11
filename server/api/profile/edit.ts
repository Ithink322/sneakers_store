import { defineEventHandler, readBody } from "h3";
import UserModel from "@/server/models/User";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const { userId, ...updatedFields } = body;

    const user = await UserModel.findOne({ userId });
    if (!user) {
      return { statusCode: 404, message: "User not found" };
    }

    Object.keys(updatedFields).forEach((key) => {
      if (updatedFields[key] !== undefined) {
        user.set(key, updatedFields[key]);
      }
    });

    await user.save();

    return { success: true, updatedProfile: user };
  } catch (error) {
    console.error("Failed to update profile:", error);
    return { statusCode: 500, message: "Internal Server Error" };
  }
});
