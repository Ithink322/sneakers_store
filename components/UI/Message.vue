<template>
  <div class="message" :style="{ backgroundColor: bgColor, border: border }">
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      :fill="fill"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 11H16.0167M14.3333 16H16V22.6667H17.6667M1 4.33333C1 3.44928 1.35119 2.60143 1.97631 1.97631C2.60143 1.35119 3.44928 1 4.33333 1H27.6667C28.5507 1 29.3986 1.35119 30.0237 1.97631C30.6488 2.60143 31 3.44928 31 4.33333V27.6667C31 28.5507 30.6488 29.3986 30.0237 30.0237C29.3986 30.6488 28.5507 31 27.6667 31H4.33333C3.44928 31 2.60143 30.6488 1.97631 30.0237C1.35119 29.3986 1 28.5507 1 27.6667V4.33333Z"
        stroke="#DEDEDE"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
    <span class="message__text">{{ props.text }}</span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  bgColor: {
    type: String,
  },
  border: {
    type: String,
  },
  fill: {
    type: String,
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/App.scss";
.message {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  align-items: center;
  justify-content: center;
  background-color: #f8f8f8;
  padding: 2.188rem;

  &__text {
    text-align: center;
    font-family: "Pragmatica Book";
    font-size: 0.938rem;
    line-height: 25px;
    color: $Light-Black;
  }
}
/* 1200px = 75em */
@media (min-width: 75em) {
  .message {
    flex-direction: row;

    &__text {
      font-size: 1.063rem;
    }
  }
}
</style>
