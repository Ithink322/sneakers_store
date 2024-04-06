<template>
  <div class="catalog-menu">
    <div class="catalog-menu__main-flex">
      <div class="catalog-menu__lists-flex">
        <div class="catalog-menu__column-flex">
          <span class="catalog-menu__column-title">Лето</span>
          <ul class="catalog-menu__column-list-flex">
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
        <div class="catalog-menu__column-flex catalog-menu__middle-column-flex">
          <div class="catalog-menu__column-flex">
            <span class="catalog-menu__column-title">Демисезон</span>
            <ul class="catalog-menu__column-list-flex">
              <li><nuxt-link to="">Для бега</nuxt-link></li>
              <li><nuxt-link to="">Повседневные</nuxt-link></li>
              <li><nuxt-link to="">Треккинг</nuxt-link></li>
              <li><nuxt-link to="">Кожаные</nuxt-link></li>
            </ul>
          </div>
          <div class="catalog-menu__column-flex">
            <span class="catalog-menu__column-title">Зима</span>
            <ul class="catalog-menu__column-list-flex">
              <li><nuxt-link to="">Утепленные</nuxt-link></li>
              <li><nuxt-link to="">Повседневные</nuxt-link></li>
              <li><nuxt-link to="">Кожаные</nuxt-link></li>
            </ul>
          </div>
        </div>
        <div class="catalog-menu__column-flex">
          <span class="catalog-menu__column-title">Модели</span>
          <ul class="catalog-menu__column-list-flex">
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
        <div class="catalog-menu__hero-card">
          <span class="catalog-menu__hero-card-title"
            >Новая коллекция в каталоге Nike Air Max Solo</span
          >
          <img
            src="@/public/imgs/catalog-hero.svg"
            alt=""
            class="catalog-menu__hero"
          />
          <button class="catalog-menu__hero-card-go-to-catalog-btn">
            Перейти в каталог
          </button>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/App.scss";
.catalog-menu {
  display: none;
}
/* 1200px = 75em */
@media (min-width: 75em) {
  .catalog-menu {
    display: block;
    overflow: hidden;
    box-shadow: 0px 10px 55px 0px rgba(0, 0, 0, 0.08);
    max-height: 0;
    transition: max-height 0.15s ease-in-out;
  }
  .catalog-menu-opened {
    max-height: 100vh;
    transition: max-height 0.15s ease-in-out;
  }
  .catalog-menu__main-flex {
    display: flex;
    justify-content: space-between;
    padding: 2.5rem calc((100vw - 71.875rem) / 2);
  }
  .catalog-menu__lists-flex {
    display: flex;
    gap: 6.7rem;
  }
  .catalog-menu__column-flex {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
  .catalog-menu__middle-column-flex {
    display: flex;
    flex-direction: column;
    gap: 1.875rem;
  }
  .catalog-menu__column-title {
    font-family: "Pragmatica Medium";
    font-size: 1.125rem;
  }
  .catalog-menu__column-list-flex {
    display: flex;
    flex-direction: column;
    gap: 0.875rem;
    list-style-type: none;
    padding: 0rem;
    margin: 0rem;
  }
  .catalog-menu__column-list-flex li {
    font-family: "Pragmatica Book";
    font-size: 0.875rem;
  }
  .catalog-menu__column-list-flex li:hover {
    color: $Blue;
    cursor: pointer;
  }
  .catalog-menu__hero-card {
    position: relative;
    width: 380px;
    height: 346px;
    padding: 1.875rem;
    cursor: pointer;
  }
  .catalog-menu__hero-card-title {
    position: absolute;
    font-family: "Pragmatica Medium";
    font-size: 1.5rem;
    color: #ffffff;
    padding-right: 7rem;
  }
  .catalog-menu__hero {
    width: 380px;
    height: 346px;
    object-fit: cover;
    margin-top: -1.875rem;
    margin-left: -1.875rem;
  }
  .catalog-menu__hero-card-go-to-catalog-btn {
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
/* 1440px = 90em */
@media (min-width: 90em) {
  .catalog-menu__main-flex {
    padding: 2.5rem calc((100vw - 85rem) / 2);
  }
  .catalog-menu__lists-flex {
    gap: 10.1rem;
  }
  .catalog-menu__hero-card,
  .catalog-menu__hero {
    width: 440px;
  }
}
</style>
