import { defineEventHandler, getQuery } from "h3";
import AddressModel from "@/server/models/Address";
import connectToDB from "@/utils/connectToDB";

export default defineEventHandler(async (event) => {
  await connectToDB();

  const query = getQuery(event);
  const userId = query.userId;

  try {
    const address = await AddressModel.findOne({ userId });

    if (address) {
      return { success: true, address };
    } else {
      return {
        success: false,
        message: "No address found for the given user.",
      };
    }
  } catch (error) {
    return { success: false, message: "Failed to fetch the address.", error };
  }
});
