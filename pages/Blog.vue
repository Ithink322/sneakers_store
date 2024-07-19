<template>
  <UIBreadcrumb :breadcrumbTitle="title"></UIBreadcrumb>
  <main>
    <h1 v-if="isBlogListVisible" class="title">
      {{ title }}
    </h1>
    <div v-if="isBlogListVisible" class="posts-list">
      <div class="sidebar">
        <UIDropDown></UIDropDown>
        <UIMailing class="mailing mailing--visible-from1200px"></UIMailing>
      </div>
      <NuxtPage></NuxtPage>
    </div>
    <UIPagination v-if="isBlogListVisible"></UIPagination>
    <UIMailing
      v-if="isBlogListVisible"
      class="mailing mailing--visible-till1200px"
    ></UIMailing>
    <NuxtPage v-if="!isBlogListVisible"></NuxtPage>
  </main>
</template>

<script setup lang="ts">
import { blogPosts } from "@/data/Blogposts";
import { usePostsStore } from "@/store/Posts";

useHead({
  title: "Блог о Nike - Sneakers Store | Новости, статьи, советы и обзоры",
  meta: [
    {
      name: "description",
      content:
        "Наш блог - это кладезь информации о Nike. Обзоры новинок, советы по выбору и уходу за кроссовками Nike, статьи, а также актуальные новости. Подписывайтесь, чтобы быть в курсе!",
    },
    {
      name: "keywords",
      content:
        "блог, Nike, Sneakers Store, новости, статьи, советы, обзоры, выбор кроссовок Nike, уход за кроссовками Nike",
    },
  ],
});

const title = computed(() => store.getTitle);

const route = useRoute();
const isBlogListVisible = computed(() => !route.params.id);

const store = usePostsStore();
let selectedCategory = ref("");

store.setAllPosts(blogPosts);

const pageNum = parseInt(route.query.page);
const totalPages = computed(() => store.totalPages);

/* definePageMeta({
  middleware: ["validate-blog"],
}); */

const categoryMapping: { [key: string]: string } = {
  "all-posts": "ВСЕ ПУБЛИКАЦИИ",
  news: "НОВОСТИ",
  articles: "СТАТЬИ",
  advices: "СОВЕТЫ",
  overviews: "ОБЗОРЫ",
};

const updateCategory = () => {
  const category = route.params.category;
  const selectedValue =
    categoryMapping[category as keyof typeof categoryMapping];

  if (selectedValue) {
    selectedCategory.value = category;
    store.ruCategory = selectedValue;
    store.setCategory(selectedCategory.value, selectedValue);
    store.filterPosts(store.ruCategory);
  }
};

const checkPageValidity = () => {
  if (pageNum <= totalPages.value) {
    store.currentPage = pageNum;
  }
};

onMounted(() => {
  updateCategory();
  checkPageValidity();
});

watch(
  () => route.params.category,
  (newCategory, oldCategory) => {
    if (newCategory !== oldCategory) {
      updateCategory();
      checkPageValidity();
    }
  }
);
</script>

<style lang="scss" scoped>
@import "@/assets/App.scss";
.title {
  font-family: "Pragmatica Medium";
  font-size: 1.563rem;
  color: $Dark-Black;
  margin-top: 0.938rem;
  margin-bottom: 1.25rem;
}
.posts-list {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    "dropdown"
    "post-1"
    "post-2"
    "post-3"
    "post-4"
    "post-5"
    "post-6"
    "post-7"
    "post-8"
    "post-9"
    "post-10";
  gap: 0.938rem;
  margin-top: 1.25rem;
  margin-bottom: 3.75rem;
}
.mailing--visible-from1200px {
  display: none;
}
/* 768px = 48em */
@media (min-width: 48em) {
  .title {
    margin-bottom: 0;
  }
  .posts-list {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, auto);
    grid-template-areas:
      "post-1 dropdown"
      "post-2 post-3"
      "post-4 post-5"
      "post-6 post-7"
      "post-8 post-9"
      "post-10 ...";
    margin-bottom: 3.125rem;
  }
}
/* 1200px = 75em */
@media (min-width: 75em) {
  .title {
    font-size: 2.813rem;
  }
  .posts-list {
    grid-template-columns: 1fr 1fr 325px;
    grid-template-rows: auto;
    grid-template-areas:
      "post-1 post-2 sidebar"
      "post-3 post-4 sidebar"
      "post-5 post-6 sidebar"
      "post-7 post-8 sidebar"
      "post-9 post-10 sidebar";
    row-gap: 0.938rem;
    margin-bottom: 5.625rem;
  }
  .sidebar {
    grid-area: sidebar;
    position: sticky;
    top: 3rem;
    margin-bottom: 19.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.938rem;
    height: fit-content;
  }
  .mailing {
    display: block;
    width: 325px;
    margin-top: 0.938rem;
    margin-bottom: calc(0.938rem - 100%);
  }
  .mailing--visible-till1200px {
    display: none;
  }
}
/* 1440px = 90em */
@media (min-width: 90em) {
  .posts-list {
    grid-template-columns: 1fr 1fr 355px;
    gap: 1.25rem;
  }
  .sidebar {
    margin-bottom: 21rem;
  }
  .mailing {
    width: 355px;
    margin-top: 1.25rem;
    margin-bottom: calc(1.25rem - 100%);
  }
}
</style>
