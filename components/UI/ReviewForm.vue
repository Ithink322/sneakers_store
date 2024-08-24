<template>
  <div v-if="isContainerVisible" class="leave-review-shadow">
    <div class="leave-review">
      <form
        @submit.prevent="handleLeaveReview"
        v-if="isLeaveReviewShown"
        class="leave-review__container"
      >
        <button @click="closeLeaveReview" class="leave-review__close-btn">
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.7"
              d="M9.66937 0.226864C9.52925 0.0864247 9.33901 0.0075 9.14062 0.0075C8.94224 0.0075 8.752 0.0864247 8.61188 0.226864L4.94438 3.88686L1.27688 0.219364C1.13675 0.0789247 0.946513 0 0.748125 0C0.549737 0 0.359499 0.0789247 0.219375 0.219364C-0.073125 0.511864 -0.073125 0.984364 0.219375 1.27686L3.88687 4.94436L0.219375 8.61186C-0.073125 8.90436 -0.073125 9.37686 0.219375 9.66936C0.511875 9.96186 0.984375 9.96186 1.27688 9.66936L4.94438 6.00186L8.61188 9.66936C8.90438 9.96186 9.37687 9.96186 9.66937 9.66936C9.96187 9.37686 9.96187 8.90436 9.66937 8.61186L6.00187 4.94436L9.66937 1.27686C9.95437 0.991864 9.95437 0.511864 9.66937 0.226864Z"
              fill="#454A4C"
            />
          </svg>
        </button>
        <span class="leave-review__title">Оставить отзыв к товару</span>
        <span v-if="isRatingNoticeVisible" class="leave-review__rating-notice"
          >Поставьте оценку, пожалуйста</span
        >
        <div class="leave-review__rating-body">
          <span class="leave-review__rating-text">Ваша оценка</span>
          <NuxtRating
            :ratingSize="19"
            :ratingSpacing="3"
            :ratingStep="0.5"
            :activeColor="'#454A4C'"
            :inactiveColor="'#D3D3D3'"
            :ratingValue="0"
            :read-only="false"
            @ratingSelected="handleRatingSelected"
          />
        </div>
        <div class="leave-review__field-container">
          <span class="leave-review__field-title">Текст отзыва</span>
          <span v-if="isReviewTextEmpty" class="leave-review__field-text-notice"
            >Напишите отзыв, пожалуйста</span
          >
          <span
            v-if="!isTextNoticeValid"
            class="leave-review__field-text-notice"
            >Напишите отзыв без специальных символов
          </span>
          <textarea
            @input="reviewTextOnInput"
            class="leave-review__field"
            placeholder="Текст"
            v-model="reviewText"
          ></textarea>
        </div>
        <div @click="triggerFileInput" class="leave-review__img-upload-area">
          <span
            v-if="!uploadImgs.length"
            class="leave-review__upload-area-text"
          >
            <span class="leave-review__upload-area-text--medium"
              >Нажмите для загрузки</span
            ><br />
            Доступные расширения фото: jpeg, jpg, png, webp
          </span>
          <div v-else class="leave-review__img-preview">
            <div
              v-for="(img, index) in uploadImgs"
              :key="index"
              class="leave-review__img-container"
            >
              <button
                type="button"
                @click="deleteImage(index, $event)"
                class="leave-review__delete-btn"
              >
                <img src="public/imgs/cross-round-borders.png" alt="" />
              </button>
              <img :src="img" alt="upload-image" class="leave-review__img" />
            </div>
          </div>
          <input
            type="file"
            ref="fileInput"
            class="leave-review__input"
            accept="image/jpeg, image/jpg, image/png, image/webp"
            @change="handleFileChange"
            multiple
          />
        </div>
        <UIButton
          type="submit"
          class="leave-review__btn"
          :content="'Оставить отзыв'"
        ></UIButton>
      </form>
      <div v-if="isLoading" class="leave-review__loading-container">
        <div ref="progressRing" class="leave-review__progress-ring"></div>
        <span class="leave-review__loading-text">
          Подождите, идет<br />
          загрузка изображений
        </span>
      </div>
      <div
        v-if="isMessageVisible"
        class="leave-review__thanks-message thanks-message"
      >
        <button @click="closeThanksMessage" class="thanks-message__close-btn">
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.7"
              d="M9.66937 0.226864C9.52925 0.0864247 9.33901 0.0075 9.14062 0.0075C8.94224 0.0075 8.752 0.0864247 8.61188 0.226864L4.94438 3.88686L1.27688 0.219364C1.13675 0.0789247 0.946513 0 0.748125 0C0.549737 0 0.359499 0.0789247 0.219375 0.219364C-0.073125 0.511864 -0.073125 0.984364 0.219375 1.27686L3.88687 4.94436L0.219375 8.61186C-0.073125 8.90436 -0.073125 9.37686 0.219375 9.66936C0.511875 9.96186 0.984375 9.96186 1.27688 9.66936L4.94438 6.00186L8.61188 9.66936C8.90438 9.96186 9.37687 9.96186 9.66937 9.66936C9.96187 9.37686 9.96187 8.90436 9.66937 8.61186L6.00187 4.94436L9.66937 1.27686C9.95437 0.991864 9.95437 0.511864 9.66937 0.226864Z"
              fill="#454A4C"
            />
          </svg>
        </button>
        <div ref="animatedTick" class="thanks-message__tick"></div>
        <span class="thanks-message__title"> Отзыв отправлен </span>
        <span class="thanks-message__text"
          >Спасибо, ваш отзыв<br class="thanks-message__text-br--till1200px" />
          успешно опубликован.</span
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import lottie from "lottie-web";
import { useReviewsStore } from "@/store/Reviews";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { useAuthStore } from "@/store/Auth";
import { useProductsStore } from "@/store/Products";

