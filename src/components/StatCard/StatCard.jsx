import React from "react";

function StatCard({
    title,
    value,
    icon,
    color = "bg-blue-100 text-blue-600"
}) {
    return (
        <div className="rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="flex items-center justify-between">

                <div>
                    <p className="text-sm font-medium text-gray-500">
                        {title}
                    </p>

                    <h2 className="mt-2 text-4xl font-bold text-gray-800">
                        {value}
                    </h2>
                </div>

                <div
                    className={`flex h-16 w-16 items-center justify-center rounded-full ${color}`}
                >
                    {icon}
                </div>

            </div>
        </div>
    );
}

export default StatCard;