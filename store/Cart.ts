import { defineStore } from "pinia";
import type { Product } from "@/types/Product";
import type { CartProduct } from "@/types/CartProduct";
import axios from "axios";

interface ProductsState {
  cart: CartProduct[];
}

export const useCartStore = defineStore("cartProductsStore", {
  state: (): ProductsState => ({
    cart: [],
  }),
  actions: {
    async fetchCart(userId: string) {
      const response = await axios.get(`/api/cart/get`, {
        params: { userId },
      });
      this.cart = response.data;
    },
    async addToCart(product: Product, chosenColor: string, chosenSize: number) {
      const userId = localStorage.getItem("userId") as string;

      const router = useRouter();
      if (!userId) {
        router.push("/logIn");
        return;
      }

      const cartProduct: CartProduct = {
        userId: userId!,
        productId: product.id,
        hero: product.hero,
        discount: product.discount,
        heroes: product.heroes,
        gender: product.gender,
        title: product.title,
        desc: product.desc,
        specs: product.specs,
        colors: product.colors,
        sizes: product.sizes,
        currentPrice: product.currentPrice,
        previousPrice: product.previousPrice,
        categoryBackgroundColor: product.categoryBackgroundColor,
        category: product.category,
        averageRating: product.averageRating,
        chosenColor: chosenColor,
        chosenSize: chosenSize,
      };

      const exists = this.cart.some(
        (p) =>
          p.productId === cartProduct.productId &&
          p.chosenColor === cartProduct.chosenColor &&
          p.chosenSize === cartProduct.chosenSize
      );
      if (!exists) {
        await axios.post("/api/cart/add", cartProduct);
        this.cart.push(cartProduct);
      }
      /*       await this.fetchCart(userId); */
    },
    async removeCartProduct(
      productId: number,
      chosenColor: string,
      chosenSize: number
    ) {
      const userId = localStorage.getItem("userId") as string;

      await axios.post("/api/cart/remove", {
        productId,
        userId,
        chosenColor,
        chosenSize,
      });

      /* await this.fetchCart(userId); */
      this.cart = this.cart.filter(
        (p) =>
          !(
            p.productId === productId &&
            p.chosenColor === chosenColor &&
            p.chosenSize === chosenSize
          )
      );
    },
  },
  persist: {
    key: "cart-store",
    storage: typeof window !== "undefined" ? localStorage : undefined,
    paths: ["cart"],
  },
});
