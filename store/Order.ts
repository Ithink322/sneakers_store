import { defineStore } from "pinia";
import { format } from "date-fns";
import { ru } from "date-fns/locale";

interface OrderState {
  selectedDelivery: string | null;
  selectedPayment: string | null;
  orderDate: string | null;
  orderNumber: string;
}

export const useOrderStore = defineStore("orderStore", {
  state: (): OrderState => ({
    selectedDelivery: null,
    selectedPayment: null,
    orderDate: null,
    orderNumber: "#1",
  }),
  getters: {
    formattedOrderDate(): string {
      if (!this.orderDate) return "";

      const date = new Date(this.orderDate);
      return format(date, "d MMMM yyyy", { locale: ru });
    },
  },
  actions: {
    submitOrder(delivery: string, payment: string) {
      this.selectedDelivery = delivery;
      this.selectedPayment = payment;
      this.orderDate = new Date().toLocaleString();

      const currentNumber = parseInt(this.orderNumber.replace("#", "")) || 0;
      const newOrderNumber = currentNumber + 1;
      this.orderNumber = `#${newOrderNumber}`;
      localStorage.setItem("orderNumber", this.orderNumber);
    },
  },
  persist: {
    key: "order-store",
    storage: typeof window !== "undefined" ? localStorage : undefined,
    paths: ["selectedDelivery", "selectedPayment", "orderDate", "orderNumber"],
  },
});
