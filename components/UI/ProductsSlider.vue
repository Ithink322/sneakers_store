<template>
  <div class="products-catalog">
    <h2 class="products-catalog__title" v-html="props.title"></h2>
    <div class="products-catalog__btns">
      <button @click="handleSlide('prev')" class="products-catalog__btn">
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
      <button @click="handleSlide('next')" class="products-catalog__btn">
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
    <UISliderProductsList :productList="productList"></UISliderProductsList>
  </div>
</template>

<script setup lang="ts">
import type { Product } from "@/types/Product";

const props = defineProps<{
  title: string;
  latestProducts?: Product[];
  hitProducts?: Product[];
}>();
const productList = ref<Product[]>(
  props.latestProducts || props.hitProducts || []
);

/* carousels with arrows and touchscreen for .products-catalog__list starts */
let SliderWrapper: NodeListOf<HTMLElement> | null = null;
let SliderOverflow: NodeListOf<HTMLElement> | null = null;
let latestSliderWrapper: HTMLElement | null = null;
let hitSliderWrapper: HTMLElement | null = null;
let latestSliderOverflow: HTMLElement | null = null;
let hitSliderOverflow: HTMLElement | null = null;
let flex_gap: number = 0;
let windowWidth: number = 0;
let slides: number = 8;
let startX: number | null = null;
let startY: number | null = null;

let latestCurrentPosition = 0,
  latestCurrentIndex = 0,
  hitCurrentPosition = 0,
  hitCurrentIndex = 0;

let isPageScrolling = false;
let scrollTimeout: number | null = null;

const sliderSetup = () => {
  SliderWrapper = document.querySelectorAll<HTMLElement>(
    ".products-catalog__list"
  );
  SliderOverflow = document.querySelectorAll<HTMLElement>(
    ".products-catalog__overflow"
  );

  latestSliderWrapper = SliderWrapper[0];
  hitSliderWrapper = SliderWrapper[1];
  latestSliderOverflow = SliderOverflow[0];
  hitSliderOverflow = SliderOverflow[1];

  let gap = window.getComputedStyle(latestSliderWrapper!);
  flex_gap =
    (parseInt(gap.getPropertyValue("gap")) / latestSliderWrapper!.offsetWidth) *
    100;
  windowWidth = window.innerWidth;
  slides = windowWidth < 768 ? 8 : 11;

  // Recalculate position based on the current index and new slider width
  if (latestSliderWrapper) {
    let newSlideWidth = latestSliderWrapper.offsetWidth / slides;
    latestSliderWrapper.style.transform = `translateX(-${
      latestCurrentIndex * newSlideWidth
    }px)`;
  }
};

onMounted(() => {
  sliderSetup();
  window.addEventListener("resize", sliderSetup);
  /* touchscreen sliders for .products-catalog__overflow starts */
  window.addEventListener("scroll", () => {
    isPageScrolling = true;
    if (scrollTimeout !== null) {
      clearTimeout(scrollTimeout);
    }
    scrollTimeout = window.setTimeout(() => {
      isPageScrolling = false;
    }, 100);
  });

  latestSliderWrapper!.style.transform = "translateX(0)";

  latestSliderOverflow!.addEventListener("touchstart", latestHandleTouchStart);
  latestSliderOverflow!.addEventListener("touchmove", latestHandleTouchMove);

  function latestHandleTouchStart(e: TouchEvent) {
    if (isPageScrolling) return;

    let targetElement = e.target as HTMLElement;
    let isTargetOrParentHasCardHeroClass = false;

    while (targetElement) {
      if (
        targetElement.classList.contains("card__hero") ||
        targetElement.classList.contains("indicator")
      ) {
        isTargetOrParentHasCardHeroClass = true;
        break;
      }
      targetElement = targetElement.parentElement as HTMLElement;
    }

    if (!isTargetOrParentHasCardHeroClass) {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    }
  }

  function latestHandleTouchMove(e: TouchEvent) {
    if (isPageScrolling || !startX || !startY) return;

    let currentX = e.touches[0].clientX;
    let currentY = e.touches[0].clientY;
    let diffX = startX - currentX;
    let diffY = startY - currentY;

    if (Math.abs(diffY) > Math.abs(diffX)) {
      isPageScrolling = true;
      return;
    }

    if (diffX > 0 && latestCurrentIndex < slides + 1) {
      startX = null;
      latestArrivalsNextSlide();
    } else if (diffX < 0 && latestCurrentIndex >= 0) {
      startX = null;
      latestArrivalsPrevSlide();
    }
  }

  latestSliderWrapper!.style.transform = "translateX(0)";

  hitSliderOverflow!.addEventListener("touchstart", hitHandleTouchStart, false);
  hitSliderOverflow!.addEventListener("touchmove", hitHandleTouchMove, false);

  function hitHandleTouchStart(e: TouchEvent) {
    if (isPageScrolling) return;

    let targetElement = e.target as HTMLElement;
    let isTargetOrParentHasCardHeroClass = false;

    while (targetElement) {
      if (
        targetElement.classList.contains("card__hero") ||
        targetElement.classList.contains("indicator")
      ) {
        isTargetOrParentHasCardHeroClass = true;
        break;
      }
      targetElement = targetElement.parentElement as HTMLElement;
    }

    if (!isTargetOrParentHasCardHeroClass) {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    }
  }

  function hitHandleTouchMove(e: TouchEvent) {
    if (isPageScrolling || !startX || !startY) return;

    let currentX = e.touches[0].clientX;
    let currentY = e.touches[0].clientY;
    let diffX = startX - currentX;
    let diffY = startY - currentY;

    if (Math.abs(diffY) > Math.abs(diffX)) {
      isPageScrolling = true;
      return;
    }

    if (diffX > 0 && hitCurrentIndex < slides + 1) {
      startX = null;
      hitProductsNextSlide();
    } else if (diffX < 0 && hitCurrentIndex >= 0) {
      startX = null;
      hitProductsPrevSlide();
    }
  }
  /* touchscreen sliders for .products-catalog__overflow ends */
});

