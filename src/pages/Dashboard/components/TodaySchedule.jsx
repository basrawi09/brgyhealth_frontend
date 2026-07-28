import { useEffect, useState } from "react";

import API from "../../../services/api";

import {
    Clock3,
    CalendarDays
} from "lucide-react";

function TodaySchedule() {

    const [schedule, setSchedule] = useState([]);

    useEffect(() => {

        loadSchedule();

    }, []);

    async function loadSchedule() {

        try {

            const response = await API.get(
                "/dashboard/today-schedule"
            );

            setSchedule(response.data);

        }

        catch (error) {

            console.error(error);

        }

    }

    function formatTime(time) {

        if (!time) return "";

        return new Date(`1970-01-01T${time}`)
            .toLocaleTimeString([], {
                hour: "numeric",
                minute: "2-digit"
            });

    }

    function getStatus(time) {

        const now = new Date();

        const currentMinutes =
            now.getHours() * 60 +
            now.getMinutes();

        const appointment = new Date(
            `1970-01-01T${time}`
        );

        const appointmentMinutes =
            appointment.getHours() * 60 +
            appointment.getMinutes();

        if (appointmentMinutes > currentMinutes) {

            return {
                label: "Upcoming",
                color: "bg-green-100 text-green-700"
            };

        }

        if (
            Math.abs(
                appointmentMinutes -
                currentMinutes
            ) <= 30
        ) {

            return {
                label: "Ongoing",
                color: "bg-blue-100 text-blue-700"
            };

        }

        return {
            label: "Completed",
            color: "bg-gray-200 text-gray-700"
        };

    }

    return (

        <div className="rounded-2xl bg-white p-6 shadow-md">

            <div className="mb-6 flex items-center justify-between">

                <div className="flex items-center gap-3">

                    <CalendarDays
                        className="text-blue-600"
                        size={30}
                    />

                    <div>

                        <h2 className="text-2xl font-bold">

                            Today's Schedule

                        </h2>

                        <p className="text-sm text-gray-500">

                            {schedule.length} appointments today

                        </p>

                    </div>

                </div>

            </div>

            {

                schedule.length === 0 ?

                    (

                        <div className="rounded-xl border border-dashed border-gray-300 p-10 text-center text-gray-500">

                            No consultations scheduled today.

                        </div>

                    )

                    :

                    (

                        <div className="space-y-4">

                            {

                                schedule.map((item) => {

                                    const status =
                                        getStatus(item.time);

                                    return (

                                        <div

                                            key={item.consultation_id}

                                            className="rounded-xl border border-gray-200 p-5 transition hover:border-blue-500 hover:shadow-lg"

                                        >

                                            <div className="flex items-center justify-between">

                                                <div className="flex items-center gap-2">

                                                    <Clock3
                                                        size={18}
                                                        className="text-blue-600"
                                                    />

                                                    <span className="font-bold">

                                                        {

                                                            formatTime(item.time)

                                                        }

                                                    </span>

                                                </div>

                                                <span
                                                    className={`rounded-full px-3 py-1 text-xs font-semibold ${status.color}`}
                                                >

                                                    {status.label}

                                                </span>

                                            </div>

                                            <h3 className="mt-4 text-lg font-bold text-gray-800">

                                                {item.patient}

                                            </h3>

                                            <p className="mt-1 text-gray-600">

                                                {item.diagnosis}

                                            </p>

                                        </div>

                                    );

                                })

                            }

                        </div>

                    )

            }

        </div>

    );

}

export default TodaySchedule;