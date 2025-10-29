import express from "express";
import multer from "multer";
import { addProduct, getProducts } from "../controllers/AddProductsController.js";

const router = express.Router();

// Multer setup (you can also use Cloudinary upload middleware)
const upload = multer({ dest: "uploads/" });

router.post("/add", addProduct);
router.get("/", getProducts);

export default router;
