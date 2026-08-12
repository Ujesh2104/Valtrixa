const express = require("express");
const cors = require("cors");

const auth = require("./middlewares/authMiddleware");

const authRoutes = require("./routes/authRoutes");

const userRoutes = require("./routes/userRoutes")

const productRoutes = require("./routes/productRoutes");
const app = express();

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRoutes);
app.use("/api/user" , userRoutes)
app.use("/api/product", productRoutes);

module.exports = app;