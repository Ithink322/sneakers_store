import { defineEventHandler, getQuery } from "h3";
import FavoriteModel from "@/server/models/Favorite";
import connectToDB from "@/utils/connectToDB";

export default defineEventHandler(async (event) => {
  await connectToDB();

  const query = getQuery(event);
  const userId = query.userId;

  const favorites = await FavoriteModel.find({ userId }).exec();

  return favorites;
});
