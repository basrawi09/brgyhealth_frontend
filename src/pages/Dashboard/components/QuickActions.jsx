import { Link } from "react-router-dom";

import {
    UserPlus,
    ClipboardPlus,
    HeartPulse
} from "lucide-react";

function QuickActions() {

    return (

        <div className="rounded-2xl bg-white p-6 shadow-md">

            <h2 className="mb-6 text-2xl font-bold text-gray-800">

                Quick Actions

            </h2>

            <div className="grid gap-4 md:grid-cols-3">

                <Link
                    to="/staff"
                    className="flex items-center justify-center gap-3 rounded-xl bg-blue-600 px-6 py-4 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-lg"
                >

                    <UserPlus size={22} />

                    <span>Add Staff</span>

                </Link>

                <Link
                    to="/patients"
                    className="flex items-center justify-center gap-3 rounded-xl bg-green-600 px-6 py-4 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-green-700 hover:shadow-lg"
                >

                    <ClipboardPlus size={22} />

                    <span>Add Patient</span>

                </Link>

                <Link
                    to="/consultations"
                    className="flex items-center justify-center gap-3 rounded-xl bg-red-600 px-6 py-4 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-red-700 hover:shadow-lg"
                >

                    <HeartPulse size={22} />

                    <span>Add Consultation</span>

                </Link>

            </div>

        </div>

    );

}

export default QuickActions;