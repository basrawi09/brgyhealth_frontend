import { Link } from "react-router-dom";

import {
    UserPlus,
    ClipboardPlus,
    HeartPulse,
    ArrowRight
} from "lucide-react";

function QuickActions() {

    const actions = [

        {
            title: "Register Staff",
            description:
                "Create a new staff profile for the Barangay Health Center.",
            icon: <UserPlus size={34} />,
            color: "from-blue-500 to-cyan-500",
            link: "/staff"
        },

        {
            title: "Register Patient",
            description:
                "Add a new patient and maintain complete health records.",
            icon: <ClipboardPlus size={34} />,
            color: "from-green-500 to-emerald-500",
            link: "/patients"
        },

        {
            title: "New Consultation",
            description:
                "Record today's consultation, diagnosis, and treatment.",
            icon: <HeartPulse size={34} />,
            color: "from-red-500 to-pink-500",
            link: "/consultations"
        }

    ];

    return (

        <div className="space-y-6">

            <div>

                <h2 className="text-3xl font-bold text-gray-800">

                    Quick Actions

                </h2>

                <p className="mt-2 text-gray-500">

                    Quickly access the most frequently used features.

                </p>

            </div>

            <div className="grid gap-6 lg:grid-cols-3">

                {

                    actions.map((action) => (

                        <Link
                            key={action.title}
                            to={action.link}
                            className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                        >

                            <div
                                className={`bg-gradient-to-r ${action.color} p-6 text-white`}
                            >

                                <div className="flex items-center justify-between">

                                    <div className="rounded-2xl bg-white/20 p-4">

                                        {action.icon}

                                    </div>

                                    <ArrowRight
                                        size={24}
                                        className="transition-transform duration-300 group-hover:translate-x-2"
                                    />

                                </div>

                            </div>

                            <div className="p-6">

                                <h3 className="text-xl font-bold text-gray-800">

                                    {action.title}

                                </h3>

                                <p className="mt-3 leading-relaxed text-gray-500">

                                    {action.description}

                                </p>

                                <div className="mt-6 flex items-center font-semibold text-blue-600">

                                    Open Module

                                    <ArrowRight
                                        size={18}
                                        className="ml-2 transition-transform duration-300 group-hover:translate-x-2"
                                    />

                                </div>

                            </div>

                        </Link>

                    ))

                }

            </div>

        </div>

    );

}

export default QuickActions;