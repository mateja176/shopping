export interface OrderItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
}

export interface Order {
  baseUrl: string;
  items: OrderItem[];
}
