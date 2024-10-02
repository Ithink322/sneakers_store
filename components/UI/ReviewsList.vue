<template>
  <div class="review-list">
    <UIReviewItem
      @reviewRemoved="removeReviewFromList"
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

const route = useRoute();
/* onMounted(() => {
  store.fetchReviews(Number(route.params.id));
}); */
const removeReviewFromList = (reviewId: string) => {
  store.setAllReviews(
    store.allReviews.filter((review) => review._id !== reviewId)
  );
  store.fetchReviews(Number(route.params.id));
};
</script>

<style lang="scss" scoped>
.review-list {
  display: flex;
  flex-direction: column;
  gap: 3.75rem;
}
</style>
