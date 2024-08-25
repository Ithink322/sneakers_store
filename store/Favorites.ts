import { defineStore } from "pinia";
import type { Product } from "@/types/Product";
import type { Favorite } from "@/types/Favorite";
import axios from "axios";

interface ProductsState {
  favorites: Favorite[];
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
    paginatedProducts(state): Favorite[] {
      const start = (state.currentPage - 1) * state.productsPerPage;
      const end = start + state.productsPerPage;
      return state.favorites.slice(start, end);
    },
  },
  actions: {
    async fetchFavorites(userId: string) {
      const response = await axios.get(`/api/favorites/get`, {
        params: { userId },
      });
      this.favorites = response.data;
    },
    async addToFavorites(product: Product) {
      const userId = localStorage.getItem("userId") as string;

      const favorite: Favorite = {
        userId: userId!,
        productId: product.id,
        hero: product.hero,
        discount: product.discount,
        heroes: product.heroes,
        gender: product.gender,
        title: product.title,
        desc: product.desc,
        specs: product.specs,
        colors: product.colors,
        sizes: product.sizes,
        currentPrice: product.currentPrice,
        previousPrice: product.previousPrice,
        categoryBackgroundColor: product.categoryBackgroundColor,
        category: product.category,
        averageRating: product.averageRating,
      };

      const exists = this.favorites.some(
        (p) => p.productId === favorite.productId
      );
      if (!exists) {
        await axios.post("/api/favorites/add", favorite);
        this.favorites.push(favorite);
      }
    },
    async removeFavorite(productId: number) {
      const userId = localStorage.getItem("userId") as string;
      await axios.post("/api/favorites/remove", { productId, userId });
      this.favorites = this.favorites.filter((p) => p.productId !== productId);
    },
    isFavorite(productId: number) {
      return this.favorites.some((p) => p.productId === productId);
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
