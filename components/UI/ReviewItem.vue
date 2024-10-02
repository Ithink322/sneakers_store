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
        :src="`${img}`"
        alt="review image"
        v-for="(img, index) in review.imgs"
        :key="index"
      />
    </div>
    <button
      v-if="isAdmin"
      @click="removeReview"
      class="review-list__remove-btn"
    >
      <svg
        width="18"
        height="20"
        viewBox="0 0 18 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 5H17M2 5L3 17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19H13C13.5304 19 14.0391 18.7893 14.4142 18.4142C14.7893 18.0391 15 17.5304 15 17L16 5M6 5V2C6 1.73478 6.10536 1.48043 6.29289 1.29289C6.48043 1.10536 6.73478 1 7 1H11C11.2652 1 11.5196 1.10536 11.7071 1.29289C11.8946 1.48043 12 1.73478 12 2V5M7 10L11 14M11 10L7 14"
          stroke="white"
          stroke-width="1.7"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import type { RetrievedReview } from "@/types/RetrievedReview";
import axios from "axios";
const props = defineProps<{
  review: RetrievedReview;
}>();

const isAdmin = ref(localStorage.getItem("isAdmin") === "true");
const emit = defineEmits(["reviewRemoved"]);
const { review } = toRefs(props);
const removeReview = async () => {
  try {
    const response = await axios.post("/api/reviews/remove", {
      reviewId: props.review._id,
    });

    if (response.data.success) {
      emit("reviewRemoved", review.value._id);
      console.log("Review deleted successfully");
    } else {
      console.error("Failed to delete review:", response.data.message);
    }
  } catch (error) {
    console.error("Error deleting review:", error);
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/App.scss";
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
  &__remove-btn {
    position: absolute;
    @include btn;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: $Dark-Black;
    right: 0;
  }
  &__remove-btn svg path {
    transition: stroke 0.3s ease;
  }
  &__remove-btn:hover svg path {
    stroke: $Dark-Orange;
  }
}
</style>
