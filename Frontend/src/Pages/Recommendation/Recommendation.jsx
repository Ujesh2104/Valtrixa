import {
    CheckCircle2,
    TrendingUp,
    Package,
    Megaphone
} from "lucide-react";

const Recommendation = () => {
    return (
        <section className="mt-8 rounded-2xl border border-[#1F2940] bg-[#0B1020] p-8">
            <h2 className="text-2xl font-bold text-white">
                AI Recommendations
            </h2>
            <p className="mt-2 text-gray-400">
                Based on product analysis and market trends.
            </p>
            <div className="mt-8 space-y-5">
                <div className="flex items-center gap-4">
                    <TrendingUp className="text-green-400" />
                    <p className="text-gray-300">
                        Increase inventory by 20% to meet upcoming demand.
                    </p>
                </div>
                <div className="flex items-center gap-4">
                    <Package className="text-violet-400" />
                    <p className="text-gray-300">
                        Reduce manufacturing cost by 5% to improve profit margin.
                    </p>
                </div>
                <div className="flex items-center gap-4">
                    <Megaphone className="text-yellow-400" />
                    <p className="text-gray-300">
                        Invest more in digital marketing during festive season.
                    </p>
                </div>
                <div className="flex items-center gap-4">
                    <CheckCircle2 className="text-cyan-400" />
                    <p className="text-gray-300">
                        Product has a strong probability of market success.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Recommendation;