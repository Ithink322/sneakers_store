import { defineStore } from "pinia";

interface CatalogMenuState {
  isCatalogMenuOpen: boolean;
  catalogColorBind: string;
}

export const useCatalogMenu = defineStore("catalogMenuStore", {
  state: (): CatalogMenuState => ({
    isCatalogMenuOpen: false,
    catalogColorBind: "black",
  }),
  actions: {
    openCatalogMenu() {
      this.isCatalogMenuOpen = true;
      this.catalogColorBind = "#fb5a00";
    },
    closeCatalogMenu() {
      this.isCatalogMenuOpen = false;
      this.catalogColorBind = "black";
    },
  },
});
