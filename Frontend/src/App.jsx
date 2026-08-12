import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import ProductAnalysis from "./Pages/ProductAnalysis/ProductAnalysis";
import Dashboard from "./Pages/Dashboard/Dashboard";
import RecentAnalysis from "./Pages/RecentAnalysis/RecentAnalysis";

import Home from "./Components/Home/Home";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>

                <Route
                    path="/"
                    element={<Login />}
                />

                <Route
                    path="/login"
                    element={<Login />}
                />

                <Route
                    path="/signup"
                    element={<Signup />}
                />

                <Route
                    path="/home"
                    element={
                        <ProtectedRoute>
                            <Home />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/product-analysis"
                    element={
                        <ProtectedRoute>
                            <ProductAnalysis />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/recent-analysis"
                    element={
                        <ProtectedRoute>
                            <RecentAnalysis />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="*"
                    element={<Navigate to="/" replace />}
                />

            </Routes>
        </BrowserRouter>
    );
};

export default App;