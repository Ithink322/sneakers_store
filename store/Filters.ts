import { defineStore } from "pinia";

interface FiltersState {
  minPrice?: number;
  maxPrice?: number;
  sizes?: number[];
  colors?: string[];
  materials?: string[];
  pickedCategoryFilters?: string[];
}

export const useFiltersStore = defineStore("filtersStore", {
  state: (): FiltersState => ({
    minPrice: 6329,
    maxPrice: 16790,
    sizes: [],
    colors: [],
    materials: [],
    pickedCategoryFilters: [],
  }),
  actions: {
    setMinPrice(price: number) {
      this.minPrice = price;
    },
    setMaxPrice(price: number) {
      this.maxPrice = price;
    },
    setSizes(sizes: number[]) {
      this.sizes = sizes;
    },
    setColors(colors: string[]) {
      this.colors = colors;
    },
    setMaterials(materials: string[]) {
      this.materials = materials;
    },
    resetFilters() {
      this.minPrice = 6329;
      this.maxPrice = 16790;
      this.sizes = [];
      this.colors = [];
      this.materials = [];
    },
    setPickedCategoryFilters(filters: string[]) {
      this.pickedCategoryFilters = filters;
    },
    resetPickedCategoryFilters() {
      this.pickedCategoryFilters = [];
    },
  },
  persist: {
    key: "filters-store",
    storage: typeof window !== "undefined" ? localStorage : undefined,
    paths: [
      "minPrice",
      "maxPrice",
      "sizes",
      "colors",
      "materials",
      "pickedCategoryFilters",
    ],
  },
});
