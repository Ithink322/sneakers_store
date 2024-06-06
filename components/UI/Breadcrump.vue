<template>
  <div class="breadcrump">
    <span class="breadcrump__home-title"
      ><NuxtLink to="/">Swoosh Store</NuxtLink></span
    >
    <img class="breadcrump__arrow" src="/imgs/gray-arrow.svg" alt="" />
    <span class="breadcrump__main-title">{{ breadcrumpTitle }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps({
  breadcrumpTitle: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.breadcrump {
  display: flex;
  gap: 0.563rem;
  padding: 1.25rem 0rem;

  span {
    font-family: "Pragmatica Book";
    font-size: 0.75rem;
    white-space: nowrap;
  }
  &__home-title {
    a {
      text-decoration: none;
      color: #868686;
    }
  }
  &__main-title {
    color: #434343;
  }
}
/* 1200px = 75em */
@media (min-width: 75em) {
  .breadcrump {
    gap: 0.938rem;

    span {
      font-size: 0.875rem;
    }
  }
}
</style>
