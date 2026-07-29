const particles = [
    { top: "8%", left: "10%", size: "8px" },
    { top: "18%", left: "30%", size: "6px" },
    { top: "15%", left: "80%", size: "8px" },
    { top: "32%", left: "70%", size: "7px" },
    { top: "45%", left: "20%", size: "6px" },
    { top: "60%", left: "88%", size: "8px" },
    { top: "72%", left: "12%", size: "7px" },
    { top: "82%", left: "58%", size: "6px" }
];

const Particles = () => {
    return (
        <>
            {
                particles.map((particle, index) => (
                    <div
                        key={index}
                        className="absolute rounded-full bg-violet-300 shadow-[0_0_20px_#a855f7]"
                        style={{
                            top: particle.top,
                            left: particle.left,
                            width: particle.size,
                            height: particle.size
                        }}
                    ></div>
                ))
            }
        </>
    );
};

export default Particles;