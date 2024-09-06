<template>
  <div class="product">
    <div class="product__body">
      <span class="product__title">{{ props.product.title }}</span>
      <span class="product__count">x{{ productCount }}</span>
    </div>
    <span class="product__price">{{ sum }}</span>
  </div>
</template>

<script setup lang="ts">
import type { CartProduct } from "@/types/CartProduct";
import { useCartStore } from "@/store/Cart";

const props = defineProps<{
  product: CartProduct;
}>();

const cartStore = useCartStore();
const productCount = computed(() =>
  cartStore.getCount(
    props.product.productId,
    props.product.chosenColor,
    props.product.chosenSize
  )
);

const sum = computed(
  () =>
    (
      productCount.value *
      parseFloat(props.product.currentPrice.replace(/\s|₽/g, ""))
    )
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " ₽"
);
</script>

<style lang="scss" scoped>
.product {
  position: relative;
  display: flex;
  gap: 1.875rem;
  justify-content: space-between;
  padding: 1.25rem 0rem;

  &__body {
    display: flex;
    gap: 0.438rem;
  }
  &__title {
    font-family: "Pragmatica Book";
    font-size: 1rem;
    width: fit-content;
    color: #1f1e31;
  }
  &__count {
    font-family: "Pragmatica Book";
    font-size: 0.875rem;
    color: #7a7a7e;
  }
  &__price {
    font-family: "Pragmatica Book";
    font-size: 1.063rem;
    white-space: nowrap;
  }
  &::after {
    position: absolute;
    content: "";
    height: 1px;
    background-color: #f1f1f1;
    left: -1.25rem;
    right: -1.25rem;
    bottom: 0;
  }
}
</style>
