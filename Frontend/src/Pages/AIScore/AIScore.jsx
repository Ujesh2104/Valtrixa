import { BrainCircuit, Sparkles, TrendingUp, ShieldCheck, BadgeCheck } from "lucide-react";

const AIScore = () => {
    return (
        <section
            className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-[#1F2940]
                bg-[#111827]
                p-6
                lg:p-8
                transition-all
                duration-300
                hover:border-violet-500
                hover:shadow-[0_0_40px_rgba(139,92,246,0.20)]
            "
        >

            {/* Background Glow */}

            <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-violet-600/10 blur-[120px]" />

            {/* Header */}

            <div className="relative z-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                <div>

                    <h2 className="text-2xl font-bold text-white sm:text-3xl">
                        AI Product Score
                    </h2>

                    <p className="mt-2 max-w-lg text-sm text-gray-400 sm:text-base">
                        AI-generated prediction based on demand,
                        profitability, competition, pricing and
                        market trends.
                    </p>

                </div>

                <div className="rounded-2xl bg-violet-500/10 p-4">

                    <BrainCircuit
                        size={34}
                        className="text-violet-400"
                    />

                </div>

            </div>

            {/* Circular Score */}

            <div className="relative mt-12 flex justify-center">

                <div className="relative flex h-60 w-60 items-center justify-center rounded-full border-[10px] border-violet-500 bg-[#0B1020] shadow-[0_0_50px_rgba(139,92,246,0.25)] sm:h-64 sm:w-64">

                    <div className="text-center">

                        <Sparkles
                            size={34}
                            className="mx-auto text-violet-400"
                        />

                        <h1 className="mt-3 text-5xl font-extrabold text-white sm:text-6xl">
                            94
                        </h1>

                        <p className="mt-2 text-sm tracking-widest text-gray-400 uppercase">
                            AI Score
                        </p>

                    </div>

                    {/* Small Badge */}

                    <div className="absolute -bottom-3 rounded-full bg-green-500 px-4 py-2 text-sm font-semibold text-white shadow-lg">
                        Excellent
                    </div>

                </div>

            </div>

            {/* Metrics */}

            <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">

                {/* Success */}

                <div className="rounded-2xl border border-[#1F2940] bg-[#0B1020] p-5 transition-all duration-300 hover:border-green-500">

                    <TrendingUp
                        className="mb-4 text-green-400"
                        size={28}
                    />

                    <p className="text-sm uppercase tracking-wide text-gray-400">
                        Success Probability
                    </p>

                    <h2 className="mt-2 text-3xl font-bold text-green-400">
                        91%
                    </h2>

                </div>

                {/* Confidence */}

                <div className="rounded-2xl border border-[#1F2940] bg-[#0B1020] p-5 transition-all duration-300 hover:border-violet-500">

                    <BadgeCheck
                        className="mb-4 text-violet-400"
                        size={28}
                    />

                    <p className="text-sm uppercase tracking-wide text-gray-400">
                        Confidence
                    </p>

                    <h2 className="mt-2 text-2xl font-bold text-violet-400">
                        Very High
                    </h2>

                </div>

                {/* Risk */}

                <div className="rounded-2xl border border-[#1F2940] bg-[#0B1020] p-5 transition-all duration-300 hover:border-cyan-500">

                    <ShieldCheck
                        className="mb-4 text-cyan-400"
                        size={28}
                    />

                    <p className="text-sm uppercase tracking-wide text-gray-400">
                        Risk Level
                    </p>

                    <h2 className="mt-2 text-2xl font-bold text-cyan-400">
                        Low
                    </h2>

                </div>

            </div>

        </section>
    );
};

export default AIScore;