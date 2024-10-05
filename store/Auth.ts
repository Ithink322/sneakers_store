import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    userId: "",
    fio: "",
    number: "",
    token: "",
    isAdmin: false,
    isLoggedIn: false,
    rememberMe: false,
  }),
  actions: {
    getAuthData(
      userId: string,
      fio: string,
      number: string,
      token: string,
      isAdmin: boolean,
      rememberMe: boolean
    ) {
      this.userId = userId;
      this.fio = fio;
      this.number = number;
      this.token = token;
      this.isAdmin = isAdmin;
      this.isLoggedIn = true;
      this.rememberMe = rememberMe;

      localStorage.setItem("userId", userId);
      localStorage.setItem("fio", fio);
      localStorage.setItem("number", number);
      localStorage.setItem("isAdmin", isAdmin ? "true" : "false");
      localStorage.setItem("rememberMe", rememberMe ? "true" : "false");

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
      this.isAdmin = false;
      this.isLoggedIn = false;

      localStorage.removeItem("userId");
      localStorage.removeItem("fio");
      localStorage.removeItem("number");
      localStorage.removeItem("isAdmin");
      if (this.rememberMe) {
        localStorage.removeItem("authToken");
      } else {
        sessionStorage.removeItem("authToken");
      }
    },
    initializeAuth() {
      const storedRememberMe = localStorage.getItem("rememberMe") === "true";

      if (storedRememberMe) {
        const storedToken = localStorage.getItem("authToken");
        const storedUserId = localStorage.getItem("userId");
        const storedFio = localStorage.getItem("fio");
        const storedNumber = localStorage.getItem("number");
        const storedIsAdmin = localStorage.getItem("isAdmin") === "true";

        if (storedUserId && storedFio && storedNumber && storedToken) {
          this.userId = storedUserId;
          this.fio = storedFio;
          this.number = storedNumber;
          this.token = storedToken;
          this.isAdmin = storedIsAdmin;
          this.isLoggedIn = true;
        }
      } else {
        const storedToken = sessionStorage.getItem("authToken");
        if (storedToken) {
          const storedUserId = localStorage.getItem("userId");
          const storedFio = localStorage.getItem("fio");
          const storedNumber = localStorage.getItem("number");
          const storedIsAdmin = localStorage.getItem("isAdmin") === "true";

          if (storedUserId && storedFio && storedNumber && storedToken) {
            this.userId = storedUserId;
            this.fio = storedFio;
            this.number = storedNumber;
            this.token = storedToken;
            this.isAdmin = storedIsAdmin;
            this.isLoggedIn = true;
          }
        }
      }
    },
  },
});
