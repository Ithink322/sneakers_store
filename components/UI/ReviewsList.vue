<template>
  <div class="review-list">
    <UIReviewItem
      v-for="review in paginatedReviews"
      :review="review"
      :key="review._id"
    >
    </UIReviewItem>
  </div>
</template>

<script setup lang="ts">
import { useReviewsStore } from "@/store/Reviews";

const store = useReviewsStore();
const paginatedReviews = computed(() => store.paginatedReviews);
</script>

<style lang="scss" scoped>
.review-list {
  display: flex;
  flex-direction: column;
  gap: 3.75rem;
}
</style>
