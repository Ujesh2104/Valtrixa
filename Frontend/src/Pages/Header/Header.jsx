import { ArrowLeft, CalendarDays, Package, Tag } from "lucide-react";
const Header = () => {
    return (
        <div className="mb-10 flex items-center justify-between rounded-2xl border border-[#1F2940] bg-[#0B1020] p-8">
            <div>
                <div className="flex items-center gap-3">
                    <button className="rounded-lg border border-[#28344D] p-2 transition-all duration-300 hover:border-violet-500 hover:bg-violet-500/10">
                        <ArrowLeft size={20} className="text-white" />
                    </button>
                    <h1 className="bg-gradient-to-r from-violet-400 to-fuchsia-500 bg-clip-text text-4xl font-bold text-transparent">
                        Product Analysis Dashboard
                    </h1>
                </div>
                <p className="mt-3 text-gray-400">
                    AI-powered business intelligence and product insights
                </p>
            </div>
            <div className="grid grid-cols-2 gap-5">
                <div className="flex items-center gap-3 rounded-xl border border-[#1F2940] bg-[#111827] px-5 py-4">
                    <Package className="text-violet-400" size={22} />
                    <div>
                        <p className="text-sm text-gray-400">
                            Product
                        </p>
                        <h3 className="font-semibold text-white">
                            Wireless Earbuds
                        </h3>
                    </div>
                </div>
                <div className="flex items-center gap-3 rounded-xl border border-[#1F2940] bg-[#111827] px-5 py-4">
                    <Tag className="text-violet-400" size={22} />
                    <div>
                        <p className="text-sm text-gray-400">
                            Category
                        </p>
                        <h3 className="font-semibold text-white">
                            Electronics
                        </h3>
                    </div>
                </div>
                <div className="flex items-center gap-3 rounded-xl border border-[#1F2940] bg-[#111827] px-5 py-4">
                    <Package className="text-violet-400" size={22} />
                    <div>
                        <p className="text-sm text-gray-400">
                            Brand
                        </p>
                        <h3 className="font-semibold text-white">
                            Boat
                        </h3>
                    </div>
                </div>
                <div className="flex items-center gap-3 rounded-xl border border-[#1F2940] bg-[#111827] px-5 py-4">
                    <CalendarDays className="text-violet-400" size={22} />
                    <div>
                        <p className="text-sm text-gray-400">
                            Analysis Date
                        </p>
                        <h3 className="font-semibold text-white">
                            05 July 2026
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;