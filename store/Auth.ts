import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    userId: "",
    fio: "",
    number: "",
    token: "",
    isLoggedIn: false,
    rememberMe: false,
  }),
  actions: {
    getAuthData(
      userId: string,
      fio: string,
      number: string,
      token: string,
      rememberMe: boolean
    ) {
      this.userId = userId;
      this.fio = fio;
      this.number = number;
      this.token = token;
      this.isLoggedIn = true;

      localStorage.setItem("userId", userId);
      localStorage.setItem("fio", fio);
      localStorage.setItem("number", number);

      if (rememberMe) {
        localStorage.setItem("authToken", token);
      } else {
        sessionStorage.setItem("authToken", token);
      }
    },
    removeAuthData() {
      this.userId = "";
      this.fio = "";
      this.number = "";
      this.token = "";
      this.isLoggedIn = false;

      localStorage.removeItem("userId");
      localStorage.removeItem("fio");
      localStorage.removeItem("number");
      localStorage.removeItem("authToken");
      sessionStorage.removeItem("authToken");
    },
    initializeAuth() {
      const storedUserId = localStorage.getItem("userId");
      const storedFio = localStorage.getItem("fio");
      const storedNumber = localStorage.getItem("number");
      const storedToken =
        localStorage.getItem("authToken") ||
        sessionStorage.getItem("authToken");

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
