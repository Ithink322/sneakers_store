<template>
  <div class="burger-menu-shadow" :class="{ active: props.isOpen }">
    <button @click="closeBurgerMenu" class="burger-menu-shadow__close-btn">
      <img src="/imgs/cross.svg" alt="cross" />
    </button>
    <nav class="burger-menu">
      <form
        @submit.prevent="
          {
            searchCatalog(), search();
          }
        "
        ref="searchForm"
        class="burger-menu__search-form search-form"
      >
        <input
          @input="handleSearchInput(searchQuery)"
          ref="searchInput"
          v-model="searchQuery"
          placeholder="Поиск по каталогу товаров..."
          type="text"
          class="search-form__input"
        />
        <button class="search-form__search-btn">
          <img src="/imgs/search-icon.svg" alt="" />
        </button>
        <div
          v-if="searchResults.length > 0"
          class="search-form__search-results"
        >
          <NuxtLink
            @click="closeBurgerMenu"
            :to="`/catalog/${slugify(product.title)}/${product.id}?page=1`"
            v-for="product in searchResults"
            :key="product.id"
            class="search-form__search-result-item"
          >
            <div class="search-form__product-hero-body">
              <img
                :src="product.heroes[0]"
                alt="Product Image"
                class="search-form__product-hero"
              />
            </div>
            <div class="search-form__product-info">
              <Highlighter
                class="search-form__product-title"
                highlightClassName="highlight"
                :searchWords="[searchQuery]"
                :autoEscape="true"
                :textToHighlight="product.title"
              />
              <span class="search-form__product-price">
                {{ product.currentPrice }}</span
              >
            </div>
          </NuxtLink>
        </div>
      </form>
      <nav class="burger-menu__body">
        <UIMyAccountBtn
          @click="closeBurgerMenu"
          style="margin-left: 0.938rem"
        ></UIMyAccountBtn>
        <div class="burger-menu__content">
          <NuxtLink
            :to="{
              path: '/Favorites',
              query: { page: favoritesCurrentPage },
            }"
            @click="closeBurgerMenu"
          >
            <button class="burger-menu__wishlist-btn">
              <img src="/imgs/wishlist-icon.svg" alt="" />
              <UIFavoritesCounterCircle></UIFavoritesCounterCircle>
            </button>
          </NuxtLink>
          <NuxtLink to="/Cart" @click="closeBurgerMenu">
            <button class="burger-menu__cart-btn">
              <img src="/imgs/cart-icon.svg" alt="" />
              <UICartCounterCircle></UICartCounterCircle>
            </button>
          </NuxtLink>
        </div>
      </nav>
      <div class="burger-menu__container">
        <button
          @click="toggleCatalogDropDownMenu"
          class="burger-menu__catalog-btn burger-menu__main-btn"
          :class="{
            active: isCatalogBtnActive,
            activetitle: isActive('/catalog'),
          }"
        >
          КАТАЛОГ
        </button>
        <div class="dropdown" :class="{ active: isCatalogBtnActive }">
          <button
            @click="toggleSummerDropdown"
            class="dropdown__title-btn dropdown__title-summer-btn"
          >
            Лето
            <img
              src="/imgs/arrow-icon.svg"
              alt=""
              class="dropdown__arrow-icon-summer"
            />
          </button>
          <div
            class="dropdown__subtitles dropdown__subtitles-summer"
            :class="{ active: isDropdownActive('Summer') }"
          >
            <button class="dropdown__subtitle-btn">
              <NuxtLink @click="closeBurgerMenu" to=""> Для бега</NuxtLink>
            </button>
            <button class="dropdown__subtitle-btn">
              <NuxtLink @click="closeBurgerMenu" to=""> Повседневные</NuxtLink>
            </button>
            <button class="dropdown__subtitle-btn">
              <NuxtLink @click="closeBurgerMenu" to=""> Треккинг</NuxtLink>
            </button>
            <button class="dropdown__subtitle-btn">
              <NuxtLink @click="closeBurgerMenu" to=""> Для футбола</NuxtLink>
            </button>
            <button class="dropdown__subtitle-btn">
              <NuxtLink @click="closeBurgerMenu" to=""> Для волейбола</NuxtLink>
            </button>
            <button class="dropdown__subtitle-btn">
              <NuxtLink @click="closeBurgerMenu" to="">
                Для баскетбола</NuxtLink
              >
            </button>
            <button class="dropdown__subtitle-btn">
              <NuxtLink @click="closeBurgerMenu" to=""> Для тенниса</NuxtLink>
            </button>
            <button class="dropdown__subtitle-btn">
              <NuxtLink @click="closeBurgerMenu" to=""> Спортивные</NuxtLink>
            </button>
          </div>
          <button
            @click="toggleDemiSeasonDropdown"
            class="dropdown__title-btn dropdown__title-demi-season-btn"
          >
            Демисезон
            <img
              src="/imgs/arrow-icon.svg"
              alt=""
              class="dropdown__arrow-icon-demi-season"
            />
          </button>
          <div
            class="dropdown__subtitles dropdown__subtitles-demi-season"
            :class="{ active: isDropdownActive('DemiSeason') }"
          >
            <button class="dropdown__subtitle-btn">
              <NuxtLink @click="closeBurgerMenu" to=""> Для бега</NuxtLink>
            </button>
            <button class="dropdown__subtitle-btn">
              <NuxtLink @click="closeBurgerMenu" to=""> Повседневные</NuxtLink>
            </button>
            <button class="dropdown__subtitle-btn">
              <NuxtLink @click="closeBurgerMenu" to=""> Треккинг</NuxtLink>
            </button>
            <button class="dropdown__subtitle-btn">
              <NuxtLink @click="closeBurgerMenu" to=""> Кожаные</NuxtLink>
            </button>
          </div>
          <button
            @click="toggleWinterDropdown"
            class="dropdown__title-btn dropdown__title-winter-btn"
          >
            Зима
            <img
              src="/imgs/arrow-icon.svg"
              alt=""
              class="dropdown__arrow-icon-winter"
            />
          </button>
          <div
            class="dropdown__subtitles dropdown__subtitles-winter"
            :class="{ active: isDropdownActive('Winter') }"
          >
            <button class="dropdown__subtitle-btn">
              <NuxtLink @click="closeBurgerMenu" to=""> Утепленные</NuxtLink>
            </button>
            <button class="dropdown__subtitle-btn">
              <NuxtLink @click="closeBurgerMenu" to=""> Повседневные</NuxtLink>
            </button>
            <button class="dropdown__subtitle-btn">
              <NuxtLink @click="closeBurgerMenu" to=""> Кожаные</NuxtLink>
            </button>
          </div>
          <button
            @click="toggleModelsDropdown"
            class="dropdown__title-btn dropdown__title-models-btn"
          >
            Модели
            <img
              src="/imgs/arrow-icon.svg"
              alt=""
              class="dropdown__arrow-icon-models"
            />
          </button>
          <div
            class="dropdown__subtitles dropdown__subtitles-models"
            :class="{ active: isDropdownActive('Models') }"
          >
            <button class="dropdown__subtitle-btn">
              <NuxtLink
                @click="closeBurgerMenu"
                :to="{
                  path: '/catalog',
                  query: { page: currentCatalogPage },
                }"
              >
                Все модели</NuxtLink
              >
            </button>
            <button class="dropdown__subtitle-btn">
              <NuxtLink
                @click="closeBurgerMenu"
                to="/catalog/nike-air-force-1/1?page=1"
              >
                Nike Air Force 1</NuxtLink
              >
            </button>
            <button class="dropdown__subtitle-btn">
              <NuxtLink
                @click="closeBurgerMenu"
                to="/catalog/nike-air-max-90/2?page=1"
              >
                Nike Air Max 90</NuxtLink
              >
            </button>
            <button class="dropdown__subtitle-btn">
              <NuxtLink
                @click="closeBurgerMenu"
                to="/catalog/nike-dunk-low/3?page=1"
              >
                Nike Dunk Low</NuxtLink
              >
            </button>
            <button class="dropdown__subtitle-btn">
              <NuxtLink
                @click="closeBurgerMenu"
                to="/catalog/nike-react-infinity-run-flyknit/4?page=1"
              >
                Nike React Infinity Run Flyknit</NuxtLink
              >
            </button>
            <button class="dropdown__subtitle-btn">
              <NuxtLink
                @click="closeBurgerMenu"
                to="/catalog/nike-vapormax-flyknit-2/5?page=1"
              >
                Nike VaporMax Flyknit 2</NuxtLink
              >
            </button>
            <button class="dropdown__subtitle-btn">
              <NuxtLink
                @click="closeBurgerMenu"
                to="/catalog/nike-air-zoom-pegasus-39/6?page=1"
              >
                Nike Air Zoom Pegasus 39</NuxtLink
              >
            </button>
            <button class="dropdown__subtitle-btn">
              <NuxtLink
                @click="closeBurgerMenu"
                to="/catalog/nike-air-max-1-animal-pack/8?page=1"
              >
                Nike Air Max 1 "Animal Pack"</NuxtLink
              >
            </button>
            <button class="dropdown__subtitle-btn">
              <NuxtLink
                @click="closeBurgerMenu"
                to="/catalog/sacai-x-nike-vaporwaffle/9?page=1"
              >
                Sacai x Nike VaporWaffle</NuxtLink
              >
            </button>
          </div>
        </div>
        <button class="burger-menu__catalog-btn">
          <NuxtLink
            @click="closeBurgerMenu"
            :to="{
              path: '/catalog',
              query: { page: 1, paginate: 'Мужские' },
            }"
            >МУЖСКИЕ</NuxtLink
          >
        </button>
        <button class="burger-menu__catalog-btn">
          <NuxtLink
            @click="closeBurgerMenu"
            :to="{
              path: '/catalog',
              query: { page: 1, paginate: 'Женские' },
            }"
            >ЖЕНСКИЕ</NuxtLink
          >
        </button>
        <button class="burger-menu__catalog-btn">
          <NuxtLink
            @click="closeBurgerMenu"
            :to="{
              path: '/catalog',
              query: { page: 1, paginate: 'Детские' },
            }"
            >ДЕТСКИЕ</NuxtLink
          >
        </button>
        <button class="burger-menu__catalog-btn">
          <NuxtLink
            @click="closeBurgerMenu"
            :to="{
              path: '/catalog',
              query: { page: 1, paginate: 'Распродажа' },
            }"
            >РАСПРОДАЖА</NuxtLink
          >
        </button>
        <button class="burger-menu__section-btn">
          <NuxtLink
            @click="closeBurgerMenu"
            :class="{ active: isActive('/AboutUs') }"
            to="/AboutUs"
            >О магазине</NuxtLink
          >
        </button>
        <button class="burger-menu__section-btn">
          <NuxtLink
            @click="closeBurgerMenu"
            :class="{ active: route.path.startsWith('/blog') }"
            :to="{
              path: '/blog/' + store.routeCategory,
              query: { page: currentPage },
            }"
            >Наш блог</NuxtLink
          >
        </button>
        <button class="burger-menu__section-btn">
          <NuxtLink
            @click="closeBurgerMenu"
            :class="{ active: isActive('/DeliveryAndPayment') }"
            to="/DeliveryAndPayment"
            >Доставка и оплата</NuxtLink
          >
        </button>
        <button class="burger-menu__section-btn">
          <NuxtLink
            @click="closeBurgerMenu"
            :class="{ active: isActive('/Contacts') }"
            to="/Contacts"
            >Контакты</NuxtLink
          >
        </button>
        <button class="burger-menu__section-btn">
          <NuxtLink
            @click="closeBurgerMenu"
            :class="{ active: isActive('/IndividualOrder') }"
            to="/IndividualOrder"
            >Индивидуальный заказ</NuxtLink
          >
        </button>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { usePostsStore } from "@/store/Posts";
