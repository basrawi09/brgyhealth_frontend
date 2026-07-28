import { useEffect, useState } from "react";

import {
    ResponsiveContainer,
    BarChart,
    Bar,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip
} from "recharts";

import API from "../../services/api";

function TopDiagnosisChart() {

    const [data, setData] = useState([]);

    useEffect(() => {

        loadData();

    }, []);

    async function loadData() {

        try {

            const response = await API.get(
                "/dashboard/top-diagnoses"
            );

            setData(response.data);

        }

        catch (error) {

            console.error(
                "Top Diagnosis Error:",
                error
            );

        }

    }

    return (

        <div className="rounded-2xl bg-white p-6 shadow">

            <h2 className="mb-6 text-2xl font-bold text-gray-800">

                Top 5 Most Common Diagnoses

            </h2>

            <ResponsiveContainer
                width="100%"
                height={320}
            >

                <BarChart
                    data={data}
                    layout="vertical"
                    margin={{
                        left: 20,
                        right: 20
                    }}
                >

                    <CartesianGrid
                        strokeDasharray="3 3"
                    />

                    <XAxis
                        type="number"
                        allowDecimals={false}
                    />

                    <YAxis
                        type="category"
                        dataKey="diagnosis"
                        width={130}
                    />

                    <Tooltip />

                    <Bar
                        dataKey="count"
                        fill="#16a34a"
                        radius={[0, 8, 8, 0]}
                    />

                </BarChart>

            </ResponsiveContainer>

        </div>

    );

}

export default TopDiagnosisChart;