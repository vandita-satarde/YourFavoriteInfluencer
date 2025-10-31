import ShopItem from "../models/AddProductsModel.js";

// Add new item (Admin)
export const addProduct = async (req, res) => {
  try {
    const { title, description, link } = req.body;
    const image = req.file?.path; // if using Multer + Cloudinary

    const newItem = await ShopItem.create({ title, description, link, image });
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ message: "Error adding item", error });
  }
};

// Get all items (Frontend)
export const getProducts = async (req, res) => {
  try {
    const items = await ShopItem.find().sort({ createdAt: -1 });
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: "Error fetching items", error });
  }
};
