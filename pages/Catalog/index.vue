<template>
  <UIBreadcrumb :breadcrumbTitle="'Каталог товаров'"></UIBreadcrumb>
  <div class="titles-container">
    <h1 class="titles-container__title">Все модели</h1>
    <span class="titles-container__text"
      >{{ totalProducts }} {{ conjugateTovar(totalProducts) }}</span
    >
  </div>
  <button @click="openFiltersMenu" class="filters-btn">
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 7H6M6 7C6 8.65685 7.34315 10 9 10C10.6569 10 12 8.65685 12 7C12 5.34315 10.6569 4 9 4C7.34315 4 6 5.34315 6 7ZM3 17H9M18 17H21M18 17C18 18.6569 16.6569 20 15 20C13.3431 20 12 18.6569 12 17C12 15.3431 13.3431 14 15 14C16.6569 14 18 15.3431 18 17ZM15 7H21"
        stroke="#141718"
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
    Показать фильтры
  </button>
  <div class="filters">
    <div class="filters__container">
      <div class="filters__dropdown filters-dropdown">
        <button
          class="filters__dropdown-button filters__dropdown-button-sizes"
          @click="toggleDropdown('sizes')"
        >
          <span>Размер (EU)</span>
          <svg
            width="8"
            height="5"
            viewBox="0 0 8 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.64645 4.32328C3.84171 4.51854 4.15829 4.51854 4.35355 4.32328L7.53553 1.1413C7.7308 0.946037 7.7308 0.629455 7.53553 0.434193C7.34027 0.238931 7.02369 0.238931 6.82843 0.434193L4 3.26262L1.17157 0.434193C0.976311 0.23893 0.659728 0.23893 0.464466 0.434193C0.269204 0.629455 0.269204 0.946037 0.464466 1.1413L3.64645 4.32328ZM3.5 2.96973L3.5 3.96973L4.5 3.96973L4.5 2.96973L3.5 2.96973Z"
              fill="#000000"
            />
          </svg>
        </button>
        <div
          v-if="openedDropdown === 'sizes'"
          class="filters__dropdown-list filters__dropdown-list-sizes"
        >
          <button
            @click="toggleActiveSize(size)"
            class="filters__dropdown-list-item filters__dropdown-size-btn"
            v-for="size in sizes"
            :key="size"
            :class="{ active: isSizeActive(size) }"
          >
            {{ size }}
          </button>
        </div>
      </div>
      <div class="slider-range">
        Цена:
        <div class="slider-range__range" id="range-slider--from1440px"></div>
        <div class="slider-range__range-body">
          <div class="slider-range__range-content">
            <input
              type="number"
              :min="minimumPrice"
              :max="maximumPrice"
              placeholder="5 999"
              class="slider-range__input"
              id="input-0--from1440px"
              ref="minPrice"
            />
            <span class="slider-range__sign">₽</span>
          </div>
          <div class="slider-range__border"></div>
          <div class="slider-range__range-content">
            <input
              type="number"
              :min="minimumPrice"
              :max="maximumPrice"
              placeholder="16 790"
              class="slider-range__input"
              id="input-1--from1440px"
              ref="maxPrice"
            />
            <span class="slider-range__sign">₽</span>
          </div>
        </div>
      </div>
      <div class="filters__content">
        <div class="filters__dropdown filters-dropdown">
          <button
            class="filters__dropdown-button filters__dropdown-button-color"
            @click="toggleDropdown('colors')"
          >
            <span>Цвет</span>
            <svg
              width="8"
              height="5"
              viewBox="0 0 8 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.64645 4.32328C3.84171 4.51854 4.15829 4.51854 4.35355 4.32328L7.53553 1.1413C7.7308 0.946037 7.7308 0.629455 7.53553 0.434193C7.34027 0.238931 7.02369 0.238931 6.82843 0.434193L4 3.26262L1.17157 0.434193C0.976311 0.23893 0.659728 0.23893 0.464466 0.434193C0.269204 0.629455 0.269204 0.946037 0.464466 1.1413L3.64645 4.32328ZM3.5 2.96973L3.5 3.96973L4.5 3.96973L4.5 2.96973L3.5 2.96973Z"
                fill="#000000"
              />
            </svg>
          </button>
          <div
            v-if="openedDropdown === 'colors'"
            class="filters__dropdown-list filters__dropdown-list-colors"
          >
            <button
              @click="toggleActiveColor(hex)"
              class="filters__dropdown-list-item filters__dropdown-color-btn"
              v-for="(name, hex) in colors"
              :key="hex"
            >
              <div
                class="filters__dropdown-color-circle"
                :class="{ active: isColorActive(hex) }"
              >
                <div
                  class="filters__dropdown-color-circle-fill"
                  :style="{ backgroundColor: hex }"
                ></div>
              </div>
              {{ name }}
            </button>
          </div>
        </div>
        <div class="filters__dropdown filters-dropdown">
          <button
            class="filters__dropdown-button filters__dropdown-button-material"
            @click="toggleDropdown('materials')"
          >
            <span>Материал</span>
            <svg
              width="8"
              height="5"
              viewBox="0 0 8 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.64645 4.32328C3.84171 4.51854 4.15829 4.51854 4.35355 4.32328L7.53553 1.1413C7.7308 0.946037 7.7308 0.629455 7.53553 0.434193C7.34027 0.238931 7.02369 0.238931 6.82843 0.434193L4 3.26262L1.17157 0.434193C0.976311 0.23893 0.659728 0.23893 0.464466 0.434193C0.269204 0.629455 0.269204 0.946037 0.464466 1.1413L3.64645 4.32328ZM3.5 2.96973L3.5 3.96973L4.5 3.96973L4.5 2.96973L3.5 2.96973Z"
                fill="#000000"
              />
            </svg>
          </button>
          <div
            v-if="openedDropdown === 'materials'"
            class="filters__dropdown-list filters__dropdown-list-materials"
          >
            <div
              class="filters__dropdown-list-item"
              v-for="(material, index) in materials"
              :key="material"
            >
              <input
                type="checkbox"
                class="material-checkbox"
                :value="material"
                v-model="selectedMaterials"
                :id="'material-checkbox-' + index"
                @change="toggleMaterialFilter"
              />
              <label
                class="filters__material-text"
                :for="'material-checkbox-' + index"
                >{{ material }}</label
              >
            </div>
          </div>
        </div>
        <button @click="resetFilters" class="filters__reset-all-btn">
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
              fill="#6C757D"
            />
          </svg>
          СБРОСИТЬ ВСЁ
        </button>
      </div>
    </div>
  </div>
  <div class="picked-filters" ref="container">
    <div class="picked-filters__body" ref="wrapper">
      <div
        class="picked-filters__content"
        v-for="filter in pickedCategoryFilters"
        :key="filter"
      >
        {{ filter }}
        <button
          @click="removeCategoryFilter(filter)"
          class="picked-filters__reset-filter-btn"
        >
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
              fill="#000000"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
  <div v-if="isFiltersOpened" class="filters-menu-shadow">
    <button @click="closeFiltersMenu" class="filters-menu-shadow__close-btn">
      <img src="/imgs/cross.svg" alt="cross" />
    </button>
    <div class="filters-menu">
      <div>
        <span class="filters-menu__title">ЦЕНА:</span>
        <div class="slider-range">
          <div class="slider-range__range" id="range-slider--from320px"></div>
          <div class="slider-range__range-body">
            <div class="slider-range__range-content">
              <input
                type="number"
                :min="minimumPrice"
                :max="maximumPrice"
                placeholder="5 999"
                class="slider-range__input"
                id="input-0--from320px"
                ref="minPrice"
              />
              <span class="slider-range__sign">₽</span>
            </div>
            <div class="slider-range__border"></div>
            <div class="slider-range__range-content">
              <input
                type="number"
                :min="minimumPrice"
                :max="maximumPrice"
                placeholder="16 790"
                class="slider-range__input"
                id="input-1--from320px"
                ref="maxPrice"
              />
              <span class="slider-range__sign">₽</span>
            </div>
          </div>
        </div>
      </div>
      <div class="filters-menu__container">
        <span class="filters-menu__title">РАЗМЕРЫ (EU):</span>
        <div class="filters-menu__sizes">
          <button
            @click="toggleActiveSize(size)"
            class="filters-menu__size-btn"
            v-for="size in sizes"
            :key="size"
            :class="{ active: isSizeActive(size) }"
          >
            {{ size }}
          </button>
        </div>
      </div>
      <div class="filters-menu__container">
        <span class="filters-menu__title">ЦВЕТ:</span>
        <div
          class="filters-menu__colors"
          v-for="(name, hex) in colors"
          :key="hex"
        >
          <div class="filters-menu__color-btn" @click="toggleActiveColor(hex)">
            <div
              class="filters-menu__color-circle"
              :class="{ active: isColorActive(hex) }"
            >
              <div
                class="filters-menu__color-circle-fill"
                :style="{ backgroundColor: hex }"
              ></div>
            </div>
            <span class="filters-menu__color-text">{{ name }}</span>
          </div>
        </div>
      </div>
      <div class="filters-menu__container">
        <span class="filters-menu__title">МАТЕРИАЛ:</span>
        <div
          class="filters-menu__material"
          v-for="(material, index) in materials"
          :key="material"
        >
          <input
            type="checkbox"
            class="material-checkbox"
            :value="material"
            v-model="selectedMaterials"
            :id="'material-checkbox-' + index"
            @change="toggleMaterialFilter"
          />
          <label
            class="filters-menu__material-text"
            :for="'material-checkbox-' + index"
            >{{ material }}</label
          >
        </div>
      </div>
      <button @click="resetFilters" class="filters-menu__reset-all-btn">
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
            fill="#6C757D"
          />
        </svg>
        СБРОСИТЬ ВСЁ
      </button>
    </div>
  </div>
  <div class="sorting">
    <span class="sorting__text"
      >Показано {{ shownProducts }} из
      {{ filteredProductsLength }} товаров</span
    >
    <div class="sorting__container">
      <div class="sorting__content">
        Показывать по:
        <div class="sorting__btns">
          <button
            class="sorting__btn"
            v-for="num in numberOfProducts"
            :key="num"
            :class="{
              active: pickedNumber === num,
              disabled: filteredProductsLength < num,
            }"
            @click="showProducts(num)"
            :disabled="filteredProductsLength < num"
          >
            {{ num }}
          </button>
        </div>
      </div>
      <div class="sorting__body">
        Сортировать по:
        <div class="sorting__dropdown filters-dropdown">
          <button
            @click="toggleSortingDropdown('sorting')"
            class="sorting__dropdown-btn"
          >
            {{ selectedOption.toUpperCase() }}
            <svg
              width="8"
              height="5"
              viewBox="0 0 8 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.64645 4.32328C3.84171 4.51854 4.15829 4.51854 4.35355 4.32328L7.53553 1.1413C7.7308 0.946037 7.7308 0.629455 7.53553 0.434193C7.34027 0.238931 7.02369 0.238931 6.82843 0.434193L4 3.26262L1.17157 0.434193C0.976311 0.23893 0.659728 0.23893 0.464466 0.434193C0.269204 0.629455 0.269204 0.946037 0.464466 1.1413L3.64645 4.32328ZM3.5 2.96973L3.5 3.96973L4.5 3.96973L4.5 2.96973L3.5 2.96973Z"
                fill="#000000"
              />
            </svg>
          </button>
          <ul v-if="openedDropdown === 'sorting'" class="sorting__list">
            <li
              @click="sortProducts(option.value)"
              class="sorting__list-item"
              v-for="option in options"
              :key="option.value"
              :value="option.value"
              :class="{
                active: selectedOption === option.value,
              }"
            >
              {{ option.value }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <UIMessage
    v-if="paginatedProducts.length === 0"
    :text="'С выбранными фильтрами ничего не найдено.'"
    :fill="'#f8f8f8'"
  ></UIMessage>
  <UIProductList v-if="paginatedProducts.length > 0"></UIProductList>
  <UIPagination v-if="paginatedProducts.length > 9"></UIPagination>
</template>

<script setup lang="ts">
import { products } from "@/data/CatalogProducts";
import { useProductsStore } from "@/store/Products";
import noUiSlider from "nouislider";
import type { target } from "nouislider";
import { sizesArr, colorsObj, materialsArr } from "@/data/filters";
import { useFiltersStore } from "@/store/Filters";
import { useReviewsStore } from "@/store/Reviews";
import { conjugateTovar } from "@/utils/helpers";

useHead({
  title: "Sneakers Store - Каталог товаров | Огромный выбор моделей",
  meta: [
    {
      name: "description",
      content:
        "Sneakers Store – ваш интернет-магазин кроссовок Nike. Огромный выбор моделей для мужчин и женщин, доступные цены и быстрая доставка. Найдите свою идеальную пару Nike сегодня!",
    },
    {
      name: "keywords",
      content:
        "Nike, кроссовки Nike, купить Nike, интернет-магазин, Sneakers Store, мужские кроссовки Nike, женские кроссовки Nike, спортивная обувь Nike, доставка, цены, купить кроссовки, купить обувь, каталог кроссовок, купить спортивную обувь",
    },
  ],
});

onMounted(() => {
  document.body.style.overflow = "";
});

const sizes = ref(sizesArr);
const colors = ref(colorsObj);
const materials = ref(materialsArr);

const store = useProductsStore();
store.setAllProducts(products);

const route = useRoute();
watch(
  () => route.query.page,
  (newPage) => store.setPage(Number(newPage) || 1),
  { immediate: true }
);

const totalPages = computed(() => store.totalPages);
const pageNum = parseInt(route.query.page as string);
const checkPageValidity = () => {
  if (
    (pageNum && pageNum <= totalPages.value && pageNum > 0) ||
    filteredProductsLength.value === 0
  ) {
    store.currentPage = pageNum;
  } else {
    throw createError({ statusCode: 404, statusMessage: "Page Not Found" });
  }
};
onMounted(() => {
  checkPageValidity();
  store.filterProducts();
});

const totalProducts = ref(store.allProducts.length);
conjugateTovar(totalProducts.value);

const filtersStore = useFiltersStore();
const minimumPrice = ref<number>(filtersStore.minPrice!);
const maximumPrice = ref<number>(filtersStore.maxPrice!);
const defaultMin = 5999;
const defaultMax = 16790;
const setupSlider = (sliderId: string, input0Id: string, input1Id: string) => {
  /* prices range slider starts */
  const rangeSlider = document.getElementById(sliderId)! as target;
  if (rangeSlider) {
    if (rangeSlider.noUiSlider) {
      rangeSlider.noUiSlider.destroy();
    }

    noUiSlider.create(rangeSlider, {
      start: [minimumPrice.value, maximumPrice.value],
      connect: true,
      step: 10,
      range: {
        min: [5999],
        max: [16790],
      },
    });

    const input0 = document.getElementById(input0Id)! as HTMLInputElement,
      input1 = document.getElementById(input1Id)! as HTMLInputElement;
    const inputs = [input0, input1];

    rangeSlider.noUiSlider!.on(
      "update",
      (values: (number | string)[], handle: number) => {
        inputs[handle].value = Math.round(Number(values[handle])).toString();

        const currentMin = parseInt(inputs[0].value) || defaultMin;
        const currentMax = parseInt(inputs[1].value) || defaultMax;
        if (currentMin !== filtersStore.minPrice) {
          filtersStore.setMinPrice(currentMin);
        }
        if (currentMax !== filtersStore.maxPrice) {
          filtersStore.setMaxPrice(currentMax);
        }

        if (currentMin !== defaultMin || currentMax !== defaultMax) {
          if (!pickedCategoryFilters.value.includes("Цена")) {
            pickedCategoryFilters.value.push("Цена");
          }

          filtersStore.setMinPrice(currentMin);
          filtersStore.setMaxPrice(currentMax);
        } else {
          const index = pickedCategoryFilters.value.indexOf("Цена");
          if (index > -1) {
            pickedCategoryFilters.value.splice(index, 1);
          }
        }

        filtersStore.setPickedCategoryFilters(pickedCategoryFilters.value);
      }
    );

    const setRangeSlider = (i: number, value: string) => {
      let arr: (number | null)[] = [null, null];
      arr[i] = parseInt(value);
      rangeSlider.noUiSlider!.set(arr);
    };

    inputs.forEach((el, index) => {
      el.addEventListener("change", (e) => {
        setRangeSlider(index, (e.currentTarget! as HTMLInputElement).value);
      });
    });
  }
  /* prices range slider ends */
};

const initializeSliders = () => {
  const mediaQuery = window.matchMedia("(max-width: 1439px)");

  if (mediaQuery.matches) {
    setupSlider(
      "range-slider--from320px",
      "input-0--from320px",
      "input-1--from320px"
    );
  } else {
    setupSlider(
      "range-slider--from1440px",
      "input-0--from1440px",
      "input-1--from1440px"
    );
  }
};

onMounted(() => {
  initializeSliders();

  const mediaQuery = window.matchMedia("(max-width: 1439px)");
  mediaQuery.addEventListener("change", initializeSliders);
});

const isFiltersOpened = ref(false);
const openFiltersMenu = () => {
  isFiltersOpened.value = true;
  window.scrollTo(0, 0);
  document.body.style.overflow = "hidden";
  nextTick(() => {
    initializeSliders();
  });
};
const closeFiltersMenu = () => {
  isFiltersOpened.value = false;
  document.body.style.overflow = "";
};

const activeSizes = ref<number[]>(filtersStore.sizes!);
const activeColors = ref<string[]>(filtersStore.colors!);
const selectedMaterials = ref<string[]>(filtersStore.materials!);

const toggleActiveSize = (size: number) => {
  const index = activeSizes.value.indexOf(size);
  if (index > -1) {
    activeSizes.value.splice(index, 1);
  } else {
    activeSizes.value.push(size);
    if (!pickedCategoryFilters.value.includes("Размер")) {
      pickedCategoryFilters.value.push("Размер");
    }
  }
  if (activeSizes.value.length === 0) {
    const index = pickedCategoryFilters.value.indexOf("Размер");
    if (index > -1) {
      pickedCategoryFilters.value.splice(index, 1);
    }
  }

  filtersStore.setSizes(activeSizes.value);
  filtersStore.setPickedCategoryFilters(pickedCategoryFilters.value);
};
const toggleActiveColor = (colorHex: string) => {
  const index = activeColors.value.indexOf(colorHex);
  if (index > -1) {
    activeColors.value.splice(index, 1);
  } else {
    activeColors.value.push(colorHex);
    if (!pickedCategoryFilters.value.includes("Цвет")) {
      pickedCategoryFilters.value.push("Цвет");
    }
  }
  if (activeColors.value.length === 0) {
    const index = pickedCategoryFilters.value.indexOf("Цвет");
    if (index > -1) {
      pickedCategoryFilters.value.splice(index, 1);
    }
  }

  filtersStore.setColors(activeColors.value);
  filtersStore.setPickedCategoryFilters(pickedCategoryFilters.value);
};
const isSizeActive = (size: number) => {
  return activeSizes.value.includes(size);
};
const isColorActive = (colorHex: string) => {
  return activeColors.value.includes(colorHex);
};
watch(
  () => filtersStore.sizes!,
  (newVal) => {
    activeSizes.value = newVal;
    filtersStore.setSizes(newVal);
    store.filterProducts();
    store.currentPage = 1;
    router.replace({
      path: "/catalog",
      query: { page: 1 },
    });
    store.resetTranslateValue();
  },
  { deep: true }
);
watch(
  () => filtersStore.colors!,
  (newVal) => {
    activeColors.value = newVal;
    filtersStore.setColors(newVal);
    store.filterProducts();
    store.currentPage = 1;
    router.replace({
      path: "/catalog",
      query: { page: 1 },
    });
    store.resetTranslateValue();
  },
  { deep: true }
);
watch(
  () => filtersStore.materials!,
  (newVal) => {
    selectedMaterials.value = newVal;
    filtersStore.setMaterials(newVal);
    store.filterProducts();
    store.currentPage = 1;
    router.replace({
      path: "/catalog",
      query: { page: 1 },
    });
    store.resetTranslateValue();
  },
  { deep: true }
);
watch(
  () => filtersStore.minPrice!,
  (newMin) => {
    minimumPrice.value = newMin;
    filtersStore.setMinPrice(newMin);
    store.filterProducts();
    store.currentPage = 1;
    router.replace({
      path: "/catalog",
      query: { page: 1 },
    });
    store.resetTranslateValue();
  }
);
watch(
  () => filtersStore.maxPrice!,
  (newMax) => {
    maximumPrice.value = newMax;
    filtersStore.setMaxPrice(newMax);
    store.filterProducts();
    store.currentPage = 1;
    router.replace({
      path: "/catalog",
      query: { page: 1 },
    });
    store.resetTranslateValue();
  }
);

const pickedCategoryFilters = ref<string[]>(
  filtersStore.pickedCategoryFilters!
);
const toggleMaterialFilter = () => {
  const checkboxes = document.querySelectorAll(
    ".material-checkbox"
  ) as NodeListOf<HTMLInputElement>;

  const selectedMaterials = Array.from(checkboxes)
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.value);

  if (selectedMaterials.length > 0) {
    if (!pickedCategoryFilters.value.includes("Материал")) {
      pickedCategoryFilters.value.push("Материал");
    }
  } else {
    const index = pickedCategoryFilters.value.indexOf("Материал");
    if (index > -1) {
      pickedCategoryFilters.value.splice(index, 1);
    }
  }

  filtersStore.setMaterials(selectedMaterials);
  filtersStore.setPickedCategoryFilters(pickedCategoryFilters.value);
};

