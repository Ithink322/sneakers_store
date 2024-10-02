<template>
  <NuxtLink
    class="link"
    :to="{
      path: `/blog/${routeCategory}/${slugify(props.post.title)}/${
        props.post.id
      }`,
    }"
  >
    <div class="post-card card">
      <img :src="post.hero" alt="" class="card__hero" />
      <div class="card__body">
        <div class="card__category category">
          <span class="category__text">{{ post.category }}</span>
        </div>
        <span class="card__title">{{ post.title }}</span>
        <div class="card__content">
          <button class="card__btn-more">Подробнее</button>
          <span class="card__date">{{ post.date }}</span>
        </div>
      </div>
      <div v-if="isAdmin" class="card__btns">
        <button @click.prevent="editPost()" class="card__btn">
          <svg
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.7344 1.92864C13.9532 1.70977 14.2131 1.53615 14.499 1.4177C14.785 1.29925 15.0915 1.23828 15.401 1.23828C15.7106 1.23828 16.0171 1.29925 16.303 1.4177C16.589 1.53615 16.8488 1.70977 17.0677 1.92864C17.2866 2.14751 17.4602 2.40734 17.5786 2.69331C17.6971 2.97928 17.7581 3.28577 17.7581 3.5953C17.7581 3.90483 17.6971 4.21133 17.5786 4.4973C17.4602 4.78326 17.2866 5.0431 17.0677 5.26197L5.81771 16.512L1.23438 17.762L2.48438 13.1786L13.7344 1.92864Z"
              stroke="white"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <button @click.prevent="removePost(post.id)" class="card__btn">
          <svg
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.76562 4.49984H3.43229M3.43229 4.49984H16.7656M3.43229 4.49984V16.1665C3.43229 16.6085 3.60789 17.0325 3.92045 17.345C4.23301 17.6576 4.65693 17.8332 5.09896 17.8332H13.4323C13.8743 17.8332 14.2982 17.6576 14.6108 17.345C14.9234 17.0325 15.099 16.6085 15.099 16.1665V4.49984H3.43229ZM5.93229 4.49984V2.83317C5.93229 2.39114 6.10789 1.96722 6.42045 1.65466C6.73301 1.3421 7.15693 1.1665 7.59896 1.1665H10.9323C11.3743 1.1665 11.7982 1.3421 12.1108 1.65466C12.4234 1.96722 12.599 2.39114 12.599 2.83317V4.49984M7.59896 8.6665V13.6665M10.9323 8.6665V13.6665"
              stroke="white"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { slugify } from "@/utils/helpers";
import { usePostsStore } from "@/store/Posts";
import type { BlogPost } from "@/types/BlogPosts";
const props = defineProps<{
  post: BlogPost;
}>();

const isAdmin = ref(localStorage.getItem("isAdmin") === "true");

const store = usePostsStore();
const routeCategory = computed(() => store.routeCategory);

const emit = defineEmits(["editPost"]);
const editPost = async () => {
  emit("editPost", props.post);
};

const router = useRouter();
const removePost = async (id: number) => {
  await store.removePost(id);
  const currentTotalPages = store.totalPages;

  if (store.currentPage > currentTotalPages && currentTotalPages > 0) {
    store.setPage(currentTotalPages);
    router.push(`/blog/${routeCategory.value}?page=${currentTotalPages}`);
  } else {
    router.push(`/blog/${routeCategory.value}?page=${store.currentPage}`);
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/App.scss";
.card {
  position: relative;
  min-height: 387px;
  max-height: 480px;
  height: auto;
  cursor: pointer;

  &__hero {
    width: 100%;
    min-height: 387px;
    max-height: 480px;
    object-fit: cover;
  }
  &__body {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 1.25rem 1.25rem 1.875rem 1.25rem;
  }
  &__title {
    display: block;
    position: relative;
    font-family: "Pragmatica Medium";
    font-size: 1.313rem;
    color: #fff;
    top: 4rem;
    transition: color 0.3s ease;
  }
  &:hover .card__title {
    color: $Dark-Orange;
  }
  &__content {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0rem 1.25rem 1.875rem 1.25rem;
  }
  &__btn-more {
    @include btn;
    font-family: "Pragmatica Medium";
    font-size: 0.938rem;
    color: #fff;
    line-height: 230%;
    border-bottom: 2px solid #ffffff;
  }
  &__date {
    display: block;
    font-family: "Pragmatica Book";
    font-size: 0.688rem;
    color: #fff;
  }
  &__btns {
    position: absolute;
    display: flex;
    gap: 0.625rem;
    top: 10rem;
    bottom: 0;
    left: 0;
    right: 0;
    align-items: center;
    justify-content: center;
  }
  &__btn {
    @include btn;
    width: 80px;
    height: 80px;
    background-color: $Light-Black;
    opacity: 90%;
  }
  &__btn svg {
    width: 25px;
    height: 25px;
  }
  &__btn svg path {
    transition: stroke 0.3s ease;
  }
  &__btn:hover svg path {
    stroke: $Dark-Orange;
  }
}
.category {
  position: absolute;
  padding: 0.625rem;
  background-color: #dbe5eb;
  width: fit-content;

  &__text {
    font-family: "Pragmatica Medium";
    font-size: 0.75rem;
  }
}
.link {
  color: $Dark-Black;
}
/* 1200px = 75em */
@media (min-width: 75em) {
  .card {
    min-height: 342px;
    height: 342px;

    &__hero {
      min-height: 342px;
      height: 342px;
    }
    &__btns {
      gap: 1rem;
      top: 7rem;
    }
  }
}
</style>
