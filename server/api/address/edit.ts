import { defineEventHandler, readBody } from "h3";
import AddressModel from "@/server/models/Address";
import { apiFail, apiSuccess } from "@/server/utils/apiResponse";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const { userId, ...updatedFields } = body;

    const address = await AddressModel.findOne({ userId });

    if (!address) {
      return apiFail("Адрес не найден.");
    }

    Object.keys(updatedFields).forEach((key) => {
      if (updatedFields[key] !== undefined && updatedFields[key] !== "") {
        (address as Record<string, unknown>)[key] = updatedFields[key];
      }
    });

    await address.save();

    return apiSuccess(
      { updatedAddress: address },
      "Адрес успешно обновлён."
    );
  } catch (error) {
    console.error("Failed to edit address:", error);
    return apiFail("Не удалось обновить адрес. Попробуйте позже.");
  }
});
