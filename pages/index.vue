<template>
  <main>
    <div class="slider-sneakears">
      <div class="slider-sneakears__overflow overflow">
        <div class="overflow__container">
          <div class="overflow__slide slide">
            <div class="slide__body">
              <div>
                <div class="slide__content">
                  <span class="slide__title">AIR MAX</span>
                  <span class="slide__line"></span>
                </div>
                <span class="slide__title">FLYKNIT RACER</span>
              </div>
              <span class="slide__desc"
                >Усиленный носок и прочный пластиковый каркас. Инновационная
                технология раскрывается через перфорированную стельку</span
              >
            </div>
            <img class="slide__hero" src="/imgs/advertise-hero.png" alt="" />
            <div class="slide__text-link">
              <span class="slide__text-price"
                >от <span class="slide__price">9900 ₽</span></span
              >
              <NuxtLink to="">
                <button class="slide__more-btn more-btn">
                  <div class="more-btn__content">
                    <span class="more-btn__text">Подробнее</span>
                  </div>
                  <div class="more-btn__arrow">
                    <img src="/imgs/white-right-arrow.svg" alt="" />
                  </div>
                </button>
              </NuxtLink>
            </div>
          </div>
          <div class="overflow__slide slide">
            <div class="slide__body">
              <div>
                <div class="slide__content">
                  <span class="slide__title">AIR MAX</span>
                  <span class="slide__line"></span>
                </div>
                <span class="slide__title">FLYKNIT RACER</span>
              </div>
              <span class="slide__desc"
                >Усиленный носок и прочный пластиковый каркас. Инновационная
                технология раскрывается через перфорированную стельку</span
              >
            </div>
            <img class="slide__hero" src="/imgs/advertise-hero.png" alt="" />
            <div class="slide__text-link">
              <span class="slide__text-price"
                >от <span class="slide__price">8800 ₽</span></span
              >
              <NuxtLink to="">
                <button class="slide__more-btn more-btn">
                  <div class="more-btn__content">
                    <span class="more-btn__text">Подробнее</span>
                  </div>
                  <div class="more-btn__arrow">
                    <img src="/imgs/white-right-arrow.svg" alt="" />
                  </div>
                </button>
              </NuxtLink>
            </div>
          </div>
          <div class="overflow__slide slide">
            <div class="slide__body">
              <div>
                <div class="slide__content">
                  <span class="slide__title">AIR MAX</span>
                  <span class="slide__line"></span>
                </div>
                <span class="slide__title">FLYKNIT RACER</span>
              </div>
              <span class="slide__desc"
                >Усиленный носок и прочный пластиковый каркас. Инновационная
                технология раскрывается через перфорированную стельку</span
              >
            </div>
            <img class="slide__hero" src="/imgs/advertise-hero.png" alt="" />
            <div class="slide__text-link">
              <span class="slide__text-price"
                >от <span class="slide__price">7700 ₽</span></span
              >
              <NuxtLink to="">
                <button class="slide__more-btn more-btn">
                  <div class="more-btn__content">
                    <span class="more-btn__text">Подробнее</span>
                  </div>
                  <div class="more-btn__arrow">
                    <img src="/imgs/white-right-arrow.svg" alt="" />
                  </div>
                </button>
              </NuxtLink>
            </div>
          </div>
          <div class="overflow__slide slide">
            <div class="slide__body">
              <div>
                <div class="slide__content">
                  <span class="slide__title">AIR MAX</span>
                  <span class="slide__line"></span>
                </div>
                <span class="slide__title">FLYKNIT RACER</span>
              </div>
              <span class="slide__desc"
                >Усиленный носок и прочный пластиковый каркас. Инновационная
                технология раскрывается через перфорированную стельку</span
              >
            </div>
            <img class="slide__hero" src="/imgs/advertise-hero.png" alt="" />
            <div class="slide__text-link">
              <span class="slide__text-price"
                >от <span class="slide__price">6600 ₽</span></span
              >
              <NuxtLink to="">
                <button class="slide__more-btn more-btn">
                  <div class="more-btn__content">
                    <span class="more-btn__text">Подробнее</span>
                  </div>
                  <div class="more-btn__arrow">
                    <img src="/imgs/white-right-arrow.svg" alt="" />
                  </div>
                </button>
              </NuxtLink>
            </div>
          </div>
        </div>
        <div class="overflow__slider-controls slider-controls">
          <button class="slider-controls__prev-btn">
            <img src="/imgs/prev-btn-arrow.svg" alt="" />
          </button>
          <button class="slider-controls__next-btn">
            <img src="/imgs/next-btn-arrow.svg" alt="" />
          </button>
        </div>
        <div class="overflow__indicators-flex indicators-flex">
          <div
            class="indicators-flex__indicator indicators-flex__indicator--active"
          ></div>
          <div class="indicators-flex__indicator"></div>
          <div class="indicators-flex__indicator"></div>
          <div class="indicators-flex__indicator"></div>
        </div>
      </div>
    </div>
    <UIBenefits></UIBenefits>
    <div class="latest-arrivals products-catalog">
      <h2 class="latest-arrivals__title products-catalog__title">
        ПОСЛЕДНИЕ<br />
        ПОСТУПЛЕНИЯ
      </h2>
      <div class="latest-arrivals__btns-flex products-catalog__btns-flex">
        <button
          @click="latestArrivalsPrevSlide"
          class="latest-arrivals__prev-btn latest-arrivals__btn products-catalog__btn"
        >
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
        <button
          @click="latestArrivalsNextSlide"
          class="latest-arrivals__next-btn latest-arrivals__btn products-catalog__btn"
        >
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
      <UIProductsInSliderList
        :latestProducts="latestProducts"
      ></UIProductsInSliderList>
    </div>
    <div class="best-selling products-catalog">
      <h2 class="best-selling__title products-catalog__title">
        САМЫЕ<br />
        ПРОДАВАЕМЫЕ
      </h2>
      <div class="best-selling__btns-flex products-catalog__btns-flex">
        <button
          @click="hitProductsPrevSlide"
          class="best-selling__prev-btn latest-arrivals__btn products-catalog__btn"
        >
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
        <button
          @click="hitProductsNextSlide"
          class="best-selling__next-btn latest-arrivals__btn products-catalog__btn"
        >
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
      <UIProductsInSliderList
        :hitProducts="hitProducts"
      ></UIProductsInSliderList>
    </div>
    <div class="season-hit">
      <div class="season-hit__body">
        <span class="season-hit__title">ХИТ СЕЗОНА</span>
        <div class="season-hit__content">
          <span class="season-hit__title">ОТ NIKE</span>
          <span class="season-hit__line"></span>
        </div>
        <span class="season-hit__subtitle"
          >Nike Air Max Alpha<br />
          Trainer 5</span
        >
        <span class="season-hit__price-text"
          >от <span class="season-hit__price">7 899 ₽</span></span
        >
      </div>
      <NuxtLink to="">
        <button class="season-hit__more-btn more-btn">
          <div class="more-btn__content">
            <span class="more-btn__text">Подробнее</span>
          </div>
          <div class="more-btn__arrow-area more-btn__arrow">
            <img src="/imgs/white-right-arrow.svg" alt="" />
          </div>
        </button>
      </NuxtLink>
      <img
        class="season-hit__hero season-hit__hero--from320px"
        src="/imgs/season-hit-hero--from320px.svg"
        alt=""
      />
      <img
        class="season-hit__hero season-hit__hero--from1440px"
        src="/imgs/season-hit-hero--from1440px.svg"
        alt=""
      />
      <div class="season-hit__text">
        <img src="/imgs/plus-gray.svg" alt="" />
        <span class="season-hit__desc"
          >Уникальная технология структуры стельки позволяет забыть про обувь на
          ноге.</span
        >
      </div>
    </div>
    <UIRecentPostsList></UIRecentPostsList>
    <UIProductsWithDiscountList></UIProductsWithDiscountList>
    <div class="banners">
      <div class="banners__collection-banner collection-banner">
        <img
          src="/imgs/collection-hero-1.svg"
          alt=""
          class="collection-banner__hero"
        />
        <span class="collection-banner__title"
          >Новая коллекция в<br />
          каталоге Nike Air<br />
          Max Solo</span
        >
        <button class="collection-banner__btn">Перейти в каталог</button>
      </div>
      <div class="banners__collection-banner collection-banner">
        <img
          src="/imgs/collection-hero-2.svg"
          alt=""
          class="collection-banner__hero"
        />
        <span class="collection-banner__title"
          >Новая коллекция в<br />
          каталоге Nike Air<br />
          Max Solo</span
        >
        <button class="collection-banner__btn">Перейти в каталог</button>
      </div>
    </div>
    <UIAboutUs></UIAboutUs>
  </main>
