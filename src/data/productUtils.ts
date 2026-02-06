import { Product } from '../types';

export const generatePlaceholders = (category: string, startId: number, count: number): Product[] => {
    return Array.from({ length: count }, (_, index) => {
        const id = startId + index;
        // Normalize category for ID generation (e.g. 'Health Products' -> 'health-products')
        const idPrefix = category.toLowerCase().replace(/\s+/g, '-');

        return {
            id: `${idPrefix}-${id}`,
            name: `${category} Product ${index + 1}`,
            price: 10 + Math.floor(Math.random() * 90), // Random price between 10 and 100
            image: '', // Blank image as requested
            category: category,
            description: `This is a placeholder description for ${category} product number ${index + 1}. Details coming soon.`
        };
    });
};
