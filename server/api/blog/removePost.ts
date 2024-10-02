import { H3Event } from "h3";
import connectToDB from "@/utils/connectToDB";
import BlogPost from "@/server/models/BlogPost";

export default defineEventHandler(async (event: H3Event) => {
  await connectToDB();

  const { id } = await readBody(event);

  try {
    const result = await BlogPost.findOneAndDelete({ id: Number(id) });

    if (result) {
      return { success: true };
    } else {
      return { success: false, message: "Post not found" };
    }
  } catch (error) {
    console.error("Error deleting post:", error);
    return { success: false, message: "Failed to delete post" };
  }
});
