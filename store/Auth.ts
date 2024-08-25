import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    userId: "",
    fio: "",
    token: "",
    isLoggedIn: false,
  }),
  actions: {
    getAuthData(userId: string, fio: string, token: string) {
      this.userId = userId;
      this.fio = fio;
      this.token = token;
      this.isLoggedIn = true;

      localStorage.setItem("userId", userId);
      localStorage.setItem("fio", fio);
      localStorage.setItem("authToken", token);
    },
    removeAuthData() {
      this.userId = "";
      this.fio = "";
      this.token = "";
      this.isLoggedIn = false;

      localStorage.removeItem("userId");
      localStorage.removeItem("fio");
      localStorage.removeItem("authToken");
    },
    initializeAuth() {
      const storedUserId = localStorage.getItem("userId");
      const storedFio = localStorage.getItem("fio");
      const storedToken = localStorage.getItem("authToken");

      if (storedUserId && storedFio && storedToken) {
        this.userId = storedUserId;
        this.fio = storedFio;
        this.token = storedToken;
        this.isLoggedIn = true;
      }
    },
  },
});