const removeCategoryFilter = (filterToRemove: string) => {
  pickedCategoryFilters.value = pickedCategoryFilters.value.filter(
    (filter) => filter !== filterToRemove
  );
  filtersStore.pickedCategoryFilters = pickedCategoryFilters.value;

  switch (filterToRemove) {
    case "Цена":
      filtersStore.setMinPrice(defaultMin);
      filtersStore.setMaxPrice(defaultMax);
      minimumPrice.value = defaultMin;
      maximumPrice.value = defaultMax;
      initializeSliders();
      break;
    case "Размер":
      filtersStore.sizes = [];
      break;
    case "Цвет":
      filtersStore.colors = [];
      break;
    case "Материал":
      filtersStore.materials = [];
      break;
  }
};

const openedDropdown = ref("");
const toggleDropdown = (dropdown: string) => {
  openedDropdown.value = openedDropdown.value === dropdown ? "" : dropdown;
};

const handleClickOutside = (event: MouseEvent) => {
  const dropdowns = document.querySelectorAll(".filters-dropdown");
  let clickedInside = false;

  dropdowns.forEach((dropdown) => {
    if (dropdown.contains(event.target as Node)) {
      clickedInside = true;
    }
  });
  if (!clickedInside) {
    openedDropdown.value = "";
  }
};
onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});
onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});

