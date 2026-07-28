import Card from "../../../components/Card/Card";
import TableContainer from "../../../components/Table/TableContainer";

import EditButton from "../../../components/Button/EditButton";
import DeleteButton from "../../../components/Button/DeleteButton";

import EmptyState from "../../../components/EmptyState/EmptyState";

function PatientTable({

    patients,

    editPatient,

    deletePatient,

    isAdmin

}) {

    return (

        <Card title="Patient List">

            <TableContainer>

                <thead className="bg-blue-600 text-white">

                    <tr>

                        <th className="px-6 py-4 text-left">
                            ID
                        </th>

                        <th className="px-6 py-4 text-left">
                            First Name
                        </th>

                        <th className="px-6 py-4 text-left">
                            Last Name
                        </th>

                        <th className="px-6 py-4 text-left">
                            Age
                        </th>

                        <th className="px-6 py-4 text-left">
                            Address
                        </th>

                        <th className="px-6 py-4 text-left">
                            Contact Number
                        </th>

                        <th className="px-6 py-4 text-left">
                            Staff ID
                        </th>

                        <th className="px-6 py-4 text-center">
                            Edit
                        </th>

                        {isAdmin && (

                            <th className="px-6 py-4 text-center">
                                Delete
                            </th>

                        )}

                    </tr>

                </thead>

                <tbody>

                    {patients.length === 0 ? (

                        <tr>

                            <td
                                colSpan={isAdmin ? 9 : 8}
                            >

                                <EmptyState
                                    message="No patients found."
                                />

                            </td>

                        </tr>

                    ) : (

                        patients.map((patient) => (

                            <tr

                                key={patient.patient_id}

                                className="border-b hover:bg-gray-50"

                            >

                                <td className="px-6 py-4">

                                    {patient.patient_id}

                                </td>

                                <td className="px-6 py-4">

                                    {patient.firstname}

                                </td>

                                <td className="px-6 py-4">

                                    {patient.lastname}

                                </td>

                                <td className="px-6 py-4">

                                    {patient.age}

                                </td>

                                <td className="px-6 py-4">

                                    {patient.address}

                                </td>

                                <td className="px-6 py-4">

                                    {patient.contact_number}

                                </td>

                                <td className="px-6 py-4">

                                    {patient.staff_id}

                                </td>

                                <td className="px-6 py-4">

                                    <div className="flex justify-center">

                                        <EditButton

                                            onClick={() =>

                                                editPatient(patient)

                                            }

                                        />

                                    </div>

                                </td>

                                {isAdmin && (

                                    <td className="px-6 py-4">

                                        <div className="flex justify-center">

                                            <DeleteButton

                                                onClick={() =>

                                                    deletePatient(patient.patient_id)

                                                }

                                            />

                                        </div>

                                    </td>

                                )}

                            </tr>

                        ))

                    )}

                </tbody>

            </TableContainer>

        </Card>

    );

}

export default PatientTable;