<template>
  <UIBreadcrump :breadcrumpTitle="'Индивидуальный заказ'"></UIBreadcrump>
  <section class="entry">
    <h1 class="entry__title">Индивидуальный заказ</h1>
    <p class="entry__paragraph">
      Здесь вы можете стать обладателем поистине уникальных и лимитированных
      моделей кроссовок Nike, ожидая их<br
        class="entry__paragraph-br--from1200px"
      />
      поступления в продажу. Мы ценим вашу страсть к стилю и предоставляем вам
      уникальную возможность заказать<br
        class="entry__paragraph-br--from1200px"
      />
      кроссовки, которые будут дополнением вашей индивидуальности.
    </p>
  </section>
  <div class="order-conditions-and-contacts-flex">
    <section class="order-conditions">
      <h2 class="order-conditions__title">Условия заказа:</h2>
      <div class="order-conditions__main-flex main-flex">
        <div class="main-flex__num-and-point-flex num-and-point-flex">
          <div class="num-and-point-flex__num">1.</div>
          <div>
            <span class="num-and-point-flex__text--bold">Выбор модели: </span>
            <span class="num-and-point-flex__text"
              >Ознакомьтесь с нашим каталогом лимитированных моделей и выберите
              ту, которая вам больше всего понравилась.</span
            >
          </div>
        </div>
        <div class="main-flex__num-and-point-flex num-and-point-flex">
          <div class="num-and-point-flex__num">2.</div>
          <div>
            <span class="num-and-point-flex__text--bold">Предоплата: </span>
            <span class="num-and-point-flex__text"
              >Для подтверждения вашего заказа требуется внести предоплату в
              размере 100% от стоимости кроссовок.</span
            >
          </div>
        </div>
        <div class="main-flex__num-and-point-flex num-and-point-flex">
          <div class="num-and-point-flex__num">3.</div>
          <div>
            <span class="num-and-point-flex__text--bold">Сроки ожидания: </span>
            <span class="num-and-point-flex__text"
              >Обычно срок поступления лимитированных кроссовок составляет 4-6
              недель с момента оформления заказа и внесения предоплаты.</span
            >
          </div>
        </div>
        <div class="main-flex__num-and-point-flex num-and-point-flex">
          <div class="num-and-point-flex__num">4.</div>
          <div>
            <span class="num-and-point-flex__text--bold"
              >Уведомление о готовности:
            </span>
            <span class="num-and-point-flex__text"
              >Как только заказанные кроссовки поступят в наш магазин, мы
              отправим вам уведомление по электронной почте или SMS.</span
            >
          </div>
        </div>
        <div class="main-flex__num-and-point-flex num-and-point-flex">
          <div class="num-and-point-flex__num">5.</div>
          <div>
            <span class="num-and-point-flex__text--bold">Доставка: </span>
            <span class="num-and-point-flex__text"
              >После полной оплаты мы доставим ваши уникальные кроссовки прямо к
              вам по указанному адресу.</span
            >
          </div>
        </div>
      </div>
    </section>
    <section class="contacts">
      <div
        v-if="thankNoticeIsVisible"
        class="contacts__thank-notice thank-notice"
      >
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
          Мы получили Ваше сообщение. В ближайшее время наши менеджеры свяжутся
          с вами и ответят на все вопросы.
        </p>
      </div>
      <form
        v-if="contactsIsVisible"
        @submit.prevent="submitForm"
        class="contacts-main-flex contacts__main-flex"
      >
        <div
          class="contacts-main-flex__input-and-label-flex input-and-label-flex"
        >
          <label for="username" class="input-and-label-flex__label label"
            >Ваше имя <span class="label__star">*</span></label
          >
          <input
            v-model="name"
            placeholder="Как вас зовут"
            type="text"
            class="input-and-label-flex__input"
            id="username"
            :class="{
              'invalid-name': nameIsEmpty,
            }"
          />
          <span
            v-if="nameIsEmpty"
            class="input-and-label-flex__notice input-and-label-flex__empty-notice"
            >Важно заполнить это поле.</span
          >
        </div>
        <div
          class="contacts-main-flex__input-and-label-flex input-and-label-flex"
        >
          <label for="telephone" class="input-and-label-flex__label label"
            >Номер телефона <span class="label__star">*</span></label
          >
          <input
            v-model="phoneNumber"
            placeholder="+7 (___) ___ - ___ - ___"
            type="text"
            class="input-and-label-flex__input"
            id="telephone"
            :class="{
              'invalid-phone': phoneIsEmpty,
            }"
          />
          <span
            v-if="phoneIsEmpty"
            class="input-and-label-flex__notice input-and-label-flex__empty-notice"
            >Важно заполнить это поле.</span
          >
        </div>
        <div
          class="contacts-main-flex__input-and-label-flex input-and-label-flex"
        >
          <label for="email" class="input-and-label-flex__label label"
            >Email <span class="label__star">*</span></label
          >
          <input
            v-model="email"
            placeholder="Введите ваш email адрес"
            type="text"
            class="input-and-label-flex__input"
            id="email"
            :class="{
              'invalid-email': !emailIsValid,
            }"
          />
          <span
            v-if="emailIsEmpty"
            class="input-and-label-flex__notice input-and-label-flex__empty-notice"
            >Важно заполнить это поле.</span
          >
          <span
            v-if="!emailIsValid"
            class="input-and-label-flex__notice input-and-label-flex__valid-notice"
            >Введите корректный адрес электронной почты.</span
          >
        </div>
        <div
          class="contacts-main-flex__input-and-label-flex input-and-label-flex"
        >
          <label for="message" class="input-and-label-flex__label label"
            >Сообщение</label
          >
          <textarea
            placeholder="Укажите любой другой способ связи"
            class="input-and-label-flex__textarea"
            id="message"
          ></textarea>
        </div>
        <div class="contacts-main-flex__send-flex send-flex">
          <button class="send-flex__send-btn send-btn">
            <div class="send-btn__flex">
              <span class="send-btn__text">Отправить</span>
            </div>
            <div class="send-flex__send-btn-arrow send-btn__arrow">
              <img src="/imgs/white-right-arrow.svg" alt="" />
            </div>
          </button>
          <span class="send-flex__note"
            >Нажимая кнопку “Отправить” я соглашаюсь с
            <span class="send-flex__note--underlined"
              ><NuxtLink to="/PrivacyPolicy"
                >политикой конфиденциальности</NuxtLink
              ></span
            ></span
          >
        </div>
      </form>
    </section>
  </div>
