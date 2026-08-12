import { useState } from "react";
import {
    ArrowLeft,
    ArrowRight,
    Package,
    Tag,
    IndianRupee,
    LoaderCircle,
    BarChart3,
    Boxes,
    TrendingUp,
    Users,
    CalendarDays,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import { analyzeProduct } from "../../api/productApi";

const ProductAnalysis = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        productName: "",
        category: "",
        brand: "",
        sellingPrice: "",
        costPrice: "",
        stockQuantity: "",
        monthlySales: "",
        targetMarket: "",
        launchDate: "",
        productDescription: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((previous) => ({
            ...previous,
            [name]: value,
        }));
    };

    const handleAnalysis = async (e) => {
        e.preventDefault();

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
        } = formData;

        if (
            !productName.trim() ||
            !category.trim() ||
            !brand.trim() ||
            !sellingPrice ||
            !costPrice ||
            !stockQuantity ||
            !monthlySales ||
            !targetMarket.trim() ||
            !launchDate ||
            !productDescription.trim()
        ) {
            alert("Please fill all the fields.");
            return;
        }

        try {
            setLoading(true);

            const response = await analyzeProduct({
                productName: productName.trim(),
                category: category.trim(),
                brand: brand.trim(),
                sellingPrice: Number(sellingPrice),
                costPrice: Number(costPrice),
                stockQuantity: Number(stockQuantity),
                monthlySales: Number(monthlySales),
                targetMarket: targetMarket.trim(),
                launchDate,
                productDescription: productDescription.trim(),
            });

            localStorage.setItem(
                "latestAnalysis",
                JSON.stringify(response.data)
            );

            navigate("/dashboard");
        } catch (error) {
            console.error("Product Analysis Error:", error);

            alert(
                error.response?.data?.message ||
                "Product analysis failed. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="min-h-screen bg-[#050816] px-4 py-8 sm:px-6 lg:px-10">

            <div className="mx-auto max-w-6xl">

                <button
                    type="button"
                    onClick={() => navigate("/home")}
                    className="mb-8 flex items-center gap-2 text-gray-400 transition-colors hover:text-white"
                >
                    <ArrowLeft size={18} />
                    Back to Home
                </button>

                <div className="rounded-3xl border border-[#1F2940] bg-[#0B1020] p-6 shadow-2xl sm:p-8 lg:p-10">

                    <div className="mb-10">

                        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-600">
                            <BarChart3
                                size={28}
                                className="text-white"
                            />
                        </div>

                        <h1 className="text-3xl font-bold text-white sm:text-4xl">
                            Product Analysis
                        </h1>

                        <p className="mt-3 max-w-3xl text-gray-400">
                            Enter your product information to generate
                            AI-powered business insights and predictions.
                        </p>

                    </div>

                    <form onSubmit={handleAnalysis}>

                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

                            <div>
                                <label className="text-sm font-medium text-gray-300">
                                    Product Name
                                </label>

                                <div className="mt-2 flex items-center rounded-xl border border-[#28344D] bg-[#111827] px-4 focus-within:border-violet-500">

                                    <Package
                                        size={19}
                                        className="shrink-0 text-gray-500"
                                    />

                                    <input
                                        name="productName"
                                        value={formData.productName}
                                        onChange={handleChange}
                                        placeholder="Wireless Earbuds"
                                        className="w-full bg-transparent px-3 py-3 text-white outline-none placeholder:text-gray-600"
                                    />

                                </div>
                            </div>

                            <div>
                                <label className="text-sm font-medium text-gray-300">
                                    Brand
                                </label>

                                <div className="mt-2 flex items-center rounded-xl border border-[#28344D] bg-[#111827] px-4 focus-within:border-violet-500">

                                    <Tag
                                        size={19}
                                        className="shrink-0 text-gray-500"
                                    />

                                    <input
                                        name="brand"
                                        value={formData.brand}
                                        onChange={handleChange}
                                        placeholder="Boat"
                                        className="w-full bg-transparent px-3 py-3 text-white outline-none placeholder:text-gray-600"
                                    />

                                </div>
                            </div>

                            <div>
                                <label className="text-sm font-medium text-gray-300">
                                    Category
                                </label>

                                <input
                                    name="category"
                                    value={formData.category}
                                    onChange={handleChange}
                                    placeholder="Electronics"
                                    className="mt-2 w-full rounded-xl border border-[#28344D] bg-[#111827] px-4 py-3 text-white outline-none placeholder:text-gray-600 focus:border-violet-500"
                                />
                            </div>

                            <div>
                                <label className="text-sm font-medium text-gray-300">
                                    Selling Price
                                </label>

                                <div className="mt-2 flex items-center rounded-xl border border-[#28344D] bg-[#111827] px-4 focus-within:border-violet-500">

                                    <IndianRupee
                                        size={19}
                                        className="shrink-0 text-gray-500"
                                    />

                                    <input
                                        name="sellingPrice"
                                        type="number"
                                        min="0"
                                        value={formData.sellingPrice}
                                        onChange={handleChange}
                                        placeholder="2999"
                                        className="w-full bg-transparent px-3 py-3 text-white outline-none placeholder:text-gray-600"
                                    />

                                </div>
                            </div>

                            <div>
                                <label className="text-sm font-medium text-gray-300">
                                    Cost Price
                                </label>

                                <div className="mt-2 flex items-center rounded-xl border border-[#28344D] bg-[#111827] px-4 focus-within:border-violet-500">

                                    <IndianRupee
                                        size={19}
                                        className="shrink-0 text-gray-500"
                                    />

                                    <input
                                        name="costPrice"
                                        type="number"
                                        min="0"
                                        value={formData.costPrice}
                                        onChange={handleChange}
                                        placeholder="1800"
                                        className="w-full bg-transparent px-3 py-3 text-white outline-none placeholder:text-gray-600"
                                    />

                                </div>
                            </div>

                            <div>
                                <label className="text-sm font-medium text-gray-300">
                                    Stock Quantity
                                </label>

                                <div className="mt-2 flex items-center rounded-xl border border-[#28344D] bg-[#111827] px-4 focus-within:border-violet-500">

                                    <Boxes
                                        size={19}
                                        className="shrink-0 text-gray-500"
                                    />

                                    <input
                                        name="stockQuantity"
                                        type="number"
                                        min="0"
                                        value={formData.stockQuantity}
                                        onChange={handleChange}
                                        placeholder="500"
                                        className="w-full bg-transparent px-3 py-3 text-white outline-none placeholder:text-gray-600"
                                    />

                                </div>
                            </div>

                            <div>
                                <label className="text-sm font-medium text-gray-300">
                                    Monthly Sales
                                </label>

                                <div className="mt-2 flex items-center rounded-xl border border-[#28344D] bg-[#111827] px-4 focus-within:border-violet-500">

                                    <TrendingUp
                                        size={19}
                                        className="shrink-0 text-gray-500"
                                    />

                                    <input
                                        name="monthlySales"
                                        type="number"
                                        min="0"
                                        value={formData.monthlySales}
                                        onChange={handleChange}
                                        placeholder="250"
                                        className="w-full bg-transparent px-3 py-3 text-white outline-none placeholder:text-gray-600"
                                    />

                                </div>
                            </div>

                            <div>
                                <label className="text-sm font-medium text-gray-300">
                                    Target Market
                                </label>

                                <div className="mt-2 flex items-center rounded-xl border border-[#28344D] bg-[#111827] px-4 focus-within:border-violet-500">

                                    <Users
                                        size={19}
                                        className="shrink-0 text-gray-500"
                                    />

                                    <input
                                        name="targetMarket"
                                        value={formData.targetMarket}
                                        onChange={handleChange}
                                        placeholder="College Students"
                                        className="w-full bg-transparent px-3 py-3 text-white outline-none placeholder:text-gray-600"
                                    />

                                </div>
                            </div>

                            <div>
                                <label className="text-sm font-medium text-gray-300">
                                    Launch Date
                                </label>

                                <div className="mt-2 flex items-center rounded-xl border border-[#28344D] bg-[#111827] px-4 focus-within:border-violet-500">

                                    <CalendarDays
                                        size={19}
                                        className="shrink-0 text-gray-500"
                                    />

                                    <input
                                        name="launchDate"
                                        type="date"
                                        value={formData.launchDate}
                                        onChange={handleChange}
                                        className="w-full bg-transparent px-3 py-3 text-white outline-none"
                                    />

                                </div>
                            </div>

                        </div>

                        <div className="mt-6">

                            <label className="text-sm font-medium text-gray-300">
                                Product Description
                            </label>

                            <textarea
                                name="productDescription"
                                value={formData.productDescription}
                                onChange={handleChange}
                                rows={6}
                                placeholder="Describe the product, features, target customers, competitive advantages and other relevant information..."
                                className="mt-2 w-full resize-none rounded-xl border border-[#28344D] bg-[#111827] px-4 py-3 text-white outline-none placeholder:text-gray-600 focus:border-violet-500"
                            />

                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="mt-8 flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 py-4 font-semibold text-white transition-all duration-300 hover:scale-[1.01] hover:shadow-lg hover:shadow-violet-500/20 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
                        >

                            {loading ? (
                                <>
                                    <LoaderCircle
                                        size={21}
                                        className="animate-spin"
                                    />
                                    Analyzing Product...
                                </>
                            ) : (
                                <>
                                    Start Product Analysis
                                    <ArrowRight size={21} />
                                </>
                            )}

                        </button>

                    </form>

                </div>

            </div>

        </main>
    );
};

export default ProductAnalysis;