import type { BlogPost } from "@/types/BlogPosts";
import type { Hero } from "@/types/RecentPosts";
import { usePostsStore } from "@/store/Posts";

const postsStore = usePostsStore();
const allPosts = computed(() => postsStore.allPosts);
const recentPosts: BlogPost[] = allPosts.value.slice(-3);

export const heroes: Hero[] = recentPosts.map((post) => ({
  id: post.id,
  hero: post.hero,
  category: post.category,
  title: post.title,
  desc: post.desc,
  date: post.date,
}));
