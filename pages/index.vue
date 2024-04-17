<template>
  <div class="container">
    <div class="slider-advertises">
      <div class="slider-advertises__overflow overflow">
        <div class="overflow__flex">
          <div class="overflow__slide overflow__slide-flex slide">
            <div class="slide__title-and-text-flex">
              <div>
                <div class="slide__title-and-line-flex">
                  <span class="slide__title">AIR MAX</span>
                  <span class="slide__line"></span>
                </div>
                <span class="slide__title">FLYKNIT RACER</span>
              </div>
              <span class="slide__text"
                >Усиленный носок и прочный пластиковый каркас. Инновационная
                технология раскрывается через перфорированную стельку</span
              >
            </div>
            <img
              class="slide__hero"
              src="@/public/imgs/advertise-hero.png"
              alt=""
            />
            <div class="slide__text-price-and-more-btn-flex">
              <span class="slide__text-price"
                >от <span class="slide__price">9900 ₽</span></span
              >
              <button class="slide__more-btn more-btn">
                <div class="more-btn__flex">
                  <span class="more-btn__text">Подробнее</span>
                </div>
                <div class="more-btn__arrow">
                  <img src="@/public/imgs/white-right-arrow.svg" alt="" />
                </div>
              </button>
            </div>
          </div>
          <div class="overflow__slide overflow__slide-flex slide">
            <div class="slide__title-and-text-flex">
              <div>
                <div class="slide__title-and-line-flex">
                  <span class="slide__title">AIR MAX</span>
                  <span class="slide__line"></span>
                </div>
                <span class="slide__title">FLYKNIT RACER</span>
              </div>
              <span class="slide__text"
                >Усиленный носок и прочный пластиковый каркас. Инновационная
                технология раскрывается через перфорированную стельку</span
              >
            </div>
            <img
              class="slide__hero"
              src="@/public/imgs/advertise-hero.png"
              alt=""
            />
            <div class="slide__text-price-and-more-btn-flex">
              <span class="slide__text-price"
                >от <span class="slide__price">9900 ₽</span></span
              >
              <button class="slide__more-btn more-btn">
                <div class="more-btn__flex">
                  <span class="more-btn__text">Подробнее</span>
                </div>
                <div class="more-btn__arrow">
                  <img src="@/public/imgs/white-right-arrow.svg" alt="" />
                </div>
              </button>
            </div>
          </div>
          <div class="overflow__slide overflow__slide-flex slide">
            <div class="slide__title-and-text-flex">
              <div>
                <div class="slide__title-and-line-flex">
                  <span class="slide__title">AIR MAX</span>
                  <span class="slide__line"></span>
                </div>
                <span class="slide__title">FLYKNIT RACER</span>
              </div>
              <span class="slide__text"
                >Усиленный носок и прочный пластиковый каркас. Инновационная
                технология раскрывается через перфорированную стельку</span
              >
            </div>
            <img
              class="slide__hero"
              src="@/public/imgs/advertise-hero.png"
              alt=""
            />
            <div class="slide__text-price-and-more-btn-flex">
              <span class="slide__text-price"
                >от <span class="slide__price">9900 ₽</span></span
              >
              <button class="slide__more-btn more-btn">
                <div class="more-btn__flex">
                  <span class="more-btn__text">Подробнее</span>
                </div>
                <div class="more-btn__arrow">
                  <img src="@/public/imgs/white-right-arrow.svg" alt="" />
                </div>
              </button>
            </div>
          </div>
          <div class="overflow__slide overflow__slide-flex slide">
            <div class="slide__title-and-text-flex">
              <div>
                <div class="slide__title-and-line-flex">
                  <span class="slide__title">AIR MAX</span>
                  <span class="slide__line"></span>
                </div>
                <span class="slide__title">FLYKNIT RACER</span>
              </div>
              <span class="slide__text"
                >Усиленный носок и прочный пластиковый каркас. Инновационная
                технология раскрывается через перфорированную стельку</span
              >
            </div>
            <img
              class="slide__hero"
              src="@/public/imgs/advertise-hero.png"
              alt=""
            />
            <div class="slide__text-price-and-more-btn-flex">
              <span class="slide__text-price"
                >от <span class="slide__price">9900 ₽</span></span
              >
              <button class="slide__more-btn more-btn">
                <div class="more-btn__flex">
                  <span class="more-btn__text">Подробнее</span>
                </div>
                <div class="more-btn__arrow">
                  <img src="@/public/imgs/white-right-arrow.svg" alt="" />
                </div>
              </button>
            </div>
          </div>
        </div>
        <div class="overflow__prev-and-next-btns-flex">
          <button class="overflow__prev-btn">
            <img src="@/public/imgs/prev-btn-arrow.svg" alt="" />
          </button>
          <button class="overflow__next-btn">
            <img src="@/public/imgs/next-btn-arrow.svg" alt="" />
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
  </div>
