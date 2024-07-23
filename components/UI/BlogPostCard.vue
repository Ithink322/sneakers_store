<template>
  <NuxtLink
    class="link"
    :to="{
      path: `/blog/${routeCategory}/${slugify(props.post.title)}`,
    }"
  >
    <div class="post-card card">
      <img :src="post.hero" alt="" class="card__hero" />
      <div class="card__body">
        <div class="card__category category">
          <span class="category__text">{{ post.category }}</span>
        </div>
        <span class="card__title">{{ post.title }}</span>
        <div class="card__content">
          <button class="card__btn-more">Подробнее</button>
          <span class="card__date">{{ post.date }}</span>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { slugify } from "@/utils/helpers";
import { usePostsStore } from "@/store/Posts";
import type { BlogPost } from "@/types/BlogPosts";
const props = defineProps({
  post: {
    type: Object as () => BlogPost,
    required: true,
  },
});

const store = usePostsStore();
const routeCategory = computed(() => store.routeCategory);
</script>

<style lang="scss" scoped>
@import "@/assets/App.scss";
.card {
  position: relative;
  min-height: 387px;
  max-height: 480px;
  height: auto;
  cursor: pointer;

  &__hero {
    width: 100%;
    min-height: 387px;
    max-height: 480px;
    object-fit: cover;
  }
  &__body {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 1.25rem 1.25rem 1.875rem 1.25rem;
  }
  &__title {
    display: block;
    position: relative;
    font-family: "Pragmatica Medium";
    font-size: 1.313rem;
    color: #fff;
    top: 4rem;
    transition: color 0.3s ease;
  }
  &:hover .card__title {
    color: $Dark-Orange;
  }
  &__content {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0rem 1.25rem 1.875rem 1.25rem;
  }
  &__btn-more {
    @include btn;
    font-family: "Pragmatica Medium";
    font-size: 0.938rem;
    color: #fff;
    line-height: 230%;
    border-bottom: 2px solid #ffffff;
  }
  &__date {
    display: block;
    font-family: "Pragmatica Book";
    font-size: 0.688rem;
    color: #fff;
  }
}
.category {
  position: absolute;
  padding: 0.625rem;
  background-color: #dbe5eb;
  width: fit-content;

  &__text {
    font-family: "Pragmatica Medium";
    font-size: 0.75rem;
  }
}
.link {
  color: $Dark-Black;
}
/* 1200px = 75em */
@media (min-width: 75em) {
  .card {
    min-height: 342px;
    height: 342px;

    &__hero {
      min-height: 342px;
      height: 342px;
    }
  }
}
</style>
