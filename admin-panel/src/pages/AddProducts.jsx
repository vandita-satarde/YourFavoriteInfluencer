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
      const res = await axios.get("https://your-favorite-influencer.vercel.app/api/addproducts");
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
      await axios.post("https://your-favorite-influencer.vercel.app/api/addproducts/add", data);
      alert("Item added successfully!");
      setFormData({ title: "", description: "", link: "", image: null }); // reset form
      fetchProducts(); // ✅ Refresh list
    } catch (error) {
      console.error(error);
      alert("Failed to add item");
    }
  };

  // Edit / Delete state
  const [editingItem, setEditingItem] = useState(null);
  const [editFormData, setEditFormData] = useState({ title: "", description: "", link: "", image: null });

  const handleEditClick = (item) => {
    setEditingItem(item);
    setEditFormData({ title: item.title || "", description: item.description || "", link: item.link || "", image: null });
  };

  const handleEditChange = (e) => {
    const { name, value, files } = e.target;
    if (files) setEditFormData({ ...editFormData, [name]: files[0] });
    else setEditFormData({ ...editFormData, [name]: value });
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    if (!editingItem) return;
    const data = new FormData();
    // Only append fields that are present
    if (editFormData.title) data.append('title', editFormData.title);
    if (editFormData.description) data.append('description', editFormData.description);
    if (editFormData.link) data.append('link', editFormData.link);
    if (editFormData.image) data.append('image', editFormData.image);

    try {
      await axios.put(`https://your-favorite-influencer.vercel.app/api/addproducts/${editingItem._id}`, data);
      alert('Item updated');
      setEditingItem(null);
      fetchProducts();
    } catch (err) {
      console.error('Update failed', err);
      alert('Failed to update item');
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this item?')) return;
    try {
      await axios.delete(`https://your-favorite-influencer.vercel.app/api/addproducts/${id}`);
      alert('Item deleted');
      fetchProducts();
    } catch (err) {
      console.error('Delete failed', err);
      alert('Failed to delete item');
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
              <div className="flex gap-2 mt-3">
                <button onClick={() => handleEditClick(item)} className="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500">Edit</button>
                <button onClick={() => handleDelete(item._id)} className="bg-red-400 text-white px-3 py-1 rounded hover:bg-red-500">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Edit Modal */}
      {editingItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-md w-full max-w-lg">
            <h2 className="text-xl font-semibold mb-4">Edit Item</h2>
            <form onSubmit={handleUpdateSubmit} className="flex flex-col gap-3">
              <input type="text" name="title" value={editFormData.title} onChange={handleEditChange} className="border p-2 rounded" />
              <textarea name="description" value={editFormData.description} onChange={handleEditChange} className="border p-2 rounded" />
              <input type="text" name="link" value={editFormData.link} onChange={handleEditChange} className="border p-2 rounded" />
              <input type="file" name="image" onChange={handleEditChange} />
              <div className="flex justify-end gap-2 mt-2">
                <button type="button" onClick={() => setEditingItem(null)} className="px-3 py-1 rounded border">Cancel</button>
                <button type="submit" className="px-3 py-1 rounded bg-blue-500 text-white">Save</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default AddProducts;
