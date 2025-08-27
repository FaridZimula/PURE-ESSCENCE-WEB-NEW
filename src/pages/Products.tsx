import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import ProductCard from '../components/ProductCard';
import { allProducts, getProductsByCategory } from '../data/allProducts';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

// Available product categories
const categories = [
  'Health Products',
  'Skin Products', 
  'Lotions',
  'Tablets',
  'Bedroom Products'
];

// Category-specific slideshow images
const categorySlides = {
  'All': [
    { image: "/images/Home Sliders/WEB BANNER 10_page-0001.jpg" },
    { image: "/images/Home Sliders/WEB BANNER PURE ESSENCE TWO_page-0001.jpg" }
  ],
  'Skin Products': [
    { image: "/images/Home Sliders/WEB BANNER PURE ESSENCE FOUR_page-0001.jpg" },
    { image: "/images/Home Sliders/WEB BANNER 10_page-0001.jpg" }
  ],
  'Lotions': [
    { image: "/images/natural/24.jpg" },
    { image: "/images/natural/31.jpg" }
  ],
  'Bedroom Products': [
    { image: "/images/Home Sliders/WEB BANNER PURE ESSENCE 1_page-0001.jpg" },
    { image: "/images/Home Sliders/WEB BANNER 10_page-0001.jpg" }
  ],
  'Tablets': [
    { image: "/images/natural/16.jpg" },
    { image: "/images/Home Sliders/WEB BANNER 10_page-0001.jpg" }
  ],
  'Health Products': [
    { image: "/images/natural/15.jpg" },
    { image: "/images/Home Sliders/WEB BANNER 10_page-0001.jpg" }
  ]
};

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [currentPromoSlide, setCurrentPromoSlide] = useState(0);
  const [addedToCart, setAddedToCart] = useState<{[key: string]: boolean}>({});
  const navigate = useNavigate();
  const { addToCart } = useCart();

  // Get current slideshow images based on selected category
  const currentSlides = categorySlides[selectedCategory] || categorySlides['All'];
  
  // Auto-slide for promo images
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPromoSlide((prev) => (prev + 1) % currentSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [currentSlides.length]);

  // Reset slide when category changes
  useEffect(() => {
    setCurrentPromoSlide(0);
  }, [selectedCategory]);

  // Filter products by category
  const filteredProducts = selectedCategory === 'All' 
    ? allProducts 
    : getProductsByCategory(selectedCategory);

  const handleAddToCart = (product: any) => {
    addToCart({ ...product, quantity: 1 });
    setAddedToCart(prev => ({ ...prev, [product.id]: true }));
    
    // Reset button after 2 seconds
    setTimeout(() => {
      setAddedToCart(prev => ({ ...prev, [product.id]: false }));
    }, 2000);
  };

  return (
    <div className="pt-16">
      {/* Full Width Hero Image */}
      <div className="relative w-full mb-8 overflow-hidden" style={{ aspectRatio: '1351/353' }}>
        <div className="flex transition-transform duration-1000 ease-in-out h-full"
             style={{ transform: `translateX(-${currentPromoSlide * 100}%)` }}>
          {currentSlides.map((slide, index) => (
            <div key={index} className="min-w-full h-full">
              <img
                src={slide.image}
                alt={`Promo ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        
        {/* Slide indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {currentSlides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentPromoSlide === index ? 'bg-[#f98203]' : 'bg-white/50'
              }`}
              onClick={() => setCurrentPromoSlide(index)}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-4xl font-extrabold text-center text-[#dd2581] mb-8"
        >
          Our Products
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Left Sidebar - Categories */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-36">
            <h3 className="text-lg font-semibold mb-4 text-[#dd2581]">Categories</h3>
            <div className="space-y-2">
              <button
                onClick={() => setSelectedCategory('All')}
                className={`w-full text-left px-4 py-2 rounded-md transition-colors duration-200 text-sm ${
                  selectedCategory === 'All' 
                    ? 'bg-[#dd2581] text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-[#f98203] hover:text-white'
                }`}
              >
                All Products
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`w-full text-left px-4 py-2 rounded-md transition-colors duration-200 text-sm ${
                    selectedCategory === category 
                      ? 'bg-[#dd2581] text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-[#f98203] hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          {/* Products Count */}
          <div className="mb-6">
            <p className="text-gray-600">
              Showing {filteredProducts.length} products
              {selectedCategory !== 'All' && ` in ${selectedCategory}`}
            </p>
          </div>
          
          {/* Products Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col max-w-[280px] mx-auto"
              >
                <div className="relative aspect-square w-full">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover cursor-pointer"
                    onClick={() => navigate(`/shop-detail/${product.id}`)}
                  />
                  <div className="absolute top-2 left-2">
                    <span className="bg-[#f98203] text-white px-2 py-0.5 rounded-full text-xs font-semibold">
                      {product.category}
                    </span>
                  </div>
                </div>
                <div className="p-2 md:p-3 flex flex-col flex-1">
                  <h3
                    className="text-xs md:text-sm font-bold text-gray-800 mb-1 cursor-pointer hover:text-[#dd2581] transition-colors line-clamp-2"
                    onClick={() => navigate(`/shop-detail/${product.id}`)}
                  >
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-2 text-xs flex-1 line-clamp-2">{product.description}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-sm md:text-base font-bold text-[#dd2581]">
                      ${product.price.toFixed(2)}
                    </span>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className={`px-2 md:px-3 py-1 rounded-full font-semibold transition-all duration-300 text-xs ${
                        addedToCart[product.id] 
                          ? 'bg-[#dd2581] text-white' 
                          : 'bg-[#dd2581] text-white hover:bg-[#f98203]'
                      }`}
                    >
                      {addedToCart[product.id] ? 'Added!' : 'Add to Cart'}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No products message */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-base md:text-lg">No products found in this category.</p>
              <button
                onClick={() => setSelectedCategory('All')}
                className="mt-4 px-4 md:px-6 py-2 bg-[#f98203] text-white rounded-full hover:bg-[#dd2581] transition-colors text-sm md:text-base"
              >
                View All Products
              </button>
            </div>
          )}
        </div>
      </div>
      </div>
    </div>
  );
}