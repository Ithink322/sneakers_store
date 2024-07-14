import { usePostsStore } from "@/store/Posts";
export default defineNuxtRouteMiddleware((to, next) => {
  const categories = ["all-posts", "news", "articles", "advices", "overviews"];
  const category = to.params.category || "all-posts";
  const page = parseInt(to.query.page as string) || 1;

  const store = usePostsStore();
  const totalPages = computed(() => store.totalPages);

  // Check if the category is valid (or default to 'all-posts')
  if (!categories.includes(category)) {
    throw createError({
      statusCode: 404,
      message: "Category not found",
    });
  }

  // Check if the page number is valid
  if (isNaN(page) || page < 1 || page > totalPages.value) {
    throw createError({
      statusCode: 404,
      message: "Invalid page number",
    });
  }

  next();
});
