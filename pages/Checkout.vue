<template>
  <UIBreadcrumb :breadcrumbTitle="'Оформление заказа'"></UIBreadcrumb>
  <h1 class="title">Оформление заказа</h1>
  <form @submit.prevent="order">
    <div class="container">
      <div class="form">
        <div class="form__promo">
          Есть промокод?
          <span @click="openPromo" class="form__promo--underlined"
            >Нажмите здесь, чтобы ввести его</span
          >
        </div>
        <div class="form__body">
          <span class="form__title">Название компании</span>
          <input
            placeholder="Название компании"
            type="text"
            class="form__field"
          />
        </div>
        <div class="form__container">
          <div class="form__body">
            <span class="form__title"
              >Область \ Регион <span class="form__title--red">*</span></span
            >
            <input
              v-model="region"
              @input="regionOnInput"
              placeholder="Область"
              type="text"
              class="form__field"
              :class="{
                'invalid-field': regionIsEmpty,
              }"
            />
            <span v-if="regionIsEmpty" class="error-message"
              >Укажите область \ регион</span
            >
          </div>
          <div class="form__body">
            <span class="form__title"
              >Город <span class="form__title--red">*</span></span
            >
            <input
              v-model="city"
              @input="cityOnInput"
              placeholder="Введите название вашего города"
              type="text"
              class="form__field"
              :class="{
                'invalid-field': cityIsEmpty,
              }"
            />
            <span v-if="cityIsEmpty" class="error-message"
              >Город обязателен</span
            >
          </div>
        </div>
        <div class="form__body">
          <span class="form__title"
            >Улица <span class="form__title--red">*</span></span
          >
          <input
            v-model="street"
            @input="streetOnInput"
            placeholder="Введите название улицы"
            type="text"
            class="form__field"
            :class="{
              'invalid-field': streetIsEmpty,
            }"
          />
          <span v-if="streetIsEmpty" class="error-message">
            Укажите улицу
          </span>
        </div>
        <div class="form__container">
          <div class="form__body">
            <span class="form__title"
              >Индекс <span class="form__title--red">*</span></span
            >
            <input
              v-model="index"
              @input="indexOnInput"
              placeholder="Введите индекс"
              type="text"
              class="form__field"
              :class="{
                'invalid-field': indexIsEmpty,
              }"
            />
            <span v-if="indexIsEmpty" class="error-message">
              Укажите индекс
            </span>
          </div>
          <div class="form__body">
            <span class="form__title"
              >Номер дома \ Квартира
              <span class="form__title--red">*</span></span
            >
            <input
              v-model="houseNum"
              @input="houseNumOnInput"
              placeholder="Например 37/2"
              type="text"
              class="form__field"
              :class="{
                'invalid-field': houseNumIsEmpty,
              }"
            />
            <span v-if="houseNumIsEmpty" class="error-message">
              Укажите индекс
            </span>
          </div>
        </div>
        <div class="form__body">
          <span class="form__title">Комментарий к заказу</span>
          <textarea
            class="form__textarea"
            placeholder="Текст комментария"
          ></textarea>
        </div>
      </div>
      <div class="order">
        <span class="order__title">Ваш заказ</span>
        <div class="order__product-list">
          <UICheckoutProduct
            v-for="product in cartProducts"
            :product="product"
            :key="product.productId"
            :hideBorder="true"
          ></UICheckoutProduct>
        </div>
        <div class="summary">
          <div class="summary__sum">
            <span class="summary__sum-title">Сумма</span>
            <div class="summary__sum-border"></div>
            <span class="summary__sum-text">{{
              discountedTotalSum
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " ₽"
            }}</span>
          </div>
          <span v-if="discountSubTotal > 0" class="summary__total-discount"
            >-{{
              discountSubTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
            }}
            ₽ [Скидка]</span
          >
        </div>
        <div class="option">
          <span class="option__title">Доставка:</span>
          <div class="option__body">
            <div class="option__radio-body">
              <input
                type="radio"
                class="option__radio-btn"
                id="option__radio-1"
                value="Самовывоз"
                v-model="selectedDelivery"
              />
              <label class="option__label" :for="'option__radio-1'"
                >Самовывоз из Магазина</label
              >
            </div>
            <div class="option__radio-body">
              <input
                type="radio"
                class="option__radio-btn"
                id="option__radio-2"
                value="Ростов-на-Дону, ул. Доватора"
                v-model="selectedDelivery"
              />
              <label class="option__label" :for="'option__radio-2'"
                >Ростов-на-Дону, ул. Доватора</label
              >
            </div>
            <div class="option__radio-body">
              <input
                type="radio"
                class="option__radio-btn"
                id="option__radio-3"
                value="Москва, Сокольническая площадь"
                v-model="selectedDelivery"
              />
              <label class="option__label" :for="'option__radio-3'"
                >Москва, Сокольническая площадь</label
              >
            </div>
            <div class="option__radio-body">
              <input
                type="radio"
                class="option__radio-btn"
                id="option__radio-4"
                value="СДЭК"
                v-model="selectedDelivery"
              />
              <label class="option__label" :for="'option__radio-4'">СДЭК</label>
            </div>
            <span v-if="showDeliveryMessage" class="error-message">
              Выберите вариант доставки
            </span>
          </div>
        </div>
        <div class="option">
          <span class="option__title">Оплата:</span>
          <div class="option__body">
            <div class="option__radio-body">
              <input
                type="radio"
                class="option__radio-btn"
                id="option__radio-5"
                value="Онлайн оплата"
                v-model="selectedPayment"
              />
              <label class="option__label" :for="'option__radio-5'"
                >Онлайн оплата</label
              >
            </div>
            <div class="option__radio-body">
              <input
                type="radio"
                class="option__radio-btn"
                id="option__radio-6"
                value="Картой при получении"
                v-model="selectedPayment"
              />
              <label class="option__label" :for="'option__radio-6'"
                >Картой при получении</label
              >
            </div>
            <div class="option__radio-body">
              <input
                type="radio"
                class="option__radio-btn"
                id="option__radio-7"
                value="Наличными при получении"
                v-model="selectedPayment"
              />
              <label class="option__label" :for="'option__radio-7'"
                >Наличными при получении</label
              >
            </div>
            <span v-if="showPaymentMessage" class="error-message">
              Выберите способ оплаты
            </span>
          </div>
        </div>
        <div class="body">
          <input
            v-model="isAgreementChecked"
            type="checkbox"
            class="body__checkbox"
            id="body__checkbox-8"
          />
          <label class="body__label" :for="'body__checkbox-8'"
            >Я соглашаюсь на обработку персональных данных в соответствии с
            <span class="body__label--underlined"
              >политикой конфиденциальности</span
            ></label
          >
        </div>
        <span v-if="!isAgreementChecked" class="error-message">
          Согласитесь с политикой конфиденциальности
        </span>
        <UIButton
          :content="'Оформить заказ'"
          :width="'100%'"
          :btnType="'submit'"
        ></UIButton>
      </div>
    </div>
  </form>
  <div v-if="isPromoOpened" class="promo-shadow">
    <button @click="closePromo" class="promo-shadow__close-btn">
      <img src="/imgs/cross.svg" alt="cross" />
    </button>
    <form @submit.prevent="applyPromoCode" class="promo">
      <input v-model="promoCode" type="text" class="promo__field" />
      <UIButton :content="'ПРИМЕНИТЬ ПРОМОКОД'"></UIButton>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from "@/store/Cart";
