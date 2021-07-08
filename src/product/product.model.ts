export class ProductModel {
  image: string;
  title: string;
  price: number;
  oldNumber: number;
  credit: number;
  calculatedRating: number;
  description: string;
  advantages: string;
  disAdvantages: string;
  categories: string[];
  tags: string[];
  specifications: {
    [key: string]: string;
  };
}
