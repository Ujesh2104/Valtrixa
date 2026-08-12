const chartData = [
    {
        title: "Sales Trend",
        value: "+18.6%",
        subtitle: "Compared to last month",
        color: "from-violet-500 to-fuchsia-500",
        bars: [50, 90, 70, 120, 95, 170, 150, 195]
    },
    {
        title: "Revenue Forecast",
        value: "₹2.48 Cr",
        subtitle: "Expected monthly revenue",
        color: "from-blue-500 to-cyan-500",
        bars: [80, 110, 135, 125, 155, 185, 170, 210]
    },
    {
        title: "Demand Prediction",
        value: "High",
        subtitle: "AI demand prediction",
        color: "from-green-500 to-emerald-500",
        bars: [40, 65, 90, 110, 135, 165, 180, 200]
    },
    {
        title: "Profit Analysis",
        value: "28.4%",
        subtitle: "Estimated net margin",
        color: "from-orange-500 to-yellow-500",
        bars: [55, 85, 115, 145, 165, 180, 205, 225]
    }
];

const Charts = () => {
    return (
        <section className="mt-10">

            {/* Heading */}

            <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">

                <div>
                    <h2 className="text-2xl font-bold text-white sm:text-3xl">
                        Business Analytics
                    </h2>

                    <p className="mt-1 text-sm text-gray-400 sm:text-base">
                        AI generated insights based on your product analysis
                    </p>
                </div>

                <span className="w-fit rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-xs font-semibold text-violet-300 sm:text-sm">
                    Updated Just Now
                </span>

            </div>

            {/* Charts */}

            <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">

                {chartData.map((chart, index) => (

                    <div
                        key={index}
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
                            hover:shadow-[0_0_40px_rgba(139,92,246,0.18)]
                        "
                    >

                        {/* Background Glow */}

                        <div
                            className={`absolute right-0 top-0 h-40 w-40 rounded-full bg-gradient-to-br ${chart.color} opacity-10 blur-3xl`}
                        />

                        {/* Header */}

                        <div className="relative z-10 flex items-center justify-between">

                            <div>

                                <h3 className="text-lg font-semibold text-white sm:text-xl">
                                    {chart.title}
                                </h3>

                                <p className="mt-1 text-sm text-gray-400">
                                    {chart.subtitle}
                                </p>

                            </div>

                            <span
                                className={`rounded-xl bg-gradient-to-r ${chart.color} px-4 py-2 text-sm font-bold text-white shadow-lg`}
                            >
                                {chart.value}
                            </span>

                        </div>

                        {/* Fake Grid */}

                        <div className="mt-8 h-[240px] rounded-2xl border border-[#1F2940] bg-[#0B1020] p-4">

                            <div className="flex h-full items-end gap-3">

                                {chart.bars.map((height, i) => (

                                    <div
                                        key={i}
                                        className="flex flex-1 items-end"
                                    >

                                        <div
                                            className={`
                                                w-full
                                                rounded-t-xl
                                                bg-gradient-to-t
                                                ${chart.color}
                                                transition-all
                                                duration-500
                                                group-hover:opacity-90
                                            `}
                                            style={{
                                                height: `${height}px`,
                                            }}
                                        />

                                    </div>

                                ))}

                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </section>
    );
};

export default Charts;