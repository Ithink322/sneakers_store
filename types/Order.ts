import type { Address } from "@/types/Address";
export interface Order {
  userId: string;
  orderNum: string;
  orderDate: string;
  orderState: string;
  cart: Object;
  productCounts: { [key: string]: number };
  discountedSum: string;
  delivery: string;
  payment: string;
  address: Address;
}
