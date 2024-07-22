<template>
  <div class="with-discount">
    <h2 class="with-discount__title">
      ТОВАРЫ СО<br />
      СКИДКОЙ
    </h2>
    <div class="with-discount__btns btns">
      <button @click="PrevSlide" class="btns__prev-btn btns__btn">
        <svg
          width="34"
          height="14"
          viewBox="0 0 34 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.4"
            d="M0.363604 7.6364C0.0121321 7.28493 0.012132 6.71508 0.363604 6.36361L6.09117 0.636042C6.44264 0.28457 7.01249 0.28457 7.36396 0.636041C7.71543 0.987513 7.71543 1.55736 7.36396 1.90883L2.27279 7L7.36396 12.0912C7.71543 12.4426 7.71543 13.0125 7.36396 13.364C7.01249 13.7154 6.44264 13.7154 6.09117 13.364L0.363604 7.6364ZM34 7.9L1 7.9L1 6.1L34 6.1L34 7.9Z"
            fill="black"
          />
        </svg>
      </button>
      <button @click="NextSlide" class="btns__next-btn btns__btn">
        <svg
          width="34"
          height="14"
          viewBox="0 0 34 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M33.6364 6.3636C33.9879 6.71507 33.9879 7.28492 33.6364 7.63639L27.9088 13.364C27.5574 13.7154 26.9875 13.7154 26.636 13.364C26.2846 13.0125 26.2846 12.4426 26.636 12.0912L31.7272 7L26.636 1.90883C26.2846 1.55736 26.2846 0.987509 26.636 0.636037C26.9875 0.284565 27.5574 0.284565 27.9088 0.636037L33.6364 6.3636ZM-7.86805e-08 6.1L33 6.1L33 7.9L7.86805e-08 7.9L-7.86805e-08 6.1Z"
            fill="black"
          />
        </svg>
      </button>
    </div>
    <div class="with-discount__overflow">
      <div class="with-discount__list">
        <UIProductsWithDiscountCard
          v-for="hero in heroes"
          :hero="hero"
          :key="hero.id"
        ></UIProductsWithDiscountCard>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { heroes } from "@/data/ProductsWithDiscount";

let SliderWrapper: HTMLElement | null = null;
let SliderOverflow: HTMLElement | null = null;
let SlideWidth: number = 0;
let SlidesLength: number = 0;
let gap: number = 0;
let startX: number | null = null;
let startY: number | null = null;

let CurrentPosition = 0,
  CurrentIndex = 0;

let isPageScrolling = false;
let scrollTimeout: number | null = null;

onMounted(() => {
  SliderWrapper = document.querySelector<HTMLElement>(".with-discount__list")!;
  SliderOverflow = document.querySelector<HTMLElement>(
    ".with-discount__overflow"
  )!;
  SlideWidth = document.querySelector<HTMLElement>(
    ".with-discount__card"
  )!.offsetWidth;
  SlidesLength = document.querySelectorAll(".with-discount__card").length;
  gap = parseFloat(
    window.getComputedStyle(SliderWrapper).getPropertyValue("gap")
  );

  /* touchscreen sliders for .with-discount__overflow starts */
  window.addEventListener("scroll", () => {
    isPageScrolling = true;
    if (scrollTimeout !== null) {
      clearTimeout(scrollTimeout);
    }
    scrollTimeout = window.setTimeout(() => {
      isPageScrolling = false;
    }, 100);
  });

  SliderWrapper!.style.transform = "translateX(0)";

  SliderOverflow!.addEventListener("touchstart", HandleTouchStart, false);
  SliderOverflow!.addEventListener("touchmove", HandleTouchMove, false);

  function HandleTouchStart(e: TouchEvent) {
    if (isPageScrolling) return;
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
  }

  function HandleTouchMove(e: TouchEvent) {
    if (isPageScrolling || !startX || !startY) return;

    let currentX = e.touches[0].clientX;
    let currentY = e.touches[0].clientY;
    let diffX = startX - currentX;
    let diffY = startY - currentY;

    if (Math.abs(diffY) > Math.abs(diffX)) {
      isPageScrolling = true;
      return;
    }

    if (diffX > 0 && CurrentIndex < SlidesLength + 1) {
      startX = null;
      NextSlide();
    } else if (diffX < 0 && CurrentIndex >= 0) {
      startX = null;
      PrevSlide();
    }
  }

  SliderWrapper!.style.transform = "translateX(0)";
  /* touchscreen sliders for .with-discount__overflow ends */
});

const PrevSlide = () => {
  const svgPathPrev = document.querySelector(".btns__prev-btn svg path");
  const svgPathNext = document.querySelector(".btns__next-btn svg path");

  if (svgPathPrev && svgPathNext) {
    (svgPathPrev as HTMLElement).style.opacity = "1";
    (svgPathNext as HTMLElement).style.opacity = "0.4";
  }

  CurrentIndex--;
  CurrentPosition += SlideWidth + gap;
  if (CurrentIndex < 0) {
    CurrentIndex = SlidesLength - 1;
    CurrentPosition = -SlideWidth * CurrentIndex - gap * CurrentIndex;
  }
  SliderWrapper!.style.transform = `translateX(${CurrentPosition}px)`;
};
const NextSlide = () => {
  const svgPathPrev = document.querySelector(".btns__prev-btn svg path");
  const svgPathNext = document.querySelector(".btns__next-btn svg path");

  if (svgPathPrev && svgPathNext) {
    (svgPathPrev as HTMLElement).style.opacity = "0.4";
    (svgPathNext as HTMLElement).style.opacity = "1";
  }

  CurrentIndex++;
  CurrentPosition -= SlideWidth + gap;
  if (CurrentIndex === SlidesLength) {
    CurrentIndex = 0;
    CurrentPosition = 0;
  }
  SliderWrapper!.style.transform = `translateX(${CurrentPosition}px)`;
};
</script>

<style lang="scss" scoped>
@import "assets/App.scss";
.with-discount {
  position: relative;
  top: 1.3rem;

  &__title {
    font-family: "Pragmatica Medium";
    font-size: 1.5rem;
    color: $Dark-Black;
    margin: 0rem;
  }
  &__btns {
    position: absolute;
    top: 0.4rem;
    right: 0rem;
    z-index: 2;
  }
  &__overflow {
    overflow: hidden;
    margin-right: -0.938rem;
  }
  &__list {
    display: flex;
    gap: 1.25rem;
    margin: 2.125rem 0rem 3.75rem 0rem;
    transition: transform 0.5s ease-in-out;
  }
}
.btns {
  display: flex;
  gap: 0.938rem;

  &__btn {
    @include btn;
  }
}

/* 360px = 22.5em */
@media (min-width: 22.5em) {
  .with-discount__btns {
    top: 2.438rem;
  }
}

/* 768px = 48em */
@media (min-width: 48em) {
  .with-discount__overflow {
    margin-right: calc((100vw - 44.874rem) / (-2));
  }
}

/* 1024px = 64em */
@media (min-width: 64em) {
  .with-discount__overflow {
    margin-right: calc((100vw - 44.75rem) / (-2));
  }
}

/* 1200px = 75em */
@media (min-width: 75em) {
  .with-discount {
    &__title {
      font-size: 2.438rem;
    }
    &__overflow {
      margin-right: calc((100vw - 71.875rem) / (-2));
    }
  }
}

/* 1440px = 90em */
@media (min-width: 90em) {
  .with-discount__overflow {
    margin-right: calc((100vw - 85rem) / (-2));
  }
}
</style>
