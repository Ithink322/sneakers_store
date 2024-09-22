import { defineEventHandler, readBody } from "h3";
import { products } from "@/data/CatalogProducts";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  if (!body.query || body.query.trim() === "") {
    return { message: "Search query cannot be empty", results: [] };
  }

  const searchRegex = new RegExp(body.query, "i");
  const filteredProducts = products.filter((product) => {
    return searchRegex.test(product.title);
  });

  return {
    message: "Search results",
    results: filteredProducts,
  };
});
