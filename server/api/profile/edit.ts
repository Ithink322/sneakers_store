import { defineEventHandler, readBody } from "h3";
import UserModel from "@/server/models/User";
import mongoose from "mongoose";
import { apiFail, apiSuccess } from "@/server/utils/apiResponse";

const ObjectId = mongoose.Types.ObjectId;
export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const { userId, ...updatedFields } = body;
    if (!ObjectId.isValid(userId)) {
      return apiFail("Некорректный идентификатор пользователя.");
    }

    const user = await UserModel.findOne({ _id: new ObjectId(String(userId)) });

    if (!user) {
      return apiFail("Пользователь не найден.");
    }

    Object.keys(updatedFields).forEach((key) => {
      if (updatedFields[key] !== undefined) {
        user.set(key, updatedFields[key]);
      }
    });

    await user.save();

    return apiSuccess(
      { updatedProfile: user },
      "Профиль успешно обновлён."
    );
  } catch (error) {
    console.error("Failed to edit profile:", error);
    return apiFail("Не удалось обновить профиль. Попробуйте позже.");
  }
});
