<template>
  <UIBlogPostCard
    v-for="(post, index) in paginatedPosts"
    :key="post.id"
    :post="post"
    :style="{ gridArea: `post-${index + 1}` }"
    @editPost="editPost"
  />
</template>

<script setup lang="ts">
import { usePostsStore } from "@/store/Posts";
import type { BlogPost } from "@/types/BlogPosts";

const store = usePostsStore();
const paginatedPosts = computed(() => store.paginatedPosts);

onMounted(() => {
  store.filterPosts(store.ruCategory);
});

const emit = defineEmits(["editPost"]);
const editPost = (post: BlogPost) => {
  emit("editPost", post);
};
</script>
