<template>
  <UIHeader></UIHeader>
  <main class="page-container">
    <UIBreadcrumb :breadcrumbTitle="'Страница не найдена'"></UIBreadcrumb>
    <div class="container">
      <h1 class="container__title">
        <div class="container__content">
          ОШИБКА
          <span class="container__line"></span>
        </div>
        ТАКАЯ СТРАНИЦА<br class="container__content-br--from1200px" />
        НЕ НАЙДЕНА
      </h1>
      <img
        class="container__hero container__hero--from320px"
        src="/imgs/404-from320px.svg"
        alt=""
      />
      <img
        class="container__hero container__hero--from768px"
        src="/imgs/404-from768px.svg"
        alt=""
      />
      <p class="container__info">
        Запрашиваемая страница не найдена. Возможно она была<br
          class="container__info-br--from1200px"
        />
        удалена, либо её адрес был изменен. Попробуйте<br
          class="container__info-br--from1200px"
        />
        воспользоваться поиском.
      </p>
      <form class="search-form">
        <input
          placeholder="Поиск по каталогу..."
          type="text"
          class="search-form__input"
        />
        <svg
          class="search-form__icon"
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
      </form>
      <button @click="handleError" class="container__btn btn">
        <div class="btn__content">
          <span class="btn__text">На главную</span>
        </div>
        <div class="btn__arrow-area btn__arrow">
          <img src="/imgs/white-right-arrow.svg" alt="" />
        </div>
      </button>
    </div>
  </main>
  <UIFooter></UIFooter>
</template>

<script setup lang="ts">
import type { NuxtError } from "@nuxt/types";

const props = defineProps({
  error: Object as () => NuxtError,
});

const handleError = () => clearError({ redirect: "/" });
</script>

<style lang="scss" scoped>
@import "@/assets/App.scss";
.page-container {
  padding: 0rem 0.938rem;
}
.container {
  &__title {
    font-family: "Pragmatica Medium";
    font-size: 1.5rem;
    line-height: 32px;
    margin: 0.938rem 0 1.813rem 0;
  }
  &__content-br--from1200px,
  &__info-br--from1200px {
    display: none;
  }
  &__content {
    display: flex;
    align-items: center;
    gap: 0.625rem;
  }
  &__line {
    display: inline-block;
    width: 90px;
    border: 1px solid $Dark-Black;
  }
  &__hero {
    margin-left: -0.938rem;
    width: calc(100% + 0.938rem * 2);
  }
  &__hero--from768px {
    display: none;
  }
  &__info {
    text-align: center;
    font-family: "Pragmatica Book";
    font-size: 0.938rem;
    line-height: 24px;
    color: #292929;
  }
  &__btn {
    margin: 0 auto;
  }
}
.search-form {
  position: relative;
  margin: 1.563rem 0 1.875rem 0;

  &__input {
    @include input;
    outline: none;
    border: 1px solid #c1c1c1;
    padding: 1.25rem 3rem 1.25rem 1.25rem;
    width: 100%;
    font-family: "Pragmatica Medium";
    font-size: 1rem;
  }
  &__input::placeholder {
    font-family: "Pragmatica Book";
    font-size: 1rem;
    color: #c8c8c8;
  }
  &__icon {
    position: absolute;
    top: 1.25rem;
    right: 1.25rem;
  }
}
.btn {
  @include btn;
  background-color: $Light-Black;
  width: 246px;
  height: 65px;

  &__content {
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
  &__arrow-area {
    background-color: $Dark-Black;
  }
}

/* 768px = 48em */
@media (min-width: 48em) {
  .page-container {
    padding: 0rem calc((100vw - 44.874rem) / 2);
  }
  .container {
    &__title {
      margin: 0.938rem 0 1.563rem 0;
    }
    &__hero {
      width: 625px;
      height: 415px;
      margin-left: 1.5rem;
    }
    &__info {
      margin: 0 6.875rem;
    }
    &__hero--from320px {
      display: none;
    }
    &__hero--from768px {
      display: block;
    }
  }
  .search-form {
    margin: 1.563rem auto;
    width: 627px;
  }
}
/* 1024px = 64em */
@media (min-width: 64em) {
  .page-container {
    padding: 0rem calc((100vw - 44.75rem) / 2);
  }
}
/* 1200px = 75em */
@media (min-width: 75em) {
  .page-container {
    padding: 0rem calc((100vw - 71.875rem) / 2);
  }
  .container {
    &__title {
      font-size: 2.625rem;
      line-height: 52px;
      margin: 5.75rem 0 1.563rem 0;
    }
    &__content-br--from1200px,
    &__info-br--from1200px {
      display: block;
    }
    &__hero {
      width: 700px;
      height: 460px;
      margin-left: auto;
      margin-top: -15.4rem;
    }
    &__info {
      margin: -13.5rem 0 0 0;
      text-align: left;
    }
  }
  .search-form {
    margin: 0.938rem 0 2.5rem 0;
    width: 532px;
    order: 2;
  }
  .btn {
    margin: 0;
    order: 3;
  }
}
/* 1440px = 90em */
@media (min-width: 90em) {
  .page-container {
    padding: 0rem calc((100vw - 85rem) / 2);
  }
  .container {
    display: flex;
    flex-direction: column;

    &__title {
      order: 0;
    }
    &__hero {
      width: 950px;
      height: 606px;
      margin-top: -31.75rem;
      margin-bottom: 3.438rem;
      margin-right: -4rem;
      order: 4;
    }
    &__info {
      margin-top: 0;
      order: 1;
    }
  }
  .search-form {
    order: 2;
  }
}
</style>
