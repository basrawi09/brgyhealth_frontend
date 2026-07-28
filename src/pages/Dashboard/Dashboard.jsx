import { useEffect, useState } from "react";

import API from "../../services/api";

import DashboardHeader from "./components/DashboardHeader";
import DashboardStats from "./components/DashboardStats";
import QuickActions from "./components/QuickActions";
import RecentActivity from "./components/RecentActivity";
import DashboardCharts from "./components/DashboardCharts";
import TodaySchedule from "./components/TodaySchedule";

import { RefreshCw } from "lucide-react";

function Dashboard() {

    const [stats, setStats] = useState({
        staff: 0,
        patients: 0,
        consultations: 0,
        users: 0
    });

    const [recent, setRecent] = useState({
        staff: [],
        patients: [],
        consultations: []
    });

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        loadDashboard();

    }, []);

    async function loadDashboard() {

        try {

            setLoading(true);

            const [statsResponse, recentResponse] = await Promise.all([

                API.get("/dashboard/stats"),

                API.get("/dashboard/recent")

            ]);

            setStats(statsResponse.data);

            setRecent(recentResponse.data);

        }

        catch (error) {

            console.error("Dashboard Error:", error);

        }

        finally {

            setLoading(false);

        }

    }

    return (

        <div className="space-y-10">

            <div className="flex items-center justify-between">

                <DashboardHeader />

                <button
                    onClick={loadDashboard}
                    className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
                >

                    <RefreshCw size={18} />

                    Refresh

                </button>

            </div>

            {

                loading ?

                    (

                        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

                            {

                                [...Array(4)].map((_, index) => (

                                    <div
                                        key={index}
                                        className="h-44 animate-pulse rounded-3xl bg-gray-200"
                                    />

                                ))

                            }

                        </div>

                    )

                    :

                    (

                        <>

                            <DashboardStats
                                stats={stats}
                            />

                            <QuickActions />

                            {/* NEW */}
                            <TodaySchedule />

                            <RecentActivity
                                recent={recent}
                            />

                            <DashboardCharts />

                        </>

                    )

            }

        </div>

    );

}

export default Dashboard;