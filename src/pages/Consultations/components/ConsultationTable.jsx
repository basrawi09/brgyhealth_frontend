import Card from "../../../components/Card/Card";
import TableContainer from "../../../components/Table/TableContainer";

import EditButton from "../../../components/Button/EditButton";
import DeleteButton from "../../../components/Button/DeleteButton";

import EmptyState from "../../../components/EmptyState/EmptyState";

function ConsultationTable({

    consultations,

    editConsultation,

    deleteConsultation

}) {

    return (

        <Card title="Consultation Schedule">

            <TableContainer>

                <thead className="bg-blue-600 text-white">

                    <tr>

                        <th className="px-6 py-4 text-left">

                            ID

                        </th>

                        <th className="px-6 py-4 text-left">

                            Patient

                        </th>

                        <th className="px-6 py-4 text-left">

                            Diagnosis

                        </th>

                        <th className="px-6 py-4 text-left">

                            Medicine

                        </th>

                        <th className="px-6 py-4 text-left">

                            Date

                        </th>

                        <th className="px-6 py-4 text-left">

                            Time

                        </th>

                        <th className="px-6 py-4 text-center">

                            Actions

                        </th>

                    </tr>

                </thead>

                <tbody>

                    {

                        consultations.length === 0 ? (

                            <tr>

                                <td colSpan="7">

                                    <EmptyState

                                        message="No consultations found."

                                    />

                                </td>

                            </tr>

                        )

                        :

                        consultations.map((item) => (

                            <tr

                                key={item.consultation_id}

                                className="border-b transition hover:bg-blue-50"

                            >

                                <td className="px-6 py-4">

                                    {item.consultation_id}

                                </td>

                                <td className="px-6 py-4 font-semibold">

                                    {item.patient.firstname} {item.patient.lastname}

                                </td>

                                <td className="px-6 py-4">

                                    {item.diagnosis}

                                </td>

                                <td className="px-6 py-4">

                                    {item.medicine}

                                </td>

                                <td className="px-6 py-4">

                                    {item.consultation_date}

                                </td>

                                <td className="px-6 py-4">

                                    <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">

                                        {item.consultation_time}
                                    </span>

                                </td>

                                <td className="px-6 py-4">

                                    <div className="flex justify-center gap-2">

                                        <EditButton

                                            onClick={() =>

                                                editConsultation(item)

                                            }

                                        />

                                        <DeleteButton

                                            onClick={() =>

                                                deleteConsultation(

                                                    item.consultation_id

                                                )

                                            }

                                        />

                                    </div>

                                </td>

                            </tr>

                        ))

                    }

                </tbody>

            </TableContainer>

        </Card>

    );

}

export default ConsultationTable;