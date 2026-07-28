import { useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";

import API from "../../services/api";

import UserForm from "./components/UserForm";
import UserTable from "./components/UserTable";

import Pagination from "../../components/Pagination/Pagination";
import DeleteModal from "../../components/Modal/DeleteModal";

function Users() {

    const [users, setUsers] = useState([]);

    const [search, setSearch] = useState("");

    const [currentPage, setCurrentPage] = useState(1);

    const recordsPerPage = 10;

    const [form, setForm] = useState({

        username: "",

        password: "",

        role: "staff",

        staff_id: ""

    });

    const [editID, setEditID] = useState(null);

    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const [selectedUserID, setSelectedUserID] = useState(null);

    useEffect(() => {

        loadUsers();

    }, []);

    async function loadUsers() {

        try {

            const response = await API.get("/users/");

            setUsers(response.data);

        }

        catch (error) {

            toast.error("Failed to load users.");

        }

    }

    function handleChange(e) {

        setForm({

            ...form,

            [e.target.name]: e.target.value

        });

    }

    async function saveUser(e) {

        e.preventDefault();

        try {

            if (editID) {

                await API.put(

                    `/users/${editID}`,

                    {

                        username: form.username,

                        role: form.role,

                        is_active: true

                    }

                );

                toast.success("User updated.");

            }

            else {

                await API.post(

                    "/users/",

                    {

                        username: form.username,

                        password: form.password,

                        role: form.role,

                        staff_id: Number(form.staff_id)

                    }

                );

                toast.success("User created.");

            }

            setForm({

                username: "",

                password: "",

                role: "staff",

                staff_id: ""

            });

            setEditID(null);

            loadUsers();

        }

        catch {

            toast.error("Unable to save user.");

        }

    }

    function editUser(user) {

        setEditID(user.user_id);

        setForm({

            username: user.username,

            password: "",

            role: user.role,

            staff_id: user.staff_id

        });

    }

    function openDeleteModal(id) {

        setSelectedUserID(id);

        setShowDeleteModal(true);

    }

    function closeDeleteModal() {

        setShowDeleteModal(false);

        setSelectedUserID(null);

    }

    async function confirmDelete() {

        try {

            await API.delete(

                `/users/${selectedUserID}`

            );

            toast.success("User deleted.");

            closeDeleteModal();

            loadUsers();

        }

        catch {

            toast.error("Delete failed.");

        }

    }

    async function toggleUser(id) {

    try {

        await API.patch(

            `/users/${id}/toggle`

        );

        toast.success(

            "User status updated."

        );

        loadUsers();

    }

    catch {

        toast.error(

            "Unable to update status."

        );

    }

}

    const filteredUsers = useMemo(() => {

        return users.filter((user) =>

            user.username
                .toLowerCase()
                .includes(search.toLowerCase())

        );

    }, [users, search]);

    const totalPages = Math.ceil(

        filteredUsers.length / recordsPerPage

    );

    const paginatedUsers = filteredUsers.slice(

        (currentPage - 1) * recordsPerPage,

        currentPage * recordsPerPage

    );

    return (

        <>

            <div className="space-y-8">

                <div>

                    <h1 className="text-4xl font-bold">

                        User Management

                    </h1>

                    <p className="text-gray-500">

                        Manage login accounts.

                    </p>

                </div>

                <UserForm

                    form={form}

                    handleChange={handleChange}

                    saveUser={saveUser}

                    editID={editID}

                />

                <input

                    type="text"

                    placeholder="Search username..."

                    value={search}

                    onChange={(e) =>

                        setSearch(e.target.value)

                    }

                    className="w-full rounded-lg border p-3"

                />

                <UserTable

                     users={paginatedUsers}

    editUser={editUser}

    deleteUser={openDeleteModal}

    toggleUser={toggleUser}

/>

                <Pagination

                    currentPage={currentPage}

                    totalPages={totalPages}

                    onPageChange={setCurrentPage}

                />

            </div>

            <DeleteModal

                isOpen={showDeleteModal}

                title="Delete User"

                message="Delete this user account?"

                onCancel={closeDeleteModal}

                onConfirm={confirmDelete}

            />

        </>

    );

}

export default Users;