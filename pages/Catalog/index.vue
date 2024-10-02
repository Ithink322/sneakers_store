<template>
  <UIBreadcrumb :breadcrumbTitle="'Каталог товаров'"></UIBreadcrumb>
  <div v-if="arePoductsAvailable" class="titles-container">
    <h1 class="titles-container__title">
      {{
        route.query.search
          ? `Результаты поиска “${route.query.search}”`
          : "Все модели"
      }}
    </h1>
    <span class="titles-container__text">
      {{ route.query.search ? store.filteredProducts.length : totalProducts }}
      {{
        conjugateTovar(
          route.query.search ? store.filteredProducts.length : totalProducts
        )
      }}
    </span>
  </div>
  <UIButton
    @click="showAddProductForm"
    v-if="isAdmin && !isAddProductVisible && isAddProductBtnVisible"
    class="add-product-btn"
    :content="'Добавить новый товар'"
    width="100%"
  ></UIButton>
  <div v-if="isAddProductVisible" class="add-product">
    <div
      v-if="!isLoading || !isAddMessageVisible"
      class="add-product__title-body"
    >
      <h2 class="add-product__subtitle">Добавить новый продукт</h2>
      <button @click="closeAddProductForm" class="add-product__close-btn">
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
            fill="black"
          />
        </svg>
      </button>
    </div>
    <form @submit.prevent="handleAddProduct" class="add-product__form">
      <div v-if="!isAddMessageVisible" class="add-product__container">
        <span
          v-if="areFieldsEmpty"
          class="add-product__notice add-product__empty-notice"
          >Важно заполнить все поля.</span
        >
        <div class="add-product__content">
          <span class="add-product__title">
            Изображения <span class="add-product__title--red">*</span></span
          >
          <div @click="triggerFileInput" class="add-product__img-upload-area">
            <span
              v-if="!uploadImgs.length"
              class="add-product__upload-area-text"
            >
              <span class="add-product__upload-area-text--medium"
                >Нажмите для загрузки</span
              ><br />
              Доступные расширения фото: jpeg, jpg, png, webp, svg
            </span>
            <div v-else class="add-product__img-preview">
              <div
                v-for="(img, index) in uploadImgs"
                :key="index"
                class="add-product__img-container"
              >
                <button
                  type="button"
                  @click="deleteImage(index, $event)"
                  class="add-product__delete-btn"
                >
                  <img src="public/imgs/cross-round-borders.png" alt="" />
                </button>
                <img :src="img" alt="upload-image" class="add-product__img" />
              </div>
            </div>
            <input
              type="file"
              ref="fileInput"
              class="add-product__input"
              accept="image/jpeg, image/jpg, image/png, image/webp, image/svg+xml"
              @change="handleFileChange"
              multiple
            />
          </div>
        </div>
        <div class="add-product__body">
          <div class="add-product__content">
            <span class="add-product__title">
              Пол <span class="add-product__title--red">*</span></span
            >
            <input
              v-model="newProduct.gender"
              placeholder="Введите пол"
              type="text"
              class="add-product__field"
            />
          </div>
          <div class="add-product__content">
            <span class="add-product__title"
              >Название <span class="add-product__title--red">*</span></span
            >
            <input
              v-model="newProduct.title"
              placeholder="Введите название"
              type="text"
              class="add-product__field"
            />
          </div>
        </div>
        <div class="add-product__content">
          <span class="add-product__title">
            Описание <span class="add-product__title--red">*</span></span
          >
          <input
            v-model="newProduct.desc"
            placeholder="Введите описание"
            type="text"
            class="add-product__field"
          />
        </div>
        <div class="add-product__body">
          <div class="add-product__content">
            <span class="add-product__title">
              Характеристики: пол
              <span class="add-product__title--red">*</span></span
            >
            <input
              v-model="newProduct.specs.gender"
              placeholder="Введите пол"
              type="text"
              class="add-product__field"
            />
          </div>
          <div class="add-product__content">
            <span class="add-product__title">
              Характеристики: страна производства
              <span class="add-product__title--red">*</span></span
            >
            <input
              v-model="newProduct.specs.country"
              placeholder="Введите страну производства"
              type="text"
              class="add-product__field"
            />
          </div>
        </div>
        <div class="add-product__body">
          <div class="add-product__content">
            <span class="add-product__title">
              Характеристики: материал
              <span class="add-product__title--red">*</span></span
            >
            <input
              v-model="newProduct.specs.composition"
              placeholder="Введите материал"
              type="text"
              class="add-product__field"
            />
          </div>
          <div class="add-product__content">
            <span class="add-product__title">
              Характеристики: коллекция
              <span class="add-product__title--red">*</span></span
            >
            <input
              v-model="newProduct.specs.collection"
              placeholder="Введите коллекцию"
              type="text"
              class="add-product__field"
            />
          </div>
        </div>
        <div class="add-product__body">
          <div class="add-product__content">
            <span class="add-product__title">
              Характеристики: гарантия
              <span class="add-product__title--red">*</span></span
            >
            <input
              v-model="newProduct.specs.warranty"
              placeholder="Введите гарантию"
              type="text"
              class="add-product__field"
            />
          </div>
          <div class="add-product__content">
            <span class="add-product__title">
              Характеристики: год выпуска
              <span class="add-product__title--red">*</span></span
            >
            <input
              v-model="newProduct.specs.yearOfRelease"
              placeholder="Введите год выпуска"
              type="text"
              class="add-product__field"
            />
          </div>
        </div>
        <div class="add-product__body">
          <div class="add-product__content">
            <span class="add-product__title">
              Размеры
              <span class="add-product__title--red">*</span></span
            >
            <input
              @input="handleSizeInputChange"
              v-model="newProduct.sizes"
              placeholder="Введите размеры"
              type="text"
              class="add-product__field"
            />
          </div>
          <div class="add-product__content">
            <span class="add-product__title">
              Цвета
              <span class="add-product__title--red">*</span></span
            >
            <input
              @input="handleColorInputChange"
              v-model="newProduct.colors"
              placeholder="Введите цвета"
              type="text"
              class="add-product__field"
            />
          </div>
        </div>
        <div class="add-product__body">
          <div class="add-product__content">
            <span class="add-product__title">
              Текущая цена
              <span class="add-product__title--red">*</span></span
            >
            <input
              v-model="newProduct.currentPrice"
              placeholder="Введите текущую цену"
              type="text"
              class="add-product__field"
            />
          </div>
          <div class="add-product__content">
            <span class="add-product__title">
              Прошлая цена
              <span class="add-product__title--red">*</span></span
            >
            <input
              v-model="newProduct.previousPrice"
              placeholder="Введите прошлую цену"
              type="text"
              class="add-product__field"
            />
          </div>
        </div>
        <div class="add-product__body">
          <div class="add-product__content">
            <span class="add-product__title">
              Цвет категории
              <span class="add-product__title--red">*</span></span
            >
            <input
              v-model="newProduct.categoryBackgroundColor"
              placeholder="Введите цвет категории"
              type="text"
              class="add-product__field"
            />
          </div>
          <div class="add-product__content">
            <span class="add-product__title">
              Категория
              <span class="add-product__title--red">*</span></span
            >
            <input
              v-model="newProduct.category"
              placeholder="Введите категорию"
              type="text"
              class="add-product__field"
            />
          </div>
        </div>
        <UIButton
          type="submit"
          class="add-product__add-product-btn"
          :content="'Сохранить'"
          :width="'100%'"
        ></UIButton>
      </div>
      <div v-if="isLoading" class="loading-container">
        <div
          ref="addProgressRing"
          class="loading-container__progress-ring"
        ></div>
        <span class="loading-container__text">
          Подождите, сохраняется<br />
          новый товар
        </span>
      </div>
      <div v-if="isAddMessageVisible" class="thanks-message">
        <button
          @click="closeAddThanksMessage"
          class="thanks-message__close-btn"
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
              fill="#454A4C"
            />
          </svg>
        </button>
        <div ref="addAnimatedTick" class="thanks-message__tick"></div>
        <span class="thanks-message__title">Товар добавлен</span>
        <span class="thanks-message__text"
          >Вы успешно добавили новый товар.</span
        >
      </div>
    </form>
  </div>
  <div v-if="isEditProductVisible" class="edit-product">
    <div
      v-if="!isLoading || !isEditMessageVisible"
      class="edit-product__title-body"
    >
      <h2 class="edit-product__subtitle">Изменить товар</h2>
      <button @click="closeEditProductForm" class="edit-product__close-btn">
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
            fill="black"
          />
        </svg>
      </button>
    </div>
    <form @submit.prevent="handleEditProduct" class="edit-product__form">
      <div v-if="!isEditMessageVisible" class="edit-product__container">
        <span
          v-if="areFieldsEmpty"
          class="edit-product__notice edit-product__empty-notice"
          >Важно заполнить все поля.</span
        >
        <div class="edit-product__content">
          <span class="edit-product__title">
            Изображения <span class="edit-product__title--red">*</span></span
          >
          <div @click="triggerFileInput" class="edit-product__img-upload-area">
            <span
              v-if="!uploadImgs.length"
              class="edit-product__upload-area-text"
            >
              <span class="edit-product__upload-area-text--medium"
                >Нажмите для загрузки</span
              ><br />
              Доступные расширения фото: jpeg, jpg, png, webp, svg
            </span>
            <div v-else class="edit-product__img-preview">
              <div
                v-for="(img, index) in uploadImgs"
                :key="index"
                class="edit-product__img-container"
              >
                <button
                  type="button"
                  @click="deleteImage(index, $event)"
                  class="edit-product__delete-btn"
                >
                  <img src="public/imgs/cross-round-borders.png" alt="" />
                </button>
                <img :src="img" alt="upload-image" class="edit-product__img" />
              </div>
            </div>
            <input
              type="file"
              ref="fileInput"
              class="edit-product__input"
              accept="image/jpeg, image/jpg, image/png, image/webp, image/svg+xml"
              @change="handleFileChange"
              multiple
            />
          </div>
        </div>
        <div class="edit-product__body">
          <div class="edit-product__content">
            <span class="edit-product__title">
              Пол <span class="edit-product__title--red">*</span></span
            >
            <input
              v-model="newProduct.gender"
              placeholder="Введите пол"
              type="text"
              class="edit-product__field"
            />
          </div>
          <div class="edit-product__content">
            <span class="edit-product__title"
              >Название <span class="edit-product__title--red">*</span></span
            >
            <input
              v-model="newProduct.title"
              placeholder="Введите название"
              type="text"
              class="edit-product__field"
            />
          </div>
        </div>
        <div class="edit-product__content">
          <span class="edit-product__title">
            Описание <span class="edit-product__title--red">*</span></span
          >
          <input
            v-model="newProduct.desc"
            placeholder="Введите описание"
            type="text"
            class="edit-product__field"
          />
        </div>
        <div class="edit-product__body">
          <div class="edit-product__content">
            <span class="edit-product__title">
              Характеристики: пол
              <span class="edit-product__title--red">*</span></span
            >
            <input
              v-model="newProduct.specs.gender"
              placeholder="Введите пол"
              type="text"
              class="edit-product__field"
            />
          </div>
          <div class="edit-product__content">
            <span class="edit-product__title">
              Характеристики: страна производства
              <span class="edit-product__title--red">*</span></span
            >
            <input
              v-model="newProduct.specs.country"
              placeholder="Введите страну производства"
              type="text"
              class="edit-product__field"
            />
          </div>
        </div>
        <div class="edit-product__body">
          <div class="edit-product__content">
            <span class="edit-product__title">
              Характеристики: материал
              <span class="edit-product__title--red">*</span></span
            >
            <input
              v-model="newProduct.specs.composition"
              placeholder="Введите материал"
              type="text"
              class="edit-product__field"
            />
          </div>
          <div class="edit-product__content">
            <span class="edit-product__title">
              Характеристики: коллекция
              <span class="edit-product__title--red">*</span></span
            >
            <input
              v-model="newProduct.specs.collection"
              placeholder="Введите коллекцию"
              type="text"
              class="edit-product__field"
            />
          </div>
        </div>
        <div class="edit-product__body">
          <div class="edit-product__content">
            <span class="edit-product__title">
              Характеристики: гарантия
              <span class="edit-product__title--red">*</span></span
            >
            <input
              v-model="newProduct.specs.warranty"
              placeholder="Введите гарантию"
              type="text"
              class="edit-product__field"
            />
          </div>
          <div class="edit-product__content">
            <span class="edit-product__title">
              Характеристики: год выпуска
              <span class="edit-product__title--red">*</span></span
            >
            <input
              v-model="newProduct.specs.yearOfRelease"
              placeholder="Введите год выпуска"
              type="text"
              class="edit-product__field"
            />
          </div>
        </div>
        <div class="edit-product__body">
          <div class="edit-product__content">
            <span class="edit-product__title">
              Размеры
              <span class="edit-product__title--red">*</span></span
            >
            <input
              @input="handleSizeInputChange"
              v-model="newProduct.sizes"
              placeholder="Введите размеры"
              type="text"
              class="edit-product__field"
            />
          </div>
          <div class="edit-product__content">
            <span class="edit-product__title">
              Цвета
              <span class="edit-product__title--red">*</span></span
            >
            <input
              @input="handleColorInputChange"
              v-model="newProduct.colors"
              placeholder="Введите цвета"
              type="text"
              class="edit-product__field"
            />
          </div>
        </div>
        <div class="edit-product__body">
          <div class="edit-product__content">
            <span class="edit-product__title">
              Текущая цена
              <span class="edit-product__title--red">*</span></span
            >
            <input
              v-model="newProduct.currentPrice"
              placeholder="Введите текущую цену"
              type="text"
              class="edit-product__field"
            />
          </div>
          <div class="edit-product__content">
            <span class="edit-product__title">
              Прошлая цена
              <span class="edit-product__title--red">*</span></span
            >
            <input
              v-model="newProduct.previousPrice"
              placeholder="Введите прошлую цену"
              type="text"
              class="edit-product__field"
            />
          </div>
        </div>
        <div class="edit-product__body">
          <div class="edit-product__content">
            <span class="edit-product__title">
              Цвет категории
              <span class="edit-product__title--red">*</span></span
            >
            <input
              v-model="newProduct.categoryBackgroundColor"
              placeholder="Введите цвет категории"
              type="text"
              class="edit-product__field"
            />
          </div>
          <div class="edit-product__content">
            <span class="edit-product__title">
              Категория
              <span class="edit-product__title--red">*</span></span
            >
            <input
              v-model="newProduct.category"
              placeholder="Введите категорию"
              type="text"
              class="edit-product__field"
            />
          </div>
        </div>
        <UIButton
          type="submit"
          class="edit-product__edit-product-btn"
          :content="'Изменить'"
          :width="'100%'"
        ></UIButton>
      </div>
      <div v-if="isLoading" class="loading-container">
        <div
          ref="editProgressRing"
          class="loading-container__progress-ring"
        ></div>
        <span class="loading-container__text">
          Подождите, изменения<br />
          сохраняются
        </span>
      </div>
      <div v-if="isEditMessageVisible" class="thanks-message">
        <button
          @click="closeEditThanksMessage"
          class="thanks-message__close-btn"
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
              fill="#454A4C"
            />
          </svg>
        </button>
        <div ref="editAnimatedTick" class="thanks-message__tick"></div>
        <span class="thanks-message__title">Товар изменён</span>
        <span class="thanks-message__text">Вы успешно изменили товар.</span>
      </div>
    </form>
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
  <div v-if="arePoductsAvailable" class="sorting">
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
    v-if="
      paginatedProducts.length === 0 &&
      (filtersStore.pickedCategoryFilters?.length || 0) > 0 &&
      !route.query.search
    "
    :text="'С выбранными фильтрами ничего не найдено.'"
    :fill="'#f8f8f8'"
  ></UIMessage>
  <div
    v-if="paginatedProducts.length === 0 && !!route.query.search"
    class="container-message"
  >
    <UIMessage
      :text="'По вашему запросу ничего не найдено. Проверьте правильность ввода или попробуйте уточнить поиск'"
      :fill="'#f8f8f8'"
    ></UIMessage>
    <UIButton
      class="catalog-btn"
      :link="`/catalog?page=${store.currentPage}`"
      :content="'Показать все продукты'"
      :bodyBgColor="'#ff6915'"
      :arrowBgColor="'#fb5a00'"
      :width="catalogBtnWidth"
    ></UIButton>
  </div>
  <UIProductList
    v-if="paginatedProducts.length > 0"
    @editProduct="handleEditProductVisible"
  ></UIProductList>
  <UIPagination
    v-if="filteredProductsLength > store.productsPerPage"
  ></UIPagination>
