import { useEffect, useState } from "react";

import API from "../../../services/api";

import {
    ChartColumn,
    PieChart,
    Activity,
    CalendarDays,
    HeartPulse
} from "lucide-react";

import WeeklyConsultationChart from "../../../components/Charts/WeeklyConsultationChart";
import TopDiagnosisChart from "../../../components/Charts/TopDiagnosisChart";
import BarChartCard from "../../../components/Charts/BarChartCard";
import PieChartCard from "../../../components/Charts/PieChartCard";

function DashboardCharts() {

    const [consultationData, setConsultationData] = useState([]);

    const [staffPositionData, setStaffPositionData] = useState([]);

    useEffect(() => {

        loadCharts();

    }, []);

    async function loadCharts() {

        try {

            const consultationResponse = await API.get(
                "/dashboard/consultations-per-patient"
            );

            const staffResponse = await API.get(
                "/dashboard/staff-position-distribution"
            );

            setConsultationData(
                consultationResponse.data
            );

            setStaffPositionData(
                staffResponse.data
            );

        }

        catch (error) {

            console.error(
                "Dashboard Charts Error:",
                error
            );

        }

    }

    return (

        <div className="space-y-6">

            <div>

                <h2 className="text-3xl font-bold text-gray-800">

                    Dashboard Analytics

                </h2>

                <p className="mt-2 text-gray-500">

                    Visual overview of consultations, patient trends, staff distribution, and diagnosis statistics.

                </p>

            </div>

            {/* Weekly Consultation */}

            <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-lg">

                <div className="flex items-center gap-3 border-b bg-gradient-to-r from-emerald-500 to-teal-600 p-5 text-white">

                    <CalendarDays size={28} />

                    <div>

                        <h3 className="text-xl font-bold">

                            Weekly Consultation Analytics

                        </h3>

                        <p className="text-sm text-emerald-100">

                            Number of consultations from Monday to Sunday.

                        </p>

                    </div>

                </div>

                <div className="p-6">

                    <WeeklyConsultationChart />

                </div>

            </div>

            {/* Patient / Staff */}

            <div className="grid gap-6 xl:grid-cols-2">

                <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-lg">

                    <div className="flex items-center gap-3 border-b bg-gradient-to-r from-blue-500 to-cyan-500 p-5 text-white">

                        <ChartColumn size={28} />

                        <div>

                            <h3 className="text-xl font-bold">

                                Consultations per Patient

                            </h3>

                            <p className="text-sm text-blue-100">

                                Number of consultations recorded for every patient.

                            </p>

                        </div>

                    </div>

                    <div className="p-6">

                        <BarChartCard
                            data={consultationData}
                        />

                    </div>

                </div>

                <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-lg">

                    <div className="flex items-center gap-3 border-b bg-gradient-to-r from-purple-500 to-pink-500 p-5 text-white">

                        <PieChart size={28} />

                        <div>

                            <h3 className="text-xl font-bold">

                                Staff Position Distribution

                            </h3>

                            <p className="text-sm text-purple-100">

                                Distribution of personnel according to position.

                            </p>

                        </div>

                    </div>

                    <div className="p-6">

                        <PieChartCard
                            data={staffPositionData}
                        />

                    </div>

                </div>

            </div>

            {/* Top Diagnosis */}

            <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-lg">

                <div className="flex items-center gap-3 border-b bg-gradient-to-r from-red-500 to-orange-500 p-5 text-white">

                    <HeartPulse size={28} />

                    <div>

                        <h3 className="text-xl font-bold">

                            Top 5 Most Common Diagnoses

                        </h3>

                        <p className="text-sm text-red-100">

                            Most frequently recorded diagnoses based on consultation history.

                        </p>

                    </div>

                </div>

                <div className="p-6">

                    <TopDiagnosisChart />

                </div>

            </div>

            {/* Summary */}

            <div className="rounded-3xl border border-blue-100 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-700 p-8 text-white shadow-xl">

                <div className="flex items-center gap-4">

                    <div className="rounded-2xl bg-white/20 p-4">

                        <Activity size={34} />

                    </div>

                    <div>

                        <h3 className="text-2xl font-bold">

                            Dashboard Summary

                        </h3>

                        <p className="mt-2 text-cyan-100">

                            Monitor patient records, consultation schedules,
                            weekly consultation trends, diagnosis statistics,
                            and staff distribution through a centralized
                            analytics dashboard.

                        </p>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default DashboardCharts;