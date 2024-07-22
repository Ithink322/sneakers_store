<template>
  <div class="card">
    <div class="slider">
      <div class="card__heroes card__heroes--from320px">
        <div
          class="card__hero slide--from320px"
          v-for="(image, index) in props.product.heroes"
          :key="index"
          :src="image"
        >
          <img :src="image" alt="Product Image" />
        </div>
      </div>
      <div
        class="card__heroes card__heroes--from1440px"
        @mousemove="handleMouseMove"
        @mouseleave="showFirstImage"
      >
        <div
          class="card__hero slide--from1440px"
          v-for="(image, index) in props.product.heroes"
          :key="index"
          :class="{ active: index === activeIndex }"
        >
          <img :src="image" alt="Product Image" />
        </div>
      </div>
      <div class="card__slider-indicators slider-indicators">
        <div
          class="slider-indicators__indicator indicator"
          v-for="(image, index) in props.product.heroes"
          :key="index"
          :class="{ active: index === activeIndex }"
          @click="changeSlide(index)"
        ></div>
      </div>
    </div>
    <div
      class="card__banner banner"
      :style="{ backgroundColor: product.bannerBackgroundColor }"
    >
      <span class="banner__text">{{ product.bannerText }}</span>
    </div>
    <button class="card__wishlist-btn">
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
    <div class="card__desc desc">
      <span class="desc__category">{{ product.category }}</span>
      <span class="desc__title">{{ product.title }}</span>
      <div class="desc__colors">
        <span class="desc__colors-text">Цвета: </span>
        <div
          v-for="circle in props.product.colors"
          :key="circle"
          :style="{ backgroundColor: circle }"
          class="desc__colors-circle"
        ></div>
      </div>
      <div class="desc__prices prices">
        <span class="prices__current-price">{{ product.currentPrice }}</span>
        <span class="prices__previous-price">{{ product.previousPrice }}</span>
      </div>
      <button class="desc__add-to-cart-btn">
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
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from "@/types/ProductsInSlider";

const props = defineProps<{ product: Product }>();

let windowWidth = 0;
let isPageScrolling = false;
let scrollTimeout: number | null = null;
onMounted(() => {
  windowWidth = window.innerWidth;
  /* touchscreen slider from 320px to 1440px starts */
  if (windowWidth < 1440) {
    window.addEventListener("scroll", () => {
      isPageScrolling = true;
      if (scrollTimeout !== null) {
        clearTimeout(scrollTimeout);
      }
      scrollTimeout = window.setTimeout(() => {
        isPageScrolling = false;
      }, 100);
    });

    let sliders = document.querySelectorAll<HTMLElement>(".slider")!;
    sliders.forEach((slider) => {
      let sliderContainer = slider.querySelector<HTMLElement>(
          ".card__heroes--from320px"
        )!,
        slides = slider.querySelectorAll<HTMLElement>(".slide--from320px")!;
      let slideWidth = slides[0].offsetWidth,
        currentIndex = 0,
        activeIndex = 0;

      slider.addEventListener("touchstart", handleTouchStart, false);
      slider.addEventListener("touchmove", handleTouchMove, false);

      let startX: number | null = null;
      let startY: number | null = null;

      function handleTouchStart(e: TouchEvent) {
        if (isPageScrolling) return;
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
      }

      function handleTouchMove(e: TouchEvent) {
        if (isPageScrolling || !startX || !startY) return;

        let currentX = e.touches[0].clientX;
        let currentY = e.touches[0].clientY;
        let diffX = startX - currentX;
        let diffY = startY - currentY;

        if (Math.abs(diffY) > Math.abs(diffX)) {
          isPageScrolling = true;
          return;
        }

        if (diffX > 0 && currentIndex < slides.length) {
          currentIndex++;
          startX = null;
          moveSlider();
        } else if (diffX < 0) {
          currentIndex--;
          startX = null;
          moveSlider();
        }
      }

      function moveSlider() {
        let translateX = -currentIndex * slideWidth;
        if (currentIndex === slides.length) {
          currentIndex = 0;
          translateX = 0;
        }
        if (currentIndex < 0) {
          currentIndex = slides.length - 1;
          translateX = -slideWidth * (slides.length - 1);
        }
        activeIndex = currentIndex;
        sliderContainer.style.transform = `translateX(${translateX}px)`;

        let indicators = slider.querySelectorAll(
          ".slider-indicators__indicator"
        );
        indicators.forEach((indicator, index) => {
          indicator.classList.toggle("active", index === activeIndex);
        });
      }
    });
  }
  /* touchscreen slider from 320px to 1440px ends */
});

