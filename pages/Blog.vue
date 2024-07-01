<template>
  <UIBreadcrumb :breadcrumbTitle="breadcrumbTitle"></UIBreadcrumb>
  <main>
    <h1 class="title">Блог</h1>
    <div class="posts-list">
      <nav class="dropdown">
        <button
          class="dropdown__button"
          :class="{ active: isDropdownOpen }"
          @click="toggleDropdown"
        >
          <span>{{ selectedValue }}</span>
          <svg
            class="dropdown__button-icon"
            width="8"
            height="5"
            viewBox="0 0 8 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.64645 4.35355C3.84171 4.54882 4.15829 4.54882 4.35355 4.35355L7.53553 1.17157C7.7308 0.976311 7.7308 0.659728 7.53553 0.464466C7.34027 0.269204 7.02369 0.269204 6.82843 0.464466L4 3.29289L1.17157 0.464466C0.976311 0.269204 0.659728 0.269204 0.464466 0.464466C0.269204 0.659728 0.269204 0.976311 0.464466 1.17157L3.64645 4.35355ZM3.5 3L3.5 4L4.5 4L4.5 3L3.5 3Z"
              fill="black"
            />
          </svg>
        </button>
        <ul class="dropdown__list" :class="{ active: isDropdownOpen }">
          <li
            v-for="(option, index) in options"
            :key="index"
            class="dropdown__list-item"
            :class="{
              active: selectedValue === option.value,
            }"
            @click="selectOption(option.value)"
          >
            <span>{{ option.value }}</span>
            <div class="dropdown__counter-border">
              <span class="dropdown__counter-text">
                {{ option.counter }}
              </span>
            </div>
          </li>
        </ul>
      </nav>
      <UIMailing class="mailing mailing--visible-from1200px"></UIMailing>
      <NuxtPage></NuxtPage>
    </div>
    <UIPagination></UIPagination>
    <UIMailing class="mailing mailing--visible-till1200px"></UIMailing>
  </main>
</template>

<script setup lang="ts">
import { blogPosts } from "@/data/Blogposts";
import type { BlogPost } from "@/types/BlogPosts";
import { usePostsStore } from "@/store/Posts";

const numOfAllPosts = ref(0);
const numOfNews = ref(0);
const numOfArtices = ref(0);
const numOfAdvices = ref(0);
const numOfOverviews = ref(0);

numOfAllPosts.value = blogPosts.length;
const countBlogPostsWithBannerText = (
  blogPosts: BlogPost[],
  bannerText: string
): number => {
  return blogPosts.filter((post) => post.bannerText === bannerText).length;
};

numOfNews.value = countBlogPostsWithBannerText(blogPosts, "НОВОСТИ");
numOfArtices.value = countBlogPostsWithBannerText(blogPosts, "СТАТЬИ");
numOfAdvices.value = countBlogPostsWithBannerText(blogPosts, "СОВЕТЫ");
numOfOverviews.value = countBlogPostsWithBannerText(blogPosts, "ОБЗОРЫ");

const breadcrumbTitle = ref("Блог");
/* const updateBreadcrumbTitle = (title: string) => {
  const capitalizedTitle =
    title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
  breadcrumbTitle.value = capitalizedTitle;
}; */

const options = [
  { value: "ВСЕ ПУБЛИКАЦИИ", counter: numOfAllPosts },
  { value: "НОВОСТИ", counter: numOfNews },
  { value: "СТАТЬИ", counter: numOfArtices },
  { value: "СОВЕТЫ", counter: numOfAdvices },
  { value: "ОБЗОРЫ", counter: numOfOverviews },
];

const selectedValue = ref("Рубрики");
const isDropdownOpen = ref(false);

onBeforeMount(() => {
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeDropdown();
    }
  });
});
const toggleDropdown = () => {
  if (window.innerWidth >= 768) {
    return;
  }
  isDropdownOpen.value = !isDropdownOpen.value;
};

const router = useRouter();

const selectedCategory = ref("");
const selectOption = (value: string) => {
  if (value === "ВСЕ ПУБЛИКАЦИИ") {
    /* emit("updateBreadcrumbTitle", "Блог"); */
    selectedCategory.value = "all-posts";
  } else if (value === "НОВОСТИ") {
    selectedCategory.value = "news";
  } else if (value === "СТАТЬИ") {
    selectedCategory.value = "articles";
  } else if (value === "СОВЕТЫ") {
    selectedCategory.value = "advices";
  } else if (value === "ОБЗОРЫ") {
    selectedCategory.value = "overviews";
  }
  selectedValue.value = value;
  store.setEnCategory(selectedCategory.value);
  store.setRuCategory(selectedValue.value);
  router.push(`/blog/${selectedCategory.value}`);
  closeDropdown();
};
const closeDropdown = () => {
  isDropdownOpen.value = false;
};

const store = usePostsStore();
store.setAllPosts(blogPosts);
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
.dropdown {
  grid-area: dropdown;
  margin-bottom: 0.313rem;

  &__button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background: #ffffff;
    border: 1px solid #ececec;
    height: 67px;
    padding: 1.25rem 1.563rem;
    cursor: pointer;
    font-family: "Pragmatica Medium";
    font-size: 1.188rem;
    color: #1d1d27;
  }
  &__button.active {
    border-bottom: none;
  }
  &__button.active .dropdown__button-icon {
    transform: rotate(180deg);
  }
  &__button img {
    pointer-events: none;
  }
  &__button:focus,
  &__button--active {
    outline: none;
  }
  &__list {
    display: flex;
    flex-direction: column;
    border: 1px solid #ececec;
    border-top: none;
    background: #fff;
    margin-top: -0.625rem;
    margin-bottom: 0rem;
    padding: 0rem 1.563rem 1.25rem 1.563rem;
    list-style-type: none;
  }
  &__list {
    display: none;
  }
  &__list.active {
    display: flex;
  }
  &__list-item {
    display: flex;
    justify-content: space-between;
    padding: 0.875rem 0;
    border-bottom: 1px solid #f4f4f4;
    cursor: pointer;
    font-family: "Pragmatica Medium";
    font-size: 0.813rem;
    color: #232323;
  }
  &__list-item.active {
    font-family: "Pragmatica Bold";
    color: $Dark-Black;
  }
  &__list-item:last-child {
    border-bottom: none;
  }
  &__counter-border {
    border: 1px solid #f3f3f3;
    border-radius: 50%;
  }
  &__counter-text {
    display: inline-block;
    padding: 0.375rem 0.513rem;
    font-family: "Pragmatica Medium";
    font-size: 0.688rem;
    color: #686868;
  }
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
  .dropdown {
    &__button-icon {
      display: none;
    }
    &__list {
      display: block;
    }
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
      "post-1 post-2 dropdown"
      "post-3 post-4 mailing"
      "post-5 post-6 ..."
      "post-7 post-8 ..."
      "post-9 post-10 ...";
    row-gap: 0.938rem;
    margin-bottom: 5.625rem;
  }
  .dropdown {
    margin-bottom: -0.938rem;
  }
  .mailing {
    display: block;
    grid-area: mailing;
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
  .dropdown {
    margin-bottom: -1.25rem;
  }
  .mailing {
    width: 355px;
    margin-top: 1.25rem;
    margin-bottom: calc(1.25rem - 100%);
  }
}
</style>
