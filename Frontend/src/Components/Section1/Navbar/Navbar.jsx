import Logo from "../Logo/Logo";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="flex w-full items-center justify-between px-12 py-6">
            <NavLink to="/">
                <Logo />
            </NavLink>
            <div className="flex items-center gap-4">
                <NavLink
                    to="/recent-analysis"
                    className="rounded-lg border border-violet-500 bg-transparent px-6 py-2 text-white transition-all duration-300 hover:border-violet-600 hover:bg-violet-600"
                >
                    Previous Analysis
                </NavLink>
                <NavLink
                    to="/login"
                    className="rounded-lg border border-violet-500 bg-transparent px-6 py-2 text-white transition-all duration-300 hover:border-violet-600 hover:bg-violet-600"
                >
                    Login
                </NavLink>
            </div>
        </nav>
    );
};
export default Navbar;