<template>
  <NuxtLink class="my-account-btn-link" :to="'/login'">
    <button class="my-account-btn">
      <img src="/imgs/my-account-icon.svg" alt="" />
      Вход \ Регистрация
    </button>
  </NuxtLink>
</template>

<style lang="scss" scoped>
@import "@/assets/App.scss";
.my-account-btn-link {
  display: flex;
  align-items: center;
}
.my-account-btn {
  @include btn;
  gap: 0.438rem;
  font-family: "Pragmatica Book";
}
</style>
