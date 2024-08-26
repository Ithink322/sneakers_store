<template>
  <div v-if="totalProducts > 0" class="header__counter-circle">
    <span class="header__counter-circle-text">{{ totalProducts }}</span>
  </div>
</template>

<script setup>
import { useCartStore } from "@/store/Cart";

const cartStore = useCartStore();
const totalProducts = computed(() => cartStore.cart.length);
</script>

<style lang="scss" scoped>
.header__counter-circle {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ff6915;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  font-family: "Pragmatica Bold";
  font-size: 0.625rem;
  color: #ffffff;
}
.header__counter-circle {
  margin-left: 1.3rem;
  margin-top: -1.1rem;
}
/* 1200px = 75em */
@media (min-width: 75em) {
  .header__counter-circle {
    width: 16px;
    height: 16px;
    margin-left: 3.8rem;
    margin-top: -3.9rem;
  }
}
</style>
