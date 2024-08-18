import { defineStore } from "pinia";
import type { Review } from "@/types/Review";

interface ReviewsState {
  allReviews: Review[];
  currentPage: number;
  reviewsPerPage: number;
  translateValue: number;
}

export const useReviewsStore = defineStore("reviewsStore", {
  state: (): ReviewsState => ({
    allReviews: [],
    currentPage: 1,
    reviewsPerPage: 5,
    translateValue: 0,
  }),
  getters: {
    totalPages(state): number {
      return Math.ceil(state.allReviews.length / state.reviewsPerPage);
    },
    paginatedReviews(state): Review[] {
      const start = (state.currentPage - 1) * state.reviewsPerPage;
      const end = start + state.reviewsPerPage;
      return state.allReviews.slice(start, end);
    },
  },
  actions: {
    setAllReviews(reviews: Review[]) {
      this.allReviews = reviews;
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
    paths: ["currentPage", "reviewsPerPage"],
  },
});
