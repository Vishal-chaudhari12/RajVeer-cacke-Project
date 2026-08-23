const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");

const envPath = path.resolve(__dirname, "../.env");
if (!process.env.MONGODB_URI && fs.existsSync(envPath)) {
    process.loadEnvFile(envPath);
}

const connectDB = async () => {
    try {
        if (!process.env.MONGODB_URI) {
            throw new Error("MONGODB_URI is not configured");
        }

        await mongoose.connect(process.env.MONGODB_URI);

        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection failed:", error.message);
        process.exit(1);
    }
};

module.exports = connectDB;