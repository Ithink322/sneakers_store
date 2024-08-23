import ReviewModel from "@/server/models/Review";
import { defineEventHandler, getQuery } from "h3";
import connectToDB from "@/utils/connectToDB";

export default defineEventHandler(async (event) => {
  try {
    await connectToDB();

    const query = getQuery(event);
    const { productId } = query;

    if (!productId) {
      throw new Error("Product ID is missing");
    }

    const reviews = await ReviewModel.find({ productId });

    if (!reviews) {
      throw new Error(`No reviews found for product ID: ${productId}`);
    }

    return { status: "success", reviews };
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return { status: "error", error: error };
  }
});
