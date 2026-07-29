import { Eye, Search } from "lucide-react";

const products = [
    {
        product: "Wireless Earbuds",
        brand: "Boat",
        category: "Electronics",
        score: "94%",
        date: "5 July 2026",
        status: "Completed",
    },
    {
        product: "Gaming Mouse",
        brand: "Logitech",
        category: "Accessories",
        score: "91%",
        date: "3 July 2026",
        status: "Completed",
    },
    {
        product: "Smart Watch",
        brand: "Noise",
        category: "Wearables",
        score: "89%",
        date: "29 Jun 2026",
        status: "Completed",
    },
    {
        product: "Laptop",
        brand: "Asus",
        category: "Electronics",
        score: "97%",
        date: "2 July 2026",
        status: "Completed",
    },
];

const RecentAnalysis = () => {
    return (
        <section className="min-h-screen w-full bg-[#050816] px-10 py-10">
            <div className="mx-auto max-w-7xl">
                <div className="mb-10 flex items-center justify-between">
                    <h1 className="text-5xl font-bold text-white">
                        RECENT PRODUCT ANALYSIS
                    </h1>
                    <div className="relative">
                        <Search
                            size={20}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                        />
                        <input
                            type="text"
                            placeholder="Search Product"
                            className="w-96 rounded-xl border border-[#28344D] bg-[#0B1020] py-3 pl-12 pr-4 text-white outline-none focus:border-violet-500"
                        />
                    </div>
                </div>
                <div className="overflow-hidden rounded-2xl border border-[#1A2236] bg-[#0B1020]">
                    <table className="w-full">
                        <thead className="border-b border-[#1A2236]">
                            <tr className="text-left text-gray-400">
                                <th className="px-8 py-6">Product</th>
                                <th>Brand</th>
                                <th>Category</th>
                                <th>Score</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((item, index) => (
                                <tr
                                    key={index}
                                    className="border-b border-[#1A2236] transition-all duration-300 hover:bg-[#111827]"
                                >
                                    <td className="px-8 py-6 text-white">
                                        {item.product}
                                    </td>
                                    <td className="text-white">
                                        {item.brand}
                                    </td>
                                    <td className="text-white">
                                        {item.category}
                                    </td>
                                    <td className="font-semibold text-violet-400">
                                        {item.score}
                                    </td>
                                    <td className="text-white">
                                        {item.date}
                                    </td>
                                    <td>
                                        <span className="rounded-full bg-green-900 px-5 py-2 text-green-400">
                                            {item.status}
                                        </span>
                                    </td>
                                    <td className="pr-8">
                                        <button className="rounded-lg bg-violet-600 p-3 transition-all duration-300 hover:bg-violet-500">
                                            <Eye
                                                size={18}
                                                className="text-white"
                                            />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default RecentAnalysis;