const filteredProductsLength = computed(() => store.filteredProducts.length);
const paginatedProducts = computed(() => store.paginatedProducts);
const productsPerPage = computed(() => store.productsPerPage);
const shownProducts = computed(() =>
  productsPerPage.value <= paginatedProducts.value.length
    ? productsPerPage.value
    : paginatedProducts.value.length
);

const router = useRouter();
const numberOfProducts = [9, 12, 18, 24];
let pickedNumber = ref(18);
const showProducts = (num: number) => {
  if (filteredProductsLength.value >= num) {
    pickedNumber.value = num;
    store.productsPerPage = num;
    store.currentPage = 1;
    store.resetTranslateValue();
    router.replace({
      path: "/catalog",
      query: { page: 1 },
    });
  }
};
onMounted(() => {
  pickedNumber.value = store.productsPerPage;
});
watch(
  () => store.productsPerPage,
  (newVal) => {
    pickedNumber.value = newVal;
  }
);

const container = ref<HTMLElement | null>(null);
const wrapper = ref<HTMLElement | null>(null);
let currentTranslate = 0;

const handleTouchMove = (event: TouchEvent) => {
  if (
    wrapper.value &&
    window.innerWidth < 420 &&
    wrapper.value!.children.length > 2
  ) {
    const lastElement = wrapper.value.lastElementChild as HTMLElement;
    const lastElementWidth = lastElement ? lastElement.offsetWidth : 0;

    if (currentTranslate < 0) {
      currentTranslate = 0;
    } else {
      currentTranslate = -wrapper.value!.offsetWidth + lastElementWidth;
    }

    wrapper.value.style.transform = `translateX(${currentTranslate}px)`;
  }
};
const handleSliderResize = () => {
  if (wrapper.value && window.innerWidth >= 420) {
    wrapper.value.style.transform = `translateX(0px)`;
    currentTranslate = 0;
  }
};
onMounted(() => {
  nextTick(() => {
    container.value!.addEventListener("touchmove", handleTouchMove, {
      passive: true,
    });
  });

  window.addEventListener("resize", handleSliderResize);
});
onBeforeUnmount(() => {
  window.removeEventListener("resize", handleSliderResize);
  container.value!.removeEventListener("touchmove", handleTouchMove);
});

