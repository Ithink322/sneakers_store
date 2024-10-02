import { defineEventHandler, readBody } from "h3";
import connectToDB from "@/utils/connectToDB";
import CatalogProduct from "@/server/models/CatalogProduct";
import type { Product } from "@/types/Product";

export default defineEventHandler(async (event) => {
  await connectToDB();

  const updatedProduct: Product = await readBody(event);

  try {
    const post = await CatalogProduct.findOneAndUpdate(
      { id: Number(updatedProduct.id) },
      updatedProduct,
      { new: true }
    );

    if (post) {
      return post;
    } else {
      return { error: "Product not found" };
    }
  } catch (error) {
    console.error("Error updating product:", error);
    return { error: "Failed to update product" };
  }
});
