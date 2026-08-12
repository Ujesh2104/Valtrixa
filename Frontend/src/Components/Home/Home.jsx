import Background from "../Section1/Background/Background";
import Section1 from "../Section1/Section1";
import Section2 from "../Section2/Section2";
import Footer from "../Footer/Footer";

const Home = () => {
    return (
        <main className="relative min-h-screen overflow-hidden bg-[#050816]">

            <Background />

            <div className="relative z-10">
                <Section1 />
                <Section2 />
                <Footer />
            </div>

        </main>
    );
};

export default Home;