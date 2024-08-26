import { defineEventHandler, getQuery } from "h3";
import CartProductModel from "@/server/models/CartProduct";
import connectToDB from "@/utils/connectToDB";

export default defineEventHandler(async (event) => {
  await connectToDB();

  const query = getQuery(event);
  const userId = query.userId;

  const cart = await CartProductModel.find({ userId }).exec();

  return cart;
});
