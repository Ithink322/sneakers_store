import { Schema, model } from "mongoose";
import type { NewReview } from "@/types/NewReview";

const ReviewSchema = new Schema<NewReview>({
  productId: { type: Number, required: true },
  username: { type: String, required: true },
  rating: { type: Number, required: true },
  date: { type: String, required: true },
  text: { type: String, required: true },
  imgs: { type: [String], required: false },
});

const ReviewModel = model<NewReview>("Review", ReviewSchema);

export default ReviewModel;
