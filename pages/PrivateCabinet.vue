<template>
  <UIBreadcrumb :breadcrumbTitle="'Личный кабинет'"></UIBreadcrumb>
  <h1 class="title">Личный кабинет</h1>
  <span v-if="activeSection === 1" class="solutation"
    >Добро Пожаловать, {{ myAccFio }}!</span
  >
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
        @click="setActiveSection(1)"
        class="menu__btn"
        :class="{ active: activeSection === 1 }"
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
        @click="setActiveSection(2)"
        class="menu__btn"
        :class="{ active: activeSection === 2 }"
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
        @click="setActiveSection(3)"
        class="menu__btn"
        :class="{ active: activeSection === 3 }"
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
        @click="setActiveSection(4)"
        class="menu__btn"
        :class="{ active: activeSection === 4 }"
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
        @click="setActiveSection(5)"
        class="menu__btn"
        :class="{ active: activeSection === 5 }"
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
        @click="setActiveSection(6)"
        class="menu__btn"
        :class="{ active: activeSection === 6 }"
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
        @click="logOut()"
        class="menu__btn menu__btn-hiddenBorder"
        :class="{ active: activeSection === 7 }"
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
        @click="setActiveSection(1)"
        class="nav__btn"
        :class="{ active: activeSection === 1 }"
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
        @click="setActiveSection(2)"
        class="nav__btn"
        :class="{ active: activeSection === 2 }"
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
        @click="setActiveSection(3)"
        class="nav__btn"
        :class="{ active: activeSection === 3 }"
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
        @click="setActiveSection(4)"
        class="nav__btn"
        :class="{ active: activeSection === 4 }"
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
        @click="setActiveSection(5)"
        class="nav__btn"
        :class="{ active: activeSection === 5 }"
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
        @click="setActiveSection(6)"
        class="nav__btn"
        :class="{ active: activeSection === 6 }"
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
        @click="logOut()"
        class="nav__btn nav__btn-hiddenBorder"
        :class="{ active: activeSection === 7 }"
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
    <div v-if="activeSection === 1" class="my-orders my-acc">
      <h2 class="subtitle">Текущие заказы</h2>
      <div v-if="isOrderListVisible">
        <div v-if="orderStore.orders.length > 0">
          <div class="my-orders__header">
            <span class="my-orders__header-title my-orders__header-title-num"
              >Номер</span
            >
            <span class="my-orders__header-title my-orders__header-title-date"
              >Дата</span
            >
            <span class="my-orders__header-title my-orders__header-title-state"
              >Статус</span
            >
            <span class="my-orders__header-title">Итого</span>
          </div>
          <div class="my-orders__orders-list">
            <div
              v-for="order in orderStore.orders"
              :key="order.orderNum"
              class="my-orders__body"
            >
              <div class="my-orders__content">
                <span class="my-orders__title">Номер</span>
                <span class="my-orders__text">{{ order.orderNum }}</span>
              </div>
              <div class="my-orders__content">
                <span class="my-orders__title">Дата</span>
                <span class="my-orders__text">{{
                  formatOrderDate(order.orderDate)
                }}</span>
              </div>
              <div class="my-orders__content">
                <span class="my-orders__title">Статус</span>
                <button class="my-orders__state-btn">
                  <div class="my-orders__state-circle"></div>
                  {{ order.orderState }}
                </button>
              </div>
              <div class="my-orders__content">
                <span class="my-orders__title">Итог</span>
                <span class="my-orders__text my-orders__text--big">{{
                  order.discountedSum
                }}</span>
              </div>
              <button
                @click="viewOrderDetails(order)"
                class="my-orders__view-order-btn"
              >
                <span class="my-orders__view-order-btn-text">
                  ПРОСМОТР ЗАКАЗА
                </span>
                <svg
                  width="5"
                  height="8"
                  viewBox="0 0 5 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.85355 4.35355C5.04882 4.15829 5.04882 3.84171 4.85355 3.64645L1.67157 0.464466C1.47631 0.269204 1.15973 0.269204 0.964466 0.464466C0.769204 0.659728 0.769204 0.976311 0.964466 1.17157L3.79289 4L0.964466 6.82843C0.769204 7.02369 0.769204 7.34027 0.964466 7.53553C1.15973 7.7308 1.47631 7.7308 1.67157 7.53553L4.85355 4.35355ZM3.5 4.5H4.5V3.5H3.5V4.5Z"
                    fill="#606060"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <UIEmpty
          v-if="orderStore.orders.length === 0"
          :hero="'/imgs/empty-cart-icon.jpg'"
          :title="'Ваша история заказов пуста'"
          :text="`У вас пока нет заказов в списке. На странице <strong>&quot;Каталог&quot;</strong> вы найдете много интересных товаров.`"
          :iconWidth="'86px'"
        ></UIEmpty>
      </div>
      <div v-if="selectedOrder" class="order-details">
        <div class="order-details__info">
          <div class="order-details__body">
            <span class="order-details__num"
              >Заказ {{ selectedOrder.orderNum }}</span
            >
            <button
              @click="goBackToOrders"
              class="order-details__back-to-orders-btn"
            >
              <svg
                width="6"
                height="10"
                viewBox="0 0 6 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 9L1 5L5 1"
                  stroke="#1E1E1E"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              ВЕРНУТЬСЯ К ЗАКАЗАМ
            </button>
          </div>
          <div class="order-details__container">
            <span class="order-details__date"
              >Был оформлен
              <span class="order-details__date--medium">
                {{
                  format(
                    new Date(selectedOrder.orderDate),
                    "d MMMM 'в' HH:mm",
                    {
                      locale: ru,
                    }
                  )
                }}</span
              ></span
            >
            <div class="order-details__content">
              - статус заказа
              <button class="order-details__state-btn">
                <div class="order-details__state-circle"></div>
                {{ selectedOrder.orderState }}
              </button>
            </div>
          </div>
        </div>
        <div class="order-details__details details">
          <div class="details__titles">
            <span class="details__title">Товар</span>
            <span class="details__title">Итого</span>
          </div>
          <UIOrderProduct
            v-for="product in orderStore.getCart(selectedOrder.orderNum)"
            :product="product"
            :key="`${product.productId}-${selectedOrder.orderNum}`"
            :orderNum="selectedOrder.orderNum"
            :orderProductCounts="
              orderStore.getCount(
                selectedOrder.orderNum,
                product.productId,
                product.chosenColor,
                product.chosenSize
              )
            "
          ></UIOrderProduct>
          <div class="details__info">
            <span class="details__info-title">Сумма:</span>
            <span class="details__info-content">{{
              selectedOrder.discountedSum
            }}</span>
          </div>
          <div class="details__info">
            <span class="details__info-title">Доставка:</span>
            <span class="details__info-content">0 ₽</span>
          </div>
          <div class="details__info">
            <span class="details__info-title">Способ доставки:</span>
            <span class="details__info-content">{{
              selectedOrder.delivery
            }}</span>
          </div>
          <div class="details__info">
            <span class="details__info-title">Способ оплаты:</span>
            <span class="details__info-content">{{
              selectedOrder.payment
            }}</span>
          </div>
          <div class="details__info details__info--hiddenBorder">
            <span class="details__info-title--bold">Итого:</span>
            <span class="details__info-content--bold">{{
              selectedOrder.discountedSum
            }}</span>
          </div>
        </div>
        <div class="order-details__address address">
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
            selectedOrder.address
              ? selectedOrder.address.fio
              : "Адрес не добавлен"
          }}</span>
          <div v-if="selectedOrder.address" class="address__info">
            <span class="address__details">
              {{ selectedOrder.address.index }},
              {{ selectedOrder.address.region }},
              {{ selectedOrder.address.city }},
              {{ selectedOrder.address.street }},
              {{ selectedOrder.address.houseNum }}
            </span>
            <div class="address__body">
              <span class="address__number">Телефон</span>
              <span class="address__number-text">{{
                selectedOrder.address.number
              }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="activeSection === 2" class="edit-profile">
      <h2 class="subtitle">Редактировать профиль</h2>
      <form @submit.prevent="editProfile" class="edit-profile__form">
        <div class="edit-profile__container" v-if="!isProfileMessageVisible">
          <div class="edit-profile__content">
            <span class="edit-profile__title"
              >Email <span class="edit-profile__title--red">*</span></span
            >
            <input
              v-model="email"
              @input="emailOnInput"
              placeholder="Введите email адрес"
              type="text"
              class="edit-profile__field"
              :class="{
                'invalid-email': !emailIsValid,
              }"
            />
            <span v-if="!emailIsValid" class="error-message"
              >Введите корректный адрес электронной почты.</span
            >
          </div>
          <div class="edit-profile__content">
            <span class="edit-profile__title"
              >ФИО <span class="edit-profile__title--red">*</span></span
            >
            <input
              v-model="fioProfile"
              placeholder="Введите ФИО"
              type="text"
              class="edit-profile__field"
            />
          </div>
          <div class="edit-profile__content">
            <span class="edit-profile__title"
              >Номер телефона
              <span class="edit-profile__title--red">*</span></span
            >
            <input
              @input="phoneOnInput"
              v-model="phoneNumber"
              id="telephone"
              placeholder="+7 (___) ___ - __ - __"
              type="text"
              class="edit-profile__field"
              :class="{
                'invalid-phone': !phoneIsValid,
              }"
            />
            <span v-if="!phoneIsValid" class="error-message"
              >Важно заполнить это поле.</span
            >
          </div>
          <UIButton
            class="edit-profile__btn"
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
            Подождите, сохраняются<br />
            изменения профиля
          </span>
        </div>
        <div v-if="isProfileMessageVisible" class="thanks-message">
          <button
            @click="closeProfileThanksMessage"
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
          <div ref="animatedTick" class="thanks-message__tick"></div>
          <span class="thanks-message__title"> Профиль отредактирован </span>
          <span class="thanks-message__text">Ваш профиль успешно изменён.</span>
        </div>
      </form>
    </div>
    <div v-if="activeSection === 3" class="my-orders">
      <h2 class="subtitle">История заказов</h2>
      <div v-if="isOrderListVisible">
        <div v-if="orderStore.orders.length > 0">
          <div class="my-orders__header">
            <span class="my-orders__header-title my-orders__header-title-num"
              >Номер</span
            >
            <span class="my-orders__header-title my-orders__header-title-date"
              >Дата</span
            >
            <span class="my-orders__header-title my-orders__header-title-state"
              >Статус</span
            >
            <span class="my-orders__header-title">Итого</span>
          </div>
          <div class="my-orders__orders-list">
            <div
              v-for="order in orderStore.orders"
              :key="order.orderNum"
              class="my-orders__body"
            >
              <div class="my-orders__content">
                <span class="my-orders__title">Номер</span>
                <span class="my-orders__text">{{ order.orderNum }}</span>
              </div>
              <div class="my-orders__content">
                <span class="my-orders__title">Дата</span>
                <span class="my-orders__text">{{
                  formatOrderDate(order.orderDate)
                }}</span>
              </div>
              <div class="my-orders__content">
                <span class="my-orders__title">Статус</span>
                <button class="my-orders__state-btn">
                  <div class="my-orders__state-circle"></div>
                  {{ order.orderState }}
                </button>
              </div>
              <div class="my-orders__content">
                <span class="my-orders__title">Итог</span>
                <span class="my-orders__text my-orders__text--big">{{
                  order.discountedSum
                }}</span>
              </div>
              <button
                @click="viewOrderDetails(order)"
                class="my-orders__view-order-btn"
              >
                <span class="my-orders__view-order-btn-text">
                  ПРОСМОТР ЗАКАЗА
                </span>
                <svg
                  width="5"
                  height="8"
                  viewBox="0 0 5 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.85355 4.35355C5.04882 4.15829 5.04882 3.84171 4.85355 3.64645L1.67157 0.464466C1.47631 0.269204 1.15973 0.269204 0.964466 0.464466C0.769204 0.659728 0.769204 0.976311 0.964466 1.17157L3.79289 4L0.964466 6.82843C0.769204 7.02369 0.769204 7.34027 0.964466 7.53553C1.15973 7.7308 1.47631 7.7308 1.67157 7.53553L4.85355 4.35355ZM3.5 4.5H4.5V3.5H3.5V4.5Z"
                    fill="#606060"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <UIEmpty
          v-if="orderStore.orders.length === 0"
          :hero="'/imgs/empty-cart-icon.jpg'"
          :title="'Ваша история заказов пуста'"
          :text="`У вас пока нет заказов в списке. На странице <strong>&quot;Каталог&quot;</strong> вы найдете много интересных товаров.`"
          :iconWidth="'86px'"
        ></UIEmpty>
      </div>
      <div v-if="selectedOrder" class="order-details">
        <div class="order-details__info">
          <div class="order-details__body">
            <span class="order-details__num"
              >Заказ {{ selectedOrder.orderNum }}</span
            >
            <button
              @click="goBackToOrders"
              class="order-details__back-to-orders-btn"
            >
              <svg
                width="6"
                height="10"
                viewBox="0 0 6 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 9L1 5L5 1"
                  stroke="#1E1E1E"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              ВЕРНУТЬСЯ К ЗАКАЗАМ
            </button>
          </div>
          <div class="order-details__container">
            <span class="order-details__date"
              >Был оформлен
              <span class="order-details__date--medium">
                {{
                  format(
                    new Date(selectedOrder.orderDate),
                    "d MMMM 'в' HH:mm",
                    {
                      locale: ru,
                    }
                  )
                }}</span
              ></span
            >
            <div class="order-details__content">
              - статус заказа
              <button class="order-details__state-btn">
                <div class="order-details__state-circle"></div>
                {{ selectedOrder.orderState }}
              </button>
            </div>
          </div>
        </div>
        <div class="order-details__details details">
          <div class="details__titles">
            <span class="details__title">Товар</span>
            <span class="details__title">Итого</span>
          </div>
          <UIOrderProduct
            v-for="product in orderStore.getCart(selectedOrder.orderNum)"
            :product="product"
            :key="`${product.productId}-${selectedOrder.orderNum}`"
            :orderNum="selectedOrder.orderNum"
            :orderProductCounts="
              orderStore.getCount(
                selectedOrder.orderNum,
                product.productId,
                product.chosenColor,
                product.chosenSize
              )
            "
          ></UIOrderProduct>
          <div class="details__info">
            <span class="details__info-title">Сумма:</span>
            <span class="details__info-content">{{
              selectedOrder.discountedSum
            }}</span>
          </div>
          <div class="details__info">
            <span class="details__info-title">Доставка:</span>
            <span class="details__info-content">0 ₽</span>
          </div>
          <div class="details__info">
            <span class="details__info-title">Способ доставки:</span>
            <span class="details__info-content">{{
              selectedOrder.delivery
            }}</span>
          </div>
          <div class="details__info">
            <span class="details__info-title">Способ оплаты:</span>
            <span class="details__info-content">{{
              selectedOrder.payment
            }}</span>
          </div>
          <div class="details__info details__info--hiddenBorder">
            <span class="details__info-title--bold">Итого:</span>
            <span class="details__info-content--bold">{{
              selectedOrder.discountedSum
            }}</span>
          </div>
        </div>
        <div class="order-details__address address">
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
            selectedOrder.address
              ? selectedOrder.address.fio
              : "Адрес не добавлен"
          }}</span>
          <div v-if="selectedOrder.address" class="address__info">
            <span class="address__details">
              {{ selectedOrder.address.index }},
              {{ selectedOrder.address.region }},
              {{ selectedOrder.address.city }},
              {{ selectedOrder.address.street }},
              {{ selectedOrder.address.houseNum }}
            </span>
            <div class="address__body">
              <span class="address__number">Телефон</span>
              <span class="address__number-text">{{
                selectedOrder.address.number
              }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
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
          @click="openEditAddress"
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
          <button
            @click="openEditAddress"
            class="address__btn address__edit-btn"
          >
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
          <button
            @click="removeAddress"
            class="address__btn address__delete-btn"
          >
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
      <form @submit.prevent="addressSubmit" class="edit-address-form">
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
    <div v-if="activeSection === 5">
      <h2 class="subtitle">Избранные товары</h2>
      <div v-if="totalProducts > 0" class="products-list">
        <UIProductCard
          v-for="product in paginatedProducts"
          :cardWidth="cardWidth"
          :cardHeight="cardHeight"
          :key="product.productId"
          :product="product"
        />
      </div>
      <UIEmpty
        v-if="totalProducts === 0"
        :hero="'/imgs/empty-favorites-icon.jpg'"
        :title="'Ваш список желаний пуст'"
        :text="`У вас пока нет товаров в списке желаний. На странице <strong>&quot;Каталог&quot;</strong> вы найдете много интересных товаров.`"
        :iconWidth="'98px'"
      ></UIEmpty>
    </div>
    <div v-if="activeSection === 6" class="edit-pass">
      <h2 class="subtitle">Сменить пароль</h2>
      <form @submit.prevent="editPass" class="edit-pass__form">
        <div class="edit-pass__container" v-if="!isPassMessageVisible">
          <div class="edit-pass__content">
            <span class="edit-pass__title"
              >Текущий пароль <span class="edit-pass__title--red">*</span></span
            >
            <div class="edit-pass__field-body">
              <input
                v-model="currentPass"
                @input="currentPassOnInput"
                placeholder="Введите текущий пароль"
                class="edit-pass__field"
                :type="isCurrentPassVisible ? 'text' : 'password'"
                :class="{
                  'pass--empty': isCurrentPassEmpty,
                }"
              />
              <button
                type="button"
                @click="toggleCurrentPass"
                class="edit-pass__toggle-password-btn"
              >
                <img
                  v-if="isCurrentPassVisible"
                  src="/imgs/opened-eye.png"
                  alt=""
                />
                <img
                  v-if="!isCurrentPassVisible"
                  src="/imgs/closed-eye.png"
                  alt=""
                />
              </button>
            </div>
            <span v-if="!activeCurrentPassNotice" class="edit-pass__notice">{{
              activeCurrentPassNotice
            }}</span>
            <span v-if="activeCurrentPassNotice" class="error-message">{{
              activeCurrentPassNotice
            }}</span>
          </div>
          <div class="edit-pass__content">
            <span class="edit-pass__title"
              >Новый пароль <span class="edit-pass__title--red">*</span></span
            >
            <div class="edit-pass__field-body">
              <input
                v-model="pass1"
                @input="pass1OnInput"
                placeholder="Придумайте пароль"
                class="edit-pass__field"
                :type="isPassVisible1 ? 'text' : 'password'"
                :class="{
                  'pass--empty': isPass1Empty,
                  'invalid-pass': !isPass1Valid,
                  'equal-passes': !arePassesEqual,
                  'pass-length': !isPass1LengthValid,
                }"
              />
              <button
                type="button"
                @click="togglePass1"
                class="edit-pass__toggle-password-btn"
              >
                <img v-if="isPassVisible1" src="/imgs/opened-eye.png" alt="" />
                <img v-if="!isPassVisible1" src="/imgs/closed-eye.png" alt="" />
              </button>
            </div>
            <span v-if="activePass1Notice" class="edit-pass__notice">{{
              activePass1Notice
            }}</span>
          </div>
          <div class="edit-pass__content">
            <span class="edit-pass__title"
              >Повторите пароль
              <span class="edit-pass__title--red">*</span></span
            >
            <div class="edit-pass__field-body">
              <input
                v-model="pass2"
                @input="pass2OnInput"
                placeholder="Повторите новый пароль"
                class="edit-pass__field"
                :type="isPassVisible2 ? 'text' : 'password'"
                :class="{
                  'pass--empty': isPass2Empty,
                  'invalid-pass': !isPass2Valid,
                  'equal-passes': !arePassesEqual,
                  'pass-length': !isPass2LengthValid,
                }"
              />
              <button
                type="button"
                @click="togglePass2"
                class="edit-pass__toggle-password-btn"
              >
                <img v-if="isPassVisible2" src="/imgs/opened-eye.png" alt="" />
                <img v-if="!isPassVisible2" src="/imgs/closed-eye.png" alt="" />
              </button>
            </div>
            <span v-if="activePass2Notice" class="edit-pass__notice">{{
              activePass2Notice
            }}</span>
          </div>
          <UIButton
            class="edit-pass__btn"
            :content="'Сменить пароль'"
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
            новый пароль
          </span>
        </div>
        <div v-if="isPassMessageVisible" class="thanks-message">
          <button
            @click="closePassThanksMessage"
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
          <div ref="animatedTick" class="thanks-message__tick"></div>
          <span class="thanks-message__title"> Пароль изменён </span>
          <span class="thanks-message__text">Вы успешно изменили пароль.</span>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFavoritesStore } from "@/store/Favorites";
