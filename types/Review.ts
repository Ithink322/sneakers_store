export interface Review {
  _id: number;
  productId: number;
  username: string;
  rating: number;
  date: string;
  text: string;
  imgs?: string[];
}
