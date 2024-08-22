import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    fio: "",
    token: "",
    isLoggedIn: false,
  }),
  actions: {
    getAuthData(fio: string, token: string) {
      this.fio = fio;
      this.token = token;
      this.isLoggedIn = true;

      localStorage.setItem("fio", fio);
      localStorage.setItem("authToken", token);
    },
    removeAuthData() {
      this.fio = "";
      this.token = "";
      this.isLoggedIn = false;

      localStorage.removeItem("fio");
      localStorage.removeItem("authToken");
    },
    initializeAuth() {
      const storedFio = localStorage.getItem("fio");
      const storedToken = localStorage.getItem("authToken");

      if (storedFio && storedToken) {
        this.fio = storedFio;
        this.token = storedToken;
        this.isLoggedIn = true;
      }
    },
  },
});
