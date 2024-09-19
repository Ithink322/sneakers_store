import { defineEventHandler, readBody } from "h3";
import CartProductModel from "@/server/models/CartProduct";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  await CartProductModel.deleteMany({ userId: body.userId });

  return { message: "Cart reset successfully" };
});
