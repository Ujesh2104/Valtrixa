import { useState } from "react";
import {
    Eye,
    Search,
    CalendarDays,
    BadgeCheck,
} from "lucide-react";

const products = [
    {
        product: "Wireless Earbuds",
        brand: "Boat",
        category: "Electronics",
        score: 94,
        date: "05 Jul 2026",
        status: "Completed",
    },
    {
        product: "Gaming Mouse",
        brand: "Logitech",
        category: "Accessories",
        score: 91,
        date: "03 Jul 2026",
        status: "Completed",
    },
    {
        product: "Smart Watch",
        brand: "Noise",
        category: "Wearables",
        score: 89,
        date: "29 Jun 2026",
        status: "Completed",
    },
    {
        product: "Laptop",
        brand: "Asus",
        category: "Electronics",
        score: 97,
        date: "02 Jul 2026",
        status: "Completed",
    },
];

const RecentAnalysis = () => {
    const [search, setSearch] = useState("");

    const filteredProducts = products.filter((item) =>
        item.product.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <section
            className="
                h-full
                rounded-3xl
                border
                bg-gradient-to-br
                from-[#050816]
                via-[#0B1220]
                to-[#101827]
                p-8
                shadow-[0_25px_60px_rgba(0,0,0,0.45)]
            "
        >
            {/* Header */}

            <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div>
                    <h2 className="text-4xl font-bold text-white">
                        Recent Product{" "}
                        <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
                            Analysis
                        </span>
                    </h2>

                    <p className="mt-3 text-gray-400">
                        View all recently analyzed products with AI insights.
                    </p>
                </div>

                {/* Search */}

                <div className="relative w-full max-w-md">
                    <Search
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                    />

                    <input
                        type="text"
                        placeholder="Search Product..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="
                            w-full
                            rounded-xl
                            border
                            border-white/10
                            bg-white/5
                            py-3.5
                            pl-11
                            pr-4
                            text-white
                            placeholder:text-gray-500
                            backdrop-blur-xl
                            outline-none
                            transition-all
                            duration-300
                            focus:border-violet-500
                            focus:ring-2
                            focus:ring-violet-500/30
                        "
                    />
                </div>
            </div>

            {/* Table */}

            <div
                className="
                    overflow-hidden
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/5
                    backdrop-blur-xl
                    shadow-[0_15px_40px_rgba(0,0,0,0.45)]
                "
            >
                <div className="overflow-x-auto">
                    <table className="min-w-full">
                        {/* Table Head */}

                        <thead className="sticky top-0 bg-[#0B1220]/95 backdrop-blur-xl">
                            <tr className="border-b border-white/10">
                                <th className="px-7 py-5 text-left text-sm font-semibold uppercase tracking-wider text-gray-400">
                                    Product
                                </th>

                                <th className="px-7 py-5 text-left text-sm font-semibold uppercase tracking-wider text-gray-400">
                                    Brand
                                </th>

                                <th className="px-7 py-5 text-left text-sm font-semibold uppercase tracking-wider text-gray-400">
                                    Category
                                </th>

                                <th className="px-7 py-5 text-left text-sm font-semibold uppercase tracking-wider text-gray-400">
                                    AI Score
                                </th>

                                <th className="px-7 py-5 text-left text-sm font-semibold uppercase tracking-wider text-gray-400">
                                    Date
                                </th>

                                <th className="px-7 py-5 text-left text-sm font-semibold uppercase tracking-wider text-gray-400">
                                    Status
                                </th>

                                <th className="px-7 py-5 text-right text-sm font-semibold uppercase tracking-wider text-gray-400">
                                    Action
                                </th>
                            </tr>
                        </thead>

                        {/* Table Body */}

                        <tbody>
                            {filteredProducts.map((item, index) => (
                                <tr
                                    key={index}
                                    className={`
                                        border-b
                                        border-white/5
                                        transition-all
                                        duration-300
                                        hover:bg-violet-500/10
                                        hover:shadow-lg
                                        ${
                                            index % 2 === 0
                                                ? "bg-white/[0.02]"
                                                : "bg-white/[0.05]"
                                        }
                                    `}
                                >
                                    {/* Product */}

                                    <td className="px-7 py-6">
                                        <div>
                                            <h3 className="text-lg font-semibold text-white">
                                                {item.product}
                                            </h3>

                                            <p className="mt-1 text-sm text-gray-500">
                                                AI Product Analysis
                                            </p>
                                        </div>
                                    </td>

                                    {/* Brand */}

                                    <td className="px-7 font-medium text-white">
                                        {item.brand}
                                    </td>

                                    {/* Category */}

                                    <td className="px-7 text-gray-300">
                                        {item.category}
                                    </td>

                                    {/* Score */}

                                    <td className="px-7">
                                        <div className="flex items-center gap-3">
                                            <div className="h-2 w-24 rounded-full bg-gray-700">
                                                <div
                                                    className="h-full rounded-full bg-gradient-to-r from-violet-500 to-pink-500"
                                                    style={{
                                                        width: `${item.score}%`,
                                                    }}
                                                />
                                            </div>

                                            <span className="font-semibold text-violet-400">
                                                {item.score}%
                                            </span>
                                        </div>
                                    </td>

                                    {/* Date */}

                                    <td className="px-7">
                                        <div className="flex items-center gap-2 text-gray-300">
                                            <CalendarDays size={16} />
                                            {item.date}
                                        </div>
                                    </td>

                                    {/* Status */}

                                    <td className="px-7">
                                        <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/15 px-4 py-2 text-sm font-semibold text-emerald-400">
                                            <BadgeCheck size={15} />
                                            {item.status}
                                        </span>
                                    </td>

                                    {/* Action */}

                                    <td className="px-7 text-right">
                                        <button
                                            className="
                                                rounded-xl
                                                bg-gradient-to-r
                                                from-violet-600
                                                to-fuchsia-600
                                                p-3
                                                text-white
                                                transition-all
                                                duration-300
                                                hover:scale-110
                                                hover:shadow-xl
                                                hover:shadow-violet-500/30
                                            "
                                        >
                                            <Eye size={18} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {filteredProducts.length === 0 && (
                        <div className="py-16 text-center text-gray-400">
                            No product found.
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default RecentAnalysis;