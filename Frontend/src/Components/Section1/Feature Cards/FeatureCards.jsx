import { BarChart3, FileText } from "lucide-react";

const FeatureCards = () => {
    return (
        <section className="flex justify-center items-center gap-8 mt-20">
            <div className="w-80 p-6 rounded-2xl border border-gray-800 bg-[#0E1224]/80 backdrop-blur-md hover:border-violet-500 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-violet-600 flex items-center justify-center">
                    <BarChart3 size={24} color="white" />
                </div>
                <h2 className="text-white text-xl font-semibold mt-5">
                    Smart Analytics
                </h2>
                <p className="text-gray-400 mt-3 leading-7">
                    Analyze product performance using AI-driven insights,
                    demand forecasting, and intelligent recommendations.
                </p>
            </div>
            <div className="w-80 p-6 rounded-2xl border border-gray-800 bg-[#0E1224]/80 backdrop-blur-md hover:border-violet-500 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-violet-600 flex items-center justify-center">
                    <FileText size={24} color="white" />
                </div>
                <h2 className="text-white text-xl font-semibold mt-5">
                    Reliable Reports
                </h2>
                <p className="text-gray-400 mt-3 leading-7">
                    Generate professional PDF reports with market analysis,
                    pricing insights and business recommendations.
                </p>
            </div>
        </section>
    );
};
export default FeatureCards;