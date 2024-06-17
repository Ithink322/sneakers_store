<template>
  <div class="about-us">
    <h1 class="about-us__title">
      ИНТЕРНЕТ-МАГАЗИН<br />
      <div class="about-us__content">
        SWOOSH STORE
        <div class="about-us__line"></div>
      </div>
    </h1>
    <div class="about-us__text about-us__text-1">
      Добро пожаловать в <strong>Swoosh Store</strong> – ваш источник подлинных
      кроссовок Nike и непревзойденного стиля! Мы рады представить вам
      уникальную онлайн-платформу, где вы сможете окунуться в мир инноваций и
      моды от легендарного бренда спортивной обуви.
    </div>
    <div class="about-us__text about-us__text-2">
      <strong>Легендарное наследие Nike:</strong><br />
      <span class="about-us__text-2 about-us__text-2--margin-top">
        Swoosh Store - это место, где история и стиль сливаются воедино. Мы
        гордимся тем, что предлагаем вам только оригинальные кроссовки Nike,
        продукцию, которая воплощает более чем полувековое наследие инноваций,
        комфорта и качества. Каждая пара кроссовок – это не просто спортивная
        обувь, это произведение искусства, воплощающее дух победы и страстную
        преданность активному образу жизни.
      </span>
    </div>
    <img src="/imgs/about-us-hero.webp" alt="" class="about-us__hero" />
    <NuxtLink to="/AboutUs" class="about-us__more-btn-link">
      <button class="about-us__more-btn more-btn">
        <div class="more-btn__flex">
          <span class="more-btn__text">Подробнее</span>
        </div>
        <div class="more-btn__arrow">
          <img src="/imgs/white-right-arrow.svg" alt="" />
        </div>
      </button>
    </NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/App.scss";
.about-us {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.125rem;
  margin-top: 3.75rem;

  &__content {
    display: flex;
    align-items: center;
    gap: 0.875rem;
  }
  &__title {
    font-family: "Pragmatica Medium";
    font-size: 1.5rem;
    margin: 0rem;
  }
  &__text-2--margin-top {
    margin-top: 0.4rem;
  }
  &__line {
    width: 90px;
    height: 2px;
    background-color: $Dark-Black;
  }
  &__text {
    font-family: "Pragmatica Book";
    font-size: 0.938rem;
    line-height: 23px;
  }
  &__hero {
    margin-right: -0.938rem;
  }
  &__more-btn-link {
    text-decoration: none;
  }
  &__more-btn {
    margin: 0 auto;
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
    flex-shrink: 0;
    width: 65px;
    height: 65px;
    margin-left: auto;
  }
}
/* 768px = 48em */
@media (min-width: 48em) {
  .about-us {
    margin-right: calc((100vw - 44.874rem) / (-2));

    &__text-1 {
      order: 0;
      padding-right: 24rem;
      margin-right: calc((100vw - 44.874rem) / 2);
    }
    &__text-2 {
      order: 1;
      margin-right: calc((100vw - 44.874rem) / 2);
    }
    &__text {
      font-family: "Pragmatica Book";
      font-size: 0.938rem;
    }
    &__hero {
      width: 50vw;
      height: calc(50vw * 0.72);
      margin-left: auto;
      margin-right: 0;
      margin-top: -15.75rem;
    }
    &__more-btn-link {
      order: 2;
    }
    &__more-btn {
      margin-left: 0;
    }
  }
}
/* 1024px = 64em */
@media (min-width: 64em) {
  .about-us {
    margin-right: calc((100vw - 44.75rem) / (-2));
  }
}
/* 1200px = 75em */
@media (min-width: 75em) {
  .about-us {
    margin-top: 12.063rem;
    margin-right: calc((100vw - 71.875rem) / (-2));

    &__text-2 {
      padding-right: 24rem;
    }
    &__hero {
      position: absolute;
      order: 3;
      margin-top: -3rem;
      right: 0;
    }
  }
}
/* 1440px = 90em */
@media (min-width: 90em) {
  .about-us {
    margin-right: calc((100vw - 85rem) / (-2));

    &__line {
      width: 123px;
    }
    &__title {
      font-size: 2.438rem;
    }
    &__text {
      font-size: 1rem;
    }
    &__hero {
      position: static;
      max-width: 853px;
      max-height: 600px;
      margin-top: -34rem;
    }
  }
}
/* 1920px = 120em */
@media (min-width: 120em) {
  .about-us {
    &__text-1,
    &__text-2 {
      padding-right: 16rem;
    }
    &__hero {
      max-width: 853px;
      max-height: 600px;
      margin-top: -32rem;
    }
  }
}
</style>
