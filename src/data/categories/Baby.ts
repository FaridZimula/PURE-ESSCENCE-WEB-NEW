import { Product } from '../../types';
import { generatePlaceholders } from '../productUtils';

export const babyProducts: Product[] = [
    ...generatePlaceholders('Baby', 1000, 500)
];
