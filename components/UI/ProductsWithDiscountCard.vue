<template>
  <div class="with-discount__card card">
    <img :src="hero.hero" alt="" class="card__hero" />
    <div class="card__discount">
      <span class="card__discount-text">{{ hero.discount }}</span>
    </div>
    <button class="card__add-to-wishlist-btn">
      <svg
        width="21"
        height="18"
        viewBox="0 0 21 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.4927 2.41114C18.0165 1.96386 17.4506 1.60896 16.8275 1.36681C16.2045 1.12465 15.5365 1 14.8618 1C14.1872 1 13.5191 1.12465 12.8961 1.36681C12.273 1.60896 11.7071 1.96386 11.2309 2.41114L10.5 3.10415L9.76908 2.41114C9.29286 1.96386 8.72699 1.60896 8.10392 1.36681C7.48085 1.12465 6.81284 1 6.1382 1C5.46355 1 4.79554 1.12465 4.17247 1.36681C3.5494 1.60896 2.98353 1.96386 2.50731 2.41114C0.494903 4.29472 0.3715 7.47548 2.906 9.89215L10.5 17L18.094 9.89215C20.6285 7.47548 20.5051 4.29472 18.4927 2.41114Z"
          stroke="#211D19"
          stroke-width="1.4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
    <button class="card__add-to-cart-btn">
      <svg
        width="22"
        height="24"
        viewBox="0 0 17 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.5659 8.11111V3.66667C5.5659 2.95942 5.87498 2.28115 6.42514 1.78105C6.9753 1.28095 7.72147 1 8.49951 1C9.27755 1 10.0237 1.28095 10.5739 1.78105C11.124 2.28115 11.4331 2.95942 11.4331 3.66667V8.11111M2.95597 5.44444H14.044C14.326 5.44441 14.6047 5.49981 14.8609 5.60684C15.1171 5.71388 15.3449 5.87001 15.5285 6.06454C15.7121 6.25906 15.8473 6.48739 15.9248 6.73385C16.0022 6.98032 16.0201 7.2391 15.9773 7.49244L14.7501 14.7387C14.6435 15.3684 14.2925 15.9426 13.7604 16.3574C13.2284 16.7722 12.5506 17.0002 11.8497 17H5.14933C4.44859 17 3.77101 16.7719 3.23919 16.3572C2.70738 15.9424 2.35646 15.3682 2.24995 14.7387L1.02272 7.49244C0.979863 7.2391 0.997778 6.98032 1.07524 6.73385C1.15271 6.48739 1.28788 6.25906 1.47151 6.06454C1.65514 5.87001 1.88288 5.71388 2.1391 5.60684C2.39533 5.49981 2.67399 5.44441 2.95597 5.44444Z"
          stroke="#211D19"
          stroke-width="1.4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
    <div class="card__desc desc">
      <span class="desc__category">{{ hero.category }}</span>
      <span class="desc__title">{{ hero.title }}</span>
      <div class="desc__colors colors">
        <span class="colors__text">Цвета:</span>
        <div
          v-for="circle in props.hero.colors"
          :key="circle"
          :style="{ backgroundColor: circle }"
          class="colors__color-circle"
        ></div>
      </div>
      <div class="desc__prices prices">
        <span class="prices__current-price">{{ hero.currentPrice }}</span>
        <span class="prices__previous-price">{{ hero.previousPrice }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Hero } from "@/types/ProductsWithDiscount";

const props = defineProps<{ hero: Hero }>();
</script>

<style lang="scss" scoped>
@import "assets/App.scss";
.card {
  position: relative;
  background-color: #f6f6f6;
  padding: 1.25rem 1.25rem 2.188rem 1.25rem;
  width: 230px;
  height: 388px;
  flex-shrink: 0;
  cursor: pointer;

  &__hero {
    height: 180px;
  }
  &__discount {
    position: absolute;
    padding: 0.625rem;
    top: 1.25rem;
    background-color: $Light-Orange;
  }
  &__discount-text {
    font-family: "Pragmatica Medium";
    font-size: 0.688rem;
    color: #fff;
  }
  &__add-to-wishlist-btn {
    position: absolute;
    @include btn;
    top: 1.25rem;
    right: 1.25rem;
  }
  &__add-to-wishlist-btn svg path {
    transition: stroke 0.3s ease;
  }
  &__add-to-wishlist-btn:hover svg path {
    stroke: $Dark-Orange;
  }
  &__add-to-cart-btn {
    position: absolute;
    @include btn;
    right: 1.25rem;
    bottom: 2.188rem;
  }
  &__add-to-cart-btn svg path {
    transition: stroke 0.3s ease;
  }
  &__add-to-cart-btn:hover svg path {
    stroke: $Dark-Orange;
  }
}
.desc {
  display: flex;
  flex-direction: column;
  gap: 1.125rem;

  &__category {
    font-family: "Pragmatica Medium";
    font-size: 0.688rem;
    color: #747474;
  }
  &__title {
    font-family: "Pragmatica Book";
    font-size: 1.125rem;
    color: $Dark-Black;
    transition: color 0.3s ease;
  }
  &__colors {
    display: flex;
    gap: 0.625rem;
  }
}
.desc:hover .desc__title {
  color: $Dark-Orange;
}
.colors {
  &__text {
    font-family: "Pragmatica Book";
    font-size: 0.938rem;
    color: #2e2e2e;
  }
  &__color-circle {
    border-radius: 50%;
    width: 15px;
    height: 15px;
  }
}
.prices {
  display: flex;
  align-items: center;
  gap: 0.625rem;

  &__current-price {
    font-family: "Pragmatica Book";
    font-size: 1.188rem;
    color: $Dark-Black;
  }
  &__previous-price {
    font-family: "Pragmatica Book";
    font-size: 0.938rem;
    text-decoration: line-through;
    color: #999999;
  }
}

/* 768px = 48em */
@media (min-width: 48em) {
  .card {
    display: flex;
    align-items: center;
    width: 522px;
    height: 241px;

    &__add-to-wishlist-btn svg {
      width: 23px;
      height: 20px;
    }
  }
  .desc {
    margin: 1.25rem 0rem;
  }
}

/* 1200px = 75em */
@media (min-width: 75em) {
  .card {
    justify-content: space-between;
    width: 900px;
    height: 450px;

    &__hero {
      height: 450px;
      margin-left: -1.25rem;
      margin-bottom: -1rem;
    }
  }
  .desc {
    width: 386px;

    &__category {
      font-size: 0.75rem;
    }
    &__title {
      font-size: 1.75rem;
    }
  }
}
</style>
