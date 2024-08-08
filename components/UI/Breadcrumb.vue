<template>
  <div class="breadcrumb">
    <span class="breadcrumb__home-title"
      ><NuxtLink to="/">Sneakers Store</NuxtLink></span
    >
    <img class="breadcrumb__arrow" src="/imgs/gray-arrow.svg" alt="" />
    <span class="breadcrumb__main-title">{{ breadcrumbTitle }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps({
  breadcrumbTitle: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.breadcrumb {
  display: flex;
  align-items: center;
  gap: 0.563rem;
  padding: 1.25rem 0rem;

  span {
    font-family: "Pragmatica Book";
    font-size: 0.75rem;
  }
  &__home-title {
    white-space: nowrap;
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
  .breadcrumb {
    gap: 0.938rem;

    span {
      font-size: 0.875rem;
    }
  }
}
</style>