</template>

<script setup lang="ts">
import { latestProducts } from "@/data/ProductsInSlider";
import { hitProducts } from "@/data/ProductsInSlider";

useHead({
  title: "Sneakers store",
  meta: [
    {
      name: "description",
      content:
        "Sneakers store is the perfect destination for buying original nike shoes. We're passionate about delivering original quality to our customers. Explore our website!",
    },
  ],
});

onMounted(() => {
  /* carousel for .overflow__container from 1440px starts */
  let slides = document.querySelectorAll(".overflow__slide");
  const prevBtn = document.querySelector<HTMLElement>(
      ".slider-controls__prev-btn"
    )!,
    nextBtn = document.querySelector<HTMLElement>(
      ".slider-controls__next-btn"
    )!,
    carouselContainer = document.querySelector<HTMLElement>(
      ".overflow__container"
    )!;
  let currentPosition = 0,
    currentIndex = 0,
    interval: any = null;

  function stopTimer() {
    clearInterval(interval);
  }

  function startTimer() {
    interval = setInterval(() => nextSlide(), 5000);
  }

  function prevSlide() {
    stopTimer();
    currentIndex--;
    currentPosition += 100;
    if (currentIndex < 0) {
      currentIndex = slides.length - 1;
      currentPosition = -100 * (slides.length - 1);
    }
    carouselContainer.style.transform = `translateX(${currentPosition}%)`;
    updateIndicators();
    startTimer();
  }

  function nextSlide() {
    stopTimer();
    currentIndex++;
    currentPosition -= 100;
    if (currentIndex === slides.length) {
      currentIndex = 0;
      currentPosition = 0;
    }
    carouselContainer.style.transform = `translateX(${currentPosition}%)`;
    updateIndicators();
    startTimer();
  }

  nextBtn.addEventListener("click", () => {
    nextSlide();
  });
  prevBtn.addEventListener("click", () => {
    prevSlide();
  });

  startTimer();

  function updateIndicators() {
    const indicators = document.querySelectorAll(".indicators-flex__indicator");
    indicators.forEach((indicator, i) => {
      if (i === currentIndex) {
        indicator.classList.add("indicators-flex__indicator--active");
      } else {
        indicator.classList.remove("indicators-flex__indicator--active");
      }
    });
  }
  /* carousel for .overflow__container from 1440px ends */
});

