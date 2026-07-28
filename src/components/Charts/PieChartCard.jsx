import {
    ResponsiveContainer,
    PieChart,
    Pie,
    Tooltip,
    Cell,
    Legend
} from "recharts";

const COLORS = [
    "#2563eb",
    "#16a34a",
    "#dc2626",
    "#f59e0b",
    "#9333ea",
    "#0891b2"
];

function PieChartCard({ data }) {

    return (

        <div className="rounded-2xl bg-white p-6 shadow">

            <h2 className="mb-6 text-2xl font-bold text-gray-800">

                Staff Position Distribution

            </h2>

            <ResponsiveContainer
                width="100%"
                height={320}
            >

                <PieChart>

                    <Pie
                        data={data}
                        dataKey="count"
                        nameKey="position"
                        outerRadius={100}
                        label
                    >

                        {

                            data.map((entry, index) => (

                                <Cell
                                    key={index}
                                    fill={
                                        COLORS[
                                            index % COLORS.length
                                        ]
                                    }
                                />

                            ))

                        }

                    </Pie>

                    <Tooltip />

                    <Legend />

                </PieChart>

            </ResponsiveContainer>

        </div>

    );

}

export default PieChartCard;