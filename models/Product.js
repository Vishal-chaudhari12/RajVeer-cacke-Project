const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        cakeName: {
            type: String,
            required: true,
            trim: true
        },

        price: {
            type: Number,
            required: true
        },

        image: {
            type: String,
            required: true
        },

        description: {
            type: String,
            required: true
        },

        weight: {
            type: String,
            required: true
        },

        flavour: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;