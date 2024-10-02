<template>
  <UIBreadcrumb :breadcrumbTitle="title"></UIBreadcrumb>
  <main>
    <h1 class="title">
      {{ title }}
    </h1>
    <UIButton
      @click="showAddPostForm"
      v-if="isAdmin && !isAddPostVisible && isAddPostBtnVisible"
      class="add-post-btn"
      :content="'Добавить новый пост'"
      width="100%"
    ></UIButton>
    <div v-if="isAddPostVisible" class="add-post">
      <div v-if="!isLoading || !isMessageVisible" class="add-post__title-body">
        <h2 class="add-post__subtitle">Добавить новый пост</h2>
        <button @click="closeAddPostForm" class="add-post__close-btn">
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
      <form @submit.prevent="handleAddPost" class="add-post__form">
        <div v-if="!isMessageVisible" class="add-post__container">
          <span
            v-if="areFieldsEmpty"
            class="add-post__notice add-post__empty-notice"
            >Важно заполнить все поля.</span
          >
          <div class="add-post__content">
            <span class="add-post__title">
              Изображение <span class="add-post__title--red">*</span></span
            >
            <div @click="triggerFileInput" class="add-post__img-upload-area">
              <span
                v-if="!uploadImgs.length"
                class="add-post__upload-area-text"
              >
                <span class="add-post__upload-area-text--medium"
                  >Нажмите для загрузки</span
                ><br />
                Доступные расширения фото: jpeg, jpg, png, webp
              </span>
              <div v-else class="add-post__img-preview">
                <div
                  v-for="(img, index) in uploadImgs"
                  :key="index"
                  class="add-post__img-container"
                >
                  <button
                    type="button"
                    @click="deleteImage(index, $event)"
                    class="add-post__delete-btn"
                  >
                    <img src="public/imgs/cross-round-borders.png" alt="" />
                  </button>
                  <img :src="img" alt="upload-image" class="add-post__img" />
                </div>
              </div>
              <input
                type="file"
                ref="fileInput"
                class="add-post__input"
                accept="image/jpeg, image/jpg, image/png, image/webp"
                @change="handleFileChange"
                multiple
              />
            </div>
          </div>
          <div class="add-post__body">
            <div class="add-post__content">
              <span class="add-post__title">
                Категория <span class="add-post__title--red">*</span></span
              >
              <input
                v-model="newPost.category"
                placeholder="Введите категорию"
                type="text"
                class="add-post__field"
              />
            </div>
            <div class="add-post__content">
              <span class="add-post__title"
                >Название <span class="add-post__title--red">*</span></span
              >
              <input
                v-model="newPost.title"
                placeholder="Введите заголовок"
                type="text"
                class="add-post__field"
              />
            </div>
          </div>
          <div class="add-post__body">
            <div class="add-post__content">
              <span class="add-post__title">
                Описание <span class="add-post__title--red">*</span></span
              >
              <input
                v-model="newPost.desc"
                placeholder="Введите описание"
                type="text"
                class="add-post__field"
              />
            </div>
            <div class="add-post__content">
              <span class="add-post__title">
                Введение <span class="add-post__title--red">*</span></span
              >
              <input
                v-model="newPost.intro"
                placeholder="Введите введение"
                type="text"
                class="add-post__field"
              />
            </div>
          </div>
          <div class="add-post__body">
            <div
              v-if="newPost.sections && newPost.sections[0]"
              class="add-post__content"
            >
              <span class="add-post__title">
                Заголовок 1 <span class="add-post__title--red">*</span></span
              >
              <input
                v-model="newPost.sections[0].header"
                placeholder="Введите заголовок 1"
                type="text"
                class="add-post__field"
              />
            </div>
            <div
              v-if="newPost.sections && newPost.sections[0]"
              class="add-post__content"
            >
              <span class="add-post__title">
                Абзацы 1 <span class="add-post__title--red">*</span></span
              >
              <div
                v-for="(paragraph, index) in newPost.sections[0].paragraphs"
                :key="index"
              >
                <input
                  v-model="newPost.sections[0].paragraphs[index]"
                  placeholder="Введите абзац"
                  class="add-post__field"
                />
              </div>
            </div>
          </div>
          <div class="add-post__body">
            <div
              v-if="newPost.sections && newPost.sections[1]"
              class="add-post__content"
            >
              <span class="add-post__title">
                Заголовок 2 <span class="add-post__title--red">*</span></span
              >
              <input
                v-model="newPost.sections[1].header"
                placeholder="Введите заголовок 2"
                type="text"
                class="add-post__field"
              />
            </div>
            <div
              v-if="newPost.sections && newPost.sections[1]"
              class="add-post__content"
            >
              <span class="add-post__title">
                Абзацы 2 <span class="add-post__title--red">*</span></span
              >
              <div
                v-for="(paragraph, index) in newPost.sections[1].paragraphs"
                :key="index"
              >
                <input
                  v-model="newPost.sections[1].paragraphs[index]"
                  placeholder="Введите абзац"
                  class="add-post__field"
                />
              </div>
            </div>
          </div>
          <UIButton
            type="submit"
            class="add-post__add-post-btn"
            :content="'Сохранить'"
            :width="'100%'"
          ></UIButton>
        </div>
        <div v-if="isLoading" class="loading-container">
          <div
            ref="progressRing"
            class="loading-container__progress-ring"
          ></div>
          <span class="loading-container__text">
            Подождите, сохраняется<br />
            новый пост
          </span>
        </div>
        <div v-if="isMessageVisible" class="thanks-message">
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
          <span class="thanks-message__title">Пост добавлен</span>
          <span class="thanks-message__text"
            >Вы успешно добавили новый пост.</span
          >
        </div>
      </form>
    </div>
    <div v-if="isEditPostVisible" class="edit-post">
      <div v-if="!isLoading || !isMessageVisible" class="add-post__title-body">
        <h2 class="add-post__subtitle">Изменить пост</h2>
        <button @click="closeEditPostForm" class="add-post__close-btn">
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
      <form @submit.prevent="handleEditPost" class="edit-post__form">
        <div v-if="!isMessageVisible" class="edit-post__container">
          <span
            v-if="areFieldsEmpty"
            class="edit-post__notice edit-post__empty-notice"
            >Важно заполнить все поля.</span
          >
          <div class="edit-post__content">
            <span class="edit-post__title">
              Изображение <span class="edit-post__title--red">*</span></span
            >
            <div @click="triggerFileInput" class="edit-post__img-upload-area">
              <span
                v-if="!uploadImgs.length"
                class="edit-post__upload-area-text"
              >
                <span class="edit-post__upload-area-text--medium"
                  >Нажмите для загрузки</span
                ><br />
                Доступные расширения фото: jpeg, jpg, png, webp
              </span>
              <div v-else class="edit-post__img-preview">
                <div
                  v-for="(img, index) in uploadImgs"
                  :key="index"
                  class="edit-post__img-container"
                >
                  <button
                    type="button"
                    @click="deleteImage(index, $event)"
                    class="edit-post__delete-btn"
                  >
                    <img src="public/imgs/cross-round-borders.png" alt="" />
                  </button>
                  <img :src="img" alt="upload-image" class="edit-post__img" />
                </div>
              </div>
              <input
                type="file"
                ref="fileInput"
                class="edit-post__input"
                accept="image/jpeg, image/jpg, image/png, image/webp"
                @change="handleFileChange"
                multiple
              />
            </div>
          </div>
          <div class="edit-post__body">
            <div class="edit-post__content">
              <span class="edit-post__title">
                Категория <span class="edit-post__title--red">*</span></span
              >
              <input
                v-model="newPost.category"
                placeholder="Введите категорию"
                type="text"
                class="edit-post__field"
              />
            </div>
            <div class="edit-post__content">
              <span class="edit-post__title"
                >Название <span class="edit-post__title--red">*</span></span
              >
              <input
                v-model="newPost.title"
                placeholder="Введите заголовок"
                type="text"
                class="edit-post__field"
              />
            </div>
          </div>
          <div class="edit-post__body">
            <div class="edit-post__content">
              <span class="edit-post__title">
                Описание <span class="edit-post__title--red">*</span></span
              >
              <input
                v-model="newPost.desc"
                placeholder="Введите описание"
                type="text"
                class="edit-post__field"
              />
            </div>
            <div class="edit-post__content">
              <span class="edit-post__title">
                Введение <span class="edit-post__title--red">*</span></span
              >
              <input
                v-model="newPost.intro"
                placeholder="Введите введение"
                type="text"
                class="edit-post__field"
              />
            </div>
          </div>
          <div class="edit-post__body">
            <div
              v-if="newPost.sections && newPost.sections[0]"
              class="edit-post__content"
            >
              <span class="edit-post__title">
                Заголовок 1 <span class="edit-post__title--red">*</span></span
              >
              <input
                v-model="newPost.sections[0].header"
                placeholder="Введите заголовок 1"
                type="text"
                class="edit-post__field"
              />
            </div>
            <div
              v-if="newPost.sections && newPost.sections[0]"
              class="edit-post__content"
            >
              <span class="edit-post__title">
                Абзацы 1 <span class="edit-post__title--red">*</span></span
              >
              <div
                v-for="(paragraph, index) in newPost.sections[0].paragraphs"
                :key="index"
              >
                <input
                  v-model="newPost.sections[0].paragraphs[index]"
                  placeholder="Введите абзац"
                  class="edit-post__field"
                />
              </div>
            </div>
          </div>
          <div class="edit-post__body">
            <div
              v-if="newPost.sections && newPost.sections[1]"
              class="edit-post__content"
            >
              <span class="edit-post__title">
                Заголовок 2 <span class="edit-post__title--red">*</span></span
              >
              <input
                v-model="newPost.sections[1].header"
                placeholder="Введите заголовок 2"
                type="text"
                class="edit-post__field"
              />
            </div>
            <div
              v-if="newPost.sections && newPost.sections[1]"
              class="edit-post__content"
            >
              <span class="edit-post__title">
                Абзацы 2 <span class="edit-post__title--red">*</span></span
              >
              <div
                v-for="(paragraph, index) in newPost.sections[1].paragraphs"
                :key="index"
              >
                <input
                  v-model="newPost.sections[1].paragraphs[index]"
                  placeholder="Введите абзац"
                  class="edit-post__field"
                />
              </div>
            </div>
          </div>
          <UIButton
            type="submit"
            class="edit-post__add-post-btn"
            :content="'Изменить'"
            :width="'100%'"
          ></UIButton>
        </div>
        <div v-if="isLoading" class="loading-container">
          <div
            ref="progressRing"
            class="loading-container__progress-ring"
          ></div>
          <span class="loading-container__text">
            Подождите, изменения<br />
            сохраняются
          </span>
        </div>
        <div v-if="isMessageVisible" class="thanks-message">
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
          <span class="thanks-message__title">Пост изменён</span>
          <span class="thanks-message__text">Вы успешно изменили пост.</span>
        </div>
      </form>
    </div>
    <div class="posts-list">
      <div class="sidebar">
        <UIDropDown></UIDropDown>
        <UIMailing class="mailing mailing--visible-from1200px"></UIMailing>
      </div>
      <UIBlogPostsList @editPost="handleEditPostVisible"></UIBlogPostsList>
    </div>
    <UIPagination></UIPagination>
    <UIMailing class="mailing mailing--visible-till1200px"></UIMailing>
  </main>
