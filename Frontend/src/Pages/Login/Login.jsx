import { useState } from "react";
import {
    Mail,
    Lock,
    ArrowRight,
    LoaderCircle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import { loginUser } from "../../api/authApi";

const Login = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!email.trim() || !password.trim()) {
            alert("Please fill all the details.");
            return;
        }

        try {
            setLoading(true);

            const response = await loginUser({
                email: email.trim(),
                password,
            });

            localStorage.setItem(
                "token",
                response.data.token
            );

            alert(
                response.data.message ||
                "Login successful"
            );

            navigate("/home");
        } catch (error) {
            console.error(error);

            alert(
                error.response?.data?.message ||
                "Login failed. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="flex min-h-screen items-center justify-center bg-gradient-to-b from-[#060816] via-[#080B1A] to-[#050816] px-4 py-8 sm:px-6">

            <div className="w-full max-w-md rounded-2xl border border-[#1F2940] bg-[#0B1020] p-6 shadow-2xl sm:p-8">

                <div className="text-center">

                    <h1 className="bg-gradient-to-r from-violet-400 to-fuchsia-500 bg-clip-text text-4xl font-bold text-transparent">
                        VALTRIXA
                    </h1>

                    <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl">
                        Welcome Back
                    </h2>

                    <p className="mt-2 text-sm text-gray-400 sm:text-base">
                        Login to continue your business analysis.
                    </p>

                </div>

                <form
                    onSubmit={handleLogin}
                    className="mt-8"
                >

                    <div>

                        <label
                            htmlFor="email"
                            className="text-sm font-medium text-gray-300"
                        >
                            Email Address
                        </label>

                        <div className="mt-2 flex items-center rounded-xl border border-[#28344D] bg-[#111827] px-4 focus-within:border-violet-500">

                            <Mail
                                size={20}
                                className="shrink-0 text-gray-400"
                            />

                            <input
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) =>
                                    setEmail(e.target.value)
                                }
                                autoComplete="email"
                                className="w-full bg-transparent px-3 py-3 text-white outline-none placeholder:text-gray-600"
                            />

                        </div>

                    </div>

                    <div className="mt-6">

                        <label
                            htmlFor="password"
                            className="text-sm font-medium text-gray-300"
                        >
                            Password
                        </label>

                        <div className="mt-2 flex items-center rounded-xl border border-[#28344D] bg-[#111827] px-4 focus-within:border-violet-500">

                            <Lock
                                size={20}
                                className="shrink-0 text-gray-400"
                            />

                            <input
                                id="password"
                                type="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) =>
                                    setPassword(e.target.value)
                                }
                                autoComplete="current-password"
                                className="w-full bg-transparent px-3 py-3 text-white outline-none placeholder:text-gray-600"
                            />

                        </div>

                    </div>

                    <div className="mt-5 flex items-center justify-between gap-4">

                        <label className="flex items-center gap-2 text-sm text-gray-400">

                            <input
                                type="checkbox"
                                className="accent-violet-500"
                            />

                            Remember Me

                        </label>

                        <button
                            type="button"
                            className="text-sm text-violet-400 hover:text-violet-300"
                        >
                            Forgot Password?
                        </button>

                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 py-3 font-semibold text-white transition-all duration-300 hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
                    >

                        {loading ? (
                            <>
                                <LoaderCircle
                                    size={20}
                                    className="animate-spin"
                                />
                                Logging In...
                            </>
                        ) : (
                            <>
                                Login
                                <ArrowRight size={20} />
                            </>
                        )}

                    </button>

                </form>

                <p className="mt-8 text-center text-sm text-gray-400">

                    Don't have an account?

                    <button
                        type="button"
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