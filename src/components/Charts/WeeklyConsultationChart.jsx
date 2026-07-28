import { useEffect, useState } from "react";

import API from "../../services/api";

import {
    ResponsiveContainer,
    BarChart,
    Bar,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip
} from "recharts";

function WeeklyConsultationChart() {

    const [data, setData] = useState([]);

    useEffect(() => {

        loadWeeklyData();

    }, []);

    async function loadWeeklyData() {

        try {

            const response = await API.get(
                "/dashboard/weekly-consultations"
            );

            setData(response.data);

        }

        catch (error) {

            console.error(
                "Weekly Consultation Chart Error:",
                error
            );

        }

    }

    return (

        <div className="rounded-2xl bg-white p-6 shadow-md">

            <h2 className="mb-6 text-2xl font-bold text-gray-800">

                Weekly Consultations

            </h2>

            <div className="h-80">

                <ResponsiveContainer
                    width="100%"
                    height="100%"
                >

                    <BarChart
                        data={data}
                    >

                        <CartesianGrid
                            strokeDasharray="3 3"
                        />

                        <XAxis
                            dataKey="day"
                        />

                        <YAxis
                            allowDecimals={false}
                        />

                        <Tooltip />

                        <Bar
                            dataKey="consultations"
                            radius={[8, 8, 0, 0]}
                            fill="#2563eb"
                        />

                    </BarChart>

                </ResponsiveContainer>

            </div>

        </div>

    );

}

export default WeeklyConsultationChart;