const latestArrivalsPrevSlide = () => {
  const svgPathPrev = document.querySelector(
    ".latest-arrivals__prev-btn svg path"
  );
  const svgPathNext = document.querySelector(
    ".latest-arrivals__next-btn svg path"
  );

  if (svgPathPrev && svgPathNext) {
    (svgPathPrev as HTMLElement).style.opacity = "1";
    (svgPathNext as HTMLElement).style.opacity = "0.4";
  }

  latestCurrentIndex--;
  latestCurrentPosition += 100 + flex_gap;
  if (latestCurrentIndex < 0) {
    latestCurrentIndex = windowWidth < 768 ? 8 : 11;
    latestCurrentPosition =
      -100 * latestCurrentIndex - flex_gap * latestCurrentIndex;
  }
  latestSliderWrapper!.style.transform = `translateX(${latestCurrentPosition}%)`;
};
const latestArrivalsNextSlide = () => {
  const svgPathPrev = document.querySelector(
    ".latest-arrivals__prev-btn svg path"
  );
  const svgPathNext = document.querySelector(
    ".latest-arrivals__next-btn svg path"
  );

  if (svgPathPrev && svgPathNext) {
    (svgPathPrev as HTMLElement).style.opacity = "0.4";
    (svgPathNext as HTMLElement).style.opacity = "1";
  }

  latestCurrentIndex++;
  latestCurrentPosition -= 100 + flex_gap;
  if (
    (latestCurrentIndex === 9 && windowWidth < 768) ||
    (latestCurrentIndex === 12 && windowWidth >= 768)
  ) {
    latestCurrentIndex = 0;
    latestCurrentPosition = 0;
  }
  latestSliderWrapper!.style.transform = `translateX(${latestCurrentPosition}%)`;
};
const hitProductsPrevSlide = () => {
  const svgPathPrev = document.querySelector(
    ".best-selling__prev-btn svg path"
  );
  const svgPathNext = document.querySelector(
    ".best-selling__next-btn svg path"
  );

  if (svgPathPrev && svgPathNext) {
    (svgPathPrev as HTMLElement).style.opacity = "1";
    (svgPathNext as HTMLElement).style.opacity = "0.4";
  }

  hitCurrentIndex--;
  hitCurrentPosition += 100 + flex_gap;
  if (hitCurrentIndex < 0) {
    hitCurrentIndex = windowWidth < 768 ? 8 : 11;
    hitCurrentPosition = -100 * hitCurrentIndex - flex_gap * hitCurrentIndex;
  }
  hitSliderWrapper!.style.transform = `translateX(${hitCurrentPosition}%)`;
};
const hitProductsNextSlide = () => {
  const svgPathPrev = document.querySelector(
    ".best-selling__prev-btn svg path"
  );
  const svgPathNext = document.querySelector(
    ".best-selling__next-btn svg path"
  );

  if (svgPathPrev && svgPathNext) {
    (svgPathPrev as HTMLElement).style.opacity = "0.4";
    (svgPathNext as HTMLElement).style.opacity = "1";
  }

  hitCurrentIndex++;
  hitCurrentPosition -= 100 + flex_gap;
  if (
    (hitCurrentIndex === 9 && windowWidth < 768) ||
    (hitCurrentIndex === 12 && windowWidth >= 768)
  ) {
    hitCurrentIndex = 0;
    hitCurrentPosition = 0;
  }
  hitSliderWrapper!.style.transform = `translateX(${hitCurrentPosition}%)`;
};

const handleSlide = (direction: "prev" | "next") => {
  if (props.latestProducts) {
    if (direction === "prev") {
      latestArrivalsPrevSlide();
    } else {
      latestArrivalsNextSlide();
    }
  } else if (props.hitProducts) {
    if (direction === "prev") {
      hitProductsPrevSlide();
    } else {
      hitProductsNextSlide();
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/App.scss";
.products-catalog {
  position: relative;
  margin: 4.375rem 0rem 2.063rem 0rem;

  &__title {
    font-family: "Pragmatica Medium";
    font-size: 1.5rem;
    letter-spacing: 0.1rem;
    margin-top: 2rem;
    margin-bottom: 2.063rem;
  }
  &__btns {
    position: absolute;
    display: flex;
    gap: 0.938rem;
    top: 0.4rem;
    right: 0rem;
  }
  &__btn {
    @include btn;
  }
}
/* 360px = 22.5em */
@media (min-width: 22.5em) {
  .products-catalog__btns {
    top: 2.438rem;
  }
}
/* 768px = 48em **/
@media (min-width: 48em) {
}
/** 1024px = 64em */
@media (min-width: 64em) {
}
/* 1200px = 75em */
@media (min-width: 75em) {
  .products-catalog {
    &__title {
      font-size: 2.438rem;
      margin-bottom: 3.2rem;
    }
  }
}
/* 1440px = 90em */
@media (min-width: 90em) {
}
/* 1920px = 120em */
@media (min-width: 120em) {
}
</style>
