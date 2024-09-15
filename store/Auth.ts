import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    userId: "",
    fio: "",
    login: "",
    number: "",
    token: "",
    isLoggedIn: false,
  }),
  actions: {
    getAuthData(
      userId: string,
      fio: string,
      login: string,
      number: string,
      token: string
    ) {
      this.userId = userId;
      this.fio = fio;
      this.login = login;
      this.number = number;
      this.token = token;
      this.isLoggedIn = true;

      localStorage.setItem("userId", userId);
      localStorage.setItem("fio", fio);
      localStorage.setItem("login", login);
      localStorage.setItem("number", number);
      localStorage.setItem("authToken", token);
    },
    removeAuthData() {
      this.userId = "";
      this.fio = "";
      this.login = "";
      this.number = "";
      this.token = "";
      this.isLoggedIn = false;

      localStorage.removeItem("userId");
      localStorage.removeItem("fio");
      localStorage.removeItem("login");
      localStorage.removeItem("number");
      localStorage.removeItem("authToken");
    },
    initializeAuth() {
      const storedUserId = localStorage.getItem("userId");
      const storedFio = localStorage.getItem("fio");
      const storedNumber = localStorage.getItem("number");
      const storedToken = localStorage.getItem("authToken");

      if (storedUserId && storedFio && storedNumber && storedToken) {
        this.userId = storedUserId;
        this.fio = storedFio;
        this.number = storedNumber;
        this.token = storedToken;
        this.isLoggedIn = true;
      }
    },
  },
});
