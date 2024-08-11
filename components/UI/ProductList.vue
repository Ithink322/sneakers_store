<template>
  <div class="products-list">
    <UIProductCard
      v-for="product in paginatedProducts"
      :product="product"
      :key="product.id"
    ></UIProductCard>
  </div>
</template>

<script setup lang="ts">
import { products } from "@/data/CatalogProducts";
import { useProductsStore } from "@/store/Products";

const store = useProductsStore();
const paginatedProducts = computed(() => store.paginatedProducts);

onMounted(() => {
  store.filterProducts(products);
});
</script>

<style lang="scss" scoped>
.products-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.938rem;
  margin-bottom: 3.75rem;
}
/* 768px = 48em */
@media (min-width: 48em) {
  .products-list {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.25rem;
  }
}
/* 1200px = 75em */
@media (min-width: 75em) {
  .products-list {
    margin-bottom: 4.375rem;
  }
}
/* 1440px = 90em */
@media (min-width: 90em) {
}
/* 1920px = 120em */
@media (min-width: 120em) {
}
</style>
