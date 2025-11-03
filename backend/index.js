import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import AddProductsRoutes from "./routes/AddProductsRoutes.js";

// Load environment variables first
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/addproducts", AddProductsRoutes);

console.log("Loaded MONGO_URI:", process.env.MONGO_URI);


// ✅ Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB connected"))
.catch(err => console.log("❌ MongoDB connection error:", err));

// ✅ Schema & Model
const emailSchema = new mongoose.Schema({ email: { type: String, unique: true } });
const Email = mongoose.model("Email", emailSchema);

// ✅ Route to save email
app.post("/subscribe", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    const newEmail = new Email({ email });
    await newEmail.save();
    res.json({ message: "Subscribed successfully 🎉" });
  } catch (err) {
    if (err.code === 11000) {
      res.status(400).json({ error: "Email already subscribed" });
    } else {
      res.status(500).json({ error: "Something went wrong" });
    }
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