import { useProductsStore } from "@/store/Products";
import { useFavoritesStore } from "@/store/Favorites";
import type { Product } from "@/types/Product";
import Highlighter from "vue-highlight-words";

const searchQuery = ref("");
const searchResults = ref<Product[]>([]);
const handleSearchInput = async (query: string) => {
  if (searchQuery.value.trim()) {
    searchResults.value = await search();
  } else {
    searchResults.value = [];
  }
};
const catalogStore = useProductsStore();
const search = async (): Promise<Product[]> => {
  return catalogStore.searchProducts(searchQuery.value);
};
const router = useRouter();
const searchCatalog = () => {
  closeBurgerMenu();
  router.push({
    path: "/catalog",
    query: { page: 1, search: searchQuery.value },
  });
};

const store = usePostsStore();
const currentPage = computed(() => store.currentPage);

const favoritesStore = useFavoritesStore();
const favoritesCurrentPage = computed(() => favoritesStore.currentPage);

const route = useRoute();
const isActive = (path: string) => {
  return route.path === path;
};

const currentCatalogPage = computed(() => catalogStore.currentPage);

const props = defineProps(["isOpen"]);

const closeBurgerMenu = () => {
  emit("close");
};
const emit = defineEmits(["close"]);

const isCatalogBtnActive = ref(false);
const toggleCatalogDropDownMenu = () => {
  isCatalogBtnActive.value = !isCatalogBtnActive.value;
};

