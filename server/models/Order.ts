import { Schema, model } from "mongoose";
import type { Order } from "@/types/Order";

const OrderSchema = new Schema<Order>({
  userId: { type: String, required: true },
  orderNum: { type: String, required: true },
  orderDate: { type: String, required: true },
  orderState: { type: String, required: true },
  cart: { type: [Object], required: true },
  productCounts: { type: Map, of: Number, required: true },
  discountedSum: { type: String, required: true },
  delivery: { type: String, required: true },
  payment: { type: String, required: true },
  address: { type: Object, required: true },
});

const OrderModel = model<Order>("Order", OrderSchema);

export default OrderModel;
