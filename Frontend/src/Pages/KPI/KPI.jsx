import {
    IndianRupee,
    BrainCircuit,
    TrendingUp,
    ShieldCheck
} from "lucide-react";

import KPICard from "./KPICard";

const KPI = () => {
    return (
        <section className="mt-8 grid grid-cols-4 gap-6">
            <KPICard
                title="Estimated Revenue"
                value="₹2.48 Cr"
                color="#6D28D9"
                icon={<IndianRupee size={28} className="text-white" />}
            />
            <KPICard
                title="AI Confidence"
                value="94%"
                color="#9333EA"
                icon={<BrainCircuit size={28} className="text-white" />}
            />
            <KPICard
                title="Demand Forecast"
                value="High"
                color="#7C3AED"
                icon={<TrendingUp size={28} className="text-white" />}
            />
            <KPICard
                title="Risk Level"
                value="Low"
                color="#8B5CF6"
                icon={<ShieldCheck size={28} className="text-white" />}
            />
        </section>
    );
};

export default KPI;