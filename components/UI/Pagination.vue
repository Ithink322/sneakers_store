<template>
  <div class="pagination">
    <button class="pagination__prev-btn prev-btn" @click="prevPage">
      <svg
        class="prev-btn__arrow-icon"
        width="23"
        height="10"
        viewBox="0 0 23 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.54038 4.54038C0.286539 4.79422 0.286539 5.20578 0.54038 5.45962L4.67695 9.59619C4.9308 9.85003 5.34235 9.85003 5.59619 9.59619C5.85003 9.34235 5.85003 8.9308 5.59619 8.67696L1.91924 5L5.59619 1.32304C5.85003 1.0692 5.85003 0.657647 5.59619 0.403806C5.34235 0.149965 4.9308 0.149965 4.67695 0.403806L0.54038 4.54038ZM23 4.35L1 4.35V5.65L23 5.65V4.35Z"
          fill="black"
        />
      </svg>
      <span class="prev-btn__text prev-btn__text--visible-from768px">
        Назад
      </span>
    </button>
    <div class="container">
      <div
        ref="paginationWrapper"
        class="page-wrapper"
        :style="{ transform: `translateX(${translateValue}px)` }"
      >
        <button
          ref="buttons"
          class="page-wrapper__btn"
          v-for="pageNum in totalPages"
          :key="pageNum"
          :class="{ active: store?.currentPage === pageNum }"
          @click="changePage(pageNum)"
        >
          {{ pageNum }}
        </button>
      </div>
    </div>
    <button class="pagination__next-btn next-btn" @click="nextPage">
      <span class="next-btn__text next-btn__text--visible-from768px">
        Далее
      </span>
      <svg
        class="next-btn__arrow-icon"
        width="23"
        height="10"
        viewBox="0 0 23 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.4596 4.54038C22.7135 4.79422 22.7135 5.20578 22.4596 5.45962L18.323 9.59619C18.0692 9.85003 17.6576 9.85003 17.4038 9.59619C17.15 9.34235 17.15 8.9308 17.4038 8.67696L21.0808 5L17.4038 1.32304C17.15 1.0692 17.15 0.657647 17.4038 0.403806C17.6576 0.149965 18.0692 0.149965 18.323 0.403806L22.4596 4.54038ZM0 4.35L22 4.35V5.65L0 5.65L0 4.35Z"
          fill="black"
        />
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import { usePostsStore } from "@/store/Posts";
import { useProductsStore } from "@/store/Products";

const router = useRouter();
const route = useRoute();

type StoreType =
  | ReturnType<typeof usePostsStore>
  | ReturnType<typeof useProductsStore>;
let store = ref<StoreType | null>(null);

const setStore = () => {
  const normalizedPath = route.path.toLowerCase();
  if (normalizedPath.startsWith("/blog")) {
    store.value = usePostsStore();
  } else if (normalizedPath.startsWith("/catalog")) {
    store.value = useProductsStore();
  }
};
watch(
  () => route.path,
  () => {
    setStore();
  },
  { immediate: true }
);

const totalPages = computed(() => store.value?.totalPages ?? 10);

const prevPage = () => {
  if (store.value) {
    if (store.value.currentPage > 1) {
      store.value.setPage(store.value.currentPage - 1);
      router.replace({
        query: { ...route.query, page: store.value.currentPage },
      });
    } else {
      store.value.setPage(totalPages.value);
      router.replace({ query: { ...route.query, page: totalPages.value } });
    }
    updateTranslate();
    window.scrollTo(0, 0);
  }
};

const nextPage = () => {
  if (store.value) {
    if (store.value.currentPage < store.value.totalPages) {
      store.value.setPage(store.value.currentPage + 1);
      router.replace({
        query: { ...route.query, page: store.value.currentPage },
      });
    } else {
      store.value.setPage(1);
      router.replace({ query: { ...route.query, page: 1 } });
    }
    updateTranslate();
    window.scrollTo(0, 0);
  }
};

const changePage = (pageNum: number) => {
  if (store.value) {
    store.value.setPage(pageNum);
    router.replace({ query: { ...route.query, page: pageNum } });
    updateTranslate();
    window.scrollTo(0, 0);
  }
};

const paginationWrapper = ref<HTMLElement | null>(null);
const buttons = ref<HTMLElement[]>([]);
onMounted(() => {
  paginationWrapper.value = document.querySelector<HTMLElement>(".pagination")!;
  updateTranslate();
});

const translateValue = computed(() => store.value?.translateValue ?? 0);
const updateTranslate = async () => {
  await nextTick();

  if (store.value && paginationWrapper.value) {
    buttons.value = Array.from(
      paginationWrapper.value.querySelectorAll<HTMLElement>(
        ".page-wrapper__btn"
      )
    );

    const buttonWidth = buttons.value[0].offsetWidth;
    const gapValue = parseInt(
      window.getComputedStyle(paginationWrapper.value).getPropertyValue("gap")
    );

    if (store.value.currentPage > 1) {
      const newTranslateValue =
        -((store.value.currentPage - 1) * (buttonWidth + gapValue)) +
        buttonWidth +
        gapValue;
      store.value.updateTranslateValue(newTranslateValue);
    } else {
      store.value.updateTranslateValue(0);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/App.scss";
.pagination {
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.625rem;
  width: 264px;
  margin: 0 auto 2.5rem auto;

  &__prev-btn,
  &__next-btn {
    @include btn;
    flex-shrink: 0;
    width: 60px;
    height: 56px;
    z-index: 2;
  }
}
.prev-btn__text--visible-from768px,
.next-btn__text--visible-from768px {
  display: none;
}
.container {
  overflow-x: hidden;
}
.page-wrapper {
  display: flex;
  gap: 0.625rem;
  width: 124px;
  transition: transform 0.3s ease;

  &__btn {
    @include btn;
    flex-shrink: 0;
    width: 57px;
    height: 56px;
    border: 1px solid #dfdfdf;
    transition: background-color 0.3s ease;
  }
  &__btn:hover,
  &__btn.active {
    background-color: $Dark-Black;
    color: #fff;
    border: none;
  }
}
/* 360px = 22.5em */
@media (min-width: 22.5em) {
  .pagination {
    width: 331px;
  }
  .page-wrapper {
    width: 191px;
  }
}
/* 768px = 48em */
@media (min-width: 48em) {
  .pagination {
    width: 708px;
  }
  .page-wrapper {
    width: 464px;
  }
  .prev-btn,
  .next-btn {
    gap: 0.625rem;
    width: 112px;
  }
  .prev-btn__text,
  .next-btn__text {
    font-family: "Pragmatica Book";
    font-size: 0.875rem;
    color: $Dark-Black;
  }
  .prev-btn__text--visible-from768px,
  .next-btn__text--visible-from768px {
    display: block;
  }
  .prev-btn__arrow-icon,
  .next-btn__arrow-icon {
    flex-shrink: 0;
  }
}
</style>
