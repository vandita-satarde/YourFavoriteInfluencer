import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../componnets/Sidebar";

function AddProducts() {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    link: "",
    image: null,
  });

  // ✅ Fetch products on load
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/addproducts");
      setProducts(res.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) setFormData({ ...formData, [name]: files[0] });
    else setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });

    try {
      await axios.post("http://localhost:5000/api/addproducts/add", data);
      alert("Item added successfully!");
      setFormData({ title: "", description: "", link: "", image: null }); // reset form
      fetchProducts(); // ✅ Refresh list
    } catch (error) {
      console.error(error);
      alert("Failed to add item");
    }
  };

  return (
    <>
      <Sidebar />
      <div className="p-6 bg-pink-100 min-h-screen pt-24 md:pt-8 md:pl-80">
        {/* ✅ Add Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 mb-8">
          <input
            type="text"
            name="title"
            value={formData.title}
            placeholder="Title"
            onChange={handleChange}
            required
            className="border border-pink-200 p-2 rounded-md"
          />
          <textarea
            name="description"
            value={formData.description}
            placeholder="Description"
            onChange={handleChange}
            required
            className="border border-pink-200 p-2 rounded-md"
          />
          <input
            type="text"
            name="link"
            value={formData.link}
            placeholder="Product Link"
            onChange={handleChange}
            required
            className="border border-pink-200 p-2 rounded-md"
          />
          <input type="file" name="image" onChange={handleChange} required />
          <button
            type="submit"
            className="bg-red-400 text-white p-2 w-32 rounded hover:bg-red-500"
          >
            Add Item
          </button>
        </form>

        {/* ✅ Products Display */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((item) => (
            <div
              key={item._id}
              className="bg-pink-100 rounded-xl shadow-md p-4 flex flex-col items-center"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-40 h-40 object-cover rounded-md mb-3"
              />
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-600 text-center mb-2">
                {item.description}
              </p>
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="text-red-400 hover:underline"
              >
                View Product
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default AddProducts;
