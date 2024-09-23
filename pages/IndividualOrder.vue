<template>
  <UIBreadcrumb :breadcrumbTitle="'Индивидуальный заказ'"></UIBreadcrumb>
  <main>
    <section class="entry">
      <h1 class="entry__title">Индивидуальный заказ</h1>
      <p class="entry__slogan">
        Здесь вы можете стать обладателем поистине уникальных и лимитированных
        моделей кроссовок Nike, ожидая их<br
          class="entry__slogan-br entry__slogan-br--from1200px"
        />
        поступления в продажу. Мы ценим вашу страсть к стилю и предоставляем вам
        уникальную возможность заказать<br
          class="entry__slogan-br entry__slogan-br--from1200px"
        />
        кроссовки, которые будут дополнением вашей индивидуальности.
      </p>
    </section>
    <div class="container">
      <section class="order-conditions">
        <h2 class="order-conditions__title">Условия заказа:</h2>
        <div class="order-conditions__body body">
          <div class="body__content content">
            <div class="content__num">1.</div>
            <div>
              <span class="content__text--bold">Выбор модели: </span>
              <span class="content__text"
                >Ознакомьтесь с нашим каталогом лимитированных моделей и
                выберите ту, которая вам больше всего понравилась.</span
              >
            </div>
          </div>
          <div class="body__content content">
            <div class="content__num">2.</div>
            <div>
              <span class="content__text--bold">Предоплата: </span>
              <span class="content__text"
                >Для подтверждения вашего заказа требуется внести предоплату в
                размере 100% от стоимости кроссовок.</span
              >
            </div>
          </div>
          <div class="body__content content">
            <div class="content__num">3.</div>
            <div>
              <span class="content__text--bold">Сроки ожидания: </span>
              <span class="content__text"
                >Обычно срок поступления лимитированных кроссовок составляет 4-6
                недель с момента оформления заказа и внесения предоплаты.</span
              >
            </div>
          </div>
          <div class="body__content content">
            <div class="content__num">4.</div>
            <div>
              <span class="content__text--bold"
                >Уведомление о готовности:
              </span>
              <span class="content__text"
                >Как только заказанные кроссовки поступят в наш магазин, мы
                отправим вам уведомление по электронной почте или SMS.</span
              >
            </div>
          </div>
          <div class="body__content content">
            <div class="content__num">5.</div>
            <div>
              <span class="content__text--bold">Доставка: </span>
              <span class="content__text"
                >После полной оплаты мы доставим ваши уникальные кроссовки прямо
                к вам по указанному адресу.</span
              >
            </div>
          </div>
        </div>
      </section>
      <section v-if="contactsIsVisible" class="contacts">
        <form @submit.prevent="submitForm" class="contacts-form">
          <div class="contacts-form__body contacts-body">
            <label for="username" class="contacts-body__label label"
              >Ваше имя <span class="label__star">*</span></label
            >
            <input
              v-model="name"
              @input="nameOnInput"
              placeholder="Как вас зовут"
              type="text"
              class="contacts-body__input"
              id="username"
              :class="{
                'invalid-name': nameIsEmpty,
              }"
            />
            <span
              v-if="nameIsEmpty"
              class="contacts-body__notice contacts-body__empty-notice"
              >Важно заполнить это поле.</span
            >
          </div>
          <div class="contacts-form__body contacts-body">
            <label for="telephone" class="contacts-body__label label"
              >Номер телефона <span class="label__star">*</span></label
            >
            <input
              v-model="phoneNumber"
              @input="phoneOnInput"
              placeholder="+7 (___) ___ - __ - __"
              type="text"
              class="contacts-body__input"
              id="telephone"
              :class="{
                'invalid-phone': phoneIsEmpty,
              }"
            />
            <span
              v-if="phoneIsEmpty"
              class="contacts-body__notice contacts-body__empty-notice"
              >Важно заполнить это поле.</span
            >
          </div>
          <div class="contacts-form__body contacts-body">
            <label for="email" class="contacts-body__label label"
              >Email <span class="label__star">*</span></label
            >
            <input
              v-model="email"
              @input="emailOnInput"
              placeholder="Введите ваш email адрес"
              type="text"
              class="contacts-body__input"
              id="email"
              :class="{
                'invalid-email--empty': emailIsEmpty,
                'invalid-email': !emailIsValid,
              }"
            />
            <span
              v-if="emailIsEmpty"
              class="contacts-body__notice contacts-body__empty-notice"
              >Важно заполнить это поле.</span
            >
            <span
              v-if="!emailIsValid"
              class="contacts-body__notice contacts-body__valid-notice"
              >Введите корректный адрес электронной почты.</span
            >
          </div>
          <div class="contacts-form__body contacts-body">
            <label for="message" class="contacts-body__label label"
              >Сообщение</label
            >
            <textarea
              placeholder="Укажите любой другой способ связи"
              class="contacts-body__textarea"
              id="message"
            ></textarea>
          </div>
          <div class="send">
            <UIButton
              class="send__send-btn"
              :bodyBgColor="'#ff6915'"
              :arrowBgColor="'#fb5a00'"
              :content="'Отправить'"
            ></UIButton>
            <span class="send__note"
              >Нажимая кнопку “Отправить” я соглашаюсь с
              <span class="send__note--underlined"
                ><NuxtLink to="/PrivacyPolicy"
                  >политикой конфиденциальности</NuxtLink
                ></span
              ></span
            >
          </div>
        </form>
      </section>
      <UIThankNotice v-if="thankNoticeIsVisible"></UIThankNotice>
    </div>
  </main>
