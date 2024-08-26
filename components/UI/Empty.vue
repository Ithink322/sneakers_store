<template>
  <div class="empty">
    <img :src="hero" alt="" class="empty__hero" :style="{ width: iconWidth }" />
    <h2 class="empty__title">{{ title }}</h2>
    <span class="empty__text" v-html="text"></span>
    <UIButton
      :to="{
        path: '/catalog',
        query: { page: currentCatalogPage },
      }"
      :content="'Перейти в каталог'"
      :bodyBgColor="'#ff6915'"
      :arrowBgColor="'#fb5a00'"
    ></UIButton>
  </div>
</template>

<script setup lang="ts">
import { useProductsStore } from "@/store/Products";

defineProps({
  hero: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  iconWidth: {
    type: String,
    required: true,
  },
});

const catalogStore = useProductsStore();
const currentCatalogPage = computed(() => catalogStore.currentPage);
</script>

<style lang="scss">
@import "@/assets/App.scss";
.empty {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__hero {
    height: 86px;
  }
  &__title {
    text-align: center;
    font-family: "Pragmatica Medium";
    font-size: 1.188rem;
    color: $Light-Black;
    margin: 1.5rem 0 0.688rem 0;
  }
  &__text {
    text-align: center;
    font-family: "Pragmatica Book";
    font-size: 0.875rem;
    line-height: 22px;
    color: #383838;
    margin-bottom: 1.5rem;
  }
  &__text-cart-br--from1200px {
    display: none;
  }
}
/* 768px = 48em */
@media (min-width: 48em) {
  .empty {
    &__title {
      margin: 1.25rem 0;
    }
    &__text {
      margin-bottom: 1.25rem;
    }
  }
}
/* 1200px = 75em */
@media (min-width: 75em) {
  .empty {
    &__title {
      font-size: 2.188rem;
    }
    &__text {
      font-size: 0.938rem;
      margin-bottom: 1.875rem;
    }
    &__text-cart-br--from1200px {
      display: block;
    }
  }
}
</style>
