import { defineEventHandler, readBody } from "h3";
import connectToDB from "@/utils/connectToDB";
import ReviewModel from "@/server/models/Review";

export default defineEventHandler(async (event) => {
  try {
    await connectToDB();

    const { reviewId } = await readBody(event);

    const deletedReview = await ReviewModel.findByIdAndDelete(reviewId);

    if (!deletedReview) {
      return { success: false, message: "Review not found" };
    }

    return { success: true, message: "Review deleted successfully" };
  } catch (error) {
    console.error("Error deleting review:", error);
    return { success: false, message: "Error deleting review" };
  }
});
