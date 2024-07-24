<template>
  <UIBreadcrumb :breadcrumbTitle="'О компании'"></UIBreadcrumb>
  <main>
    <div class="about-container">
      <h1 class="about-container__title">
        ИНТЕРНЕТ-МАГАЗИН<br />
        <div class="about-container__content-flex">
          SNEAKERS STORE
          <span class="about-container__line"></span>
        </div>
      </h1>
      <div class="content">
        <p class="content__paragraph content__paragraph--margin">
          Добро пожаловать в
          <span class="content__text content__text--bold">Sneakers Store</span>
          – ваш источник подлинных кроссовок Nike и<br
            class="content__span-br content__span-br--from1024px"
          />
          непревзойденного стиля! Мы рады представить вам уникальную
          онлайн-платформу, где вы<br
            class="content__span-br content__span-br--from1024px"
          />
          сможете окунуться в мир инноваций и моды от легендарного бренда
          спортивной обуви.
        </p>
      </div>
      <img src="/imgs/about-hero.svg" alt="" class="about-container__hero" />
    </div>
    <div class="recomm-mail-flex">
      <div class="recomendations">
        <p
          class="recomendations__paragraph recomendations__paragraph--margintop"
        >
          Наши кроссовки отличаются не только эстетическим великолепием, но и
          функциональностью. Мы предлагаем широкий выбор моделей для разных
          видов спорта, от бега до баскетбола, и для различных повседневных
          ситуаций. Будь то икона стиля, такая как Air Max, или универсальная
          классика, как Air Force 1 - у нас есть именно то, что подойдет вам.
        </p>
        <p>
          На SneakersStore мы ценим ваше доверие и комфортность при покупке. Вся
          наша обувь поставляется непосредственно от производителя, что
          гарантирует вам аутентичность каждой пары кроссовок. Мы также
          предлагаем удобные опции доставки и безопасные методы оплаты, чтобы
          сделать ваш опыт покупки максимально приятным и беззаботным.
        </p>
        <p>
          Присоединяйтесь к нашему сообществу любителей Nike, чтобы разделить
          радость от качественной обуви и уникального стиля. Мы всегда готовы
          помочь вам с выбором, ответить на вопросы и обеспечить вас идеальной
          парой кроссовок, которая подчеркнет вашу индивидуальность и даст вам
          уверенность в каждом шаге.
        </p>
        <p
          class="recomendations__paragraph recomendations__text--bold recomendations__paragraph--marginbottom"
        >
          Спасибо, что выбираете SneakersStore – ваш источник оригинальных
          кроссовок Nike!
        </p>
      </div>
      <UIMailing></UIMailing>
    </div>
    <div class="benefits">
      <UIBenefits></UIBenefits>
    </div>
    <div class="about-us-posts-flex">
      <UIAboutUs></UIAboutUs>
      <UIRecentPostsList></UIRecentPostsList>
    </div>
  </main>
</template>

<script setup lang="ts">
useHead({
  title: "О нас - Sneakers Store | Ваша команда любителей Nike",
  meta: [
    {
      name: "description",
      content:
        "Sneakers Store - команда настоящих энтузиастов Nike, которые знают все о кроссовках этой легендарной марки. Узнайте о нашей истории и стремлении сделать ваш выбор Nike максимально удобным.",
    },
    {
      name: "keywords",
      content:
        "Sneakers Store, о нас, команда, история, интернет-магазин, Nike, кроссовки Nike",
    },
  ],
});
</script>

<style lang="scss">
@import "@/assets/App.scss";
.about-container {
  &__title {
    font-size: 1.5rem;
    margin-top: 0.938rem;
  }
  &__content-flex {
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
}
.content {
  &__paragraph {
    font-family: "Pragmatica Book";
  }
  &__text--bold {
    font-family: "Pragmatica Bold";
  }
  &__paragraph--margin {
    margin-top: 1.25rem;
    margin-bottom: 1.688rem;
  }
  &__span-br--from1024px {
    display: none;
  }
}
.recomm-mail-flex {
  display: flex;
  flex-direction: column;
}
.recomendations {
  &__paragraph {
    font-family: "Pragmatica Book";
  }
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
.benefits {
  margin-top: 3.75rem;
}
.about-us-posts-flex {
  display: flex;
  flex-direction: column;
  gap: 2.688rem;
}
.about-us-posts-flex .about-us-flex .about-us-flex__more-btn-link .more-btn {
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
  .about-us-posts-flex {
    gap: 3.125rem;
  }
  .about-us-posts-flex {
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
  .content {
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
  .recomm-mail-flex {
    flex-direction: row;
    align-items: center;
    gap: 5rem;
    margin-top: 3.875rem;
  }
  .benefits {
    margin-top: 6.875rem;
  }
  .about-us-posts-flex {
    margin-top: 0rem;
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
  .about-us-posts-flex {
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
