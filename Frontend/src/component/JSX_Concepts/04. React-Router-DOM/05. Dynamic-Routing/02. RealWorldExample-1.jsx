import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";

// Simulated Product Database
const products = [
  {
    id: "101",
    name: "Nike Shoes",
    price: "$120",
    description: "High-quality sports shoes.",
  },
  {
    id: "102",
    name: "Adidas T-shirt",
    price: "$50",
    description: "Comfortable and stylish.",
  },
  {
    id: "103",
    name: "Apple AirPods",
    price: "$150",
    description: "Wireless Bluetooth Earbuds.",
  },
];

// Product List -> with dynamic link
export const ProductList = () => {
  return (
    <div className="p-5">
      <div>
        <ul className="flex gap-2">
          {products.map((eachProduct) => (
            <li key={eachProduct.id} className="space-x-3 flex">
              <Link to={`/products/${eachProduct.id}`}>{eachProduct.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const ProductDetails = () => {
  const { productId } = useParams();
  // check product exist or not

  const product = products.find((pid) => pid.id === productId);
  console.log("Products >>>", product);
  if (!product) {
    return (
      <div>
        <h2>Product Not Found</h2>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="p-5">
      <h2>{product.name}</h2>
      <p>
        <strong>Price:</strong> {product.price}
      </p>
      <p>
        <strong>Description:</strong> {product.description}
      </p>
      <Link to="/">Home</Link>
    </div>
  );
};

export const ProductApp = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
};
