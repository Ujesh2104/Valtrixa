const KPICard = ({ title, value, icon, color }) => {
    return (
        <div className="rounded-2xl border border-[#1F2940] bg-[#0B1020] p-6 transition-all duration-300 hover:border-violet-500 hover:-translate-y-1">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm text-gray-400">
                        {title}
                    </p>
                    <h2 className="mt-3 text-3xl font-bold text-white">
                        {value}
                    </h2>
                </div>
                <div
                    className="flex h-14 w-14 items-center justify-center rounded-xl"
                    style={{ backgroundColor: color }}
                >
                    {icon}
                </div>
            </div>
        </div>
    );
};

export default KPICard;