import { H3Event } from "h3";
import connectToDB from "@/utils/connectToDB";
import CatalogProduct from "@/server/models/CatalogProduct";

export default defineEventHandler(async (event: H3Event) => {
  await connectToDB();

  const body = await readBody(event);

  const newProduct = new CatalogProduct(body);

  try {
    const savedProduct = await newProduct.save();
    return { success: true, product: savedProduct };
  } catch (error) {
    console.error("Error saving product:", error);
    return { success: false, message: "Failed to create product" };
  }
});
