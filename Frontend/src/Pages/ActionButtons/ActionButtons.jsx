import {
    Wrench,
    Clock3,
    CheckCircle2,
    Download,
    RefreshCcw,
    Share2,
    ArrowRight,
} from "lucide-react";

const actions = [
    {
        title: "Request Parts",
        description: "Order required manufacturing parts for this product.",
        icon: Wrench,
        gradient: "from-violet-600 to-fuchsia-600",
    },
    {
        title: "Need More Days",
        description: "Request additional time for product completion.",
        icon: Clock3,
        gradient: "from-orange-500 to-amber-500",
    },
    {
        title: "Complete Analysis",
        description: "Finish the AI product analysis process.",
        icon: CheckCircle2,
        gradient: "from-emerald-500 to-green-600",
    },
    {
        title: "Download Report",
        description: "Export the complete AI analysis as a PDF report.",
        icon: Download,
        gradient: "from-cyan-500 to-blue-600",
    },
    {
        title: "Re-Analyze",
        description: "Run the AI prediction again using the latest data.",
        icon: RefreshCcw,
        gradient: "from-pink-500 to-rose-600",
    },
    {
        title: "Share Report",
        description: "Share this report with your team members.",
        icon: Share2,
        gradient: "from-indigo-500 to-violet-600",
    },
];

const ActionButtons = () => {
    return (
        <section className="mt-12">

            {/* Header */}

            <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">

                <div>

                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                        Quick Actions
                    </h2>

                    <p className="mt-2 text-sm sm:text-base text-gray-400">
                        Execute important actions related to this AI product analysis.
                    </p>

                </div>

                <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-xs sm:text-sm font-medium text-violet-300">
                    6 Available Actions
                </span>

            </div>

            {/* Cards */}

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">

                {actions.map((action, index) => {

                    const Icon = action.icon;

                    return (

                        <button
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
                                text-left
                                transition-all
                                duration-300
                                hover:-translate-y-2
                                hover:border-violet-500
                                hover:shadow-[0_15px_40px_rgba(139,92,246,0.18)]
                            "
                        >

                            {/* Glow */}

                            <div
                                className={`absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${action.gradient} opacity-10 blur-3xl`}
                            />

                            {/* Icon */}

                            <div
                                className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${action.gradient} shadow-lg`}
                            >
                                <Icon
                                    size={30}
                                    className="text-white"
                                />
                            </div>

                            {/* Title */}

                            <h3 className="text-xl font-semibold text-white">
                                {action.title}
                            </h3>

                            {/* Description */}

                            <p className="mt-3 text-sm leading-6 text-gray-400">
                                {action.description}
                            </p>

                            {/* Bottom */}

                            <div className="mt-8 flex items-center justify-between">

                                <span className="text-sm font-medium text-violet-400 transition-colors duration-300 group-hover:text-white">
                                    Continue
                                </span>

                                <ArrowRight
                                    size={18}
                                    className="text-violet-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white"
                                />

                            </div>

                        </button>

                    );

                })}

            </div>

        </section>
    );
};

export default ActionButtons;