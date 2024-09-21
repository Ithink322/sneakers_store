import { defineEventHandler, readBody } from "h3";
import Order from "@/server/models/Order";
import connectToDB from "@/utils/connectToDB";

export default defineEventHandler(async (event) => {
  await connectToDB();
  const body = await readBody(event);

  try {
    const productCounts = { ...body.productCounts };
    const newOrder = new Order({
      userId: body.userId,
      orderNum: body.orderNum,
      orderDate: body.orderDate,
      orderState: "ОБРАБОТКА",
      cart: body.cart,
      productCounts: productCounts,
      discountedSum: body.discountedSum,
      delivery: body.delivery,
      payment: body.payment,
      address: body.address,
    });

    const savedOrder = await newOrder.save();
    console.log("Order saved successfully:", savedOrder);

    return { status: "success", order: savedOrder };
  } catch (error) {
    console.error("Error while saving order to MongoDB:", error);
    return { status: "error", error };
  }
});
