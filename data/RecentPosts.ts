import { blogPosts } from "@/data/Blogposts";
import type { BlogPost } from "@/types/BlogPosts";
import type { Hero } from "@/types/RecentPosts";

const recentPosts: BlogPost[] = blogPosts.slice(-3);

export const heroes: Hero[] = recentPosts.map((post) => ({
  id: post.id,
  hero: post.hero,
  category: post.category,
  title: post.title,
  description: post.desc,
  date: post.date,
}));