</template>

<script setup lang="ts">
import { usePostsStore } from "@/store/Posts";
import type { BlogPost } from "@/types/BlogPosts";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import lottie from "lottie-web";

const store = usePostsStore();
const title = computed(() => store.getTitle);

onMounted(() => {
  useHead({
    title: `Блог о Nike - Sneakers Store | ${title.value}`,
    meta: [
      {
        name: "description",
        content:
          "Наш блог - это кладезь информации о Nike. Обзоры новинок, советы по выбору и уходу за кроссовками Nike, статьи, а также актуальные новости. Подписывайтесь, чтобы быть в курсе!",
      },
      {
        name: "keywords",
        content:
          "блог, Nike, Sneakers Store, новости, статьи, советы, обзоры, выбор кроссовок Nike, уход за кроссовками Nike",
      },
    ],
  });
});

const isAdmin = ref(false);
onMounted(() => {
  const storedValue = localStorage.getItem("isAdmin");
  isAdmin.value = storedValue === "true";
});

const isAddPostBtnVisible = ref(true);
const isAddPostVisible = ref(false);
const showAddPostForm = () => {
  isAddPostVisible.value = true;
};

const closeAddPostForm = () => {
  isAddPostVisible.value = false;
  isAddPostBtnVisible.value = true;
  areFieldsEmpty.value = false;
};
const closeEditPostForm = () => {
  resetEditPostForm();
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
          uploadImgs.value = [e.target.result as string];
          newPost.value.hero = e.target.result as string;
        }
      };
      reader.readAsDataURL(file);
    }
  }
};
const deleteImage = (index: number, event: Event) => {
  event.stopPropagation();
  uploadImgs.value.splice(index, 1);
  newPost.value.hero = "";
};

