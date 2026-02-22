import React from "react";
import Hero from "./Hero";
import LatestProducts from "../LatestProducts/LatestProducts";

const latestProductPromise = fetch(
  "http://localhost:3000/latest-products"
).then((res) => res.json());
const Home = () => {
  return (
    <div>
      {/* Hero section */}
      <Hero></Hero>
      {/* Latest Products */}
      <LatestProducts
        latestProductPromise={latestProductPromise}
      ></LatestProducts>
    </div>
  );
};

export default Home;
