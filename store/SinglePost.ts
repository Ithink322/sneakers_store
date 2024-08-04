import { defineStore } from "pinia";

interface PostState {
  id: number | null;
}

export const useSinglePostStore = defineStore("postStore", {
  state: (): PostState => ({
    id: null,
  }),
  actions: {
    setPost(id: number) {
      this.id = id;
    },
  },
  persist: {
    key: "single-post-store",
    storage: typeof window !== "undefined" ? localStorage : undefined,
    paths: ["id"],
  },
});
