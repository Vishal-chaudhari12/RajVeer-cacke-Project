const User = require("../models/user");

const addUser = async (req, res) => {
    try {
        const {
            name,
            mobNo,
            email,
            isAdmin,
        } = req.body;

        // Validation
        if (
            !name ||
            !mobNo ||
            !email ||
            !isAdmin
        ) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        // Create User
        const user = await User.create({
            name,
            mobNo,
            email,
            isAdmin
        });

        return res.status(201).json({
            success: true,
            message: "User added successfully",
            data: user
        });

    } catch (error) {
        console.error("Add User error:", error);

        return res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
        });
    }
};

// Get All Products
const getUsers = async (req, res) => {
    try {
        const users = await user.find().sort({ createdAt: -1 });

        return res.status(200).json({
            success: true,
            message: "User fetched successfully",
            count: users.length,
            data: users
        });

    } catch (error) {
        console.error("Get user error:", error);

        return res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
        });
    }
};

module.exports = {
    addUser,
    getUsers
};