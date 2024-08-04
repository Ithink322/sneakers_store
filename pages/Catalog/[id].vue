<template>
  <div v-if="product">
    <UIBreadcrumb :breadcrumbTitle="product.title"></UIBreadcrumb>
    <div class="heroes-body">
      <div
        class="heroes-body__category"
        :style="{ backgroundColor: product.categoryBackgroundColor }"
      >
        {{ product.discount ? product.discount : product.category }}
      </div>
      <button class="heroes-body__wishlist-btn">
        <svg viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M18.4927 2.41114C18.0165 1.96386 17.4506 1.60896 16.8275 1.36681C16.2045 1.12465 15.5365 1 14.8618 1C14.1872 1 13.5191 1.12465 12.8961 1.36681C12.273 1.60896 11.7071 1.96386 11.2309 2.41114L10.5 3.10415L9.76908 2.41114C9.29286 1.96386 8.72699 1.60896 8.10392 1.36681C7.48085 1.12465 6.81284 1 6.1382 1C5.46355 1 4.79554 1.12465 4.17247 1.36681C3.5494 1.60896 2.98353 1.96386 2.50731 2.41114C0.494903 4.29472 0.3715 7.47548 2.906 9.89215L10.5 17L18.094 9.89215C20.6285 7.47548 20.5051 4.29472 18.4927 2.41114Z"
            stroke="#211D19"
            stroke-width="1.4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <img class="heroes-body__hero" :src="selectedHero" alt="Main hero" />
      <div class="heroes-slider">
        <div
          class="heroes-slider__wrapper"
          :style="{ transform: `translateX(${translateValue}px)` }"
        >
          <img
            v-for="(hero, index) in product.heroes"
            :key="index"
            @mouseover="selectHero(hero, index)"
            @click="selectHero(hero, index)"
            class="heroes-slider__small-hero"
            :src="hero"
            alt="small-hero"
            :class="{ active: selectedHero && selectedIndex === index }"
          />
        </div>
      </div>
    </div>
    <h1 class="title">{{ product.title }}</h1>
  </div>
</template>

<script setup lang="ts">
import { products } from "@/data/CatalogProducts";
import { useSingleProductStore } from "@/store/SingleProduct";
import type { Product } from "@/types/Product";

const productStore = useSingleProductStore();
const product = ref<Product>();
const fetchProduct = () => {
  product.value = products.find((product) => product.id === productStore.id);
};
onMounted(() => {
  fetchProduct();
});

watchEffect(() => {
  if (product.value) {
    useHead({
      title: `${product.value.title} - Sneakers Store`,
      meta: [
        {
          name: "description",
          content: `${product.value.desc} - Купите ${
            product.value!.title
          } в Sneakers Store!`,
        },
        {
          name: "keywords",
          content: `${product.value.title}, Nike, кроссовки Nike, ${
            product.value!.category
          }, купить Nike, интернет-магазин, Sneakers Store, доставка, цены`,
        },
      ],
    });
  }
});

const selectedHero = ref<string>();
const selectedIndex = ref(0);
watch(
  () => product.value,
  (newProduct) => {
    if (newProduct) {
      selectedHero.value = newProduct.heroes[0];
      selectedIndex.value = 0;
    }
  },
  { immediate: true }
);

const sliderWrapper = ref<HTMLElement | null>(null);
const buttons = ref<HTMLElement[]>([]);
onMounted(() => {
  nextTick(() => {
    sliderWrapper.value = document.querySelector<HTMLElement>(
      ".heroes-slider__wrapper"
    );
    updateTranslate();
  });
});

const selectHero = (hero: string, index: number) => {
  selectedHero.value = hero;
  selectedIndex.value = index;
  updateTranslate();
};

const translateValue = ref(0);
const updateTranslate = async () => {
  await nextTick();

  if (sliderWrapper.value) {
    buttons.value = Array.from(
      sliderWrapper.value.querySelectorAll<HTMLElement>(
        ".heroes-slider__small-hero"
      )
    );

    const buttonWidth = buttons.value[0].offsetWidth;
    const gapValue = parseInt(
      window.getComputedStyle(sliderWrapper.value).getPropertyValue("gap")
    );

    let adjustedIndex = selectedIndex.value;
    if (adjustedIndex === product.value!.heroes.length - 1) {
      adjustedIndex = 0;
    }

    translateValue.value = -adjustedIndex * (buttonWidth + gapValue);
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/App.scss";
.heroes-body {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.938rem;

  &__category {
    position: absolute;
    background-color: $Light-Orange;
    width: fit-content;
    padding: 0.625rem;
    margin: 0.938rem 0 0 0.938rem;
    font-family: "Pragmatica Medium";
    font-size: 0.688rem;
    color: #fff;
  }
  &__wishlist-btn {
    position: absolute;
    top: 0.938rem;
    right: 0.938rem;
    @include btn;
    width: 28px;
    height: 25px;
  }
  &__hero {
  }
}
.heroes-slider {
  overflow: hidden;

  &__wrapper {
    display: flex;
    gap: 0.938rem;
    transition: transform 0.3s ease;
  }
  &__small-hero {
    width: 90px;
    height: 90px;
    cursor: pointer;
  }
  &__small-hero.active {
    border: 2px solid $Dark-Black;
  }
}
.title {
}
</style>