const resetFilters = () => {
  filtersStore.resetFilters();
  minimumPrice.value = defaultMin;
  maximumPrice.value = defaultMax;
  pickedCategoryFilters.value = [];
  initializeSliders();
};

const toggleSortingDropdown = (dropdown: string) => {
  openedDropdown.value = openedDropdown.value === dropdown ? "" : dropdown;
};
const options = [
  { value: "возрастанию цены" },
  { value: "убыванию цены" },
  { value: "возрастанию рейтинга" },
  { value: "убыванию рейтинга" },
];

const parsePrice = (price: string) => {
  return parseFloat(price.replace(/\s+|₽/g, ""));
};

const reviewsStore = useReviewsStore();
onMounted(async () => {
  await nextTick();
  await reviewsStore.updateProductRatings(store.filteredProducts);
});

const selectedOption = ref("возрастанию цены");
const sortProducts = async (option: string) => {
  selectedOption.value = option;

  toggleSortingDropdown("");

  await reviewsStore.updateProductRatings(store.filteredProducts);

  store.filteredProducts = [...products];
  if (option === "возрастанию цены") {
    store.filteredProducts.sort(
      (a, b) => parsePrice(a.currentPrice) - parsePrice(b.currentPrice)
    );
  } else if (option === "убыванию цены") {
    store.filteredProducts.sort(
      (a, b) => parsePrice(b.currentPrice) - parsePrice(a.currentPrice)
    );
  } else if (option.includes("рейтинга")) {
    store.filteredProducts.sort((a, b) => {
      if (option === "возрастанию рейтинга") {
        return (a.averageRating || 0) - (b.averageRating || 0);
      } else if (option === "убыванию рейтинга") {
        return (b.averageRating || 0) - (a.averageRating || 0);
      }
      return 0;
    });
  }
};
</script>

