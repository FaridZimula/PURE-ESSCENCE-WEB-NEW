import { Product } from '../../types';
import { generatePlaceholders } from '../productUtils';

export const groceryProducts: Product[] = [
    ...generatePlaceholders('Grocery', 1000, 500)
];
