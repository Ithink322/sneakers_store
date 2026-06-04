import { defineEventHandler, readBody } from "h3";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import UserModel from "@/server/models/User";
import connectToDB from "@/utils/connectToDB";
import { apiFail, apiSuccess } from "@/server/utils/apiResponse";

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
      return apiFail("Неверный логин или пароль.");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return apiFail("Неверный логин или пароль.");
    }

    const token = generateAccessToken(user._id.toString());

    return apiSuccess(
      {
        userId: user._id,
        token,
        fio: user.fio,
        number: user.number,
        isAdmin: user.isAdmin || false,
      },
      "Вход выполнен успешно."
    );
  } catch (error) {
    console.error("Error during login:", error);
    return apiFail("Не удалось войти. Попробуйте позже.");
  }
});
