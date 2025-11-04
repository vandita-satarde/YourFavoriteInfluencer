import React, { useEffect, useState } from "react";
import axios from "axios";
import ItemCard from "./ItemCard";
import Navbar from "./navbar";
import Footer from "./footer";

const ShopMyLife = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
  axios
    .get("https://your-favorite-influencer.vercel.app/api/addproducts") // Update this if you're deploying
    .then((res) => {
      console.log("Fetched items:", res);
      setItems(res.data);
    })
    .catch((err) => {
      console.error("Error fetching items:", err.response ? err.response.data : err.message);
    });
}, []);

  return (
    <>
      <Navbar />
      <section className="text-[#964e4e] bg-[#fcf2f2]">
        <h1 className="text-2xl md:text-4xl lg:text-6xl pt-30 md:pt-40 lg:pt-40 mb-4 leading-tight text-[#fb7e7e] text-center">
          Shop My Life
        </h1>

        <p className="text-[10px] md:text-[16px] lg:text-[16px] text-[#b86f6f] max-w-2xl mx-10 md:mx-auto lg:mx-auto text-center mb-18">
          A collection of well-loved items that bring comfort, ease, and magic — from the road to slow mornings at home.
        </p>

        <p className="italic md:pt-15 lg:pt-16 text-center text-[10px] md:text-[17px] lg:text-[17px]">
          “This made my life better.”
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 py-3 px-10 lg:p-6 max-w-6xl pb-40 mx-auto">
          {items.length > 0 ? (
            items.map((item, index) => <ItemCard key={index} {...item} />)
          ) : (
            <p className="text-center col-span-full text-gray-500">
              No items found. Please check back soon!
            </p>
          )}
        </div>
        <Footer />
      </section>
    </>
  );
};

export default ShopMyLife;
