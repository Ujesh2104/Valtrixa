const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: String,
      required: true,
    },

    brand: {
      type: String,
      required: true,
    },

    sellingPrice: {
      type: Number,
      required: true,
    },

    costPrice: {
      type: Number,
      required: true,
    },

    stockQuantity: {
      type: Number,
      required: true,
    },

    monthlySales: {
      type: Number,
      required: true,
    },

    targetMarket: {
      type: String,
      required: true,
    },

    launchDate: {
      type: Date,
      required: true,
    },

    productDescription: {
      type: String,
      required: true,
    },

    aiScore: {
      type: Number,
      default: 0,
    },

    recommendation: {
      type: String,
      default: "",
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);