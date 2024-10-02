import { defineEventHandler, readBody } from "h3";
import connectToDB from "@/utils/connectToDB";
import BlogPost from "@/server/models/BlogPost";
import type { BlogPost as BlogPostType } from "@/types/BlogPosts";

export default defineEventHandler(async (event) => {
  await connectToDB();

  const updatedPost: BlogPostType = await readBody(event);

  try {
    const post = await BlogPost.findOneAndUpdate(
      { id: Number(updatedPost.id) },
      updatedPost,
      { new: true }
    );

    if (post) {
      return post;
    } else {
      return { error: "Post not found" };
    }
  } catch (error) {
    console.error("Error updating post:", error);
    return { error: "Failed to update post" };
  }
});
