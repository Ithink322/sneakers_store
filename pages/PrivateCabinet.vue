<template>
  <UIBreadcrumb :breadcrumbTitle="'Личный кабинет'"></UIBreadcrumb>
  <h1 class="title">Личный кабинет</h1>
  <div @click="openMenu" class="menu-btn">
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.25 7.5H8.08333"
        stroke="#1E1E1E"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M2.25 4H12.75"
        stroke="#1E1E1E"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M2.25 11H11.5833"
        stroke="#1E1E1E"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
    ОТКРЫТЬ МЕНЮ КАБИНЕТА
  </div>
  <div v-if="isMenuVisible" class="menu-shadow">
    <button @click="closeMenu" class="menu-shadow__close-btn">
      <img src="/imgs/cross.svg" alt="cross" />
    </button>
    <nav class="menu">
      <button
        @click="privateCabinetStore.setActiveBtn(1)"
        class="menu__btn"
        :class="{ active: privateCabinetStore.activeBtn === 1 }"
      >
        <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.9"
            d="M4.168 17.349C4.41551 16.5252 4.92197 15.8032 5.61225 15.29C6.30252 14.7768 7.13985 14.4997 8 14.5H12C12.8613 14.4997 13.6996 14.7774 14.3904 15.2918C15.0812 15.8062 15.5875 16.5298 15.834 17.355M1 10.5C1 11.6819 1.23279 12.8522 1.68508 13.9442C2.13738 15.0361 2.80031 16.0282 3.63604 16.864C4.47177 17.6997 5.46392 18.3626 6.55585 18.8149C7.64778 19.2672 8.8181 19.5 10 19.5C11.1819 19.5 12.3522 19.2672 13.4442 18.8149C14.5361 18.3626 15.5282 17.6997 16.364 16.864C17.1997 16.0282 17.8626 15.0361 18.3149 13.9442C18.7672 12.8522 19 11.6819 19 10.5C19 9.3181 18.7672 8.14778 18.3149 7.05585C17.8626 5.96392 17.1997 4.97177 16.364 4.13604C15.5282 3.30031 14.5361 2.63738 13.4442 2.18508C12.3522 1.73279 11.1819 1.5 10 1.5C8.8181 1.5 7.64778 1.73279 6.55585 2.18508C5.46392 2.63738 4.47177 3.30031 3.63604 4.13604C2.80031 4.97177 2.13738 5.96392 1.68508 7.05585C1.23279 8.14778 1 9.3181 1 10.5ZM7 8.5C7 9.29565 7.31607 10.0587 7.87868 10.6213C8.44129 11.1839 9.20435 11.5 10 11.5C10.7956 11.5 11.5587 11.1839 12.1213 10.6213C12.6839 10.0587 13 9.29565 13 8.5C13 7.70435 12.6839 6.94129 12.1213 6.37868C11.5587 5.81607 10.7956 5.5 10 5.5C9.20435 5.5 8.44129 5.81607 7.87868 6.37868C7.31607 6.94129 7 7.70435 7 8.5Z"
            stroke="#C7C7C7"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        МОЙ АККАУНТ
      </button>
      <button
        @click="privateCabinetStore.setActiveBtn(2)"
        class="menu__btn"
        :class="{ active: privateCabinetStore.activeBtn === 2 }"
      >
        <svg
          width="23"
          height="23"
          viewBox="0 0 23 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_9855_2941)">
            <path
              opacity="0.9"
              d="M3 21.3947V19.1842C3 18.0117 3.46579 16.8872 4.2949 16.0581C5.124 15.2289 6.24852 14.7632 7.42105 14.7632H11.2895M5.21053 5.92105C5.21053 7.09359 5.67631 8.2181 6.50542 9.04721C7.33453 9.87632 8.45904 10.3421 9.63158 10.3421C10.8041 10.3421 11.9286 9.87632 12.7577 9.04721C13.5868 8.2181 14.0526 7.09359 14.0526 5.92105C14.0526 4.74852 13.5868 3.624 12.7577 2.7949C11.9286 1.96579 10.8041 1.5 9.63158 1.5C8.45904 1.5 7.33453 1.96579 6.50542 2.7949C5.67631 3.624 5.21053 4.74852 5.21053 5.92105ZM16.7274 15.4374C16.9429 15.2218 17.1988 15.0509 17.4804 14.9342C17.762 14.8176 18.0639 14.7575 18.3687 14.7575C18.6735 14.7575 18.9753 14.8176 19.257 14.9342C19.5386 15.0509 19.7945 15.2218 20.01 15.4374C20.2255 15.6529 20.3965 15.9088 20.5132 16.1904C20.6298 16.472 20.6899 16.7739 20.6899 17.0787C20.6899 17.3835 20.6298 17.6853 20.5132 17.967C20.3965 18.2486 20.2255 18.5045 20.01 18.72L16.2632 22.5H12.9474V19.1842L16.7274 15.4374Z"
              stroke="#C7C7C7"
              stroke-width="1.6"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_9855_2941">
              <rect width="23" height="23" fill="#C7C7C7" />
            </clipPath>
          </defs>
        </svg>
        РЕДАКТИРОВАТЬ ПРОФИЛЬ
      </button>
      <button
        @click="privateCabinetStore.setActiveBtn(3)"
        class="menu__btn"
        :class="{ active: privateCabinetStore.activeBtn === 3 }"
      >
        <svg
          width="23"
          height="23"
          viewBox="0 0 23 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.9"
            d="M13 4.5H21M13 8.5H18M13 14.5H21M13 18.5H18M3 4.5C3 4.23478 3.10536 3.98043 3.29289 3.79289C3.48043 3.60536 3.73478 3.5 4 3.5H8C8.26522 3.5 8.51957 3.60536 8.70711 3.79289C8.89464 3.98043 9 4.23478 9 4.5V8.5C9 8.76522 8.89464 9.01957 8.70711 9.20711C8.51957 9.39464 8.26522 9.5 8 9.5H4C3.73478 9.5 3.48043 9.39464 3.29289 9.20711C3.10536 9.01957 3 8.76522 3 8.5V4.5ZM3 14.5C3 14.2348 3.10536 13.9804 3.29289 13.7929C3.48043 13.6054 3.73478 13.5 4 13.5H8C8.26522 13.5 8.51957 13.6054 8.70711 13.7929C8.89464 13.9804 9 14.2348 9 14.5V18.5C9 18.7652 8.89464 19.0196 8.70711 19.2071C8.51957 19.3946 8.26522 19.5 8 19.5H4C3.73478 19.5 3.48043 19.3946 3.29289 19.2071C3.10536 19.0196 3 18.7652 3 18.5V14.5Z"
            stroke="#C7C7C7"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        МОИ ЗАКАЗЫ
      </button>
      <button
        @click="privateCabinetStore.setActiveBtn(4)"
        class="menu__btn"
        :class="{ active: privateCabinetStore.activeBtn === 4 }"
      >
        <svg
          width="23"
          height="23"
          viewBox="0 0 23 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.9"
            d="M11.0188 20.9835C10.753 20.9863 10.4894 20.936 10.2433 20.8356C9.99721 20.7351 9.77368 20.5865 9.5858 20.3985L5.3418 16.1555C4.35116 15.1644 3.63823 13.9304 3.27438 12.5772C2.91052 11.2239 2.90852 9.79884 3.26856 8.44457C3.6286 7.09029 4.33805 5.85434 5.3259 4.86044C6.31375 3.86654 7.54535 3.14955 8.8974 2.78125C10.2495 2.41295 11.6745 2.40626 13.03 2.76184C14.3854 3.11742 15.6237 3.8228 16.6209 4.80738C17.618 5.79195 18.339 7.02118 18.7118 8.37201C19.0845 9.72285 19.0959 11.1479 18.7448 12.5045M14.9988 21.4985L19.9988 16.4985M19.9988 16.4985V20.9985M19.9988 16.4985H15.4988M7.9988 10.4985C7.9988 11.2942 8.31487 12.0572 8.87748 12.6198C9.44009 13.1824 10.2032 13.4985 10.9988 13.4985C11.7945 13.4985 12.5575 13.1824 13.1201 12.6198C13.6827 12.0572 13.9988 11.2942 13.9988 10.4985C13.9988 9.70286 13.6827 8.9398 13.1201 8.37719C12.5575 7.81458 11.7945 7.49851 10.9988 7.49851C10.2032 7.49851 9.44009 7.81458 8.87748 8.37719C8.31487 8.9398 7.9988 9.70286 7.9988 10.4985Z"
            stroke="#C7C7C7"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        МОЙ АДРЕС
      </button>
      <button
        @click="privateCabinetStore.setActiveBtn(5)"
        class="menu__btn"
        :class="{ active: privateCabinetStore.activeBtn === 5 }"
      >
        <svg
          width="23"
          height="23"
          viewBox="0 0 23 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.9"
            d="M18.6514 5.32294C18.2253 4.90361 17.719 4.5709 17.1615 4.34388C16.604 4.11686 16.0063 4 15.4027 4C14.799 4 14.2013 4.11686 13.6439 4.34388C13.0864 4.5709 12.5801 4.90361 12.154 5.32294L11.5 5.97264L10.846 5.32294C10.4199 4.90361 9.91362 4.5709 9.35614 4.34388C8.79866 4.11686 8.20096 4 7.59733 4C6.9937 4 6.39601 4.11686 5.83852 4.34388C5.28104 4.5709 4.77474 4.90361 4.34865 5.32294C2.54807 7.0888 2.43766 10.0708 4.70537 12.3364L11.5 19L18.2946 12.3364C20.5623 10.0708 20.4519 7.0888 18.6514 5.32294Z"
            stroke="#C7C7C7"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        ИЗБРАННЫЕ ТОВАРЫ
        <div v-if="totalProducts > 0" class="menu__favorites-count-circle">
          {{ totalProducts }}
        </div>
      </button>
      <button
        @click="privateCabinetStore.setActiveBtn(6)"
        class="menu__btn"
        :class="{ active: privateCabinetStore.activeBtn === 6 }"
      >
        <svg
          width="23"
          height="23"
          viewBox="0 0 23 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.9"
            d="M12.0028 11.5C11.7375 11.5 11.4832 11.3946 11.2957 11.2071C11.1081 11.0196 11.0028 10.7652 11.0028 10.5C11.0028 10.2348 11.1081 9.98043 11.2957 9.79289C11.4832 9.60536 11.7375 9.5 12.0028 9.5C12.268 9.5 12.5223 9.60536 12.7099 9.79289C12.8974 9.98043 13.0028 10.2348 13.0028 10.5C13.0028 10.7652 12.8974 11.0196 12.7099 11.2071C12.5223 11.3946 12.268 11.5 12.0028 11.5ZM12.0028 11.5V14M12.0028 2.5C14.3386 4.56658 17.3872 5.64257 20.5028 5.5C20.9564 7.04302 21.0951 8.66147 20.9109 10.2592C20.7266 11.8569 20.2231 13.4013 19.4302 14.8005C18.6373 16.1998 17.5712 17.4254 16.2952 18.4045C15.0193 19.3836 13.5596 20.0962 12.0028 20.5C10.446 20.0962 8.98624 19.3836 7.71031 18.4045C6.43437 17.4254 5.36827 16.1998 4.57536 14.8005C3.78245 13.4013 3.2789 11.8569 3.09464 10.2592C2.91038 8.66147 3.04917 7.04302 3.50276 5.5C6.61829 5.64257 9.66693 4.56658 12.0028 2.5Z"
            stroke="#C7C7C7"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        СМЕНИТЬ ПАРОЛЬ
      </button>
      <button
        @click="privateCabinetStore.setActiveBtn(7)"
        class="menu__btn menu__btn-hiddenBorder"
        :class="{ active: privateCabinetStore.activeBtn === 7 }"
      >
        <svg
          width="23"
          height="23"
          viewBox="0 0 23 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.9"
            d="M14 7.5V5.5C14 4.96957 13.7893 4.46086 13.4142 4.08579C13.0391 3.71071 12.5304 3.5 12 3.5H5C4.46957 3.5 3.96086 3.71071 3.58579 4.08579C3.21071 4.46086 3 4.96957 3 5.5V17.5C3 18.0304 3.21071 18.5391 3.58579 18.9142C3.96086 19.2893 4.46957 19.5 5 19.5H12C12.5304 19.5 13.0391 19.2893 13.4142 18.9142C13.7893 18.5391 14 18.0304 14 17.5V15.5M9 11.5H21M21 11.5L18 8.5M21 11.5L18 14.5"
            stroke="#C7C7C7"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        ВЫЙТИ ИЗ АККАУНТА
      </button>
    </nav>
  </div>
  <div class="container">
    <nav class="nav">
      <button
        @click="privateCabinetStore.setActiveBtn(2)"
        class="nav__btn"
        :class="{ active: privateCabinetStore.activeBtn === 2 }"
      >
        <svg
          width="23"
          height="23"
          viewBox="0 0 23 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_9855_2941)">
            <path
              opacity="0.9"
              d="M3 21.3947V19.1842C3 18.0117 3.46579 16.8872 4.2949 16.0581C5.124 15.2289 6.24852 14.7632 7.42105 14.7632H11.2895M5.21053 5.92105C5.21053 7.09359 5.67631 8.2181 6.50542 9.04721C7.33453 9.87632 8.45904 10.3421 9.63158 10.3421C10.8041 10.3421 11.9286 9.87632 12.7577 9.04721C13.5868 8.2181 14.0526 7.09359 14.0526 5.92105C14.0526 4.74852 13.5868 3.624 12.7577 2.7949C11.9286 1.96579 10.8041 1.5 9.63158 1.5C8.45904 1.5 7.33453 1.96579 6.50542 2.7949C5.67631 3.624 5.21053 4.74852 5.21053 5.92105ZM16.7274 15.4374C16.9429 15.2218 17.1988 15.0509 17.4804 14.9342C17.762 14.8176 18.0639 14.7575 18.3687 14.7575C18.6735 14.7575 18.9753 14.8176 19.257 14.9342C19.5386 15.0509 19.7945 15.2218 20.01 15.4374C20.2255 15.6529 20.3965 15.9088 20.5132 16.1904C20.6298 16.472 20.6899 16.7739 20.6899 17.0787C20.6899 17.3835 20.6298 17.6853 20.5132 17.967C20.3965 18.2486 20.2255 18.5045 20.01 18.72L16.2632 22.5H12.9474V19.1842L16.7274 15.4374Z"
              stroke="#C7C7C7"
              stroke-width="1.6"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_9855_2941">
              <rect width="23" height="23" fill="#C7C7C7" />
            </clipPath>
          </defs>
        </svg>
        РЕДАКТИРОВАТЬ ПРОФИЛЬ
      </button>
      <button
        @click="privateCabinetStore.setActiveBtn(3)"
        class="nav__btn"
        :class="{ active: privateCabinetStore.activeBtn === 3 }"
      >
        <svg
          width="23"
          height="23"
          viewBox="0 0 23 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.9"
            d="M13 4.5H21M13 8.5H18M13 14.5H21M13 18.5H18M3 4.5C3 4.23478 3.10536 3.98043 3.29289 3.79289C3.48043 3.60536 3.73478 3.5 4 3.5H8C8.26522 3.5 8.51957 3.60536 8.70711 3.79289C8.89464 3.98043 9 4.23478 9 4.5V8.5C9 8.76522 8.89464 9.01957 8.70711 9.20711C8.51957 9.39464 8.26522 9.5 8 9.5H4C3.73478 9.5 3.48043 9.39464 3.29289 9.20711C3.10536 9.01957 3 8.76522 3 8.5V4.5ZM3 14.5C3 14.2348 3.10536 13.9804 3.29289 13.7929C3.48043 13.6054 3.73478 13.5 4 13.5H8C8.26522 13.5 8.51957 13.6054 8.70711 13.7929C8.89464 13.9804 9 14.2348 9 14.5V18.5C9 18.7652 8.89464 19.0196 8.70711 19.2071C8.51957 19.3946 8.26522 19.5 8 19.5H4C3.73478 19.5 3.48043 19.3946 3.29289 19.2071C3.10536 19.0196 3 18.7652 3 18.5V14.5Z"
            stroke="#C7C7C7"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        МОИ ЗАКАЗЫ
      </button>
      <button
        @click="privateCabinetStore.setActiveBtn(4)"
        class="nav__btn"
        :class="{ active: privateCabinetStore.activeBtn === 4 }"
      >
        <svg
          width="23"
          height="23"
          viewBox="0 0 23 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.9"
            d="M11.0188 20.9835C10.753 20.9863 10.4894 20.936 10.2433 20.8356C9.99721 20.7351 9.77368 20.5865 9.5858 20.3985L5.3418 16.1555C4.35116 15.1644 3.63823 13.9304 3.27438 12.5772C2.91052 11.2239 2.90852 9.79884 3.26856 8.44457C3.6286 7.09029 4.33805 5.85434 5.3259 4.86044C6.31375 3.86654 7.54535 3.14955 8.8974 2.78125C10.2495 2.41295 11.6745 2.40626 13.03 2.76184C14.3854 3.11742 15.6237 3.8228 16.6209 4.80738C17.618 5.79195 18.339 7.02118 18.7118 8.37201C19.0845 9.72285 19.0959 11.1479 18.7448 12.5045M14.9988 21.4985L19.9988 16.4985M19.9988 16.4985V20.9985M19.9988 16.4985H15.4988M7.9988 10.4985C7.9988 11.2942 8.31487 12.0572 8.87748 12.6198C9.44009 13.1824 10.2032 13.4985 10.9988 13.4985C11.7945 13.4985 12.5575 13.1824 13.1201 12.6198C13.6827 12.0572 13.9988 11.2942 13.9988 10.4985C13.9988 9.70286 13.6827 8.9398 13.1201 8.37719C12.5575 7.81458 11.7945 7.49851 10.9988 7.49851C10.2032 7.49851 9.44009 7.81458 8.87748 8.37719C8.31487 8.9398 7.9988 9.70286 7.9988 10.4985Z"
            stroke="#C7C7C7"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        МОЙ АДРЕС
      </button>
      <button
        @click="privateCabinetStore.setActiveBtn(5)"
        class="nav__btn"
        :class="{ active: privateCabinetStore.activeBtn === 5 }"
      >
        <svg
          width="23"
          height="23"
          viewBox="0 0 23 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.9"
            d="M18.6514 5.32294C18.2253 4.90361 17.719 4.5709 17.1615 4.34388C16.604 4.11686 16.0063 4 15.4027 4C14.799 4 14.2013 4.11686 13.6439 4.34388C13.0864 4.5709 12.5801 4.90361 12.154 5.32294L11.5 5.97264L10.846 5.32294C10.4199 4.90361 9.91362 4.5709 9.35614 4.34388C8.79866 4.11686 8.20096 4 7.59733 4C6.9937 4 6.39601 4.11686 5.83852 4.34388C5.28104 4.5709 4.77474 4.90361 4.34865 5.32294C2.54807 7.0888 2.43766 10.0708 4.70537 12.3364L11.5 19L18.2946 12.3364C20.5623 10.0708 20.4519 7.0888 18.6514 5.32294Z"
            stroke="#C7C7C7"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        ИЗБРАННЫЕ ТОВАРЫ
        <div v-if="totalProducts > 0" class="nav__favorites-count-circle">
          {{ totalProducts }}
        </div>
      </button>
      <button
        @click="privateCabinetStore.setActiveBtn(6)"
        class="nav__btn"
        :class="{ active: privateCabinetStore.activeBtn === 6 }"
      >
        <svg
          width="23"
          height="23"
          viewBox="0 0 23 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.9"
            d="M12.0028 11.5C11.7375 11.5 11.4832 11.3946 11.2957 11.2071C11.1081 11.0196 11.0028 10.7652 11.0028 10.5C11.0028 10.2348 11.1081 9.98043 11.2957 9.79289C11.4832 9.60536 11.7375 9.5 12.0028 9.5C12.268 9.5 12.5223 9.60536 12.7099 9.79289C12.8974 9.98043 13.0028 10.2348 13.0028 10.5C13.0028 10.7652 12.8974 11.0196 12.7099 11.2071C12.5223 11.3946 12.268 11.5 12.0028 11.5ZM12.0028 11.5V14M12.0028 2.5C14.3386 4.56658 17.3872 5.64257 20.5028 5.5C20.9564 7.04302 21.0951 8.66147 20.9109 10.2592C20.7266 11.8569 20.2231 13.4013 19.4302 14.8005C18.6373 16.1998 17.5712 17.4254 16.2952 18.4045C15.0193 19.3836 13.5596 20.0962 12.0028 20.5C10.446 20.0962 8.98624 19.3836 7.71031 18.4045C6.43437 17.4254 5.36827 16.1998 4.57536 14.8005C3.78245 13.4013 3.2789 11.8569 3.09464 10.2592C2.91038 8.66147 3.04917 7.04302 3.50276 5.5C6.61829 5.64257 9.66693 4.56658 12.0028 2.5Z"
            stroke="#C7C7C7"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        СМЕНИТЬ ПАРОЛЬ
      </button>
      <button
        @click="privateCabinetStore.setActiveBtn(7)"
        class="nav__btn nav__btn-hiddenBorder"
        :class="{ active: privateCabinetStore.activeBtn === 7 }"
      >
        <svg
          width="23"
          height="23"
          viewBox="0 0 23 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.9"
            d="M14 7.5V5.5C14 4.96957 13.7893 4.46086 13.4142 4.08579C13.0391 3.71071 12.5304 3.5 12 3.5H5C4.46957 3.5 3.96086 3.71071 3.58579 4.08579C3.21071 4.46086 3 4.96957 3 5.5V17.5C3 18.0304 3.21071 18.5391 3.58579 18.9142C3.96086 19.2893 4.46957 19.5 5 19.5H12C12.5304 19.5 13.0391 19.2893 13.4142 18.9142C13.7893 18.5391 14 18.0304 14 17.5V15.5M9 11.5H21M21 11.5L18 8.5M21 11.5L18 14.5"
            stroke="#C7C7C7"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        ВЫЙТИ ИЗ АККАУНТА
      </button>
    </nav>
    <div v-if="isAddressVisible" class="body">
      <h2 class="subtitle">Мой адрес</h2>
      <div class="address">
        <div class="address__content">
          <svg
            width="19"
            height="21"
            viewBox="0 0 19 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.9"
              d="M9.0188 19.4835C8.75303 19.4863 8.48936 19.436 8.24329 19.3356C7.99721 19.2351 7.77368 19.0865 7.5858 18.8985L3.3418 14.6555C2.35116 13.6644 1.63823 12.4304 1.27438 11.0772C0.910525 9.72393 0.908519 8.29884 1.26856 6.94457C1.6286 5.59029 2.33805 4.35434 3.3259 3.36044C4.31375 2.36654 5.54535 1.64955 6.8974 1.28125C8.24945 0.912951 9.67453 0.906255 11.03 1.26184C12.3854 1.61742 13.6237 2.3228 14.6209 3.30738C15.618 4.29195 16.339 5.52118 16.7118 6.87201C17.0845 8.22285 17.0959 9.64789 16.7448 11.0045M12.9988 19.9985L17.9988 14.9985M17.9988 14.9985V19.4985M17.9988 14.9985H13.4988M5.9988 8.99851C5.9988 9.79416 6.31487 10.5572 6.87748 11.1198C7.44009 11.6824 8.20315 11.9985 8.9988 11.9985C9.79445 11.9985 10.5575 11.6824 11.1201 11.1198C11.6827 10.5572 11.9988 9.79416 11.9988 8.99851C11.9988 8.20286 11.6827 7.4398 11.1201 6.87719C10.5575 6.31458 9.79445 5.99851 8.9988 5.99851C8.20315 5.99851 7.44009 6.31458 6.87748 6.87719C6.31487 7.4398 5.9988 8.20286 5.9988 8.99851Z"
              stroke="#FB5A00"
              stroke-width="1.6"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          АДРЕС ДОСТАВКИ
        </div>
        <span class="address__title">{{
          privateCabinetStore.addressData
            ? privateCabinetStore.addressData.fio
            : "Адрес не добавлен"
        }}</span>
        <div v-if="privateCabinetStore.addressData" class="address__info">
          <span class="address__details">
            {{ privateCabinetStore.addressData.index }},
            {{ privateCabinetStore.addressData.region }},
            {{ privateCabinetStore.addressData.city }},
            {{ privateCabinetStore.addressData.street }},
            {{ privateCabinetStore.addressData.houseNum }}
          </span>
          <div class="address__body">
            <span class="address__number">Телефон</span>
            <span class="address__number-text">{{
              privateCabinetStore.addressData.number
            }}</span>
          </div>
        </div>
        <div
          v-if="!privateCabinetStore.addressData"
          @click="openAddressForm"
          class="address__add-btn"
        >
          <div class="address__circle">
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.5 1V15M1.5 8H15.5"
                stroke="#FF6915"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          Добавить адрес
        </div>
        <div v-if="privateCabinetStore.addressData" class="address__btns">
          <button class="address__btn address__edit-btn">
            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.7344 1.92864C13.9532 1.70977 14.2131 1.53615 14.499 1.4177C14.785 1.29925 15.0915 1.23828 15.401 1.23828C15.7106 1.23828 16.0171 1.29925 16.303 1.4177C16.589 1.53615 16.8488 1.70977 17.0677 1.92864C17.2866 2.14751 17.4602 2.40734 17.5786 2.69331C17.6971 2.97928 17.7581 3.28577 17.7581 3.5953C17.7581 3.90483 17.6971 4.21133 17.5786 4.4973C17.4602 4.78326 17.2866 5.0431 17.0677 5.26197L5.81771 16.512L1.23438 17.762L2.48438 13.1786L13.7344 1.92864Z"
                stroke="#2C2F31"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            РЕДАКТИРОВАТЬ
          </button>
          <button class="address__btn address__delete-btn">
            <svg
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.76562 4.49984H3.43229M3.43229 4.49984H16.7656M3.43229 4.49984V16.1665C3.43229 16.6085 3.60789 17.0325 3.92045 17.345C4.23301 17.6576 4.65693 17.8332 5.09896 17.8332H13.4323C13.8743 17.8332 14.2982 17.6576 14.6108 17.345C14.9234 17.0325 15.099 16.6085 15.099 16.1665V4.49984H3.43229ZM5.93229 4.49984V2.83317C5.93229 2.39114 6.10789 1.96722 6.42045 1.65466C6.73301 1.3421 7.15693 1.1665 7.59896 1.1665H10.9323C11.3743 1.1665 11.7982 1.3421 12.1108 1.65466C12.4234 1.96722 12.599 2.39114 12.599 2.83317V4.49984M7.59896 8.6665V13.6665M10.9323 8.6665V13.6665"
                stroke="#2C2F31"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            УДАЛИТЬ
          </button>
        </div>
      </div>
    </div>
    <div v-if="isEditAddressVisible" class="body">
      <h2 class="subtitle">Редактирование адреса</h2>
      <form @submit.prevent="addAddress" class="edit-address-form">
        <div class="edit-address-form__body">
          <span class="edit-address-form__title"
            >ФИО <span class="edit-address-form__title--red">*</span></span
          >
          <input
            v-model="fio"
            @input="fioOnInput"
            placeholder="Ваше полное имя"
            type="text"
            class="edit-address-form__field"
            :class="{
              'invalid-field': fioIsEmpty,
            }"
          />
          <span v-if="fioIsEmpty" class="error-message">Укажите ФИО</span>
        </div>
        <div class="edit-address-form__body">
          <span class="edit-address-form__title"
            >Название компании
            <span class="edit-address-form__title--red">*</span></span
          >
          <input
            v-model="companyName"
            placeholder="Введите название вашей компании"
            type="text"
            class="edit-address-form__field"
          />
        </div>
        <div class="edit-address-form__content">
          <div class="edit-address-form__body">
            <span class="edit-address-form__title"
              >Область \ Регион
              <span class="edit-address-form__title--red">*</span></span
            >
            <input
              v-model="region"
              @input="regionOnInput"
              placeholder="Область"
              type="text"
              class="edit-address-form__field"
              :class="{
                'invalid-field': regionIsEmpty,
              }"
            />
            <span v-if="regionIsEmpty" class="error-message"
              >Укажите область \ регион</span
            >
          </div>
          <div class="edit-address-form__body">
            <span class="edit-address-form__title"
              >Город <span class="edit-address-form__title--red">*</span></span
            >
            <input
              v-model="city"
              @input="cityOnInput"
              placeholder="Введите название вашего города"
              type="text"
              class="edit-address-form__field"
              :class="{
                'invalid-field': cityIsEmpty,
              }"
            />
            <span v-if="cityIsEmpty" class="error-message"
              >Город обязателен</span
            >
          </div>
        </div>
        <div class="edit-address-form__body">
          <span class="edit-address-form__title"
            >Улица <span class="edit-address-form__title--red">*</span></span
          >
          <input
            v-model="street"
            @input="streetOnInput"
            placeholder="Введите название улицы"
            type="text"
            class="edit-address-form__field"
            :class="{
              'invalid-field': streetIsEmpty,
            }"
          />
          <span v-if="streetIsEmpty" class="error-message">
            Укажите улицу
          </span>
        </div>
        <div class="edit-address-form__content">
          <div class="edit-address-form__body">
            <span class="edit-address-form__title"
              >Индекс <span class="edit-address-form__title--red">*</span></span
            >
            <input
              v-model="index"
              @input="indexOnInput"
              placeholder="Введите индекс"
              type="text"
              class="edit-address-form__field"
              :class="{
                'invalid-field': indexIsEmpty,
              }"
            />
            <span v-if="indexIsEmpty" class="error-message">
              Укажите индекс
            </span>
          </div>
          <div class="edit-address-form__body">
            <span class="edit-address-form__title"
              >Номер дома \ Квартира
              <span class="edit-address-form__title--red">*</span></span
            >
            <input
              v-model="houseNum"
              @input="houseNumOnInput"
              placeholder="Например 37/2"
              type="text"
              class="edit-address-form__field"
              :class="{
                'invalid-field': houseNumIsEmpty,
              }"
            />
            <span v-if="houseNumIsEmpty" class="error-message">
              Укажите индекс
            </span>
          </div>
        </div>
        <UIButton
          class="edit-address-form__btn"
          :content="'Сохранить'"
          :width="'100%'"
        ></UIButton>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFavoritesStore } from "@/store/Favorites";
