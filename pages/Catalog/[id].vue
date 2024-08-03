<template>
  <div v-if="product">
    <UIBreadcrumb :breadcrumbTitle="product.title"></UIBreadcrumb>
    <div class="heroes-body">
      <div class="heroes-body__discount">
        {{ product.discount ? product.discount : product.category }}
      </div>
      <img class="heroes-body__hero" :src="product.heroes[0]" alt="hero" />
      <div class="heroes-slider">
        <div
          class="heroes-slider__container"
          v-for="hero in product.heroes"
          :key="hero"
        >
          <img class="heroes-slider__small-hero" :src="hero" alt="small-hero" />
        </div>
      </div>
    </div>
    <h1 class="title">{{ product.title }}</h1>
  </div>
</template>

<script setup lang="ts">
import { slugify, unslugify } from "@/utils/helpers";
import { products } from "@/data/CatalogProducts";

const route = useRoute();
const product = computed(() => {
  const title = unslugify(route.params.id as string);
  return products.find(
    (product) => unslugify(slugify(product.title)) === title
  );
});

useHead({
  title: `${product.value!.title} - Sneakers Store`,
  meta: [
    {
      name: "description",
      content: `${product.value!.desc} - Купите ${
        product.value!.title
      } в Sneakers Store!`,
    },
    {
      name: "keywords",
      content: `${product.value!.title}, Nike, кроссовки Nike, ${
        product.value!.category
      }, купить Nike, интернет-магазин, Sneakers Store, доставка, цены`,
    },
  ],
});
</script>

<style lang="scss" scoped>
.heroes-body {
  display: flex;
  flex-direction: column;
  gap: 0.938rem;

  &__hero {
  }
}
.heroes-slider {
  /* width: 100%; */
  display: flex;
  gap: 0.938rem;
  overflow: hidden;

  &__small-hero {
    width: 90px;
    height: 90px;
  }
}
.title {
}
</style>
