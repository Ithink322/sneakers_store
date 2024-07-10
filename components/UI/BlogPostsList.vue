<template>
  <UIBlogPostCard
    v-for="(post, index) in paginatedPosts"
    :key="post.id"
    :post="post"
    :style="{ gridArea: `post-${index + 1}` }"
  />
</template>

<script setup lang="ts">
import { usePostsStore } from "@/store/Posts";

const store = usePostsStore();
const paginatedPosts = computed(() => store.paginatedPosts);

onMounted(() => {
  store.filterPosts(store.ruCategory);
  /* console.log("paginatedPosts.value:", paginatedPosts.value); */
});

useHead({
  title: `Blog | ${store.enCategory}`,
  meta: [
    {
      name: "description",
      content:
        "Explore our latest blog posts. Find helpful articles, advices, and more!",
    },
  ],
});
</script>