import { useOrderStore } from "@/store/Order";

const cartStore = useCartStore();
onMounted(async () => {
  await cartStore.fetchCart(localStorage.getItem("userId")! as string);
});
const cartProducts = computed(() => cartStore.cart);

const discountedTotalSum = computed(() => {
  return cartStore.totalSum - discountSubTotal.value;
});
const discountSubTotal = computed(() => cartStore.discountSubTotal);

const selectedDelivery = ref<string | null>(null);
const selectedPayment = ref<string | null>(null);
const isAgreementChecked = ref<boolean>(true);

const isPromoOpened = ref(false);
const openPromo = () => {
  isPromoOpened.value = true;
  window.scrollTo(0, 0);
  document.body.style.overflow = "hidden";
};
const closePromo = () => {
  isPromoOpened.value = false;
  document.body.style.overflow = "";
};

const promoCode = ref("");
const applyPromoCode = () => {
  const promo = cartStore.validPromoCodes.find(
    (promo) => promo.code === promoCode.value.toUpperCase()
  );

  if (promo) {
    cartStore.applyPromoCode(promoCode.value);
    isPromoOpened.value = false;
    document.body.style.overflow = "";
  }
};

const region = ref<string>("");
const city = ref<string>("");
const street = ref<string>("");
const index = ref<string>("");
const houseNum = ref<string>("");
const regionIsEmpty = ref(false);
const cityIsEmpty = ref(false);
const streetIsEmpty = ref(false);
const indexIsEmpty = ref(false);
const houseNumIsEmpty = ref(false);
const regionOnInput = () => {
  regionIsEmpty.value = region.value === "";
};
const cityOnInput = () => {
  cityIsEmpty.value = city.value === "";
};
const streetOnInput = () => {
  streetIsEmpty.value = street.value === "";
};
const indexOnInput = () => {
  indexIsEmpty.value = index.value === "";
};
const houseNumOnInput = () => {
  houseNumIsEmpty.value = houseNum.value === "";
};
const showDeliveryMessage = ref(false);
const showPaymentMessage = ref(false);
const validateForm = () => {
  if (region.value === "") {
    regionIsEmpty.value = true;
  } else {
    regionIsEmpty.value = false;
  }

  if (city.value === "") {
    cityIsEmpty.value = true;
  } else {
    cityIsEmpty.value = false;
  }

  if (street.value === "") {
    streetIsEmpty.value = true;
  } else {
    streetIsEmpty.value = false;
  }

  if (index.value === "") {
    indexIsEmpty.value = true;
  } else {
    indexIsEmpty.value = false;
  }

  if (houseNum.value === "") {
    houseNumIsEmpty.value = true;
  } else {
    houseNumIsEmpty.value = false;
  }

  if (selectedDelivery.value === null) {
    showDeliveryMessage.value = true;
  } else {
    showDeliveryMessage.value = false;
  }

  if (selectedPayment.value === null) {
    showPaymentMessage.value = true;
  } else {
    showPaymentMessage.value = false;
  }
};
const orderStore = useOrderStore();
const router = useRouter();
const order = () => {
  validateForm();

  if (
    region.value !== "" &&
    city.value !== "" &&
    street.value !== "" &&
    index.value !== "" &&
    houseNum.value !== "" &&
    selectedDelivery.value !== null &&
    selectedPayment.value !== null &&
    isAgreementChecked.value
  ) {
    orderStore.submitOrder(selectedDelivery.value, selectedPayment.value!);
    router.push("/Order");
  }
};
watch(selectedDelivery, (newValue) => {
  if (newValue) {
    showDeliveryMessage.value = false;
  }
});
watch(selectedPayment, (newValue) => {
  if (newValue) {
    showPaymentMessage.value = false;
  }
});
</script>

