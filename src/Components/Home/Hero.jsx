import React from 'react';
import { Search } from "lucide-react";
import heroImg1 from "../../../public/Images/left-hero.png";
import heroImg2 from "../../../public/Images/right-hero.png";
import { Link } from 'react-router';

const Hero = () => {
    return (
        <div className="hero relative bg-primary">
      {/* images */}
      <div className="flex relative top-0 left-0 w-full h-full items-center justify-between">
        <img src={heroImg1} alt="" className="absolute top-0 left-0"/>
        <img src={heroImg2} alt="" className="absolute top-0 right-0"/>
      </div>
      {/* content */}
      <div className="hero-content text-center min-h-screen">
        <div className="">
          <h1 className="text-5xl font-bold max-w-md mx-auto">
            Deal your <span className="text-primary">Products</span> in a{" "}
            <span className="text-primary">Smart</span> way !
          </h1>
          <p className="py-6 text-gray-500">
            SmartDeals helps you sell, resell, and shop from trusted local
            sellers — all in one place!
          </p>
          {/* input field */}
          <div className="join mb-8 min-w-xl flex items-center justify-center">
            <label className="input validator join-item rounded-l-3xl">
              <input
                type="text"
                placeholder="search For Products, Categories..."
                required
              />
            </label>
            <button className="btn btn-neutral join-item rounded-r-3xl">
              <Search size={24} />
            </button>
          </div>
          {/* button field */}
          <div>
            <Link to={"/allProducts"} className="btn btn-primary mr-4">Watch All Product</Link>
            <Link to={"/createProduct"} className="btn btn-secondary">Post An Product</Link>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Hero;