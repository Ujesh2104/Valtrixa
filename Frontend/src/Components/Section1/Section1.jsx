import Background from "./Background/Background";
import FeatureCards from "./Feature Cards/FeatureCards";
import Hero from "./Hero/Hero";
import Navbar from "./Navbar/Navbar";

const Section1 = () => {
    return (
        <section className="relative min-h-screen w-full overflow-hidden">
            <Background />
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)
                    `,
                    backgroundSize: "70px 70px",
                }}
            />
            <div className="relative z-10 flex min-h-screen flex-col">
                <Navbar />
                <Hero />
                <FeatureCards />
            </div>
        </section>
    );
};

export default Section1;