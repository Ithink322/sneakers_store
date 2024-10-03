import mongoose, { Schema, Document } from "mongoose";
import { Product } from "@/types/Product";

const ProductSchema: Schema = new Schema({
  id: { type: Number, required: true, unique: true },
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
  previousPrice: { type: String },
  categoryBackgroundColor: { type: String },
  category: { type: String },
  averageRating: { type: Number },
  sortingCategory: { type: String },
});

const CatalogProduct = mongoose.model<Document & Product>(
  "CatalogProduct",
  ProductSchema
);

export default CatalogProduct;
