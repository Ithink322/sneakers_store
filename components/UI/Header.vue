<template>
  <nav>
    <header class="header">
      <div class="header-top">
        <ul class="header-top__titles-list">
          <li>
            <NuxtLink :class="{ active: isActive('/AboutUs') }" to="/AboutUs"
              >О магазине</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              :class="{ active: route.path.startsWith('/blog') }"
              :to="{
                path: '/blog/' + routeCategory,
                query: { page: currentPage },
              }"
              >Наш блог</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              :class="{ active: isActive('/DeliveryAndPayment') }"
              to="/DeliveryAndPayment"
              >Доставка и оплата</NuxtLink
            >
          </li>
          <li>
            <NuxtLink :class="{ active: isActive('/Contacts') }" to="/Contacts"
              >Контакты</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              :class="{ active: isActive('/IndividualOrder') }"
              to="/IndividualOrder"
              >Индивидуальный заказ</NuxtLink
            >
          </li>
        </ul>
        <UIMyAccountBtn></UIMyAccountBtn>
      </div>
      <div class="header-mid">
        <div class="header-mid__titles-container">
          <button @click="toggleBurgerMenu" class="header-mid__burger-btn">
            <svg
              width="36"
              height="12"
              viewBox="0 0 36 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="36"
                y1="1.98633"
                x2="13.0168"
                y2="1.98633"
                stroke="black"
                stroke-width="2"
              />
              <line
                x1="36"
                y1="10.0137"
                y2="10.0137"
                stroke="black"
                stroke-width="2"
              />
            </svg>
          </button>
          <div
            @click="toggleBurgerMenu"
            @mouseover="handleHover"
            @mouseleave="handleLeave"
            class="header-mid__menu-btn-body"
          >
            <button class="header-mid__menu-btn">
              <svg
                width="36"
                height="12"
                viewBox="0 0 36 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="36"
                  y1="1.98633"
                  x2="13.0168"
                  y2="1.98633"
                  :stroke="burgerLineStroke"
                  stroke-width="2"
                />
                <line
                  x1="36"
                  y1="10.0137"
                  y2="10.0137"
                  :stroke="burgerLineStroke"
                  stroke-width="2"
                />
              </svg>
            </button>
            <div class="header-mid__title header-mid__title--from768px">
              <span
                class="header-mid__title header-mid__title--visiblle-till1200px"
                :class="{ active: burgerLineStroke === '#fb5a00' }"
                >Меню</span
              >
            </div>
          </div>
          <div
            @mouseover="handleHover"
            @mouseleave="handleLeave"
            class="header-mid__catalog-btn-body"
          >
            <button class="header-mid__catalog-btn">
              <svg
                width="36"
                height="12"
                viewBox="0 0 36 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="36"
                  y1="1.98633"
                  x2="13.0168"
                  y2="1.98633"
                  :stroke="catalogColorBind"
                  stroke-width="2"
                />
                <line
                  x1="36"
                  y1="10.0137"
                  y2="10.0137"
                  :stroke="catalogColorBind"
                  stroke-width="2"
                />
              </svg>
            </button>
            <div class="header-mid__title header-mid__title--from768px">
              <span
                class="header-mid__title header-mid__title--hidden-till1200px"
                :class="{ active: catalogColorBind === '#fb5a00' }"
                >Каталог</span
              >
            </div>
          </div>
          <ul class="header-mid__titles-list">
            <li><NuxtLink to="">Мужские</NuxtLink></li>
            <li><NuxtLink to="">Женские</NuxtLink></li>
            <li><NuxtLink to="">Детские</NuxtLink></li>
            <li><NuxtLink to="">Распродажа</NuxtLink></li>
          </ul>
        </div>
        <NuxtLink to="/" class="header-mid__logo">
          <img src="/imgs/logo.svg" alt=""
        /></NuxtLink>
        <div class="header-mid__btns-container">
          <NuxtLink
            :to="isUserLoggedIn ? '/PrivateCabinet' : '/Login'"
            class="header-mid__my-account-link"
          >
            <button
              @click="handlePrivateCabinetClick"
              class="header-mid__btn header-mid__my-account-btn--from768px"
              :class="{ active: activeButton === 'PrivateCabinet' }"
            >
              <svg
                width="15"
                height="20"
                viewBox="0 0 15 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 18.8636V16.8939C1 15.8492 1.45655 14.8472 2.2692 14.1084C3.08186 13.3696 4.18406 12.9545 5.33333 12.9545H9.66667C10.8159 12.9545 11.9181 13.3696 12.7308 14.1084C13.5435 14.8472 14 15.8492 14 16.8939V18.8636M3.16667 5.07576C3.16667 6.12055 3.62321 7.12255 4.43587 7.86133C5.24853 8.60011 6.35073 9.01516 7.5 9.01516C8.64927 9.01516 9.75147 8.60011 10.5641 7.86133C11.3768 7.12255 11.8333 6.12055 11.8333 5.07576C11.8333 4.03097 11.3768 3.02897 10.5641 2.29019C9.75147 1.55141 8.64927 1.13637 7.5 1.13637C6.35073 1.13637 5.24853 1.55141 4.43587 2.29019C3.62321 3.02897 3.16667 4.03097 3.16667 5.07576Z"
                  stroke="black"
                  stroke-width="1.3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </NuxtLink>
          <button
            class="header-mid__search-btn header-mid__search-btn--from768px"
            :class="{ active: searchIsActive }"
            @click="toggleSearch"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 15L11.6167 11.6166M13.4444 7.22226C13.4444 10.6587 10.6586 13.4445 7.22221 13.4445C3.78578 13.4445 1 10.6587 1 7.22226C1 3.7858 3.78578 1 7.22221 1C10.6586 1 13.4444 3.7858 13.4444 7.22226Z"
                stroke="black"
                stroke-width="1.3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <NuxtLink
            :to="{
              path: '/Favorites',
              query: { page: favoritesCurrentPage },
            }"
          >
            <button
              class="header-mid__wishlist-btn header-mid__btn"
              :class="{ active: activeButton === 'wishlist' }"
            >
              <svg
                width="21"
                height="18"
                viewBox="0 0 21 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.4927 2.41114C18.0165 1.96386 17.4506 1.60896 16.8275 1.36681C16.2045 1.12465 15.5365 1 14.8618 1C14.1872 1 13.5191 1.12465 12.8961 1.36681C12.273 1.60896 11.7071 1.96386 11.2309 2.41114L10.5 3.10415L9.76908 2.41114C9.29286 1.96386 8.72699 1.60896 8.10392 1.36681C7.48085 1.12465 6.81284 1 6.1382 1C5.46355 1 4.79554 1.12465 4.17247 1.36681C3.5494 1.60896 2.98353 1.96386 2.50731 2.41114C0.494903 4.29472 0.3715 7.47548 2.906 9.89215L10.5 17L18.094 9.89215C20.6285 7.47548 20.5051 4.29472 18.4927 2.41114Z"
                  stroke="#211D19"
                  stroke-width="1.4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <UIFavoritesCounterCircle></UIFavoritesCounterCircle>
            </button>
          </NuxtLink>
          <NuxtLink to="/Cart">
            <button
              class="header-mid__cart-btn header-mid__btn"
              :class="{ active: activeButton === 'cart' }"
            >
              <svg
                width="17"
                height="18"
                viewBox="0 0 17 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.5659 8.11111V3.66667C5.5659 2.95942 5.87498 2.28115 6.42514 1.78105C6.9753 1.28095 7.72147 1 8.49951 1C9.27755 1 10.0237 1.28095 10.5739 1.78105C11.124 2.28115 11.4331 2.95942 11.4331 3.66667V8.11111M2.95597 5.44444H14.044C14.326 5.44441 14.6047 5.49981 14.8609 5.60684C15.1171 5.71388 15.3449 5.87001 15.5285 6.06454C15.7121 6.25906 15.8473 6.48739 15.9248 6.73385C16.0022 6.98032 16.0201 7.2391 15.9773 7.49244L14.7501 14.7387C14.6435 15.3684 14.2925 15.9426 13.7604 16.3574C13.2284 16.7722 12.5506 17.0002 11.8497 17H5.14933C4.44859 17 3.77101 16.7719 3.23919 16.3572C2.70738 15.9424 2.35646 15.3682 2.24995 14.7387L1.02272 7.49244C0.979863 7.2391 0.997778 6.98032 1.07524 6.73385C1.15271 6.48739 1.28788 6.25906 1.47151 6.06454C1.65514 5.87001 1.88288 5.71388 2.1391 5.60684C2.39533 5.49981 2.67399 5.44441 2.95597 5.44444Z"
                  stroke="#211D19"
                  stroke-width="1.4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <UICartCounterCircle></UICartCounterCircle>
            </button>
          </NuxtLink>
        </div>
      </div>
    </header>
    <UIBurgerMenu
      v-if="isBurgerMenuOpen"
      :isOpen="isBurgerMenuOpen"
      @close="closeBurgerMenu"
    ></UIBurgerMenu>
    <UICatalogMenu
      @mouseover="handleHover"
      @mouseleave="handleLeave"
      :class="{ active: isCatalogMenuOpen }"
    ></UICatalogMenu>
  </nav>
