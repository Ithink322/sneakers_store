<template>
  <div v-if="isCatalogMenuOpen" class="catalog">
    <div class="catalog__menu menu">
      <div class="menu__body">
        <div class="menu__lists">
          <div class="menu__column">
            <span class="menu__column-title">Лето</span>
            <ul class="menu__column-list">
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
          <div class="menu__column menu__middle-column">
            <div class="menu__column">
              <span class="menu__column-title">Демисезон</span>
              <ul class="menu__column-list">
                <li><nuxt-link to="">Для бега</nuxt-link></li>
                <li><nuxt-link to="">Повседневные</nuxt-link></li>
                <li><nuxt-link to="">Треккинг</nuxt-link></li>
                <li><nuxt-link to="">Кожаные</nuxt-link></li>
              </ul>
            </div>
            <div class="menu__column">
              <span class="menu__column-title">Зима</span>
              <ul class="menu__column-list">
                <li><nuxt-link to="">Утепленные</nuxt-link></li>
                <li><nuxt-link to="">Повседневные</nuxt-link></li>
                <li><nuxt-link to="">Кожаные</nuxt-link></li>
              </ul>
            </div>
          </div>
          <div class="menu__column">
            <span class="menu__column-title">Модели</span>
            <ul class="menu__column-list">
              <li>
                <nuxt-link
                  @click="closeCatalogMenu"
                  :to="{
                    path: '/catalog',
                    query: { page: currentCatalogPage },
                  }"
                  >Все модели</nuxt-link
                >
              </li>
              <li>
                <nuxt-link
                  @click="closeCatalogMenu"
                  to="/catalog/nike-air-force-1/1?page=1"
                  >Nike Air Force 1</nuxt-link
                >
              </li>
              <li>
                <nuxt-link
                  @click="closeCatalogMenu"
                  to="/catalog/nike-air-max-90/2?page=1"
                  >Nike Air Max 90</nuxt-link
                >
              </li>
              <li>
                <nuxt-link
                  @click="closeCatalogMenu"
                  to="/catalog/nike-dunk-low/3?page=1"
                  >Nike Dunk Low</nuxt-link
                >
              </li>
              <li>
                <nuxt-link
                  @click="closeCatalogMenu"
                  to="/catalog/nike-react-infinity-run-flyknit/4?page=1"
                  >Nike React Infinity Run Flyknit</nuxt-link
                >
              </li>
              <li>
                <nuxt-link
                  @click="closeCatalogMenu"
                  to="/catalog/nike-vapormax-flyknit-2/5?page=1"
                  >Nike VaporMax Flyknit 2</nuxt-link
                >
              </li>
              <li>
                <nuxt-link
                  @click="closeCatalogMenu"
                  to="/catalog/nike-air-zoom-pegasus-39/6?page=1"
                  >Nike Air Zoom Pegasus 39</nuxt-link
                >
              </li>
              <li>
                <nuxt-link
                  @click="closeCatalogMenu"
                  to="/catalog/nike-air-jordan-1-retro-high-og-lost-found/7?page=1"
                  >Nike Air Jordan 1 Retro High OG "Lost & Found"</nuxt-link
                >
              </li>
              <li>
                <nuxt-link
                  @click="closeCatalogMenu"
                  to="/catalog/nike-air-max-1-animal-pack/8?page=1"
                  >Nike Air Max 1 "Animal Pack"</nuxt-link
                >
              </li>
              <li>
                <nuxt-link
                  @click="closeCatalogMenu"
                  to="/catalog/sacai-x-nike-vaporwaffle/9?page=1"
                  >Sacai x Nike VaporWaffle</nuxt-link
                >
              </li>
            </ul>
          </div>
        </div>
        <nuxt-link @click="closeCatalogMenu" to="/Catalog">
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

<script setup lang="ts">
import { useCatalogMenu } from "@/store/CatalogMenu";
import { useProductsStore } from "@/store/Products";

const store = useCatalogMenu();
const isCatalogMenuOpen = computed(() => store.isCatalogMenuOpen);
const closeCatalogMenu = () => {
  store.closeCatalogMenu();
};

const catalogStore = useProductsStore();
const currentCatalogPage = computed(() => catalogStore.currentPage);
</script>

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
    background: #fff;
    box-shadow: 0px 10px 55px 0px rgba(0, 0, 0, 0.08);
    max-height: 0;
    transition: max-height 0.15s ease-in-out;
    z-index: 2;
  }
  .catalog.active {
    max-height: 100vh;
    transition: max-height 0.15s ease-in-out;
  }
  .menu {
    position: relative;

    &__body {
      display: flex;
      justify-content: space-between;
      padding: 2.5rem calc((100vw - 71.875rem) / 2);
    }
    &__lists {
      display: flex;
      gap: 6.7rem;
    }
    &__column {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }
    &__middle-column {
      display: flex;
      flex-direction: column;
      gap: 1.875rem;
    }
    &__column-title {
      font-family: "Pragmatica Medium";
      font-size: 1.125rem;
    }
    &__column-list {
      display: flex;
      flex-direction: column;
      gap: 0.875rem;
      list-style-type: none;
      padding: 0rem;
      margin: 0rem;
    }
    &__column-list li {
      font-family: "Pragmatica Book";
      font-size: 0.875rem;
      cursor: pointer;
    }
    &__column-list li a {
      transition: color 0.3s ease;
    }
    &__column-list li:hover a {
      color: $Dark-Orange;
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
    &__body {
      padding: 2.5rem calc((100vw - 85rem) / 2);
    }
    &__lists {
      gap: 10.1rem;
    }
  }
  .menu__hero-card,
  .hero-card__hero {
    width: 440px;
  }
}
</style>
