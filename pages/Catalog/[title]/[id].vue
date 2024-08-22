<template>
  <div v-if="product">
    <UIBreadcrumb :breadcrumbTitle="product.title"></UIBreadcrumb>
    <div class="container">
      <div class="heroes-body">
        <div
          class="heroes-body__category"
          :style="{ backgroundColor: product.categoryBackgroundColor }"
        >
          {{ product.discount ? product.discount : product.category }}
        </div>
        <button class="heroes-body__wishlist-btn">
          <svg
            viewBox="0 0 23 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.4927 2.41114C18.0165 1.96386 17.4506 1.60896 16.8275 1.36681C16.2045 1.12465 15.5365 1 14.8618 1C14.1872 1 13.5191 1.12465 12.8961 1.36681C12.273 1.60896 11.7071 1.96386 11.2309 2.41114L10.5 3.10415L9.76908 2.41114C9.29286 1.96386 8.72699 1.60896 8.10392 1.36681C7.48085 1.12465 6.81284 1 6.1382 1C5.46355 1 4.79554 1.12465 4.17247 1.36681C3.5494 1.60896 2.98353 1.96386 2.50731 2.41114C0.494903 4.29472 0.3715 7.47548 2.906 9.89215L10.5 17L18.094 9.89215C20.6285 7.47548 20.5051 4.29472 18.4927 2.41114Z"
              stroke="#211D19"
              stroke-width="1.4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <img class="heroes-body__hero" :src="selectedHero" alt="Main hero" />
        <div class="heroes-slider">
          <div
            class="heroes-slider__wrapper"
            :style="{ transform: `translateX(${translateValue}px)` }"
          >
            <img
              v-for="(hero, index) in product.heroes"
              :key="index"
              @click="selectHero(hero, index)"
              class="heroes-slider__small-hero"
              :src="hero"
              alt="small-hero"
              :class="{ active: selectedHero && selectedIndex === index }"
            />
          </div>
        </div>
      </div>
      <div class="details">
        <h1 class="details__title">Кроссовки {{ product.title }}</h1>
        <p
          class="details__desc"
          v-html="showFullDescription ? product.desc : shortDescription"
        ></p>
        <button class="details__desc-toggle-btn" @click="toggleDescription">
          {{ showFullDescription ? "Скрыть описание" : "Полное описание" }}
        </button>
        <div class="details__colors">
          Цвета:
          <button
            @click="setActiveColor(index, color)"
            class="details__color-btn"
            v-for="(color, index) in product.colors"
            :key="color"
            :class="{ active: activeColorIndex === index }"
          >
            <div
              class="details__color-btn-fill"
              :style="{ backgroundColor: color }"
            ></div>
          </button>
        </div>
        <div class="details__size-info">
          <span class="details__size-text">Размер (EU):</span>
          <button @click="openSizesChart" class="details__size-chart-btn">
            Размерная таблица
          </button>
        </div>
        <div class="details__sizes-body">
          <button
            @click="setActiveSize(index)"
            class="details__size-btn"
            v-for="(size, index) in product.sizes"
            :key="size"
            :class="{ active: activeSizeIndex === index }"
          >
            {{ size }}
          </button>
        </div>
        <div class="details__content">
          <div class="details__prices">
            <div class="details__previous-price">
              {{ product.previousPrice }}
            </div>
            <span class="details__current-price">{{
              product.currentPrice
            }}</span>
          </div>
          <div class="details__counter">
            <button class="details__counter-btn details__decrease-btn">
              -
            </button>
            <span class="details__counter-text">1</span>
            <button class="details__counter-btn details__increase-btn">
              +
            </button>
          </div>
        </div>
        <UIButton
          class="details__add-to-cart-btn"
          :content="'Добавить в корзину'"
          :icon="'/imgs/add-to-cart-icon.svg'"
          :width="buttonWidth"
        ></UIButton>
      </div>
    </div>
    <div v-if="isSizesChartOpened" class="sizes-chart-shadow">
      <div class="sizes-chart">
        <button @click="closeSizesChart" class="sizes-chart__close-btn">
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
        <span class="sizes-chart__title">Размерная таблица</span>
        <p class="sizes-chart__text">
          Вам понадобится сделать измерения с помощью линейки или сантиметровой
          ленты. Для определения нужного размера необходимо соотнести полученную
          длину с размерами в таблице.
        </p>
        <p class="sizes-chart__text">
          Поставьте ногу на чистый лист бумаги. Отметьте крайние границы ступни
          и измерьте расстояние между самыми дальними точками стопы.
        </p>
        <p class="sizes-chart__text">
          Округление производится в большую сторону. Например если у вас
          получился результат 27,7 см, то его нужно округлить до длины которая
          есть в таблице - в данном случае до 28 см.
        </p>
        <div class="sizes-chart__table-name">Таблица соответствия размеров</div>
        <table>
          <thead>
            <tr>
              <th>
                Длина<br />
                ноги, см
              </th>
              <th>EU</th>
              <th>RUS</th>
              <th>US</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>22,5</td>
              <td>36</td>
              <td>35</td>
              <td>5,5</td>
            </tr>
            <tr>
              <td>23,5</td>
              <td>37</td>
              <td>36</td>
              <td>6</td>
            </tr>
            <tr>
              <td>24,5</td>
              <td>38</td>
              <td>37</td>
              <td>6,5</td>
            </tr>
            <tr>
              <td>25</td>
              <td>39</td>
              <td>38</td>
              <td>7,5</td>
            </tr>
            <tr>
              <td>25,5</td>
              <td>40</td>
              <td>39</td>
              <td>8</td>
            </tr>
            <tr>
              <td>26</td>
              <td>41</td>
              <td>40</td>
              <td>8,5</td>
            </tr>
            <tr>
              <td>26,5</td>
              <td>42</td>
              <td>41</td>
              <td>9</td>
            </tr>
            <tr>
              <td>27,5</td>
              <td>43</td>
              <td>42</td>
              <td>10</td>
            </tr>
            <tr>
              <td>28</td>
              <td>44</td>
              <td>43</td>
              <td>10,5</td>
            </tr>
            <tr>
              <td>29</td>
              <td>45</td>
              <td>44</td>
              <td>11,5</td>
            </tr>
            <tr>
              <td>29,5</td>
              <td>46</td>
              <td>45</td>
              <td>12</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="info">
      <div class="info__slider-wrapper" ref="container">
        <div class="info__slider-btns" ref="wrapper">
          <div
            @click="showSection('desc', $event)"
            class="info__btn"
            :class="{ active: activeSection === 'desc' }"
          >
            ОПИСАНИЕ
          </div>
          <div
            @click="showSection('specs', $event)"
            class="info__btn"
            :class="{ active: activeSection === 'specs' }"
          >
            ХАРАКТЕРИСТИКИ
          </div>
          <div
            @click="showSection('reviews', $event)"
            class="info__btn"
            :class="{ active: activeSection === 'reviews' }"
          >
            ОТЗЫВЫ
          </div>
        </div>
      </div>
      <p
        v-if="activeSection === 'desc'"
        class="info__desc"
        v-html="product.desc"
      ></p>
      <div v-if="activeSection === 'specs'" class="info__specs">
        <div class="info__spec">
          <span class="info__spec-name">Пол</span>
          <div class="info__spec-border"></div>
          <span class="info__spec-text">{{ product.specs.gender }}</span>
        </div>
        <div class="info__spec">
          <span class="info__spec-name">Цвет</span>
          <div class="info__spec-border"></div>
          <span class="info__spec-text">{{ activeColor }}</span>
        </div>
        <div class="info__spec">
          <span class="info__spec-name">Страна</span>
          <div class="info__spec-border"></div>
          <span class="info__spec-text">{{ product.specs.country }}</span>
        </div>
        <div class="info__spec">
          <span class="info__spec-name">Состав</span>
          <div class="info__spec-border"></div>
          <span class="info__spec-text info__spec-text--wrap">{{
            product.specs.composition
          }}</span>
        </div>
        <div class="info__spec">
          <span class="info__spec-name">Коллекция</span>
          <div class="info__spec-border"></div>
          <span class="info__spec-text">{{ product.specs.collection }}</span>
        </div>
        <div class="info__spec">
          <span class="info__spec-name">Гарантия</span>
          <div class="info__spec-border"></div>
          <span class="info__spec-text">{{ product.specs.warranty }}</span>
        </div>
        <div class="info__spec">
          <span class="info__spec-name">Год выпуска</span>
          <div class="info__spec-border"></div>
          <span class="info__spec-text">{{ product.specs.yearOfRelease }}</span>
        </div>
      </div>
      <div class="info__reviews" v-if="activeSection === 'reviews'">
        <UIReviewsList></UIReviewsList>
        <UIPagination
          v-if="allReviews.length > 4"
          class="info__pagination"
          :container="container"
        ></UIPagination>
        <button
          @click="openLeaveReview"
          class="info__leave-review-btn"
          :style="{ 'margin-top': marginTop }"
        >
          ОСТАВИТЬ ОТЗЫВ
        </button>
      </div>
    </div>
    <UIReviewForm></UIReviewForm>
    <UIProductsSlider
      class="products-slider"
      :title="'ПОХОЖИЕ<br/> КРОССОВКИ'"
      :latestProducts="latestProducts"
    ></UIProductsSlider>
    <UIProductsSlider
      :title="'ВОЗМОЖНО<br/> ЗАИНТЕРЕСУЕТ'"
      :hitProducts="hitProducts"
    ></UIProductsSlider>
  </div>
