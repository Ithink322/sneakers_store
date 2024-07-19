<template>
  <div class="single-container">
    <div>
      <div v-if="post">
        <h1 class="title">{{ post.title }}</h1>
        <div class="info">
          <div class="info__category">
            {{ post.category }}
          </div>
          <div class="info__circle"></div>
          <span class="info__date">{{ post.date }}</span>
        </div>
        <div class="body">
          <span class="body__intro">
            {{ post.intro }}
          </span>
          <img class="body__hero" :src="post.hero" alt="Hero image" />
          <div class="container">
            <div
              class="content"
              v-for="section in post.sections"
              :key="section.header"
            >
              <h2 class="content__title">{{ section.header }}</h2>
              <!-- <p v-for="paragraph in section.paragraphs" :key="paragraph">
        {{ paragraph }}
      </p> -->
              <p
                class="content__text"
                v-for="paragraph in section.paragraphs"
                :key="paragraph"
                v-html="paragraph"
              ></p>
            </div>
          </div>
        </div>
      </div>
      <div class="social-media">
        <div class="socials">
          <span class="socials__text">Поделиться:</span>
          <div class="socials__btns">
            <a href="https://www.instagram.com/nike/" target="_blank">
              <button class="socials__btn">
                <svg
                  class="socials__inst-icon"
                  width="20"
                  height="20"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.8">
                    <path
                      d="M16.9265 4.97643C16.8853 4.07395 16.7419 3.45764 16.5324 2.91843C16.3196 2.3527 15.9858 1.84027 15.5545 1.41671C15.1311 0.985395 14.6185 0.651494 14.0528 0.438552C13.5134 0.229104 12.8973 0.0858924 11.9948 0.0448825C11.0906 0.00348439 10.8018 -0.00634766 8.49926 -0.00634766C6.19677 -0.00634766 5.90789 0.00348439 5.00374 0.0446237C4.10126 0.0858924 3.48508 0.229233 2.94575 0.438811C2.38002 0.651623 1.8676 0.985395 1.44404 1.41671C1.01273 1.84014 0.678833 2.35257 0.465893 2.9183C0.256446 3.45764 0.113235 4.07395 0.0722258 4.9763C0.0308281 5.88059 0.0209961 6.16934 0.0209961 8.47185C0.0209961 10.7745 0.0308281 11.0634 0.0722258 11.9675C0.113365 12.8699 0.256705 13.4862 0.466281 14.0255C0.679091 14.5911 1.01286 15.1037 1.44417 15.5271C1.8676 15.9584 2.38015 16.2922 2.94588 16.505C3.48508 16.7147 4.10139 16.8579 5.00386 16.8992C5.90815 16.9405 6.1969 16.9502 8.49939 16.9502C10.8019 16.9502 11.0908 16.9405 11.9949 16.8992C12.8974 16.8579 13.5136 16.7147 14.0529 16.505C15.1917 16.0646 16.092 15.1644 16.5324 14.0255C16.7421 13.4862 16.8853 12.8699 16.9265 11.9675C16.9677 11.0632 16.9775 10.7745 16.9775 8.47198C16.9775 6.16934 16.9677 5.88059 16.9265 4.97643ZM15.4004 11.8981C15.3628 12.7247 15.2246 13.1736 15.1085 13.4724C14.8233 14.2118 14.2389 14.7962 13.4995 15.0814C13.2008 15.1975 12.7518 15.3357 11.9252 15.3733C11.0314 15.4142 10.7632 15.4227 8.49926 15.4227C6.23519 15.4227 5.96714 15.4142 5.07321 15.3733C4.24667 15.3357 3.79777 15.1975 3.49893 15.0814C3.13074 14.9455 2.79762 14.7288 2.52414 14.4471C2.2425 14.1737 2.02581 13.8407 1.88985 13.4724C1.7738 13.1736 1.63564 12.7247 1.59799 11.8981C1.55724 11.0041 1.54857 10.7359 1.54857 8.47211C1.54857 6.20815 1.55724 5.9401 1.59799 5.04603C1.63577 4.21936 1.7738 3.77045 1.88985 3.47174C2.02581 3.10342 2.24263 2.7703 2.52414 2.49681C2.79762 2.21518 3.13074 1.99848 3.49906 1.86265C3.79777 1.74647 4.24667 1.60844 5.07334 1.57066C5.96727 1.52991 6.23545 1.52124 8.49926 1.52124C10.7631 1.52124 11.0311 1.52991 11.9252 1.57079C12.7518 1.60844 13.2006 1.7466 13.4995 1.86265C13.8676 1.99861 14.2008 2.21531 14.4743 2.49681C14.7559 2.7703 14.9726 3.10342 15.1084 3.47174C15.2246 3.77045 15.3628 4.21936 15.4004 5.04603C15.4411 5.93997 15.4498 6.20815 15.4498 8.47198C15.4498 10.7359 15.4413 11.004 15.4004 11.8981Z"
                      fill="black"
                    />
                    <path
                      d="M8.49913 4.11819C6.0947 4.11819 4.14551 6.06753 4.14551 8.47198C4.14551 10.8764 6.0947 12.8256 8.49913 12.8256C10.9037 12.8256 12.8529 10.8764 12.8529 8.47198C12.8529 6.06753 10.9037 4.11819 8.49913 4.11819ZM8.49913 11.298C6.93844 11.2979 5.67309 10.0327 5.67322 8.47185C5.67322 6.91114 6.93843 5.64578 8.49926 5.64578C10.0601 5.64591 11.3253 6.91114 11.3253 8.47185C11.3253 10.0327 10.06 11.298 8.49913 11.298Z"
                      fill="black"
                    />
                    <path
                      d="M14.0423 3.94626C14.0423 4.50811 13.5868 4.96362 13.0249 4.96362C12.463 4.96362 12.0075 4.50811 12.0075 3.94626C12.0075 3.38428 12.463 2.92878 13.0249 2.92878C13.5868 2.92878 14.0423 3.38428 14.0423 3.94626Z"
                      fill="black"
                    />
                  </g>
                </svg>
              </button>
            </a>
            <a href="https://t.me/nike_sneakers_9" target="_blank">
              <button class="socials__btn">
                <svg
                  class="socials__telegram-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  width="20px"
                  height="20px"
                >
                  <path
                    d="M39.175,10.016c1.687,0,2.131,1.276,1.632,4.272c-0.571,3.426-2.216,14.769-3.528,21.83 c-0.502,2.702-1.407,3.867-2.724,3.867c-0.724,0-1.572-0.352-2.546-0.995c-1.32-0.872-7.984-5.279-9.431-6.314 c-1.32-0.943-3.141-2.078-0.857-4.312c0.813-0.796,6.14-5.883,10.29-9.842c0.443-0.423,0.072-1.068-0.42-1.068 c-0.112,0-0.231,0.034-0.347,0.111c-5.594,3.71-13.351,8.859-14.338,9.53c-0.987,0.67-1.949,1.1-3.231,1.1 c-0.655,0-1.394-0.112-2.263-0.362c-1.943-0.558-3.84-1.223-4.579-1.477c-2.845-0.976-2.17-2.241,0.593-3.457 c11.078-4.873,25.413-10.815,27.392-11.637C36.746,10.461,38.178,10.016,39.175,10.016 M39.175,7.016L39.175,7.016 c-1.368,0-3.015,0.441-5.506,1.474L33.37,8.614C22.735,13.03,13.092,17.128,6.218,20.152c-1.074,0.473-4.341,1.91-4.214,4.916 c0.054,1.297,0.768,3.065,3.856,4.124l0.228,0.078c0.862,0.297,2.657,0.916,4.497,1.445c1.12,0.322,2.132,0.478,3.091,0.478 c1.664,0,2.953-0.475,3.961-1.028c-0.005,0.168-0.001,0.337,0.012,0.507c0.182,2.312,1.97,3.58,3.038,4.338l0.149,0.106 c1.577,1.128,8.714,5.843,9.522,6.376c1.521,1.004,2.894,1.491,4.199,1.491c2.052,0,4.703-1.096,5.673-6.318 c0.921-4.953,1.985-11.872,2.762-16.924c0.331-2.156,0.603-3.924,0.776-4.961c0.349-2.094,0.509-4.466-0.948-6.185 C42.208,7.875,41.08,7.016,39.175,7.016L39.175,7.016z"
                    fill="black"
                    opacity="0.8"
                  />
                </svg>
              </button>
            </a>
            <a href="https://x.com/Nike" target="_blank">
              <button class="socials__btn">
                <svg
                  class="socials__twitter-icon"
                  width="20"
                  height="18"
                  viewBox="0 0 17 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.8"
                    d="M16.2653 2.04034C15.688 2.2943 15.0915 2.47011 14.4565 2.54825C15.1107 2.15755 15.6111 1.53243 15.842 0.770555C15.2262 1.14172 14.5527 1.39568 13.8407 1.55196C13.2634 0.926836 12.4359 0.536133 11.5315 0.536133C9.78031 0.536133 8.37554 1.98174 8.37554 3.7399C8.37554 3.99386 8.39478 4.22828 8.45251 4.4627C5.83541 4.34549 3.5262 3.05617 1.96748 1.12219C0.851362 3.15384 2.10218 4.83387 2.92965 5.40039C2.42932 5.40039 1.92899 5.24411 1.50564 5.00969C1.50564 6.59203 2.60251 7.90089 4.02653 8.19392C3.71863 8.29159 3.02587 8.3502 2.60251 8.25252C3.00663 9.52231 4.18047 10.46 5.54676 10.4795C4.46913 11.3391 2.89116 12.0228 0.870605 11.8079C2.27538 12.7261 3.93031 13.2535 5.71995 13.2535C11.5315 13.2535 14.6874 8.36973 14.6874 4.15014C14.6874 4.01339 14.6874 3.87665 14.6681 3.7399C15.3224 3.25152 15.8612 2.685 16.2653 2.04034Z"
                    fill="black"
                  />
                </svg>
              </button>
            </a>
          </div>
        </div>
        <span class="social-media__notice"
          >* Instagram является запрещенным в РФ</span
        >
      </div>
      <UIMailing class="mailing--from320px"></UIMailing>
    </div>
    <div class="sidebar sidebar--from1200px">
      <UIDropDown></UIDropDown>
      <UIMailing class="mailing--from1200px"></UIMailing>
    </div>
  </div>