import { usePrivateCabinetStore } from "@/store/PrivateCabinet";
import Inputmask from "inputmask";
import lottie from "lottie-web";
import { nextTick } from "vue";
import { useOrderStore } from "@/store/Order";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import type { Order } from "@/types/Order";
import { useAuthStore } from "@/store/Auth";
import { useRouter } from "vue-router";
import { onMounted, onBeforeUnmount } from "vue";

const activeSection = ref(1);
const privateCabinetStore = usePrivateCabinetStore();
const setActiveSection = (section: number) => {
  activeSection.value = section;
  privateCabinetStore.setActiveBtn(section);
  if (activeSection.value !== 4) {
    isAddressVisible.value = false;
    isEditAddressVisible.value = false;
  } else {
    isAddressVisible.value = true;
  }
};
onMounted(() => {
  activeSection.value = privateCabinetStore.activeBtn;
  setActiveSection(activeSection.value);
});

const myAccFio = ref("");
onMounted(() => {
  myAccFio.value = localStorage.getItem("fio")!;
});

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

const favoritesStore = useFavoritesStore();
const totalProducts = computed(() => favoritesStore.favorites.length);

const email = ref<string>("");
const emailIsEmpty = ref(false);
const emailIsValid = ref(true);
const fioProfile = ref<string>("");
const phoneNumber = ref<string>("");
const phoneIsEmpty = ref(false);
const phoneIsValid = ref(true);
const emailOnInput = () => {
  emailIsEmpty.value = email.value === "";
  emailIsValid.value = true;
};
const phoneOnInput = () => {
  phoneIsEmpty.value = phoneNumber.value === "";
  phoneIsValid.value = true;
};
onMounted(() => {
  nextTick(() => {
    const numberInput = document.getElementById(
      "telephone"
    )! as HTMLInputElement;
    if (numberInput) {
      Inputmask("+7 (999) 999-99-99").mask(numberInput);
    }
  });
});

