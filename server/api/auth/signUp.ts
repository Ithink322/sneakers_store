import { defineEventHandler, readBody } from "h3";
import bcrypt from "bcryptjs";
import UserModel from "@/server/models/User";
import connectToDB from "@/utils/connectToDB";
import {
  apiFail,
  apiSuccess,
  isMongoDuplicateKeyError,
} from "@/server/utils/apiResponse";

export default defineEventHandler(async (event) => {
  try {
    await connectToDB();

    const body = await readBody(event);
    const { login, fio, number, password, isAdmin } = body;

    const hashedPassword = await bcrypt.hash(password, 7);

    const newUser = new UserModel({
      login,
      fio,
      number,
      password: hashedPassword,
      isAdmin: isAdmin || false,
    });

    await newUser.save();

    return apiSuccess(undefined, "Регистрация прошла успешно.");
  } catch (error) {
    console.error("Error during sign up:", error);

    if (isMongoDuplicateKeyError(error)) {
      return apiFail("Email или логин уже существует.");
    }

    return apiFail("Не удалось зарегистрироваться. Попробуйте позже.");
  }
});
