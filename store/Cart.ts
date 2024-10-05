import { defineStore } from "pinia";
import type { Product } from "@/types/Product";
import type { CartProduct } from "@/types/CartProduct";
import axios from "axios";

interface ProductsState {
  cart: CartProduct[];
  productCounts: ProductCount;
  promoCode: string;
  discountSubTotal: number;
}
interface ProductCount {
  [key: string]: number;
}
interface PromoCode {
  code: string;
  discount: number;
}
const validPromoCodes: PromoCode[] = [
  { code: "SUMMER20", discount: 0.2 },
  { code: "AUTUMN15", discount: 0.15 },
  { code: "MINECRAFT25", discount: 0.25 },
  { code: "TYPESCRIPT10", discount: 0.1 },
];

export const useCartStore = defineStore("cartProductsStore", {
  state: (): ProductsState => ({
    cart: [],
    productCounts: {},
    promoCode: "",
    discountSubTotal: 0,
  }),
  getters: {
    getCount:
      (state) =>
      (productId: number, chosenColor: string, chosenSize: number): number => {
        const key = `${productId}-${chosenColor}-${chosenSize}`;
        return state.productCounts[key] || 1;
      },
    totalSum(): number {
      return this.cart.reduce((total, item) => {
        const itemTotal =
          parseFloat(item.currentPrice.replace(/\s|₽/g, "")) *
          this.getCount(item.productId, item.chosenColor, item.chosenSize);
        return total + itemTotal;
      }, 0);
    },
    validPromoCodes(): PromoCode[] {
      return validPromoCodes;
    },
  },
  actions: {
    async fetchCart(userId: string) {
      const response = await axios.get(`/api/cart/get`, {
        params: { userId },
      });
      this.cart = response.data;

      response.data.forEach((product: CartProduct) => {
        const key = this.getKey(
          product.productId,
          product.chosenColor,
          product.chosenSize
        );
        this.productCounts[key] = this.productCounts[key];
      });

      this.calculateDiscount();
    },
    async addToCart(
      product: Product,
      chosenColor: string,
      chosenSize: number,
      qty: number = 1
    ) {
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
        qty: qty,
      };

      const key = this.getKey(cartProduct.productId, chosenColor, chosenSize);

      const existingProduct = this.cart.find(
        (p) =>
          p.productId === cartProduct.productId &&
          p.chosenColor === cartProduct.chosenColor &&
          p.chosenSize === cartProduct.chosenSize
      );
      if (!existingProduct) {
        await axios.post("/api/cart/add", cartProduct);
        this.cart.push(cartProduct);
        this.productCounts[key] = qty;
      } else {
        existingProduct.qty += qty;
        this.productCounts[key] += qty;
      }

      this.calculateDiscount();
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

      const key = this.getKey(productId, chosenColor, chosenSize);
      delete this.productCounts[key];

      this.cart = this.cart.filter(
        (p) =>
          !(
            p.productId === productId &&
            p.chosenColor === chosenColor &&
            p.chosenSize === chosenSize
          )
      );

      this.calculateDiscount();
    },
    calculateDiscount() {
      const promo = validPromoCodes.find(
        (promo) => promo.code === this.promoCode.toUpperCase()
      );

      if (promo) {
        this.discountSubTotal = Math.floor(this.totalSum * promo.discount);
      } else {
        this.discountSubTotal = 0;
      }
    },
    applyPromoCode(code: string) {
      this.promoCode = code;
      this.calculateDiscount();
    },
    increaseCount(productId: number, chosenColor: string, chosenSize: number) {
      const key = this.getKey(productId, chosenColor, chosenSize);
      if (this.productCounts[key] !== undefined) {
        this.productCounts[key]++;
      } else {
        this.productCounts[key] = 1;
      }

      this.calculateDiscount();
    },
    decreaseCount(productId: number, chosenColor: string, chosenSize: number) {
      const key = this.getKey(productId, chosenColor, chosenSize);
      if (this.productCounts[key] > 1) {
        this.productCounts[key]--;
      }

      this.calculateDiscount();
    },
    getKey(productId: number, chosenColor: string, chosenSize: number): string {
      return `${productId}-${chosenColor}-${chosenSize}`;
    },
    resetCart() {
      this.cart = [];
      this.productCounts = {};
      this.promoCode = "";
      this.discountSubTotal = 0;
      localStorage.removeItem("cart-store");
      this.cart = [...this.cart];
      const userId = localStorage.getItem("userId") as string;
      axios.post("/api/cart/reset", { userId });
    },
  },
  persist: {
    key: "cart-store",
    storage: typeof window !== "undefined" ? localStorage : undefined,
    paths: ["cart", "productCounts", "promoCode", "discountSubTotal"],
  },
});
