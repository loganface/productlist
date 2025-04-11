export interface Product {
    id: number;
    name: string;
    productLink: string;
    imageUrl: string;
    primarySource: string;
    secondarySources: string[];
  }
  
  // This is a fallback in case the sheet fetch fails
  export const fallbackProducts: Product[] = [
    {
      id: 1,
      name: "Loading...",
      productLink: "#",
      imageUrl: "/placeholder.png",
      primarySource: "#",
      secondarySources: []
    }
  ];
  
  // Sheet ID from your public Google Sheet
  export const SHEET_ID = "1M7LtXf-DBSfgxpQZqmEXOLUA9cTDypRgxXx2QgsfglU";

  export { fetchProductsFromSheet } from '../utils/sheets';