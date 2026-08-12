import { useState } from "react";
import {
    User,
    Mail,
    Lock,
    ArrowRight,
    LoaderCircle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import { signupUser } from "../../api/authApi";

const Signup = () => {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSignup = async (e) => {
        e.preventDefault();

        if (
            !name.trim() ||
            !email.trim() ||
            !password.trim()
        ) {
            alert("Please fill all the details.");
            return;
        }

        try {
            setLoading(true);

            const response = await signupUser({
                name: name.trim(),
                email: email.trim(),
                password,
            });

            alert(
                response.data.message ||
                "Account created successfully."
            );

            navigate("/login");

        } catch (error) {
            console.error("Signup Error:", error);

            alert(
                error.response?.data?.message ||
                "Signup failed. Please try again."
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
                        Create Account
                    </h2>

                    <p className="mt-2 text-sm text-gray-400 sm:text-base">
                        Create your account to start your product analysis.
                    </p>

                </div>

                <form
                    onSubmit={handleSignup}
                    className="mt-8"
                >

                    <div>

                        <label
                            htmlFor="name"
                            className="text-sm font-medium text-gray-300"
                        >
                            Full Name
                        </label>

                        <div className="mt-2 flex items-center rounded-xl border border-[#28344D] bg-[#111827] px-4 transition-all duration-300 focus-within:border-violet-500">

                            <User
                                size={20}
                                className="shrink-0 text-gray-400"
                            />

                            <input
                                id="name"
                                type="text"
                                placeholder="Enter your full name"
                                value={name}
                                onChange={(e) =>
                                    setName(e.target.value)
                                }
                                autoComplete="name"
                                className="w-full bg-transparent px-3 py-3 text-white outline-none placeholder:text-gray-600"
                            />

                        </div>

                    </div>

                    <div className="mt-6">

                        <label
                            htmlFor="email"
                            className="text-sm font-medium text-gray-300"
                        >
                            Email Address
                        </label>

                        <div className="mt-2 flex items-center rounded-xl border border-[#28344D] bg-[#111827] px-4 transition-all duration-300 focus-within:border-violet-500">

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

                        <div className="mt-2 flex items-center rounded-xl border border-[#28344D] bg-[#111827] px-4 transition-all duration-300 focus-within:border-violet-500">

                            <Lock
                                size={20}
                                className="shrink-0 text-gray-400"
                            />

                            <input
                                id="password"
                                type="password"
                                placeholder="Create a password"
                                value={password}
                                onChange={(e) =>
                                    setPassword(e.target.value)
                                }
                                autoComplete="new-password"
                                className="w-full bg-transparent px-3 py-3 text-white outline-none placeholder:text-gray-600"
                            />

                        </div>

                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 py-3 font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-violet-500/20 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
                    >

                        {loading ? (
                            <>
                                <LoaderCircle
                                    size={20}
                                    className="animate-spin"
                                />
                                Creating Account...
                            </>
                        ) : (
                            <>
                                Create Account
                                <ArrowRight size={20} />
                            </>
                        )}

                    </button>

                </form>

                <p className="mt-8 text-center text-sm text-gray-400">

                    Already have an account?

                    <button
                        type="button"
                        onClick={() => navigate("/login")}
                        className="ml-2 font-semibold text-violet-400 transition-colors hover:text-violet-300"
                    >
                        Login
                    </button>

                </p>

            </div>

        </section>
    );
};

export default Signup;