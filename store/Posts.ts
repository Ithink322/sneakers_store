import { defineStore } from "pinia";
import type { BlogPost } from "@/types/BlogPosts";

interface PostsState {
  allPosts: BlogPost[];
  filteredPosts: BlogPost[];
  blogPage: number;
  postsPerPage: number;
  enCategory: string;
  ruCategory: string;
}

export const usePostsStore = defineStore("postStore", {
  state: (): PostsState => ({
    allPosts: [],
    filteredPosts: [],
    blogPage: 1,
    postsPerPage: 10,
    enCategory: "all-posts",
    ruCategory: "ВСЕ ПУБЛИКАЦИИ",
  }),
  getters: {
    totalPages(state): number {
      return Math.ceil(state.filteredPosts.length / state.postsPerPage);
    },
    paginatedPosts(state): BlogPost[] {
      const start = (state.blogPage - 1) * state.postsPerPage;
      const end = start + state.postsPerPage;
      return state.filteredPosts.slice(start, end);
    },
  },
  actions: {
    setAllPosts(posts: BlogPost[]) {
      this.allPosts = posts;
      this.filteredPosts = posts;
    },
    filterPosts(category: string) {
      this.blogPage = 1;
      if (category === "ВСЕ ПУБЛИКАЦИИ") {
        this.filteredPosts = this.allPosts;
      } else {
        this.filteredPosts = this.allPosts.filter(
          (post) => post.bannerText.toLowerCase() === category.toLowerCase()
        );
      }
    },
    setPage(page: number) {
      this.blogPage = page;
    },
    setEnCategory(category: string) {
      this.enCategory = category;
    },
    setRuCategory(category: string) {
      this.ruCategory = category;
    },
  },
});
