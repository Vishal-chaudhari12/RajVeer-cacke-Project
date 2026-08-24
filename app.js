const express = require("express");
const cors = require("cors");

const app = express();

const allowedOrigins = [
    process.env.FRONTEND_URL,
    "https://rajveer-cake-4ti2.onrender.com",
    "https://raj-veer-cake.vercel.app",
    "http://localhost:5173",
    "http://localhost:3000",
    "http://localhost:4200",
    "http://127.0.0.1:5173",
    "http://127.0.0.1:3000"
].filter(Boolean);

app.use(cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));
app.use(express.json());

// Routes
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes")

app.use("/api/products", productRoutes);
app.use("/api/user", userRoutes);

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Backend API is working"
    });
});

module.exports = app;