import type { CartProduct } from "@/types/CartProduct";
import type { Address } from "@/types/Address";
export interface Order {
  userId: string;
  orderNum: string;
  orderDate: string;
  orderState: string;
  cart: CartProduct[];
  productCounts: { [key: string]: number };
  discountedSum: string;
  delivery: string;
  payment: string;
  address: Address;
}
