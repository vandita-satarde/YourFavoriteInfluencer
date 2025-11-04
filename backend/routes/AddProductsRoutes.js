import express from "express";
import multer from "multer";
import { addProduct, getProducts, updateProduct, deleteProduct } from "../controllers/AddProductsController.js";

const router = express.Router();

// Use memory storage so we can upload file buffer directly to Cloudinary
const storage = multer.memoryStorage();
const upload = multer({ storage });

// POST /api/addproducts/add expects multipart/form-data with field `image`
router.post("/add", upload.single("image"), addProduct);
router.get("/", getProducts);

// Update (PUT) product by id. Accepts optional `image` file to replace existing image.
router.put("/:id", upload.single("image"), updateProduct);

// Delete product by id
router.delete("/:id", deleteProduct);

export default router;