/* slider for heroes in product card from 1440px starts */
let activeIndex = ref(0);
const handleMouseMove = (event: any) => {
  const sliderWidth = event.target.clientWidth;
  const offsetX = event.offsetX;
  const slideWidth = sliderWidth / props.product.heroes.length;

  const newIndex = Math.floor(offsetX / slideWidth);
  if (windowWidth >= 1440) {
    changeSlide(newIndex);
  }
};

const changeSlide = (index: number) => {
  if (index >= 0 && index < props.product.heroes.length) {
    activeIndex.value = index;
  }
};

const showFirstImage = () => {
  activeIndex.value = 0;
};
/* slider for heroes in product card from 1440px ends */
</script>

<style lang="scss" scoped>
@import "@/assets/App.scss";
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.938rem;
  overflow: hidden;
  width: 100%;
  cursor: pointer;

  &__heroes--from320px {
    display: flex;
    transition: transform 0.5s ease-in-out;
    cursor: pointer;
  }
  &__heroes--from1440px {
    display: none;
  }
  &__hero {
    flex: 0 0 100%;
  }
  &__hero img {
    width: 100%;
    height: 100%;
    min-height: 150px;
    object-fit: cover;
  }
  &__banner {
    position: absolute;
    margin: 0.625rem 0rem 0rem 0.625rem;
  }
  &__wishlist-btn {
    position: absolute;
    @include btn;
    margin-top: 0.625rem;
    right: 0.625rem;
  }
  &__wishlist-btn svg path {
    transition: stroke 0.3s ease;
  }
  &__wishlist-btn:hover svg path {
    stroke: $Dark-Orange;
  }
  &__slider-indicators {
    bottom: 9.8rem;
    left: 0rem;
  }
}
.slide--from1440px,
.slide--from1440px.active {
  display: none;
}
.slider-indicators {
  position: absolute;
  display: flex;
  gap: 0.563rem;
  width: 100%;
  justify-content: center;

  &__indicator {
    width: 13px;
    height: 2px;
    background: #d9d9d9;
  }
  &__indicator.active {
    background: #333333;
  }
}
.banner {
  padding: 0.313rem 0.375rem;
  width: fit-content;

  &__text {
    font-family: "Pragmatica Medium";
    font-size: 0.688rem;
    color: #fff;
  }
}
.desc {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  &__category {
    font-family: "Pragmatica Medium";
    font-size: 0.688rem;
    color: #747474;
  }
  &__title {
    font-family: "Pragmatica Book";
    font-size: 1rem;
    transition: color 0.3s ease;
  }
  &__colors {
    display: flex;
    gap: 0.625rem;
  }
  &__colors-text {
    font-family: "Pragmatica Book";
    font-size: 0.813rem;
    color: #2e2e2e;
  }
  &__colors-circle {
    border-radius: 50%;
    width: 13px;
    height: 13px;
  }
  &__add-to-cart-btn {
    @include btn;
    position: absolute;
    bottom: 0rem;
    right: 0.625rem;
  }
  &__add-to-cart-btn svg path {
    transition: stroke 0.3s ease;
  }
  &__add-to-cart-btn:hover svg path {
    stroke: $Dark-Orange;
  }
}
.desc:hover .desc__title {
  color: $Dark-Orange;
}
.prices {
  display: flex;
  flex-direction: column;
  gap: 0.063rem;

  &__current-price {
    font-family: "Pragmatica Book";
    font-size: 1.125rem;
  }
  &__previous-price {
    font-family: "Pragmatica Book";
    font-size: 0.875rem;
    color: #999999;
    text-decoration: line-through;
  }
}
/* 768px = 48em */
@media (min-width: 48em) {
  .banner {
    padding: 0.625rem;
  }
}
/* 1200px = 75em */
@media (min-width: 75em) {
  .card {
    &__banner {
      margin: 1.25rem 0rem 0rem 1.25rem;
    }
    &__wishlist-btn {
      margin-top: 1.25rem;
      right: 1.25rem;
    }
    &__slider-indicators {
      bottom: 8.5rem;
      left: 0rem;
    }
  }
  .desc {
    &__category {
      font-size: 0.75rem;
    }
    &__title {
      font-size: 1.188rem;
    }
    &__colors-text {
      font-size: 0.938rem;
    }
  }
  .prices {
    flex-direction: row;
    align-items: center;
    gap: 0.625rem;
  }
  .slider-indicators {
    &__indicator {
      width: 39px;
      height: 3px;
      background: #d9d9d9;
    }
  }
}
/* 1440px = 90em */
@media (min-width: 90em) {
  .card {
    &__heroes--from320px {
      display: none;
    }
    &__heroes--from1440px {
      display: flex;
    }
    &__hero,
    &__hero img {
      min-width: 440px;
      height: 445px;
    }
  }
  .slide--from320px {
    display: none;
  }
  .slide--from1440px.active {
    display: block;
  }
  .slider-indicators {
    position: absolute;
    display: flex;
    gap: 0.563rem;
  }
}
</style>
