<template>
  <div class="benefits-main-flex">
    <div class="benefits-main-flex__benefit-flex benefit-flex">
      <img
        src="/imgs/benefit-icon-original-products.svg"
        alt=""
        class="benefit-flex__icon"
      />
      <div class="benefit-flex__title-and-text-flex">
        <span class="benefit-flex__title">ТОЛЬКО ОРИГИНАЛЬНЫЕ ТОВАРЫ</span>
        <span class="benefit-flex__text benefit-flex__text--nowrapfrom1920px"
          >Гарантированная подлинность Nike и<br
            class="benefit-flex__text-br--from1920px"
          />
          высокое качество кроссовок.</span
        >
      </div>
    </div>
    <div class="benefits-main-flex__benefit-flex benefit-flex">
      <img
        src="/imgs/benefit-professional-service.svg"
        alt=""
        class="benefit-flex__icon"
      />
      <div class="benefit-flex__title-and-text-flex">
        <span class="benefit-flex__title">ПРОФЕССИОНАЛЬНЫЙ СЕРВИС</span>
        <span class="benefit-flex__text benefit-flex__text--nowrapfrom1920px"
          >Команда экспертов, готовых помочь с<br
            class="benefit-flex__text-br--from1920px"
          />
          выбором размера ответить на все вопросы.</span
        >
      </div>
    </div>
    <div class="benefits-main-flex__benefit-flex benefit-flex">
      <img
        src="/imgs/benefit-exclusive-choice.svg"
        alt=""
        class="benefit-flex__icon"
      />
      <div class="benefit-flex__title-and-text-flex">
        <span class="benefit-flex__title">ЭКСКЛЮЗИВНЫЙ ВЫБОР</span>
        <span class="benefit-flex__text benefit-flex__text--nowrapfrom1920px"
          >Богатый ассортимент оригинальных<br
            class="benefit-flex__text-br--from1920px"
          />
          моделей Nike, включая редкие выпуски.</span
        >
      </div>
    </div>
  </div>
  <div class="border-bottom-for-benefits-main-flex"></div>
</template>

<style lang="scss" scoped>
.benefits-main-flex {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.563rem;
  margin-top: 1.875rem;
  height: auto;

  &__benefit-flex {
    display: flex;
    align-items: flex-start;
    gap: 1.688rem;
  }
}
.benefits-main-flex::before {
  position: absolute;
  content: "";
  width: calc(100% + 1.876rem);
  border: 1px solid #eaeaea;
  left: -0.938rem;
  margin-top: -1.875rem;
}
.border-bottom-for-benefits-main-flex {
  position: absolute;
  width: 100%;
  border: 1px solid #eaeaea;
  left: 0rem;
  margin-top: 1.875rem;
}
.benefit-flex {
  &__icon {
    width: 40px;
    height: 40px;
    flex-shrink: 0;
  }
  &__title-and-text-flex {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  &__title {
    font-family: "Pragmatica Medium";
    font-size: 0.938rem;
  }
  &__text {
    font-family: "Pragmatica Book";
    font-size: 0.875rem;
    color: #4b4b4b;
  }
  &__text-br--from1920px {
    display: none;
  }
}
/* 768px = 48em */
@media (min-width: 48em) {
  .benefits-main-flex {
    position: static;
    flex-direction: row;
    gap: 0.406rem;

    &__benefit-flex {
      gap: 0.625rem;
    }
    &::before {
      width: 100%;
      left: 0rem;
    }
    &::after {
      width: 100%;
      left: 0rem;
      bottom: 0rem;
    }
  }
  .benefit-flex {
    &__title {
      font-size: 0.688rem;
    }
  }
}
/* 1200px = 75em */
@media (min-width: 75em) {
  .benefits-main-flex {
    margin-top: 3.125rem;
    gap: 3.875rem;

    &__benefit-flex {
      gap: 1.25rem;
    }
  }
  .benefits-main-flex::before {
    margin-top: -3.125rem;
  }
  .border-bottom-for-benefits-main-flex {
    margin-top: 2.9rem;
  }
  .benefit-flex {
    &__title {
      font-size: 1.125rem;
    }
    &__text {
      font-size: 1.125rem;
    }
  }
}
/* 1920px = 120em */
@media (min-width: 120em) {
  .benefit-flex__text--nowrapfrom1920px {
    white-space: nowrap;
  }
  .benefit-flex__text-br--from1920px {
    display: block;
  }
}
</style>
