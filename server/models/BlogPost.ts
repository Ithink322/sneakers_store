import mongoose, { Schema, model } from "mongoose";
import type { ContentSection, BlogPost } from "@/types/BlogPosts";

const contentSectionSchema = new Schema<ContentSection>({
  header: { type: String, required: true },
  paragraphs: { type: [String], required: true },
});

const blogPostSchema = new Schema<BlogPost>({
  id: { type: Number, required: true, unique: true },
  hero: { type: String, required: true },
  category: { type: String, required: true },
  title: { type: String, required: true },
  desc: { type: String, required: true },
  date: { type: String, required: true },
  intro: { type: String, required: true },
  sections: { type: [contentSectionSchema], required: true },
});

const BlogPost = mongoose.model("BlogPost", blogPostSchema);

export default BlogPost;
