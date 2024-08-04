import { defineStore } from "pinia";

interface ProductState {
  id: number | null;
}

export const useSingleProductStore = defineStore("productStore", {
  state: (): ProductState => ({
    id: null,
  }),
  actions: {
    setProduct(id: number) {
      this.id = id;
    },
  },
  persist: {
    key: "single-product-store",
    storage: typeof window !== "undefined" ? localStorage : undefined,
    paths: ["id"],
  },
});
