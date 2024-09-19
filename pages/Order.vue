<template>
  <UIBreadcrumb :breadcrumbTitle="'Заказ оформлен'"></UIBreadcrumb>
  <h1 class="title">Заказ оформлен</h1>
  <div class="container">
    <div class="thanks-notice">Спасибо! Ваш заказ успешно оформлен.</div>
    <div class="info">
      <div class="info__body">
        <span class="info__title">Номер заказа:</span>
        <span class="info__content">{{ orderNumber }}</span>
      </div>
      <div class="info__body">
        <span class="info__title">Дата:</span>
        <span class="info__content">{{ orderDate }}</span>
      </div>
      <div class="info__body">
        <span class="info__title">Итого:</span>
        <span class="info__content">{{ discountedSum }}</span>
      </div>
      <div class="info__body">
        <span class="info__title">Способ оплаты:</span>
        <span class="info__content">{{ payment }}</span>
      </div>
    </div>
    <UIOrderDetails></UIOrderDetails>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from "@/store/Cart";
import { useOrderStore } from "@/store/Order";

const cartStore = useCartStore();

const discountedTotalSum = computed(() => {
  return cartStore.totalSum - discountSubTotal.value;
});
const discountSubTotal = computed(() => cartStore.discountSubTotal);
const discountedSum =
  discountedTotalSum.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") +
  " ₽";

const orderStore = useOrderStore();
const payment = orderStore.selectedPayment;
const orderDate = orderStore.formattedOrderDate;
const orderNumber = orderStore.orderNumber;

onBeforeUnmount(() => {
  cartStore.resetCart();
});
</script>

<style lang="scss" scoped>
.title {
  margin: 0.938rem 0;
}
.container {
  display: flex;
  flex-direction: column;
  gap: 0.938rem;
}
.thanks-notice {
  text-align: center;
  background-color: #f8f8f8;
  padding: 0.938rem;
  font-family: "Pragmatica Medium";
  font-size: 1.063rem;
  color: #414042;
}
.info {
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  padding: 0.938rem;
  border: 1px solid #eaeaea;

  &__body {
    display: flex;
    flex-direction: column;
    gap: 0.438rem;
  }
  &__title {
    font-family: "Pragmatica Book";
    font-size: 0.875rem;
    line-height: 18px;
    color: #4c4c4c;
  }
  &__content {
    font-family: "Pragmatica Medium";
    font-size: 0.875rem;
    line-height: 26px;
    color: #414042;
  }
}
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
/* 768px = 48em */
@media (min-width: 48em) {
  .title {
    margin: 0.75rem 0 1.25rem 0;
  }
}
/* 1200px = 75em */
@media (min-width: 75em) {
  .title {
    margin: 1.563rem 0 3.125rem 0;
  }
}
/* 1440px = 90em */
@media (min-width: 90em) {
  .container {
    width: 966px;
    margin: 0 auto;
  }
}
</style>
