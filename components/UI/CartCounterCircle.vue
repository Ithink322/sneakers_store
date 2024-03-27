<template>
  <div class="header__cart-counter-circle">
    <span class="header__cart-counter-circle-text">0</span>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.header__cart-counter-circle {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ff6915;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  font-family: "Pragmatica Bold";
  font-size: 0.625rem;
  color: #ffffff;
}
.header__cart-counter-circle {
  margin-left: 1.3rem;
  margin-top: -1.1rem;
}
/* 1200px = 75em */
@media (min-width: 75em) {
  .header__cart-counter-circle {
    width: 16px;
    height: 16px;
    margin-left: 3.8rem;
    margin-top: -3.9rem;
  }
}
</style>
