<template>
  <div class="catalog">
    <div class="catalog__menu menu">
      <div class="menu__main-flex">
        <div class="menu__lists-flex">
          <div class="menu__column-flex">
            <span class="menu__column-title">Лето</span>
            <ul class="menu__column-list-flex">
              <li><nuxt-link to="">Для бега</nuxt-link></li>
              <li><nuxt-link to="">Повседневные</nuxt-link></li>
              <li><nuxt-link to="">Треккинг</nuxt-link></li>
              <li><nuxt-link to="">Для футбола</nuxt-link></li>
              <li><nuxt-link to="">Для волейбола</nuxt-link></li>
              <li><nuxt-link to="">Для баскетбола</nuxt-link></li>
              <li><nuxt-link to="">Для тенниса</nuxt-link></li>
              <li><nuxt-link to="">Спортивные</nuxt-link></li>
            </ul>
          </div>
          <div class="menu__column-flex menu__middle-column-flex">
            <div class="menu__column-flex">
              <span class="menu__column-title">Демисезон</span>
              <ul class="menu__column-list-flex">
                <li><nuxt-link to="">Для бега</nuxt-link></li>
                <li><nuxt-link to="">Повседневные</nuxt-link></li>
                <li><nuxt-link to="">Треккинг</nuxt-link></li>
                <li><nuxt-link to="">Кожаные</nuxt-link></li>
              </ul>
            </div>
            <div class="menu__column-flex">
              <span class="menu__column-title">Зима</span>
              <ul class="menu__column-list-flex">
                <li><nuxt-link to="">Утепленные</nuxt-link></li>
                <li><nuxt-link to="">Повседневные</nuxt-link></li>
                <li><nuxt-link to="">Кожаные</nuxt-link></li>
              </ul>
            </div>
          </div>
          <div class="menu__column-flex">
            <span class="menu__column-title">Модели</span>
            <ul class="menu__column-list-flex">
              <li><nuxt-link to="">Nike Air Force 1</nuxt-link></li>
              <li><nuxt-link to="">Nike SB Dunk Low</nuxt-link></li>
              <li><nuxt-link to="">Nike Air Max 90</nuxt-link></li>
              <li><nuxt-link to="">NIke Shox</nuxt-link></li>
              <li><nuxt-link to="">Nike Blazer</nuxt-link></li>
              <li><nuxt-link to="">Nike Air Max Plus</nuxt-link></li>
            </ul>
          </div>
        </div>
        <nuxt-link to="">
          <div class="menu__hero-card hero-card">
            <span class="hero-card__title"
              >Новая коллекция в каталоге Nike Air Max Solo</span
            >
            <img src="/imgs/catalog-hero.svg" alt="" class="hero-card__hero" />
            <button class="hero-card__go-to-catalog-btn">
              Перейти в каталог
            </button>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/App.scss";
.catalog {
  display: none;
}
/* 1200px = 75em */
@media (min-width: 75em) {
  .catalog {
    display: block;
    position: absolute;
    overflow: hidden;
    width: 100%;
    box-shadow: 0px 10px 55px 0px rgba(0, 0, 0, 0.08);
    max-height: 0;
    transition: max-height 0.15s ease-in-out;
    z-index: 2;
  }
  .catalog__menu--opened {
    max-height: 100vh;
    transition: max-height 0.15s ease-in-out;
  }
  .menu {
    &__main-flex {
      display: flex;
      justify-content: space-between;
      padding: 2.5rem calc((100vw - 71.875rem) / 2);
    }
    &__lists-flex {
      display: flex;
      gap: 6.7rem;
    }
    &__column-flex {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }
    &__middle-column-flex {
      display: flex;
      flex-direction: column;
      gap: 1.875rem;
    }
    &__column-title {
      font-family: "Pragmatica Medium";
      font-size: 1.125rem;
    }
    &__column-list-flex {
      display: flex;
      flex-direction: column;
      gap: 0.875rem;
      list-style-type: none;
      padding: 0rem;
      margin: 0rem;
    }
    &__column-list-flex li {
      font-family: "Pragmatica Book";
      font-size: 0.875rem;
    }
    &__column-list-flex li:hover {
      color: $Blue;
      cursor: pointer;
    }
  }
  .menu__hero-card {
    position: relative;
    width: 380px;
    height: 346px;
    padding: 1.875rem;
    cursor: pointer;
  }
  .hero-card {
    &__title {
      position: absolute;
      font-family: "Pragmatica Medium";
      font-size: 1.5rem;
      color: #ffffff;
      padding-right: 7rem;
    }
    &__hero {
      width: 380px;
      height: 346px;
      object-fit: cover;
      margin-top: -1.875rem;
      margin-left: -1.875rem;
    }
    &__go-to-catalog-btn {
      position: absolute;
      @include btn;
      font-family: "Pragmatica Medium";
      font-size: 1.125rem;
      color: #fff;
      margin-top: -4.5rem;
      border-bottom: 2px solid #ffffff;
      line-height: 200%;
    }
  }
}
/* 1440px = 90em */
@media (min-width: 90em) {
  .menu {
    &__main-flex {
      padding: 2.5rem calc((100vw - 85rem) / 2);
    }
    &__lists-flex {
      gap: 10.1rem;
    }
  }
  .menu__hero-card,
  .hero-card__hero {
    width: 440px;
  }
}
</style>
