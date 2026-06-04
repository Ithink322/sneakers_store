import { defineStore } from "pinia";
import type { Product } from "@/types/Product";
import type { ApiResponse } from "@/types/api";
import { useFiltersStore } from "@/store/Filters";
import { getApiErrorMessage, getApiResponseMessage } from "@/utils/apiClient";
import axios from "axios";

interface ProductsState {
  allProducts: Product[];
  filteredProducts: Product[];
  currentPage: number;
  productsPerPage: number;
  translateValue: number;
  product: Product | null;
}

export const useProductsStore = defineStore("productsStore", {
  state: (): ProductsState => ({
    allProducts: [],
    filteredProducts: [],
    currentPage: 1,
    productsPerPage: 18,
    translateValue: 0,
    product: null,
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
      const paginatedCategory = route.query.paginate?.toString() || "";

      let productsToFilter = [...this.allProducts];
      if (searchQuery) {
        productsToFilter = productsToFilter.filter((product) =>
          product.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }

      if (paginatedCategory) {
        productsToFilter = productsToFilter.filter(
          (product) => product.sortingCategory === paginatedCategory
        );
      }

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

      this.filteredProducts = productsToFilter;
    },
    async fetchProducts() {
      try {
        const { data } = await axios.get("/api/catalog/getProducts");
        this.setAllProducts(data);
        this.filterProducts();
      } catch (error) {
        console.error(
          getApiErrorMessage(
            error,
            "Не удалось загрузить каталог."
          )
        );
      }
    },
    async fetchProductById(id: number) {
      if (!this.allProducts.length) {
        await this.fetchProducts();
      }
      this.product = this.allProducts.find((p) => p.id === id) || null;
      if (!this.product) {
        console.error("Товар не найден.");
      }
    },
    async getProductById(id: number) {
      if (!this.allProducts.length) {
        await this.fetchProducts();
      }
      this.product = this.allProducts.find((p) => p.id === id) || null;
      if (!this.product) {
        console.error("Товар не найден.");
      }
      return this.product;
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
    searchProducts(query: string): Product[] {
      if (!query.trim()) {
        return [];
      }

      const searchRegex = new RegExp(query, "i");
      return this.allProducts.filter((product) =>
        searchRegex.test(product.title)
      );
    },
    async addProduct(productData: Product): Promise<ApiResponse<{ product?: Product }>> {
      try {
        const response = await axios.post(
          "/api/catalog/addProduct",
          productData
        );

        if (response.data.success) {
          const createdProduct = response.data.product;
          this.allProducts.push(createdProduct);
          return response.data;
        }

        const message = getApiResponseMessage(
          response.data,
          "Не удалось добавить товар."
        );
        return { success: false, message };
      } catch (error) {
        const message = getApiErrorMessage(
          error,
          "Не удалось добавить товар."
        );
        return { success: false, message };
      }
    },
    async editProduct(updatedProduct: Product) {
      try {
        const response = await axios.put(
          "/api/catalog/editProduct",
          updatedProduct
        );
        if (response.data.error) {
          throw new Error(response.data.error);
        }

        const index = this.allProducts.findIndex(
          (product) => product.id === updatedProduct.id
        );
        if (index !== -1) {
          this.allProducts[index] = { ...response.data };
        } else {
          console.error("Товар не найден в каталоге.");
        }
      } catch (error) {
        console.error(getApiErrorMessage(error, "Не удалось обновить товар."));
        throw error;
      }
    },
    async removeProduct(id: number): Promise<ApiResponse> {
      try {
        const response = await axios.post("/api/catalog/removeProduct", {
          id: Number(id),
        });

        if (response.data.success) {
          this.allProducts = this.allProducts.filter(
            (product) => product.id !== id
          );
          this.filterProducts();
          const currentTotalPages = this.totalPages;
          if (this.currentPage > currentTotalPages && currentTotalPages > 0) {
            this.currentPage = currentTotalPages;
          }
          return response.data;
        }

        const message = getApiResponseMessage(
          response.data,
          "Не удалось удалить товар."
        );
        return { success: false, message };
      } catch (error) {
        const message = getApiErrorMessage(
          error,
          "Не удалось удалить товар."
        );
        return { success: false, message };
      }
    },
  },
  persist: {
    key: "catalog-store",
    storage: typeof window !== "undefined" ? localStorage : undefined,
    paths: [
      "allProducts",
      "filteredProducts",
      "currentPage",
      "productsPerPage",
    ],
  },
});
