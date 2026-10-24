export interface MenuItem {
  name: string;
  origin?: string;
  price: string;
}

export interface MenuCategory {
  id: string;
  label: string;
  icon: string;
  description: string;
  items: MenuItem[];
}
