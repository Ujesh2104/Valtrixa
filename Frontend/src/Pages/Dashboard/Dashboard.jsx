import ActionButtons from "../ActiomButtons/ActionButtons";
import AIScore from "../AIScore/AIScore";
import Charts from "../Charts/Charts";
import Header from "../Header/Header";
import KPI from "../KPI/KPI";
import RecentAnalysis from "../RecentAnalysis/RecentAnalysis";
import Recommendation from "../Recommendation/Recommendation";
const Dashboard = () => {
    return (
        <section className="min-h-screen w-full bg-[#050816] px-10 py-8">
            <div className="mx-auto max-w-7xl">
                <Header />
                <KPI />
                <Charts/>
                <Recommendation/>
                <AIScore/>
                <ActionButtons/>
                <RecentAnalysis/>
            </div>
        </section>
    );
};

export default Dashboard;