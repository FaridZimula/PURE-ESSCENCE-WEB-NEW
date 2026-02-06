import { Product } from '../../types';
import { generatePlaceholders } from '../productUtils';

export const homeProducts: Product[] = [
    ...generatePlaceholders('Home', 1000, 500)
];
