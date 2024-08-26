<template>
  <UIBreadcrumb :breadcrumbTitle="'Избранные товары'"></UIBreadcrumb>
  <div class="titles-container">
    <h1 class="titles-container__title">Избранное</h1>
    <span v-if="totalProducts > 0" class="titles-container__text"
      >{{ totalProducts }} {{ conjugateTovar(totalProducts) }}</span
    >
  </div>
  <div v-if="totalProducts > 0" class="products-list">
    <UIProductCard
      v-for="product in paginatedProducts"
      :key="product.productId"
      :product="product"
    />
  </div>
  <UIPagination v-if="totalProducts > 18"></UIPagination>
  <UIEmpty
    v-if="totalProducts === 0"
    :hero="'/imgs/empty-favorites-icon.jpg'"
    :title="'Ваш список желаний пуст'"
    :text="`У вас пока нет товаров в списке желаний.<br/> На странице <strong>&quot;Каталог&quot;</strong> вы найдете много интересных товаров.`"
    :iconWidth="'98px'"
  ></UIEmpty>
</template>

<script setup lang="ts">
import { useFavoritesStore } from "@/store/Favorites";
import { conjugateTovar } from "@/utils/helpers";

const favoritesStore = useFavoritesStore();
const paginatedProducts = computed(() => favoritesStore.paginatedProducts);

onMounted(async () => {
  await favoritesStore.fetchFavorites(
    localStorage.getItem("userId")! as string
  );
});

const totalProducts = computed(() => favoritesStore.favorites.length);
conjugateTovar(totalProducts.value);

const route = useRoute();
watch(
  () => route.query.page,
  (newPage) => favoritesStore.setPage(Number(newPage) || 1),
  { immediate: true }
);
const router = useRouter();
if (totalProducts.value < 19) {
  favoritesStore.setPage(1);
  favoritesStore.currentPage = 1;
  router.replace({
    path: "/favorites",
    query: { page: 1 },
  });
}
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
