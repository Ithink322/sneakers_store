<template>
  <div class="cart-product">
    <NuxtLink
      class="cart-product__details"
      :to="{
        path: `/catalog/${slugify(product.title)}/${product.productId}`,
      }"
    >
      <img :src="props.product.heroes[0]" alt="" class="cart-product__hero" />
      <div class="cart-product__content">
        <span class="cart-product__title">{{ props.product.title }}</span>
        <div class="cart-product__container">
          <div class="cart-product__color">
            Цвет:
            <button class="cart-product__color-circle">
              <div
                class="cart-product__color-circle-fill"
                :style="{ backgroundColor: props.product.chosenColor }"
              ></div>
            </button>
          </div>
          <span class="cart-product__size"
            >Размер: {{ props.product.chosenSize }}</span
          >
        </div>
      </div>
    </NuxtLink>
    <div class="cart-product__body">
      <div class="cart-product__counter">
        <button
          @click.prevent="decreaseCounter"
          class="cart-product__counter-btn cart-product__decrease-btn"
        >
          -
        </button>
        <span class="cart-product__counter-text">{{ productCount }}</span>
        <button
          @click.prevent="increaseCounter"
          class="cart-product__counter-btn cart-product__increase-btn"
        >
          +
        </button>
      </div>
      <span class="cart-product__price cart-product__current-price">{{
        props.product.currentPrice
      }}</span>
      <span class="cart-product__price cart-product__sum-price">{{ sum }}</span>
    </div>
    <button
      @click.prevent="removeCartProduct"
      class="cart-product__remove-cart-product"
    >
      <svg
        width="18"
        height="20"
        viewBox="0 0 18 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 5H17M2 5L3 17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19H13C13.5304 19 14.0391 18.7893 14.4142 18.4142C14.7893 18.0391 15 17.5304 15 17L16 5M6 5V2C6 1.73478 6.10536 1.48043 6.29289 1.29289C6.48043 1.10536 6.73478 1 7 1H11C11.2652 1 11.5196 1.10536 11.7071 1.29289C11.8946 1.48043 12 1.73478 12 2V5M7 10L11 14M11 10L7 14"
          stroke="#ADADAD"
          stroke-width="1.7"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
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
const increaseCounter = () => {
  if (productCount.value < 30) {
    cartStore.increaseCount(
      props.product.productId,
      props.product.chosenColor,
      props.product.chosenSize
    );
  }
};
const decreaseCounter = () => {
  if (productCount.value > 1) {
    cartStore.decreaseCount(
      props.product.productId,
      props.product.chosenColor,
      props.product.chosenSize
    );
  }
};
const sum = computed(
  () =>
    (
      productCount.value *
      parseFloat(props.product.currentPrice.replace(/\s|₽/g, ""))
    )
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " ₽"
);

const removeCartProduct = () => {
  cartStore.removeCartProduct(
    props.product.productId,
    props.product.chosenColor,
    props.product.chosenSize
  );
};
</script>

<style lang="scss" scoped>
@import "@/assets/App.scss";
.cart-product {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  &__details {
    display: flex;
    gap: 0.938rem;
  }
  &__details:hover &__title {
    color: $Dark-Orange;
  }
  &__hero {
    width: 65px;
    height: 65px;
    flex-shrink: 0;
  }
  &__content {
    display: flex;
    flex-direction: column;
    gap: 0.313rem;
  }
  &__title {
    font-family: "Pragmatica Book";
    font-size: 0.938rem;
    line-height: 26px;
    transition: color 0.3s ease;
  }
  &__container {
    display: flex;
    align-items: center;
    gap: 0.813rem;
  }
  &__color {
    display: flex;
    align-items: center;
    gap: 0.438rem;
    font-family: "Pragmatica Book";
    font-size: 0.875rem;
    color: #2e2e2e;
  }
  &__color-circle {
    position: relative;
    @include btn;
    border-radius: 50%;
    width: 23px;
    height: 23px;
    outline: 1px solid #a1a1a1;
  }
  &__color-circle-fill {
    border-radius: 50%;
    width: 15px;
    height: 15px;
  }
  &__size {
    font-family: "Pragmatica Book";
    font-size: 0.875rem;
    color: #2e2e2e;
  }
  &__body {
    display: flex;
    align-items: center;
    gap: 1.938rem;
  }
  &__counter {
    display: flex;
    align-items: center;
    width: 116px;
    height: 65px;
    border: 1px solid #eceff4;
  }
  &__counter-btn {
    @include btn;
    flex-shrink: 0;
    width: 35px;
    height: 100%;
    font-family: "Pragmatica Book";
    font-size: 0.875rem;
    color: #a7a7a7;
  }
  &__counter-text {
    @include flex-centered;
    text-align: center;
    width: 50px;
    height: 100%;
    border-left: 1px solid #eceff4;
    border-right: 1px solid #eceff4;
    font-family: "Pragmatica Book";
    font-size: 0.875rem;
    color: #323638;
  }
  &__price {
    font-family: "Pragmatica Book";
    font-size: 1.063rem;
  }
  &__sum-price {
    display: none;
  }
  &__remove-cart-product {
    position: absolute;
    @include btn;
    right: 0;
    top: 1.5rem;
    bottom: 1.563rem;
  }
  &::after {
    position: absolute;
    content: "";
    height: 1px;
    background-color: #ececec;
    bottom: -0.938rem;
    left: -1.25rem;
    right: -1.25rem;
  }
}
/* 768px = 48em */
@media (min-width: 48em) {
  .cart-product {
    flex-direction: row;

    &__details {
      width: 275px;
    }
    &__hero {
      width: 90px;
      height: 90px;
    }
    &__title {
      font-size: 1rem;
    }
    &__body {
      gap: 2.25rem;
    }
    &__current-price {
      order: 0;
    }
    &__sum-price {
      display: block;
      order: 2;
      white-space: nowrap;
    }
    &__price {
      width: 70px;
    }
    &__counter {
      order: 1;
    }
  }
}
/* 1440px = 90em */
@media (min-width: 90em) {
  .cart-product {
    gap: 4.375rem;

    &__details {
      width: 331px;
    }
    &__body {
      gap: 8.063rem;
    }
  }
}
</style>
