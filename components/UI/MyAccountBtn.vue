<template>
  <NuxtLink
    class="my-account-btn-link"
    :to="isUserLoggedIn ? '/PrivateCabinet' : '/Login'"
  >
    <button class="my-account-btn">
      <img src="/imgs/my-account-icon.svg" alt="" />
      <span :class="{ wrap: isUserLoggedIn }">{{
        isUserLoggedIn ? fio : "Вход \\ Регистрация"
      }}</span>
    </button>
  </NuxtLink>
</template>

<script setup lang="ts">
import { useAuthStore } from "@/store/Auth";

const authStore = useAuthStore();
const fio = computed(() => authStore.fio);
const isUserLoggedIn = computed(() => authStore.isLoggedIn);
</script>

<style lang="scss" scoped>
@import "@/assets/App.scss";
.my-account-btn-link {
  display: flex;
  align-items: center;
}
.my-account-btn {
  @include btn;
  gap: 0.438rem;
}
.my-account-btn span {
  font-family: "Pragmatica Book";
  font-size: 0.813rem;
  text-align: left;
  width: 128px;
  white-space: nowrap;
}
.my-account-btn span.wrap {
  overflow-wrap: break-word;
}
/* 1200px = 75em */
@media (min-width: 75em) {
  .my-account-btn span {
    font-size: 0.875rem;
    width: fit-content;
  }
}
</style>
