<template>
  <div class="recent-posts-card card slide">
    <img :src="hero.hero" alt="" class="card__hero" />
    <div class="card__banner banner">
      <span class="banner__text">{{ hero.bannerText }}</span>
    </div>
    <span class="card__title">{{ hero.title }}</span>
    <div class="card__desc desc">
      <img src="/imgs/plus-gray.svg" alt="" />
      <div class="desc__text">{{ hero.description }}</div>
    </div>
    <div class="card__content">
      <button class="card__btn-more">Подробнее</button>
      <span class="card__date">{{ hero.date }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Hero {
  id: number;
  hero: string;
  bannerText: string;
  title: string;
  description: string;
  date: string;
}

const props = defineProps<{ hero: Hero }>();
</script>

<style lang="scss" scoped>
@import "@/assets/App.scss";
.card {
  position: relative;
  padding: 1.25rem 1.25rem 1.875rem 1.25rem;
  flex-shrink: 0;
  width: 89%;
  max-width: 296px;
  height: 387px;
  cursor: pointer;

  &__hero {
    position: absolute;
    top: 0rem;
    left: 0rem;
    width: 100%;
    height: 387px;
    object-fit: cover;
  }
  &__title {
    display: block;
    position: relative;
    font-family: "Pragmatica Medium";
    font-size: 1.313rem;
    color: #fff;
    z-index: 2;
    top: 4rem;
    transition: color 0.3s ease;
  }
  &__desc {
    display: none;
  }
  &__content {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 2;
    bottom: -14rem;
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
    font-family: "Pragmatica Book";
    font-size: 0.688rem;
    color: #fff;
  }
}
.card:hover .card__title {
  color: $Dark-Orange;
}
.banner {
  position: absolute;
  padding: 0.625rem;
  background-color: #dbe5eb;
  width: fit-content;
  z-index: 2;

  &__text {
    font-family: "Pragmatica Medium";
    font-size: 0.75rem;
  }
}

/* 1200px = 75em */
@media (min-width: 75em) {
  .card {
    padding: 2.5rem 2.5rem 2.75rem 2.5rem;
    max-width: 670px;
    height: 461px;

    &__hero {
      height: 461px;
    }
    &__title {
      font-size: 1.688rem;
      padding-right: 10rem;
    }
    &__content {
      bottom: -16.7rem;
    }
    &__btn-more {
      font-size: 1.125rem;
    }
    &__date {
      font-size: 0.813rem;
    }
  }
  .desc {
    position: absolute;
    display: flex;
    align-items: flex-start;
    gap: 0.875rem;
    padding-right: 20rem;
    line-height: 180%;
    z-index: 2;
    bottom: 7rem;

    &__text {
      font-family: "Pragmatica Book";
      font-size: 1.125rem;
      color: #fff;
    }
  }
}
</style>
