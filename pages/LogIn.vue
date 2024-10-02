<template>
  <UIBreadcrumb :breadcrumbTitle="'Авторизация'"></UIBreadcrumb>
  <h1 class="title">Авторизация</h1>
  <div class="container">
    <form @submit.prevent="logIn" class="container__form">
      <span
        v-if="!isDataCorrect"
        class="container__notice container__empty-notice"
        >Неверный логин или пароль.</span
      >
      <div class="container__input-body">
        <span class="container__input-title"
          >Email или логин
          <span class="container__input-title--red">*</span></span
        >
        <span
          v-if="isLoginEmpty"
          class="container__notice container__empty-notice"
          >Важно заполнить это поле.</span
        >
        <span
          v-if="!isLoginValid"
          class="container__notice container__valid-notice"
          >Введите корректный email или login.</span
        >
        <input
          v-model="login"
          @input="loginOnInput"
          class="container__input"
          type="text"
          placeholder="Введите email адрес или логин"
          :class="{
            'login--empty': isLoginEmpty,
            'invalid-login': !isLoginValid,
          }"
        />
      </div>
      <div class="container__input-body">
        <span class="container__input-title"
          >Пароль <span class="container__input-title--red">*</span></span
        >
        <span
          v-if="activePassNotice"
          class="container__notice container__valid-notice"
          >{{ activePassNotice }}</span
        >
        <div class="container__input-container">
          <input
            v-model="pass"
            @input="passOnInput"
            class="container__input"
            :type="isPasswordVisible ? 'text' : 'password'"
            placeholder="Введите пароль от аккаунта"
            :class="{
              'pass--empty': isPassEmpty,
              'invalid-pass': !isPassValid,
              'pass-1-length': !isPassLengthValid,
            }"
          />
          <button
            type="button"
            @click="togglePassword"
            class="container__toggle-password-btn"
          >
            <img v-if="isPasswordVisible" src="/imgs/opened-eye.png" alt="" />
            <img v-if="!isPasswordVisible" src="/imgs/closed-eye.png" alt="" />
          </button>
        </div>
      </div>
      <NuxtLink :to="'/PasswordRecovery'">
        <button type="button" class="container__recover-password-btn">
          <span class="container__recover-password-text">
            Восстановить пароль</span
          >
        </button>
      </NuxtLink>
      <UIButton
        type="submit"
        :content="'Войти в кабинет'"
        :width="'100%'"
      ></UIButton>
      <div class="container__checkbox-content">
        <input
          v-model="rememberMe"
          type="checkbox"
          class="container__checkbox"
          :id="'container__checkbox'"
        />
        <label class="container__checkbox-label" :for="'container__checkbox'"
          >Запомнить меня</label
        >
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
            позволяет получить доступ к статусу<br
              class="container__text-br--1200px"
            />
            и истории<br class="container__text-br--1440px" />
            вашего заказа. Просто заполните поля ниже, и вы получите учетную<br
              class="container__text-br--1440px"
            />
            запись.
          </p>
          <p class="container__text">
            Мы запрашиваем у вас только информацию,<br
              class="container__text-br--768px"
            />
            необходимую<br class="container__text-br--1200px" />
            для того,<br class="container__text-br--1440px" />
            чтобы сделать<br class="container__text-br--768px" />
            процесс покупки более быстрым и легким.
          </p>
        </div>
      </div>
      <UIButton
        type="button"
        class="container__signUp-btn"
        :link="'/SignUp'"
        :content="'Зарегистрироваться'"
        :bodyBgColor="'#ff6915'"
        :arrowBgColor="'#fb5a00'"
        :width="SignUpBtnWidth"
      ></UIButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "@/store/Auth";
import { useFavoritesStore } from "@/store/Favorites";
import { useCartStore } from "@/store/Cart";
import axios from "axios";