</template>

<script setup lang="ts">
import Inputmask from "inputmask";

onMounted(() => {
  if (contactsIsVisible.value) {
    const telephoneInput = document.getElementById(
      "telephone"
    )! as HTMLInputElement;
    Inputmask("+7 (999) 999-99-99").mask(telephoneInput);
  }
});

const name = ref("");
const phoneNumber = ref("");
const email = ref("");
const nameIsEmpty = ref(false);
const phoneIsEmpty = ref(false);
const emailIsEmpty = ref(false);
const emailIsValid = ref(true);

const thankNoticeIsVisible = ref(false);
const contactsIsVisible = ref(true);

const submitForm = () => {
  if (name.value === "") {
    nameIsEmpty.value = true;
  } else {
    nameIsEmpty.value = false;
  }

  const phoneNumberDigits = phoneNumber.value.replace(/\D/g, "");
  if (phoneNumber.value === "") {
    phoneIsEmpty.value = true;
  } else {
    phoneIsEmpty.value = false;
  }

  if (
    phoneNumberDigits.length === 11 &&
    phoneNumberDigits.match(/^7\d{3}\d{3}\d{2}\d{2}$/)
  ) {
    phoneIsEmpty.value = false;
  } else {
    phoneIsEmpty.value = true;
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

  if (
    name.value !== "" &&
    phoneNumberDigits.length === 11 &&
    phoneNumberDigits.match(/^7\d{3}\d{3}\d{2}\d{2}$/) &&
    emailIsValid.value
  ) {
    thankNoticeIsVisible.value = true;
    contactsIsVisible.value = false;
  }
  console.log(name.value, phoneIsEmpty.value, emailIsValid.value);
};
</script>

<style lang="scss" scoped>
@import "@/assets/App.scss";
.entry {
  margin-bottom: 1.875rem;

  &__title {
    font-family: "Pragmatica Medium";
    font-size: 1.563rem;
    margin-top: 0.938rem;
    margin-bottom: 0rem;
  }
  &__paragraph {
    font-family: "Pragmatica Book";
    font-size: 0.938rem;
    line-height: 1.625rem;
    margin-top: 0.938rem;
    margin-bottom: 0rem;
  }
  &__paragraph-br--from1200px {
    display: none;
  }
}
.order-conditions-and-contacts-flex {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.order-conditions {
  &__title {
    font-family: "Pragmatica Medium";
    font-size: 1.375rem;
    color: #2e2e2e;
    margin-top: 0rem;
    margin-bottom: 1.125rem;
  }
}
.main-flex {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}
.num-and-point-flex {
  display: flex;
  gap: 1.125rem;

  &__num {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 43px;
    height: 43px;
    background-color: $Light-Black;
    font-family: "Pragmatica Medium";
    font-size: 1.063rem;
    color: #fff;
  }
  &__text--bold {
    font-family: "Pragmatica Bold";
    font-size: 1rem;
    line-height: 1.688rem;
    color: #2e2e2e;
  }
  &__text {
    font-family: "Pragmatica Book";
    font-size: 1rem;
    color: #2e2e2e;
  }
}
.contacts {
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.04),
    0px 13px 28px 0px rgba(0, 0, 0, 0.04), 0px 51px 51px 0px rgba(0, 0, 0, 0.03),
    0px 114px 68px 0px rgba(0, 0, 0, 0.02),
    0px 202px 81px 0px rgba(0, 0, 0, 0.01), 0px 316px 88px 0px rgba(0, 0, 0, 0);
  background-color: #ffffff;
  padding: 1.25rem;
}
.thank-notice {
  display: flex;
  flex-direction: column;
  align-items: center;
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
.contacts-main-flex {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}
.input-and-label-flex {
  display: flex;
  flex-direction: column;
  gap: 0.313rem;

  &__input {
    @include input;
    outline: none;
    padding: 1.031rem 1.25rem;
    border: 1px solid #d6d6d6;
    font-family: "Pragmatica Book";
    font-size: 0.938rem;
  }
  &__input::placeholder {
    font-family: "Pragmatica Book";
    color: #c1c1c1;
  }
  &__notice {
    font-family: "Pragmatica Book";
    line-height: 1.688rem;
    color: #f81d2a;
  }
  &__textarea {
    padding: 0.625rem 1.25rem;
    outline: none;
    border: 1px solid #d6d6d6;
    font-family: "Pragmatica Book";
    font-size: 0.938rem;
    line-height: 1.5rem;
    height: 100px;
  }
  &__textarea::placeholder {
    font-family: "Pragmatica Book";
    font-size: 0.938rem;
    line-height: 1.5rem;
    color: #c1c1c1;
  }
}
.label {
  font-family: "Pragmatica Book";
  font-size: 0.938rem;
  line-height: 27px;

  &__star {
    color: #ff1515;
  }
}
.send-flex {
  display: flex;
  flex-direction: column;
  gap: 1.875rem;

  &__send-btn {
    margin: 0 auto;
  }
  &__note {
    display: block;
    text-align: center;
    font-family: "Pragmatica Book";
    font-size: 0.813rem;
    color: #6b6e72;
  }
  &__note--underlined {
    text-decoration: underline;

    a {
      color: #6b6e72;
    }
  }
}
.send-btn {
  @include btn;
  background-color: $Light-Orange;
  width: 246px;
  height: 65px;

  &__flex {
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
    background-color: $Dark-Orange;
    flex-shrink: 0;
    width: 65px;
    height: 65px;
    margin-left: auto;
  }
}
.invalid-name,
.invalid-name::placeholder,
.invalid-email,
.invalid-email::placeholder,
.invalid-phone,
.invalid-phone::placeholder {
  color: #f81d2a;
}
/* 768px = 48em */
@media (min-width: 48em) {
  .thank-notice {
    &__paragraph {
      margin: 0.625rem 3rem 0 3rem;
    }
  }
  .main-flex {
    flex-flow: row wrap;
  }
  .num-and-point-flex {
    display: flex;
    gap: 1.125rem;
    width: 348px;
  }
  .contacts {
    padding: 2.5rem;
  }
}
/* 1200px = 75em */
@media (min-width: 75em) {
  .entry {
    margin-bottom: 2.313rem;

    &__paragraph-br--from1200px {
      display: block;
    }
  }
  .order-conditions-and-contacts-flex {
    flex-direction: row;
    align-items: center;
    gap: 2rem;
  }
  .main-flex {
    flex-flow: column nowrap;
  }
  .num-and-point-flex {
    width: fit-content;
  }
  .contacts {
    width: 619px;
    flex-shrink: 0;
  }
}
/* 1440px = 90em */
@media (min-width: 90em) {
  .order-conditions-and-contacts-flex {
    gap: 4.438rem;
  }
}
</style>
