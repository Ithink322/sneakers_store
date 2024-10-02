import { H3Event } from "h3";
import connectToDB from "@/utils/connectToDB";
import BlogPost from "@/server/models/BlogPost";

export default defineEventHandler(async (event: H3Event) => {
  await connectToDB();

  const body = await readBody(event);

  const newPost = new BlogPost(body);

  try {
    const savedPost = await newPost.save();
    return { success: true, post: savedPost };
  } catch (error) {
    console.error("Error saving post:", error);
    return { success: false, message: "Failed to create post" };
  }
});
