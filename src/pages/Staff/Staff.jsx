import { useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";

import API from "../../services/api";

import StaffForm from "./components/StaffForm";
import StaffTable from "./components/StaffTable";

import Pagination from "../../components/Pagination/Pagination";
import DeleteModal from "../../components/Modal/DeleteModal";

import { useAuth } from "../../auth/AuthContext";

function Staff() {

    const { user } = useAuth();

    // FIX: Accept both "Admin" and "admin"
    const isAdmin = user?.role?.toLowerCase() === "admin";

    const [staff, setStaff] = useState([]);
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const recordsPerPage = 10;

    const [form, setForm] = useState({
        firstname: "",
        lastname: "",
        position: "",
        contact_number: ""
    });

    const [editID, setEditID] = useState(null);

    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [selectedStaffID, setSelectedStaffID] = useState(null);

    useEffect(() => {
        loadStaff();
    }, []);

    async function loadStaff() {
        try {
            const response = await API.get("/staff/");
            setStaff(response.data);
        }
        catch (error) {
            console.error(error);
            toast.error("Failed to load staff.");
        }
    }

    function handleChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    async function saveStaff(e) {
        e.preventDefault();

        try {

            if (editID) {

                await API.put(`/staff/${editID}`, form);

                toast.success("Staff updated successfully!");

            } else {

                await API.post("/staff/", form);

                toast.success("Staff added successfully!");

            }

            setForm({
                firstname: "",
                lastname: "",
                position: "",
                contact_number: ""
            });

            setEditID(null);

            loadStaff();

        }
        catch (error) {

            console.error(error);

            if (error.response) {
                toast.error(error.response.data.detail || "Failed to save staff.");
            } else {
                toast.error("Failed to save staff.");
            }
        }
    }

    function openDeleteModal(id) {
        setSelectedStaffID(id);
        setShowDeleteModal(true);
    }

    function closeDeleteModal() {
        setSelectedStaffID(null);
        setShowDeleteModal(false);
    }

    async function confirmDelete() {

        try {

            await API.delete(`/staff/${selectedStaffID}`);

            toast.success("Staff deleted successfully.");

            closeDeleteModal();

            loadStaff();

        }
        catch (error) {

            console.error(error);

            toast.error("Failed to delete staff.");
        }
    }

    function editStaff(data) {

        setForm({

            firstname: data.firstname,
            lastname: data.lastname,
            position: data.position,
            contact_number: data.contact_number

        });

        setEditID(data.staff_id);
    }

    const filteredStaff = useMemo(() => {

        return staff.filter((item) => {

            const keyword = search.toLowerCase();

            return (

                String(item.staff_id).includes(keyword) ||

                item.firstname.toLowerCase().includes(keyword) ||

                item.lastname.toLowerCase().includes(keyword)

            );

        });

    }, [staff, search]);

    const totalPages = Math.ceil(filteredStaff.length / recordsPerPage);

    const paginatedStaff = filteredStaff.slice(

        (currentPage - 1) * recordsPerPage,

        currentPage * recordsPerPage

    );

    useEffect(() => {
        setCurrentPage(1);
    }, [search]);

    return (

        <>

            <div className="space-y-8">

                <div>

                    <h1 className="text-4xl font-bold text-gray-800">

                        Staff Management

                    </h1>

                    <p className="mt-2 text-gray-500">

                        Manage all barangay health center staff.

                    </p>

                </div>

                {isAdmin && (

                    <StaffForm

                        form={form}

                        handleChange={handleChange}

                        saveStaff={saveStaff}

                        editID={editID}

                    />

                )}

                <div className="rounded-2xl bg-white p-6 shadow">

                    <input

                        type="text"

                        placeholder="🔍 Search by Staff ID or Name..."

                        value={search}

                        onChange={(e) => setSearch(e.target.value)}

                        className="w-full rounded-lg border border-gray-300 p-3"

                    />

                </div>

                <StaffTable

                    staff={paginatedStaff}

                    editStaff={isAdmin ? editStaff : null}

                    deleteStaff={isAdmin ? openDeleteModal : null}

                    isAdmin={isAdmin}

                />

                <Pagination

                    currentPage={currentPage}

                    totalPages={totalPages}

                    onPageChange={setCurrentPage}

                />

            </div>

            {isAdmin && (

                <DeleteModal

                    isOpen={showDeleteModal}

                    title="Delete Staff"

                    message="Are you sure you want to delete this staff member?"

                    onCancel={closeDeleteModal}

                    onConfirm={confirmDelete}

                />

            )}

        </>

    );

}

export default Staff;