import ReviewModel from "@/models/Review";
import { defineEventHandler, readBody } from "h3";
import connectToDB from "@/utils/connectToDB";

export default defineEventHandler(async (event) => {
  await connectToDB();

  const body = await readBody(event);

  const newReview = new ReviewModel(body);

  try {
    const savedReview = await newReview.save();
    return { status: "success", review: savedReview };
  } catch (error) {
    return { status: "error", error };
  }
});
