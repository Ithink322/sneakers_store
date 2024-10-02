import { defineEventHandler, readBody } from "h3";
import bcrypt from "bcryptjs";
import UserModel from "@/server/models/User";
import connectToDB from "@/utils/connectToDB";

export default defineEventHandler(async (event) => {
  await connectToDB();

  const body = await readBody(event);
  const { login, fio, number, password, isAdmin } = body;

  const hashedPassword = bcrypt.hashSync(password, 7);

  const newUser = new UserModel({
    login,
    fio,
    number,
    password: hashedPassword,
    isAdmin: isAdmin || false,
  });

  await newUser.save();

  return {
    success: true,
    message: "User created successfully!",
  };
});
