import { useNavigate } from "react-router-dom";

const Section2 = () => {
    const navigate = useNavigate();
    return (
        <section className="relative w-full py-24">
            <div className="relative z-10 flex justify-center">
                <div className="w-[90%] max-w-7xl rounded-3xl border border-[#1F2940] bg-[#0B1020]/90 p-10 backdrop-blur-md">
                    <h2 className="text-4xl font-bold text-white">
                        Product Analysis
                    </h2>
                    <p className="mt-2 text-gray-400">
                        Fill in the details below to analyze your product.
                    </p>
                    <div className="mt-10 grid grid-cols-3 gap-8">
                        <div>
                            <label className="text-sm text-gray-300">
                                Product Name
                            </label>
                            <input
                                type="text"
                                placeholder="e.g. Wireless Earbuds"
                                className="mt-2 w-full rounded-xl border border-[#28344D] bg-[#111827] px-4 py-3 text-white outline-none transition-all duration-300 focus:border-violet-500"
                            />
                        </div>
                        <div>
                            <label className="text-sm text-gray-300">
                                Category
                            </label>
                            <select className="mt-2 w-full rounded-xl border border-[#28344D] bg-[#111827] px-4 py-3 text-gray-400 outline-none transition-all duration-300 focus:border-violet-500">
                                <option>Select Category</option>
                                <option>Electronics</option>
                                <option>Fashion</option>
                                <option>Healthcare</option>
                                <option>Food</option>
                                <option>Sports</option>
                                <option>Furniture</option>
                            </select>
                        </div>
                        <div>
                            <label className="text-sm text-gray-300">
                                Brand
                            </label>
                            <input
                                type="text"
                                placeholder="e.g. Boat"
                                className="mt-2 w-full rounded-xl border border-[#28344D] bg-[#111827] px-4 py-3 text-white outline-none transition-all duration-300 focus:border-violet-500"
                            />
                        </div>
                        <div>
                            <label className="text-sm text-gray-300">
                                Selling Price (₹)
                            </label>
                            <input
                                type="number"
                                placeholder="e.g. 2999"
                                className="mt-2 w-full rounded-xl border border-[#28344D] bg-[#111827] px-4 py-3 text-white outline-none transition-all duration-300 focus:border-violet-500"
                            />
                        </div>
                        <div>
                            <label className="text-sm text-gray-300">
                                Cost Price (₹)
                            </label>
                            <input
                                type="number"
                                placeholder="e.g. 1800"
                                className="mt-2 w-full rounded-xl border border-[#28344D] bg-[#111827] px-4 py-3 text-white outline-none transition-all duration-300 focus:border-violet-500"
                            />
                        </div>
                        <div>
                            <label className="text-sm text-gray-300">
                                Stock Quantity
                            </label>
                            <input
                                type="number"
                                placeholder="e.g. 500"
                                className="mt-2 w-full rounded-xl border border-[#28344D] bg-[#111827] px-4 py-3 text-white outline-none transition-all duration-300 focus:border-violet-500"
                            />
                        </div>
                        <div>
                            <label className="text-sm text-gray-300">
                                Monthly Sales
                            </label>
                            <input
                                type="number"
                                placeholder="e.g. 1200"
                                className="mt-2 w-full rounded-xl border border-[#28344D] bg-[#111827] px-4 py-3 text-white outline-none transition-all duration-300 focus:border-violet-500"
                            />
                        </div>
                        <div>
                            <label className="text-sm text-gray-300">
                                Target Market
                            </label>
                            <select className="mt-2 w-full rounded-xl border border-[#28344D] bg-[#111827] px-4 py-3 text-gray-400 outline-none transition-all duration-300 focus:border-violet-500">
                                <option>Select Target Market</option>
                                <option>India</option>
                                <option>Global</option>
                                <option>Local</option>
                                <option>Online</option>
                                <option>Retail</option>
                            </select>
                        </div>
                        <div>
                            <label className="text-sm text-gray-300">
                                Launch Date
                            </label>
                            <input
                                type="date"
                                className="mt-2 w-full rounded-xl border border-[#28344D] bg-[#111827] px-4 py-3 text-white outline-none transition-all duration-300 focus:border-violet-500"
                            />
                        </div>
                    </div>
                    <div className="mt-8">
                        <label className="text-sm text-gray-300">
                            Product Description
                        </label>
                        <textarea
                            rows="5"
                            placeholder="Enter product description, key features, materials etc."
                            className="mt-2 w-full resize-none rounded-xl border border-[#28344D] bg-[#111827] px-4 py-3 text-white outline-none transition-all duration-300 focus:border-violet-500"
                        />
                    </div>
                    <div className="mt-10 flex justify-end">
                        <button
                            onClick={() => navigate("/dashboard")}
                            className="rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-10 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-violet-600/30"
                        >
                            Analyze Product
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section2;