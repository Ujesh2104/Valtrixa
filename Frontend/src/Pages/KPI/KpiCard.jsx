const KPICard = ({ title, value, icon, color }) => {
    return (
        <div
            className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-[#1F2940]
                bg-[#111827]
                p-6
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-violet-500
                hover:shadow-[0_0_35px_rgba(139,92,246,0.25)]
            "
        >

            {/* Background Glow */}
            <div
                className="absolute right-0 top-0 h-24 w-24 rounded-full blur-3xl opacity-20"
                style={{ backgroundColor: color }}
            />

            {/* Icon */}

            <div
                className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl"
                style={{ backgroundColor: color }}
            >
                {icon}
            </div>

            {/* Title */}

            <p className="text-sm text-gray-400 sm:text-base">
                {title}
            </p>

            {/* Value */}

            <h2 className="mt-3 text-3xl font-bold text-white lg:text-4xl">
                {value}
            </h2>

            {/* Bottom Line */}

            <div className="mt-6 h-1 w-full rounded-full bg-[#1F2940]">

                <div
                    className="h-full rounded-full"
                    style={{
                        width: "82%",
                        backgroundColor: color,
                    }}
                />

            </div>

        </div>
    );
};

export default KPICard;