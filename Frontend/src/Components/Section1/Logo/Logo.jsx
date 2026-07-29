const Logo = () => {
    return (
        <div className="flex items-center gap-3">

            <svg
                width="36"
                height="36"
                viewBox="8 6 32 34"
                fill="none"
                className="flex-shrink-0"
            >

                <defs>
                    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#B86CFF" />
                        <stop offset="100%" stopColor="#6D7CFF" />
                    </linearGradient>
                </defs>

                <path
                    d="M11 8 L22 36"
                    stroke="url(#logoGradient)"
                    strokeWidth="7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />

                <path
                    d="M37 8 L26 36"
                    stroke="url(#logoGradient)"
                    strokeWidth="7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />

            </svg>

            <h1 className="text-4xl font-bold text-white leading-none">
                VALTRIXA
            </h1>

        </div>
    );
};

export default Logo;