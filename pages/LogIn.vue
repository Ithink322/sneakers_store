<template>
  <UIBreadcrumb :breadcrumbTitle="'Авторизация'"></UIBreadcrumb>
  <h1 class="title">Авторизация</h1>
  <div class="container">
    <form @submit.prevent="logIn" class="container__form">
      <div class="container__input-body">
        <span class="container__input-title"
          >Email или логин
          <span class="container__input-title--red">*</span></span
        >
        <input
          class="container__input"
          type="text"
          placeholder="Введите данные для авторизации"
        />
      </div>
      <div class="container__input-body">
        <span class="container__input-title"
          >Пароль <span class="container__input-title--red">*</span></span
        >
        <div class="container__input-container">
          <input
            class="container__input"
            type="text"
            placeholder="Введите пароль от аккаунта"
          />
          <button
            @click="togglePassword"
            class="container__toggle-password-btn"
          >
            <img v-if="isPasswordVisible" src="/imgs/opened-eye.png" alt="" />
            <img v-if="!isPasswordVisible" src="/imgs/closed-eye.png" alt="" />
          </button>
        </div>
      </div>
      <button class="container__recover-password-btn">
        <span class="container__recover-password-text">
          Восстановить пароль</span
        >
      </button>
      <UIButton :content="'Войти в кабинет'" :width="'100%'"></UIButton>
      <div class="container__checkbox-content">
        <input type="checkbox" class="container__checkbox" />
        <label for="" class="container__checkbox-label">Запомнить меня</label>
      </div>
    </form>
    <div class="container__content">
      <div class="container__body">
        <div class="container__headline">
          <img src="/imgs/acc-icon.jpg" alt="" class="container__icon" />
          <span class="container__title">Ещё нет аккаунта?</span>
        </div>
        <div class="container__texts">
          <p class="container__text">
            <span class="container__text--bold">Регистрация на сайте</span>
            позволяет получить доступ к статусу и истории вашего заказа. Просто
            заполните поля ниже, и вы получите учетную запись.
          </p>
          <p class="container__text">
            Мы запрашиваем у вас только информацию, необходимую для того, чтобы
            сделать процесс покупки более быстрым и легким.
          </p>
        </div>
      </div>
      <UIButton
        :content="'Зарегистрироваться'"
        :bodyBgColor="'#ff6915'"
        :arrowBgColor="'#fb5a00'"
        :width="'100%'"
      ></UIButton>
    </div>
  </div>
</template>

<script setup lang="ts">
const isPasswordVisible = ref(false);
const togglePassword = () => {
  isPasswordVisible.value = !isPasswordVisible.value;
};
const logIn = () => {};
</script>

<style lang="scss" scoped>
@import "@/assets/App.scss";
.title {
  margin-bottom: 0.938rem;
}
.container {
  display: flex;
  flex-direction: column;
  gap: 3.125rem;
  padding: 0.938rem;
  border: 1px solid #eaeaea;

  &__form {
    display: flex;
    flex-direction: column;
    gap: 0.938rem;
  }
  &__input-container {
    position: relative;
    display: flex;
    align-items: center;
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
  &__recover-password-btn {
    @include btn;
    background-color: #f9f9f9;
    padding: 0.688rem 0;
    width: 100%;
  }
  &__recover-password-text {
    font-family: "Pragmatica Book";
    font-size: 0.938rem;
    border-bottom: 1px solid #2e2e2e;
  }
  &__checkbox-content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.625rem;
  }
  &__checkbox[type="checkbox"] {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    width: 22px;
    height: 22px;
    border: 1px solid #d6d6d6;
    margin: 0;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  &__checkbox[type="checkbox"]:checked {
    border: none;
  }
  &__checkbox[type="checkbox"]:checked:before {
    content: "";
    background: url("/imgs/tick.svg") no-repeat center center / 14px 10px;
    display: flex;
    width: 100%;
    height: 100%;
    color: #fff;
    background-color: $Dark-Black;
    font-size: 14px;
    text-align: center;
  }
  &__checkbox-label {
    font-family: "Pragmatica Book";
    font-size: 0.938rem;
  }
  &__content {
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
  }
  &__body {
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
  &__headline {
    display: flex;
    flex-direction: column;
    gap: 0.938rem;
  }
  &__icon {
    width: 38px;
    height: 45px;
    margin: 0 auto;
  }
  &__title {
    font-family: "Pragmatica Medium";
    font-size: 1.75rem;
    white-space: nowrap;
  }
  &__texts {
    display: flex;
    flex-direction: column;
    gap: 0.875rem;
  }
  &__text {
    font-family: "Pragmatica Medium";
    font-size: 0.938rem;
    color: #515151;
    line-height: 26px;
    margin: 0;
  }
  &__text--bold {
    font-family: "Pragmatica Bold";
    font-size: 0.938rem;
  }
}
/* 768px = 48em */
@media (min-width: 48em) {
  .container {
    flex-direction: row;

    &__headline {
      flex-direction: row;
      align-items: center;
      gap: 1.813rem;
      margin: 0 auto;
    }
    &__icon {
      margin: 0;
    }
  }
}
/* 1024px = 64em */
@media (min-width: 64em) {
}
/* 1200px = 75em */
@media (min-width: 75em) {
}
/* 1440px = 90em */
@media (min-width: 90em) {
}
/* 1920px = 120em */
@media (min-width: 120em) {
}
</style>
