import { defineStore } from "pinia";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import type { Order } from "@/types/Order";
import type { Address } from "@/types/Address";
import { useCartStore } from "@/store/Cart";
import axios from "axios";

interface OrderState {
  selectedDelivery: string | null;
  selectedPayment: string | null;
  orderDate: string | null;
  orderNumber: string;
  orders: Order[];
}

export const useOrderStore = defineStore("orderStore", {
  state: (): OrderState => ({
    selectedDelivery: null,
    selectedPayment: null,
    orderDate: null,
    orderNumber: "#1",
    orders: [],
  }),
  getters: {
    getCart: (state) => (orderNum: string) => {
      const order = state.orders.find((order) => order.orderNum === orderNum);
      return order ? order.cart : [];
    },
    getCount: (state) => {
      return (
        orderNum: string,
        productId: number,
        chosenColor: string,
        chosenSize: number
      ) => {
        const order = state.orders.find((order) => order.orderNum === orderNum);
        if (!order) return 0;

        const key = `${productId}-${chosenColor}-${chosenSize}`;
        return order.productCounts[key] || 0;
      };
    },
    formattedOrderDate(): string {
      if (!this.orderDate) return "";

      try {
        const date = new Date(this.orderDate);
        if (isNaN(date.getTime())) throw new Error("Invalid date");
        return format(date, "d MMMM yyyy", { locale: ru });
      } catch (error) {
        console.error("Error formatting order date:", error);
        return "Invalid date";
      }
    },
    discountedTotalSum(): number {
      const cartStore = useCartStore();
      return cartStore.totalSum - cartStore.discountSubTotal;
    },
    discountedSum(): string {
      return (
        this.discountedTotalSum
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " ₽"
      );
    },
  },
  actions: {
    async submitOrder(delivery: string, payment: string, address: Address) {
      this.selectedDelivery = delivery;
      this.selectedPayment = payment;
      this.orderDate = new Date().toISOString();

      try {
        const { data: lastOrderData } = await axios.get(
          "/api/orders/getOrderNum"
        );

        const lastOrderNum = lastOrderData.lastOrderNum || "#0";
        console.log("lastOrderNum:", lastOrderNum);
        const newOrderNumber = parseInt(lastOrderNum.replace("#", "")) + 1;
        this.orderNumber = `#${newOrderNumber}`;
        localStorage.setItem("orderNumber", this.orderNumber);

        const userId = localStorage.getItem("userId");
        const cartStore = useCartStore();
        const cart = JSON.parse(JSON.stringify(cartStore.cart));
        const productCounts = { ...cartStore.productCounts };

        const orderData = {
          userId: userId,
          orderNum: this.orderNumber,
          orderDate: this.orderDate,
          orderState: "ОБРАБОТКА",
          cart: cart,
          productCounts: productCounts,
          discountedSum: this.discountedSum,
          delivery: this.selectedDelivery,
          payment: this.selectedPayment,
          address: {
            userId: address.userId,
            fio: address.fio,
            companyName: address.companyName,
            region: address.region,
            city: address.city,
            street: address.street,
            index: address.index,
            houseNum: address.houseNum,
            number: address.number,
          },
        };

        const response = await axios.post("/api/orders/add", orderData);
        if (response.data.success === "success") {
          console.log("Order saved successfully:", response.data.order);
        } else {
          /* console.error("Order saving failed:", response.data.message); */
        }
      } catch (error) {
        console.error("Error submitting order:", error);
      }
    },
    async fetchOrders() {
      try {
        const userId = localStorage.getItem("userId");
        const response = await axios.get(`/api/orders/get?userId=${userId}`);
        if (response.data.status === "success") {
          this.orders = response.data.orders;
        } else {
          console.error("Failed to fetch orders:", response.data.message);
        }
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    },
  },
  persist: {
    key: "order-store",
    storage: typeof window !== "undefined" ? localStorage : undefined,
    paths: [
      "selectedDelivery",
      "selectedPayment",
      "orderDate",
      "orderNumber",
      "orders",
    ],
  },
});
