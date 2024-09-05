export interface CartProduct {
  userId: string;
  productId: number;
  hero?: string;
  discount?: string;
  heroes: string[];
  gender: string;
  title: string;
  desc: string;
  specs: {
    gender: string;
    country: string;
    composition: string;
    collection: string;
    warranty: string;
    yearOfRelease: number;
  };
  colors: string[];
  sizes: number[];
  currentPrice: string;
  previousPrice: string;
  categoryBackgroundColor?: string;
  category?: string;
  averageRating?: number;
  chosenColor: string;
  chosenSize: number;
  qty: number;
}
