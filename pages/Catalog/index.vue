<template>
  <UIBreadcrumb :breadcrumbTitle="'Каталог товаров'"></UIBreadcrumb>
  <div class="titles-container">
    <h1 class="titles-container__title">Все модели</h1>
    <span class="titles-container__text"
      >{{ totalProducts }} {{ conjugateTovar(totalProducts) }}</span
    >
  </div>
  <button @click="openFiltersMenu" class="filters-btn">
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
  <div v-if="isFiltersOpened" class="filters-menu-shadow">
    <button @click="closeFiltersMenu" class="filters-menu-shadow__close-btn">
      <img src="/imgs/cross.svg" alt="cross" />
    </button>
    <div class="filters-menu">
      <div class="slider-range">
        <div class="slider-range__range" id="range-slider"></div>
        <div class="slider-range__range-body">
          <div class="slider-range__range-content">
            <input
              type="number"
              min="6329"
              max="16790"
              placeholder="6 329"
              class="slider-range__input"
              id="input-0"
              ref="minPrice"
            />
            <span class="slider-range__sign">₽</span>
          </div>
          <div class="slider-range__border"></div>
          <div class="slider-range__range-content">
            <input
              type="number"
              min="6329"
              max="16790"
              placeholder="16 790"
              class="slider-range__input"
              id="input-1"
              ref="maxPrice"
            />
            <span class="slider-range__sign">₽</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <UIProductList></UIProductList>
  <UIPagination></UIPagination>
</template>

<script setup lang="ts">
import { products } from "@/data/CatalogProducts";
import { useProductsStore } from "@/store/Products";
import noUiSlider from "nouislider";
import type { target } from "nouislider";
/* import "nouislider/dist/nouislider.css"; */

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

const store = useProductsStore();
store.setAllProducts(products);
store.filterProducts(products);

const route = useRoute();

watch(
  () => route.query.page,
  (newPage) => store.setPage(Number(newPage) || 1),
  { immediate: true }
);

const totalPages = computed(() => store.totalPages);
const pageNum = parseInt(route.query.page as string);
const checkPageValidity = () => {
  if (route.query.page && pageNum <= totalPages.value && pageNum > 0) {
    store.currentPage = pageNum;
  } else {
    throw createError({ statusCode: 404, statusMessage: "Page Not Found" });
  }
};

const totalProducts = ref(store.filteredProducts.length);
const conjugateTovar = (count: number): string => {
  const lastDigit = count % 10;
  const lastTwoDigits = count % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
    return "товаров";
  }

  if (lastDigit === 1) {
    return "товар";
  } else if (lastDigit >= 2 && lastDigit <= 4) {
    return "товара";
  } else {
    return "товаров";
  }
};

const setupSlider = () => {
  /* prices range slider starts */
  const rangeSlider = document.getElementById("range-slider")! as target;
  if (rangeSlider) {
    noUiSlider.create(rangeSlider, {
      start: [6329, 16790],
      connect: true,
      step: 10,
      range: {
        min: [6329],
        max: [16790],
      },
    });

    const input0 = document.getElementById("input-0")! as HTMLInputElement,
      input1 = document.getElementById("input-1")! as HTMLInputElement;
    const inputs = [input0, input1];

    rangeSlider.noUiSlider!.on(
      "update",
      (values: (number | string)[], handle: number) => {
        inputs[handle].value = Math.round(Number(values[handle])).toString();
      }
    );

    const setRangeSlider = (i: number, value: string) => {
      let arr: (number | null)[] = [null, null];
      arr[i] = parseInt(value);
      rangeSlider.noUiSlider!.set(arr);
    };

    inputs.forEach((el, index) => {
      el.addEventListener("change", (e) => {
        setRangeSlider(index, (e.currentTarget! as HTMLInputElement).value);
      });
    });
  }
  /* prices range slider ends */
};

onMounted(() => {
  checkPageValidity();
});

const isFiltersOpened = ref(false);
const openFiltersMenu = () => {
  isFiltersOpened.value = true;
  window.scrollTo(0, 0);
  document.body.style.overflow = "hidden";
  nextTick(() => {
    setupSlider();
  });
};
const closeFiltersMenu = () => {
  isFiltersOpened.value = false;
  document.body.style.overflow = "";
};
</script>

<style lang="scss" scoped>
@import "@/assets/App.scss";
.titles-container {
  display: flex;
  gap: 0.5rem;
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
.filters-menu-shadow {
  position: absolute;
  background: rgba(0, 0, 0, 0.54);
  width: 100%;
  height: 100vh;
  top: 0rem;
  margin-left: -0.938rem;
  z-index: 2;
}
.filters-menu-shadow__close-btn {
  @include btn;
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
}
.filters-menu {
  position: relative;
  background: #fff;
  width: 90%;
  max-width: 328px;
  height: 100vh;
  padding: 2.188rem 1.25rem;
  overflow-y: scroll;
  overflow-x: hidden;
}
/* hide input number arrows for Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
/* hide input number arrows for Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
.slider-range {
  &__range {
    width: 100%;
    margin: 1.875rem 0;
  }
  &__range-body {
    display: flex;
    align-items: center;
    gap: 0.875rem;
  }
  &__range-content {
    position: relative;
  }
  &__input {
    text-align: center;
    border: none;
    outline: none;
    width: 100%;
    padding: 0.75rem 1.875rem;
    border-bottom: 1px solid #b5b5b5;
    font-family: "Pragmatica Book";
    font-size: 0.938rem;
    color: #343434;
  }
  &__input::placeholder {
    font-family: "Pragmatica Book";
    font-size: 0.938rem;
    color: #b5b5b5;
  }
  &__sign {
    position: absolute;
    margin-left: -0.5rem;
    font-family: "Pragmatica Book";
    font-size: 0.938rem;
    line-height: 39px;
    color: #343434;
  }
  &__border {
    width: 15px;
    height: 2px;
    border-radius: 1px;
    flex-shrink: 0;
    background: #b5b5b5;
  }
}
.noUi-target {
  background-color: #dfdfdf;
  border: none;
  height: 2px;
}
.noUi-connect {
  background-color: $Dark-Black;
}
.noUi-handle::after,
.noUi-handle::before {
  display: none;
}
.noUi-handle {
  box-shadow: none;
  border-radius: 50%;
  border: 2px solid $Dark-Black;
  background-color: #fff;
  cursor: pointer;
}
.noUi-horizontal .noUi-handle {
  width: 20px;
  height: 20px;
  top: -0.6rem;
}
/* .slider-range__range .noUi-target {
  background-color: #dfdfdf;
  border: none;
  height: 2px;
}
.slider-range__range .noUi-base .noUi-connects .noUi-connect {
  background-color: $Dark-Black;
}
.slider-range__range .noUi-handle {
  box-shadow: none;
  border-radius: 50%;
  border: 2px solid #000;
  background-color: #fff;
  cursor: pointer;
}
.slider-range__range .noUi-horizontal .noUi-handle {
  width: 20px;
  height: 20px;
  top: -0.6rem;
} */
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
  .titles-container {
    gap: 0.813rem;

    &__text {
      font-size: 0.938rem;
    }
  }
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
