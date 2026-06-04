import { defineEventHandler, getQuery } from "h3";
import connectToDB from "@/utils/connectToDB";
import CatalogProduct from "@/server/models/CatalogProduct";

export default defineEventHandler(async (event) => {
  try {
    await connectToDB();

    const { id } = getQuery(event);
    const productId = Number(id);

    if (!Number.isInteger(productId)) {
      throw createError({
        statusCode: 400,
        statusMessage: "Invalid product id",
      });
    }

    const product = await CatalogProduct.findOne({ id: productId });

    if (!product) {
      throw createError({
        statusCode: 404,
        statusMessage: "Product not found",
      });
    }

    return product;
  } catch (error) {
    if (error && typeof error === "object" && "statusCode" in error) {
      throw error;
    }

    console.error("Error fetching catalog product:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to fetch product",
    });
  }
});
