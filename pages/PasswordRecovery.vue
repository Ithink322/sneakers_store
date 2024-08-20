<template>
  <UIBreadcrumb :breadcrumbTitle="'Восстановление пароля'"></UIBreadcrumb>
  <h1 class="title">Восстановление пароля</h1>
  <div class="container">
    <form
      v-if="isFormVisible"
      @submit.prevent="resetPassword"
      class="container__form"
    >
      <p class="container__text">
        <span class="container__text--bold">Забыли свой пароль?</span> Укажите
        свой Email или имя пользователя. Ссылку на создание нового пароля вы
        получите по электронной почте.
      </p>
      <div class="container__input-body">
        <span class="container__input-title"
          >Email или логин
          <span class="container__input-title--red">*</span></span
        >
        <input
          class="container__input"
          type="text"
          placeholder="Введите email адрес"
        />
      </div>
      <div class="container__input-body">
        <span class="container__input-title"
          >Пароль <span class="container__input-title--red">*</span></span
        >
        <div class="container__input-container">
          <input
            class="container__input container__input-password-1"
            :type="isPasswordVisible1 ? 'text' : 'password'"
            placeholder="Введите старый пароль"
          />
          <button
            type="button"
            @click="togglePassword1"
            class="container__toggle-password-btn"
          >
            <img v-if="isPasswordVisible1" src="/imgs/opened-eye.png" alt="" />
            <img v-if="!isPasswordVisible1" src="/imgs/closed-eye.png" alt="" />
          </button>
        </div>
      </div>
      <div class="container__input-body">
        <span class="container__input-title"
          >Повторите пароль
          <span class="container__input-title--red">*</span></span
        >
        <div class="container__input-container">
          <input
            class="container__input container__input-password-2"
            :type="isPasswordVisible2 ? 'text' : 'password'"
            placeholder="Придумайте новый пароль"
          />
          <button
            type="button"
            @click="togglePassword2"
            class="container__toggle-password-btn"
          >
            <img v-if="isPasswordVisible2" src="/imgs/opened-eye.png" alt="" />
            <img v-if="!isPasswordVisible2" src="/imgs/closed-eye.png" alt="" />
          </button>
        </div>
      </div>
      <UIButton
        type="submit"
        :content="'Сбросить пароль'"
        :width="'100%'"
      ></UIButton>
    </form>
    <div v-if="isLoading" class="container__loading-container">
      <div ref="progressRing" class="container__progress-ring"></div>
      <span class="container__loading-text">
        Подождите, пока<br />
        идёт смена пароля
      </span>
    </div>
    <div v-if="isMessageVisible" class="container__message message">
      <button @click="closeMessage" class="message__close-btn">
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.7"
            d="M9.66937 0.226864C9.52925 0.0864247 9.33901 0.0075 9.14062 0.0075C8.94224 0.0075 8.752 0.0864247 8.61188 0.226864L4.94438 3.88686L1.27688 0.219364C1.13675 0.0789247 0.946513 0 0.748125 0C0.549737 0 0.359499 0.0789247 0.219375 0.219364C-0.073125 0.511864 -0.073125 0.984364 0.219375 1.27686L3.88687 4.94436L0.219375 8.61186C-0.073125 8.90436 -0.073125 9.37686 0.219375 9.66936C0.511875 9.96186 0.984375 9.96186 1.27688 9.66936L4.94438 6.00186L8.61188 9.66936C8.90438 9.96186 9.37687 9.96186 9.66937 9.66936C9.96187 9.37686 9.96187 8.90436 9.66937 8.61186L6.00187 4.94436L9.66937 1.27686C9.95437 0.991864 9.95437 0.511864 9.66937 0.226864Z"
            fill="#454A4C"
          />
        </svg>
      </button>
      <div ref="animatedTick" class="message__tick"></div>
      <span class="message__title"> Отзыв отправлен </span>
      <span class="message__text"
        >Спасибо, ваш отзыв<br class="message__text-br--till1200px" />
        успешно опубликован.</span
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import lottie from "lottie-web";

useHead({
  title: "Забыли пароль? - Sneakers Store",
  meta: [
    {
      name: "description",
      content: "Не волнуйтесь, бывает! Придумайте новый пароль.",
    },
    {
      name: "keywords",
      content:
        "кроссовки, обувь, пароль, забыл пароль, сброс пароля, sneakers store, обувь, аккаунт",
    },
  ],
});

