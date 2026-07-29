const chartData = [
    {
        title: "Sales Trend",
        value: "+18.6%",
        color: "from-violet-500 to-fuchsia-500"
    },
    {
        title: "Revenue Forecast",
        value: "₹2.48 Cr",
        color: "from-blue-500 to-cyan-500"
    },
    {
        title: "Demand Prediction",
        value: "High",
        color: "from-green-500 to-emerald-500"
    },
    {
        title: "Profit Analysis",
        value: "28.4%",
        color: "from-orange-500 to-yellow-500"
    }
];
const Charts = () => {
    return (
        <section className="mt-8 grid grid-cols-2 gap-6">
            {
                chartData.map((chart, index) => (
                    <div
                        key={index}
                        className="rounded-2xl border border-[#1F2940] bg-[#0B1020] p-6"
                    >
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl font-semibold text-white">
                                {chart.title}
                            </h2>
                            <span className={`rounded-lg bg-gradient-to-r ${chart.color} px-3 py-1 text-sm font-semibold text-white`}>
                                {chart.value}
                            </span>
                        </div>
                        <div className="mt-6 flex h-56 items-end gap-3">
                            {
                                [45, 90, 65, 120, 95, 160, 140, 185].map((height, i) => (
                                    <div
                                        key={i}
                                        className={`w-full rounded-t-lg bg-gradient-to-t ${chart.color}`}
                                        style={{ height: `${height}px` }}
                                    ></div>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </section>
    );
};

export default Charts;