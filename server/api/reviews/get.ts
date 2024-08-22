import ReviewModel from "@/server/models/Review";
import { defineEventHandler, getQuery } from "h3";
import connectToDB from "@/utils/connectToDB";

export default defineEventHandler(async (event) => {
  await connectToDB();

  const query = getQuery(event);
  const { productId } = query;

  try {
    const reviews = await ReviewModel.find({ productId });
    return { status: "success", reviews };
  } catch (error) {
    return { status: "error", error };
  }
});
