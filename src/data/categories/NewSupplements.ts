import { Product } from '../../types';
import { generatePlaceholders } from '../productUtils';

export const newSupplements: Product[] = [
    ...generatePlaceholders('Supplements', 1000, 500),
    {
        id: 'cgn-omega3-100',
        name: 'California Gold Nutrition, Omega-3 Premium Fish Oil, 100 Fish Gelatin Softgels',
        price: 16.99,
        image: 'https://images.iherb.com/is/image/iHerb/cgn00965_l?fmt=jpg',
        description: '1000 mg, 100 Fish Gelatin Softgels',
        category: 'Supplements'
    },
    {
        id: 'cgn-lactobif-30-60',
        name: 'California Gold Nutrition, LactoBif® 30 Probiotics, 30 Billion CFU, 60 Veggie Capsules',
        price: 29.76,
        image: 'https://images.iherb.com/is/image/iHerb/cgn00964_l?fmt=jpg',
        description: '30 Billion CFU, 60 Veggie Capsules',
        category: 'Supplements'
    },
    {
        id: 'drb-magnesium-240',
        name: 'Doctor\'s Best, High Absorption Magnesium Lysinate Glycinate, 100% Chelated, 240 Tablets',
        price: 27.88,
        image: 'https://images.iherb.com/is/image/iHerb/drb00078_l?fmt=jpg',
        description: '100 mg Per Serving, 240 Tablets',
        category: 'Supplements'
    },
    {
        id: 'now-d3-k2-120',
        name: 'NOW Foods, Vitamin D3 & K2, 120 Capsules',
        price: 13.01,
        image: 'https://images.iherb.com/is/image/iHerb/now00372_l?fmt=jpg',
        description: '1,000 IU / 45 mcg, 120 Capsules',
        category: 'Supplements'
    }
];
