import { defineEventHandler, readBody } from "h3";
import FavoriteModel from "@/server/models/Favorite";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const favorite = new FavoriteModel({
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
  });

  await favorite.save();

  return { message: "Favorite product added successfully" };
});
