import { defineEventHandler } from "h3";
import connectToDB from "@/utils/connectToDB";
import BlogPost from "@/server/models/BlogPost";

export default defineEventHandler(async (event) => {
  try {
    await connectToDB();
    const blogPosts = await BlogPost.find();

    return blogPosts;
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to fetch posts",
    });
  }
});