const isPasswordVisible1 = ref(false);
const isPasswordVisible2 = ref(false);
const togglePassword1 = () => {
  isPasswordVisible1.value = !isPasswordVisible1.value;
};
const togglePassword2 = () => {
  isPasswordVisible2.value = !isPasswordVisible2.value;
};

const isFormVisible = ref(true);
const progressRing = ref<HTMLElement | null>(null);
const animatedTick = ref<HTMLElement | null>(null);
const animationOfTick = ref<any>(null);
const isLoading = ref(false);
const isMessageVisible = ref(false);
const resetPassword = () => {
  isLoading.value = true;
  nextTick(() => {
    const animation = lottie.loadAnimation({
      container: progressRing.value!,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/animations/progress-ring.json",
    });
    setTimeout(() => {
      isLoading.value = false;
      animation.destroy();
      isMessageVisible.value = true;
      isFormVisible.value = false;
      nextTick(() => {
        if (animatedTick.value) {
          animationOfTick.value = lottie.loadAnimation({
            container: animatedTick.value!,
            renderer: "svg",
            loop: false,
            autoplay: true,
            path: "/animations/tick.json",
          });
        }
      });
    }, 2800);
  });
};
const closeMessage = () => {
  isMessageVisible.value = false;
  isFormVisible.value = true;
  animationOfTick.value!.destroy();
};
</script>

<style lang="scss" scoped>
@import "@/assets/App.scss";
.title {
  margin-bottom: 0.938rem;
}
.container {
  position: relative;
  padding: 0.938rem;
  border: 1px solid #eaeaea;

  &__form {
    display: flex;
    flex-direction: column;
    gap: 0.938rem;
  }
  &__text {
    text-align: center;
    font-family: "Pragmatica Book";
    font-size: 0.938rem;
    line-height: 26px;
    margin: 0;
  }
  &__text--bold {
    font-family: "Pragmatica Bold";
  }
  &__input-body {
    display: flex;
    flex-direction: column;
    gap: 0.313rem;
  }
  &__input-title {
    font-family: "Pragmatica Book";
    font-size: 0.938rem;
    line-height: 27px;
  }
  &__input-title--red {
    color: #ff1515;
  }
  &__input-container {
    position: relative;
    display: flex;
    align-items: center;
  }
  &__input {
    padding: 1.031rem 1.25rem;
    border: 1px solid #d6d6d6;
    outline: none;
    width: 100%;
    font-family: "Pragmatica Book";
    font-size: 1rem;
  }
  &__input::placeholder {
    color: #c1c1c1;
  }
  &__input:focus {
    border: 1px solid $Dark-Black;
  }
  &__toggle-password-btn {
    position: absolute;
    @include btn;
    right: 1.5rem;
  }
  &__toggle-password-btn img {
    width: 22px;
    height: 22px;
  }
  &__loading-container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    @include flex-centered;
    flex-direction: column;
    gap: 1.563rem;
    background-color: #fff;
    opacity: 90%;
  }
  &__progress-ring {
    width: 74px;
    height: 74px;
  }
  &__loading-text {
    text-align: center;
    font-family: "Pragmatica Medium";
    font-size: 1rem;
    color: #4d4d4d;
  }
}
.message {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background-color: #fff;
  margin: 1.25rem 0;

  &__close-btn {
    position: absolute;
    @include btn;
    top: 0.625rem;
    right: 0.625rem;
  }
  &__tick {
    width: 195px;
    height: 195px;
    margin: 0 auto;
  }
  &__title {
    text-align: center;
    font-family: "Pragmatica Medium";
    font-size: 1.375rem;
    color: #2c2f30;
    margin-top: -3.75rem;
  }
  &__text {
    text-align: center;
    font-family: "Pragmatica Book";
    font-size: 0.938rem;
    line-height: 1.5rem;
    color: #545454;
    margin-top: -0.938rem;
  }
}
/* 768px = 48em */
@media (min-width: 48em) {
  .title {
    margin-bottom: 1.125rem;
  }
  .container {
    &__text {
      text-align: left;
    }
  }
}
/* 1200px = 75em */
@media (min-width: 75em) {
  .title {
    margin-bottom: 3.313rem;
  }
  .container {
    width: 544px;
    margin: 0 auto;
    padding: 2.5rem;

    &__text {
      text-align: center;
    }
  }
}
</style>