</template>

<script setup lang="ts">
onMounted(() => {
  /* carousel for .overflow__flex from 1440px starts */
  let slides = document.querySelectorAll(".slide");
  const prevBtn = document.querySelector<HTMLElement>(".overflow__prev-btn")!,
    nextBtn = document.querySelector<HTMLElement>(".overflow__next-btn")!,
    carouselContainer = document.querySelector<HTMLElement>(".overflow__flex")!;
  let currentPosition = 0,
    currentIndex = 0;

  prevBtn.addEventListener("click", () => {
    currentIndex--;
    currentPosition += 100;
    if (currentIndex < 0) {
      currentIndex = slides.length - 1;
      currentPosition = -100 * (slides.length - 1);
    }
    carouselContainer.style.transform = `translateX(${currentPosition}%)`;
    updateIndicators();
  });

  function nextSlide() {
    currentIndex++;
    currentPosition -= 100;
    if (currentIndex === slides.length) {
      currentIndex = 0;
      currentPosition = 0;
    }
    carouselContainer.style.transform = `translateX(${currentPosition}%)`;
    updateIndicators();
  }

  nextBtn.addEventListener("click", () => {
    nextSlide();
  });

  setInterval(() => nextSlide(), 5000);

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
  /* carousel for .overflow__flex from 1440px ends */
});
</script>

<style lang="scss" scoped>
@import "@/assets/App.scss";
.container {
  padding: 2.375rem 0.938rem 0rem 0.938rem;
}
.overflow {
  overflow: hidden;

  &__flex {
    display: flex;
    transition: transform 0.5s ease-in-out;
  }
  &__slide {
    flex-shrink: 0;
    width: 100%;
  }
  &__prev-and-next-btns-flex {
    display: none;
  }
}
.overflow__slide-flex {
  display: flex;
  flex-direction: column;
}
.slide {
  &__title-and-text-flex {
    display: flex;
    flex-direction: column;
    gap: 0.563rem;
  }
  &__title-and-line-flex {
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
  &__text {
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
  &__text-price-and-more-btn-flex {
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

  &__flex {
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
    width: 65px;
    height: 65px;
    margin-left: auto;
  }
}
.overflow__indicators-flex {
  width: fit-content;
  margin: 2.5rem auto;
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
/* 768px = 48em */
@media (min-width: 48em) {
  .container {
    padding: 0rem calc((100vw - 44.874rem) / 2);
  }
  .overflow__slide-flex {
    flex-direction: row;
  }
  .slide {
    &__title-and-text-flex {
      order: 0;
      margin-top: 3.188rem;
    }
    &__text {
      padding-right: 65%;
    }
    &__hero {
      order: 2;
      margin-left: auto;
      width: calc(54% + 1.563rem * 2);
      margin-top: -1.75rem;
    }
    &__text-price-and-more-btn-flex {
      margin-top: 15.1rem;
      margin-left: -56.2rem;
    }
    &__text-price {
      text-align: left;
    }
    &__more-btn {
      order: 1;
    }
  }
  .indicators-flex {
    margin-top: -1.4rem;

    &__indicator::before {
      top: -0.4rem;
    }
  }
}
/* 1024px = 64em */
@media (min-width: 64em) {
  .container {
    padding: 0rem calc((100vw - 44.75rem) / 2);
  }
}
/* 1200px = 75em */
@media (min-width: 75em) {
  .container {
    padding: 0rem calc((100vw - 71.875rem) / 2);
  }
  .slide {
    &__title {
      font-size: 4.313rem;
    }
    &__title-and-line-flex {
      gap: 1.688rem;
    }
    &__text {
      font-size: 1.125rem;
      padding-right: 55%;
    }
    &__text-price-and-more-btn-flex {
      margin-top: 19.5rem;
      margin-left: -67.5rem;
    }
  }
  .overflow {
    height: 100vh;
    &__prev-and-next-btns-flex {
      display: flex;
      gap: 0.875rem;
      margin-top: -14rem;
    }
    &__prev-btn,
    &__next-btn {
      @include btn;
      width: 98px;
      height: 98px;
      border-radius: 50%;
      background-color: #ffffff;
      border: 1px solid #e2e2e2;
      z-index: 3;
    }
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
}
/* 1440px = 90em */
@media (min-width: 90em) {
  .container {
    padding: 0rem calc((100vw - 85rem) / 2);
  }
  .slide {
    &__title-and-text-flex {
      margin-top: 7.875rem;
    }
    &__hero {
      margin-left: 18.5rem;
      margin-top: -4.25rem;
      width: calc(54% + 1.563rem * 2);
    }
    &__text-price-and-more-btn-flex {
      margin-top: 24.1rem;
    }
  }
  .overflow {
    &__prev-and-next-btns-flex {
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
}
/* 1920px = 120em */
@media (min-width: 120em) {
}
</style>
