export interface NewReview {
  productId: number;
  username: string;
  rating: number;
  date: string;
  text: string;
  imgs?: string[];
}