</template>

<script setup lang="ts">
import { usePostsStore } from "@/store/Posts";
import { useCatalogMenu } from "@/store/CatalogMenu";
import { useFavoritesStore } from "@/store/Favorites";
import { useAuthStore } from "@/store/Auth";

const store = usePostsStore();
const routeCategory = computed(() => store.routeCategory);
const currentPage = computed(() => store.currentPage);

const favoritesStore = useFavoritesStore();
const favoritesCurrentPage = computed(() => favoritesStore.currentPage);

const route = useRoute();
const isActive = (path: string) => {
  return route.path === path;
};

const isBurgerMenuOpen = ref(false);
const burgerLineStroke = ref("black");

const toggleBurgerMenu = () => {
  isBurgerMenuOpen.value = !isBurgerMenuOpen.value;
  burgerLineStroke.value =
    isBurgerMenuOpen.value && window.innerWidth < 1200 ? "#fb5a00" : "black";
  if (isBurgerMenuOpen.value) {
    window.scrollTo(0, 0);
    document.body.style.overflow = "hidden";
  }
};
const closeBurgerMenu = () => {
  isBurgerMenuOpen.value = false;
  burgerLineStroke.value = "black";
  document.body.style.overflow = "";
};

const catalogMenuStore = useCatalogMenu();
const isCatalogMenuOpen = computed(() => catalogMenuStore.isCatalogMenuOpen);
const catalogColorBind = computed(() => catalogMenuStore.catalogColorBind);

