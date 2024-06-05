<template>
  <div class="burger-menu-shadow">
    <button @click="closeBurgerMenu" class="burger-menu-shadow__close-btn">
      <img src="/imgs/cross.svg" alt="cross" />
    </button>
    <nav class="burger-menu">
      <form class="burger-menu__search-form">
        <input
          placeholder="Поиск по каталогу товаров..."
          type="text"
          class="burger-menu__input"
        />
        <button class="burger-menu__search-btn">
          <img src="/imgs/search-icon.svg" alt="" />
        </button>
      </form>
      <div class="burger-menu__btns-flex">
        <UISignUpOrSignInOrMyAccountBtn
          style="margin-left: 0.938rem"
        ></UISignUpOrSignInOrMyAccountBtn>
        <div class="burger-menu__wishlist-and-cart-btns-flex">
          <button class="burger-menu__wishlist-btn">
            <img src="/imgs/wishlist-icon.svg" alt="" />
            <UIWishlistCounterCircle></UIWishlistCounterCircle>
          </button>
          <button class="burger-menu__cart-btn">
            <img src="/imgs/cart-icon.svg" alt="" />
            <UICartCounterCircle></UICartCounterCircle>
          </button>
        </div>
      </div>
      <div class="burger-menu__catalogs-and-sections-btns-flex">
        <button
          @click="openCatalogDropDownMenu"
          class="burger-menu__catalog-btn burger-menu__catalog-btn-catalog"
        >
          КАТАЛОГ
        </button>
        <div class="burger-menu__dropdown-menu">
          <button
            @click="openSummerDropDownMenu"
            class="burger-menu__dropdown-menu-title-btn burger-menu__dropdown-menu-title-summer-btn"
          >
            Лето
            <img
              src="/imgs/arrow-icon.svg"
              alt=""
              class="burger-menu__dropdown-menu-title-arrow-summer-btn"
            />
          </button>
          <div
            class="burger-menu__dropdown-menu-subtitles-btns-flex burger-menu__dropdown-menu-subtitles-btns-summer-flex"
          >
            <button class="burger-menu__dropdown-menu-subtitle-btn">
              <NuxtLink target="_blank" to=""> Для бега</NuxtLink>
            </button>
            <button class="burger-menu__dropdown-menu-subtitle-btn">
              <NuxtLink target="_blank" to=""> Повседневные</NuxtLink>
            </button>
            <button class="burger-menu__dropdown-menu-subtitle-btn">
              <NuxtLink target="_blank" to=""> Треккинг</NuxtLink>
            </button>
            <button class="burger-menu__dropdown-menu-subtitle-btn">
              <NuxtLink target="_blank" to=""> Для футбола</NuxtLink>
            </button>
            <button class="burger-menu__dropdown-menu-subtitle-btn">
              <NuxtLink target="_blank" to=""> Для волейбола</NuxtLink>
            </button>
            <button class="burger-menu__dropdown-menu-subtitle-btn">
              <NuxtLink target="_blank" to=""> Для баскетбола</NuxtLink>
            </button>
            <button class="burger-menu__dropdown-menu-subtitle-btn">
              <NuxtLink target="_blank" to=""> Для тенниса</NuxtLink>
            </button>
            <button class="burger-menu__dropdown-menu-subtitle-btn">
              <NuxtLink target="_blank" to=""> Спортивные</NuxtLink>
            </button>
          </div>
          <button
            @click="openDemiSeasonDropDownMenu"
            class="burger-menu__dropdown-menu-title-btn burger-menu__dropdown-menu-title-demi-season-btn"
          >
            Демисезон
            <img
              src="/imgs/arrow-icon.svg"
              alt=""
              class="burger-menu__dropdown-menu-title-arrow-demi-season-btn"
            />
          </button>
          <div
            class="burger-menu__dropdown-menu-subtitles-btns-flex burger-menu__dropdown-menu-subtitles-btns-demi-season-flex"
          >
            <button class="burger-menu__dropdown-menu-subtitle-btn">
              <NuxtLink target="_blank" to=""> Для бега</NuxtLink>
            </button>
            <button class="burger-menu__dropdown-menu-subtitle-btn">
              <NuxtLink target="_blank" to=""> Повседневные</NuxtLink>
            </button>
            <button class="burger-menu__dropdown-menu-subtitle-btn">
              <NuxtLink target="_blank" to=""> Треккинг</NuxtLink>
            </button>
            <button class="burger-menu__dropdown-menu-subtitle-btn">
              <NuxtLink target="_blank" to=""> Кожаные</NuxtLink>
            </button>
          </div>
          <button
            @click="openWinterDropDownMenu"
            class="burger-menu__dropdown-menu-title-btn burger-menu__dropdown-menu-title-winter-btn"
          >
            Зима
            <img
              src="/imgs/arrow-icon.svg"
              alt=""
              class="burger-menu__dropdown-menu-title-arrow-winter-btn"
            />
          </button>
          <div
            class="burger-menu__dropdown-menu-subtitles-btns-flex burger-menu__dropdown-menu-subtitles-btns-winter-flex"
          >
            <button class="burger-menu__dropdown-menu-subtitle-btn">
              <NuxtLink target="_blank" to=""> Утепленные</NuxtLink>
            </button>
            <button class="burger-menu__dropdown-menu-subtitle-btn">
              <NuxtLink target="_blank" to=""> Повседневные</NuxtLink>
            </button>
            <button class="burger-menu__dropdown-menu-subtitle-btn">
              <NuxtLink target="_blank" to=""> Кожаные</NuxtLink>
            </button>
          </div>
          <button
            @click="openModelsDropDownMenu"
            class="burger-menu__dropdown-menu-title-btn burger-menu__dropdown-menu-title-models-btn"
          >
            Модели
            <img
              src="/imgs/arrow-icon.svg"
              alt=""
              class="burger-menu__dropdown-menu-title-arrow-models-btn"
            />
          </button>
          <div
            class="burger-menu__dropdown-menu-subtitles-btns-flex burger-menu__dropdown-menu-subtitles-btns-models-flex"
          >
            <button class="burger-menu__dropdown-menu-subtitle-btn">
              <NuxtLink target="_blank" to=""> Nike Air Force 1</NuxtLink>
            </button>
            <button class="burger-menu__dropdown-menu-subtitle-btn">
              <NuxtLink target="_blank" to=""> Nike SB Dunk Low</NuxtLink>
            </button>
            <button class="burger-menu__dropdown-menu-subtitle-btn">
              <NuxtLink target="_blank" to=""> Nike Air Max 90</NuxtLink>
            </button>
            <button class="burger-menu__dropdown-menu-subtitle-btn">
              <NuxtLink target="_blank" to=""> Nike Shox</NuxtLink>
            </button>
            <button class="burger-menu__dropdown-menu-subtitle-btn">
              <NuxtLink target="_blank" to=""> Nike Blazer</NuxtLink>
            </button>
            <button class="burger-menu__dropdown-menu-subtitle-btn">
              <NuxtLink target="_blank" to=""> Nike Air Max Plus</NuxtLink>
            </button>
          </div>
        </div>
        <button class="burger-menu__catalog-btn">
          <NuxtLink target="_blank" to="">МУЖСКИЕ</NuxtLink>
        </button>
        <button class="burger-menu__catalog-btn">
          <NuxtLink target="_blank" to="">ЖЕНСКИЕ</NuxtLink>
        </button>
        <button class="burger-menu__catalog-btn">
          <NuxtLink target="_blank" to="">ДЕТСКИЕ</NuxtLink>
        </button>
        <button class="burger-menu__catalog-btn">
          <NuxtLink target="_blank" to="">РАСПРОДАЖА</NuxtLink>
        </button>
        <button class="burger-menu__section-btn">
          <NuxtLink target="_blank" to="/AboutUs">О магазине</NuxtLink>
        </button>
        <button class="burger-menu__section-btn">
          <NuxtLink target="_blank" to="">Наш блог</NuxtLink>
        </button>
        <button class="burger-menu__section-btn">
          <NuxtLink target="_blank" to="">Доставка и оплата</NuxtLink>
        </button>
        <button class="burger-menu__section-btn">
          <NuxtLink target="_blank" to="">Контакты</NuxtLink>
        </button>
        <button class="burger-menu__section-btn">
          <NuxtLink target="_blank" to="">Индивидуальный заказ</NuxtLink>
        </button>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
