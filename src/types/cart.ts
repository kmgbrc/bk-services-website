export interface CartItem {
  id: string;
  serviceName: string;
  planName: string;
  price: number;
  description: string;
}

export interface CartState {
  items: CartItem[];
  isOpen: boolean;
}