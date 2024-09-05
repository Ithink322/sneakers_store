<template>
  <UIBreadcrumb :breadcrumbTitle="'Корзина товаров'"></UIBreadcrumb>
  <div class="titles-container">
    <h1 class="titles-container__title">Корзина товаров</h1>
    <span v-if="totalProducts > 0" class="titles-container__text"
      >{{ totalProducts }} {{ conjugateTovar(totalProducts) }}</span
    >
  </div>
  <div v-if="totalProducts > 0">
    <div class="container">
      <div class="product-list">
        <div class="product-list__header--from768px">
          <span class="product-list__title product-list__product-title"
            >ТОВАР</span
          >
          <span class="product-list__title product-list__price-title"
            >ЦЕНА</span
          >
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
      <div class="summary">
        <span class="summary__title">Итого</span>
        <div class="summary__sum">
          <span class="summary__sum-title">Сумма</span>
          <div class="summary__sum-border"></div>
          <span class="summary__sum-text">{{
            discountedTotalSum
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " ₽"
          }}</span>
        </div>
        <span v-if="discountSubTotal > 0" class="summary__total-discount"
          >-{{
            discountSubTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
          }}
          ₽ [Скидка]</span
        >
        <form @submit.prevent="applyPromoCode" class="summary__promo">
          <input
            placeholder="Промокод"
            type="text"
            class="summary__promo-field"
            v-model="promoCode"
          />
          <button class="summary__promo-btn">ПРИМЕНИТЬ ПРОМОКОД</button>
        </form>
        <UIButton :content="'Оформить заказ'" width="100%"></UIButton>
      </div>
    </div>
    <UIProductsSlider
      class="products-slider"
      :title="'ПОХОЖИЕ<br/> КРОССОВКИ'"
      :latestProducts="latestProducts"
    ></UIProductsSlider>
    <UIProductsSlider
      :title="'ВОЗМОЖНО<br/> ЗАИНТЕРЕСУЕТ'"
      :hitProducts="hitProducts"
    ></UIProductsSlider>
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
import { latestProducts } from "@/data/ProductsInSlider";
import { hitProducts } from "@/data/ProductsInSlider";

const cartStore = useCartStore();
const totalProducts = computed(() => cartStore.cart.length);
conjugateTovar(totalProducts.value);

onMounted(async () => {
  await cartStore.fetchCart(localStorage.getItem("userId")! as string);
});
const cartProducts = computed(() => cartStore.cart);

const promoCode = ref("");
const applyPromoCode = () => {
  cartStore.applyPromoCode(promoCode.value);
};
const discountedTotalSum = computed(() => {
  return cartStore.totalSum - discountSubTotal.value;
});
const discountSubTotal = computed(() => cartStore.discountSubTotal);
</script>

