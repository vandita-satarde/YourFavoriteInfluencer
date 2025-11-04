import ShopItem from "../models/AddProductsModel.js";
import cloudinary from "../config/cloudinary.js";

// Add new item (Admin)
export const addProduct = async (req, res) => {
  try {
    const { title, description, link } = req.body;

    // Validate required fields
    if (!title || !description || !link) {
      return res.status(400).json({ 
        message: "Missing required fields", 
        required: ["title", "description", "link"],
        received: { title: !!title, description: !!description, link: !!link }
      });
    }

    // If a file was uploaded (via multer memoryStorage), upload it to Cloudinary
    let imageUrl = req.body.image || null;
    
    console.log("Request file:", req.file ? {
      mimetype: req.file.mimetype,
      size: req.file.size,
      originalname: req.file.originalname
    } : "No file uploaded");

  let imagePublicId = null;
  if (req.file && req.file.buffer) {
      // Validate file type
      const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
      if (!allowedTypes.includes(req.file.mimetype)) {
        return res.status(400).json({
          message: "Invalid file type",
          allowed: allowedTypes,
          received: req.file.mimetype
        });
      }

      // Convert buffer to base64 data uri
      const base64 = req.file.buffer.toString("base64");
      const dataUri = `data:${req.file.mimetype};base64,${base64}`;

      const uploadResult = await cloudinary.uploader.upload(dataUri, {
        folder: "your-fav-influencer/products",
        use_filename: true,
        unique_filename: true,
        overwrite: false,
        resource_type: "auto"
      });
      imageUrl = uploadResult.secure_url;
      imagePublicId = uploadResult.public_id;
    }

    const newItem = await ShopItem.create({ title, description, link, image: imageUrl, imagePublicId });
    res.status(201).json(newItem);
  } catch (error) {
    console.error("Error in addProduct:", error);
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

// Update product (Admin)
export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, link } = req.body;

    console.log(`PUT /api/addproducts/${id} called`);

    const item = await ShopItem.findById(id);
    if (!item) return res.status(404).json({ message: "Item not found" });

    // If a new file uploaded, upload to Cloudinary and delete old one
    if (req.file && req.file.buffer) {
      const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
      if (!allowedTypes.includes(req.file.mimetype)) {
        return res.status(400).json({ message: 'Invalid file type' });
      }

      const base64 = req.file.buffer.toString('base64');
      const dataUri = `data:${req.file.mimetype};base64,${base64}`;
      const uploadResult = await cloudinary.uploader.upload(dataUri, {
        folder: 'your-fav-influencer/products',
        use_filename: true,
        unique_filename: true,
        overwrite: false,
        resource_type: 'auto'
      });

      // delete previous image from Cloudinary if exists
      if (item.imagePublicId) {
        try {
          await cloudinary.uploader.destroy(item.imagePublicId, { resource_type: 'image' });
        } catch (err) {
          console.warn('Failed to delete previous image from Cloudinary:', err.message || err);
        }
      }

      item.image = uploadResult.secure_url;
      item.imagePublicId = uploadResult.public_id;
    }

    // Update fields
    if (title) item.title = title;
    if (description) item.description = description;
    if (link) item.link = link;

    await item.save();
    res.json(item);
  } catch (error) {
    console.error('Error in updateProduct:', error);
    res.status(500).json({ message: 'Error updating item', error });
  }
};

// Delete product (Admin)
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(`DELETE /api/addproducts/${id} called`);
    const item = await ShopItem.findById(id);
    if (!item) return res.status(404).json({ message: 'Item not found' });

    // Remove image from Cloudinary if present
    if (item.imagePublicId) {
      try {
        await cloudinary.uploader.destroy(item.imagePublicId, { resource_type: 'image' });
      } catch (err) {
        console.warn('Failed to delete image from Cloudinary:', err.message || err);
      }
    }

    await ShopItem.findByIdAndDelete(id);
    res.json({ message: 'Item deleted' });
  } catch (error) {
    console.error('Error in deleteProduct:', error);
    res.status(500).json({ message: 'Error deleting item', error });
  }
};
