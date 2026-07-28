import {
    UserCog,
    UserRound,
    Stethoscope,
    CalendarDays
} from "lucide-react";

function RecentActivity({ recent }) {

    return (

        <div className="space-y-6">

            <div>

                <h2 className="text-3xl font-bold text-gray-800">

                    Recent Activity

                </h2>

                <p className="mt-2 text-gray-500">

                    Latest updates across your Barangay Health Center.

                </p>

            </div>

            <div className="grid gap-6 xl:grid-cols-3">

                {/* ================= STAFF ================= */}

                <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-md">

                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-5 text-white">

                        <div className="flex items-center gap-3">

                            <UserCog size={28} />

                            <div>

                                <h3 className="text-xl font-bold">

                                    Staff Members

                                </h3>

                                <p className="text-sm text-blue-100">

                                    Recently registered personnel

                                </p>

                            </div>

                        </div>

                    </div>

                    <div className="divide-y">

                        {

                            recent.staff.length === 0 ?

                                (

                                    <p className="p-6 text-center text-gray-500">

                                        No recent staff.

                                    </p>

                                )

                                :

                                recent.staff.map((staff) => (

                                    <div
                                        key={staff.staff_id}
                                        className="flex items-center gap-4 p-5 transition hover:bg-gray-50"
                                    >

                                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">

                                            <UserCog
                                                size={22}
                                                className="text-blue-600"
                                            />

                                        </div>

                                        <div className="flex-1">

                                            <p className="font-semibold text-gray-800">

                                                {staff.firstname} {staff.lastname}

                                            </p>

                                            <p className="text-sm text-gray-500">

                                                {staff.position}

                                            </p>

                                        </div>

                                    </div>

                                ))

                        }

                    </div>

                </div>

                {/* ================= PATIENT ================= */}

                <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-md">

                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-5 text-white">

                        <div className="flex items-center gap-3">

                            <UserRound size={28} />

                            <div>

                                <h3 className="text-xl font-bold">

                                    Patients

                                </h3>

                                <p className="text-sm text-green-100">

                                    Recently registered patients

                                </p>

                            </div>

                        </div>

                    </div>

                    <div className="divide-y">

                        {

                            recent.patients.length === 0 ?

                                (

                                    <p className="p-6 text-center text-gray-500">

                                        No recent patients.

                                    </p>

                                )

                                :

                                recent.patients.map((patient) => (

                                    <div
                                        key={patient.patient_id}
                                        className="flex items-center gap-4 p-5 transition hover:bg-gray-50"
                                    >

                                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">

                                            <UserRound
                                                size={22}
                                                className="text-green-600"
                                            />

                                        </div>

                                        <div className="flex-1">

                                            <p className="font-semibold text-gray-800">

                                                {patient.firstname} {patient.lastname}

                                            </p>

                                            <p className="text-sm text-gray-500">

                                                Age {patient.age}

                                            </p>

                                        </div>

                                    </div>

                                ))

                        }

                    </div>

                </div>

                {/* ================= CONSULTATION ================= */}

                <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-md">

                    <div className="bg-gradient-to-r from-red-500 to-pink-500 p-5 text-white">

                        <div className="flex items-center gap-3">

                            <Stethoscope size={28} />

                            <div>

                                <h3 className="text-xl font-bold">

                                    Consultations

                                </h3>

                                <p className="text-sm text-red-100">

                                    Latest consultation records

                                </p>

                            </div>

                        </div>

                    </div>

                    <div className="divide-y">

                        {

                            recent.consultations.length === 0 ?

                                (

                                    <p className="p-6 text-center text-gray-500">

                                        No recent consultations.

                                    </p>

                                )

                                :

                                recent.consultations.map((consultation) => (

                                    <div
                                        key={consultation.consultation_id}
                                        className="p-5 transition hover:bg-gray-50"
                                    >

                                        <div className="flex items-center justify-between">

                                            <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-600">

                                                Patient #{consultation.patient_id}

                                            </span>

                                        </div>

                                        <p className="mt-3 font-semibold text-gray-800">

                                            {consultation.diagnosis}

                                        </p>

                                        <div className="mt-3 flex items-center gap-2 text-sm text-gray-500">

                                            <CalendarDays size={16} />

                                            {consultation.consultation_date}

                                        </div>

                                    </div>

                                ))

                        }

                    </div>

                </div>

            </div>

        </div>

    );

}

export default RecentActivity;