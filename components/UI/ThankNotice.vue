<template>
  <div class="thank-notice">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="69"
      height="68"
      viewBox="0 0 69 68"
      fill="none"
    >
      <rect x="0.5" width="68" height="68" fill="#FF6915"></rect>
      <path
        d="M21.5 34.5L30.1667 43L47.5 26"
        stroke="white"
        stroke-width="2"
        stroke-linecap="square"
        stroke-linejoin="round"
      ></path>
    </svg>
    <span class="thank-notice__title"> Спасибо! </span>
    <p class="thank-notice__paragraph">
      Мы получили Ваше сообщение. В ближайшее время наши менеджеры свяжутся с
      вами и ответят на все вопросы.
    </p>
  </div>
</template>

<style lang="scss" scoped>
.thank-notice {
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.04),
    0px 13px 28px 0px rgba(0, 0, 0, 0.04), 0px 51px 51px 0px rgba(0, 0, 0, 0.03),
    0px 114px 68px 0px rgba(0, 0, 0, 0.02),
    0px 202px 81px 0px rgba(0, 0, 0, 0.01), 0px 316px 88px 0px rgba(0, 0, 0, 0);
  background-color: #ffffff;
  padding: 4.688rem 1.25rem;
  margin: 1.875rem 0;

  &__title {
    font-family: "Pragmatica Medium";
    font-size: 1.375rem;
    margin-top: 1.875rem;
  }
  &__paragraph {
    text-align: center;
    font-family: "Pragmatica Book";
    font-size: 0.938rem;
    margin-top: 0.625rem;
    margin-bottom: 0rem;
  }
}
/* 768px = 48em */
@media (min-width: 48em) {
  .thank-notice {
    &__paragraph {
      margin: 0.625rem 3rem 0 3rem;
    }
  }
}
/* 1200px = 75em */
@media (min-width: 75em) {
  .thank-notice {
    max-width: 750px;
    margin: 1.875rem auto;
  }
}
</style>
