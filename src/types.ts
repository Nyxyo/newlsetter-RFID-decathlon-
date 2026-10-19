export interface ProductItem {
  id: string;
  name: string;
  category: string;
  brand: string;
  price: number;
  epcCode: string;
  weight: string;
  iconName: string;
}

export interface Hotspot {
  id: string;
  x: number;
  y: number;
  title: string;
  description: string;
  specs: string;
}

export interface MetricCard {
  value: string;
  label: string;
  subtext: string;
  change: string;
}
