import { defineStore } from "pinia";
import type { Address } from "@/types/Address";
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
        const response = await axios.post("/api/address/add", {
          ...address,
          userId: userId,
          number: number,
        });
      } catch (error) {
        console.error("Failed to add an address:", error);
      }
    },
    async fetchAddress() {
      try {
        const userId = localStorage.getItem("userId") as string;
        const response = await axios.get(`/api/address/get?userId=${userId}`);
        if (response.data.success) {
          this.addressData = response.data.address;
        } else {
          console.error("Failed to fetch address:", response.data.message);
        }
      } catch (error) {
        console.error("An error occurred while fetching the address:", error);
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
    }) {
      try {
        const response = await axios.put(`/api/address/edit`, address);
        if (response.data.message === "Address edited successfully") {
          this.addressData = response.data.updatedAddress;
        } else {
          console.error("Failed to edit address:", response.data.message);
        }
      } catch (error) {
        console.error("Failed to edit address:", error);
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
    }) {
      try {
        /* console.log("Editing profile with userId:", profile.userId); */
        const response = await axios.put("/api/profile/edit", profile);
        if (response.data.message === "Profile updated successfully") {
          this.profileData = response.data.updatedProfile;
        } else {
          console.error("Failed to update profile:", response.data.message);
        }
      } catch (error) {
        console.error("Failed to update profile:", error);
      }
    },
    async fetchProfile() {
      const userId = localStorage.getItem("userId") as string;
      try {
        const response = await axios.get(`/api/profile/${userId}`);
        this.profileData = response.data.profile;
      } catch (error) {
        console.error("Failed to fetch profile:", error);
      }
    },
  },
  persist: {
    key: "private-cabinet-store",
    storage: typeof window !== "undefined" ? localStorage : undefined,
    paths: ["activeBtn"],
  },
});
