import {
    IndianRupee,
    BrainCircuit,
    TrendingUp,
    ShieldCheck,
} from "lucide-react";

import KPICard from "./KPICard";

const KPI = () => {

    const kpiData = [
        {
            title: "Estimated Revenue",
            value: "₹2.48 Cr",
            color: "#6D28D9",
            icon: <IndianRupee size={28} className="text-white" />,
        },
        {
            title: "AI Confidence",
            value: "94%",
            color: "#9333EA",
            icon: <BrainCircuit size={28} className="text-white" />,
        },
        {
            title: "Demand Forecast",
            value: "High",
            color: "#7C3AED",
            icon: <TrendingUp size={28} className="text-white" />,
        },
        {
            title: "Risk Level",
            value: "Low",
            color: "#8B5CF6",
            icon: <ShieldCheck size={28} className="text-white" />,
        },
    ];

    return (
        <section className="mt-8">

            <div className="mb-6 flex items-center justify-between">

                <h2 className="text-xl font-semibold text-white sm:text-2xl">
                    Key Performance Indicators
                </h2>

                <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1 text-xs font-medium text-violet-300 sm:text-sm">
                    Live Analytics
                </span>

            </div>

            <div
                className="
                    grid
                    grid-cols-1
                    gap-5
                    sm:grid-cols-2
                    xl:grid-cols-4
                "
            >
                {kpiData.map((item, index) => (
                    <KPICard
                        key={index}
                        title={item.title}
                        value={item.value}
                        color={item.color}
                        icon={item.icon}
                    />
                ))}
            </div>

        </section>
    );
};

export default KPI;