const closeBurgerMenu = () => {
  document.querySelector<HTMLElement>(".burger-menu-shadow")!.style.display =
    "none";

  /* styles from 768px to 1200px starts */
  const svgElement = document.querySelector(".header-mid__burger-btn svg")!;
  const lines = Array.from(svgElement.querySelectorAll("line"));
  lines.forEach((line) => {
    line.setAttribute("stroke", "black");
  });
  /* styles from 768px to 1200px ends */
};

const toggleMenu = (
  btnSelector: string,
  menuSelector: string,
  bgColor: string,
  textColor: string
) => {
  const btn = document.querySelector<HTMLElement>(btnSelector)!;
  const menu = document.querySelector<HTMLElement>(menuSelector)!;

  btn.style.backgroundColor = bgColor;
  btn.style.color = textColor;
  menu.classList.toggle("burger-menu__dropdown-menu--opened");
};

const catalogButtonClicked = ref(false);
const summerBtnClicked = ref(false);
const demiSeasonBtnClicked = ref(false);
const winterBtnClicked = ref(false);
const modelsBtnClicked = ref(false);

const openCatalogDropDownMenu = () => {
  catalogButtonClicked.value = !catalogButtonClicked.value;
  toggleMenu(
    ".burger-menu__catalog-btn-catalog",
    ".burger-menu__dropdown-menu",
    catalogButtonClicked.value ? "#000" : "#fff",
    catalogButtonClicked.value ? "#fff" : "#000"
  );
};

