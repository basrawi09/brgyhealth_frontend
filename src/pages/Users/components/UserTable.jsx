import Card from "../../../components/Card/Card";
import TableContainer from "../../../components/Table/TableContainer";

import EditButton from "../../../components/Button/EditButton";
import DeleteButton from "../../../components/Button/DeleteButton";

import EmptyState from "../../../components/EmptyState/EmptyState";

import ToggleButton from "../../../components/Button/ToggleButton";

function UserTable({

    users,

    editUser,

    deleteUser,

    toggleUser

}) {

    return (

        <Card title="User Accounts">

            <TableContainer>

                <thead className="bg-blue-600 text-white">

                    <tr>

                        <th className="px-6 py-4 text-left">
                            ID
                        </th>

                        <th className="px-6 py-4 text-left">
                            Username
                        </th>

                        <th className="px-6 py-4 text-left">
                            Role
                        </th>

                        <th className="px-6 py-4 text-left">
                            Staff ID
                        </th>

                        <th className="px-6 py-4 text-left">
                            Status
                        </th>

                        <th className="px-6 py-4 text-center">
                            Actions
                        </th>

                    </tr>

                </thead>

                <tbody>

                    {users.length === 0 ? (

                        <tr>

                            <td colSpan="6">

                                <EmptyState
                                    message="No users found."
                                />

                            </td>

                        </tr>

                    ) : (

                        users.map((user) => (

                            <tr

                                key={user.user_id}

                                className="border-b transition hover:bg-gray-50"

                            >

                                <td className="px-6 py-4">

                                    {user.user_id}

                                </td>

                                <td className="px-6 py-4">

                                    {user.username}

                                </td>

                                <td className="px-6 py-4">

                                    <span

                                        className={`rounded-full px-3 py-1 text-xs font-semibold

                                        ${

                                            user.role === "ADMIN"

                                                ? "bg-red-100 text-red-700"

                                                : "bg-blue-100 text-blue-700"

                                        }`}

                                    >

                                        {user.role}

                                    </span>

                                </td>

                                <td className="px-6 py-4">

                                    {user.staff_id}

                                </td>

                                <td className="px-6 py-4">

                                    <span

                                        className={`rounded-full px-3 py-1 text-xs font-semibold

                                        ${

                                            user.is_active

                                                ? "bg-green-100 text-green-700"

                                                : "bg-gray-200 text-gray-700"

                                        }`}

                                    >

                                        {

                                            user.is_active

                                                ? "Active"

                                                : "Inactive"

                                        }

                                    </span>

                                </td>

                                <td className="px-6 py-4">

                            <div className="flex justify-center gap-2">

                            <EditButton
                                 onClick={() => editUser(user)}
                              />

                               <ToggleButton

                                       active={user.is_active}

                                     onClick={() =>

                                      toggleUser(user.user_id)

                                }

    />

    <DeleteButton
        onClick={() =>
            deleteUser(user.user_id)
        }
    />

</div>

                                </td>

                            </tr>

                        ))

                    )}

                </tbody>

            </TableContainer>

        </Card>

    );

}

export default UserTable;