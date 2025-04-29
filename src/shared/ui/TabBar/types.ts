// types.ts (можно создать отдельный файл или хранить рядом)
export interface Product {
  id: number;
  title: string;
  descr: string;
  svg: string;
}

export interface ProductData {
  title: {
    titlePart1: string;
    titlePart2: string;
  };
  individuals: Product[];
  businesses: Product[];
}
