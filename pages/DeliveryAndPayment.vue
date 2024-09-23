<template>
  <UIBreadcrumb :breadcrumbTitle="'Доставка и оплата'"></UIBreadcrumb>
  <main>
    <section class="entry">
      <h1 class="entry__title">Доставка и оплата</h1>
      <p class="entry__desc">
        Мы стремимся сделать процесс получения вашего заказа максимально удобным
        и прозрачным. Пожалуйста, ознакомьтесь с вариантами доставки и способами
        оплаты, предоставленными ниже:
      </p>
    </section>
    <section class="section">
      <h2 class="section__title">Доставка:</h2>
      <p class="section__desc">
        Мы сотрудничаем с транспортной компанией СДЭК для обеспечения надежной и
        быстрой доставки в любой уголок России. При оформлении заказа вы можете
        выбрать один из следующих вариантов доставки:
      </p>
      <div class="section__body body">
        <div class="body__content content">
          <div class="content__num">1.</div>
          <div class="content__text">
            <span class="content__title">Доставка до пункта выдачи СДЭК:</span>
            <p class="content__desc">
              Воспользуйтесь ближайшим пунктом выдачи СДЭК для получения вашего
              заказа. Это удобно и позволяет вам выбрать место и время
              получения.
            </p>
          </div>
        </div>
        <div class="body__content content">
          <div class="content__num">2.</div>
          <div class="content__text">
            <span class="content__title">Доставка курьером до двери:</span>
            <p class="content__desc">
              Если вы предпочитаете комфорт доставки прямо до вашего дома или
              офиса, выберите этот вариант. Курьер свяжется с вами для
              согласования удобного времени доставки.
            </p>
          </div>
        </div>
        <div class="body__content content">
          <div class="content__num">3.</div>
          <div class="content__text">
            <span class="content__title">Самовывоз:</span>
            <p class="content__desc">
              Вы можете забрать ваш заказ самостоятельно в одном из наших
              магазинов в городах Курск или Москва. Этот вариант подходит для
              тех, кто предпочитает личное общение и быстрый доступ к своему
              заказу.
            </p>
            <span class="content__title content__title--margintop"
              >Адреса магазинов:</span
            >
            <p class="content__desc">
              Курск, улица Карла Маркса 6, 2 этаж. Москва, Сокольническая
              площадь, дом 9А, 2 этаж.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="section payment-section">
      <h2 class="section__title">Оплата:</h2>
      <p class="section__desc">
        Мы предоставляем разнообразные способы оплаты, чтобы обеспечить ваш
        комфорт:
      </p>
      <div class="section__body body">
        <div class="body__content content">
          <div class="content__num">1.</div>
          <div class="content__text">
            <span class="content__title">Онлайн-оплата:</span>
            <p class="content__desc">
              Вы можете оплатить ваш заказ онлайн на нашем сайте. Мы принимаем
              платежи с помощью банковских карт, что обеспечивает быстроту и
              безопасность транзакции.
            </p>
          </div>
        </div>
        <div class="body__content content">
          <div class="content__num">2.</div>
          <div class="content__text">
            <span class="content__title">Наличными или картой:</span>
            <p class="content__desc">
              Если вы выбрали самовывоз из магазина, вы можете оплатить заказ
              наличными или картой прямо в магазине.
            </p>
          </div>
        </div>
      </div>
    </section>
    <div class="individual-order">
      <div class="individual-order__text text">
        <span class="text__title">Индивидуальный заказ:</span>
        <p class="text__desc">
          Если заказываете больше 30 товаров одной позиции, то оставьте заявку в
          разделе индивидуальный заказ.
        </p>
        <p class="text__desc">
          При оформлении индивидуального заказа требуется 100% предоплата. Это
          гарантирует резервирование товара специально для вас и обеспечивает
          его создание согласно вашим уникальным предпочтениям.
        </p>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
useHead({
  title: "Доставка и оплата - Sneakers Store | Условия доставки Nike",
  meta: [
    {
      name: "description",
      content:
        "Узнайте о вариантах доставки, стоимости и сроках доставки заказов Nike в Sneakers Store. Ознакомьтесь с доступными способами оплаты.",
    },
    {
      name: "keywords",
      content:
        "Sneakers Store, доставка, оплата, условия доставки, способы оплаты, сроки доставки, Nike, кроссовки Nike",
    },
  ],
});
</script>

<style lang="scss" scoped>
@import "@/assets/App.scss";
.entry {
  margin-bottom: 1.375rem;

  &__title {
    margin-top: 0.938rem;
  }
  &__desc {
    font-family: "Pragmatica Book";
    font-size: 0.938rem;
    line-height: 1.625rem;
    margin-top: 0.938rem;
    margin-bottom: 0rem;
  }
}
.payment-section {
  margin-top: 4rem;
  margin-bottom: 0.625rem;
}
.section {
  &__title {
    font-family: "Pragmatica Medium";
    font-size: 1.375rem;
    margin-top: 0rem;
    margin-bottom: 0.625rem;
  }
  &__desc {
    font-family: "Pragmatica Book";
    font-size: 0.938rem;
    line-height: 1.563rem;
    margin: 0rem;
  }
  &__body {
    margin-top: 0.625rem;
  }
}
.body {
  display: flex;
  flex-direction: column;
  gap: 1.563rem;
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
  &__title {
    font-family: "Pragmatica Bold";
    line-height: 1.688rem;
    color: #2e2e2e;
  }
  &__title--margintop {
    display: block;
    margin-top: 1.563rem;
  }
  &__desc {
    font-family: "Pragmatica Book";
    line-height: 1.688rem;
    color: #2e2e2e;
    margin: 0rem;
  }
}
.individual-order {
  padding: 1.25rem 1.563rem 1.25rem 1.563rem;
  background-color: #fafafa;
}
.text {
  &__title {
    font-family: "Pragmatica Bold";
    font-size: 1.188rem;
  }
  &__desc {
    font-family: "Pragmatica Book";
    font-size: 1rem;
    line-height: 1.688rem;
    margin: 0rem;
  }
}

/* 1200px = 75em */
@media (min-width: 75em) {
  .entry {
    margin-top: 1.563rem;

    &__desc {
      font-size: 1.125rem;
    }
  }
  .payment-section {
    margin-top: 2.5rem;
    margin-bottom: 1rem;
  }
  .section {
    &__title {
      font-size: 2.188rem;
    }
    &__desc {
      font-size: 1rem;
    }
  }
}
</style>
