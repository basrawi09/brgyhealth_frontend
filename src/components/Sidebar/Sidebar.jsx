import { useState } from "react";
import {
    Home,
    Users,
    UserRound,
    Stethoscope,
    Menu,
    X
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../auth/AuthContext";

function Sidebar() {

    const [open, setOpen] = useState(false);

    const { user } = useAuth();

const links = [
    {
        name: "Dashboard",
        path: "/",
        icon: Home,
        roles: ["admin", "staff"]
    },
    {
        name: "Staff",
        path: "/staff",
        icon: Users,
        roles: ["admin"]
    },
    {
        name: "Patients",
        path: "/patients",
        icon: UserRound,
        roles: ["admin", "staff"]
    },
    {
        name: "Consultations",
        path: "/consultations",
        icon: Stethoscope,
        roles: ["admin", "staff"]
    },
    {
        name: "Users",
        path: "/users",
        icon: Users,
        roles: ["admin"]
    }
];

console.log("Current User:", user);
console.log("Role:", user?.role);
console.log("Role Type:", typeof user?.role);

    const visibleLinks = links.filter(link =>
        user && link.roles.includes(user.role)
    );

links.forEach(link => {
    console.log(
        link.name,
        "Allowed:",
        link.roles,
        "Current:",
        user?.role,
        "Match:",
        link.roles.includes(user?.role)
    );
});

    return (
        <>
            <button
                onClick={() => setOpen(!open)}
                className="fixed left-4 top-4 z-50 rounded-lg bg-blue-600 p-2 text-white shadow-lg md:hidden"
            >
                {open ? <X size={22} /> : <Menu size={22} />}
            </button>

            {open && (
                <div
                    className="fixed inset-0 z-30 bg-black/40 md:hidden"
                    onClick={() => setOpen(false)}
                />
            )}

            <aside
                className={`fixed top-0 left-0 z-40 h-screen w-64 bg-blue-700 text-white shadow-xl transition-transform duration-300 ${
                    open ? "translate-x-0" : "-translate-x-full"
                } md:translate-x-0`}
            >
                <div className="border-b border-blue-500 p-6">
                    <h2 className="text-xl font-bold">🏥 Health Center</h2>

                    <p className="text-sm text-blue-100">
                        {user?.role || "No Role"}
                    </p>
                </div>

                <nav className="mt-6 flex flex-col gap-2 px-3">
                    {visibleLinks.map((item) => {
                        const Icon = item.icon;

                        return (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                end={item.path === "/"}
                                className={({ isActive }) =>
                                    `flex items-center gap-3 rounded-lg px-4 py-3 ${
                                        isActive
                                            ? "bg-white text-blue-700"
                                            : "hover:bg-blue-600"
                                    }`
                                }
                            >
                                <Icon size={20} />
                                {item.name}
                            </NavLink>
                        );
                    })}
                </nav>
            </aside>
        </>
    );
}

export default Sidebar;