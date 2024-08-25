import { defineEventHandler, readBody } from "h3";
import FavoriteModel from "@/server/models/Favorite";

export default defineEventHandler(async (event) => {
  const { productId, userId } = await readBody(event);

  await FavoriteModel.deleteOne({ productId, userId });

  return { message: "Favorite product removed successfully" };
});
