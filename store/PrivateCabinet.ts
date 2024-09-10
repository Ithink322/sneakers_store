import { defineStore } from "pinia";
import type { Address } from "@/types/Address";
import axios from "axios";

export const usePrivateCabinetStore = defineStore("privateCabinet", {
  state: () => ({
    activeBtn: 1,
    addressData: null as Address | null,
  }),
  actions: {
    setActiveBtn(i: number) {
      this.activeBtn = i;
    },
    async addAddress(address: {
      fio: string;
      companyName?: string;
      region: string;
      city: string;
      street: string;
      index: string;
      houseNum: string;
    }) {
      try {
        const userId = localStorage.getItem("userId") as string;
        const number = localStorage.getItem("number") as string;
        const response = await axios.post("/api/address/add", {
          ...address,
          userId: userId,
          number: number,
        });
      } catch (error) {
        console.error("Failed to add an address:", error);
      }
    },
    async fetchAddress() {
      try {
        const userId = localStorage.getItem("userId") as string;

        const response = await axios.get(`/api/address/get?userId=${userId}`);
        if (response.data.success) {
          this.addressData = response.data.address;
        } else {
          console.error("Failed to fetch address:", response.data.message);
        }
      } catch (error) {
        console.error("An error occurred while fetching the address:", error);
      }
    },
  },
  persist: {
    key: "private-cabinet-store",
    storage: typeof window !== "undefined" ? localStorage : undefined,
    paths: ["activeBtn"],
  },
});