/* carousels with arrows for .products-catalog__list-grid starts */
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

let latestCurrentPosition = 0,
  latestCurrentIndex = 0,
  hitCurrentPosition = 0,
  hitCurrentIndex = 0;

onMounted(() => {
  SliderWrapper = document.querySelectorAll<HTMLElement>(
    ".products-catalog__list"
  )!;
  SliderOverflow = document.querySelectorAll<HTMLElement>(
    ".products-catalog__overflow"
  )!;
  /* SliderOverflow = ref(null); */
  latestSliderWrapper = SliderWrapper[0];
  hitSliderWrapper = SliderWrapper[1];
  latestSliderOverflow = SliderOverflow[0];
  hitSliderOverflow = SliderOverflow[1];
  let gap = window.getComputedStyle(SliderWrapper[0]!);
  flex_gap =
    (parseInt(gap.getPropertyValue("gap")) / SliderWrapper[0]!.offsetWidth) *
    100;
  windowWidth = window.innerWidth;
  slides = windowWidth < 768 ? 8 : 11;

  /* touchscreen sliders for .products-catalog__overflow starts */
  latestSliderWrapper!.style.transform = "translateX(0)";

  latestSliderOverflow!.addEventListener(
    "touchstart",
    latestHandleTouchStart,
    false
  );
  latestSliderOverflow!.addEventListener(
    "touchmove",
    latestHandleTouchMove,
    false
  );

  function latestHandleTouchStart(e: TouchEvent) {
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
    }
  }

  function latestHandleTouchMove(e: TouchEvent) {
    if (!startX) {
      return;
    }

    let currentX = e.touches[0].clientX;
    let diffX = startX - currentX;

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
    }
  }

  function hitHandleTouchMove(e: TouchEvent) {
    if (!startX) {
      return;
    }

    let currentX = e.touches[0].clientX;
    let diffX = startX - currentX;

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
/* carousels with arrows for .products-catalog__list-grid ends */
</script>

<style lang="scss" scoped>
@import "@/assets/App.scss";
.overflow {
  overflow: hidden;
  padding-top: 2.375rem;

  &__container {
    display: flex;
    transition: transform 0.5s ease-in-out;
  }
  &__slide {
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    width: 100%;
  }
  &__slider-controls {
    display: none;
  }
}
.slide {
  &__body {
    display: flex;
    flex-direction: column;
    gap: 0.563rem;
  }
  &__content {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  &__title {
    font-family: "Pragmatica Medium";
    font-size: 2.125rem;
  }
  &__line {
    display: inline-block;
    width: 110px;
    border: 1px solid $Dark-Black;
  }
  &__desc {
    display: block;
    font-family: "Pragmatica Book";
    font-size: 0.938rem;
    color: #292929;
    line-height: 23px;
  }
  &__hero {
    margin-left: -0.938rem;
    width: calc(100% + 0.938rem * 2);
    margin-top: -2rem;
  }
  &__text-link {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    margin-top: -3.4rem;
  }
  &__text-price {
    display: block;
    text-align: center;
    font-family: "Pragmatica Book";
    font-size: 1rem;
  }
  &__price {
    font-family: "Pragmatica Medium";
    font-size: 1.375rem;
  }
  &__more-btn {
    margin: 0rem auto;
  }
}
.more-btn {
  @include btn;
  background-color: $Light-Black;
  width: 246px;
  height: 65px;

  &__content {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  &__text {
    font-family: "Pragmatica Medium";
    font-size: 1rem;
    color: #fff;
  }
  &__arrow {
    @include btn;
    background-color: $Dark-Black;
    flex-shrink: 0;
    width: 65px;
    height: 65px;
    margin-left: auto;
  }
  &__arrow-area {
    background-color: $Dark-Orange;
  }
}
.overflow__indicators-flex {
  width: fit-content;
  margin: 2.5rem auto 3.125rem auto;
}
.indicators-flex {
  display: flex;
  align-items: center;
  gap: 3.063rem;

  &__indicator {
    position: relative;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: rgb(184, 184, 184);
  }
  &__indicator::before {
    content: "";
    position: absolute;
    top: -0.35rem;
    left: -0.35rem;
    width: 250%;
    height: 250%;
    border-radius: 50%;
    border: 2px solid transparent;
    transition: border-color 0.5s;
  }
  &__indicator--active {
    background-color: #1f1f1f;
  }
  &__indicator--active::before {
    border-color: #1f1f1f;
    animation: borderFill 2.5s infinite;
  }
}
@keyframes borderFill {
  0% {
    border: 2px solid transparent;
  }
  50% {
    border: 2px solid #1f1f1f;
  }
  100% {
    border: 2px solid #1f1f1f;
  }
}
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
  &__btns-flex {
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
.best-selling {
  margin-top: 5rem;
}
.product-slider {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.indicators {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}
.indicators span {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #ccc;
  margin: 0 5px;
  cursor: pointer;
}
.indicators span.active {
  background-color: #333;
}
.season-hit {
  background-color: $Light-Black;
  padding: 2.188rem;
  overflow: hidden;
  margin: 4.375rem 0rem 3.75rem 0rem;

  &__content {
    display: flex;
    gap: 0.625rem;
    align-items: center;
  }
  &__title {
    font-family: "Pragmatica Medium";
    font-size: 2rem;
    color: #fff;
  }
  &__line {
    display: inline-block;
    width: 76px;
    border: 1px solid #fff;
  }
  &__subtitle {
    display: block;
    font-family: "Pragmatica Book";
    font-size: 1.375rem;
    color: #fff;
    margin-top: 1.063rem;
  }
  &__price-text {
    display: block;
    font-family: "Pragmatica Book";
    font-size: 1rem;
    color: #fff;
    margin-top: 1.25rem;
    margin-bottom: 0.938rem;
  }
  &__price {
    font-family: "Pragmatica Medium";
    font-size: 1.375rem;
  }
  &__more-btn {
    position: relative;
    width: 100%;
    max-width: 260px;
    background-color: $Light-Orange;
    z-index: 2;
  }
  &__hero--from320px {
    width: calc(120% + 3.876rem);
    margin-top: 1.438rem;
    margin-left: -3rem;
  }
  &__hero--from1440px {
    display: none;
  }
  &__text {
    display: flex;
    gap: 0.875rem;
    align-items: flex-start;
    margin-top: -3rem;
  }
  &__desc {
    font-family: "Pragmatica Book";
    font-size: 0.938rem;
    line-height: 165%;
    color: #fff;
  }
}
.banners {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  width: 100%;
  margin-top: 1.34rem;
}
.collection-banner {
  position: relative;
  display: flex;
  padding: 1.875rem;
  left: 0rem;
  right: 0rem;
  cursor: pointer;
  overflow: hidden;

  &__hero {
    width: calc(100% + 3.75rem);
    margin: -1.875rem;
    transition: transform 0.5s ease;
  }
  &__title {
    position: absolute;
    font-family: "Pragmatica Medium";
    font-size: 1.5rem;
    color: #fff;
    z-index: 2;
  }
  &__btn {
    position: absolute;
    @include btn;
    font-family: "Pragmatica Medium";
    font-size: 0.938rem;
    color: #fff;
    line-height: 230%;
    border-bottom: 2px solid #fff;
    bottom: 2rem;
    z-index: 2;
  }
}
.collection-banner:hover .collection-banner__hero {
  transform: scale(1.1);
}
/* 360px = 22.5em */
@media (min-width: 22.5em) {
  .products-catalog__btns-flex {
    top: 2.438rem;
  }
  .season-hit {
    &__hero--from320px {
      width: calc(114% + 3.876rem);
      margin-top: 1.438rem;
      margin-left: -3rem;
    }
  }
}
/* 768px = 48em */
@media (min-width: 48em) {
  .slide {
    flex-direction: row;

    &__body {
      order: 0;
      margin-top: 3.188rem;
    }
    &__desc {
      padding-right: 65%;
    }
    &__hero {
      order: 2;
      margin-left: auto;
      width: calc(54% + 1.563rem * 2);
      margin-top: -1.75rem;
    }
    &__text-link {
      margin-top: 15.1rem;
      margin-left: -56.2rem;
    }
    &__text-price {
      text-align: left;
    }
  }
  .indicators-flex {
    margin-top: -1.4rem;

    &__indicator::before {
      top: -0.4rem;
    }
  }
  .season-hit {
    height: 341px;

    &__title {
      font-size: 2.125rem;
    }
    &__hero--from320px {
      width: 560px;
      height: 392px;
      margin-top: -19rem;
      margin-left: 13rem;
    }
    &__text {
      display: none;
    }
  }
  .banners {
    flex-direction: row;
  }
  .collection-banner {
    flex-grow: 1;
  }
}
/* 1200px = 75em */
@media (min-width: 75em) {
  .slide {
    &__title {
      font-size: 4.313rem;
    }
    &__content {
      gap: 1.688rem;
    }
    &__desc {
      font-size: 1.125rem;
      padding-right: 55%;
    }
    &__text-link {
      margin-top: 19.5rem;
      margin-left: -67.5rem;
    }
  }
  .overflow {
    height: fit-content;

    &__slider-controls {
      margin-top: -14rem;
    }
  }
  .slider-controls {
    display: flex;
    gap: 0.875rem;

    &__prev-btn,
    &__next-btn {
      @include btn;
      width: 98px;
      height: 98px;
      border-radius: 50%;
      background-color: #ffffff;
      border: 1px solid #e2e2e2;
      z-index: 3;
      transition: background-color 0.3s ease;
    }
    &__prev-btn:hover,
    &__next-btn:hover,
    &__prev-btn:focus,
    &__next-btn:focus {
      background-color: #f6f6f6;
    }
  }
  .indicators-flex {
    margin-top: 4rem;

    &__indicator::before {
      top: -0.4rem;
    }
  }
  .products-catalog {
    &__title {
      font-size: 2.438rem;
      margin-bottom: 3.2rem;
    }
  }
  .latest-arrivals__title {
    margin-top: 5.7rem;
  }
  .best-selling {
    margin-top: 7rem;
  }
  .season-hit {
    &__hero--from320px {
      margin-left: 20rem;
    }
    &__text {
      display: flex;
      margin-top: -11rem;
      margin-left: 50rem;
    }
  }
  .collection-banner {
    padding: 3.75rem;

    &__hero {
      width: calc(100% + 7.5rem);
      margin: -3.75rem;
    }
    &__title {
      font-size: 2rem;
    }
    &__btn {
      font-size: 1.125rem;
      bottom: 3.75rem;
    }
  }
}
/* 1440px = 90em */
@media (min-width: 90em) {
  .slide {
    &__body {
      margin-top: 7.875rem;
    }
    &__hero {
      margin-left: 18.5rem;
      margin-top: -4.25rem;
      width: calc(54% + 1.563rem * 2);
    }
    &__text-link {
      margin-top: 24.1rem;
    }
  }
  .overflow {
    height: 752px;

    &__slider-controls {
      margin-top: -14.75rem;
    }
  }
  .indicators-flex {
    flex-direction: column;
    margin-top: -25rem;
    margin-right: 1.75rem;

    &__indicator::before {
      top: -0.4rem;
    }
  }
  .season-hit {
    height: 618px;
    padding: 4.375rem;
    margin-top: 7.188rem;

    &__body {
      margin-top: 1.7rem;
    }
    &__content {
      gap: 1rem;
    }
    &__title {
      font-size: 3.875rem;
    }
    &__line {
      width: 123px;
    }
    &__subtitle {
      font-size: 2.25rem;
    }
    &__hero--from320px {
      display: none;
    }
    &__hero--from1440px {
      display: block;
      margin-top: -30rem;
      margin-left: -7rem;
    }
    &__text {
      margin-top: -9rem;
      margin-left: 58rem;
    }
  }
}
/* 1920px = 120em */
@media (min-width: 120em) {
  .season-hit {
    width: 1500px;
    margin-left: -4.375rem;

    &__text {
      margin-top: -13.3rem;
      margin-left: 67rem;
    }
  }
}
</style>
