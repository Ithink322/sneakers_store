import { defineEventHandler, readBody } from "h3";
import AddressModel from "@/server/models/Address";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const { userId, ...updatedFields } = body;

    const address = await AddressModel.findOne({ userId });

    Object.keys(updatedFields).forEach((key) => {
      if (updatedFields[key] !== undefined && updatedFields[key] !== "") {
        (address as any)[key] = updatedFields[key];
      }
    });

    await address!.save();

    return { message: "Address edited successfully", updatedAddress: address };
  } catch (error) {
    console.error("Failed to edit address:", error);
    return { statusCode: 500, message: "Internal Server Error" };
  }
});