useHead({
  title: "Вход в Sneakers Store - Найдите идеальные кроссовки",
  meta: [
    {
      name: "description",
      content:
        "Войдите в свой аккаунт Sneakers Store, чтобы просмотреть последние релизы, управлять заказами и быть в курсе самых горячих новинок.",
    },
    {
      name: "keywords",
      content:
        "кроссовки, обувь, вход, аккаунт, sneakers store, обувь, уличная мода, кроссовки",
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
const SignUpBtnWidth = computed(() => {
  return windowWidth.value < 768 ? "100%" : "293px";
});

const isPasswordVisible = ref(false);
const togglePassword = () => {
  isPasswordVisible.value = !isPasswordVisible.value;
};

const login = ref("");
const pass = ref("");
const isLoginEmpty = ref(false);
const isPassEmpty = ref(false);
const isLoginValid = ref(true);
const isPassValid = ref(true);
const isPassLengthValid = ref(true);
const activePassNotice = ref<string | null>(null);
const isDataCorrect = ref(true);
const loginOnInput = () => {
  isLoginEmpty.value = login.value === "";
  isLoginValid.value = true;
  isDataCorrect.value = true;
};
const passOnInput = () => {
  isPassEmpty.value = pass.value === "";
  isPassValid.value = true;
  isDataCorrect.value = true;

  if (pass.value.length >= 8 && pass.value.length <= 20) {
    activePassNotice.value = "";
    isPassLengthValid.value = true;
  }
};

const validateLogin = () => {
  if (login.value === "") {
    isLoginEmpty.value = true;
    isLoginValid.value = true;
  } else {
    isLoginEmpty.value = false;
    const loginRegex =
      /^(?:[a-zA-Z0-9._%+-]{3,20}|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    isLoginValid.value = loginRegex.test(login.value);
  }
};
const validatePass = () => {
  const passRegex = /^[A-Za-zА-Яа-яёЁ\d_-]{8,20}$/;
  if (pass.value === "") {
    isPassEmpty.value = true;
    isPassValid.value = true;
  } else {
    isPassEmpty.value = false;
    isPassValid.value = passRegex.test(pass.value);
  }

  activePassNotice.value = null;
  if (isPassEmpty.value) {
    activePassNotice.value = "Важно заполнить это поле.";
  } else if (!(pass.value.length >= 8 && pass.value.length <= 20)) {
    activePassNotice.value = "Пароль должен содержать от 8 до 20 символов.";
  } else if (!passRegex.test(pass.value)) {
    activePassNotice.value = "Пароль не должен содержать специальных символов.";
  }
};

const authStore = useAuthStore();
const router = useRouter();
const favoritesStore = useFavoritesStore();
const cartStore = useCartStore();
const rememberMe = ref(false);
const logIn = async () => {
  validateLogin();
  validatePass();

  if (
    isLoginValid.value &&
    isPassValid.value &&
    login.value !== "" &&
    pass.value !== ""
  ) {
    try {
      const response = await axios.post("/api/auth/logIn", {
        login: login.value,
        password: pass.value,
      });

      if (response.data.success) {
        authStore.getAuthData(
          response.data.userId,
          response.data.fio,
          response.data.number,
          response.data.token,
          response.data.isAdmin,
          rememberMe.value
        );
        await favoritesStore.fetchFavorites(response.data.userId);
        await cartStore.fetchCart(response.data.userId);
        router.push("/catalog?page=1");
      } else {
        console.error("Login failed:", response.data.message);
        isDataCorrect.value = false;
      }
    } catch (error) {
      console.error("An error occurred during login:", error);
    }
  }
};
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
    cursor: pointer;
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
  &__text-br--768px,
  &__text-br--1200px,
  &__text-br--1440px {
    display: none;
  }
}
.invalid-login,
.login--empty,
.invalid-pass,
.pass--empty {
  border: 1px solid #f81d2a;
  color: #f81d2a;
}
.invalid-login::placeholder,
.login--empty::placeholder,
.invalid-pass::placeholder,
.pass--empty::placeholder {
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
    &__headline {
      flex-direction: row;
      align-items: center;
      gap: 1.813rem;
      margin: 0 auto;
    }
    &__icon {
      margin: 0;
    }
    &__texts {
      gap: 0.563rem;
    }
    &__signUp-btn {
      margin: 0 auto;
    }
    &__text-br--768px {
      display: block;
    }
  }
}
/* 1200px = 75em */
@media (min-width: 75em) {
  .title {
    margin-bottom: 3.313rem;
  }
  .container {
    align-items: center;
    gap: 15.688rem;
    padding: 2.5rem;

    &__content {
      align-items: stretch;
    }
    &__content::before {
      position: absolute;
      content: "";
      height: 100%;
      border: 1px solid #eaeaea;
      margin-left: -7.375rem;
    }
    &__body {
      gap: 2rem;
    }
    &__headline {
      margin-left: -4.25rem;
    }
    &__text {
      text-align: left;
    }
    &__text-br--768px {
      display: none;
    }
    &__text-br--1200px {
      display: block;
    }
    &__signUp-btn {
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
    &__text-br--1200px {
      display: none;
    }
    &__text-br--1440px {
      display: block;
    }
  }
}
</style>
