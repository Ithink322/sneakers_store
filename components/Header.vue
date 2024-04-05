<template>
  <nav class="headers_nav">
    <header class="header">
      <div class="header-top">
        <div class="header-top__titles-flex">
          <span class="header-top__title">О магазине</span>
          <span class="header-top__title">Наш блог</span>
          <span class="header-top__title">Доставка и оплата</span>
          <span class="header-top__title">Контакты</span>
          <span class="header-top__title">Индивидуальный заказ</span>
        </div>
        <UISignUpOrSignInOrMyAccountBtn></UISignUpOrSignInOrMyAccountBtn>
      </div>
      <div class="header-mid">
        <div class="header__titles-flex">
          <div
            @click="toggleCatalogMenu"
            class="header__burger-btn-and-burger-text-from768px-flex"
          >
            <button class="header__burger-btn">
              <img src="@/public/imgs/burger-btn.svg" alt="" />
            </button>
            <span class="header__burger-text-from768px"
              ><span class="header__burger-text-hiden-at1440px">Меню</span
              ><span class="header__burger-text-hiden-at320px"
                >Каталог</span
              ></span
            >
          </div>
          <span class="header__title">Мужские</span>
          <span class="header__title">Женские</span>
          <span class="header__title">Детские</span>
          <span class="header__title">Распродажа</span>
        </div>
        <img src="@/public/imgs/logo.svg" alt="" class="header__logo" />
        <div class="header__btns-flex">
          <button class="header__my-account-btn-from768px">
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
          <button class="header__search-btn-from768px">
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
          <button class="header__wishlist-btn">
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
            <UIWishlistCounterCircle></UIWishlistCounterCircle>
          </button>
          <button class="header__cart-btn">
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
        </div>
      </div>
    </header>
    <BurgerMenu></BurgerMenu>
    <CatalogMenu></CatalogMenu>
  </nav>
</template>

<script setup lang="ts">
onMounted(() => {
  if (window.innerWidth < 1200) {
    const burgerBtn = document.querySelector(".header__burger-btn")!;
    burgerBtn.addEventListener("click", () => {
      const burgerMenu = document.querySelector<HTMLElement>(
        ".burger-menu-shadow"
      )!;
      burgerMenu.style.display = "block";
    });
  }
  if (window.innerWidth >= 768) {
    const buttons = Array.from(
      document.querySelectorAll<HTMLButtonElement>(".header__btns-flex button")
    );

    buttons.forEach((button) => {
      button.addEventListener("click", (event) => {
        buttons.forEach((btn) => {
          btn.style.background = "#FFF";
          const svg = btn.querySelector("svg")!;
          const path = svg.querySelector("path")!;
          path.setAttribute("stroke", "black");
        });

        const currentButton = event.currentTarget as HTMLElement;
        currentButton.style.backgroundColor = "#000";
        const svg = currentButton.querySelector("svg")!;
        const path = svg.querySelector("path")!;
        path.setAttribute("stroke", "#FFF");
      });
    });
  }
});
const toggleCatalogMenu = () => {
  document
    .querySelector<HTMLElement>(".catalog-menu")!
    .classList.toggle("catalog-menu-opened");
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
  justify-content: space-between;
  width: 100%;
}
.header__burger-btn {
  @include btn;
  width: 59px;
  height: 70px;
  padding-right: 1.438rem;
  border-right: 1px solid #eaeaea;
}
.header__burger-text-from768px,
.header__burger-text-hiden-at320px {
  display: none;
}
.header__title {
  display: none;
}
.header__btns-flex {
  display: flex;
  align-items: center;
  gap: 2rem;
  border-left: 1px solid #eaeaea;
  padding-left: 0.938rem;
  padding-right: 0.5rem;
}
.header__my-account-btn-from768px,
.header__search-btn-from768px {
  display: none;
}
.header__wishlist-btn,
.header__cart-btn {
  @include btn;
}
/* 768px = 48em */
@media (min-width: 48em) {
  .header {
    padding: 0rem calc((100vw - 44.874rem) / 2);
    margin: 0 auto;
  }
  .header__burger-btn-and-burger-text-from768px-flex {
    display: flex;
    align-items: center;
    margin-right: auto;
    margin-left: 1.614rem;
    cursor: pointer;
  }
  .header__burger-btn {
    border-right: none;
    padding-right: 0rem;
  }
  .header__burger-text-from768px {
    display: block;
    margin-top: -0.1rem;
    font-family: "Pragmatica Medium", sans-serif;
    font-size: 0.938rem;
  }
  .header__titles-flex {
    display: flex;
    order: 2;
    margin-right: auto;
  }
  .header__logo {
    padding-right: 1.875rem;
    border-right: 1px solid #eaeaea;
    order: 1;
  }
  .header__btns-flex {
    order: 3;
    padding-left: 0rem;
    padding-right: 0rem;
    border-right: 1px solid #eaeaea;
    gap: 0rem;
  }
  .header__wishlist-btn,
  .header__cart-btn {
    @include btn;
    width: 71px;
    height: 70px;
  }
  .header__my-account-btn-from768px,
  .header__search-btn-from768px,
  .header__wishlist-btn {
    display: block;
    @include btn;
    width: 71px;
    height: 70px;
    border-right: 1px solid #eaeaea;
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
  }
  .header-top__titles-flex {
    display: flex;
    align-items: center;
    gap: 2.5rem;
  }
  .header-top__title {
    font-family: "Pragmatica Book";
    font-size: 0.875rem;
    cursor: pointer;
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
  .header__burger-text-hiden-at1440px,
  .header__my-account-btn-from768px {
    display: none;
  }
  .header__titles-flex {
    display: flex;
    align-items: center;
    gap: 3.563rem;
    margin-left: 2rem;
  }
  .header__burger-text-hiden-at320px {
    display: block;
  }
  .header__title {
    display: block;
    font-family: "Pragmatica Medium", sans-serif;
    font-size: 0.938rem;
    cursor: pointer;
  }
  .header__wishlist-counter-circle,
  .header__cart-counter-circle {
    width: 16px;
    height: 16px;
    margin-left: 3.8rem;
    margin-top: -3.9rem;
  }
}
/* 1440px = 90em */
@media (min-width: 90em) {
  .header {
    padding: 0rem calc((100vw - 85rem) / 2);
  }
  .header__titles-flex {
    margin-left: 11.755rem;
  }
}
</style>
