const express = require("express");

const router = express.Router();

const {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct,
} = require("../controllers/productController");

const auth = require("../middlewares/authMiddleware");

router.post("/analyze", auth, createProduct);

router.get("/all", auth, getAllProducts);

router.get("/:id", auth, getProductById);

router.put("/:id", auth, updateProduct);

router.delete("/:id", auth, deleteProduct);

module.exports = router;