</template>

<script setup lang="ts">
import { blogPosts } from "@/data/Blogposts";
import { slugify, unslugify } from "@/utils/helpers";

const route = useRoute();
const post = computed(() => {
  const title = unslugify(route.params.id);
  return blogPosts.find((post) => unslugify(slugify(post.title)) === title);
});

watch(post, (newPost) => {
  if (newPost) {
    useHead({
      title: `${newPost.title} - Блог о Nike`,
      meta: [
        {
          name: "description",
          content: newPost.intro,
        },
        {
          name: "keywords",
          content: `Nike, кроссовки, блог, ${newPost.category.toLowerCase()}`,
        },
        {
          property: "og:title",
          content: newPost.title,
        },
        {
          property: "og:description",
          content: newPost.intro,
        },
      ],
    });
  }
});
</script>

<style lang="scss" scoped>
@import "@/assets/App.scss";
h1,
h2,
p {
  margin: 0;
}
.title {
  font-family: "Pragmatica Medium";
  font-size: 1.563rem;
  margin-top: 0.938rem;
}
.info {
  display: flex;
  gap: 0.75rem;
  align-items: center;
  margin: 0.625rem 0 0.938rem 0;

  &__category {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #dbe5eb;
    padding: 1rem 0.625rem;
    height: 42px;
    font-family: "Pragmatica Medium";
    font-size: 0.75rem;
  }
  &__circle {
    border-radius: 50%;
    background-color: #dedede;
    width: 6px;
    height: 6px;
  }
  &__date {
    font-family: "Pragmatica Book";
    font-size: 0.813rem;
    color: #4f4f4f;
  }
}
.body {
  &__intro {
    font-family: "Pragmatica Book";
    font-size: 1rem;
    line-height: 29px;
    color: $Light-Black;
  }
  &__hero {
    width: 100%;
    margin: 1.375rem 0;
  }
}
.container {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}
.content {
  display: flex;
  flex-direction: column;
  gap: 1.375rem;

  &__title {
    font-family: "Pragmatica Medium";
    font-size: 1.375rem;
    color: #1d1d27;
    margin-bottom: -0.875rem;
  }
  &__text {
    font-family: "Pragmatica Book";
    font-size: 1rem;
    line-height: 29px;
    color: $Light-Black;
  }
  /* &__header {
    font-family: "Pragmatica Bold";
    color: $Light-Black;
  } */
}
.social-media {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: fit-content;
  margin: 3.5rem auto 1.875rem auto;

  &__notice {
    display: block;
    text-align: center;
    font-family: "Pragmatica Book";
    font-size: 0.75rem;
    color: #a0a0a0;
  }
}
.social-media::before {
  content: "";
  position: absolute;
  width: 100%;
  border: 1px solid #eaeaea;
  left: 0;
  margin-top: -1.625rem;
}
.socials {
  display: flex;
  gap: 1.125rem;
  align-items: center;

  &__text {
    font-family: "Pragmatica Book";
    font-size: 0.875rem;
  }
  &__btns {
    display: flex;
    gap: 0.688rem;
  }
  &__btn {
    @include btn;
    background-color: #f5f5f5;
    width: 46px;
    height: 46px;
  }
}
.sidebar--from1200px {
  display: none;
}

