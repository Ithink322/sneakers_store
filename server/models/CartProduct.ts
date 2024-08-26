import { Schema, model } from "mongoose";
import type { CartProduct } from "@/types/CartProduct";

const CartProductSchema = new Schema<CartProduct>({
  userId: { type: String, required: true },
  productId: { type: Number, required: true },
  hero: { type: String },
  discount: { type: String },
  heroes: { type: [String], required: true },
  gender: { type: String, required: true },
  title: { type: String, required: true },
  desc: { type: String, required: true },
  specs: {
    gender: { type: String, required: true },
    country: { type: String, required: true },
    composition: { type: String, required: true },
    collection: { type: String, required: true },
    warranty: { type: String, required: true },
    yearOfRelease: { type: Number, required: true },
  },
  colors: { type: [String], required: true },
  sizes: { type: [Number], required: true },
  currentPrice: { type: String, required: true },
  previousPrice: { type: String, required: true },
  categoryBackgroundColor: { type: String },
  category: { type: String },
  averageRating: { type: Number },
  chosenColor: { type: String, required: true },
  chosenSize: { type: Number, required: true },
});

const CartProductModel = model<CartProduct>("CartProduct", CartProductSchema);

export default CartProductModel;
