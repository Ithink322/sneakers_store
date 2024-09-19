import { defineEventHandler, getQuery } from "h3";
import Order from "@/server/models/Order";
import connectToDB from "@/utils/connectToDB";

export default defineEventHandler(async (event) => {
  await connectToDB();

  try {
    const query = getQuery(event);
    const { userId } = query;

    if (!userId) {
      return { status: "error", message: "User ID is required" };
    }

    const orders = await Order.find({ userId }).sort({ orderDate: -1 });

    return { status: "success", orders };
  } catch (error) {
    return { status: "error", message: "Failed to fetch orders", error };
  }
});
