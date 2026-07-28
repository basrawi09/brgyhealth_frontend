import { useEffect, useState } from "react";

import API from "../../../services/api";

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

        <div className="grid gap-6 xl:grid-cols-2">

            <BarChartCard
                data={consultationData}
            />

            <PieChartCard
                data={staffPositionData}
            />

        </div>

    );

}

export default DashboardCharts;