<style lang="scss" scoped>
@import "@/assets/App.scss";
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
.container {
  display: flex;
  flex-direction: column;
  gap: 1.875rem;
}
.product-list {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.875rem;
  border: 1px solid #ececec;
  height: fit-content;
  padding: 0.938rem 1.25rem;

  &__header--from768px {
    display: none;
  }
}
.summary {
  display: flex;
  flex-direction: column;
  gap: 1.563rem;
  background-color: #f8f8f8;
  padding: 1.25rem;

  &__title {
    font-family: "Pragmatica Medium";
    font-size: 1.438rem;
    line-height: 44px;
    color: #1d1d27;
  }
  &__sum {
    display: flex;
    align-items: center;
    gap: 0.938rem;
  }
  &__sum-title {
    font-family: "Pragmatica Book";
    font-size: 0.938rem;
  }
  &__sum-border {
    min-width: 10px;
    width: 100%;
    border-bottom: 1px dotted #d1d1d1;
  }
  &__total-discount {
    font-family: "Pragmatica Book";
    font-size: 0.875rem;
    color: #38cb89;
    white-space: nowrap;
    text-align: right;
    margin: -0.938rem 0;
  }
  &__sum-text {
    font-family: "Pragmatica Book";
    font-size: 1.063rem;
    white-space: nowrap;
  }
  &__promo {
    display: flex;
    flex-direction: column;
    gap: 0.938rem;
  }
  &__promo-field {
    outline: none;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #000000;
    padding: 0.625rem;
    font-family: "Pragmatica Book";
    font-size: 1rem;
    color: #2b2b2b;
  }
  &__promo-field::placeholder {
    font-family: "Pragmatica Book";
    font-size: 1rem;
    color: #2b2b2b;
  }
  &__promo-btn {
    padding: 0.625rem 0;
    border: 1px solid $Light-Black;
    background-color: transparent;
    font-family: "Pragmatica Medium";
    font-size: 0.75rem;
  }
}
.products-slider {
  margin-top: 6.938rem;

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: -0.938rem;
    right: -0.938rem;
    height: 1px;
    background-color: #dfdfdf;
  }
  &::before {
    margin-top: -2.5rem;
  }
  &::after {
    margin-top: 2.5rem;
  }
}
/* 768px = 48em */
@media (min-width: 48em) {
  .titles-container {
    margin-bottom: 1.25rem;
  }
  .container {
    gap: 2.5rem;
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
  .summary {
    &__title {
      font-family: "Pragmatica Medium";
      font-size: 1.438rem;
      line-height: 44px;
      color: #1d1d27;
    }
    &__sum {
      display: flex;
      align-items: center;
      gap: 0.938rem;
    }
    &__sum-title {
      font-family: "Pragmatica Book";
      font-size: 0.938rem;
    }
    &__sum-border {
      min-width: 10px;
      width: 100%;
      border-bottom: 1px dotted #d1d1d1;
    }
    &__sum-text {
      font-family: "Pragmatica Book";
      font-size: 1.063rem;
    }
    &__promo {
      display: flex;
      flex-direction: column;
      gap: 0.938rem;
    }
    &__promo-field {
      outline: none;
      background-color: transparent;
      border: none;
      border-bottom: 1px solid #000000;
      padding: 0.625rem;
    }
    &__promo-field::placeholder {
      font-family: "Pragmatica Book";
      font-size: 1rem;
      color: #2b2b2b;
    }
    &__promo-btn {
      padding: 0.625rem 0;
      border: 1px solid $Light-Black;
      background-color: transparent;
      font-family: "Pragmatica Medium";
      font-size: 0.75rem;
    }
  }
  .products-slider {
    &::before,
    &::after {
      margin-left: calc((100vw - 44.874rem) / (-2));
      margin-right: calc((100vw - 44.874rem) / (-2));
      left: 0;
      right: 0;
    }
  }
}
/* 1024px = 64em */
@media (min-width: 64em) {
  .products-slider {
    &::before,
    &::after {
      margin-left: calc((100vw - 44.75rem) / (-2));
      margin-right: calc((100vw - 44.75rem) / (-2));
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
  .container {
    flex-direction: row;
    gap: 1.25rem;
  }
  .product-list {
    flex-grow: 1;
  }
  .summary {
    height: fit-content;
    width: 325px;
  }
  .products-slider {
    margin-top: 8.188rem;

    &::before,
    &::after {
      margin-left: calc((100vw - 71.875rem) / (-2));
      margin-right: calc((100vw - 71.875rem) / (-2));
    }
  }
  /* 1440px = 90em */
  @media (min-width: 90em) {
    .product-list {
      &__product-title {
        width: 401px;
      }
      &__price-title {
        width: 198px;
      }
      &__amount-title {
        width: 248px;
      }
      &__sum-title {
        width: 126px;
      }
    }
    .products-slider {
      &::before,
      &::after {
        margin-left: calc((100vw - 85rem) / (-2));
        margin-right: calc((100vw - 85rem) / (-2));
      }
    }
  }
}
</style>
