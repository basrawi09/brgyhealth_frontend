import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/AuthContext";

function Layout({ children }) {

    const navigate = useNavigate();

    const {

        logout,

        user

    } = useAuth();

    function handleLogout() {

        logout();

        navigate("/login", {

            replace: true

        });

    }

    return (

        <div className="min-h-screen bg-slate-100">

            <Sidebar />

            <div className="md:ml-64">

                <Navbar />

                <main className="p-6">

                    {/* User Information */}

                    <div className="mb-6 flex items-center justify-between rounded-xl bg-white p-4 shadow">

                        <div>

                            <h2 className="text-lg font-semibold">

                                Welcome, {user?.username}

                            </h2>

                            <p className="text-sm text-gray-500">

                                Role: {user?.role}

                            </p>

                        </div>

                        <button

                            onClick={handleLogout}

                            className="rounded-lg bg-red-600 px-4 py-2 text-white transition hover:bg-red-700"

                        >

                            Logout

                        </button>

                    </div>

                    {children}

                </main>

            </div>

        </div>

    );

}

export default Layout;