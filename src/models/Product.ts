export interface Product {
  id?: string;
  name: string;
  description: string;
  productCode: string;
}

export const defaultProduct: Product = {
  name: "",
  description: "",
  productCode: "",
};
