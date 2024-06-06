<template>
  <UIBreadcrump :breadcrumpTitle="'Доставка и оплата'"></UIBreadcrump>
  <section class="entry">
    <h1 class="entry__title">Доставка и оплата</h1>
    <p class="entry__paragraph">
      Мы стремимся сделать процесс получения вашего заказа максимально удобным и
      прозрачным. Пожалуйста, ознакомьтесь с вариантами доставки и способами
      оплаты, предоставленными ниже:
    </p>
  </section>
  <section class="section">
    <h2 class="section__title">Доставка:</h2>
    <p class="section__paragraph">
      Мы сотрудничаем с транспортной компанией СДЭК для обеспечения надежной и
      быстрой доставки в любой уголок России. При оформлении заказа вы можете
      выбрать один из следующих вариантов доставки:
    </p>
    <div class="section__points-main-flex points-main-flex">
      <div class="points-main-flex__num-and-point-flex num-and-point-flex">
        <div class="num-and-point-flex__num">1.</div>
        <span class="num-and-point-flex__point point">
          <span class="point__title">Доставка до пункта выдачи СДЭК:</span>
          <p class="point__paragraph">
            Воспользуйтесь ближайшим пунктом выдачи СДЭК для получения вашего
            заказа. Это удобно и позволяет вам выбрать место и время получения.
          </p>
        </span>
      </div>
      <div class="points-main-flex__num-and-point-flex num-and-point-flex">
        <div class="num-and-point-flex__num">2.</div>
        <span class="num-and-point-flex__point point">
          <span class="point__title">Доставка курьером до двери:</span>
          <p class="point__paragraph">
            Если вы предпочитаете комфорт доставки прямо до вашего дома или
            офиса, выберите этот вариант. Курьер свяжется с вами для
            согласования удобного времени доставки.
          </p>
        </span>
      </div>
      <div class="points-main-flex__num-and-point-flex num-and-point-flex">
        <div class="num-and-point-flex__num">3.</div>
        <span class="num-and-point-flex__point point">
          <span class="point__title">Самовывоз:</span>
          <p class="point__paragraph">
            Вы можете забрать ваш заказ самостоятельно в одном из наших
            магазинов в городах Ростов-на-Дону или Москва. Этот вариант подходит
            для тех, кто предпочитает личное общение и быстрый доступ к своему
            заказу.
          </p>
          <span class="point__title point__title--margintop"
            >Адреса магазинов:</span
          >
          <p class="point__paragraph">
            Ростов-на-Дону, улица Доватора, дом 158а, -1 этаж. Москва,
            Сокольническая площадь, дом 9А, 2 этаж.
          </p>
        </span>
      </div>
    </div>
  </section>
  <section class="section payment-section">
    <h2 class="section__title">Оплата:</h2>
    <p class="section__paragraph">
      Мы предоставляем разнообразные способы оплаты, чтобы обеспечить ваш
      комфорт:
    </p>
    <div class="section__points-main-flex points-main-flex">
      <div class="points-main-flex__num-and-point-flex num-and-point-flex">
        <div class="num-and-point-flex__num">1.</div>
        <span class="num-and-point-flex__point point">
          <span class="point__title">Онлайн-оплата:</span>
          <p class="point__paragraph">
            Вы можете оплатить ваш заказ онлайн на нашем сайте. Мы принимаем
            платежи с помощью банковских карт, что обеспечивает быстроту и
            безопасность транзакции.
          </p>
        </span>
      </div>
      <div class="points-main-flex__num-and-point-flex num-and-point-flex">
        <div class="num-and-point-flex__num">2.</div>
        <span class="num-and-point-flex__point point">
          <span class="point__title">Наличными или картой:</span>
          <p class="point__paragraph">
            Если вы выбрали самовывоз из магазина, вы можете оплатить заказ
            наличными или картой прямо в магазине.
          </p>
        </span>
      </div>
    </div>
  </section>
  <div class="individual-order">
    <span class="individual-order__content content">
      <span class="content__title">Индивидуальный заказ:</span>
      <p class="content__paragraph">
        При оформлении индивидуального заказа требуется 100% предоплата. Это
        гарантирует резервирование товара специально для вас и обеспечивает его
        создание согласно вашим уникальным предпочтениям.
      </p>
    </span>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/App.scss";
.entry {
  margin-bottom: 1.375rem;

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
  &__paragraph {
    font-family: "Pragmatica Book";
    font-size: 0.938rem;
    line-height: 1.563rem;
    margin: 0rem;
  }
  &__points-main-flex {
    margin-top: 0.625rem;
  }
}
.points-main-flex {
  display: flex;
  flex-direction: column;
  gap: 1.563rem;
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
}
.point {
  font-size: 1rem;
  line-height: 1.688rem;
  color: #2e2e2e;

  &__title {
    font-family: "Pragmatica Bold";
  }
  &__title--margintop {
    display: block;
    margin-top: 1.563rem;
  }
  &__paragraph {
    font-family: "Pragmatica Book";
    margin: 0rem;
  }
}
.individual-order {
  padding: 1.25rem 1.563rem 1.25rem 1.563rem;
  background-color: #fafafa;
}
.content {
  &__title {
    font-family: "Pragmatica Bold";
    font-size: 1.188rem;
  }
  &__paragraph {
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

    &__title {
      font-size: 2.813rem;
    }
    &__paragraph {
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
    &__paragraph {
      font-size: 1rem;
    }
  }
}
</style>
