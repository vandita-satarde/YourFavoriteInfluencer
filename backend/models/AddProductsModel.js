import mongoose from "mongoose";

const shopItemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true }, // Cloudinary URL or image path
  description: { type: String, required: true },
  link: { type: String, required: true },
}, { timestamps: true });

const ShopItem = mongoose.model("ShopItem", shopItemSchema);
export default ShopItem;
