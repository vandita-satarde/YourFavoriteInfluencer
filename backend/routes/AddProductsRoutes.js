import express from "express";
import multer from "multer";
import { addProduct, getProducts } from "../controllers/AddProductsController.js";

const router = express.Router();

// Use memory storage so we can upload file buffer directly to Cloudinary
const storage = multer.memoryStorage();
const upload = multer({ storage });

// POST /api/addproducts/add expects multipart/form-data with field `image`
router.post("/add", upload.single("image"), addProduct);
router.get("/", getProducts);

export default router;