<style lang="scss" scoped>
@import "@/assets/App.scss";
.container {
  display: flex;
  flex-direction: column;
  gap: 1.875rem;
}
.title {
  margin: 0.75rem 0 0.938rem 0;
}
.promo-shadow {
  display: flex;
  align-items: center;
  position: absolute;
  background: rgba(0, 0, 0, 0.747);
  width: 100%;
  height: 100vh;
  left: 0rem;
  top: 0rem;
  z-index: 2;

  &__close-btn {
    @include btn;
    position: absolute;
    top: 0.75rem;
    right: 0.75rem;
  }
}
.promo {
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  margin: 0 auto;

  &__field {
    outline: none;
    background-color: #fff;
    border: none;
    border-bottom: 1px solid #d1d1d1;
    padding: 1.031rem 1.25rem;
    font-family: "Pragmatica Book";
    font-size: 1rem;
    color: #2b2b2b;
  }
  &__field::placeholder {
    font-family: "Pragmatica Book";
    font-size: 1rem;
    color: #2b2b2b;
  }
  &__btn {
    @include btn;
    padding: 0.625rem 0;
    border: 1px solid $Light-Black;
    background-color: #d1d1d1;
    width: 100%;
    font-family: "Pragmatica Medium";
    font-size: 0.75rem;
  }
}
.form {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.563rem;
  border: 1px solid #eaeaea;
  padding: 6rem 0.938rem 0.938rem 0.938rem;
  flex-shrink: 0;
  height: fit-content;

  &__promo {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    padding: 1.25rem;
    background-color: #f8f8f8;
    font-family: "Pragmatica Medium";
    font-size: 0.875rem;
    line-height: 20px;
    color: #383838;
  }
  &__promo--underlined {
    border-bottom: 1px solid $Dark-Orange;
    color: $Dark-Orange;
  }
  &__container {
    display: flex;
    flex-direction: column;
    gap: 1.563rem;
  }
  &__body {
    display: flex;
    flex-direction: column;
    gap: 0.313rem;
  }
  &__title {
    font-family: "Pragmatica Book";
    font-size: 0.938rem;
    line-height: 27px;
  }
  &__field {
    padding: 1.031rem 1.25rem;
    border: 1px solid #d6d6d6;
    outline: none;
    font-family: "Pragmatica Book";
    font-size: 1rem;
    color: #000;
  }
  &__title--red {
    color: #ff1515;
  }
  &__textarea {
    padding: 0.938rem 1.25rem;
    border: 1px solid #d6d6d6;
    outline: none;
    height: 101px;
    resize: none;
    font-family: "Pragmatica Book";
    font-size: 1rem;
    color: #000;
  }
  &__field::placeholder,
  &__textarea::placeholder {
    font-family: "Pragmatica Book";
    font-size: 1rem;
    color: #c1c1c1;
  }
  &__field:focus,
  &__textarea:focus {
    border: 1px solid #000;
  }
}
.order {
  display: flex;
  flex-direction: column;
  gap: 1.563rem;
  padding: 0.938rem;
  border: 3px solid #eaeaea;

  &__title {
    font-family: "Pragmatica Medium";
    font-size: 1.438rem;
    line-height: 32px;
    color: #1d1d27;
  }
  &__product-list {
    display: flex;
    flex-direction: column;
    gap: 1.563rem;
  }
}
.summary {
  display: flex;
  flex-direction: column;
  gap: 1.563rem;

  &__sum {
    display: flex;
    align-items: center;
    gap: 0.938rem;
  }
  &__sum-title {
    font-family: "Pragmatica Book";
    font-size: 1.125rem;
  }
  &__sum-border {
    min-width: 10px;
    width: 100%;
    border-bottom: 1px dotted #d1d1d1;
  }
  &__total-discount {
    font-family: "Pragmatica Book";
    font-size: 0.875rem;
    color: #38cb89;
    white-space: nowrap;
    text-align: right;
    margin: -0.938rem 0;
  }
  &__sum-text {
    font-family: "Pragmatica Book";
    font-size: 1.188rem;
    white-space: nowrap;
  }
}
.option {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  &__title {
    font-family: "Pragmatica Book";
    font-size: 1.125rem;
  }
  &__body {
    display: flex;
    flex-direction: column;
    gap: 0.938rem;
  }
  &__radio-body {
    display: flex;
    align-items: center;
    gap: 0.625rem;
  }
  &__radio-btn {
    accent-color: black;
    width: 21px;
    height: 21px;
    margin: 0;
    flex-shrink: 0;
    cursor: pointer;
  }
  &__label {
    font-family: "Pragmatica Book";
    font-size: 0.938rem;
    color: #474747;
    cursor: pointer;
  }
}
.body {
  display: flex;
  align-items: start;
  gap: 0.625rem;

  &__checkbox[type="checkbox"] {
    flex-shrink: 0;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    width: 22px;
    height: 22px;
    border: 1px solid #d6d6d6;
    margin: 0;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  &__checkbox[type="checkbox"]:checked {
    border: none;
  }
  &__checkbox[type="checkbox"]:checked:before {
    content: "";
    background: url("/imgs/tick.svg") no-repeat center center / 14px 10px;
    display: flex;
    width: 100%;
    height: 100%;
    color: #fff;
    background-color: $Dark-Black;
    font-size: 14px;
    text-align: center;
  }
  &__label {
    font-family: "Pragmatica Book";
    font-size: 0.813rem;
    color: #474747;
    cursor: pointer;
  }
  &__label--underlined {
    border-bottom: 1px solid #474747;
  }
}
.error-message {
  font-family: "Pragmatica Book";
  line-height: 0.938rem;
  color: #f81d2a;
}
.invalid-field {
  border: 1px solid #f81d2a;
  color: #f81d2a;
}
.invalid-field::placeholder {
  color: #f81d2a;
}
/* 768px = 48em */
@media (min-width: 48em) {
  .title {
    margin: 0.938rem 0 1.125rem 0;
  }
  .form {
    &__container {
      flex-direction: row;
    }
    &__body {
      width: 100%;
    }
  }
}
/* 1200px = 75em */
@media (min-width: 75em) {
  .container {
    flex-direction: row;
    gap: 1.25rem;
  }
  .title {
    margin: 1.563rem 0 2.5rem 0;
  }
  .form {
    width: 700px;
  }
}
/* 1440px = 90em */
@media (min-width: 90em) {
  .form {
    width: 900px;
  }
}
</style>
