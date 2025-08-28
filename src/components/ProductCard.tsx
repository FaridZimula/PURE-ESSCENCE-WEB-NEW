import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  rating: number;
}

export default function ProductCard({ id, name, price, image, category, rating }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-200">
      <Link to={`/shop-details/${id}`} className="block">
        <div className="relative">
          <img src={image} alt={name} className="w-full h-48 object-cover" />
          <div className="absolute top-2 right-2">
            <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.682l-1.318-1.364a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
          </div>
          <div className="absolute top-2 left-2">
            <span className="bg-[#dd2581] text-white px-2 py-1 rounded text-xs font-medium">
              {category}
            </span>
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-sm font-medium text-gray-800 mb-2 line-clamp-2 h-10">{name}</h3>
          <div className="flex items-center mb-3">
            <div className="flex text-[#f98203]">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3 h-3 ${i < rating ? 'fill-current' : 'stroke-current'}`}
                />
              ))}
            </div>
            <span className="text-gray-500 ml-1 text-xs">({rating})</span>
          </div>
          <div className="mb-3">
            <span className="text-lg font-bold text-[#dd2581]">${price.toFixed(2)}</span>
          </div>
          <div className="w-full">
            <button className="w-full bg-[#dd2581] text-white py-2 px-4 rounded text-sm font-medium hover:bg-[#f98203] transition-colors flex items-center justify-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5-6m0 0h15M17 21a2 2 0 100-4 2 2 0 000 4zM9 21a2 2 0 100-4 2 2 0 000 4z" />
              </svg>
              ADD TO CART
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}
