<template>
  <div class="products-list">
    <UIProductCard
      v-for="product in products"
      :product="product"
      :key="product.id"
    ></UIProductCard>
  </div>
</template>

<script setup lang="ts">
import { products } from "@/data/CatalogProducts";
</script>

<style lang="scss" scoped>
/* .products-list {
  display: flex;
  column-gap: 0.938rem;
  row-gap: 3.125rem;
  flex-flow: row wrap;
} */
.products-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.938rem;
}
/* 768px = 48em */
@media (min-width: 48em) {
  .products-list {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.25rem;
    /* grid-template-columns: repeat(36, minmax(calc(33.333% - 0.84rem), 1fr)); */
  }
}
/* 1024px = 64em */
@media (min-width: 64em) {
}
/* 1200px = 75em */
@media (min-width: 75em) {
}
/* 1440px = 90em */
@media (min-width: 90em) {
}
/* 1920px = 120em */
@media (min-width: 120em) {
}
</style>
