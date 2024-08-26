import { defineEventHandler, readBody } from "h3";
import CartProductModel from "@/server/models/CartProduct";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const cartProduct = new CartProductModel({
    userId: body.userId,
    productId: body.productId,
    hero: body.hero,
    discount: body.discount,
    heroes: body.heroes,
    gender: body.gender,
    title: body.title,
    desc: body.desc,
    specs: body.specs,
    colors: body.colors,
    sizes: body.sizes,
    currentPrice: body.currentPrice,
    previousPrice: body.previousPrice,
    categoryBackgroundColor: body.categoryBackgroundColor,
    category: body.category,
    averageRating: body.averageRating,
    chosenColor: body.chosenColor,
    chosenSize: body.chosenSize,
  });

  await cartProduct.save();

  return { message: "Cart product added successfully" };
});
