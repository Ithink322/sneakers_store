<template>
  <div class="burger-menu-shadow">
    <button @click="closeBurgerMenu" class="burger-menu-shadow__close-btn">
      <img src="@/public/imgs/cross.svg" alt="cross" />
    </button>
    <nav class="burger-menu">
      <form class="burger-menu__search-form">
        <input
          placeholder="Поиск по каталогу товаров..."
          type="text"
          class="burger-menu__input"
        />
        <button class="burger-menu__search-btn">
          <img src="@/public/imgs/search-icon.svg" alt="" />
        </button>
      </form>
      <div class="burger-menu__btns-flex">
        <UISignUpOrSignInOrMyAccountBtn
          style="margin-left: 0.938rem"
        ></UISignUpOrSignInOrMyAccountBtn>
        <div class="burger-menu__wishlist-and-cart-btns-flex">
          <button class="burger-menu__wishlist-btn">
            <img src="@/public/imgs/wishlist-icon.svg" alt="" />
            <UIWishlistCounterCircle></UIWishlistCounterCircle>
          </button>
          <button class="burger-menu__cart-btn">
            <img src="@/public/imgs/cart-icon.svg" alt="" />
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
              src="@/public/imgs/arrow-icon.svg"
              alt=""
              class="burger-menu__dropdown-menu-title-arrow-summer-btn"
            />
          </button>
          <div
            class="burger-menu__dropdown-menu-subtitles-btns-flex burger-menu__dropdown-menu-subtitles-btns-summer-flex"
          >
            <button class="burger-menu__dropdown-menu-subtitle-btn">
              Для бега
            </button>
            <button class="burger-menu__dropdown-menu-subtitle-btn">
              Повседневные
            </button>
            <button class="burger-menu__dropdown-menu-subtitle-btn">
              Треккинг
            </button>
            <button class="burger-menu__dropdown-menu-subtitle-btn">
              Для футбола
            </button>
            <button class="burger-menu__dropdown-menu-subtitle-btn">
              Для волейбола
            </button>
            <button class="burger-menu__dropdown-menu-subtitle-btn">
              Для баскетбола
            </button>
            <button class="burger-menu__dropdown-menu-subtitle-btn">
              Для тенниса
            </button>
            <button class="burger-menu__dropdown-menu-subtitle-btn">
              Спортивные
            </button>
          </div>
          <button
            @click="openDemiSeasonDropDownMenu"
            class="burger-menu__dropdown-menu-title-btn burger-menu__dropdown-menu-title-demi-season-btn"
          >
            Демисезон
            <img
              src="@/public/imgs/arrow-icon.svg"
              alt=""
              class="burger-menu__dropdown-menu-title-arrow-demi-season-btn"
            />
          </button>
          <div
            class="burger-menu__dropdown-menu-subtitles-btns-flex burger-menu__dropdown-menu-subtitles-btns-demi-season-flex"
          >
            <button class="burger-menu__dropdown-menu-subtitle-btn">
              Для бега
            </button>
            <button class="burger-menu__dropdown-menu-subtitle-btn">
              Повседневные
            </button>
            <button class="burger-menu__dropdown-menu-subtitle-btn">
              Треккинг
            </button>
            <button class="burger-menu__dropdown-menu-subtitle-btn">
              Кожаные
            </button>
          </div>
          <button
            @click="openWinterDropDownMenu"
            class="burger-menu__dropdown-menu-title-btn burger-menu__dropdown-menu-title-winter-btn"
          >
            Зима
            <img
              src="@/public/imgs/arrow-icon.svg"
              alt=""
              class="burger-menu__dropdown-menu-title-arrow-winter-btn"
            />
          </button>
          <div
            class="burger-menu__dropdown-menu-subtitles-btns-flex burger-menu__dropdown-menu-subtitles-btns-winter-flex"
          >
            <button class="burger-menu__dropdown-menu-subtitle-btn">
              Утепленные
            </button>
            <button class="burger-menu__dropdown-menu-subtitle-btn">
              Повседневные
            </button>
            <button class="burger-menu__dropdown-menu-subtitle-btn">
              Кожаные
            </button>
          </div>
          <button
            @click="openModelsDropDownMenu"
            class="burger-menu__dropdown-menu-title-btn burger-menu__dropdown-menu-title-models-btn"
          >
            Модели
            <img
              src="@/public/imgs/arrow-icon.svg"
              alt=""
              class="burger-menu__dropdown-menu-title-arrow-models-btn"
            />
          </button>
          <div
            class="burger-menu__dropdown-menu-subtitles-btns-flex burger-menu__dropdown-menu-subtitles-btns-models-flex"
          >
            <button class="burger-menu__dropdown-menu-subtitle-btn">
              Nike Air Force 1
            </button>
            <button class="burger-menu__dropdown-menu-subtitle-btn">
              Nike SB Dunk Low
            </button>
            <button class="burger-menu__dropdown-menu-subtitle-btn">
              Nike Air Max 90
            </button>
            <button class="burger-menu__dropdown-menu-subtitle-btn">
              Nike Shox
            </button>
            <button class="burger-menu__dropdown-menu-subtitle-btn">
              Nike Blazer
            </button>
            <button class="burger-menu__dropdown-menu-subtitle-btn">
              Nike Air Max Plus
            </button>
          </div>
        </div>
        <button class="burger-menu__catalog-btn">МУЖСКИЕ</button>
        <button class="burger-menu__catalog-btn">ЖЕНСКИЕ</button>
        <button class="burger-menu__catalog-btn">ДЕТСКИЕ</button>
        <button class="burger-menu__catalog-btn">РАСПРОДАЖА</button>
        <button class="burger-menu__section-btn">О магазине</button>
        <button class="burger-menu__section-btn">Наш блог</button>
        <button class="burger-menu__section-btn">Доставка и оплата</button>
        <button class="burger-menu__section-btn">Контакты</button>
        <button class="burger-menu__section-btn">Индивидуальный заказ</button>
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