/* 768px = 48em */
@media (min-width: 48em) {
  .info {
    gap: 0.75rem;
    align-items: center;
    margin: 0.625rem 0 1.875rem 0;
  }
  .body {
    &__hero {
      margin: 1.875rem 0;
    }
  }
  .social-media {
    margin: 4.125rem auto 2.5rem auto;
  }
  .social-media::before {
    margin-top: -1.625rem;
  }
}
/* 1200px = 75em */
@media (min-width: 75em) {
  .single-container {
    display: flex;
    gap: 1.25rem;
  }
  .title {
    font-size: 2.813rem;
    margin-top: 1.563rem;
  }
  .info {
    gap: 0.75rem;
    align-items: center;
    margin: 0.938rem 0 1.875rem 0;
  }
  .body {
    &__intro {
      font-size: 1.125rem;
      line-height: 29px;
      color: $Light-Black;
    }
    &__hero {
      margin: 1.875rem 0 2.75rem 0;
    }
  }
  .container {
    gap: 1.25rem;
  }
  .content {
    &__title {
      font-size: 2.188rem;
      margin-bottom: 0rem;
    }
  }
  .social-media {
    margin: 5rem 0 2.5rem 0;
  }
  .social-media::before {
    margin-top: -1.875rem;
  }
  .mailing--from320px {
    display: none;
  }
  .sidebar--from1200px {
    display: flex;
  }
  .sidebar {
    position: sticky;
    top: 3rem;
    flex-direction: column;
    gap: 2.25rem;
    width: 325px;
    margin-top: 5rem;
    margin-bottom: 12rem;
    height: fit-content;
  }
  .mailing--from1200px {
    width: 325px;
  }
}
/* 1440px = 90em */
@media (min-width: 90em) {
}
/* 1920px = 120em */
@media (min-width: 120em) {
}
</style>