</template>

<script setup lang="ts">
import { products } from "@/data/CatalogProducts";
import type { Product } from "@/types/Product";
import { latestProducts } from "@/data/ProductsInSlider";
import { hitProducts } from "@/data/ProductsInSlider";
import { useReviewsStore } from "@/store/Reviews";

const product = ref<Product>();
const route = useRoute();
const fetchProduct = () => {
  product.value = products.find(
    (product) => product.id === Number(route.params.id)
  );
};

const checkTitleValidity = () => {
  const title = products.find(
    (product) => slugify(product.title) === (route.params.title as string)
  );
  if (!title) {
    throw createError({ statusCode: 404, statusMessage: "Page Not Found" });
  }
};
const reviewsStore = useReviewsStore();
const router = useRouter();
onMounted(() => {
  fetchProduct();
  checkTitleValidity();
  reviewsStore.currentPage = 1;
  const product = products.find(
    (product) => product.id === Number(route.params.id)
  );
  router.replace({
    params: {
      ...route.params,
      title: slugify(product!.title),
    },
    query: { page: 1 },
  });
});

watchEffect(() => {
  if (product.value) {
    useHead({
      title: `${product.value.title} - Sneakers Store`,
      meta: [
        {
          name: "description",
          content: `${product.value.desc} - Купите ${
            product.value!.title
          } в Sneakers Store!`,
        },
        {
          name: "keywords",
          content: `${product.value.title}, Nike, кроссовки Nike, ${
            product.value!.category
          }, купить Nike, интернет-магазин, Sneakers Store, доставка, цены`,
        },
      ],
    });
  }
});

