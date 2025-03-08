import React from "react";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../../context/CartContext";

const products = [
  {
    id: 1,
    name: "Solar Panel 400W",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1581093801190-27a9c85a1087?auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    name: "Lithium Battery 200Ah",
    price: 499.99,
    image: "https://images.unsplash.com/photo-1592772878167-604d38c3c72a?auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    name: "Solar Inverter 5kW",
    price: 699.99,
    image: "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?auto=format&fit=crop&q=80",
  },
  {
    id: 4,
    name: "Solar LED Floodlight",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1616400619173-e8d3a22f9782?auto=format&fit=crop&q=80",
  },
];

export default function ProductListing() {
  const { addToCart } = useCart();

  const handleAddToCart = (product: any) => {
    addToCart(product);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
        Featured Solar Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
              <p className="text-yellow-600 font-bold text-lg">${product.price.toFixed(2)}</p>
              <button 
                onClick={() => handleAddToCart(product)}
                className="mt-4 flex items-center justify-center w-full bg-yellow-500 text-white py-2 px-4 rounded-md text-sm font-semibold hover:bg-yellow-600 transition-colors"
              >
                <ShoppingCart className="h-5 w-5 mr-2" /> Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}