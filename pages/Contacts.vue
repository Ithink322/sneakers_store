<template>
  <UIBreadcrumb :breadcrumbTitle="'Наши контакты'"></UIBreadcrumb>
  <main>
    <h1 class="title">Наши контакты</h1>
    <nav class="city-selector">
      <div
        class="city-selector__border-bottom city-selector__border-bottom--left"
      ></div>
      <button
        class="city-selector__kursk-btn"
        :class="{ active: isKurskBtnActive }"
        @click="toggleKurskBtn"
      >
        Курск
      </button>
      <button
        class="city-selector__moscow-btn"
        :class="{ active: isMoscowBtnActive }"
        @click="toggleMoscowBtn"
      >
        Москва
      </button>
      <div
        class="city-selector__border-bottom city-selector__border-bottom--right"
      ></div>
    </nav>
    <section v-if="infoKurskIsVisible" class="info-kursk">
      <UIContacts :KurskInfo="KurskInfo"></UIContacts>
    </section>
    <section v-if="infoMoscowIsVisible" class="info-moscow">
      <UIContacts :MoscowInfo="MoscowInfo"></UIContacts>
    </section>
    <div class="wide-border"></div>
    <section v-if="questionFormIsVisible" class="send-question">
      <form @submit.prevent="submitForm" class="send-question-form">
        <h2 class="send-question-form__title">
          У вас есть вопросы? Напишите нам!
        </h2>
        <span class="send-question-form__text"
          >Мы с радостью ответим на все интересующие вас вопросы.</span
        >
        <div class="send-question-form__content content">
          <div class="content__wrapper content__wrapper--from768px">
            <input
              v-model="name"
              @input="nameOnInput"
              placeholder="Ваше имя"
              type="text"
              class="content__input"
              :class="{
                'invalid-name': nameIsEmpty,
              }"
            />
            <span
              v-if="nameIsEmpty"
              class="content__notice content__notice-first-input"
              >Важно заполнить это поле.</span
            >
            <input
              v-model="email"
              @input="emailOnInput"
              placeholder="Ваш Email"
              type="text"
              class="content__input"
              :class="{
                'invalid-email--empty': emailIsEmpty,
                'invalid-email': !emailIsValid,
              }"
            />
            <span
              v-if="emailIsEmpty"
              class="content__notice content__notice-second-input"
              >Важно заполнить это поле.</span
            >
            <span
              v-if="!emailIsValid"
              class="content__notice content__notice-second-input"
              >Введите корректный email.</span
            >
          </div>
          <input
            v-model="question"
            @input="questionOnInput"
            placeholder="Текст вопроса"
            type="text"
            class="content__input"
            :class="{
              'invalid-question': questionIsEmpty,
            }"
          />
          <span
            v-if="questionIsEmpty"
            class="content__notice content__notice-third-input"
            >Важно заполнить это поле.</span
          >
          <button class="content__btn">Отправить</button>
          <span class="content__note"
            >Нажимая кнопку “Отправить” я соглашаюсь с
            <span class="content__link"
              >политикой конфиденциальности</span
            ></span
          >
        </div>
      </form>
    </section>
    <UIThankNotice v-if="thankNoticeIsVisible"></UIThankNotice>
  </main>
</template>

<script setup lang="ts">
import type { Contacts } from "@/types/Contacts";

useHead({
  title: "Contacts",
  meta: [
    {
      name: "description",
      content: "Here you can find our contacts in different cities.",
    },
  ],
});

const isKurskBtnActive = ref(true);
const isMoscowBtnActive = ref(false);
const infoKurskIsVisible = ref(true);
const infoMoscowIsVisible = ref(false);

const toggleKurskBtn = () => {
  isKurskBtnActive.value = true;
  isMoscowBtnActive.value = false;
  infoKurskIsVisible.value = true;
  infoMoscowIsVisible.value = false;
};

const toggleMoscowBtn = () => {
  isKurskBtnActive.value = false;
  isMoscowBtnActive.value = true;
  infoMoscowIsVisible.value = true;
  infoKurskIsVisible.value = false;
};

