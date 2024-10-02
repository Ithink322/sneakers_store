<template>
  <nav class="dropdown">
    <button
      class="dropdown__button"
      :class="{ active: isDropdownOpen }"
      @click="toggleDropdown"
    >
      <span>{{ store.ruCategory }}</span>
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
        @click="selectCategory(option.value)"
        v-for="(option, index) in options"
        :key="index"
        class="dropdown__list-item"
        :class="{
          active: selectedValue === option.value,
        }"
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
</template>

<script setup lang="ts">
import type { BlogPost } from "@/types/BlogPosts";
import { usePostsStore } from "@/store/Posts";

const store = usePostsStore();

const countBlogPostsWithBannerText = (
  blogPosts: BlogPost[],
  category: string
): number => {
  return blogPosts.filter((post) => post.category === category).length;
};
const numOfAllPosts = computed(() => store.allPosts.length);
const numOfNews = computed(() =>
  countBlogPostsWithBannerText(store.allPosts, "НОВОСТИ")
);
const numOfArticles = computed(() =>
  countBlogPostsWithBannerText(store.allPosts, "СТАТЬИ")
);
const numOfAdvices = computed(() =>
  countBlogPostsWithBannerText(store.allPosts, "СОВЕТЫ")
);
const numOfOverviews = computed(() =>
  countBlogPostsWithBannerText(store.allPosts, "ОБЗОРЫ")
);

const options = [
  { value: "ВСЕ ПУБЛИКАЦИИ", counter: numOfAllPosts },
  { value: "НОВОСТИ", counter: numOfNews },
  { value: "СТАТЬИ", counter: numOfArticles },
  { value: "СОВЕТЫ", counter: numOfAdvices },
  { value: "ОБЗОРЫ", counter: numOfOverviews },
];

const isDropdownOpen = ref(false);

const toggleDropdown = () => {
  if (window.innerWidth >= 768) {
    return;
  }
  isDropdownOpen.value = !isDropdownOpen.value;
};

const selectedValue = ref("");
const router = useRouter();

const selectedCategory = ref("");
const selectCategory = async (value: string) => {
  if (selectedValue.value !== value) {
    if (value === "ВСЕ ПУБЛИКАЦИИ") {
      selectedCategory.value = "все-публикации";
    } else if (value === "НОВОСТИ") {
      selectedCategory.value = "новости";
    } else if (value === "СТАТЬИ") {
      selectedCategory.value = "статьи";
    } else if (value === "СОВЕТЫ") {
      selectedCategory.value = "советы";
    } else if (value === "ОБЗОРЫ") {
      selectedCategory.value = "обзоры";
    }
    selectedValue.value = value;
    store.setCategory(selectedCategory.value, selectedValue.value);
    await nextTick();
    await router.replace({
      path: `/blog/${selectedCategory.value}`,
      query: { page: 1 },
    });
    store.currentPage = 1;
    store.resetTranslateValue();
  }
  closeDropdown();
};
const closeDropdown = () => {
  isDropdownOpen.value = false;
};
onMounted(() => {
  selectedValue.value = store.ruCategory;
});
watch(
  () => store.ruCategory,
  (newValue) => {
    selectedValue.value = newValue;
  }
);
</script>

<style lang="scss" scoped>
@import "@/assets/App.scss";
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
  &__list-item:hover,
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
/* 768px = 48em */
@media (min-width: 48em) {
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
  .dropdown {
    margin-bottom: -0.938rem;
  }
}
/* 1440px = 90em */
@media (min-width: 90em) {
  .dropdown {
    margin-bottom: -1.25rem;
  }
}
</style>
