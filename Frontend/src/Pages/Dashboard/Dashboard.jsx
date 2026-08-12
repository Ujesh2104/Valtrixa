import ActionButtons from "../ActionButtons/ActionButtons";
import AIScore from "../AIScore/AIScore";
import Charts from "../Charts/Charts";
import Header from "../Header/Header";
import KPI from "../KPI/KPI";
import RecentAnalysis from "../RecentAnalysis/RecentAnalysis";
import Recommendation from "../Recommendation/Recommendation";

const Dashboard = () => {
    return (
        <main className="min-h-screen bg-[#050816] overflow-x-hidden">

            {/* Background Glow */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-violet-600/20 blur-[140px]" />
                <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-fuchsia-600/20 blur-[150px]" />
            </div>

            <section className="mx-auto max-w-[1600px] px-4 py-6 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">

                {/* Dashboard Container */}

                <div
                    className="
                        rounded-3xl
                        border
                        border-[#1F2940]
                        bg-[#0B1020]/95
                        backdrop-blur-md
                        shadow-2xl
                        p-4
                        sm:p-6
                        lg:p-8
                        xl:p-10
                        space-y-8
                        lg:space-y-10
                    "
                >

                    <Header />

                    <KPI />

                    <Charts />

                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

                        <Recommendation />

                        <AIScore />

                    </div>

                    <ActionButtons />

                    <RecentAnalysis />

                </div>

            </section>

        </main>
    );
};

export default Dashboard;