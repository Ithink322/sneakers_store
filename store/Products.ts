import { defineStore } from "pinia";
import type { Product } from "@/types/Product";

interface ProductsState {
  allProducts: Product[];
  filteredProducts: Product[];
  currentPage: number;
  productsPerPage: number;
  translateValue: number;
}

export const useProductsStore = defineStore("productsStore", {
  state: (): ProductsState => ({
    allProducts: [],
    filteredProducts: [],
    currentPage: 1,
    productsPerPage: 18,
    translateValue: 0,
  }),
  getters: {
    totalPages(state): number {
      return Math.ceil(state.filteredProducts.length / state.productsPerPage);
    },
    paginatedProducts(state): Product[] {
      const start = (state.currentPage - 1) * state.productsPerPage;
      const end = start + state.productsPerPage;
      return state.filteredProducts.slice(start, end);
    },
  },
  actions: {
    setAllProducts(products: Product[]) {
      this.allProducts = products;
    },
    filterProducts(products: Product[] /* category: string */) {
      /* if (category === "ВСЕ ПУБЛИКАЦИИ") {
        this.filteredPosts = this.allPosts;
      } else {
        this.filteredPosts = this.allPosts.filter(
          (post) => post.category.toLowerCase() === category.toLowerCase()
        );
      } */
      this.filteredProducts = products;
    },
    setPage(page: number) {
      this.currentPage = page;
    },
    updateTranslateValue(newTranslateValue: number) {
      this.translateValue = newTranslateValue;
    },
    resetTranslateValue() {
      this.translateValue = 0;
    },
  },
  persist: {
    key: "catalog-store",
    storage: typeof window !== "undefined" ? localStorage : undefined,
    paths: ["currentPage"],
  },
});
