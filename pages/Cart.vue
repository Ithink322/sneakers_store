<template>
  <UIBreadcrumb :breadcrumbTitle="'Корзина товаров'"></UIBreadcrumb>
  <div class="titles-container">
    <h1 class="titles-container__title">Корзина товаров</h1>
    <span v-if="totalProducts > 0" class="titles-container__text"
      >{{ totalProducts }} {{ conjugateTovar(totalProducts) }}</span
    >
  </div>
  <div v-if="totalProducts > 0" class="product-list">
    <div class="product-list__header--from768px">
      <span class="product-list__title product-list__product-title">ТОВАР</span>
      <span class="product-list__title product-list__price-title">ЦЕНА</span>
      <span class="product-list__title product-list__amount-title"
        >КОЛИЧЕСТВО</span
      >
      <span class="product-list__title product-list__sum-title">СУММА</span>
    </div>
    <UICartProduct
      v-for="product in cartProducts"
      :product="product"
      :key="product.productId"
    ></UICartProduct>
  </div>
  <UIEmpty
    v-if="totalProducts === 0"
    :hero="'/imgs/empty-cart-icon.jpg'"
    :title="'Ваша корзина на данный момент пуста'"
    :text="`Прежде чем приступить к оформлению заказа, вы должны добавить некоторые товары в<br class='empty__text-cart-br--from1200px' /> корзину. На странице <strong>&quot;Каталог&quot;</strong> вы найдете много интересных товаров.`"
    :iconWidth="'75px'"
  ></UIEmpty>
</template>

<script setup lang="ts">
import { useCartStore } from "@/store/Cart";
import { conjugateTovar } from "@/utils/helpers";

const cartStore = useCartStore();
const totalProducts = computed(() => cartStore.cart.length);
conjugateTovar(totalProducts.value);

onMounted(async () => {
  await cartStore.fetchCart(localStorage.getItem("userId")! as string);
});
const cartProducts = computed(() => cartStore.cart);
</script>

<style lang="scss" scoped>
.titles-container {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  margin: 0.938rem 0;

  &__text {
    font-family: "Pragmatica Book";
    font-size: 0.813rem;
    color: #a3a3a3;
  }
}
.product-list {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.875rem;
  border: 1px solid #ececec;
  padding: 0.938rem 1.25rem;

  &__header--from768px {
    display: none;
  }
}
/* 768px = 48em */
@media (min-width: 48em) {
  .titles-container {
    margin-bottom: 1.25rem;
  }
  .product-list {
    &__header--from768px {
      position: relative;
      display: flex;
    }
    &__header--from768px::after {
      position: absolute;
      content: "";
      height: 1px;
      background-color: #ececec;
      left: -1.25rem;
      right: -1.25rem;
      bottom: -0.938rem;
    }
    &__title {
      font-family: "Pragmatica Bold";
      font-size: 0.813rem;
      line-height: 24px;
      color: #373737;
    }
    &__product-title {
      width: 295px;
    }
    &__price-title {
      width: 104px;
    }
    &__amount-title {
      width: 155px;
    }
    &__sum-title {
      width: 121px;
    }
  }
}
/* 1200px = 75em */
@media (min-width: 75em) {
  .titles-container {
    margin: 1.563rem 0 3.125rem 0;
    gap: 0.813rem;

    &__text {
      font-size: 0.938rem;
    }
  }
}
</style>
