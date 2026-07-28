function RecentActivity({ recent }) {

    return (

        <div className="grid gap-6 lg:grid-cols-3">

            {/* Recent Staff */}

            <div className="rounded-2xl bg-white p-6 shadow-md">

                <h2 className="mb-4 text-xl font-bold text-blue-600">

                    Recent Staff

                </h2>

                {

                    recent.staff.length === 0 ?

                        (

                            <p className="text-gray-500">

                                No recent staff found.

                            </p>

                        )

                        :

                        (

                            <ul className="space-y-3">

                                {

                                    recent.staff.map((staff) => (

                                        <li
                                            key={staff.staff_id}
                                            className="rounded-lg bg-gray-50 p-3 transition hover:bg-gray-100"
                                        >

                                            <p className="font-semibold">

                                                {staff.firstname} {staff.lastname}

                                            </p>

                                            <p className="text-sm text-gray-500">

                                                {staff.position}

                                            </p>

                                        </li>

                                    ))

                                }

                            </ul>

                        )

                }

            </div>

            {/* Recent Patients */}

            <div className="rounded-2xl bg-white p-6 shadow-md">

                <h2 className="mb-4 text-xl font-bold text-green-600">

                    Recent Patients

                </h2>

                {

                    recent.patients.length === 0 ?

                        (

                            <p className="text-gray-500">

                                No recent patients found.

                            </p>

                        )

                        :

                        (

                            <ul className="space-y-3">

                                {

                                    recent.patients.map((patient) => (

                                        <li
                                            key={patient.patient_id}
                                            className="rounded-lg bg-gray-50 p-3 transition hover:bg-gray-100"
                                        >

                                            <p className="font-semibold">

                                                {patient.firstname} {patient.lastname}

                                            </p>

                                            <p className="text-sm text-gray-500">

                                                Age: {patient.age}

                                            </p>

                                        </li>

                                    ))

                                }

                            </ul>

                        )

                }

            </div>

            {/* Recent Consultations */}

            <div className="rounded-2xl bg-white p-6 shadow-md">

                <h2 className="mb-4 text-xl font-bold text-red-600">

                    Recent Consultations

                </h2>

                {

                    recent.consultations.length === 0 ?

                        (

                            <p className="text-gray-500">

                                No recent consultations found.

                            </p>

                        )

                        :

                        (

                            <ul className="space-y-3">

                                {

                                    recent.consultations.map((consultation) => (

                                        <li
                                            key={consultation.consultation_id}
                                            className="rounded-lg bg-gray-50 p-3 transition hover:bg-gray-100"
                                        >

                                            <p className="font-semibold">

                                                {consultation.diagnosis}

                                            </p>

                                            <p className="text-sm text-gray-500">

                                                Patient ID: {consultation.patient_id}

                                            </p>

                                            <p className="text-xs text-gray-400">

                                                {consultation.consultation_date}

                                            </p>

                                        </li>

                                    ))

                                }

                            </ul>

                        )

                }

            </div>

        </div>

    );

}

export default RecentActivity;