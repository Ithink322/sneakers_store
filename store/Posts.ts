import { defineStore } from "pinia";
import type { BlogPost } from "@/types/BlogPosts";

interface PostsState {
  allPosts: BlogPost[];
  filteredPosts: BlogPost[];
  currentPage: number;
  postsPerPage: number;
  enCategory: string;
  ruCategory: string;
  isDropdownInteracted: boolean;
  title: string;
  translateValue: number;
}

export const usePostsStore = defineStore("postStore", {
  state: (): PostsState => ({
    allPosts: [],
    filteredPosts: [],
    currentPage: 1,
    postsPerPage: 10,
    enCategory: "all-posts",
    ruCategory: "Рубрики",
    isDropdownInteracted: false,
    title: "Блог",
    translateValue: 0,
  }),
  getters: {
    totalPages(state): number {
      return Math.ceil(state.filteredPosts.length / state.postsPerPage);
    },
    paginatedPosts(state): BlogPost[] {
      const start = (state.currentPage - 1) * state.postsPerPage;
      const end = start + state.postsPerPage;
      return state.filteredPosts.slice(start, end);
    },
    getTitle(state): string {
      if (!state.isDropdownInteracted) {
        return "Блог";
      }
      return (
        state.ruCategory.charAt(0).toUpperCase() +
        state.ruCategory.slice(1).toLowerCase()
      );
    },
  },
  actions: {
    setAllPosts(posts: BlogPost[]) {
      this.allPosts = posts;
    },
    filterPosts(category: string) {
      if (category === "ВСЕ ПУБЛИКАЦИИ") {
        this.filteredPosts = this.allPosts;
      } else {
        this.filteredPosts = this.allPosts.filter(
          (post) => post.category.toLowerCase() === category.toLowerCase()
        );
      }
    },
    setPage(page: number) {
      this.currentPage = page;
    },
    setCategory(enCategory: string, ruCategory: string) {
      this.enCategory = enCategory;
      this.ruCategory = ruCategory;
      this.title = this.getTitle;
    },
    updateTranslateValue(newTranslateValue: number) {
      this.translateValue = newTranslateValue;
    },
    resetTranslateValue() {
      this.translateValue = 0;
    },
  },
  persist: {
    key: "blog-store",
    storage: typeof window !== "undefined" ? localStorage : undefined,
    paths: [
      "currentPage",
      "enCategory",
      "ruCategory",
      "title",
      "isDropdownInteracted",
    ],
  },
});
