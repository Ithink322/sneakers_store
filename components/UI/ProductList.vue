<template>
  <div class="products-list">
    <UIProductCard
      v-for="product in paginatedProducts"
      :product="product"
      :key="product.id"
      @editProduct="editProduct"
    ></UIProductCard>
  </div>
</template>

<script setup lang="ts">
import { useProductsStore } from "@/store/Products";
import type { Product } from "@/types/Product";

const store = useProductsStore();
const paginatedProducts = computed(() => store.paginatedProducts);

onMounted(() => {
  store.filterProducts();
});

const emit = defineEmits(["editProduct"]);
const editProduct = (product: Product) => {
  emit("editProduct", product);
};
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
</style>
