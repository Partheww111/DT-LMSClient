export interface ProductModel {
  productId: number;
  name: string;
  sku: string;
  category: number;
  basePrice: number;
  mrp: number;
  description: string;
  currency: number;
  manufacturedDate: Date;
  expireDate: Date;
}
