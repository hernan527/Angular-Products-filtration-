export interface ProductPlant {
  id: number;
  title: string;
  scientificName: string;
  family: string;
  description: string;
  origin: string;
  price: number;
  category: string; // "Interior|Garden|Balcony|Flowers|Tree|Roses"
  size: string;
  image: string;
  rapidDelivery: boolean;
}
