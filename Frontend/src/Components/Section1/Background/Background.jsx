import Glow from "./Glow";
import Particles from "./Particles";
import Waves from "./Waves";

const Background = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">

            <Glow />

            <Particles />

            <Waves />

        </div>
    );
};

export default Background;