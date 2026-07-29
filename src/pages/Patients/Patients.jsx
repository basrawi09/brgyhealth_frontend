import { useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";

import API from "../../services/api";

import PatientForm from "./components/PatientForm";
import PatientTable from "./components/PatientTable";

import Pagination from "../../components/Pagination/Pagination";
import DeleteModal from "../../components/Modal/DeleteModal";

import { useAuth } from "../../auth/AuthContext";

function Patients() {

    const { user } = useAuth();

    const isAdmin = user?.role === "admin";

    const [patients, setPatients] = useState([]);
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const recordsPerPage = 10;

    const [form, setForm] = useState({
        firstname: "",
        lastname: "",
        age: "",
        address: "",
        contact_number: "",
        staff_id: ""
    });

    const [editID, setEditID] = useState(null);

    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const [selectedPatientID, setSelectedPatientID] = useState(null);

    useEffect(() => {
        loadPatients();
    }, []);

    async function loadPatients() {

        try {

            const response = await API.get("/patient/");

            setPatients(response.data);

        } catch (error) {

            toast.error("Failed to load patients.");
            console.error(error);

        }

    }

    function handleChange(e) {

        setForm({
            ...form,
            [e.target.name]: e.target.value
        });

    }

    async function savePatient(e) {

        e.preventDefault();

        try {

            // ✅ staff_id is now included for BOTH create and update
            const payload = {

                firstname: form.firstname,
                lastname: form.lastname,
                age: Number(form.age),
                address: form.address,
                contact_number: form.contact_number,
                staff_id: Number(form.staff_id)

            };

            if (editID) {

                await API.put(
                    `/patient/${editID}`,
                    payload
                );

                toast.success("Patient updated successfully!");

            } else {

                await API.post(
                    "/patient/",
                    payload
                );

                toast.success("Patient added successfully!");

            }

            setForm({

                firstname: "",
                lastname: "",
                age: "",
                address: "",
                contact_number: "",
                staff_id: ""

            });

            setEditID(null);

            loadPatients();

        } catch (error) {

            console.error("Save Patient Error:", error.response?.data);

            toast.error(
                error.response?.data?.detail
                    ? JSON.stringify(error.response.data.detail)
                    : "Failed to save patient."
            );

        }

    }

    function openDeleteModal(id) {

        setSelectedPatientID(id);

        setShowDeleteModal(true);

    }

    function closeDeleteModal() {

        setSelectedPatientID(null);

        setShowDeleteModal(false);

    }

    async function confirmDelete() {

        if (!selectedPatientID) return;

        try {

            await API.delete(`/patient/${selectedPatientID}`);

            toast.success("Patient deleted successfully!");

            closeDeleteModal();

            loadPatients();

        } catch (error) {

            console.error(error.response?.data);

            toast.error("Failed to delete patient.");

        }

    }

    function editPatient(patient) {

        setForm({

            firstname: patient.firstname,
            lastname: patient.lastname,
            age: patient.age,
            address: patient.address,
            contact_number: patient.contact_number,
            staff_id: patient.staff_id

        });

        setEditID(patient.patient_id);

    }

    const filteredPatients = useMemo(() => {

        return patients.filter((patient) => {

            const keyword = search.toLowerCase();

            return (

                String(patient.patient_id).includes(keyword) ||

                patient.firstname.toLowerCase().includes(keyword) ||

                patient.lastname.toLowerCase().includes(keyword) ||

                String(patient.staff_id).includes(keyword)

            );

        });

    }, [patients, search]);

    const totalPages = Math.ceil(filteredPatients.length / recordsPerPage);

    const paginatedPatients = filteredPatients.slice(

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

                        Patient Management

                    </h1>

                    <p className="mt-2 text-gray-500">

                        Manage all registered patients.

                    </p>

                </div>

                <PatientForm

                    form={form}
                    handleChange={handleChange}
                    savePatient={savePatient}
                    editID={editID}

                />

                <div className="rounded-2xl bg-white p-6 shadow">

                    <input

                        type="text"

                        placeholder="🔍 Search by Patient ID, Name, or Staff ID..."

                        value={search}

                        onChange={(e) => setSearch(e.target.value)}

                        className="w-full rounded-lg border border-gray-300 p-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"

                    />

                </div>

                <PatientTable

                    patients={paginatedPatients}
                    editPatient={editPatient}
                    deletePatient={isAdmin ? openDeleteModal : null}
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

                    title="Delete Patient"

                    message="Are you sure you want to delete this patient? This action cannot be undone."

                    onCancel={closeDeleteModal}

                    onConfirm={confirmDelete}

                />

            )}

        </>

    );

}

export default Patients;