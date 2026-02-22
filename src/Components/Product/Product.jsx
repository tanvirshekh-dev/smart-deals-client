import React from "react";
import { Link } from "react-router";

const Product = ({ product }) => {
  const { _id, title, price_min, price_max, image } = product;
  return (
    <div>
      <div className="card bg-base-100 shadow-sm">
        <figure className="px-4 pt-4">
          <img
            src={image}
            alt="Shoes"
            className="rounded-lg h-[200px] w-full object-cover bg-center"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-xl font-semibold">{title}</h2>
          <p className="text-primary font-semibold">
            ${price_min} - {price_max}
          </p>
          <div className="card-actions">
            <Link to={`/productDetails/${_id}`} className="btn btn-secondary w-full mx-auto">
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
