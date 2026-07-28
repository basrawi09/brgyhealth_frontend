import Card from "../../../components/Card/Card";
import TableContainer from "../../../components/Table/TableContainer";

import EditButton from "../../../components/Button/EditButton";
import DeleteButton from "../../../components/Button/DeleteButton";

import EmptyState from "../../../components/EmptyState/EmptyState";

function StaffTable({

    staff,

    editStaff,

    deleteStaff,

    isAdmin

}) {

    return (

        <Card title="Staff List">

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
                            Position
                        </th>

                        <th className="px-6 py-4 text-left">
                            Contact Number
                        </th>

                        {isAdmin && (

                            <th className="px-6 py-4 text-center">
                                Actions
                            </th>

                        )}

                    </tr>

                </thead>

                <tbody>

                    {staff.length === 0 ? (

                        <tr>

                            <td
                                colSpan={isAdmin ? 6 : 5}
                            >

                                <EmptyState
                                    message="No staff found."
                                />

                            </td>

                        </tr>

                    ) : (

                        staff.map((item) => (

                            <tr

                                key={item.staff_id}

                                className="border-b hover:bg-gray-50"

                            >

                                <td className="px-6 py-4">

                                    {item.staff_id}

                                </td>

                                <td className="px-6 py-4">

                                    {item.firstname}

                                </td>

                                <td className="px-6 py-4">

                                    {item.lastname}

                                </td>

                                <td className="px-6 py-4">

                                    {item.position}

                                </td>

                                <td className="px-6 py-4">

                                    {item.contact_number}

                                </td>

                                {isAdmin && (

                                    <td className="px-6 py-4">

                                        <div className="flex justify-center gap-2">

                                            <EditButton

                                                onClick={() =>

                                                    editStaff(item)

                                                }

                                            />

                                            <DeleteButton

                                                onClick={() =>

                                                    deleteStaff(item.staff_id)

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

export default StaffTable;