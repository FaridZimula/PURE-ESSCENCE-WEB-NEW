import { Product } from '../../types';
import { generatePlaceholders } from '../productUtils';

export const petsProducts: Product[] = [
    ...generatePlaceholders('Pets', 1000, 500)
];