const KurskInfo = ref<Contacts[]>([
  {
    address: "Курск, улица Карла Маркса 68, 2 этаж.",
    phone: "+7 (918) 547-20-83",
    email: "orderskursk@store.ru",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2419295.1426344425!2d34.26138521858544!3d53.68988041953008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x412f03c89ce986d3%3A0xa106adaa8e5d19f4!2sNew%20Balance!5e0!3m2!1sru!2sru!4v1718014806912!5m2!1sru!2sru",
  },
]);

const MoscowInfo = ref<Contacts[]>([
  {
    address: "Москва, Нижний Кисельный пер., д.4",
    phone: "+7 (495) 647-88-20",
    email: "ordersmoscow@store.ru",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d71827.59625176922!2d37.6217508!3d55.765235399999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54ae60c3268e9%3A0x5c1b643ffcfa3395!2z0JzQsNCz0LDQt9C40L0gU25lYWtlcmhlYWQ!5e0!3m2!1sru!2sru!4v1718014750408!5m2!1sru!2sru",
  },
]);

const name = ref("");
const email = ref("");
const question = ref("");
const nameIsEmpty = ref(false);
const emailIsEmpty = ref(false);
const emailIsValid = ref(true);
const questionIsEmpty = ref(false);

const nameOnInput = () => {
  nameIsEmpty.value = name.value === "";
};

const emailOnInput = () => {
  emailIsEmpty.value = email.value === "";
  emailIsValid.value = true;
};

const questionOnInput = () => {
  questionIsEmpty.value = question.value === "";
};

const submitForm = () => {
  if (name.value === "") {
    nameIsEmpty.value = true;
  } else {
    nameIsEmpty.value = false;
  }

  if (email.value === "") {
    emailIsEmpty.value = true;
    emailIsValid.value = true;
  } else {
    emailIsEmpty.value = false;
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;
    emailIsValid.value = emailRegex.test(email.value);
  }

  if (question.value === "") {
    questionIsEmpty.value = true;
  } else {
    questionIsEmpty.value = false;
  }

  showThankNotice();
};

const questionFormIsVisible = ref(true);
const thankNoticeIsVisible = ref(false);

