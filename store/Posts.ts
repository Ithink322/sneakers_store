import { defineStore } from "pinia";
import type { BlogPost } from "@/types/BlogPosts";
import axios from "axios";

interface PostsState {
  allPosts: BlogPost[];
  filteredPosts: BlogPost[];
  currentPage: number;
  postsPerPage: number;
  routeCategory: string;
  ruCategory: string;
  title: string;
  translateValue: number;
}

export const usePostsStore = defineStore("postsStore", {
  state: (): PostsState => ({
    allPosts: [],
    filteredPosts: [],
    currentPage: 1,
    postsPerPage: 10,
    routeCategory: "все-публикации",
    ruCategory: "Все публикации",
    title: "Все публикации",
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
    setCategory(routeCategory: string, ruCategory: string) {
      this.routeCategory = routeCategory;
      this.ruCategory = ruCategory;
      this.title = this.getTitle;
    },
    updateTranslateValue(newTranslateValue: number) {
      this.translateValue = newTranslateValue;
    },
    resetTranslateValue() {
      this.translateValue = 0;
    },
    async fetchPosts() {
      try {
        const { data } = await axios.get("/api/blog/getPosts");
        this.setAllPosts(data);
        this.filterPosts(this.ruCategory);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      }
    },
    async addPost(postData: BlogPost) {
      try {
        const response = await axios.post("/api/blog/addPost", postData);

        if (response.data.success) {
          const createdPost = response.data.post;
          this.allPosts.push(createdPost);
          console.log("Post added successfully:", createdPost);
        } else {
          console.error("Failed to create post:", response.data.message);
        }
      } catch (error) {
        console.error("Error creating post:", error);
      }
    },
    async editPost(updatedPost: BlogPost) {
      try {
        const response = await axios.put("/api/blog/editPost", updatedPost);
        if (response.data.error) {
          throw new Error(response.data.error);
        }

        const index = this.allPosts.findIndex(
          (post) => post.id === updatedPost.id
        );
        if (index !== -1) {
          this.allPosts[index] = { ...response.data };
        } else {
          console.error("Post not found in store.");
        }
      } catch (error) {
        console.error("Error updating post:", error);
        throw error;
      }
    },
    async removePost(id: number) {
      try {
        const response = await axios.post("/api/blog/removePost", {
          id: Number(id),
        });

        if (response.data.success) {
          this.allPosts = this.allPosts.filter((post) => post.id !== id);
          this.filterPosts(this.ruCategory);
          const currentTotalPages = this.totalPages;
          if (this.currentPage > currentTotalPages && currentTotalPages > 0) {
            this.currentPage = currentTotalPages;
          }
        } else {
          console.error(response.data.message);
        }
      } catch (error) {
        console.error("Error deleting post:", error);
      }
    },
  },
  persist: {
    key: "blog-store",
    storage: typeof window !== "undefined" ? localStorage : undefined,
    paths: [
      "allPosts",
      "filteredPosts",
      "currentPage",
      "routeCategory",
      "ruCategory",
      "title",
      "isDropdownInteracted",
    ],
  },
});
