export interface RetrievedReview {
  _id: string;
  productId: number;
  username: string;
  rating: number;
  date: string;
  text: string;
  imgs?: string[];
}