import { usePrivateCabinetStore } from "@/store/PrivateCabinet";

const isMenuVisible = ref(false);
const openMenu = () => {
  isMenuVisible.value = true;
  window.scrollTo(0, 0);
  document.body.style.overflow = "hidden";
};
const closeMenu = () => {
  isMenuVisible.value = false;
  document.body.style.overflow = "";
};

const privateCabinetStore = usePrivateCabinetStore();

const favoritesStore = useFavoritesStore();
const totalProducts = computed(() => favoritesStore.favorites.length);

const isAddressVisible = ref(true);
const isEditAddressVisible = ref(false);

const openAddressForm = () => {
  isAddressVisible.value = false;
  isEditAddressVisible.value = true;
};

onMounted(() => {
  privateCabinetStore.fetchAddress();
});

const fio = ref<string>("");
const companyName = ref<string>("");
const region = ref<string>("");
const city = ref<string>("");
const street = ref<string>("");
const index = ref<string>("");
const houseNum = ref<string>("");
const fioIsEmpty = ref(false);
const regionIsEmpty = ref(false);
const cityIsEmpty = ref(false);
const streetIsEmpty = ref(false);
const indexIsEmpty = ref(false);
const houseNumIsEmpty = ref(false);
const fioOnInput = () => {
  fioIsEmpty.value = fio.value === "";
};
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
const validateForm = () => {
  if (fio.value === "") {
    fioIsEmpty.value = true;
  } else {
    fioIsEmpty.value = false;
  }

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
};
const addAddress = () => {
  validateForm();
  if (
    fio.value !== "" &&
    region.value !== "" &&
    city.value !== "" &&
    street.value !== "" &&
    index.value !== "" &&
    houseNum.value !== ""
  ) {
    privateCabinetStore.addAddress({
      fio: fio.value,
      companyName: companyName.value,
      region: region.value,
      city: city.value,
      street: street.value,
      index: index.value,
      houseNum: houseNum.value,
    });
    fio.value = "";
    companyName.value = "";
    region.value = "";
    city.value = "";
    street.value = "";
    index.value = "";
    houseNum.value = "";
    isEditAddressVisible.value = false;
    privateCabinetStore.fetchAddress();
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/App.scss";
.title {
  margin: 0.938rem 0;
}
.menu-btn {
  @include btn;
  gap: 0.625rem;
  padding: 1.313rem 0;
  border: 1px solid #eaeaea;
  width: 100%;
  font-family: "Pragmatica Medium";
  font-size: 0.813rem;
  color: #3b3c3d;
}
.menu-shadow {
  position: absolute;
  background: rgba(0, 0, 0, 0.747);
  width: 100%;
  height: 100vh;
  left: 0;
  top: 0;
  z-index: 2;

  &__close-btn {
    @include btn;
    position: absolute;
    top: 0.75rem;
    right: 0.75rem;
  }
}
.menu {
  position: relative;
  background: #fff;
  width: 90%;
  max-width: 328px;
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;

  &__btn {
    position: relative;
    @include btn;
    justify-content: left;
    gap: 0.625rem;
    padding: 1.625rem 1.875rem;
    width: 100%;
    font-family: "Pragmatica Medium";
    font-size: 0.813rem;
    color: #232323;
    transition: all 0.3s ease;

    &::after {
      position: absolute;
      content: "";
      height: 1px;
      background-color: #eaeaea;
      left: 0;
      right: 0;
      bottom: 0;
    }
    &.active {
      background-color: #1d1d27;
      color: #fff;
    }
    &.active svg path {
      stroke: #fff;
    }
  }
  &__btn-hiddenBorder:after {
    height: 0px;
  }
  &__favorites-count-circle {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ff6915;
    border-radius: 50%;
    width: 21px;
    height: 21px;
    margin-left: auto;
    font-family: "Pragmatica Bold";
    font-size: 0.625rem;
    color: #fff;
  }
}
.nav {
  display: none;
}
.subtitle {
  font-family: "Pragmatica Medium";
  font-size: 1.313rem;
  line-height: 32px;
  color: #1d1d27;
  margin: 0.938rem 0;
}
.address {
  border: 1px solid #eaeaea;
  padding-bottom: 1.875rem;

  &__content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.625rem;
    padding: 1.25rem 0;
    width: 100%;
    background-color: #fafafa;
    font-family: "Pragmatica Medium";
    font-size: 0.813rem;
    color: #fb5a00;
  }
  &__title {
    display: block;
    text-align: center;
    font-family: "Pragmatica Medium";
    font-size: 1.188rem;
    line-height: 27px;
    color: #121214;
    width: fit-content;
    margin: 0.813rem auto 1.5rem auto;
  }
  &__info {
    display: flex;
    flex-direction: column;
    gap: 1.063rem;
    padding: 0 1.125rem 0rem 1.875rem;
  }
  &__details {
    display: block;
    font-family: "Pragmatica Medium";
    font-size: 0.938rem;
    line-height: 25px;
    color: #3b3b3e;
    margin: 0 auto;
  }
  &__body {
    display: flex;
    flex-direction: column;
  }
  &__number {
    font-family: "Pragmatica Book";
    font-size: 0.875rem;
    line-height: 25px;
    color: #87878d;
  }
  &__number-text {
    font-family: "Pragmatica Medium";
    font-size: 0.938rem;
    line-height: 25px;
    color: #3b3b3e;
  }
  &__add-btn {
    @include btn;
    gap: 1.063rem;
    margin: 0 auto;
    font-family: "Pragmatica Medium";
    font-size: 1rem;
    color: #fb5a00;
  }
  &__circle {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 62px;
    height: 62px;
    background-color: #f9f9f9;
  }
  &__btns {
    position: relative;
    display: flex;
    bottom: -1.875rem;

    &:before {
      position: absolute;
      content: "";
      height: 1px;
      background-color: #eaeaea;
      left: 0;
      right: 0;
    }
  }
  &__btn {
    position: relative;
    @include btn;
    gap: 0.563rem;
    padding: 1.125rem 1.25rem;
    font-family: "Pragmatica Medium";
    font-size: 0.688rem;
    line-height: 23px;
    color: $Light-Black;
    transition: all 0.3s ease;

    &:hover {
      background-color: #1d1d27;
      color: #fff;
    }
    &:hover svg path {
      stroke: #fff;
    }
  }
  &__edit-btn {
    &:after {
      position: absolute;
      content: "";
      width: 1px;
      height: 20px;
      background-color: #eaeaea;
      right: 0;
      transition: all 0.3s ease;
    }
    &:hover:after {
      width: 0px;
    }
  }
}
.edit-address-form {
  display: flex;
  flex-direction: column;
  gap: 1.563rem;
  border: 1px solid #eaeaea;
  padding: 0.938rem;

  &__content {
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
  &__title--red {
    color: #ff1515;
  }
  &__field {
    padding: 1.031rem 1.25rem;
    border: 1px solid #d6d6d6;
    outline: none;
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
  &__btn {
    margin-top: 0.313rem;
  }
}
.error-message {
  font-family: "Pragmatica Book";
  line-height: 27px;
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
    margin: 0.75rem 0 1.125rem 0;
  }
  .menu-btn,
  .menu-shadow {
    display: none;
  }
  .nav {
    display: flex;
    border: 1px solid #eaeaea;

    &__btn {
      position: relative;
      @include btn;
      flex-direction: column;
      gap: 0.625rem;
      padding: 0.938rem 0.938rem;
      border-right: 1px solid #eaeaea;
      width: 100%;
      height: 97px;
      font-family: "Pragmatica Medium";
      font-size: 0.813rem;
      color: #232323;
      transition: all 0.3s ease;

      &.active {
        background-color: #1d1d27;
        color: #fff;
      }
      &.active svg path {
        stroke: #fff;
      }
      & svg {
        flex-shrink: 0;
        width: 23px;
        height: 23px;
      }
    }
    &__btn-hiddenBorder:after {
      border-right: none;
    }
    &__favorites-count-circle {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #ff6915;
      border-radius: 50%;
      width: 17.35px;
      height: 17.4px;
      margin: -3.9rem 0 0 1.5rem;
      font-family: "Pragmatica Bold";
      font-size: 0.625rem;
      color: #fff;
    }
  }
  .subtitle {
    margin: 1.125rem 0 2.688rem 0;
  }
  .address {
    position: relative;

    &__content {
      padding: 1.375rem 1.25rem;
      width: fit-content;
      margin-left: auto;
    }
    &__title {
      position: absolute;
      margin: 1.313rem 0 0 1.563rem;
      top: 0;
    }
    &__info {
      flex-direction: row;
      padding: 0 1.125rem 0rem 1.563rem;
    }
    &__details {
      margin: 0;
      width: 282px;
    }
    &__btns {
      width: fit-content;
    }
    &__btn {
      padding: 1.125rem 1.875rem;
    }
    &__delete-btn {
      border-right: 1px solid #eaeaea;
    }
  }
  .edit-address-form {
    &__content {
      flex-direction: row;
    }
    &__body {
      width: 100%;
    }
  }
}
/* 1200px = 75em */
@media (min-width: 75em) {
  .title {
    margin: 1.563rem 0 3.125rem 0;
  }
  .container {
    display: flex;
    gap: 1.25rem;
    width: 100%;
  }
  .nav {
    flex-direction: column;
    flex-shrink: 0;
    width: 325px;
    height: fit-content;

    &__btn {
      flex-direction: row;
      justify-content: left;
      padding: 1.625rem 1.875rem;
      border-right: none;
      height: 75px;

      &::after {
        position: absolute;
        content: "";
        height: 1px;
        background-color: #eaeaea;
        left: 0;
        right: 0;
        bottom: 0;
      }
    }
    &__btn-hiddenBorder:after {
      height: 0px;
    }
    &__favorites-count-circle {
      position: static;
      margin: 0;
      margin-left: auto;
    }
  }
  .subtitle {
    font-size: 1.75rem;
    color: #1d1d27;
    margin: 0 0 1.563rem 0;
  }
  .address {
    width: 805px;

    &__add-btn {
      margin: 0 0 0 1.875rem;
    }
  }
  .edit-address-form {
    width: 805px;
  }
}
/* 1440px = 90em */
@media (min-width: 90em) {
  .address,
  .edit-address-form {
    width: 1016px;
  }
}
/* 1920px = 120em */
@media (min-width: 120em) {
  .address,
  .edit-address-form {
    width: 998px;
  }
}
</style>
