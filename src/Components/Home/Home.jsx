import React from "react";
import Hero from "./Hero";
import LatestProducts from "../LatestProducts/LatestProducts";
import Footer from "../Footer/Footer";

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
      {/* footer */}
      <Footer></Footer>
    </div>
  );
};

export default Home;
