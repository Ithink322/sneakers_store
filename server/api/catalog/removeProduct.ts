import { H3Event } from "h3";
import connectToDB from "@/utils/connectToDB";
import CatalogProduct from "@/server/models/CatalogProduct";

export default defineEventHandler(async (event: H3Event) => {
  await connectToDB();

  const { id } = await readBody(event);

  try {
    const result = await CatalogProduct.findOneAndDelete({ id: Number(id) });

    if (result) {
      return { success: true };
    } else {
      return { success: false, message: "Product not found" };
    }
  } catch (error) {
    console.error("Error deleting product:", error);
    return { success: false, message: "Failed to delete product" };
  }
});
