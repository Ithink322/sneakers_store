<template>
  <NuxtLink :to="link">
    <button class="more-btn" :style="{ backgroundColor: bodyBgColor }">
      <div class="more-btn__content">
        <span class="more-btn__text">{{ content }}</span>
      </div>
      <div class="more-btn__arrow" :style="{ backgroundColor: arrowBgColor }">
        <img src="/imgs/white-right-arrow.svg" alt="" />
      </div>
    </button>
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps<{
  link?: string;
  bodyBgColor?: string;
  arrowBgColor?: string;
  content?: string;
}>();

const defaultBtnBgColor = "#1e1e1e";
const defaultArrowBgColor = "#000000";
const defaultContent = "Подробнее";

const bodyBgColor = props.bodyBgColor || defaultBtnBgColor;
const arrowBgColor = props.arrowBgColor || defaultArrowBgColor;
const content = props.content || defaultContent;
</script>

<style lang="scss" scoped>
@import "@/assets/App.scss";
a {
  display: flex;
}
.more-btn {
  @include btn;
  width: 246px;
  height: 65px;

  &__content {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  &__text {
    font-family: "Pragmatica Medium";
    font-size: 1rem;
    color: #fff;
  }
  &__arrow {
    @include btn;
    flex-shrink: 0;
    width: 65px;
    height: 65px;
    margin-left: auto;
  }
}
</style>
