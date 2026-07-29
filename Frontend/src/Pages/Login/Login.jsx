import { Mail, Lock, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    return (
        <section className="flex min-h-screen items-center justify-center bg-gradient-to-b from-[#060816] via-[#080B1A] to-[#050816] px-6">
            <div className="w-full max-w-md rounded-2xl border border-[#1F2940] bg-[#0B1020] p-8 shadow-2xl">
                <div className="text-center">
                    <h1 className="bg-gradient-to-r from-violet-400 to-fuchsia-500 bg-clip-text text-4xl font-bold text-transparent">
                        VALTRIXA
                    </h1>
                    <h2 className="mt-6 text-3xl font-bold text-white">
                        Welcome Back
                    </h2>
                    <p className="mt-2 text-gray-400">
                        Login to continue your business analysis.
                    </p>
                </div>
                <div className="mt-8">
                    <label className="text-gray-300">
                        Email Address
                    </label>
                    <div className="mt-2 flex items-center rounded-lg border border-[#28344D] bg-[#111827] px-4">
                        <Mail
                            className="text-gray-400"
                            size={20}
                        />
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full bg-transparent px-3 py-3 text-white outline-none"
                        />
                    </div>
                </div>
                <div className="mt-6">
                    <label className="text-gray-300">
                        Password
                    </label>
                    <div className="mt-2 flex items-center rounded-lg border border-[#28344D] bg-[#111827] px-4">
                        <Lock
                            className="text-gray-400"
                            size={20}
                        />
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full bg-transparent px-3 py-3 text-white outline-none"
                        />
                    </div>
                </div>
                <div className="mt-5 flex items-center justify-between">
                    <label className="flex items-center gap-2 text-sm text-gray-400">
                        <input
                            type="checkbox"
                            className="accent-violet-500"
                        />
                        Remember Me
                    </label>
                    <button
                        className="text-sm text-violet-400 hover:text-violet-300"
                    >
                        Forgot Password?
                    </button>
                </div>
                <button
                    onClick={() => navigate("/dashboard")}
                    className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 py-3 font-semibold text-white transition-all duration-300 hover:scale-105"
                >
                    Login
                    <ArrowRight size={20} />
                </button>
                <p className="mt-8 text-center text-gray-400">
                    Don't have an account?
                    <button
                        onClick={() => navigate("/signup")}
                        className="ml-2 font-semibold text-violet-400 hover:text-violet-300"
                    >
                        Sign Up
                    </button>
                </p>
            </div>
        </section>
    );
};

export default Login;