const openSubMenu = (btnClicked: Ref<boolean>, flexSelector: string) => {
  btnClicked.value = !btnClicked.value;
  const flexMenu = document.querySelector(flexSelector)!;
  flexMenu.classList.toggle(
    "burger-menu__dropdown-menu-subtitles-btns-flex--opened"
  );
};

const openSummerDropDownMenu = () => {
  openSubMenu(
    summerBtnClicked,
    ".burger-menu__dropdown-menu-subtitles-btns-summer-flex"
  );
};

const openDemiSeasonDropDownMenu = () => {
  openSubMenu(
    demiSeasonBtnClicked,
    ".burger-menu__dropdown-menu-subtitles-btns-demi-season-flex"
  );
};

const openWinterDropDownMenu = () => {
  openSubMenu(
    winterBtnClicked,
    ".burger-menu__dropdown-menu-subtitles-btns-winter-flex"
  );
};

const openModelsDropDownMenu = () => {
  openSubMenu(
    modelsBtnClicked,
    ".burger-menu__dropdown-menu-subtitles-btns-models-flex"
  );
};
</script>

<style lang="scss" scoped>
@import "@/assets/App.scss";
.burger-menu-shadow {
  display: none;
  position: absolute;
  background: rgba(0, 0, 0, 0.54);
  width: 100%;
  height: 100vh;
  top: 0rem;
  z-index: 2;
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

  &__search-form {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #f9f9f9;
    height: 70px;
    border-bottom: 1px solid #eaeaea;
  }
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

  &__btns-flex {
    display: flex;
    justify-content: space-between;
  }

  &__wishlist-and-cart-btns-flex {
    display: flex;
  }
  &__wishlist-btn,
  &__cart-btn {
    @include btn;
    width: 58px;
    height: 58px;
  }

  &__catalogs-and-sections-btns-flex {
    display: flex;
    flex-direction: column;
    border-top: 1px solid #eaeaea;
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

    a {
      text-decoration: none;
      color: $Dark-Black;
    }
  }

  &__dropdown-menu {
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
  }

  &__dropdown-menu-title-btn {
    @include btn;
    height: 43px;
    width: 100%;
    justify-content: space-between;
    font-family: "Pragmatica Medium";
    font-size: 0.938rem;
  }

  &__dropdown-menu-subtitles-btns-flex {
    overflow: hidden;
    max-height: 0;
    transition: max-height 0.3s ease-in-out;

    &--opened {
      display: flex;
      flex-direction: column;
      max-height: 100vh;
      transition: max-height 0.3s ease-in-out;
    }
  }

  &__dropdown-menu-subtitle-btn {
    @include btn;
    width: 100%;
    height: 27px;
    justify-content: left;
    font-family: "Pragmatica Book";
    font-size: 0.875rem;
    padding-left: 1rem;
  }
}
</style>