const handleHover = () => {
  catalogMenuStore.openCatalogMenu();
};

const handleLeave = (event: MouseEvent) => {
  setTimeout(() => 2000);
  const catalogMenu = document.querySelector(".catalog")!;
  const burgerBtn = document.querySelector(".header-mid__catalog-btn-body")!;
  const targetElement = event.relatedTarget as HTMLElement;
  if (
    !catalogMenu.contains(targetElement) &&
    !burgerBtn.contains(targetElement)
  ) {
    catalogMenuStore.closeCatalogMenu();
  }
};

const activeButton = ref<string | null>(null);
const setActiveButton = (button: string) => {
  activeButton.value = button;
};

const authStore = useAuthStore();
const isUserLoggedIn = computed(() => authStore.isLoggedIn);
watch(
  () => route.path,
  (newPath) => {
    if (newPath === "/Favorites") {
      setActiveButton("wishlist");
    } else if (newPath === "/Cart") {
      setActiveButton("cart");
    } else if (newPath === "/PrivateCabinet") {
      setActiveButton("PrivateCabinet");
    } else {
      activeButton.value = null;
    }
  },
  { immediate: true }
);
const router = useRouter();
const handlePrivateCabinetClick = () => {
  if (authStore.isLoggedIn) {
    router.push("/PrivateCabinet");
  } else {
    router.push("/LogIn");
  }
};

const searchIsActive = ref(false);
const toggleSearch = (event: MouseEvent | TouchEvent) => {
  searchIsActive.value = true;

  /* if (!(event.target as HTMLElement).closest(".header-mid__search-btn")) {
    searchIsActive.value = false;
    console.log("outside");
  } */
};
</script>

