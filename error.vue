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
        src="/imgs/404-from320px.jpg"
        alt=""
      />
      <img
        class="container__hero container__hero--from768px"
        src="/imgs/404-from768px.jpg"
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
      <UIButton
        @click="handleError"
        :to="'/'"
        :content="'На главную'"
        class="container__btn"
      ></UIButton>
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
    width: fit-content;
    margin: 1.875rem auto 0 auto;
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
    &__btn {
      margin: 1.563rem auto 0 auto;
    }
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
    &__btn {
      margin: 1.563rem 0 0 0;
      order: 3;
    }
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
      width: 875px;
      height: 565px;
      margin-top: -29.75rem;
      margin-right: -1rem;
      order: 4;
    }
    &__info {
      margin-top: 0;
      order: 1;
    }
  }
}
/* 1920px = 120em */
@media (min-width: 120em) {
  .container {
    &__hero {
      margin-right: -2rem;
    }
  }
}
</style>