const showThankNotice = () => {
  if (name.value !== "" && emailIsValid.value && question.value !== "") {
    thankNoticeIsVisible.value = true;
    questionFormIsVisible.value = false;

    setTimeout(() => {
      thankNoticeIsVisible.value = false;
      questionFormIsVisible.value = true;
      name.value = "";
      email.value = "";
      question.value = "";
    }, 12000);
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/App.scss";
.title {
  font-family: "Pragmatica Medium";
  font-size: 1.563rem;
  margin-top: 0.938rem;
  margin-bottom: 1.5rem;
}
.city-selector {
  display: flex;

  &__border-bottom {
    @include btn;
    flex-shrink: 0;
    width: 15.008px;
    border-bottom: 1px solid #e8e8e8;
  }
  &__border-bottom--left {
    margin-left: -0.938rem;
  }
  &__border-bottom--right {
    margin-right: -0.938rem;
  }
  &__kursk-btn,
  &__moscow-btn {
    @include btn;
    border-bottom: 1px solid #e8e8e8;
    padding: 1.563rem;
    font-family: "Pragmatica Medium";
    font-size: 1rem;
  }
  &__kursk-btn {
    width: 160px;
  }
  &__moscow-btn {
    flex-grow: 1;
  }
  &__kursk-btn.active {
    border: 1px solid #e8e8e8;
    border-bottom: none;
  }
  &__moscow-btn.active {
    border: 1px solid #e8e8e8;
    border-bottom: none;
  }
}
.wide-border {
  display: none;
}
.send-question {
  margin-top: 2.5rem;
}
.send-question-form {
  &__title {
    text-align: center;
    font-family: "Pragmatica Medium";
    font-size: 1.25rem;
    line-height: 1.688rem;
    color: #1d1d27;
    margin: 0rem;
  }
  &__text {
    display: block;
    text-align: center;
    font-family: "Pragmatica Book";
    font-size: 1rem;
    line-height: 1.563rem;
    color: #434343;
    margin-top: 0.25rem;
    margin-bottom: 0.938rem;
  }
}
.content {
  display: flex;
  flex-direction: column;
  gap: 1.875rem;

  &__wrapper--from768px {
    display: flex;
    flex-direction: column;
    gap: 1.875rem;
  }
  &__input {
    @include input;
    width: 100%;
    outline: none;
    padding: 0.938rem 0.625rem;
    font-family: "Pragmatica Book";
    font-size: 1rem;
    color: #2b2b2b;
    border-bottom: 1px solid $Light-Black;
  }
  &__btn {
    @include btn;
    width: 100%;
    padding: 1.438rem 0;
    background-color: $Light-Black;
    font-family: "Pragmatica Medium";
    font-size: 1rem;
    color: #fff;
  }
  &__note {
    display: block;
    text-align: center;
    font-family: "Pragmatica Book";
    font-size: 0.813rem;
    color: #6b6e72;
  }
  &__link {
    text-decoration: underline;
  }
  &__notice {
    font-family: "Pragmatica Book";
    line-height: 1.688rem;
    color: #f81d2a;
    margin: -1rem 0;
  }
}
.invalid-name::placeholder,
.invalid-email,
.invalid-email::placeholder,
.invalid-email::placeholder,
.invalid-email--empty::placeholder,
.invalid-question::placeholder {
  color: #f81d2a;
}

/* 350px = 21.875em */
@media (min-width: 21.875em) {
  .city-selector {
    &__border-bottom--right {
      flex-grow: 1;
    }
    &__moscow-btn {
      flex-grow: 0;
      width: 160px;
    }
  }
}
/* 768px = 48em */
@media (min-width: 48em) {
  .title {
    margin-bottom: 1.875rem;
  }
  .city-selector {
    margin: 0rem calc((100vw - 44.874rem) / (-2));

    &__border-bottom--left {
      margin-left: 0rem;
      padding-left: calc((100vw - 44.874rem) / 2);
    }
    &__border-bottom--right {
      margin-right: 0rem;
      padding-right: calc((100vw - 44.874rem) / 2);
    }
    &__kursk-btn,
    &__moscow-btn {
      font-size: 1.125rem;
    }
  }
  .send-question {
    margin-top: 3.125rem;
  }
  .content {
    &__wrapper--from768px {
      flex-direction: row;
    }
    &__notice-first-input {
      position: absolute;
      margin-top: 3.3rem;
    }
    &__notice-second-input {
      position: absolute;
      margin: 3.3rem 0 0 23.4rem;
    }
    &__notice-third-input {
      margin-top: -1.6rem;
    }
  }
}
/* 1024px = 64em */
@media (min-width: 64em) {
  .city-selector {
    margin: 0rem calc((100vw - 44.75rem) / (-2));

    &__border-bottom--left {
      padding-left: calc((100vw - 44.75rem) / 2);
    }
    &__border-bottom--right {
      padding-right: calc((100vw - 44.75rem) / 2);
    }
  }
}
/* 1200px = 75em */
@media (min-width: 75em) {
  .title {
    font-size: 2.813rem;
    margin-top: 1.563rem;
  }
  .city-selector {
    margin: 0rem calc((100vw - 71.875rem) / (-2));

    &__border-bottom--left {
      padding-left: calc((100vw - 71.875rem) / 2);
    }
    &__border-bottom--right {
      padding-right: calc((100vw - 71.875rem) / 2);
    }
    &__kursk-btn,
    &__moscow-btn {
      width: 170px;
    }
  }
  .wide-border {
    display: block;
    border: 1px solid #eaeaea;
    margin: 5.25rem calc((100vw - 71.875rem) / (-2)) 0rem
      calc((100vw - 71.875rem) / (-2));
  }
  .send-question {
    display: flex;
    justify-content: center;
    margin-top: 6.5rem;
  }
  .send-question-form {
    width: 750px;

    &__title {
      font-size: 2.188rem;
    }
    &__text {
      font-size: 1.188rem;
      line-height: 2.75rem;
    }
  }
  .content {
    &__btn {
      width: 360px;
      margin: 0 auto;
    }
    &__notice-second-input {
      margin: 3.3rem 0 0 24.4rem;
    }
  }
}
/* 1440px = 90em */
@media (min-width: 90em) {
  .city-selector {
    margin: 0rem calc((100vw - 85rem) / (-2));

    &__border-bottom--left {
      padding-left: calc((100vw - 85rem) / 2);
    }
    &__border-bottom--right {
      padding-right: calc((100vw - 85rem) / 2);
    }
  }
  .wide-border {
    margin: 5.25rem calc((100vw - 85rem) / (-2)) 0rem
      calc((100vw - 85rem) / (-2));
  }
}
</style>
