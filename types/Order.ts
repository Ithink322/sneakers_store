export interface Order {
  userId: string;
  orderNum: string;
  orderDate: string;
  cart: Object;
  discountedSum: string;
  delivery: string;
  payment: string;
}
