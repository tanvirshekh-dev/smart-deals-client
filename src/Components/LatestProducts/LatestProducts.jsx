import React, { use } from "react";
import Product from "../Product/Product";
import { Link } from "react-router";

const LatestProducts = ({ latestProductPromise }) => {
  const products = use(latestProductPromise);
  console.log(products);

  return (
    <div className="p-20 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mt-6 mb-10">
        Recent <span className="text-primary">Product</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
        {products.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
      <div className=" flex items-center justify-center">
        <Link to={"/allProducts"} className="btn btn-primary w-40 mt-10">Show All</Link>
      </div>
    </div>
  );
};

export default LatestProducts;
