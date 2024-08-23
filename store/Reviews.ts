import { defineStore } from "pinia";
import type { NewReview } from "@/types/NewReview";
import type { RetrievedReview } from "@/types/RetrievedReview";
import axios from "axios";

interface ReviewsState {
  allReviews: RetrievedReview[];
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
    paginatedReviews(state): RetrievedReview[] {
      const start = (state.currentPage - 1) * state.reviewsPerPage;
      const end = start + state.reviewsPerPage;
      return state.allReviews.slice(start, end);
    },
  },
  actions: {
    async fetchReviews(productId: number) {
      try {
        const response = await axios.get(
          `/api/reviews/get?productId=${productId}`
        );
        if (response.data.status === "success") {
          this.setAllReviews(response.data.reviews || []);
        } else {
          console.error("Failed to fetch reviews:", response.data.error);
          this.setAllReviews([]);
        }
      } catch (error) {
        console.error("Error fetching reviews:", error);
        this.setAllReviews([]);
      }
    },
    async addReview(review: NewReview) {
      try {
        const response = await axios.post("/api/reviews/add", review);
        if (response.data.status === "success") {
          this.allReviews.push(response.data.review);
        } else {
          console.error("Failed to add review:", response.data.error);
        }
      } catch (error) {
        console.error("Error adding review:", error);
      }
    },
    averageRating(): number {
      if (this.allReviews.length === 0) {
        return 0;
      }

      const totalRating = this.allReviews.reduce(
        (acc, review) => acc + review.rating,
        0
      );
      return totalRating / this.allReviews.length;
    },
    setAllReviews(reviews: RetrievedReview[]) {
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
