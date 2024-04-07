<template>
  <div class="container">
    <div class="container__advertises-touch-circle"></div>
    <div class="slider-advertises">
      <div class="slider-advertises__overflow overflow">
        <div class="overflow__flex">
          <div class="overflow__slide slide">
            <span class="slide__text">AIR MAX</span>
            <span class="slide__line"></span>
            <br />
            <span class="slide__text">FLYKNIT RACER</span>
            <img
              class="slide__hero"
              src="@/public/imgs/advertise-hero.png"
              alt=""
            />
            <span class="slide__text-price"
              >от <span class="slide__price"></span>₽</span
            >
            <button class="slide__more-btn">
              Подробнее
              <div class="slide__more-btn-arrow">
                <img src="@/public/imgs/white-right-arrow.svg" alt="" />
              </div>
            </button>
          </div>
          <div class="overflow__slide slide">
            <span class="slide__text">AIR MAX</span>
            <span class="slide__line"></span>
            <br />
            <span class="slide__text">FLYKNIT RACER</span>
            <img
              class="slide__hero"
              src="@/public/imgs/advertise-hero.png"
              alt=""
            />
            <span class="slide__text-price"
              >от <span class="slide__price"></span>₽</span
            >
            <button class="slide__more-btn">
              Подробнее
              <div class="slide__more-btn-arrow">
                <img src="@/public/imgs/white-right-arrow.svg" alt="" />
              </div>
            </button>
          </div>
          <div class="overflow__slide slide">
            <span class="slide__text">AIR MAX</span>
            <span class="slide__line"></span>
            <br />
            <span class="slide__text">FLYKNIT RACER</span>
            <img
              class="slide__hero"
              src="@/public/imgs/advertise-hero.png"
              alt=""
            />
            <span class="slide__text-price"
              >от <span class="slide__price"></span>₽</span
            >
            <button class="slide__more-btn">
              Подробнее
              <div class="slide__more-btn-arrow">
                <img src="@/public/imgs/white-right-arrow.svg" alt="" />
              </div>
            </button>
          </div>
          <div class="overflow__slide slide">
            <span class="slide__text">AIR MAX</span>
            <span class="slide__line"></span>
            <br />
            <span class="slide__text">FLYKNIT RACER</span>
            <img
              class="slide__hero"
              src="@/public/imgs/advertise-hero.png"
              alt=""
            />
            <span class="slide__text-price"
              >от <span class="slide__price"></span>₽</span
            >
            <button class="slide__more-btn">
              Подробнее
              <div class="slide__more-btn-arrow">
                <img src="@/public/imgs/white-right-arrow.svg" alt="" />
              </div>
            </button>
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
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.container {
  &__advertises-touch-circle {
  }
}
.slider-advertises {
  &__overflow {
  }
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
  }
  &__prev-btn {
  }
  &__next-btn {
  }
}
.slide {
  &__text {
  }
  &__hero {
    width: 100%;
  }
  &__line {
  }
  &__text-price {
  }
  &__price {
  }
  &__more-btn {
  }
  &__more-btn-arrow {
  }
}
</style>
