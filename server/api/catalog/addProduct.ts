import { defineEventHandler, H3Event, readBody } from "h3";
import connectToDB from "@/utils/connectToDB";
import CatalogProduct from "@/server/models/CatalogProduct";
import { apiFail, apiSuccess } from "@/server/utils/apiResponse";

export default defineEventHandler(async (event: H3Event) => {
  await connectToDB();
  const body = await readBody(event);

  try {
    const highestProduct = await CatalogProduct.findOne()
      .sort({ id: -1 })
      .exec();
    const newId = highestProduct ? highestProduct.id + 1 : 1;
    const newProduct = new CatalogProduct({
      ...body,
      id: newId,
    });

    const savedProduct = await newProduct.save();

    return apiSuccess(
      { product: savedProduct },
      "Товар успешно добавлен."
    );
  } catch (error) {
    console.error("Error saving product:", error);
    return apiFail("Не удалось добавить товар. Попробуйте позже.");
  }
});
