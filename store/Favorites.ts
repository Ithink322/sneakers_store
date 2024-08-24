import { defineStore } from "pinia";
import type { Product } from "@/types/Product";

interface ProductsState {
  favorites: Product[];
  currentPage: number;
  productsPerPage: number;
  translateValue: number;
}

export const useFavoritesStore = defineStore("favoritesStore", {
  state: (): ProductsState => ({
    favorites: [],
    currentPage: 1,
    productsPerPage: 18,
    translateValue: 0,
  }),
  getters: {
    totalPages(state): number {
      return Math.ceil(state.favorites.length / state.productsPerPage);
    },
    paginatedProducts(state): Product[] {
      const start = (state.currentPage - 1) * state.productsPerPage;
      const end = start + state.productsPerPage;
      return state.favorites.slice(start, end);
    },
  },
  actions: {
    addToFavorites(product: Product) {
      const exists = this.favorites.some((p) => p.id === product.id);
      if (!exists) {
        this.favorites.push(product);
      }
    },
    removeFavorite(productId: number) {
      this.favorites = this.favorites.filter((p) => p.id !== productId);
    },
    isFavorite(productId: number) {
      return this.favorites.some((p) => p.id === productId);
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
    key: "favorites-store",
    storage: typeof window !== "undefined" ? localStorage : undefined,
    paths: ["favorites", "currentPage", "productsPerPage"],
  },
});
