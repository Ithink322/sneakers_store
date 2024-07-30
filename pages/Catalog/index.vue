<template>
  <UIBreadcrumb :breadcrumbTitle="'Каталог товаров'"></UIBreadcrumb>
  <div class="titles-container">
    <h1 class="titles-container__title">Все модели</h1>
    <span class="titles-container__text">{{ totalProducts }} товаров</span>
  </div>
  <button class="filters-btn">
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 7H6M6 7C6 8.65685 7.34315 10 9 10C10.6569 10 12 8.65685 12 7C12 5.34315 10.6569 4 9 4C7.34315 4 6 5.34315 6 7ZM3 17H9M18 17H21M18 17C18 18.6569 16.6569 20 15 20C13.3431 20 12 18.6569 12 17C12 15.3431 13.3431 14 15 14C16.6569 14 18 15.3431 18 17ZM15 7H21"
        stroke="#141718"
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
    Показать фильтры
  </button>
  <button class="reset-all-btn">
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.7"
        d="M9.66937 0.226864C9.52925 0.0864247 9.33901 0.0075 9.14062 0.0075C8.94224 0.0075 8.752 0.0864247 8.61188 0.226864L4.94438 3.88686L1.27688 0.219364C1.13675 0.0789247 0.946513 0 0.748125 0C0.549737 0 0.359499 0.0789247 0.219375 0.219364C-0.073125 0.511864 -0.073125 0.984364 0.219375 1.27686L3.88687 4.94436L0.219375 8.61186C-0.073125 8.90436 -0.073125 9.37686 0.219375 9.66936C0.511875 9.96186 0.984375 9.96186 1.27688 9.66936L4.94438 6.00186L8.61188 9.66936C8.90438 9.96186 9.37687 9.96186 9.66937 9.66936C9.96187 9.37686 9.96187 8.90436 9.66937 8.61186L6.00187 4.94436L9.66937 1.27686C9.95437 0.991864 9.95437 0.511864 9.66937 0.226864Z"
        fill="#6C757D"
      />
    </svg>
    СБРОСИТЬ ВСЁ
  </button>
  <UIProductList></UIProductList>
  <UIPagination></UIPagination>
</template>

<script setup lang="ts">
useHead({
  title: "Sneakers Store - Каталог товаров | Огромный выбор моделей",
  meta: [
    {
      name: "description",
      content:
        "Sneakers Store – ваш интернет-магазин кроссовок Nike. Огромный выбор моделей для мужчин и женщин, доступные цены и быстрая доставка. Найдите свою идеальную пару Nike сегодня!",
    },
    {
      name: "keywords",
      content:
        "Nike, кроссовки Nike, купить Nike, интернет-магазин, Sneakers Store, мужские кроссовки Nike, женские кроссовки Nike, спортивная обувь Nike, доставка, цены, купить кроссовки, купить обувь, каталог кроссовок, купить спортивную обувь",
    },
  ],
});

const totalProducts = ref(0);
</script>

<style lang="scss" scoped>
@import "@/assets/App.scss";
.titles-container {
  display: flex;
  gap: 0.875rem;
  align-items: center;
  margin: 1.875rem 0;

  &__text {
    font-family: "Pragmatica Book";
    font-size: 0.813rem;
    color: #a3a3a3;
  }
}
.filters-btn {
  position: relative;
  @include btn;
  gap: 0.625rem;
  width: 100%;
  font-family: "Pragmatica Book";
  font-size: 1rem;
  padding: 1.313rem 0;

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: -0.938rem;
    right: -0.938rem;
    height: 1px;
    background-color: #dfdfdf;
  }
  &::before {
    top: 0;
    transform: translateY(-50%);
  }
  &::after {
    bottom: 0;
    transform: translateY(50%);
  }
}
.reset-all-btn {
  @include btn;
  gap: 0.688rem;
  font-family: "Pragmatica Medium";
  font-size: 0.75rem;
}
/* 768px = 48em */
@media (min-width: 48em) {
  .filters-btn {
    &::before,
    &::after {
      margin-left: calc((100vw - 44.874rem) / (-2));
      margin-right: calc((100vw - 44.874rem) / (-2));
      left: 0;
      right: 0;
    }
  }
}
/* 1024px = 64em */
@media (min-width: 64em) {
  .filters-btn {
    &::before,
    &::after {
      margin-left: calc((100vw - 44.75rem) / (-2));
      margin-right: calc((100vw - 44.75rem) / (-2));
    }
  }
}
/* 1200px = 75em */
@media (min-width: 75em) {
  .filters-btn {
    &::before,
    &::after {
      margin-left: calc((100vw - 71.875rem) / (-2));
      margin-right: calc((100vw - 71.875rem) / (-2));
    }
  }
}
/* 1440px = 90em */
@media (min-width: 90em) {
  .filters-btn {
    &::before,
    &::after {
      margin-left: calc((100vw - 85rem) / (-2));
      margin-right: calc((100vw - 85rem) / (-2));
    }
  }
}
/* 1920px = 120em */
@media (min-width: 120em) {
}
</style>
