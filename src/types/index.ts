export interface Property {
  id: string;
  title: string;
  type: 'house' | 'apartment' | 'office' | 'land';
  price: number;
  location: string;
  surface: number;
  rooms: number;
  description: string;
  imageUrl: string;
}

export interface FilterOptions {
  type: string;
  minPrice: number;
  maxPrice: number;
  minRooms: number;
}