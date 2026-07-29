const Waves = () => {
    return (
        <svg
            className="absolute inset-0 w-full h-full opacity-30"
            viewBox="0 0 1600 900"
            preserveAspectRatio="none"
        >
            <defs>
                <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#D946EF" />
                </linearGradient>
            </defs>

            <path
                d="M0 720 C220 650 420 820 650 730 S1100 620 1600 760"
                stroke="url(#waveGradient)"
                strokeWidth="2"
                fill="none"
            />

            <path
                d="M0 760 C260 690 500 850 760 760 S1180 660 1600 820"
                stroke="url(#waveGradient)"
                strokeWidth="2"
                fill="none"
                opacity="0.7"
            />

            <path
                d="M0 810 C280 730 560 900 850 800 S1260 720 1600 870"
                stroke="url(#waveGradient)"
                strokeWidth="2"
                fill="none"
                opacity="0.5"
            />
        </svg>
    );
};

export default Waves;