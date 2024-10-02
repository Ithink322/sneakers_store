import { defineEventHandler } from "h3";
import connectToDB from "@/utils/connectToDB";
import CatalogProduct from "@/server/models/CatalogProduct";

export default defineEventHandler(async (event) => {
  try {
    await connectToDB();
    const catalogProducts = await CatalogProduct.find();

    return catalogProducts;
  } catch (error) {
    console.error("Error fetching catalog products:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to fetch products",
    });
  }
});
