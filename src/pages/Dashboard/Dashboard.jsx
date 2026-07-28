import { useEffect, useState } from "react";

import API from "../../services/api";

import DashboardHeader from "./components/DashboardHeader";
import DashboardStats from "./components/DashboardStats";
import QuickActions from "./components/QuickActions";
import RecentActivity from "./components/RecentActivity";
import DashboardCharts from "./components/DashboardCharts";

function Dashboard() {

    const [stats, setStats] = useState({
        staff: 0,
        patients: 0,
        consultations: 0
    });

    const [recent, setRecent] = useState({
        staff: [],
        patients: [],
        consultations: []
    });

    useEffect(() => {

        loadDashboard();

    }, []);

    async function loadDashboard() {

        try {

            const statsResponse = await API.get(
                "/dashboard/stats"
            );

            const recentResponse = await API.get(
                "/dashboard/recent"
            );

            setStats(
                statsResponse.data
            );

            setRecent(
                recentResponse.data
            );

        }

        catch (error) {

            console.error(
                "Dashboard Error:",
                error
            );

        }

    }

    return (

        <div className="space-y-10">

            <DashboardHeader />

            <DashboardStats
                stats={stats}
            />

            <QuickActions />

            <RecentActivity
                recent={recent}
            />

            <DashboardCharts />

        </div>

    );

}

export default Dashboard;