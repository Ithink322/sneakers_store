<template>
  <div class="burger-menu-shadow">
    <nav class="burger-menu">
      <button @click="closeBurgerMenu" class="burger-menu-shadow__close-btn">
        <img src="@/public/imgs/cross.svg" alt="cross" />
      </button>
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
const isBurgerMenuVisible = ref(false);
const closeBurgerMenu = () => {
  /* document.querySelector<HTMLElement>(".burger-menu-shadow")!.style.display =
    "none"; */
  isBurgerMenuVisible.value = false;
};

const catalogButtonClicked = ref(false);
const openCatalogDropDownMenu = () => {
  const catalogBtn = document.querySelector<HTMLElement>(
    ".burger-menu__catalog-btn-catalog"
  )!;
  if (catalogButtonClicked.value) {
    catalogBtn.style.backgroundColor = "#ffffff";
    catalogBtn.style.color = "#000";
    document
      .querySelector<HTMLElement>(".burger-menu__dropdown-menu")!
      .classList.remove("burger-menu__dropdown-menu-opened");
  } else {
    catalogBtn.style.backgroundColor = "#000";
    catalogBtn.style.color = "#ffffff";
    document
      .querySelector<HTMLElement>(".burger-menu__dropdown-menu")!
      .classList.add("burger-menu__dropdown-menu-opened");
  }
  catalogButtonClicked.value = !catalogButtonClicked.value;
};

const summerBtnClicked = ref(false),
  demiSeasonBtnClicked = ref(false),
  winterBtnClicked = ref(false),
  modelsBtnClicked = ref(false);

const openSummerDropDownMenu = () => {
  summerBtnClicked.value = !summerBtnClicked.value;
  if (summerBtnClicked.value) {
    document
      .querySelector<HTMLElement>(
        ".burger-menu__dropdown-menu-subtitles-btns-summer-flex"
      )!
      .classList.add("burger-menu__dropdown-menu-subtitles-btns-flex-opened");
  } else {
    document
      .querySelector<HTMLElement>(
        ".burger-menu__dropdown-menu-subtitles-btns-summer-flex"
      )!
      .classList.remove(
        "burger-menu__dropdown-menu-subtitles-btns-flex-opened"
      );
  }
};
const openDemiSeasonDropDownMenu = () => {
  demiSeasonBtnClicked.value = !demiSeasonBtnClicked.value;
  if (demiSeasonBtnClicked.value) {
    document
      .querySelector<HTMLElement>(
        ".burger-menu__dropdown-menu-subtitles-btns-demi-season-flex"
      )!
      .classList.add("burger-menu__dropdown-menu-subtitles-btns-flex-opened");
  } else {
    document
      .querySelector<HTMLElement>(
        ".burger-menu__dropdown-menu-subtitles-btns-demi-season-flex"
      )!
      .classList.remove(
        "burger-menu__dropdown-menu-subtitles-btns-flex-opened"
      );
  }
};
const openWinterDropDownMenu = () => {
  winterBtnClicked.value = !winterBtnClicked.value;
  if (winterBtnClicked.value) {
    document
      .querySelector<HTMLElement>(
        ".burger-menu__dropdown-menu-subtitles-btns-winter-flex"
      )!
      .classList.add("burger-menu__dropdown-menu-subtitles-btns-flex-opened");
  } else {
    document
      .querySelector<HTMLElement>(
        ".burger-menu__dropdown-menu-subtitles-btns-winter-flex"
      )!
      .classList.remove(
        "burger-menu__dropdown-menu-subtitles-btns-flex-opened"
      );
  }
};
const openModelsDropDownMenu = () => {
  modelsBtnClicked.value = !modelsBtnClicked.value;
  if (modelsBtnClicked.value) {
    document
      .querySelector<HTMLElement>(
        ".burger-menu__dropdown-menu-subtitles-btns-models-flex"
      )!
      .classList.add("burger-menu__dropdown-menu-subtitles-btns-flex-opened");
  } else {
    document
      .querySelector<HTMLElement>(
        ".burger-menu__dropdown-menu-subtitles-btns-models-flex"
      )!
      .classList.remove(
        "burger-menu__dropdown-menu-subtitles-btns-flex-opened"
      );
  }
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
  left: 103%;
}
.burger-menu {
  position: relative;
  background: #fff;
  width: 90%;
  max-width: 328px;
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
}
.burger-menu__search-form {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f9f9f9;
  height: 70px;
  border-bottom: 1px solid #eaeaea;
}
.burger-menu__input {
  @include input;
  margin-left: 0.938rem;
  width: 192px;
  font-family: "Pragmatica Book";
  color: #000;
}
.burger-menu__input::placeholder {
  color: #969696;
}
.burger-menu__input:focus {
  outline: none;
}
.burger-menu__search-btn {
  @include btn;
  width: 70px;
  height: 70px;
  border-left: 1px solid #eaeaea;
}
.burger-menu__btns-flex {
  display: flex;
  justify-content: space-between;
}
.burger-menu__wishlist-and-cart-btns-flex {
  display: flex;
}
.burger-menu__wishlist-btn,
.burger-menu__cart-btn {
  @include btn;
  width: 58px;
  height: 58px;
}
.burger-menu__catalogs-and-sections-btns-flex {
  display: flex;
  flex-direction: column;
  border-top: 1px solid #eaeaea;
}
.burger-menu__catalog-btn {
  @include btn;
  justify-content: left;
  height: 51px;
  width: 100%;
  padding-left: 0.938rem;
  border-bottom: 1px solid #eaeaea;
  font-family: "Pragmatica Medium";
  font-size: 0.875rem;
}
.burger-menu__section-btn {
  @include btn;
  justify-content: left;
  height: 45px;
  width: 100%;
  padding-left: 0.938rem;
  font-family: "Pragmatica Book";
  font-size: 0.938rem;
}
.burger-menu__dropdown-menu {
  flex-direction: column;
  padding: 0 1.563rem;
  min-width: max-content;
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.3s ease-in-out;
}
.burger-menu__dropdown-menu-opened {
  max-height: 100vh;
  transition: max-height 0.3s ease-in-out;
}
.burger-menu__dropdown-menu-title-btn {
  @include btn;
  height: 43px;
  width: 100%;
  justify-content: space-between;
  font-family: "Pragmatica Medium";
  font-size: 0.938rem;
}
.burger-menu__dropdown-menu-subtitles-btns-flex {
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.3s ease-in-out;
}
.burger-menu__dropdown-menu-subtitles-btns-flex-opened {
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  transition: max-height 0.3s ease-in-out;
}
.burger-menu__dropdown-menu-subtitle-btn {
  @include btn;
  width: 100%;
  height: 27px;
  justify-content: left;
  font-family: "Pragmatica Book";
  font-size: 0.875rem;
  padding-left: 1rem;
}
</style>