</template>

<script setup lang="ts">
import lottie from "lottie-web";
import type { Product } from "@/types/Product";
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

const isAdmin = ref(false);
onMounted(() => {
  const storedValue = localStorage.getItem("isAdmin");
  isAdmin.value = storedValue === "true";
});

const isAddProductBtnVisible = ref(true);
const isAddProductVisible = ref(false);
const showAddProductForm = () => {
  isAddProductVisible.value = true;
};

const closeAddProductForm = () => {
  isAddProductVisible.value = false;
  isAddProductBtnVisible.value = true;
  areFieldsEmpty.value = false;
};
const closeEditProductForm = () => {
  resetEditProductForm();
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
          const imageDataUrl = e.target.result as string;
          if (!newProduct.value.heroes.includes(imageDataUrl)) {
            uploadImgs.value.push(imageDataUrl);
            newProduct.value.heroes.push(imageDataUrl);
          }
        }
      };
      reader.readAsDataURL(file);
    }
  }
};
const deleteImage = (index: number, event: Event) => {
  event.stopPropagation();
  uploadImgs.value.splice(index, 1);
  newProduct.value.heroes = [...uploadImgs.value];
  if (newProduct.value.heroes.length === 0) {
    newProduct.value.heroes = [];
  }
};

const handleSizeInputChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target.value) {
    newProduct.value.sizes = target.value
      .split(",")
      .map((size) => parseFloat(size.trim()))
      .filter((size) => !isNaN(size));
  } else {
    newProduct.value.sizes = [];
  }
};

const handleColorInputChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target.value) {
    newProduct.value.colors = target.value
      .split(",")
      .map((color) => color.trim())
      .filter((color) => color.length > 0);
  } else {
    newProduct.value.colors = [];
  }
};

const newProduct = ref<Product>({
  id: 0,
  heroes: [],
  gender: "",
  title: "",
  desc: "",
  specs: {
    gender: "",
    country: "",
    composition: "",
    collection: "",
    warranty: "",
    yearOfRelease: 2018,
  },
  sizes: [],
  colors: [],
  currentPrice: "",
  previousPrice: "",
  categoryBackgroundColor: "",
  category: "",
});
const store = useProductsStore();
const { allProducts } = storeToRefs(store);
const areFieldsEmpty = ref(false);
const isLoading = ref(false);
const addProgressRing = ref<HTMLElement | null>(null);
const editProgressRing = ref<HTMLElement | null>(null);
const isAddMessageVisible = ref(false);
const isEditMessageVisible = ref(false);
const addAnimatedTick = ref<HTMLElement | null>(null);
const addAnimationOfTick = ref<any>(null);
const editAnimatedTick = ref<HTMLElement | null>(null);
const editAnimationOfTick = ref<any>(null);
const handleAddProduct = async () => {
  uploadImgs.value = [];
  const requiredFields: (keyof Product)[] = [
    "heroes",
    "gender",
    "title",
    "desc",
    "sizes",
    "colors",
    "currentPrice",
    "previousPrice",
    "categoryBackgroundColor",
    "category",
  ];
  const requiredSpecsFields: (keyof Product["specs"])[] = [
    "gender",
    "country",
    "composition",
    "collection",
    "warranty",
    "yearOfRelease",
  ];
  const invalidFields = requiredFields.filter((field) => {
    const value = newProduct.value[field];
    const isValid =
      (typeof value === "string" && value.trim() !== "") ||
      (Array.isArray(value) && value.length > 0);

    if (Array.isArray(value)) {
      if (value.length === 0) {
        console.log(`Array field "${field}" is invalid. It is empty.`);
        return true;
      }
    } else if (!isValid) {
      console.log(`Field "${field}" is invalid. Current value:`, value);
      return true;
    }

    return false;
  });
  const invalidSpecsFields = requiredSpecsFields.filter((field) => {
    const value = newProduct.value.specs[field];
    const isValid =
      (typeof value === "string" && value.trim() !== "") ||
      (typeof value === "number" && value > 0);

    if (!isValid) {
      console.log(`Spec field "${field}" is invalid. Current value:`, value);
    }
    return !isValid;
  });
  if (invalidFields.length > 0 || invalidSpecsFields.length > 0) {
    areFieldsEmpty.value = true;
    return;
  }

  const latestProduct = allProducts.value[allProducts.value.length - 1];
  if (latestProduct) {
    newProduct.value.id = latestProduct.id + 1;
  } else {
    newProduct.value.id = 1;
  }

  if (!newProduct.value.heroes || newProduct.value.heroes.length === 0) {
    const existingProduct = await store.getProductById(newProduct.value.id);
    console.log("existingProduct:", existingProduct);
    if (existingProduct) {
      newProduct.value.heroes = existingProduct.heroes;
    }
  }

  await store.addProduct(newProduct.value);
  await store.filterProducts();
  resetForm();
  uploadImgs.value = [];
  isLoading.value = true;
  nextTick(() => {
    const animation = lottie.loadAnimation({
      container: addProgressRing.value!,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/animations/progress-ring.json",
    });
    setTimeout(() => {
      isLoading.value = false;
      animation.destroy();
      isAddProductVisible.value = false;
      isAddMessageVisible.value = true;

      nextTick(() => {
        if (addAnimatedTick.value) {
          addAnimationOfTick.value = lottie.loadAnimation({
            container: addAnimatedTick.value!,
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
const closeAddThanksMessage = () => {
  isAddProductVisible.value = false;
  isAddMessageVisible.value = false;
  addAnimationOfTick.value!.destroy();
};
const resetForm = () => {
  newProduct.value = {
    id: 0,
    heroes: [],
    gender: "",
    title: "",
    desc: "",
    specs: {
      gender: "",
      country: "",
      composition: "",
      collection: "",
      warranty: "",
      yearOfRelease: 2018,
    },
    sizes: [],
    colors: [],
    currentPrice: "",
    previousPrice: "",
    categoryBackgroundColor: "",
    category: "",
  };
};

const isEditProductVisible = ref(false);
const handleEditProduct = async () => {
  const requiredFields: (keyof Product)[] = [
    "heroes",
    "gender",
    "title",
    "desc",
    "sizes",
    "colors",
    "currentPrice",
    "previousPrice",
    "categoryBackgroundColor",
    "category",
  ];
  const requiredSpecsFields: (keyof Product["specs"])[] = [
    "gender",
    "country",
    "composition",
    "collection",
    "warranty",
    "yearOfRelease",
  ];
  const invalidFields = requiredFields.filter((field) => {
    const value = newProduct.value[field];
    const isValid =
      (typeof value === "string" && value.trim() !== "") ||
      (Array.isArray(value) && value.length > 0);

    if (Array.isArray(value)) {
      if (value.length === 0) {
        console.log(`Array field "${field}" is invalid. It is empty.`);
        return true;
      }
    } else if (!isValid) {
      console.log(`Field "${field}" is invalid. Current value:`, value);
      return true;
    }

    return false;
  });
  const invalidSpecsFields = requiredSpecsFields.filter((field) => {
    const value = newProduct.value.specs[field];
    const isValid =
      (typeof value === "string" && value.trim() !== "") ||
      (typeof value === "number" && value > 0);

    if (!isValid) {
      console.log(`Spec field "${field}" is invalid. Current value:`, value);
    }
    return !isValid;
  });
  if (invalidFields.length > 0 || invalidSpecsFields.length > 0) {
    areFieldsEmpty.value = true;
    return;
  }

  if (newProduct.value.category && newProduct.value.title) {
    isLoading.value = true;
    try {
      await store.editProduct(newProduct.value);
      await store.filterProducts();
      resetEditProductForm();

      nextTick(() => {
        const animation = lottie.loadAnimation({
          container: editProgressRing.value!,
          renderer: "svg",
          loop: true,
          autoplay: true,
          path: "/animations/progress-ring.json",
        });

        setTimeout(() => {
          animation.destroy();
          isLoading.value = false;
          isEditProductVisible.value = false;
          isEditMessageVisible.value = true;

          nextTick(() => {
            if (editAnimatedTick.value) {
              editAnimationOfTick.value = lottie.loadAnimation({
                container: editAnimatedTick.value!,
                renderer: "svg",
                loop: false,
                autoplay: true,
                path: "/animations/tick.json",
              });
            }
          });
        }, 2800);
      });
    } catch (error) {
      console.error("Error updating product:", error);
      isLoading.value = false;
    }
  } else {
    areFieldsEmpty.value = true;
  }
};
const closeEditThanksMessage = () => {
  isEditProductVisible.value = false;
  isEditMessageVisible.value = false;
  editAnimationOfTick.value!.destroy();
};
const handleEditProductVisible = (product: Product) => {
  window.scrollTo(0, 0);
  isEditProductVisible.value = true;
  isAddProductBtnVisible.value = false;
  newProduct.value = { ...product };
  uploadImgs.value = [...product.heroes];
  newProduct.value = {
    ...product,
    heroes: [...product.heroes],
    sizes: product.sizes || [],
    colors: product.colors || [],
  };
};
const resetEditProductForm = () => {
  resetForm();
  isEditProductVisible.value = false;
  areFieldsEmpty.value = false;
  isAddProductBtnVisible.value = true;
};

const windowWidth = ref(0);
const updateWidth = () => {
  if (typeof window !== "undefined") {
    windowWidth.value = window.innerWidth;
  }
};
const catalogBtnWidth = computed(() => {
  return windowWidth.value < 768 ? "100%" : "300px";
});
onMounted(() => {
  updateWidth();
  window.addEventListener("resize", updateWidth);
});
onBeforeUnmount(() => {
  window.removeEventListener("resize", updateWidth);
});

onMounted(() => {
  document.body.style.overflow = "";
});

const sizes = ref(sizesArr);
const colors = ref(colorsObj);
const materials = ref(materialsArr);

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

const totalProducts = computed(() => store.allProducts.length);
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
      query: {
        ...route.query,
        page: 1,
      },
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
      query: {
        ...route.query,
        page: 1,
      },
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
      query: {
        ...route.query,
        page: 1,
      },
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
      query: {
        ...route.query,
        page: 1,
      },
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
      query: {
        ...route.query,
        page: 1,
      },
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
      query: {
        ...route.query,
        page: 1,
      },
    });
  }
};
const arePoductsAvailable = ref(false);
onMounted(() => {
  arePoductsAvailable.value = true;
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

  const productsToSort = [...store.filteredProducts];

  if (option === "возрастанию цены") {
    productsToSort.sort(
      (a, b) => parsePrice(a.currentPrice) - parsePrice(b.currentPrice)
    );
  } else if (option === "убыванию цены") {
    productsToSort.sort(
      (a, b) => parsePrice(b.currentPrice) - parsePrice(a.currentPrice)
    );
  } else if (option.includes("рейтинга")) {
    productsToSort.sort((a, b) => {
      if (option === "возрастанию рейтинга") {
        return (a.averageRating || 0) - (b.averageRating || 0);
      } else if (option === "убыванию рейтинга") {
        return (b.averageRating || 0) - (a.averageRating || 0);
      }
      return 0;
    });
  }

  store.filteredProducts = productsToSort;
};

onMounted(() => {
  store.filterProducts();
});
watch(
  () => route.query.search,
  () => {
    store.filterProducts();
  }
);
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
.add-product-btn {
  margin-bottom: 1.25rem;
}
.add-product {
  margin-bottom: 1.25rem;

  &__title-body {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__subtitle {
    font-family: "Pragmatica Medium";
    font-size: 1.313rem;
    line-height: 32px;
    color: #1d1d27;
    margin: 0.938rem 0;
  }
  &__close-btn {
    @include btn;
  }
  &__form {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 0.938rem;
    border: 1px solid #eaeaea;
  }
  &__container {
    display: flex;
    flex-direction: column;
    gap: 0.938rem;
    width: 100%;
  }
  &__notice {
    font-family: "Pragmatica Book";
    line-height: 1.688rem;
    color: #f81d2a;
  }
  &__body {
    display: flex;
    flex-direction: column;
    gap: 0.938rem;
  }
  &__content {
    display: flex;
    flex-direction: column;
    gap: 0.313rem;
  }
  &__title {
    font-family: "Pragmatica Book";
    font-size: 0.938rem;
    line-height: 27px;
  }
  &__title--red {
    color: #ff1515;
  }
  &__field {
    padding: 1.031rem 1.25rem;
    border: 1px solid #d6d6d6;
    outline: none;
    width: 100%;
    font-family: "Pragmatica Book";
    font-size: 1rem;
    color: #000;
  }
  &__field::placeholder {
    font-family: "Pragmatica Book";
    font-size: 1rem;
    color: #c1c1c1;
  }
  &__field:focus {
    border: 1px solid #000;
  }
  &__add-product-btn {
    margin-top: 0.938rem;
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
.edit-product-btn {
  margin-top: 1.25rem;
}
.edit-product {
  margin-bottom: 1.25rem;

  &__title-body {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__subtitle {
    font-family: "Pragmatica Medium";
    font-size: 1.313rem;
    line-height: 32px;
    color: #1d1d27;
    margin: 0.938rem 0;
  }
  &__close-btn {
    @include btn;
  }
  &__form {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 0.938rem;
    border: 1px solid #eaeaea;
  }
  &__container {
    display: flex;
    flex-direction: column;
    gap: 0.938rem;
    width: 100%;
  }
  &__notice {
    font-family: "Pragmatica Book";
    line-height: 1.688rem;
    color: #f81d2a;
  }
  &__body {
    display: flex;
    flex-direction: column;
    gap: 0.938rem;
  }
  &__content {
    display: flex;
    flex-direction: column;
    gap: 0.313rem;
  }
  &__title {
    font-family: "Pragmatica Book";
    font-size: 0.938rem;
    line-height: 27px;
  }
  &__title--red {
    color: #ff1515;
  }
  &__field {
    padding: 1.031rem 1.25rem;
    border: 1px solid #d6d6d6;
    outline: none;
    width: 100%;
    font-family: "Pragmatica Book";
    font-size: 1rem;
    color: #000;
  }
  &__field::placeholder {
    font-family: "Pragmatica Book";
    font-size: 1rem;
    color: #c1c1c1;
  }
  &__field:focus {
    border: 1px solid #000;
  }
  &__add-product-btn {
    margin-top: 0.938rem;
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
.loading-container {
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

  &__progress-ring {
    width: 74px;
    height: 74px;
  }
  &__text {
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
.container-message {
  display: flex;
  flex-direction: column;
  gap: 1.875rem;
  justify-content: center;
}
.catalog-btn {
  margin: 0rem auto;
  width: 100%;
}
/* 768px = 48em */
@media (min-width: 48em) {
  .add-product {
    &__close-btn svg {
      width: 15px;
      height: 15px;
    }
  }
  .edit-product {
    &__close-btn svg {
      width: 15px;
      height: 15px;
    }
  }
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
  .container-message {
    gap: 1.25rem;
  }
  .catalog-btn {
    width: 300px;
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
  .add-product-btn {
    margin-bottom: 2.5rem;
  }
  .add-product {
    margin-bottom: 2.5rem;

    &__body {
      flex-direction: row;
    }
    &__content {
      width: 100%;
    }
  }
  .edit-product-btn {
    margin-top: 2.5rem;
  }
  .edit-product {
    margin-bottom: 2.5rem;

    &__body {
      flex-direction: row;
    }
    &__content {
      width: 100%;
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
      transition: all 0.3s ease;

      &:hover,
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
      transition: all 0.3s ease;

      &:hover,
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