const activeDropdown = ref<string | null>(null);
const toggleSummerDropdown = () => {
  activeDropdown.value = activeDropdown.value === "Summer" ? null : "Summer";
};
const toggleDemiSeasonDropdown = () => {
  activeDropdown.value =
    activeDropdown.value === "DemiSeason" ? null : "DemiSeason";
};
const toggleWinterDropdown = () => {
  activeDropdown.value = activeDropdown.value === "Winter" ? null : "Winter";
};
const toggleModelsDropdown = () => {
  activeDropdown.value = activeDropdown.value === "Models" ? null : "Models";
};

const isDropdownActive = (dropdownName: string) => {
  return activeDropdown.value === dropdownName;
};
</script>

<style lang="scss" scoped>
@import "@/assets/App.scss";
.burger-menu-shadow {
  position: absolute;
  background: rgba(0, 0, 0, 0.747);
  width: 100%;
  height: 100vh;
  top: 0rem;
  z-index: 2;
}
.burger-menu-shadow.active {
  display: block;
}
.burger-menu-shadow__close-btn {
  @include btn;
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
}
.burger-menu {
  position: relative;
  background: #fff;
  width: 90%;
  max-width: 328px;
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;

  &__body {
    display: flex;
    justify-content: space-between;
  }
  &__content {
    display: flex;
  }
  &__wishlist-btn,
  &__cart-btn {
    @include btn;
    width: 58px;
    height: 58px;
  }
  &__container {
    display: flex;
    flex-direction: column;
    border-top: 1px solid #eaeaea;
  }
  &__main-btn {
    transition: all 0.1s ease;
  }
  &__main-btn.activetitle {
    color: $Light-Orange;
  }
  &__main-btn.active {
    color: #fff;
    background-color: $Dark-Black;
  }
  &__catalog-btn {
    @include btn;
    justify-content: left;
    height: 51px;
    width: 100%;
    padding-left: 0.938rem;
    border-bottom: 1px solid #eaeaea;
    font-family: "Pragmatica Medium";
    font-size: 0.875rem;
  }
  &__section-btn {
    @include btn;
    justify-content: left;
    height: 45px;
    width: 100%;
    padding-left: 0.938rem;
    font-family: "Pragmatica Book";
    font-size: 0.938rem;

    a.active {
      color: $Light-Orange;
    }
  }
}
.dropdown {
  flex-direction: column;
  padding: 0 1.563rem;
  min-width: max-content;
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.3s ease-in-out;

  &--opened {
    max-height: 100vh;
    transition: max-height 0.3s ease-in-out;
  }
  &__title-btn {
    @include btn;
    height: 43px;
    width: 100%;
    justify-content: space-between;
    font-family: "Pragmatica Medium";
    font-size: 0.938rem;
  }
  &__subtitles {
    overflow: hidden;
    max-height: 0;
    transition: max-height 0.3s ease-in-out;
  }
  &__subtitles.active {
    display: flex;
    flex-direction: column;
    max-height: 100vh;
    transition: max-height 0.3s ease-in-out;
  }
  &__subtitle-btn {
    @include btn;
    width: 100%;
    height: 27px;
    justify-content: left;
    font-family: "Pragmatica Book";
    font-size: 0.875rem;
    padding-left: 1rem;
  }
}
.dropdown.active {
  max-height: 100vh;
  transition: max-height 0.3s ease-in-out;
}
.search-form {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f9f9f9;
  height: 70px;
  border-bottom: 1px solid #eaeaea;

  &__input {
    @include input;
    margin-left: 0.938rem;
    width: 192px;
    font-family: "Pragmatica Book";
    color: #000;

    &::placeholder {
      color: #969696;
    }

    &:focus {
      outline: none;
    }
  }
  &__search-btn {
    @include btn;
    width: 70px;
    height: 70px;
    border-left: 1px solid #eaeaea;
  }
  &__field {
    padding: 1.25rem 1.875rem;
    border: none;
    width: 100%;
    height: 70px;
    outline: none;
    font-family: "Pragmatica Medium";
    font-size: 1.125rem;
  }
  &__field::placeholder {
    color: #cecece;
  }
  &__search-results {
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
    position: absolute;
    z-index: 2;
    background-color: $Dark-Black;
    padding: 0.75rem 0.875rem;
    height: 300px;
    top: 4.375rem;
    left: 0;
    right: 0;
    overflow-y: scroll;
  }
  &__search-result-item {
    display: flex;
    align-items: center;
    gap: 0.875rem;
    cursor: pointer;
  }
  &__product-hero-body {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 48px;
    height: 48px;
    border: 1px solid #eaeaea;
    border-radius: 8px;
  }
  &__product-hero {
    width: 38px;
    height: 38px;
  }
  &__product-info {
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
  }
  &__product-title {
    font-family: "Pragmatica Medium";
    font-size: 1rem;
    color: #fff;
  }
  &__product-price {
    font-family: "Pragmatica Book";
    font-size: 1rem;
    color: #fff;
  }
}
/* 768px = 48em */
@media (min-width: 48em) {
  .search-form {
    display: none;
  }
}
/* 1200px = 75em */
@media (min-width: 75em) {
  .burger-menu-shadow {
    visibility: hidden;
  }
}
</style>
