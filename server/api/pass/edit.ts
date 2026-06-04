import { defineEventHandler, readBody } from "h3";
import bcrypt from "bcryptjs";
import UserModel from "@/server/models/User";
import mongoose from "mongoose";
import { apiFail, apiSuccess } from "@/server/utils/apiResponse";

const ObjectId = mongoose.Types.ObjectId;

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const { userId, currentPass, newPass } = body;

    if (!ObjectId.isValid(userId)) {
      return apiFail("Некорректный идентификатор пользователя.");
    }

    const user = await UserModel.findOne({ _id: new ObjectId(String(userId)) });

    if (!user) {
      return apiFail("Пользователь не найден.");
    }

    const isMatch = await bcrypt.compare(currentPass, user.password);
    if (!isMatch) {
      return apiFail("Текущий пароль неверен.");
    }

    const hashedPass = await bcrypt.hash(newPass, 7);
    user.password = hashedPass;

    await user.save();

    return apiSuccess(undefined, "Пароль успешно изменён.");
  } catch (error) {
    console.error("Error updating password:", error);
    return apiFail("Не удалось изменить пароль. Попробуйте позже.");
  }
});