const newPost = ref<BlogPost>({
  id: 0,
  hero: "",
  category: "",
  title: "",
  desc: "",
  date: format(new Date(), "d MMMM yyyy", { locale: ru }),
  intro: "",
  sections: [
    {
      header: "",
      paragraphs: [""],
    },
    {
      header: "",
      paragraphs: [""],
    },
  ],
});
const { allPosts } = storeToRefs(store);
const areFieldsEmpty = ref(false);
const isLoading = ref(false);
const isFormVisible = ref(true);
const progressRing = ref<HTMLElement | null>(null);
const isMessageVisible = ref(false);
const animatedTick = ref<HTMLElement | null>(null);
const animationOfTick = ref<any>(null);
const handleAddPost = async () => {
  const requiredFields: (keyof BlogPost)[] = [
    "hero",
    "category",
    "title",
    "desc",
    "intro",
  ];
  const isValid = requiredFields.every((field) => {
    const value = newPost.value[field];
    return typeof value === "string" && value.trim() !== "";
  });
  const areSectionsValid = newPost.value.sections.every((section) => {
    const isHeaderValid = section.header.trim() !== "";
    const areParagraphsValid = section.paragraphs.every((paragraph) => {
      return typeof paragraph === "string" && paragraph.trim() !== "";
    });
    return isHeaderValid && areParagraphsValid;
  });
  if (!isValid || !areSectionsValid) {
    areFieldsEmpty.value = true;
    return;
  }

  newPost.value.date = format(new Date(), "d MMMM yyyy", { locale: ru });

  const latestPost = allPosts.value[allPosts.value.length - 1];
  if (latestPost) {
    newPost.value.id = latestPost.id + 1;
  } else {
    newPost.value.id = 1;
  }
  await store.addPost(newPost.value);
  resetForm();
  uploadImgs.value = [];
  isLoading.value = true;
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
      isFormVisible.value = false;
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
  isAddPostVisible.value = false;
  isMessageVisible.value = false;
  animationOfTick.value!.destroy();
};
const resetForm = () => {
  newPost.value = {
    id: 0,
    hero: "",
    category: "",
    title: "",
    desc: "",
    date: "",
    intro: "",
    sections: [
      {
        header: "",
        paragraphs: [""],
      },
      {
        header: "",
        paragraphs: [""],
      },
    ],
  };
};

