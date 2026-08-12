const Product = require("../models/Product");

const createProduct = async (req, res) => {
    try {
        const {
            productName,
            category,
            brand,
            sellingPrice,
            costPrice,
            stockQuantity,
            monthlySales,
            targetMarket,
            launchDate,
            productDescription,
        } = req.body;

        if (
            !productName ||
            !category ||
            !brand ||
            sellingPrice === undefined ||
            costPrice === undefined ||
            stockQuantity === undefined ||
            monthlySales === undefined ||
            !targetMarket ||
            !launchDate ||
            !productDescription
        ) {
            return res.status(400).json({
                success: false,
                message: "All product fields are required",
            });
        }

        const product = await Product.create({
            productName,
            category,
            brand,
            sellingPrice,
            costPrice,
            stockQuantity,
            monthlySales,
            targetMarket,
            launchDate,
            productDescription,
            createdBy: req.user.id,
        });

        return res.status(201).json({
            success: true,
            message: "Product created successfully",
            product,
        });
    } catch (error) {
        console.error("Create Product Error:", error);

        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({
            createdBy: req.user.id,
        }).sort({ createdAt: -1 });

        return res.status(200).json({
            success: true,
            count: products.length,
            products,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

const getProductById = async (req, res) => {
    try {
        const product = await Product.findOne({
            _id: req.params.id,
            createdBy: req.user.id,
        });

        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found",
            });
        }

        return res.status(200).json({
            success: true,
            product,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

const updateProduct = async (req, res) => {
    try {
        const product = await Product.findOneAndUpdate(
            {
                _id: req.params.id,
                createdBy: req.user.id,
            },
            req.body,
            {
                new: true,
                runValidators: true,
            }
        );

        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Product updated successfully",
            product,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findOneAndDelete({
            _id: req.params.id,
            createdBy: req.user.id,
        });

        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Product deleted successfully",
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct,
};