const selectedHero = ref<string>();
const selectedIndex = ref(0);
watch(
  () => product.value,
  (newProduct) => {
    if (newProduct) {
      selectedHero.value = newProduct.heroes[0];
      selectedIndex.value = 0;
    }
  },
  { immediate: true }
);

const sliderWrapper = ref<HTMLElement | null>(null);
const buttons = ref<HTMLElement[]>([]);
onMounted(() => {
  initSlider();
  window.addEventListener("resize", handleWindowResize);
});
onBeforeUnmount(() => {
  window.removeEventListener("resize", handleWindowResize);
});

const handleWindowResize = () => {
  if (window.innerWidth < 768) {
    initSlider();
    updateTranslate();
  } else {
    translateValue.value = 0;
  }
};

const initSlider = () => {
  nextTick(() => {
    sliderWrapper.value = document.querySelector<HTMLElement>(
      ".heroes-slider__wrapper"
    );
    buttons.value = Array.from(
      sliderWrapper.value!.querySelectorAll<HTMLElement>(
        ".heroes-slider__small-hero"
      )
    );
  });
};

const selectHero = (hero: string, index: number) => {
  selectedHero.value = hero;
  selectedIndex.value = index;
  if (window.innerWidth < 768) {
    updateTranslate();
  }
};

