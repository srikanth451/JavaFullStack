import React from "react";
import PageHeading from "./PageHeading";
import products from "../../data/Product";
import ProductListing from "./ProductListing";

export default function Home() {
  return (
    <div className="home-container">
      <PageHeading tittle="Explore Eazy Stickers!">
        Add a touch of creativity to your space with our widw range of fun and
        unique stickers. Perfect for any occasion!
      </PageHeading>
      <ProductListing products={products} />
    </div>
  );
}