const isLeaveReviewShown = inject("isLeaveReviewShown") as Ref<boolean>;
const isContainerVisible = inject("isContainerVisible") as Ref<boolean>;

const closeLeaveReview = () => {
  isLeaveReviewShown.value = false;
  isContainerVisible.value = false;
  document.body.style.overflow = "";
  uploadImgs.value = [];
};

const fileInput = ref<HTMLInputElement | null>(null);
const uploadImgs = ref<string[]>([]);
const triggerFileInput = () => {
  if (fileInput.value) {
    fileInput.value.click();
  }
};
const handleFileChange = (event: Event) => {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files.length > 0) {
    for (const file of input.files) {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        if (e.target?.result) {
          uploadImgs.value.push(e.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  }
};
const deleteImage = (index: number, event: Event) => {
  event.stopPropagation();
  uploadImgs.value.splice(index, 1);
};

const ratingValue = ref<number>(0);
const reviewText = ref<string>("");
const reviewTextPattern = /^[A-Za-zА-Яа-я0-9\s.,!?@()"'&-]+$/;
const isRatingNoticeVisible = ref(false);
const isReviewTextEmpty = ref(false);
const isTextNoticeValid = ref(true);
const isLoading = ref(false);
const progressRing = ref<HTMLElement | null>(null);
const isMessageVisible = ref(false);
const animatedTick = ref<HTMLElement | null>(null);
const animationOfTick = ref<any>(null);

const handleRatingSelected = (value: number) => {
  ratingValue.value = value;
  isRatingNoticeVisible.value = false;
};

const reviewTextOnInput = () => {
  isReviewTextEmpty.value = reviewText.value === "";
  isTextNoticeValid.value = true;
};

const route = useRoute();
const reviewsStore = useReviewsStore();
const store = useProductsStore();
const authStore = useAuthStore();
const fio = computed(() => authStore.fio);
const handleLeaveReview = async () => {
  isRatingNoticeVisible.value = false;
  isReviewTextEmpty.value = false;
  const trimmedReviewText = reviewText.value.trim();
  isTextNoticeValid.value = reviewTextPattern.test(trimmedReviewText);

  if (ratingValue.value === 0 && !trimmedReviewText) {
    isRatingNoticeVisible.value = true;
    isReviewTextEmpty.value = true;
    isTextNoticeValid.value = false;
    return;
  } else if (
    ratingValue.value === 0 &&
    !reviewTextPattern.test(trimmedReviewText)
  ) {
    isRatingNoticeVisible.value = true;
    isReviewTextEmpty.value = false;
    isTextNoticeValid.value = true;
    return;
  } else if (ratingValue.value === 0) {
    isRatingNoticeVisible.value = true;
    return;
  } else if (!trimmedReviewText) {
    isReviewTextEmpty.value = true;
    isTextNoticeValid.value = false;
    return;
  } else if (!reviewTextPattern.test(trimmedReviewText)) {
    isReviewTextEmpty.value = false;
    isTextNoticeValid.value = true;
    return;
  }

  isLoading.value = true;
  const date = format(new Date(), "d MMMM yyyy", { locale: ru });
  const review = {
    productId: Number(route.params.id),
    username: fio.value,
    rating: ratingValue.value,
    date: date,
    text: reviewText.value,
    imgs: uploadImgs.value,
  };
  reviewsStore.addReview(review);
  await reviewsStore.updateProductRatings(
    store.filteredProducts,
    Number(route.params.id)
  );
  nextTick(() => {
    const animation = lottie.loadAnimation({
      container: progressRing.value!,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/animations/progress-ring.json",
    });
    setTimeout(() => {
      isLoading.value = false;
      animation.destroy();
      isLeaveReviewShown.value = false;
      reviewText.value = "";
      isMessageVisible.value = true;
      nextTick(() => {
        if (animatedTick.value) {
          animationOfTick.value = lottie.loadAnimation({
            container: animatedTick.value!,
            renderer: "svg",
            loop: false,
            autoplay: true,
            path: "/animations/tick.json",
          });
        }
      });
    }, 2800);
  });
};
const closeThanksMessage = () => {
  isLeaveReviewShown.value = false;
  isContainerVisible.value = false;
  isMessageVisible.value = false;
  animationOfTick.value!.destroy();
  document.body.style.overflow = "";
  reviewText.value = "";
  uploadImgs.value = [];
};
</script>

<style lang="scss" scoped>
@import "@/assets/App.scss";
.leave-review-shadow {
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.747);
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
}
.leave-review {
  position: relative;
  padding: 1.25rem;
  margin: 9.25rem 0.938rem;
  background-color: #fff;

  &__container {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }
  &__close-btn {
    position: absolute;
    @include btn;
    top: 0.625rem;
    right: 0.625rem;
  }
  &__title {
    text-align: center;
    font-family: "Pragmatica Medium";
    font-size: 1.375rem;
    color: #2c2f30;
  }
  &__rating-notice {
    text-align: center;
    font-family: "Pragmatica Book";
    font-size: 0.875rem;
    color: #ff6915;
    margin-bottom: -1rem;
  }
  &__rating-body {
    display: flex;
    align-items: center;
    gap: 0.438rem;
    margin: 0 auto;
  }
  &__rating-text {
    font-family: "Pragmatica Book";
    font-size: 0.875rem;
    color: #545454;
  }
  &__field-container {
    display: flex;
    flex-direction: column;
    gap: 0.313rem;
  }
  &__field-title {
    font-family: "Pragmatica Book";
    font-size: 0.938rem;
    color: $Dark-Black;
  }
  &__field {
    font-family: "Pragmatica Book";
    font-size: 1rem;
    padding: 0.938rem 1.25rem;
    border: 2px solid #d6d6d6;
    outline: none;
    min-height: 101px;
    height: fit-content;
    resize: none;
  }
  &__field::placeholder {
    font-family: "Pragmatica Book";
    font-size: 1rem;
    color: #c1c1c1;
  }
  &__field:focus {
    border: 2px solid $Dark-Black;
  }
  &__field-text-notice {
    font-family: "Pragmatica Book";
    font-size: 0.938rem;
    color: #ff6915;
  }
  &__img-upload-area {
    border: 2px dashed #d3d3d3;
    padding: 1.375rem 0.625rem;
  }
  &__upload-area-text {
    display: block;
    text-align: center;
    font-family: "Pragmatica Book";
    font-size: 0.813rem;
    color: #838383;
    line-height: 18px;
  }
  &__upload-area-text--medium {
    font-family: "Pragmatica Medium";
    font-size: 0.938rem;
  }
  &__btn {
    margin: 0 auto;
  }
  &__img-preview {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1.025rem;
  }
  &__delete-btn {
    position: absolute;
    @include btn;
    background-color: $Light-Orange;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    padding: 2px;
    margin-left: 5.5rem;
    margin-top: -0.3rem;
  }
  &__delete-btn img {
    width: 16px;
    height: 16px;
  }
  &__img {
    flex-shrink: 0;
    width: 100px;
    height: 100px;
  }
  &__input {
    display: none;
  }
  &__loading-container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    @include flex-centered;
    flex-direction: column;
    gap: 1.563rem;
    background-color: #fff;
    opacity: 90%;
  }
  &__progress-ring {
    width: 74px;
    height: 74px;
  }
  &__loading-text {
    text-align: center;
    font-family: "Pragmatica Medium";
    font-size: 1rem;
    color: #4d4d4d;
  }
}
.thanks-message {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background-color: #fff;
  margin: 1.25rem 0;

  &__close-btn {
    position: absolute;
    @include btn;
    top: 0.625rem;
    right: 0.625rem;
  }
  &__tick {
    width: 195px;
    height: 195px;
    margin: 0 auto;
  }
  &__title {
    text-align: center;
    font-family: "Pragmatica Medium";
    font-size: 1.375rem;
    color: #2c2f30;
    margin-top: -3.75rem;
  }
  &__text {
    text-align: center;
    font-family: "Pragmatica Book";
    font-size: 0.938rem;
    line-height: 1.5rem;
    color: #545454;
    margin-top: -0.938rem;
  }
}
/* 768px = 48em */
@media (min-width: 48em) {
  .leave-review {
    width: 612px;
    margin: 9.25rem auto;
  }
}
/* 1200px = 75em */
@media (min-width: 75em) {
  .leave-review {
    width: 705px;
    padding: 2.5rem;

    &__container {
      gap: 2.125rem;
    }
    &__rating-notice {
      margin-bottom: -1.375rem;
    }
    &__title {
      font-size: 2.188rem;
    }
  }
  .thanks-message {
    &__title {
      font-size: 2.188rem;
    }
    &__text {
      font-size: 1.063rem;
    }
    &__text-br--till1200px {
      display: none;
    }
  }
}
</style>
