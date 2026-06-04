<template>
  <UIBreadcrumb :breadcrumbTitle="'Регистрация'"></UIBreadcrumb>
  <h1 class="title">Регистрация</h1>
  <div class="container">
    <form @submit.prevent="signUp" class="container__form">
      <div class="container__input-body">
        <span class="container__input-title"
          >Email или логин<span class="container__input-title--red"
            >*</span
          ></span
        >
        <span
          v-if="loginError"
          class="container__notice container__empty-notice"
          >{{ loginError }}</span
        >
        <span
          v-if="apiErrorMessage"
          class="container__notice container__valid-notice"
          >{{ apiErrorMessage }}</span
        >
        <input
          v-model="login"
          @input="loginOnInput"
          class="container__input"
          type="text"
          placeholder="Введите email адрес или логин"
          :class="{
            'invalid-login': loginError,
          }"
        />
      </div>
      <div class="container__input-body">
        <span class="container__input-title"
          >ФИО <span class="container__input-title--red">*</span></span
        >
        <span
          v-if="fioError"
          class="container__notice container__empty-notice"
          >{{ fioError }}</span
        >
        <input
          v-model="fio"
          @input="fioOnInput"
          class="container__input"
          type="text"
          placeholder="Ваше полное имя"
          :class="{
            'invalid-fio': fioError,
          }"
        />
      </div>
      <div class="container__input-body">
        <span class="container__input-title"
          >Номер телефона
          <span class="container__input-title--red">*</span></span
        >
        <span
          v-if="numberError"
          class="container__notice container__empty-notice"
          >{{ numberError }}</span
        >
        <input
          v-model="number"
          @input="numberOnInput"
          class="container__input"
          id="number"
          type="text"
          placeholder="+7 (___) ___ - ___ - ___"
          :class="{
            'number--empty': numberError,
          }"
        />
      </div>
      <div class="container__input-body">
        <span class="container__input-title"
          >Пароль <span class="container__input-title--red">*</span></span
        >
        <span
          v-if="passwordError"
          class="container__notice container__valid-notice"
          >{{ passwordError }}</span
        >
        <div class="container__input-container">
          <input
            v-model="pass1"
            @input="pass1OnInput"
            class="container__input"
            :type="isPasswordVisible1 ? 'text' : 'password'"
            placeholder="Придумайте пароль"
            :class="{
              'invalid-pass-1': passwordError,
            }"
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
        <span
          v-if="passwordConfirmError"
          class="container__notice container__valid-notice"
          >{{ passwordConfirmError }}</span
        >
        <div class="container__input-container">
          <input
            v-model="pass2"
            @input="pass2OnInput"
            class="container__input"
            :type="isPasswordVisible2 ? 'text' : 'password'"
            placeholder="Повторите пароль"
            :class="{
              'invalid-pass-2': passwordConfirmError,
            }"
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
      <span
        v-if="policyError"
        class="container__notice container__valid-notice"
        >{{ policyError }}</span
      >
      <div class="container__checkbox-content">
        <input
          v-model="isPolicyAccepted"
          type="checkbox"
          class="container__checkbox"
          :id="'container__checkbox'"
        />
        <label class="container__checkbox-label" :for="'container__checkbox'"
          >Я соглашаюсь на обработку персональных данных в соответствии с
          <NuxtLink
            :to="'/PrivacyPolicy'"
            class="container__checkbox-label--underlined"
            >политикой конфиденциальности</NuxtLink
          ></label
        >
      </div>
      <UIButton
        class="container__create-an-acc-btn"
        :content="'Создать аккаунт'"
        :width="'100%'"
      ></UIButton>
    </form>
    <div class="container__content">
      <div class="container__body">
        <div class="container__headline">
          <img src="/imgs/acc-icon.jpg" alt="" class="container__icon" />
          <span class="container__title">Уже есть аккаунт?</span>
        </div>
        <p class="container__text">
          Перейдите к
          <span class="container__text--bold">авторизации</span> если у вас уже
          есть зарегистрированный аккаунт.
        </p>
      </div>
      <UIButton
        type="button"
        class="container__logIn-btn"
        :link="'/logIn'"
        :content="'Авторизоваться'"
        :bodyBgColor="'#ff6915'"
        :arrowBgColor="'#fb5a00'"
        :width="btnWidth"
      ></UIButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import Inputmask from "inputmask";
import axios from "axios";
import { getApiErrorMessage, getApiResponseMessage } from "@/utils/apiClient";
import type { SignUpFormValues } from "@/utils/validation/auth";
import {
  validateFio,
  validateLogin,
  validatePassword,
  validatePasswordConfirm,
  validatePhone,
  validatePolicy,
} from "@/utils/validation/auth";
import { useField, useForm } from "vee-validate";

useHead({
  title: "Присоединяйтесь к Sneakers Store - Откройте для себя мир кроссовок",
  meta: [
    {
      name: "description",
      content:
        "Создайте аккаунт Sneakers Store и присоединяйтесь к нашему сообществу любителей кроссовок! Исследуйте нашу подборку, получайте эксклюзивный доступ к релизам и будьте в курсе трендов.",
    },
    {
      name: "keywords",
      content:
        "кроссовки, обувь, регистрация, аккаунт, sneakers store, обувь, уличная мода, кроссовки, регистрация",
    },
  ],
});

