// Central product aggregator - combines all category products
import { healthProducts } from './categories/HealthProducts';
import { skinProducts } from './categories/SkinProducts';
import { lotions } from './categories/Lotions';
import { tablets } from './categories/Tablets';
import { bedroomProducts } from './categories/BedroomProducts';
import { groceryProducts } from './categories/Grocery';
import { homeProducts } from './categories/Home';
import { babyProducts } from './categories/Baby';
import { petsProducts } from './categories/Pets';
import { sportsProducts } from './categories/Sports';
import { newSupplements } from './categories/NewSupplements';

// Combine all products from different categories
export const allProducts = [
  ...healthProducts,
  ...skinProducts,
  ...lotions,
  ...tablets,
  ...bedroomProducts,
  ...groceryProducts,
  ...homeProducts,
  ...babyProducts,
  ...petsProducts,
  ...sportsProducts,
  ...newSupplements
];

// Export individual categories for easy access
export {
  skinProducts,
  lotions,
  tablets,
  bedroomProducts,
  groceryProducts,
  homeProducts,
  babyProducts,
  petsProducts,
  sportsProducts,
  newSupplements
};

// Category mapping for filtering
// Category mapping for filtering
export const categoryMapping = {
  'Supplements': [...healthProducts, ...tablets, ...newSupplements],
  'Sports': sportsProducts,
  'Bath': lotions,
  'Beauty': skinProducts,
  'Grocery': groceryProducts,
  'Home': homeProducts,
  'Baby': babyProducts,
  'Pets': petsProducts,
  'Bedroom Products': bedroomProducts
};

// Get products by category
export const getProductsByCategory = (category: string) => {
  return categoryMapping[category as keyof typeof categoryMapping] || [];
};