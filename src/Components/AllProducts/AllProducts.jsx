import React, { useEffect, useState } from "react";

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data)
      });
  }, []);
  return (
    <div>
      <p>
        {products.map((product) => (
            <p key={product._id}>
                {product.title}
            </p>
        ))}
      </p>
    </div>
  );
};

export default AllProducts;
