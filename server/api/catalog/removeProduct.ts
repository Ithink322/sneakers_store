import { defineEventHandler, H3Event, readBody } from "h3";
import connectToDB from "@/utils/connectToDB";
import CatalogProduct from "@/server/models/CatalogProduct";
import { apiFail, apiSuccess } from "@/server/utils/apiResponse";

export default defineEventHandler(async (event: H3Event) => {
  await connectToDB();

  const { id } = await readBody(event);

  try {
    const result = await CatalogProduct.findOneAndDelete({ id: Number(id) });

    if (result) {
      return apiSuccess(undefined, "Товар успешно удалён.");
    }

    return apiFail("Товар не найден.");
  } catch (error) {
    console.error("Error deleting product:", error);
    return apiFail("Не удалось удалить товар. Попробуйте позже.");
  }
});