const validateEmail = () => {
  if (email.value === "") {
    emailIsEmpty.value = true;
    emailIsValid.value = true;
  } else {
    emailIsEmpty.value = false;
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;
    emailIsValid.value = emailRegex.test(email.value);
  }
};
const phoneNumberDigits = phoneNumber.value.replace(/\D/g, "");
const validatePhone = () => {
  if (phoneNumber.value === "") {
    phoneIsEmpty.value = false;
    phoneIsValid.value = true;
  } else {
    if (
      phoneNumberDigits.length === 11 &&
      /^7\d{3}\d{3}\d{2}\d{2}$/.test(phoneNumberDigits)
    ) {
      phoneIsEmpty.value = false;
      phoneIsValid.value = true;
    } else {
      phoneIsEmpty.value = false;
      phoneIsValid.value = false;
    }
  }
};
const isLoading = ref(false);
const progressRing = ref<HTMLElement | null>(null);
const isProfileMessageVisible = ref(false);
const animatedTick = ref<HTMLElement | null>(null);
const animationOfTick = ref<any>(null);
const editProfile = async () => {
  validateEmail();
  validatePhone();
  const userId = localStorage.getItem("userId") as string;
  const updatedData: Record<string, string> = {};
  if (email.value) updatedData.email = email.value;
  if (fioProfile.value) updatedData.fio = fioProfile.value;
  if (phoneNumber.value) updatedData.number = phoneNumber.value;

  const profileData = { userId, ...updatedData };
  if (Object.keys(updatedData).length > 0) {
    privateCabinetStore.editProfile(profileData);
  } else {
    console.log("No data to update");
  }
  if (
    (!emailIsEmpty.value && emailIsValid.value) ||
    (phoneNumber.value !== "" && phoneIsValid.value)
  ) {
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
        isProfileMessageVisible.value = true;
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
  }
};
const closeProfileThanksMessage = () => {
  isProfileMessageVisible.value = false;
  animationOfTick.value!.destroy();
};

