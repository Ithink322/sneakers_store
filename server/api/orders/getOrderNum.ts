import { defineEventHandler } from "h3";
import Order from "@/server/models/Order";
import connectToDB from "@/utils/connectToDB";

export default defineEventHandler(async (event) => {
  await connectToDB();

  try {
    const orders = await Order.find().exec();
    if (orders.length === 0) {
      return { status: "success", lastOrderNum: "#0" };
    }

    const sortedOrders = orders.sort((a, b) => {
      const numA = parseInt(a.orderNum.replace("#", ""));
      const numB = parseInt(b.orderNum.replace("#", ""));
      return numB - numA;
    });
    const lastOrderNum = sortedOrders[0].orderNum;

    return { status: "success", lastOrderNum: lastOrderNum };
  } catch (error) {
    return {
      status: "error",
      message: "Failed to fetch last order number",
      error,
    };
  }
});
