import React from "react";

function StatCard({
    title,
    value,
    icon,
    color = "bg-blue-500"
}) {

    return (

        <div className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

            {/* Decorative Background */}
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gray-100 opacity-40 transition-all duration-300 group-hover:scale-125"></div>

            {/* Top Section */}
            <div className="relative flex items-start justify-between">

                <div>

                    <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">

                        {title}

                    </p>

                    <h2 className="mt-4 text-5xl font-bold text-gray-800">

                        {value}

                    </h2>

                    <p className="mt-2 text-sm text-gray-400">

                        Current records

                    </p>

                </div>

                <div
                    className={`flex h-16 w-16 items-center justify-center rounded-2xl text-white shadow-lg ${color}`}
                >

                    {icon}

                </div>

            </div>

            {/* Bottom Accent */}
            <div className="mt-8 h-1 w-full rounded-full bg-gray-100">

                <div
                    className={`h-1 rounded-full transition-all duration-500 group-hover:w-full ${color}`}
                    style={{ width: "65%" }}
                ></div>

            </div>

        </div>

    );

}

export default StatCard;