const translateValue = ref(0);
const updateTranslate = async () => {
  await nextTick();

  if (sliderWrapper.value) {
    buttons.value = Array.from(
      sliderWrapper.value.querySelectorAll<HTMLElement>(
        ".heroes-slider__small-hero"
      )
    );

    const buttonWidth = buttons.value[0].offsetWidth;
    const gapValue = parseInt(
      window.getComputedStyle(sliderWrapper.value).getPropertyValue("gap")
    );

    let adjustedIndex = selectedIndex.value;
    if (adjustedIndex === product.value!.heroes.length - 1) {
      adjustedIndex = 0;
    }

    translateValue.value = -adjustedIndex * (buttonWidth + gapValue);
  }
};

const showFullDescription = ref(false);
const shortDescription = ref("");
onMounted(() => {
  const dashIndex = product.value!.desc.indexOf("<br/>");
  if (dashIndex !== -1) {
    shortDescription.value = product.value!.desc.substring(0, dashIndex);
  } else {
    shortDescription.value = product.value!.desc;
  }
});

const toggleDescription = () => {
  showFullDescription.value = !showFullDescription.value;
};

const activeColorIndex = ref(0);
const colorNames = {
  "#A8B7BF": "Серо-голубой",
  "#2A2C2D": "Угольно-черный",
  "#F81D2A": "Красный",
  "#F8F8F9": "Белый",
  "#6F97CC": "Синий",
  "#64E1CB": "Средний бирюзовый",
  "#4296C3": "Стальной синий",
  "#D81F64": "Цериз",
};
const activeColor = ref(product.value?.colors[0]);
const setActiveColor = (index: number, color: string) => {
  activeColorIndex.value = index;
  activeColor.value = colorNames[color as keyof typeof colorNames];
};
onMounted(() => {
  setActiveColor(0, product.value!.colors[0]);
});

const activeSizeIndex = ref(0);
const setActiveSize = (index: number) => {
  activeSizeIndex.value = index;
};

const isSizesChartOpened = ref(false);
const openSizesChart = () => {
  isSizesChartOpened.value = true;
  window.scrollTo(0, 0);
  document.body.style.overflow = "hidden";
};
const closeSizesChart = () => {
  isSizesChartOpened.value = false;
  document.body.style.overflow = "";
};

const windowWidth = ref(0);
const updateWidth = () => {
  windowWidth.value = window.innerWidth;
};
const buttonWidth = computed(() => {
  updateWidth();
  return windowWidth.value < 1200 ? "100%" : "307px";
});
onMounted(() => {
  window.addEventListener("resize", updateWidth);
});
onBeforeUnmount(() => {
  window.removeEventListener("resize", updateWidth);
});

const activeSection = ref("desc");
let wrapper = ref<HTMLElement | null>(null);
const showSection = (section: string, event: Event) => {
  activeSection.value = section;

  if (wrapper.value && window.innerWidth < 768) {
    const button = event.currentTarget as HTMLElement;
    const buttons = Array.from(wrapper.value.children) as HTMLElement[];
    const gap = parseInt(
      window.getComputedStyle(wrapper.value).getPropertyValue("gap")
    );

    const buttonIndex = buttons.indexOf(button);
    let totalWidth = 0;
    for (let i = 0; i < buttonIndex; i++) {
      totalWidth += buttons[i].offsetWidth + gap;
    }

    const translateX = totalWidth;
    wrapper.value.style.transform = `translateX(-${translateX}px)`;
  }
};

/* const startX = ref(0);
const endX = ref(0);
const handleTouchStart = (event: TouchEvent) => {
  startX.value = event.touches[0].clientX;
};
const handleTouchMove = (event: TouchEvent) => {
  endX.value = event.touches[0].clientX;
};
const handleTouchEnd = () => {
  const direction = startX.value - endX.value;

  if (window.innerWidth < 768) {
    if (direction > 0) {
      wrapper.value!.style.transform = `translateX(-100%)`;
    } else {
      wrapper.value!.style.transform = `translateX(0px)`;
    }
  }
}; */
const handleTouchMove = (event: TouchEvent) => {
  if (window.innerWidth < 768) {
    wrapper.value!.style.transform = `translateX(0px)`;
  }
};
const container = ref<HTMLElement | null>(null);
onMounted(() => {
  nextTick(() => {
    /* container.value!.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });
    container.value!.addEventListener("touchmove", handleTouchMove, {
      passive: true,
    });
    container.value!.addEventListener("touchend", handleTouchEnd, {
      passive: true,
    }); */
    container.value!.addEventListener("touchmove", handleTouchMove, {
      passive: true,
    });
  });
  window.addEventListener("resize", handleSLiderResize);
});
onBeforeUnmount(() => {
  window.removeEventListener("resize", handleSLiderResize);
});
const handleSLiderResize = () => {
  if (window.innerWidth >= 768) {
    wrapper.value!.style.transform = `translateX(0px)`;
  }
};