<style lang="scss">
@import "@/assets/App.scss";
.titles-container {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  margin: 1.875rem 0;

  &__text {
    font-family: "Pragmatica Book";
    font-size: 0.813rem;
    color: #a3a3a3;
  }
}
.filters-btn {
  position: relative;
  @include btn;
  gap: 0.625rem;
  width: 100%;
  font-family: "Pragmatica Book";
  font-size: 1rem;
  padding: 1.313rem 0;

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
    top: 0;
    transform: translateY(-50%);
  }
  &::after {
    bottom: 0;
    transform: translateY(50%);
  }
}
.filters {
  display: none;
}
.filters-menu-shadow {
  position: absolute;
  background: rgba(0, 0, 0, 0.747);
  width: 100%;
  height: 100vh;
  top: 0rem;
  margin-left: -0.938rem;
  z-index: 2;
}
.filters-menu-shadow__close-btn {
  @include btn;
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
}
.filters-menu {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 3.75rem;
  background-color: #fff;
  width: 90%;
  max-width: 328px;
  height: 100vh;
  padding: 2.188rem 1.25rem 8.75rem 1.25rem;
  overflow-y: scroll;
  overflow-x: hidden;

  &__container {
    display: flex;
    flex-direction: column;
    gap: 1.875rem;
  }
  &__title {
    font-family: "Pragmatica Bold";
    font-size: 0.875rem;
  }
  &__sizes {
    display: flex;
    flex-wrap: wrap;
    gap: 0.625rem;
  }
  &__size-btn {
    @include btn;
    flex-shrink: 0;
    width: 54px;
    max-width: 64.5px;
    height: 45px;
    flex-grow: 1;
    border: 1px solid #efefef;
    border-radius: 4px;
    font-family: "Pragmatica Book";
    font-size: 0.938rem;

    &.active {
      background-color: $Light-Black;
      color: #ffffff;
    }
  }
  &__colors {
    display: flex;
    flex-direction: column;
    gap: 1.125rem;
  }
  &__color-btn,
  &__material {
    display: flex;
    align-items: center;
    gap: 0.625rem;
  }
  &__color-circle {
    border-radius: 50%;
    width: 25px;
    height: 25px;
    padding: 5px;
    outline: 1px solid #a1a1a1;

    &.active {
      outline: 1px solid $Dark-Black;
    }
  }
  &__color-circle-fill {
    border-radius: 50%;
    width: 15px;
    height: 15px;
  }
  &__color-text,
  &__material-text {
    font-family: "Pragmatica Book";
    font-size: 1rem;
  }
  &__reset-all-btn {
    @include btn;
    position: fixed;
    height: 70px;
    width: 90%;
    max-width: 328px;
    background-color: #fbfbfb;
    display: flex;
    gap: 0.625rem;
    left: 0rem;
    bottom: 0rem;
    border-top: 1px solid #dfdfdf;
    font-family: "Pragmatica Book";
    font-size: 0.75rem;
  }
}
.material-checkbox[type="checkbox"] {
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
.material-checkbox[type="checkbox"]:checked {
  border: none;
}
.material-checkbox[type="checkbox"]:checked:before {
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

/* hide input number arrows for Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
/* hide input number arrows for Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
.slider-range {
  &__range {
    margin: 1.875rem 0;
  }
  &__range-body {
    display: flex;
    align-items: center;
    gap: 0.875rem;
  }
  &__input {
    text-align: center;
    border: none;
    outline: none;
    width: 100%;
    padding: 0.75rem 1.875rem;
    border-bottom: 1px solid #b5b5b5;
    font-family: "Pragmatica Book";
    font-size: 0.938rem;
    color: #343434;
  }
  &__input::placeholder {
    font-family: "Pragmatica Book";
    font-size: 0.938rem;
    color: #b5b5b5;
  }
  &__sign {
    position: absolute;
    margin-left: -0.5rem;
    font-family: "Pragmatica Book";
    font-size: 0.938rem;
    line-height: 39px;
    color: #343434;
  }
  &__border {
    width: 15px;
    height: 2px;
    border-radius: 1px;
    flex-shrink: 0;
    background: #b5b5b5;
  }
}
.noUi-target {
  background-color: #dfdfdf;
  border: none;
  height: 2px;
  padding-right: 12px;
}
.noUi-connect {
  background-color: $Dark-Black;
}
.noUi-handle {
  box-shadow: none;
  border-radius: 50%;
  border: 2px solid $Dark-Black;
  background-color: #fff;
  cursor: pointer;

  &::after,
  &::before {
    display: none;
  }
}
.noUi-horizontal .noUi-handle {
  width: 14px;
  height: 14px;
  top: -0.4rem;
}
.noUi-handle-lower,
.noUi-handle-upper {
  transform: translateX(-4px);
}
.sorting {
  display: none;
}
.picked-filters {
  overflow: hidden;
  padding: 0.75rem 0;

  &__body {
    display: flex;
    gap: 0.625rem;
    width: fit-content;
    transition: transform 0.3s ease;
  }
  &__content {
    background-color: $Dark-Black;
    border-radius: 25px;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.313rem 0.5rem;
    font-family: "Pragmatica Medium";
    font-size: 0.875rem;
    color: #fff;
  }
  &__reset-filter-btn {
    @include btn;
    padding: 0.313rem;
    border-radius: 50%;
    background-color: #fff;

    & svg {
      width: 6px;
      height: 6px;
    }
  }
}
/* 768px = 48em */
@media (min-width: 48em) {
  .filters-menu-shadow {
    margin-left: calc((100vw - 44.874rem) / (-2));
  }
  .filters-btn {
    &::before,
    &::after {
      margin-left: calc((100vw - 44.874rem) / (-2));
      margin-right: calc((100vw - 44.874rem) / (-2));
      left: 0;
      right: 0;
    }
  }
  .picked-filters {
    padding: 1.125rem 0;
  }
}
/* 1024px = 64em */
@media (min-width: 64em) {
  .filters-menu-shadow {
    margin-left: calc((100vw - 44.75rem) / (-2));
  }
  .filters-btn {
    &::before,
    &::after {
      margin-left: calc((100vw - 44.75rem) / (-2));
      margin-right: calc((100vw - 44.75rem) / (-2));
    }
  }
}
/* 1200px = 75em */
@media (min-width: 75em) {
  .titles-container {
    gap: 0.813rem;

    &__text {
      font-size: 0.938rem;
    }
  }
  .filters-menu-shadow {
    margin-left: calc((100vw - 71.875rem) / (-2));
  }
  .filters-btn {
    &::before,
    &::after {
      margin-left: calc((100vw - 71.875rem) / (-2));
      margin-right: calc((100vw - 71.875rem) / (-2));
    }
  }
}
/* 1440px = 90em */
@media (min-width: 90em) {
  .filters-menu-shadow,
  .filters-btn {
    display: none;
  }
  .filters {
    display: block;
    height: 70px;
    border-top: 1px solid #dfdfdf;
    border-bottom: 1px solid #dfdfdf;
    margin-left: calc((100vw - 85rem) / (-2));
    margin-right: calc((100vw - 85rem) / (-2));

    &__container {
      display: flex;
      align-items: center;
      gap: 3.125rem;
      height: 100%;
      margin-left: calc((100vw - 85rem) / 2);
      margin-right: calc((100vw - 85rem) / 2);
    }
    &__reset-all-btn {
      @include btn;
      gap: 0.688rem;
      background-color: #fbfbfb;
      height: 100%;
      padding: 0 2.813rem;
      white-space: nowrap;
      border-left: 1px solid #dfdfdf;
      border-right: 1px solid #dfdfdf;
      font-family: "Pragmatica Book";
      font-size: 0.75rem;
    }
    &__content {
      display: flex;
      align-items: center;
      height: 100%;
    }
    &__dropdown-button {
      @include btn;
      gap: 0.688rem;
      height: 100%;
      width: 100%;
      padding: 1.594rem 2.813rem;
      font-family: "Pragmatica Book";
      font-size: 1rem;
      white-space: nowrap;
    }
    &__dropdown-button img {
      pointer-events: none;
    }
    &__dropdown-button:focus {
      outline: none;
    }
    &__dropdown-button-sizes {
      border-right: 1px solid #dfdfdf;
      padding: 1.594rem 2.813rem 1.594rem 0;
    }
    &__dropdown-button-color {
      border-left: 1px solid #dfdfdf;
      border-right: 1px solid #dfdfdf;
    }
    &__dropdown-button-material {
      padding: 1.594rem 2.813rem;
    }
    &__dropdown-list {
      position: absolute;
      display: flex;
      flex-direction: column;
      gap: 0.625rem;
      border-radius: 0 0 8px 8px;
      background-color: #fff;
      border: 1px solid #dfdfdf;
      border-top: none;
      padding: 1.25rem;
      margin: 0;
      list-style-type: none;
      z-index: 2;
    }
    &__dropdown-list-sizes {
      flex-flow: row wrap;
      width: 492px;
    }
    &__dropdown-list-colors {
      gap: 1.125rem;
    }
    &__dropdown-list-materials {
      gap: 0.75rem;
      margin-left: -0.063rem;
    }
    &__dropdown-list-item {
      @include btn;
      gap: 0.625rem;
      font-family: "Pragmatica Book";
      font-size: 1rem;
      color: #414141;
      cursor: pointer;
    }
    &__material-text {
      cursor: pointer;
    }
    &__dropdown-size-btn {
      width: 82px;
      height: 45px;
      border: 1px solid #dfdfdf;
      border-radius: 4px;

      &.active {
        background-color: $Light-Black;
        color: #ffffff;
      }
    }
    &__dropdown-color-btn {
      display: flex;
      gap: 0.625rem;
    }
    &__dropdown-color-circle {
      border-radius: 50%;
      width: 25px;
      height: 25px;
      padding: 5px;
      outline: 1px solid #a1a1a1;

      &.active {
        outline: 1px solid $Dark-Black;
      }
    }
    &__dropdown-color-circle-fill {
      border-radius: 50%;
      width: 15px;
      height: 15px;
    }
  }
  .slider-range {
    display: flex;
    align-items: center;
    gap: 1.875rem;
    font-family: "Pragmatica Book";
    font-size: 1rem;

    &__range {
      width: 175px;
      margin: 1.875rem 0;
    }
  }
  .sorting {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 46px;
    margin: 2.5rem 0;

    &__text {
      font-family: "Pragmatica Book";
      font-size: 0.938rem;
      color: #b5b5b5;
    }
    &__container {
      display: flex;
      align-items: center;
      gap: 4.375rem;
      font-family: "Pragmatica Book";
      font-size: 0.938rem;
    }
    &__content {
      display: flex;
      align-items: center;
      gap: 1.563rem;
    }
    &__btns {
      display: flex;
      gap: 0.625rem;
    }
    &__btn {
      @include btn;
      width: 50px;
      height: 45px;
      border: 1px solid #eeeeee;
      font-family: "Pragmatica Book";
      font-size: 0.938rem;
      color: #414141;

      &.active {
        background-color: $Light-Black;
        color: #ffffff;
      }
      &.disabled {
        background-color: #e9ecef;
        color: #6c757d;
        cursor: not-allowed;
        border: 1px solid #d3d9dd;
      }
    }
    &__body {
      display: flex;
      align-items: center;
      gap: 2.75rem;
    }
    &__dropdown-btn {
      @include btn;
      justify-content: space-between;
      width: 272px;
      height: 46px;
      padding: 1.125rem 1.25rem;
      border: 1px solid #eeeeee;
      font-family: "Pragmatica Medium";
      font-size: 0.938rem;
      white-space: nowrap;
    }
    &__list {
      position: absolute;
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      width: 272px;
      list-style-type: none;
      background-color: #fff;
      border: 1px solid #eeeeee;
      border-top: none;
      margin: 0;
      padding: 1.25rem;
      z-index: 2;
    }
    &__list-item {
      cursor: pointer;

      &:hover,
      &.active {
        font-family: "Pragmatica Bold";
        color: $Dark-Black;
      }
    }
  }
}
</style>
