import { useNavigate } from "react-router-dom";

const Hero = () => {
    const navigate = useNavigate();
    const scrollToSection2 = () => {
        const section = document.getElementById("section2");
        if (section) {
            section.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };
    return (
        <section
            id="hero"
            className="flex w-full flex-col items-center justify-center px-6 pt-28 text-center"
        >
            <h1 className="max-w-6xl text-7xl font-extrabold leading-tight text-white">
                AI POWERED PRODUCT ANALYSIS
            </h1>
            <h1 className="mt-4 max-w-6xl text-7xl font-extrabold leading-tight text-white">
                INTELLIGENT INSIGHTS
            </h1>
            <h1 className="mt-4 bg-gradient-to-r from-violet-400 via-fuchsia-500 to-purple-500 bg-clip-text text-7xl font-extrabold text-transparent">
                BETTER DECISIONS
            </h1>
            <p className="mt-12 text-center text-2xl text-gray-400">
                ANALYZE YOUR PRODUCT,
            </p>
            <p className="mt-2 text-center text-2xl text-gray-400">
                AND GET ACTIONABLE INSIGHTS IN SECONDS
            </p>
            <div className="mt-12 flex gap-8">
                <button
                    onClick={scrollToSection2}
                    className="rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-10 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-105"
                >
                    Start Product Analysis
                </button>
                <button
                    onClick={() => navigate("/recent-analysis")}
                    className="rounded-xl border border-[#39445F] px-10 py-4 text-lg font-semibold text-white transition-all duration-300 hover:border-violet-500 hover:bg-[#10172A]"
                >
                    View Sample Report
                </button>
            </div>
        </section>
    );
};

export default Hero;