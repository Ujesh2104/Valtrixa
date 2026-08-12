import { ArrowLeft, CalendarDays, Package, Tag } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    return (
        <section className="mb-10 rounded-3xl border border-[#1F2940] bg-[#0B1020] p-5 md:p-8">

            <div className="flex flex-col gap-8 xl:flex-row xl:items-center xl:justify-between">

                {/* Left Section */}
                <div className="flex-1">

                    <div className="flex items-start gap-4">

                        <button
                            onClick={() => navigate("/")}
                            className="mt-1 rounded-xl border border-[#28344D] bg-[#111827] p-3 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500 hover:bg-violet-500/10"
                        >
                            <ArrowLeft
                                size={22}
                                className="text-white"
                            />
                        </button>

                        <div>

                            <h1
                                className="
                                bg-gradient-to-r
                                from-violet-400
                                to-fuchsia-500
                                bg-clip-text
                                text-transparent
                                font-bold
                                text-3xl
                                sm:text-4xl
                                lg:text-5xl
                                leading-tight
                            "
                            >
                                Product Analysis
                                <br />
                                Dashboard
                            </h1>

                            <p
                                className="
                                mt-4
                                max-w-xl
                                text-sm
                                sm:text-base
                                text-gray-400
                                leading-7
                            "
                            >
                                AI-powered business intelligence and product
                                insights for smarter product decisions.
                            </p>

                        </div>

                    </div>

                </div>

                {/* Right Section */}

                <div
                    className="
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    gap-4
                    w-full
                    xl:w-[420px]
                "
                >

                    {/* Product */}

                    <div className="rounded-2xl border border-[#1F2940] bg-[#111827] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500">

                        <Package
                            className="mb-3 text-violet-400"
                            size={24}
                        />

                        <p className="text-sm text-gray-400">
                            Product
                        </p>

                        <h3 className="mt-1 text-lg font-semibold text-white">
                            Wireless Earbuds
                        </h3>

                    </div>

                    {/* Category */}

                    <div className="rounded-2xl border border-[#1F2940] bg-[#111827] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500">

                        <Tag
                            className="mb-3 text-violet-400"
                            size={24}
                        />

                        <p className="text-sm text-gray-400">
                            Category
                        </p>

                        <h3 className="mt-1 text-lg font-semibold text-white">
                            Electronics
                        </h3>

                    </div>

                    {/* Brand */}

                    <div className="rounded-2xl border border-[#1F2940] bg-[#111827] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500">

                        <Package
                            className="mb-3 text-violet-400"
                            size={24}
                        />

                        <p className="text-sm text-gray-400">
                            Brand
                        </p>

                        <h3 className="mt-1 text-lg font-semibold text-white">
                            Boat
                        </h3>

                    </div>

                    {/* Date */}

                    <div className="rounded-2xl border border-[#1F2940] bg-[#111827] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500">

                        <CalendarDays
                            className="mb-3 text-violet-400"
                            size={24}
                        />

                        <p className="text-sm text-gray-400">
                            Analysis Date
                        </p>

                        <h3 className="mt-1 text-lg font-semibold text-white">
                            05 July 2026
                        </h3>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default Header;