const isEditPostVisible = ref(false);
const handleEditPost = async () => {
  const requiredFields: (keyof BlogPost)[] = [
    "hero",
    "category",
    "title",
    "desc",
    "intro",
  ];
  const isValid = requiredFields.every((field) => {
    const value = newPost.value[field];
    return typeof value === "string" && value.trim() !== "";
  });
  const areSectionsValid = newPost.value.sections.every((section) => {
    const isHeaderValid = section.header.trim() !== "";
    const areParagraphsValid = section.paragraphs.every((paragraph) => {
      return typeof paragraph === "string" && paragraph.trim() !== "";
    });
    return isHeaderValid && areParagraphsValid;
  });
  if (!isValid || !areSectionsValid) {
    areFieldsEmpty.value = true;
    return;
  }

  if (newPost.value.category && newPost.value.title) {
    try {
      await store.editPost(newPost.value);
      resetEditPostForm();
    } catch (error) {
      console.error("Error updating post:", error);
    }
  } else {
    areFieldsEmpty.value = true;
  }
};
const handleEditPostVisible = (post: BlogPost) => {
  window.scrollTo(0, 0);
  isEditPostVisible.value = true;
  isAddPostVisible.value = false;
  isAddPostBtnVisible.value = false;
  newPost.value = { ...post };
  if (post.hero) {
    uploadImgs.value = [post.hero];
  }
};
const resetEditPostForm = () => {
  resetForm();
  isEditPostVisible.value = false;
  areFieldsEmpty.value = false;
  isAddPostBtnVisible.value = true;
};

const route = useRoute();

watch(
  () => route.params.category,
  (newCategory) =>
    store.setCategory(
      newCategory as string,
      (newCategory as string).toUpperCase()
    ),
  { immediate: true }
);
watch(
  () => route.query.page,
  (newPage) => store.setPage(Number(newPage) || 1),
  { immediate: true }
);

let selectedCategory = ref("");

const pageNum = parseInt(route.query.page as string);
const totalPages = computed(() => store.totalPages);