const isLeaveReviewShown = ref(false);
const isContainerVisible = ref(false);

provide("isLeaveReviewShown", isLeaveReviewShown);
provide("isContainerVisible", isContainerVisible);

const openLeaveReview = () => {
  isLeaveReviewShown.value = true;
  isContainerVisible.value = true;
  window.scrollTo(0, 0);
  document.body.style.overflow = "hidden";
};

reviewsStore.fetchReviews(Number(route.params.id));

const allReviews = computed(() => reviewsStore.allReviews);
const marginTop = ref("5.625rem");
if (allReviews.value.length <= 4 && allReviews.value.length > 0) {
  marginTop.value = "5.625rem";
} else if (allReviews.value.length > 4 || allReviews.value.length === 0) {
  marginTop.value = "0rem";
}
</script>

<style lang="scss" scoped>
@import "@/assets/App.scss";
.heroes-body {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.938rem;

  &__category {
    position: absolute;
    background-color: $Light-Orange;
    width: fit-content;
    padding: 0.625rem;
    margin: 0.938rem 0 0 0.938rem;
    font-family: "Pragmatica Medium";
    font-size: 0.688rem;
    color: #fff;
  }
  &__wishlist-btn {
    position: absolute;
    top: 0.938rem;
    right: 0.938rem;
    @include btn;
    width: 28px;
    height: 25px;
  }
}
.heroes-slider {
  overflow: hidden;

  &__wrapper {
    display: flex;
    gap: 0.938rem;
    transition: transform 0.3s ease;
  }
  &__small-hero {
    width: 90px;
    height: 90px;
    cursor: pointer;
  }
  &__small-hero.active {
    border: 2px solid $Dark-Black;
  }
}
.details {
  &__title {
    margin: 1.563rem 0 0.938rem 0;
  }
  &__desc {
    font-family: "Pragmatica Book";
    font-size: 0.875rem;
    line-height: 24px;
    margin: 0 0 0.625rem 0;
    color: #4b4b4b;
  }
  &__desc-toggle-btn {
    @include btn;
    border-bottom: 2px dotted #929292;
    font-family: "Pragmatica Book";
    font-size: 0.938rem;
    color: #4b4b4b;
  }
  &__colors {
    display: flex;
    align-items: center;
    gap: 0.625rem;
    margin: 2.188rem 0 1.313rem 0;
    font-family: "Pragmatica Book";
    font-size: 1rem;
    color: #2e2e2e;
  }
  &__color-btn {
    position: relative;
    @include btn;
    border-radius: 50%;
    width: 15px;
    height: 15px;

    &.active {
      width: 25px;
      height: 25px;
      padding: 5px;
      outline: 1px solid #a1a1a1;
    }
  }
  &__color-btn-fill {
    border-radius: 50%;
    width: 15px;
    height: 15px;
  }
  &__size-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__size-text {
    font-family: "Pragmatica Book";
    font-size: 1rem;
    color: #2e2e2e;
  }
  &__size-chart-btn {
    @include btn;
    border-bottom: 1px solid #2e2e2e;
    font-family: "Pragmatica Book";
    font-size: 0.875rem;
    color: #2e2e2e;
  }
  &__sizes-body {
    display: flex;
    flex-wrap: wrap;
    gap: 0.625rem;
    margin: 0.938rem 0 1.313rem 0;
  }
  &__size-btn {
    @include btn;
    flex-shrink: 0;
    width: 75px;
    height: 45px;
    border-radius: 4px;
    border: 1px solid #efefef;
    transition: background-color 0.3s ease, color 0.3s ease;
    font-family: "Pragmatica Book";
    font-size: 0.938rem;
    color: #302f2f;

    &.active,
    &:hover {
      background-color: $Light-Black;
      color: #ffffff;
    }
  }
  &__content {
    display: flex;
    align-items: center;
    gap: 1.125rem;
    margin-bottom: 1.313rem;
  }
  &__prices {
    display: flex;
    flex-direction: column;
  }
  &__previous-price {
    font-family: "Pragmatica Book";
    font-size: 1.063rem;
    color: #999999;
    text-decoration: line-through;
  }
  &__current-price {
    font-family: "Pragmatica Book";
    font-size: 1.688rem;
    color: $Dark-Black;
  }
  &__counter {
    display: flex;
    align-items: center;
    width: 116px;
    height: 65px;
    border: 1px solid #eceff4;
  }
  &__counter-btn {
    @include btn;
    flex-shrink: 0;
    width: 35px;
    height: 100%;
    font-family: "Pragmatica Book";
    font-size: 0.875rem;
    color: #a7a7a7;
  }
  &__counter-text {
    @include flex-centered;
    text-align: center;
    width: 50px;
    height: 100%;
    border-left: 1px solid #eceff4;
    border-right: 1px solid #eceff4;
    font-family: "Pragmatica Book";
    font-size: 0.875rem;
    color: #323638;
  }
}
.sizes-chart-shadow {
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.747);
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
}
.sizes-chart {
  position: relative;
  background-color: #fff;
  padding: 1.563rem;
  margin: 9.25rem 0.938rem;

  &__close-btn {
    position: absolute;
    @include btn;
    top: 0.625rem;
    right: 0.625rem;
  }
  &__title {
    display: block;
    text-align: center;
    font-family: "Pragmatica Medium";
    font-size: 1.375rem;
    margin-bottom: 0.938rem;
    color: #2c2f30;
  }
  &__text {
    font-family: "Pragmatica Book";
    font-size: 0.875rem;
    margin: 0 0 0.938rem 0;
    color: #2e2e2e;
  }
  &__table-name {
    font-family: "Pragmatica Bold";
    font-size: 1.063rem;
    color: #2e2e2e;
    margin-bottom: 0.938rem;
  }
}
table {
  border-collapse: collapse;
  width: 100%;
}
th {
  background-color: #f9f9f9;
  padding: 10px;
  text-align: center;
  font-family: "Pragmatica Bold";
  font-size: 0.938rem;
  border: 1px solid #e1e1e1;
}
td {
  padding: 10px;
  text-align: center;
  font-family: "Pragmatica Book";
  font-size: 0.875rem;
  border: 1px solid #e1e1e1;
}
.info {
  display: flex;
  flex-direction: column;
  gap: 2.188rem;
  margin: 2.188rem 0;

  &__slider-wrapper {
    overflow: hidden;
  }
  &__slider-btns {
    display: flex;
    gap: 3.188rem;
    transition: transform 0.3s ease;
  }
  &__btn {
    @include btn;
    height: 70px;
    font-family: "Pragmatica Medium";
    font-size: 0.938rem;
    color: #808080;

    &.active {
      border-bottom: 1px solid $Dark-Black;
      color: $Dark-Black;
    }
  }
  &__desc {
    font-family: "Pragmatica Book";
    font-size: 0.938rem;
    color: #4b4b4b;
    line-height: 28px;
    margin: 0;
  }
  &__specs {
    display: flex;
    flex-direction: column;
    gap: 0.688rem;
    width: 100%;
  }
  &__spec {
    display: flex;
    align-items: center;
    gap: 0.938rem;
  }
  &__spec-name {
    font-family: "Pragmatica Book";
    font-size: 0.875rem;
  }
  &__spec-border {
    min-width: 10px;
    width: 100%;
    border-bottom: 1px dotted #d1d1d1;
  }
  &__spec-text {
    font-family: "Pragmatica Book";
    font-size: 0.875rem;
    color: #686767;
    white-space: nowrap;
  }
  &__spec-text--wrap {
    white-space: wrap;
    text-align: right;
    width: 180px;
    flex-shrink: 0;
  }
  &__pagination {
    margin-top: 5.625rem;
  }
  &__leave-review-btn {
    @include btn;
    border: 1px solid $Light-Black;
    padding: 0.938rem 0;
    width: 100%;
    font-family: "Pragmatica Medium";
    font-size: 0.75rem;
    transition: all 0.3s ease;
  }
  &__leave-review-btn:hover {
    background-color: $Light-Black;
    color: #fff;
  }
}
.products-slider {
  margin-top: 6.938rem;

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: -0.938rem;
    right: -0.938rem;
    height: 1px;
    background-color: #dfdfdf;
  }
  &::before {
    margin-top: -2.5rem;
  }
  &::after {
    margin-top: 2.5rem;
  }
}
/* 768px = 48em */
@media (min-width: 48em) {
  .container {
    display: flex;
    gap: 1.188rem;
  }
  .heroes-body {
    &__hero {
      max-width: 333px;
      height: 350px;
      object-fit: cover;
    }
  }
  .heroes-slider {
    &__wrapper {
      flex-wrap: wrap;
    }
    &__small-hero {
      min-width: 101px;
      min-height: 101px;
      object-fit: cover;
    }
  }
  .details {
    &__title {
      margin-top: 0;
    }
    &__size-btn {
      width: 53px;
    }
  }
  .sizes-chart {
    margin: 9.25rem calc((100vw - 44.874rem) / 2);
  }
  .info {
    &__spec-name {
      line-height: 24px;
      white-space: nowrap;
    }
    &__spec-text {
      line-height: 24px;
    }
  }
  .products-slider {
    &::before,
    &::after {
      margin-left: calc((100vw - 44.874rem) / (-2));
      margin-right: calc((100vw - 44.874rem) / (-2));
      left: 0;
      right: 0;
    }
  }
}
/* 1024px = 64em */
@media (min-width: 64em) {
  .sizes-chart {
    margin: 9.25rem calc((100vw - 44.75rem) / 2);
  }
  .products-slider {
    &::before,
    &::after {
      margin-left: calc((100vw - 44.75rem) / (-2));
      margin-right: calc((100vw - 44.75rem) / (-2));
    }
  }
}
/* 1200px = 75em */
@media (min-width: 75em) {
  .container {
    gap: 1.875rem;
    margin-top: 1.563rem;
  }
  .heroes-body {
    width: 510px;

    &__category {
      margin: 1.563rem 0 0 1.563rem;
    }
    &__wishlist-btn {
      top: 1.563rem;
      right: 1.563rem;
    }
    &__hero {
      max-width: 510px;
      height: 548px;
    }
  }
  .heroes-slider {
    &__small-hero {
      min-width: 160px;
      min-height: 160px;
    }
  }
  .details {
    height: fit-content;

    &__title {
      line-height: 57px;
    }
    &__desc {
      font-size: 0.938rem;
    }
    &__prices {
      align-items: center;
      flex-direction: row;
      gap: 1.125rem;
    }
    &__previous-price {
      font-size: 1.313rem;
    }
    &__current-price {
      font-size: 1.938rem;
    }
    &__size-btn {
      width: 53px;
    }
    &__counter {
      position: absolute;
      width: 131px;
      margin-top: 9rem;
    }
    &__counter-text {
      width: 61px;
    }
    &__add-to-cart-btn {
      margin-left: 10.063rem;
    }
  }
  .sizes-chart {
    &__title {
      font-size: 2.188rem;
    }
    &__text {
      font-size: 0.938rem;
      margin: 0 0 1.563rem 0;
    }
    &__table-name {
      margin-bottom: 1.563rem;
    }
  }
  .info {
    &__spec-name,
    &__spec-text {
      font-size: 0.938rem;
    }
  }
  .products-slider {
    margin-top: 8.188rem;

    &::before,
    &::after {
      margin-left: calc((100vw - 71.875rem) / (-2));
      margin-right: calc((100vw - 71.875rem) / (-2));
    }
  }
}
/* 1440px = 90em */
@media (min-width: 90em) {
  .container {
    gap: 3.125rem;
  }
  .heroes-body {
    width: 609px;

    &__hero {
      max-width: 609px;
      width: 609px;
      height: 619px;
    }
  }
  .heroes-slider {
    &__small-hero {
      width: 193px;
      height: 193px;
    }
  }
  .details {
    &__size-btn {
      width: 82px;
    }
  }
  .sizes-chart {
    padding: 2.5rem;

    &__close-btn {
      margin: 1.25rem 1.219rem 0 0;
    }
  }
  .products-slider {
    &::before,
    &::after {
      margin-left: calc((100vw - 85rem) / (-2));
      margin-right: calc((100vw - 85rem) / (-2));
    }
  }
}
</style>