</template>

<script setup lang="ts">
import Inputmask from "inputmask";

useHead({
  title:
    "Индивидуальный заказ Nike - Sneakers Store | Создайте свою идеальную пару",
  meta: [
    {
      name: "description",
      content:
        "Закажите индивидуальную пару кроссовок Nike в Sneakers Store! Выберите модель, цвет, материалы и создайте уникальную пару, отражающую ваш стиль.",
    },
    {
      name: "keywords",
      content:
        "Sneakers Store, индивидуальный заказ, Nike, кроссовки Nike, дизайн, персонализация",
    },
  ],
});

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

const nameOnInput = () => {
  nameIsEmpty.value = name.value === "";
};

const emailOnInput = () => {
  emailIsEmpty.value = email.value === "";
  emailIsValid.value = true;
};

const phoneOnInput = () => {
  phoneIsEmpty.value = phoneNumber.value === "";
};

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
    setTimeout(() => {
      thankNoticeIsVisible.value = false;
      contactsIsVisible.value = true;
    }, 12000);
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/App.scss";
.entry {
  margin-bottom: 1.875rem;

  &__title {
    margin-top: 0.938rem;
  }
  &__slogan {
    font-family: "Pragmatica Book";
    font-size: 0.938rem;
    line-height: 1.625rem;
    margin-top: 0.938rem;
    margin-bottom: 0rem;
  }
  &__slogan-br--from1200px {
    display: none;
  }
}
.container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 0rem;
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
.body {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}
.content {
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
.contacts-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}
.contacts-body {
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
  &__input:focus {
    border: 1px solid $Dark-Black;
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
  &__textarea:focus {
    border: 1px solid $Dark-Black;
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
.send {
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
.invalid-name,
.invalid-email,
.invalid-phone,
.invalid-email--empty {
  border: 1px solid #f81d2a;
  color: #f81d2a;
}
.invalid-name::placeholder,
.invalid-email,
.invalid-email::placeholder,
.invalid-email--empty::placeholder,
.invalid-phone::placeholder {
  color: #f81d2a;
}
/* 768px = 48em */
@media (min-width: 48em) {
  .body {
    flex-flow: row wrap;
  }
  .content {
    display: flex;
    gap: 1.125rem;
    width: 348px;
  }
  .contacts {
    padding: 2.5rem;
  }
  .thank-notice {
    &__slogan {
      margin: 0.625rem 3rem 0 3rem;
    }
  }
}
/* 1200px = 75em */
@media (min-width: 75em) {
  .entry {
    margin-bottom: 2.313rem;

    &__slogan-br--from1200px {
      display: block;
    }
  }
  .container {
    flex-direction: row;
    align-items: center;
    gap: 2rem;
  }
  .body {
    flex-flow: column nowrap;
  }
  .content {
    width: fit-content;
  }
  .contacts {
    width: 619px;
    flex-shrink: 0;
  }
}
/* 1440px = 90em */
@media (min-width: 90em) {
  .container {
    gap: 4.438rem;
  }
}
</style>