const categoryMapping: { [key: string]: string } = {
  "все-публикации": "ВСЕ ПУБЛИКАЦИИ",
  новости: "НОВОСТИ",
  статьи: "СТАТЬИ",
  советы: "СОВЕТЫ",
  обзоры: "ОБЗОРЫ",
};

const router = useRouter();
const updateCategory = () => {
  const category = (route.params.category as string).toLowerCase();
  const selectedValue =
    categoryMapping[category as keyof typeof categoryMapping];

  if (selectedValue) {
    if (route.params.category !== category) {
      router.replace({
        name: route.name,
        params: { ...route.params, category },
        query: { ...route.query },
      });
    }
    selectedCategory.value = category;
    store.routeCategory = category;
    store.ruCategory = selectedValue;
    store.setCategory(selectedCategory.value, selectedValue);
    store.filterPosts(store.ruCategory);
  } else {
    throw createError({ statusCode: 404, statusMessage: "Page Not Found" });
  }
};

const checkPageValidity = () => {
  if (route.query.page && pageNum <= totalPages.value && pageNum > 0) {
    store.currentPage = pageNum;
  } else {
    throw createError({ statusCode: 404, statusMessage: "Page Not Found" });
  }
};

onMounted(() => {
  if (route.query.page) {
    updateCategory();
    checkPageValidity();
  }
});
</script>

<style lang="scss" scoped>
@import "@/assets/App.scss";
.title {
  color: $Dark-Black;
  margin-top: 0.938rem;
  margin-bottom: 1.25rem;
}
.add-post-btn {
  margin-top: 1.25rem;
}
.add-post {
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
  &__add-post-btn {
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
.edit-post-btn {
  margin-top: 1.25rem;
}
.edit-post {
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
  &__add-post-btn {
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
.posts-list {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    "dropdown"
    "post-1"
    "post-2"
    "post-3"
    "post-4"
    "post-5"
    "post-6"
    "post-7"
    "post-8"
    "post-9"
    "post-10";
  gap: 0.938rem;
  margin-top: 1.25rem;
  margin-bottom: 3.75rem;
}
.mailing--visible-from1200px {
  display: none;
}
/* 768px = 48em */
@media (min-width: 48em) {
  .title {
    margin-bottom: 0;
  }
  .add-post {
    &__close-btn svg {
      width: 15px;
      height: 15px;
    }
  }
  .edit-post {
    &__close-btn svg {
      width: 15px;
      height: 15px;
    }
  }
  .posts-list {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, auto);
    grid-template-areas:
      "post-1 dropdown"
      "post-2 post-3"
      "post-4 post-5"
      "post-6 post-7"
      "post-8 post-9"
      "post-10 ...";
    margin-bottom: 3.125rem;
  }
}
/* 1200px = 75em */
@media (min-width: 75em) {
  .add-post-btn {
    margin-top: 2.5rem;
  }
  .add-post {
    &__body {
      flex-direction: row;
    }
    &__content {
      width: 100%;
    }
  }
  .edit-post-btn {
    margin-top: 2.5rem;
  }
  .edit-post {
    &__body {
      flex-direction: row;
    }
    &__content {
      width: 100%;
    }
  }
  .posts-list {
    grid-template-columns: 1fr 1fr 325px;
    grid-template-rows: auto;
    grid-template-areas:
      "post-1 post-2 sidebar"
      "post-3 post-4 sidebar"
      "post-5 post-6 sidebar"
      "post-7 post-8 sidebar"
      "post-9 post-10 sidebar";
    row-gap: 0.938rem;
    margin-bottom: 5.625rem;
  }
  .sidebar {
    grid-area: sidebar;
    position: sticky;
    top: 3rem;
    margin-bottom: 19.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.938rem;
    height: fit-content;
  }
  .mailing {
    display: block;
    width: 325px;
    margin-top: 0.938rem;
    margin-bottom: calc(0.938rem - 100%);
  }
  .mailing--visible-till1200px {
    display: none;
  }
}
/* 1440px = 90em */
@media (min-width: 90em) {
  .posts-list {
    grid-template-columns: 1fr 1fr 355px;
    gap: 1.25rem;
  }
  .sidebar {
    margin-bottom: 21rem;
  }
  .mailing {
    width: 355px;
    margin-top: 1.25rem;
    margin-bottom: calc(1.25rem - 100%);
  }
}
</style>