const windowWidth = ref(0);
const updateWidth = () => {
  windowWidth.value = window.innerWidth;
};
onMounted(() => {
  updateWidth();
  window.addEventListener("resize", updateWidth);
});
onBeforeUnmount(() => {
  window.removeEventListener("resize", updateWidth);
});
const btnWidth = computed(() => {
  return windowWidth.value < 768 ? "100%" : "254px";
});

const isPasswordVisible1 = ref(false);
const isPasswordVisible2 = ref(false);
const togglePassword1 = () => {
  isPasswordVisible1.value = !isPasswordVisible1.value;
};
const togglePassword2 = () => {
  isPasswordVisible2.value = !isPasswordVisible2.value;
};

onMounted(() => {
  const numberInput = document.getElementById("number")! as HTMLInputElement;
  Inputmask("+7 (999) 999-99-99").mask(numberInput);
});

const apiErrorMessage = ref("");
const { handleSubmit, validateField } = useForm<SignUpFormValues>({
  initialValues: {
    login: "",
    fio: "",
    number: "",
    password: "",
    passwordConfirm: "",
    policy: true,
  },
});
const { value: login, errorMessage: loginError } = useField<string>(
  "login",
  validateLogin
);
const { value: fio, errorMessage: fioError } = useField<string>(
  "fio",
  validateFio
);
const { value: number, errorMessage: numberError } = useField<string>(
  "number",
  validatePhone
);
const { value: pass1, errorMessage: passwordError } = useField<string>(
  "password",
  validatePassword
);
const { value: pass2, errorMessage: passwordConfirmError } = useField<string>(
  "passwordConfirm",
  (value) => validatePasswordConfirm(value, pass1.value)
);
const { value: isPolicyAccepted, errorMessage: policyError } =
  useField<boolean>("policy", validatePolicy);
const clearApiError = () => {
  apiErrorMessage.value = "";
};
const loginOnInput = clearApiError;
const fioOnInput = clearApiError;
const numberOnInput = clearApiError;
const pass1OnInput = () => {
  clearApiError();
  if (pass2.value) {
    validateField("passwordConfirm");
  }
};
const pass2OnInput = () => {
  clearApiError();
  validateField("passwordConfirm");
};

const router = useRouter();
const isAdmin = ref(false);
const signUp = handleSubmit(async (values) => {
  apiErrorMessage.value = "";

  try {
    const response = await axios.post("/api/auth/signUp", {
      login: values.login,
      fio: values.fio,
      number: values.number,
      password: values.password,
      isAdmin: isAdmin.value,
    });

    if (response.data.success) {
      router.push("/logIn");
    } else {
      apiErrorMessage.value = getApiResponseMessage(
        response.data,
        "Не удалось зарегистрироваться. Попробуйте позже."
      );
    }
  } catch (error) {
    apiErrorMessage.value = getApiErrorMessage(
      error,
      "Не удалось зарегистрироваться. Попробуйте позже."
    );
  }
});
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
  &__notice {
    font-family: "Pragmatica Book";
    line-height: 0.938rem;
    color: #f81d2a;
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
    flex-shrink: 0;
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
    cursor: pointer;
  }
  &__checkbox-label--underlined {
    border-bottom: 1px solid #474747;
  }
  &__content {
    position: relative;
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
.invalid-login,
.login--empty,
.invalid-fio,
.fio--empty,
.number--empty,
.invalid-pass-1,
.pass-1--empty,
.invalid-pass-2,
.pass-2--empty,
.equal-passes {
  border: 1px solid #f81d2a;
  color: #f81d2a;
}
.invalid-login::placeholder,
.login--empty::placeholder,
.invalid-fio::placeholder,
.fio--empty::placeholder,
.number--empty::placeholder,
.invalid-pass-1::placeholder,
.pass-1--empty::placeholder,
.invalid-pass-2::placeholder,
.pass-2--empty::placeholder,
.equal-passes::placeholder {
  color: #f81d2a;
}
/* 768px = 48em */
@media (min-width: 48em) {
  .title {
    margin-bottom: 1.125rem;
  }
  .container {
    flex-direction: row;
    gap: 1.25rem;

    &__form {
      flex-shrink: 0;
      width: 324px;
    }
    &__content {
      align-items: center;
    }
  }
}
/* 1200px = 75em */
@media (min-width: 75em) {
  .title {
    margin-bottom: 3.313rem;
  }
  .container {
    align-items: top;
    gap: 15.688rem;
    padding: 2.5rem;

    &__content {
      align-items: stretch;
    }
    &__content::before {
      position: absolute;
      content: "";
      height: 204px;
      border: 1px solid #eaeaea;
      margin-left: -7.375rem;
    }
    &__body {
      gap: 2rem;
    }
    &__headline {
      margin-left: -4.25rem;
    }
    &__headline {
      flex-direction: row;
      align-items: center;
      gap: 1.813rem;
      margin: 0 auto 0 -4.25rem;
    }
    &__icon {
      margin: 0;
    }
    &__text {
      text-align: left;
    }
    &__logIn-btn {
      margin-left: 0;
    }
  }
}
/* 1440px = 90em */
@media (min-width: 90em) {
  .container {
    &__form {
      width: 464px;
    }
  }
}
</style>
