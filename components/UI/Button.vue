<template>
  <NuxtLink :to="link">
    <button class="btn" :style="{ backgroundColor: bodyBgColor, width: width }">
      <div class="btn__content">
        <span class="btn__text">{{ content }}</span>
      </div>
      <div class="btn__icon" :style="{ backgroundColor: arrowBgColor }">
        <img :src="icon ? icon : '/imgs/white-right-arrow.svg'" alt="" />
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
  icon?: string;
  width?: string;
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
.btn {
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
  &__icon {
    @include btn;
    flex-shrink: 0;
    width: 65px;
    height: 65px;
    margin-left: auto;
  }
}
</style>
