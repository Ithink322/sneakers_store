<template>
  <h2 class="details-title">Детали заказа:</h2>
  <div class="details">
    <div class="details__titles">
      <span class="details__title">Товар</span>
      <span class="details__title">Итого</span>
    </div>
    <UIOrderProduct
      v-for="product in cartProducts"
      :product="product"
      :key="product.productId"
    ></UIOrderProduct>
    <div class="details__info">
      <span class="details__info-title">Сумма:</span>
      <span class="details__info-content">{{ discountedSum }}</span>
    </div>
    <div class="details__info">
      <span class="details__info-title">Доставка:</span>
      <span class="details__info-content">0 ₽</span>
    </div>
    <div class="details__info">
      <span class="details__info-title">Способ доставки:</span>
      <span class="details__info-content">{{ delivery }}</span>
    </div>
    <div class="details__info">
      <span class="details__info-title">Способ оплаты:</span>
      <span class="details__info-content">{{ payment }}</span>
    </div>
    <div class="details__info details__info--hiddenBorder">
      <span class="details__info-title--bold">Итого:</span>
      <span class="details__info-content--bold">{{ discountedSum }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from "@/store/Cart";
import { useOrderStore } from "@/store/Order";

const cartStore = useCartStore();
const cartProducts = computed(() => cartStore.cart);

const orderStore = useOrderStore();
const discountedSum = orderStore.discountedSum;

const delivery = orderStore.selectedDelivery;
const payment = orderStore.selectedPayment;
</script>

<style lang="scss" scoped>
.details-title {
  font-family: "Pragmatica Medium";
  font-size: 1.375rem;
  color: #1d1d27;
  margin: 0;
}
.details {
  position: relative;
  border: 1px solid #f1f1f1;
  padding: 1.25rem 1.25rem 0 1.25rem;

  &__titles {
    position: relative;
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.25rem;

    &::after {
      position: absolute;
      content: "";
      height: 1px;
      background-color: #f1f1f1;
      left: -1.25rem;
      right: -1.25rem;
      bottom: -1.25rem;
    }
  }
  &__title {
    font-family: "Pragmatica Bold";
    font-size: 1.125rem;
    color: #1f1e31;
  }
  &__info {
    position: relative;
    display: flex;
    gap: 1.063rem;
    justify-content: space-between;
    padding: 1.375rem 0;
  }
  &__info::after {
    position: absolute;
    content: "";
    height: 1px;
    background-color: #f1f1f1;
    left: -1.25rem;
    right: -1.25rem;
    bottom: 0;
  }
  &__info--hiddenBorder::after {
    height: 0px;
  }
  &__info-title {
    font-family: "Pragmatica Medium";
    font-size: 1rem;
    color: #1f1e31;
  }
  &__info-content {
    font-family: "Pragmatica Book";
    font-size: 1rem;
    text-align: right;
  }
  &__info-title--bold {
    font-family: "Pragmatica Medium";
    font-size: 1.5rem;
    color: #1f1e31;
  }
  &__info-content--bold {
    font-family: "Pragmatica Book";
    font-size: 1.563rem;
  }
}
</style>