<style lang="scss" scoped>
@import "@/assets/App.scss";
.header-top {
  display: none;
}
.header {
  padding: 0rem 0.938rem;
  border-bottom: 1px solid #eaeaea;
}
.header-mid {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  &__menu-btn-body,
  &__catalog-btn-body {
    display: none;
  }
  &__burger-btn {
    @include btn;
    width: 59px;
    height: 70px;
    padding-right: 1.438rem;
    border-right: 1px solid #eaeaea;
  }
  &__title--from768px,
  &__title--hidden-till1200px {
    display: none;
  }
  &__titles-list {
    display: none;
  }
  &__btns-container {
    display: flex;
    align-items: center;
    gap: 2rem;
    border-left: 1px solid #eaeaea;
    padding-left: 0.938rem;
    padding-right: 0.5rem;
    height: 70px;
  }
  &__my-account-link,
  &__search-btn--from768px {
    display: none;
  }
  &__wishlist-btn,
  &__cart-btn {
    @include btn;
  }
}
/* 768px = 48em */
@media (min-width: 48em) {
  .header {
    padding: 0rem calc((100vw - 44.874rem) / 2);
    margin: 0 auto;
  }
  .header-mid {
    &__menu-btn-body {
      display: flex;
      align-items: center;
      margin-left: 1.614rem;
      cursor: pointer;
    }
    &__menu-btn {
      @include btn;
      width: 59px;
      height: 70px;
      border-right: none;
      padding-right: 0rem;
    }
    &__burger-btn {
      display: none;
    }
    &__title--from768px {
      display: block;
      margin-top: -0.1rem;
      font-family: "Pragmatica Medium", sans-serif;
      font-size: 0.938rem;
    }
    &__title--visiblle-till1200px.active {
      color: #fb5a00;
    }
    &__titles-container {
      display: flex;
      order: 2;
      margin-right: auto;
    }
    &__logo {
      display: flex;
      align-items: center;
      height: 70px;
      padding-right: 1.875rem;
      border-right: 1px solid #eaeaea;
      order: 1;
    }
    &__btns-container {
      order: 3;
      padding-left: 0rem;
      padding-right: 0rem;
      border-right: 1px solid #eaeaea;
      gap: 0rem;
    }
    &__wishlist-btn,
    &__cart-btn {
      @include btn;
      width: 71px;
      height: 70px;
    }
    &__my-account-link {
      display: block;
    }
    &__my-account-btn--from768px,
    &__search-btn--from768px,
    &__wishlist-btn {
      display: block;
      @include btn;
      width: 71px;
      height: 70px;
      border-right: 1px solid #eaeaea;
    }
  }
  .header-mid__btn.active,
  .header-mid__search-btn.active {
    background-color: $Dark-Black;
  }
  .active svg path {
    stroke: white;
  }
}
/* 1024px = 64em */
@media (min-width: 64em) {
  .header {
    padding: 0rem calc((100vw - 44.75rem) / 2);
  }
}
/* 1200px = 75em */
@media (min-width: 75em) {
  .header-top {
    display: flex;
    justify-content: space-between;
    height: 45px;

    &__titles-list {
      @include ul;
      display: flex;
      align-items: center;
      gap: 2.5rem;
    }
    &__titles-list li {
      font-family: "Pragmatica Book";
      font-size: 0.875rem;
      cursor: pointer;
    }
    &__titles-list li a {
      color: #585858;
      transition: color 0.3s ease;
    }
    &__titles-list li:hover a {
      color: $Dark-Orange;
    }
    &__titles-list li a.active {
      color: $Dark-Orange;
    }
  }
  .header {
    padding: 0rem calc((100vw - 71.875rem) / 2);
  }
  .header::before {
    content: "";
    position: absolute;
    width: 100%;
    left: 0rem;
    background-color: #eaeaea;
    height: 1px;
    margin-top: 2.72rem;
  }
  .header-mid {
    &__menu-btn-body {
      display: none;
    }
    &__catalog-btn-body {
      display: flex;
      align-items: center;
      margin-left: 1.614rem;
      margin-bottom: -1px;
      cursor: pointer;
      transition: color 0.3s ease;
    }
    &__catalog-btn {
      @include btn;
      width: 59px;
      height: 70px;
      border-right: none;
      padding-right: 0rem;
    }
    &__catalog-btn.active {
      color: #fb5a00;
    }
    &__catalog-btn-body:hover {
      color: $Dark-Orange;
    }
    &__catalog-btn-body:hover svg line {
      stroke: $Dark-Orange;
    }
    &__title.active {
      color: #fb5a00;
    }
    &__title--visiblle-till1200px,
    &__my-account-btn--from768px {
      display: none;
    }
    &__titles-container {
      display: flex;
      align-items: center;
      gap: 3.563rem;
      margin-left: 2rem;
    }
    &__titles-list {
      @include ul;
      display: flex;
      align-items: stretch;
      gap: 3.563rem;
      margin: 0rem;
      height: 100%;
    }
    &__titles-list li {
      font-family: "Pragmatica Medium", sans-serif;
      font-size: 0.938rem;
      cursor: pointer;
      display: flex;
      align-items: center;
    }
    &__titles-list li a {
      transition: color 0.3s ease;
    }
    &__titles-list li:hover a {
      color: $Light-Orange;
    }
    &__title--hidden-till1200px {
      display: block;
    }
    &__wishlist-counter-circle,
    &__cart-counter-circle {
      width: 16px;
      height: 16px;
      margin-left: 3.8rem;
      margin-top: -3.9rem;
    }
  }
}
/* 1440px = 90em */
@media (min-width: 90em) {
  .header {
    padding: 0rem calc((100vw - 85rem) / 2);
  }
  .header-mid__titles-container {
    margin-left: 11.755rem;
  }
}
</style>
