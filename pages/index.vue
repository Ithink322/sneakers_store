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
            <img class="slide__hero" src="/imgs/advertise-hero.webp" alt="" />
            <div class="slide__text-link">
              <span class="slide__text-price"
                >от <span class="slide__price">9900 ₽</span></span
              >
              <UIButton
                class="slide__more-btn"
                :link="`/catalog?page=${catalogStore.currentPage}`"
              ></UIButton>
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
            <img class="slide__hero" src="/imgs/advertise-hero.webp" alt="" />
            <div class="slide__text-link">
              <span class="slide__text-price"
                >от <span class="slide__price">8800 ₽</span></span
              >
              <UIButton
                class="slide__more-btn"
                :link="`/catalog?page=${catalogStore.currentPage}`"
              ></UIButton>
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
            <img class="slide__hero" src="/imgs/advertise-hero.webp" alt="" />
            <div class="slide__text-link">
              <span class="slide__text-price"
                >от <span class="slide__price">7700 ₽</span></span
              >
              <UIButton
                class="slide__more-btn"
                :link="`/catalog?page=${catalogStore.currentPage}`"
              ></UIButton>
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
            <img class="slide__hero" src="/imgs/advertise-hero.webp" alt="" />
            <div class="slide__text-link">
              <span class="slide__text-price"
                >от <span class="slide__price">6600 ₽</span></span
              >
              <UIButton
                class="slide__more-btn"
                :link="`/catalog?page=${catalogStore.currentPage}`"
              ></UIButton>
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
    <div v-if="allProductsLength > 0">
      <UIProductsSlider
        class="latest-slider--margin"
        :title="'ПОСЛЕДНИЕ<br/> ПОСТУПЛЕНИЯ'"
        :latestProducts="latestProducts"
      ></UIProductsSlider>
      <UIProductsSlider
        class="hit-slider--margin"
        :title="'САМЫЕ<br/> ПРОДОВАЕМЫЕ'"
        :hitProducts="hitProducts"
      ></UIProductsSlider>
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
      <UIButton
        class="season-hit__more-btn"
        :link="''"
        :bodyBgColor="'#ff6915'"
        :arrowBgColor="'#fb5a00'"
      ></UIButton>
      <img
        class="season-hit__hero season-hit__hero--from320px"
        src="/imgs/season-hit-hero--from320px.svg"
        alt=""
      />
      <img
        class="season-hit__hero season-hit__hero--from1440px"
        src="/imgs/season-hit-hero--from1440px.webp"
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
    <UIRecentPostsList v-if="allPostsLength > 0"></UIRecentPostsList>
    <UIProductsWithDiscountList></UIProductsWithDiscountList>
    <div class="banners">
      <NuxtLink
        class="link"
        :to="{
          path: '/catalog',
          query: { page: currentCatalogPage },
        }"
      >
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
      </NuxtLink>
      <NuxtLink
        class="link"
        :to="{
          path: '/catalog',
          query: { page: currentCatalogPage },
        }"
      >
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
      </NuxtLink>
    </div>
    <UIAboutUs></UIAboutUs>
  </main>
</template>

<script setup lang="ts">
import { useProductsStore } from "@/store/Products";
import { usePostsStore } from "@/store/Posts";
import { latestProducts } from "@/data/ProductsInSlider";
import { hitProducts } from "@/data/ProductsInSlider";

useHead({
  title: "Sneakers Store - Купить Nike онлайн | Огромный выбор моделей",
  meta: [
    {
      name: "description",
      content:
        "Sneakers Store - ваш интернет-магазин кроссовок Nike. Широкий ассортимент моделей для мужчин и женщин, доступные цены и быстрая доставка. Найдите свою идеальную пару Nike сегодня!",
    },
    {
      name: "keywords",
      content:
        "Nike, кроссовки Nike, купить Nike, интернет-магазин, Sneakers Store, мужские кроссовки Nike, женские кроссовки Nike, спортивная обувь Nike, доставка, цены",
    },
  ],
});

const catalogStore = useProductsStore();
const currentCatalogPage = computed(() => catalogStore.currentPage);
const allProductsLength = computed(() => catalogStore.allProducts.length);
const postsStore = usePostsStore();
const allPostsLength = computed(() => postsStore.allPosts.length);

onMounted(() => {
  /* autoplay carousel .overflow__container from 1440px starts */
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
  /* autoplay carousel for .overflow__container from 1440px ends */
});
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
  /* .products-catalog__btns-flex {
    top: 2.438rem;
  } */
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
  .link {
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
  .latest-slider--margin {
    margin-top: 5.7rem;
  }
  .hit-slider--margin {
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
  .latest-slider--margin {
    margin-top: 8.75rem;
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
