<template>
  <UIBreadcrumb :breadcrumbTitle="'Восстановление пароля'"></UIBreadcrumb>
  <h1 class="title">Восстановление пароля</h1>
  <div v-if="isFormVisible" class="container">
    <form @submit.prevent="resetPassword" class="container__form">
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
      <UIButton
        type="submit"
        :content="'Сбросить пароль'"
        :width="'100%'"
      ></UIButton>
    </form>
  </div>
  <UIMessage
    v-if="isMessageVisible"
    :text="'Ссылка для сброса пароля и дальнейших инструкций отправлена вам на почту. Перейдите по ссылке и следуйте дальнейшим инструкциям.'"
    :bgColor="'#fff'"
    :border="'1px solid #EAEAEA'"
    :width="messageWidth"
    :fill="'#fff'"
  ></UIMessage>
</template>

<script setup lang="ts">
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

const login = ref("");
const isLoginEmpty = ref(false);
const isLoginValid = ref(true);
const loginOnInput = () => {
  isLoginEmpty.value = login.value === "";
  isLoginValid.value = true;
};

const isFormVisible = ref(true);
const isMessageVisible = ref(false);
const resetPassword = () => {
  if (login.value === "") {
    isLoginEmpty.value = true;
    isLoginValid.value = true;
  } else {
    isLoginEmpty.value = false;
    const loginRegex =
      /^(?:[a-zA-Z0-9._%+-]{3,20}|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    isLoginValid.value = loginRegex.test(login.value);
  }

  if (isLoginEmpty && isLoginValid) {
    isFormVisible.value = false;
    isMessageVisible.value = true;
  }
};

const windowWidth = ref(0);
const updateWidth = () => {
  windowWidth.value = window.innerWidth;
};
const messageWidth = computed(() => {
  updateWidth();
  return windowWidth.value < 1200 ? "100%" : "544px";
});
onMounted(() => {
  window.addEventListener("resize", updateWidth);
});
onBeforeUnmount(() => {
  window.removeEventListener("resize", updateWidth);
});
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
  &__notice {
    font-family: "Pragmatica Book";
    line-height: 0.938rem;
    color: #f81d2a;
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
}
.invalid-login,
.login--empty {
  border: 1px solid #f81d2a;
  color: #f81d2a;
}
.invalid-login::placeholder,
.login--empty::placeholder {
  color: #f81d2a;
}
.message {
  flex-direction: column;
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
