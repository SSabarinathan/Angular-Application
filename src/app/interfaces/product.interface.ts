export interface Product {
  cost: number;
  description: string;
  specs: Specs;
  quantity: number;
}

interface Specs {
  Size: string;
}

export interface FullData{
  cost: number;
  description: string;
  specs: Specs;
  quantity: number;
  id:number;
}

export interface ProductList{
  cost: number;
  description: string;
  specs: Specs;
  quantity: number;
  id:number;
  modelname:string;
  link:string;
}



