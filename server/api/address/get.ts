import { defineEventHandler, getQuery } from "h3";
import AddressModel from "@/server/models/Address";
import connectToDB from "@/utils/connectToDB";
import { apiFail, apiSuccess } from "@/server/utils/apiResponse";

export default defineEventHandler(async (event) => {
  await connectToDB();

  const query = getQuery(event);
  const userId = query.userId;

  try {
    const address = await AddressModel.findOne({ userId });

    if (address) {
      return apiSuccess({ address });
    }

    return apiFail("Адрес для пользователя не найден.");
  } catch (error) {
    console.error("Failed to fetch address:", error);
    return apiFail("Не удалось загрузить адрес. Попробуйте позже.");
  }
});
