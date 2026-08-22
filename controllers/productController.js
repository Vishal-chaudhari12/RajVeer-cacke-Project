const Product = require("../models/Product");

const addProduct = async (req, res) => {
    try {
        const {
            cakeName,
            price,
            image,
            description,
            weight,
            flavour
        } = req.body;

        // Validation
        if (
            !cakeName ||
            !price ||
            !image ||
            !description ||
            !weight ||
            !flavour
        ) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        // Create product
        const product = await Product.create({
            cakeName,
            price,
            image,
            description,
            weight,
            flavour
        });

        return res.status(201).json({
            success: true,
            message: "Product added successfully",
            data: product
        });

    } catch (error) {
        console.error("Add product error:", error);

        return res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
        });
    }
};

// Get All Products
const getProducts = async (req, res) => {
    try {
        const products = await Product.find().sort({ createdAt: -1 });

        return res.status(200).json({
            success: true,
            message: "Products fetched successfully",
            count: products.length,
            data: products
        });

    } catch (error) {
        console.error("Get products error:", error);

        return res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
        });
    }
};

module.exports = {
    addProduct,
    getProducts
};