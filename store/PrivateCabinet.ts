import { defineStore } from "pinia";
import type { Address } from "@/types/Address";
import type { ApiResponse } from "@/types/api";
import { getApiErrorMessage, getApiResponseMessage } from "@/utils/apiClient";
import axios from "axios";

export const usePrivateCabinetStore = defineStore("privateCabinet", {
  state: () => ({
    activeBtn: 1,
    addressData: null as Address | null,
    profileData: null,
  }),
  actions: {
    setActiveBtn(i: number) {
      this.activeBtn = i;
    },
    async addAddress(address: {
      fio: string;
      companyName?: string;
      region: string;
      city: string;
      street: string;
      index: string;
      houseNum: string;
    }) {
      try {
        const userId = localStorage.getItem("userId") as string;
        const number = localStorage.getItem("number") as string;
        await axios.post("/api/address/add", {
          ...address,
          userId: userId,
          number: number,
        });
      } catch (error) {
        console.error(getApiErrorMessage(error, "Не удалось добавить адрес."));
      }
    },
    async fetchAddress() {
      try {
        const userId = localStorage.getItem("userId") as string;
        const response = await axios.get(`/api/address/get?userId=${userId}`);
        if (response.data.success) {
          this.addressData = response.data.address;
        } else {
          console.error(
            getApiResponseMessage(response.data, "Не удалось загрузить адрес.")
          );
        }
      } catch (error) {
        console.error(getApiErrorMessage(error, "Не удалось загрузить адрес."));
      }
    },
    async editAddress(address: {
      userId: string;
      fio?: string;
      companyName?: string;
      region?: string;
      city?: string;
      street?: string;
      index?: string;
      houseNum?: string;
      number?: string;
    }): Promise<ApiResponse<{ updatedAddress?: Address }>> {
      try {
        const response = await axios.put(`/api/address/edit`, address);
        if (response.data.success) {
          this.addressData = response.data.updatedAddress;
          return response.data;
        }

        const message = getApiResponseMessage(
          response.data,
          "Не удалось обновить адрес."
        );
        return { success: false, message };
      } catch (error) {
        const message = getApiErrorMessage(
          error,
          "Не удалось обновить адрес."
        );
        return { success: false, message };
      }
    },
    async removeAddress() {
      const userId = localStorage.getItem("userId") as string;
      await axios.post("/api/address/remove", { userId });
      this.addressData = null;
    },
    async editProfile(profile: {
      userId: string;
      email?: string;
      fio?: string;
      number?: string;
    }): Promise<ApiResponse> {
      try {
        const response = await axios.put("/api/profile/edit", profile);
        if (response.data.success) {
          this.profileData = response.data.updatedProfile;
          return response.data;
        }

        const message = getApiResponseMessage(
          response.data,
          "Не удалось обновить профиль."
        );
        return { success: false, message };
      } catch (error) {
        const message = getApiErrorMessage(
          error,
          "Не удалось обновить профиль."
        );
        return { success: false, message };
      }
    },
    async editPass(
      userId: string,
      currentPass: string,
      newPass: string
    ): Promise<ApiResponse> {
      try {
        const response = await axios.put("/api/pass/edit", {
          userId,
          currentPass,
          newPass,
        });
        if (!response.data.success) {
          return {
            success: false,
            message: getApiResponseMessage(
              response.data,
              "Не удалось изменить пароль."
            ),
          };
        }
        return response.data;
      } catch (error) {
        const message = getApiErrorMessage(
          error,
          "Не удалось изменить пароль."
        );
        return { success: false, message };
      }
    },
  },
  persist: {
    key: "private-cabinet-store",
    storage: typeof window !== "undefined" ? localStorage : undefined,
    paths: ["activeBtn"],
  },
});
