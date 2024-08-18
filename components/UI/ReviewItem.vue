<template>
  <div class="review-list__item">
    <span class="review-list__username">{{ review.username }}</span>
    <div class="review-list__container">
      <NuxtRating
        :ratingSize="14"
        :ratingSpacing="4"
        :ratingStep="0.5"
        :activeColor="'#454A4C'"
        :ratingValue="review.rating"
        :borderColor="'#454A4C'"
      />
      <span class="review-list__date">{{ review.date }}</span>
    </div>
    <p class="review-list__text">{{ review.text }}</p>
    <div class="review-list__content">
      <img
        class="review-list__img"
        :src="`/imgs/${img}`"
        alt="review image"
        v-for="(img, index) in review.imgs"
        :key="index"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Review } from "@/types/Review";
const props = defineProps<{
  review: Review;
}>();
</script>

<style lang="scss" scoped>
.review-list {
  &__item {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 0.438rem;

    &::after {
      content: "";
      position: absolute;
      height: 1px;
      bottom: -2rem;
      background-color: #d8d8d8;
      width: 100%;
    }
  }
  &__username {
    font-family: "Pragmatica Book";
    font-size: 1.188rem;
    color: #2f2f2f;
  }
  &__container {
    display: flex;
    gap: 0.938rem;
  }
  &__date {
    font-family: "Pragmatica Book";
    font-size: 0.75rem;
    color: #5e5e5e;
  }
  &__text {
    font-family: "Pragmatica Book";
    font-size: 1rem;
    color: #363636;
    line-height: 25px;
    margin: 0;
  }
  &__content {
    display: flex;
    flex-wrap: wrap;
    gap: 0.438rem;
    margin-top: 0.625rem;
  }
  &__img {
    width: 100px;
    height: 100px;
    flex-shrink: 0;
  }
}
</style>
