import { defineEventHandler, readBody } from "h3";
import CartProductModel from "@/server/models/CartProduct";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  await CartProductModel.deleteOne({
    userId: body.userId,
    productId: body.productId,
    chosenColor: body.chosenColor,
    chosenSize: body.chosenSize,
  });

  return { message: "Cart product removed successfully" };
});
