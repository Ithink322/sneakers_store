<template>
  <UIBreadcrumb :breadcrumbTitle="'Избранные товары'"></UIBreadcrumb>
  <div class="titles-container">
    <h1 class="titles-container__title">Избранное</h1>
    <span class="titles-container__text"
      >{{ totalProducts }} {{ conjugateTovar(totalProducts) }}</span
    >
  </div>
  <div class="products-list">
    <UIProductCard
      v-for="product in paginatedProducts"
      :key="product.id"
      :product="product"
    />
  </div>
  <UIPagination if="paginatedProducts.length > 18"></UIPagination>
</template>

<script setup lang="ts">
import { useFavoritesStore } from "@/store/Favorites";

const favoritesStore = useFavoritesStore();
const paginatedProducts = computed(() => favoritesStore.paginatedProducts);

const totalProducts = ref(favoritesStore.favorites.length);

const conjugateTovar = (count: number): string => {
  const lastDigit = count % 10;
  const lastTwoDigits = count % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
    return "товаров";
  }

  if (lastDigit === 1) {
    return "товар";
  } else if (lastDigit >= 2 && lastDigit <= 4) {
    return "товара";
  } else {
    return "товаров";
  }
};

const router = useRouter();
onMounted(() => {
  favoritesStore.currentPage = 1;
  router.replace({
    path: "/Favorites",
    query: { page: 1 },
  });
});
</script>

<style lang="scss" scoped>
.products-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.938rem;
  margin-bottom: 3.75rem;
}
.titles-container {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  margin: 0.938rem 0;

  &__text {
    font-family: "Pragmatica Book";
    font-size: 0.813rem;
    color: #a3a3a3;
  }
}
/* 768px = 48em */
@media (min-width: 48em) {
  .titles-container {
    margin-bottom: 1.25rem;
  }
  .products-list {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.25rem;
  }
}
/* 1200px = 75em */
@media (min-width: 75em) {
  .titles-container {
    margin: 1.563rem 0 3.125rem 0;
    gap: 0.813rem;

    &__text {
      font-size: 0.938rem;
    }
  }
  .products-list {
    margin-bottom: 4.375rem;
  }
}
</style>
