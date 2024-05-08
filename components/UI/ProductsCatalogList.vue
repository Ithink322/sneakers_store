<template>
  <div class="products-catalog__overflow">
    <div class="products-catalog__list-grid">
      <UIProductCatalogCard
        v-for="product in productList"
        :product="product"
        :key="product.id"
      ></UIProductCatalogCard>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Product {
  id: number;
  heroes: string[];
  category: string;
  title: string;
  colors: string[];
  currentPrice: string;
  previousPrice: string;
  bannerBackgroundColor: string;
  bannerText: string;
}

const props = defineProps<{
  latestProducts?: Product[];
  hitProducts?: Product[];
}>();
const productList = props.latestProducts
  ? props.latestProducts
  : props.hitProducts;
</script>

<style lang="scss" scoped>
.products-catalog__overflow {
  overflow: hidden;
}
.products-catalog__list-grid {
  display: grid;
  grid-template-columns: repeat(18, minmax(calc(50% - 0.469rem), 1fr));
  gap: 0.938rem;
  transition: transform 0.3s ease-in-out;
}
/* 768px = 48em */
@media (min-width: 48em) {
  .products-catalog__list-grid {
    gap: 1.25rem;
    grid-template-columns: repeat(36, minmax(calc(33.333% - 0.84rem), 1fr));
  }
}
</style>
