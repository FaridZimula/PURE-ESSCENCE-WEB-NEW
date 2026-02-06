import { Product } from '../../types';
import { generatePlaceholders } from '../productUtils';

export const sportsProducts: Product[] = [
    ...generatePlaceholders('Sports', 1000, 500)
];
