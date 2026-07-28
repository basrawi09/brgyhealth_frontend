import {
    Users,
    UserRound,
    Stethoscope,
    ShieldCheck
} from "lucide-react";

import StatCard from "../../../components/StatCard/StatCard";

function DashboardStats({ stats }) {

    return (

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

            <StatCard
                title="Total Staff"
                value={stats.staff}
                icon={<Users size={30} />}
                color="bg-blue-100 text-blue-600"
            />

            <StatCard
                title="Total Patients"
                value={stats.patients}
                icon={<UserRound size={30} />}
                color="bg-green-100 text-green-600"
            />

            <StatCard
                title="Total Consultations"
                value={stats.consultations}
                icon={<Stethoscope size={30} />}
                color="bg-red-100 text-red-600"
            />

        </div>

    );

}

export default DashboardStats;