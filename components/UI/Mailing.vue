<template>
  <form @submit.prevent="submitForm" class="mailing">
    <div class="mailing__content-flex">
      <span class="mailing__title">Подпишитесь на рассылку</span>
      <span class="mailing__text"
        >Регулярные скидки и спецпредложения, а так же новости компании.</span
      >
    </div>
    <div class="mailing__wrapper-flex">
      <input
        v-model="email"
        :disabled="isEmailLocked"
        @input="handleInput"
        placeholder="Ваш Email"
        type="text"
        class="mailing__input"
        :class="{
          'invalid-email': !isValidEmail,
          'success-message': isEmailLocked,
        }"
      />
      <svg
        v-if="isEmailLocked"
        class="mailing__input-arrow"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="11"
        viewBox="0 0 16 11"
        fill="none"
      >
        <path
          d="M1 5.5L5.66667 10L15 1"
          stroke="#1B9665"
          stroke-width="1.3"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
      <span v-if="!isValidEmail" class="mailing__invalid-email-message"
        >Введите корректный email адрес</span
      >
      <span v-if="emailIsVisible" class="mailing__empty-message"
        >Введите email адрес</span
      >
      <button ref="followBtn" class="mailing__follow-btn">Подписаться</button>
      <span class="mailing__privacy-policy-text"
        >Согласен с
        <span class="mailing__privacy-policy-link"
          ><NuxtLink to="/PrivacyPolicy"
            >политикой конфиденциальности</NuxtLink
          ></span
        ></span
      >
    </div>
  </form>
</template>

<script setup lang="ts">
const email = ref("");
const isValidEmail = ref(true);
const emailIsVisible = ref(false);
const followBtn = ref<HTMLButtonElement | null>(null);
const isEmailLocked = ref(false);

const handleInput = () => {
  emailIsVisible.value = email.value ? false : true;
  isValidEmail.value = true;
};

const submitForm = () => {
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;

  if (email.value) {
    isValidEmail.value = emailRegex.test(email.value);
  } else {
    isValidEmail.value = false;
  }

  if (isValidEmail.value && email.value) {
    emailIsVisible.value = false;
    followBtn.value!.textContent = "Вы подписались!";
    isEmailLocked.value = true;
  } else if (email.value === "") {
    isValidEmail.value = true;
    emailIsVisible.value = true;
  } else {
    emailIsVisible.value = false;
    isValidEmail.value = false;
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/App.scss";
.mailing {
  position: relative;
  padding: 1.563rem;
  background-color: #f8f8f8;

  &__content-flex {
    display: flex;
    flex-direction: column;
    gap: 0.813rem;
  }
  &__title {
    display: block;
    text-align: center;
    font-family: "Pragmatica Book";
    font-size: 1.5rem;
    color: $Dark-Black;
  }
  &__text {
    display: block;
    text-align: center;
    font-family: "Pragmatica Book";
    font-size: 0.938rem;
    color: #393939;
  }
  &__wrapper-flex {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-top: 0.813rem;
  }
  &__input {
    @include input;
    outline: none;
    padding: 0.625rem;
    font-family: "Pragmatica Book";
    font-size: 1rem;
    color: #2b2b2b;
    border-bottom: 1px solid $Light-Black;
  }
  &__input::placeholder {
    font-family: "Pragmatica Book";
    font-size: 1rem;
    color: #2b2b2b;
  }
  &__input-arrow {
    position: absolute;
    width: 16px;
    height: 19px;
    margin-top: 0.6rem;
    right: 1.563rem;
    z-index: 2;
  }
  &__invalid-email-message,
  &__empty-message {
    display: block;
    font-family: "Pragmatica Book";
    font-size: 1rem;
    color: #f81d2a;
    margin-top: -0.75rem;
  }
  &__follow-btn {
    @include btn;
    width: 100%;
    background-color: $Light-Black;
    padding: 1.438rem 0;
    font-family: "Pragmatica Medium";
    font-size: 1rem;
    color: #fff;
  }
  &__privacy-policy-text {
    display: block;
    text-align: center;
    font-family: "Pragmatica Book";
    font-size: 0.813rem;
    color: #6b6e72;
  }
  &__privacy-policy-link {
    text-decoration: underline;
    color: #6b6e72;

    a {
      color: #6b6e72;
    }
  }
}
.invalid-email {
  color: #f81d2a;
  border-bottom: 1px solid #f81d2a;
}
.invalid-email::placeholder {
  color: #f81d2a;
}
.success-message {
  color: #07961e;
  border-bottom: 1px solid #07961e;
}
/* 1200px = 75em */
@media (min-width: 75em) {
  .mailing {
    width: 440px;
    flex-shrink: 0;
    padding: 1.875rem 1.563rem;
    height: fit-content;

    &__title {
      font-size: 1.313rem;
    }
  }
}
/* 1440px = 90em */
@media (min-width: 90em) {
  .mailing {
    &__title {
      font-size: 1.5rem;
    }
  }
}
</style>
