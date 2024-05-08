<template>
  <button class="signUp-or-signIn-or-my-account-btn">
    <img src="/imgs/my-account-icon.svg" alt="" />
    Вход \ Регистрация
  </button>
</template>

<style lang="scss" scoped>
@import "@/assets/App.scss";
.signUp-or-signIn-or-my-account-btn {
  @include btn;
  gap: 0.438rem;
  font-family: "Pragmatica Book";
}
</style>