const orderStore = useOrderStore();
onMounted(() => {
  orderStore.fetchOrders();
});

const selectedOrder = ref<Order | null>(null);
const isOrderListVisible = ref(true);
const viewOrderDetails = (order: Order) => {
  selectedOrder.value = order;
  isOrderListVisible.value = false;
};
const goBackToOrders = () => {
  isOrderListVisible.value = true;
  selectedOrder.value = null;
};

const isAddressVisible = ref(false);
const isEditAddressVisible = ref(false);

const openEditAddress = () => {
  isAddressVisible.value = false;
  isEditAddressVisible.value = true;
};

onMounted(() => {
  privateCabinetStore.fetchAddress();
});

const formatOrderDate = (orderDate: string) => {
  const date = new Date(orderDate);
  if (!isNaN(date.getTime())) {
    return format(date, "d MMMM yyyy", { locale: ru });
  }
  return "";
};

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
const validateAddress = () => {
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
const addressSubmit = async () => {
  if (
    fio.value !== "" &&
    region.value !== "" &&
    city.value !== "" &&
    street.value !== "" &&
    index.value !== "" &&
    houseNum.value !== ""
  ) {
    if (!privateCabinetStore.addressData) {
      validateAddress();
      await privateCabinetStore.addAddress({
        fio: fio.value,
        companyName: companyName.value,
        region: region.value,
        city: city.value,
        street: street.value,
        index: index.value,
        houseNum: houseNum.value,
      });
    }
  }
  if (privateCabinetStore.addressData) {
    if (
      fio.value !== "" ||
      region.value !== "" ||
      city.value !== "" ||
      street.value !== "" ||
      index.value !== "" ||
      houseNum.value !== ""
    ) {
      const userId = localStorage.getItem("userId") as string;
      await privateCabinetStore.editAddress({
        userId: userId,
        fio: fio.value,
        companyName: companyName.value,
        region: region.value,
        city: city.value,
        street: street.value,
        index: index.value,
        houseNum: houseNum.value,
        number: privateCabinetStore.addressData.number,
      });
    }
  }
  fio.value = "";
  companyName.value = "";
  region.value = "";
  city.value = "";
  street.value = "";
  index.value = "";
  houseNum.value = "";

  isEditAddressVisible.value = false;
  isAddressVisible.value = true;
  await privateCabinetStore.fetchAddress();
  window.scrollTo(0, 0);
};

const removeAddress = () => {
  privateCabinetStore.removeAddress();
  isEditAddressVisible.value = false;
};

const paginatedProducts = computed(() => favoritesStore.paginatedProducts);
const windowWidth = ref(0);
const updateWidth = () => {
  windowWidth.value = window.innerWidth;
};
const cardWidth = computed(() => {
  updateWidth();
  return windowWidth.value < 1024 ? "100%" : "319px";
});
const cardHeight = computed(() => {
  updateWidth();
  return windowWidth.value < 1024 ? "100%" : "340px";
});
onMounted(() => {
  window.addEventListener("resize", updateWidth);
});
onBeforeUnmount(() => {
  window.removeEventListener("resize", updateWidth);
});

const currentPass = ref("");
const pass1 = ref("");
const pass2 = ref("");
const isPass1LengthValid = ref(true);
const isPass2LengthValid = ref(true);
const arePassesEqual = ref(true);
const activeCurrentPassNotice = ref<string | null>(null);
const activePass1Notice = ref<string | null>(null);
const activePass2Notice = ref<string | null>(null);
const isCurrentPassVisible = ref(false);
const isPassVisible1 = ref(false);
const isPassVisible2 = ref(false);
const isCurrentPassEmpty = ref(false);
const isCurrentPassValid = ref(true);
const isPass1Empty = ref(false);
const isPass2Empty = ref(false);
const isPass1Valid = ref(true);
const isPass2Valid = ref(true);
const toggleCurrentPass = () => {
  isCurrentPassVisible.value = !isCurrentPassVisible.value;
};
const togglePass1 = () => {
  isPassVisible1.value = !isPassVisible1.value;
};
const togglePass2 = () => {
  isPassVisible2.value = !isPassVisible2.value;
};
const currentPassOnInput = () => {
  isCurrentPassEmpty.value = currentPass.value === "";
  isCurrentPassValid.value = true;
  activeCurrentPassNotice.value = "";
};
const pass1OnInput = () => {
  isPass1Empty.value = pass1.value === "";
  isPass1Valid.value = true;

  if (pass1.value.length >= 8 && pass1.value.length <= 20) {
    activePass1Notice.value = "";
    isPass1LengthValid.value = true;
  }
  if (pass1.value === pass2.value) {
    arePassesEqual.value = true;
    activePass1Notice.value = "";
  }
};
const pass2OnInput = () => {
  isPass2Empty.value = pass2.value === "";
  isPass2Valid.value = true;

  if (pass2.value.length >= 8 && pass2.value.length <= 20) {
    activePass2Notice.value = "";
    isPass2LengthValid.value = true;
  }
  if (pass1.value === pass2.value) {
    arePassesEqual.value = true;
    activePass1Notice.value = "";
  }
};
const validatePasses = async () => {
  const passRegex = /^[A-Za-zА-Яа-яёЁ\d_-]{8,20}$/;
  if (currentPass.value === "") {
    isCurrentPassEmpty.value = true;
  } else {
    isCurrentPassEmpty.value = false;
  }
  if (pass1.value === "") {
    isPass1Empty.value = true;
    isPass1Valid.value = true;
  } else {
    isPass1Empty.value = false;
    isPass1Valid.value = passRegex.test(pass1.value);
  }
  if (pass2.value === "") {
    isPass2Empty.value = true;
    isPass2Valid.value = true;
  } else {
    isPass2Empty.value = false;
    isPass2Valid.value = passRegex.test(pass2.value);
  }
  arePassesEqual.value = pass1.value === pass2.value;

  activeCurrentPassNotice.value = null;
  activePass1Notice.value = null;
  activePass2Notice.value = null;
  const userId = localStorage.getItem("userId") as string;
  const response = await privateCabinetStore.editPass(
    userId,
    currentPass.value,
    pass1.value
  );
  if (isCurrentPassEmpty.value) {
    activeCurrentPassNotice.value = "Важно заполнить это поле.";
  } else if (response.message === "Current password is incorrect") {
    activeCurrentPassNotice.value = "Текущий пароль не совпадает.";
  }
  if (isPass1Empty.value) {
    activePass1Notice.value = "Важно заполнить это поле.";
  } else if (!(pass1.value.length >= 8 && pass1.value.length <= 20)) {
    activePass1Notice.value = "Пароль должен содержать от 8 до 20 символов.";
  } else if (!passRegex.test(pass1.value)) {
    activePass1Notice.value =
      "Пароль не должен содержать специальных символов.";
  } else if (pass1.value !== pass2.value) {
    activePass1Notice.value = "Пароли не совпадают.";
  }
  if (isPass2Empty.value) {
    activePass2Notice.value = "Важно заполнить это поле.";
  } else if (!(pass2.value.length >= 8 && pass2.value.length <= 20)) {
    activePass2Notice.value = "Пароль должен содержать от 8 до 20 символов.";
  } else if (!passRegex.test(pass2.value)) {
    activePass2Notice.value =
      "Пароль не должен содержать специальных символов.";
  }
};
const isPassMessageVisible = ref(false);
const editPass = async () => {
  validatePasses();
  if (
    !isCurrentPassEmpty.value &&
    isCurrentPassValid &&
    !isPass1Empty.value &&
    isPass1Valid.value &&
    !isPass2Empty.value &&
    isPass2Valid.value &&
    isPass1LengthValid.value &&
    isPass2LengthValid.value &&
    arePassesEqual.value
  ) {
    const userId = localStorage.getItem("userId") as string;
    const response = await privateCabinetStore.editPass(
      userId,
      currentPass.value,
      pass1.value
    );

    if (response.message === "Current password is incorrect") {
      isCurrentPassValid.value = false;
      return;
    } else {
      console.log("Password updated successfully");

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
          isPassMessageVisible.value = true;

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
    }
  }
};
const closePassThanksMessage = () => {
  isPassMessageVisible.value = false;
  animationOfTick.value!.destroy();
};

const router = useRouter();
const authStore = useAuthStore();
const logOut = () => {
  if (authStore.isLoggedIn) {
    authStore.removeAuthData();
    router.push("/LogIn");
    privateCabinetStore.setActiveBtn(1);
    privateCabinetStore.addressData = null;
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/App.scss";
.title {
  margin: 0.938rem 0;
}
.solutation {
  display: block;
  font-family: "Pragmatica Medium";
  font-size: 1.25rem;
  color: #1e1e1e;
  margin-bottom: 0.938rem;
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
.edit-profile {
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
  &__btn {
    margin-top: 0.938rem;
  }
}
.my-orders {
  &__header {
    display: none;
  }
  &__orders-list {
    display: flex;
    flex-direction: column;
    gap: 0.938rem;
  }
  &__body {
    display: flex;
    flex-direction: column;
    gap: 0.313rem;
    border: 1px solid #eaeaea;
    padding: 0.938rem;
  }
  &__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__title {
    font-family: "Pragmatica Medium";
    font-size: 0.75rem;
    line-height: 30px;
    color: #383838;
  }
  &__text {
    font-family: "Pragmatica Book";
    font-size: 0.813rem;
    color: #1f1e31;
  }
  &__text--big {
    font-size: 1rem;
  }
  &__state-btn {
    @include btn;
    gap: 0.563rem;
    border: 1px solid $Light-Orange;
    padding: 0.313rem 0.75rem;
    cursor: default;
    font-family: "Pragmatica Medium";
    font-size: 0.688rem;
    color: $Dark-Orange;
  }
  &__state-circle {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: $Dark-Orange;
  }
  &__view-order-btn {
    @include btn;
    gap: 0.625rem;
    border: 1px solid #eaeaea;
    width: 100%;
    transition: all 0.3s ease;

    &:hover {
      background-color: #1d1d27;
    }
    &:hover svg path {
      fill: white;
    }
  }
  &__view-order-btn-text {
    font-family: "Pragmatica Medium";
    font-size: 0.75rem;
    line-height: 30px;
    color: $Light-Orange;
  }
}
.order-details {
  &__info {
    display: flex;
    flex-direction: column;
  }
  &__body {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__num {
    font-family: "Pragmatica Medium";
    font-size: 1rem;
    color: #1e1e1e;
  }
  &__back-to-orders-btn {
    @include btn;
    gap: 0.625rem;
    background-color: #fbfbfb;
    padding: 0.375rem 0.938rem;
    font-family: "Pragmatica Medium";
    font-size: 0.75rem;
    color: $Light-Black;
  }
  &__date {
    font-family: "Pragmatica Book";
    font-size: 0.875rem;
    line-height: 30px;
    color: #646464;
  }
  &__date--medium {
    font-family: "Pragmatica Medium";
    color: #141414;
  }
  &__content {
    display: flex;
    align-items: center;
    gap: 0.625rem;
    font-family: "Pragmatica Book";
    font-size: 0.875rem;
    color: #646464;
  }
  &__state-btn {
    @include btn;
    gap: 0.563rem;
    border: 1px solid $Light-Orange;
    padding: 0.313rem 0.75rem;
    font-family: "Pragmatica Medium";
    font-size: 0.688rem;
    color: $Dark-Orange;
  }
  &__state-circle {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: $Dark-Orange;
  }
}
.details {
  position: relative;
  border: 1px solid #f1f1f1;
  padding: 1.25rem 1.25rem 0 1.25rem;
  margin: 1.875rem 0;

  &__titles {
    position: relative;
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.25rem;

    &::after {
      position: absolute;
      content: "";
      height: 1px;
      background-color: #f1f1f1;
      left: -1.25rem;
      right: -1.25rem;
      bottom: -1.25rem;
    }
  }
  &__title {
    font-family: "Pragmatica Bold";
    font-size: 1.125rem;
    color: #1f1e31;
  }
  &__info {
    position: relative;
    display: flex;
    gap: 1.063rem;
    justify-content: space-between;
    padding: 1.375rem 0;
  }
  &__info::after {
    position: absolute;
    content: "";
    height: 1px;
    background-color: #f1f1f1;
    left: -1.25rem;
    right: -1.25rem;
    bottom: 0;
  }
  &__info--hiddenBorder::after {
    height: 0px;
  }
  &__info-title {
    font-family: "Pragmatica Medium";
    font-size: 1rem;
    color: #1f1e31;
  }
  &__info-content {
    font-family: "Pragmatica Book";
    font-size: 1rem;
    text-align: right;
  }
  &__info-title--bold {
    font-family: "Pragmatica Medium";
    font-size: 1.5rem;
    color: #1f1e31;
  }
  &__info-content--bold {
    font-family: "Pragmatica Book";
    font-size: 1.563rem;
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
.products-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.938rem;
}
.edit-pass {
  &__form {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 0.938rem;
    padding: 0.938rem;
    border: 1px solid #eaeaea;
  }
  &__container {
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
  &__field-body {
    position: relative;
    display: flex;
    align-items: center;
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
  &__toggle-password-btn {
    position: absolute;
    @include btn;
    right: 1.5rem;
  }
  &__toggle-password-btn img {
    width: 22px;
    height: 22px;
  }
  &__notice {
    font-family: "Pragmatica Book";
    line-height: 0.938rem;
    color: #f81d2a;
  }
  &__btn {
    margin-top: 0.938rem;
  }
}
.error-message {
  font-family: "Pragmatica Book";
  line-height: 27px;
  color: #f81d2a;
}
.invalid-field,
.invalid-email,
.invalid-phone,
.invalid-pass,
.pass--empty,
.pass-length,
.equal-passes {
  border: 1px solid #f81d2a;
  color: #f81d2a;
}
.invalid-field::placeholder,
.invalid-email::placeholder,
.invalid-pass::placeholder,
.pass--empty::placeholder,
.invalid-phone::placeholder,
.pass-length::placeholder,
.equal-passes::placeholder {
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
    &__btn-hiddenBorder {
      border-right: none;
    }
    &__btn--1200px {
      display: none;
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
    margin: 1.125rem 0;
  }
  .order-details {
    &__back-to-orders-btn {
      line-height: 24px;
    }
    &__container {
      display: flex;
      align-items: center;
      gap: 0.625rem;
    }
  }
  .my-orders {
    &__header {
      display: flex;
      border: 1px solid #eaeaea;
      border-bottom: none;
      padding: 1.25rem 0.938rem;
    }
    &__header-title {
      font-family: "Pragmatica Bold";
      font-size: 1.125rem;
      color: #1f1e31;
    }
    &__header-title-num {
      width: 105px;
    }
    &__header-title-date {
      width: 200px;
    }
    &__header-title-state {
      width: 185px;
    }
    &__orders-list {
      gap: 0rem;
      border: 1px solid #eaeaea;
      border-top: none;
    }
    &__body {
      position: relative;
      flex-direction: row;
      gap: 0rem;
      justify-content: space-between;
      border: none;

      &::before {
        position: absolute;
        content: "";
        height: 1px;
        width: 100%;
        background-color: #eaeaea;
        top: 0;
        left: 0;
      }
    }
    &__title {
      display: none;
    }
    &__text {
      font-size: 0.938rem;
      white-space: nowrap;
    }
    &__text--big {
      font-size: 1.125rem;
    }
    &__view-order-btn {
      width: 50px;
      height: 50px;
    }
    &__view-order-btn-text {
      display: none;
    }
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
  .products-list {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.25rem;
  }
}
/* 1200px = 75em */
@media (min-width: 75em) {
  .title {
    margin: 1.563rem 0 3.125rem 0;
  }
  .solutation {
    position: absolute;
    font-size: 1.438rem;
    margin-bottom: 1.563rem;
    margin-left: 21.563rem;
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
    &__btn--1200px {
      display: flex;
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
  .my-acc {
    margin-top: 3.25rem;
  }
  .edit-profile {
    &__form {
      width: 555px;
    }
  }
  .my-orders {
    width: 100%;

    &__text {
      font-size: 1rem;
    }
    &__text--big {
      font-size: 1.188rem;
    }
    &__header-title-num {
      width: 125px;
    }
    &__header-title-date {
      width: 224px;
    }
    &__header-title-state {
      width: 206px;
    }
  }
  .address {
    width: 805px;

    &__add-btn {
      margin: 0 0 0 1.875rem;
    }
    &__info {
      gap: 10.188rem;
    }
  }
  .products-list {
    grid-template-columns: repeat(2, 1fr);
  }
  .edit-pass {
    &__form {
      width: 555px;
    }
  }
  .edit-address-form {
    width: 805px;
  }
}
/* 1440px = 90em */
@media (min-width: 90em) {
  .my-orders {
    &__header-title-num {
      width: 177px;
    }
    &__header-title-date {
      width: 278px;
    }
    &__header-title-state {
      width: 257px;
    }
  }
  .address,
  .edit-address-form {
    width: 1016px;
  }
  .products-list {
    grid-template-columns: repeat(3, 1fr);
  }
}
/* 1920px = 120em */
@media (min-width: 120em) {
  .my-orders {
    &__header-title-num {
      width: 175px;
    }
    &__header-title-date {
      width: 272px;
    }
    &__header-title-state {
      width: 252px;
    }
  }
  .address,
  .edit-address-form {
    width: 998px;
  }
}
</style>
