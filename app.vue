<template>
  <div id="app">
    <UIHeader></UIHeader>
    <div class="page-container">
      <NuxtPage></NuxtPage>
    </div>
    <UIFooter></UIFooter>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "@/store/Auth";
import { usePostsStore } from "@/store/Posts";
import { useProductsStore } from "@/store/Products";

const authStore = useAuthStore();
const blogStore = usePostsStore();
const catalogStore = useProductsStore();
onMounted(async () => {
  authStore.initializeAuth();
  await blogStore.fetchPosts();
  await catalogStore.fetchProducts();
});
</script>

<style lang="scss">
html {
  box-sizing: border-box;
}
*,
*::after,
*::before {
  box-sizing: inherit;
  /* outline: solid 1px red; */
}
body {
  min-width: 20em;
  background-color: #fff;
  margin: 0rem auto;
}
a {
  text-decoration: none;
  color: #000000;
}
h1 {
  font-family: "Pragmatica Medium";
  font-size: 1.563rem;
  line-height: 31px;
  margin: 0;
}
.page-container {
  padding: 0rem 0.938rem;
}
/* 768px = 48em */
@media (min-width: 48em) {
  .page-container {
    padding: 0rem calc((100vw - 44.874rem) / 2);
  }
}
/* 1024px = 64em */
@media (min-width: 64em) {
  .page-container {
    padding: 0rem calc((100vw - 44.75rem) / 2);
  }
}
/* 1200px = 75em */
@media (min-width: 75em) {
  h1 {
    font-family: "Pragmatica Medium";
    font-size: 2.813rem;
  }
  .page-container {
    padding: 0rem calc((100vw - 71.875rem) / 2);
  }
}
/* 1440px = 90em */
@media (min-width: 90em) {
  .page-container {
    padding: 0rem calc((100vw - 85rem) / 2);
  }
}
</style>
