<template>
  <UIBreadcrump :breadcrumpTitle="'О компании'"></UIBreadcrump>
  <div class="about-container">
    <h1 class="about-container__title">
      ИНТЕРНЕТ-МАГАЗИН<br />
      <div class="about-container__title-and-line-flex">
        SWOOSH STORE
        <div class="about-container__line"></div>
      </div>
    </h1>
    <span class="about-container__span">
      <p class="about-container__paragraph--margin">
        Добро пожаловать в
        <span class="about-container__text--bold">Swoosh Store</span> – ваш
        источник подлинных кроссовок Nike и<br
          class="about-container__span-br--from1024px"
        />
        непревзойденного стиля! Мы рады представить вам уникальную
        онлайн-платформу, где вы<br
          class="about-container__span-br--from1024px"
        />
        сможете окунуться в мир инноваций и моды от легендарного бренда
        спортивной обуви.
      </p>
    </span>
    <img src="/imgs/about-hero.svg" alt="" class="about-container__hero" />
  </div>
  <div class="recomendations-span-and-mailing-flex">
    <span class="recomendations-span">
      <p class="recomendations-span__paragraph--margintop">
        Наши кроссовки отличаются не только эстетическим великолепием, но и
        функциональностью. Мы предлагаем широкий выбор моделей для разных видов
        спорта, от бега до баскетбола, и для различных повседневных ситуаций.
        Будь то икона стиля, такая как Air Max, или универсальная классика, как
        Air Force 1 - у нас есть именно то, что подойдет вам.
      </p>
      <p>
        На SwooshStore мы ценим ваше доверие и комфортность при покупке. Вся
        наша обувь поставляется непосредственно от производителя, что
        гарантирует вам аутентичность каждой пары кроссовок. Мы также предлагаем
        удобные опции доставки и безопасные методы оплаты, чтобы сделать ваш
        опыт покупки максимально приятным и беззаботным.
      </p>
      <p>
        Присоединяйтесь к нашему сообществу любителей Nike, чтобы разделить
        радость от качественной обуви и уникального стиля. Мы всегда готовы
        помочь вам с выбором, ответить на вопросы и обеспечить вас идеальной
        парой кроссовок, которая подчеркнет вашу индивидуальность и даст вам
        уверенность в каждом шаге.
      </p>
      <p
        class="recomendations-span__text--bold recomendations-span__paragraph--marginbottom"
      >
        Спасибо, что выбираете SwooshStore – ваш источник оригинальных кроссовок
        Nike!
      </p>
    </span>
    <form @submit.prevent="submitForm" class="mailing">
      <div class="mailing__title-and-text-flex">
        <span class="mailing__title">Подпишитесь на рассылку</span>
        <span class="mailing__text"
          >Регулярные скидки и спецпредложения, а так же новости компании.</span
        >
      </div>
      <div class="mailing__input-and-btn-and-text-flex">
        <input
          v-model="email"
          :disabled="isEmailLocked"
          @input="handleInput"
          placeholder="Ваш Email"
          type="text"
          class="mailing__input"
          :class="{
            'invalid-email': !isValidEmail,
            'success-message': isEmailLocked,
          }"
        />
        <img
          v-if="isEmailLocked"
          class="mailing__input-arrow"
          src="/imgs/green-arrow.svg"
          alt=""
        />
        <span v-if="!isValidEmail" class="mailing__invalid-email-message"
          >Некорректный email адрес</span
        >
        <span v-if="emptyMessageIsVisible" class="mailing__empty-message"
          >Введите email адрес</span
        >
        <button ref="followBtn" class="mailing__follow-btn">Подписаться</button>
        <span class="mailing__privacy-policy-text"
          >Согласен с
          <span class="mailing__privacy-policy-text--underlined"
            ><NuxtLink to="/PrivacyPolicy"
              >политикой конфиденциальности</NuxtLink
            ></span
          ></span
        >
      </div>
    </form>
  </div>
  <div class="benefits">
    <UIBenefits></UIBenefits>
  </div>
  <div class="about-us-and-recent-publications-list-flex">
    <UIAboutUs></UIAboutUs>
    <UIRecentPublicationsList></UIRecentPublicationsList>
  </div>
</template>

<script setup lang="ts">
const email = ref("");
const isValidEmail = ref(true);
const emptyMessageIsVisible = ref(false);
const followBtn = ref<HTMLButtonElement | null>(null);
const isEmailLocked = ref(false);

const handleInput = () => {
  if (email.value) {
    emptyMessageIsVisible.value = false;
  }
};

const submitForm = () => {
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;

  if (email.value) {
    isValidEmail.value = emailRegex.test(email.value);
  } else {
    isValidEmail.value = false;
  }

  if (isValidEmail.value && email.value) {
    emptyMessageIsVisible.value = false;
    followBtn.value!.textContent = "Вы подписались!";
    isEmailLocked.value = true;
  } else if (email.value === "") {
    isValidEmail.value = true;
    emptyMessageIsVisible.value = true;
  } else {
    emptyMessageIsVisible.value = false;
    isValidEmail.value = false;
  }
};
</script>

