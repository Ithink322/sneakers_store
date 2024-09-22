import { defineStore } from "pinia";
import type { Product } from "@/types/Product";
import { useFiltersStore } from "@/store/Filters";

interface ProductsState {
  allProducts: Product[];
  filteredProducts: Product[];
  currentPage: number;
  productsPerPage: number;
  translateValue: number;
}

export const useProductsStore = defineStore("productsStore", {
  state: (): ProductsState => ({
    allProducts: [],
    filteredProducts: [],
    currentPage: 1,
    productsPerPage: 18,
    translateValue: 0,
  }),
  getters: {
    totalPages(state): number {
      return Math.ceil(state.filteredProducts.length / state.productsPerPage);
    },
    paginatedProducts(state): Product[] {
      const start = (state.currentPage - 1) * state.productsPerPage;
      const end = start + state.productsPerPage;
      return state.filteredProducts.slice(start, end);
    },
  },
  actions: {
    setAllProducts(products: Product[]) {
      this.allProducts = products;
    },
    filterProducts() {
      const filtersStore = useFiltersStore();
      const route = useRoute();
      const searchQuery = route.query.search?.toString() || "";

      // Start with all products
      let productsToFilter = [...this.allProducts];

      // Apply search filtering
      if (searchQuery) {
        productsToFilter = productsToFilter.filter((product) =>
          product.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }

      // Apply category filters
      if (filtersStore.pickedCategoryFilters!.length > 0) {
        productsToFilter = productsToFilter.filter((product) => {
          const productPrice = parseFloat(
            product.currentPrice.replace(/[^0-9.-]+/g, "").replace(/\s+/g, "")
          );
          const priceMatch =
            productPrice >= filtersStore.minPrice! &&
            productPrice <= filtersStore.maxPrice!;

          const sizeMatch =
            filtersStore.sizes!.length === 0 ||
            product.sizes.some((size) => filtersStore.sizes!.includes(size));

          const colorMatch =
            filtersStore.colors!.length === 0 ||
            product.colors.some((color) =>
              filtersStore.colors!.includes(color)
            );

          const materialMatch =
            filtersStore.materials!.length === 0 ||
            filtersStore.materials!.some((material) =>
              product.specs.composition
                .toLowerCase()
                .includes(material.toLowerCase())
            );

          return priceMatch && sizeMatch && colorMatch && materialMatch;
        });
      }

      // Update filtered products
      this.filteredProducts = productsToFilter;
    },
    setPage(page: number) {
      this.currentPage = page;
    },
    updateTranslateValue(newTranslateValue: number) {
      this.translateValue = newTranslateValue;
    },
    resetTranslateValue() {
      this.translateValue = 0;
    },
  },
  persist: {
    key: "catalog-store",
    storage: typeof window !== "undefined" ? localStorage : undefined,
    paths: ["currentPage", "productsPerPage"],
  },
});
