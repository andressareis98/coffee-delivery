export interface Coffee {
  id: number;
  name: string;
  description: string;
  price: number;
  src: string;
  tags: string[];
  quantity: number;
}

export type Coffees = Coffee[];