<style lang="scss">
@import "@/assets/App.scss";
.about-container {
  &__title {
    font-family: "Pragmatica Medium";
    font-size: 1.5rem;
    margin-top: 0.938rem;
    margin-bottom: 0rem;
  }
  &__title-and-line-flex {
    display: flex;
    align-items: center;
    gap: 0.875rem;
  }
  &__line {
    width: 90px;
    height: 2px;
    background-color: $Dark-Black;
  }
  &__hero {
    width: 100vw;
    margin-left: -0.938rem;
    margin-right: -0.938rem;
  }
  &__span {
    font-family: "Pragmatica Book";
    font-size: 1rem;
    color: #2e2e2e;
  }
  &__span-br--from1024px {
    display: none;
  }
  &__paragraph--margin {
    margin-top: 1.25rem;
    margin-bottom: 1.688rem;
  }
}
.recomendations-span-and-mailing-flex {
  display: flex;
  flex-direction: column;
}
.recomendations-span {
  &__paragraph--margintop {
    margin-top: 1.563rem;
  }
  &__text--bold {
    font-family: "Pragmatica Bold";
  }
  &__paragraph--marginbottom {
    margin-bottom: 1.563rem;
  }
}
.mailing {
  position: relative;
  padding: 1.563rem;
  background-color: #f8f8f8;

  &__title-and-text-flex {
    display: flex;
    flex-direction: column;
    gap: 0.813rem;
  }
  &__title {
    display: block;
    text-align: center;
    font-family: "Pragmatica Book";
    font-size: 1.5rem;
    color: $Dark-Black;
  }
  &__text {
    display: block;
    text-align: center;
    font-family: "Pragmatica Book";
    font-size: 0.938rem;
    color: #393939;
  }
  &__input-and-btn-and-text-flex {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-top: 0.813rem;
  }
  &__input {
    @include input;
    outline: none;
    padding: 0.625rem;
    font-size: 1rem;
    color: #2b2b2b;
    border-bottom: 1px solid $Light-Black;
  }
  &__input::placeholder {
    font-family: "Pragmatica Book";
    font-size: 1rem;
    color: #2b2b2b;
  }
  &__input-arrow {
    position: absolute;
    width: 16px;
    height: 19px;
    margin-top: 0.6rem;
    right: 1.563rem;
  }
  &__invalid-email-message,
  &__empty-message {
    display: block;
    font-family: "Pragmatica Book";
    font-size: 1rem;
    color: #f81d2a;
    margin-top: -0.75rem;
  }
  &__follow-btn {
    @include btn;
    width: 100%;
    background-color: $Light-Black;
    padding: 1.438rem 0;
    font-family: "Pragmatica Medium";
    font-size: 1rem;
    color: #fff;
  }
  &__privacy-policy-text {
    display: block;
    text-align: center;
    font-family: "Pragmatica Book";
    font-size: 0.813rem;
    color: #6b6e72;
  }
  &__privacy-policy-text--underlined {
    text-decoration: underline;
    color: #6b6e72;

    a {
      color: #6b6e72;
    }
  }
}
.benefits {
  margin-top: 3.75rem;
}
.invalid-email {
  color: #f81d2a;
  border-bottom: 1px solid #f81d2a;
}
.success-message {
  color: #07961e;
  border-bottom: 1px solid #07961e;
}
.about-us-and-recent-publications-list-flex {
  display: flex;
  flex-direction: column;
  gap: 2.688rem;
}
.about-us-and-recent-publications-list-flex
  .about-us-flex
  .about-us-flex__more-btn-link
  .more-btn {
  visibility: hidden;
}
.about-us-flex__more-btn-link {
  cursor: default;
}

/* 768px = 48em */
@media (min-width: 48em) {
  .about-container {
    &__title {
      margin-top: 1.563rem;
    }
    &__hero {
      box-sizing: border-box;
      margin-left: calc((100vw - 44.874rem) / (-2));
      margin-right: calc((100vw - 44.874rem) / (-2));
    }
  }
  .about-us-and-recent-publications-list-flex {
    gap: 3.125rem;
  }
  .about-us-and-recent-publications-list-flex {
    margin-top: 4.375rem;
  }
  .benefits {
    margin-top: 5rem;
  }
  .benefits-main-flex::before {
    margin-top: -5rem;
  }
}
/* 1024px = 64em */
@media (min-width: 64em) {
  .about-container {
    &__hero {
      margin-left: calc((100vw - 44.75rem) / (-2));
      margin-right: calc((100vw - 44.75rem) / (-2));
    }
    &__span-br--from1024px {
      display: block;
    }
  }
}
/* 1200px = 75em */
@media (min-width: 75em) {
  .about-container {
    &__hero {
      margin-left: calc((100vw - 71.875rem) / (-2));
      margin-right: calc((100vw - 71.875rem) / (-2));
    }
  }
  .recomendations-span-and-mailing-flex {
    flex-direction: row;
    gap: 5rem;
    margin-top: 3.875rem;
  }
  .benefits {
    margin-top: 6.875rem;
  }
  .about-us-and-recent-publications-list-flex {
    margin-top: 0rem;
  }
  .mailing {
    width: 440px;
    flex-shrink: 0;
  }
}
/* 1440px = 90em */
@media (min-width: 90em) {
  .about-container {
    &__hero {
      margin-left: calc((100vw - 85rem) / (-2));
      margin-right: calc((100vw - 85rem) / (-2));
    }
    &__line {
      width: 123px;
    }
    &__title {
      font-size: 2.438rem;
    }
  }
  .about-us-and-recent-publications-list-flex {
    margin-top: 3rem;
  }
}
/* 1920px = 120em */
@media (min-width: 119.875em) {
  .about-container {
    &__hero {
      width: calc(100% + 140px);
      margin: 0 -70px;
    }
  }
}
</style>
