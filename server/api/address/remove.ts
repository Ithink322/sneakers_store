import { defineEventHandler, readBody } from "h3";
import AddressModel from "@/server/models/Address";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    await AddressModel.deleteOne({ userId: body.userId });

    return { message: "Address removed successfully" };
  } catch (error) {
    console.error("Failed to remove address:", error);
    return { statusCode: 500, message: "Internal Server Error" };
  }
});
