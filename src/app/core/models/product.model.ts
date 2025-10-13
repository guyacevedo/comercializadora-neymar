import { ProductStatus } from "../enums";

export interface Product {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  status: ProductStatus;
}
