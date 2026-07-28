import { useEffect, useMemo, useState } from "react";

import API from "../../services/api";

import ConsultationForm from "./components/ConsultationForm";
import ConsultationTable from "./components/ConsultationTable";

import Pagination from "../../components/Pagination/Pagination";
import DeleteModal from "../../components/Modal/DeleteModal";

function Consultations() {

const [consultations, setConsultations] = useState([]);

const [patients, setPatients] = useState([]);

    const [search, setSearch] = useState("");

    const [currentPage, setCurrentPage] = useState(1);

    const recordsPerPage = 10;

    const [form, setForm] = useState({
        diagnosis: "",
        medicine: "",
        consultation_date: "",
        patient_id: ""
    });

    const [editID, setEditID] = useState(null);

    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const [selectedConsultationID, setSelectedConsultationID] = useState(null);

useEffect(() => {

    loadConsultations();

    async function loadPatients() {

    try {

        const response = await API.get("/patient/");

        setPatients(response.data);

    }

    catch (error) {

        console.error(error);

    }

}

    loadPatients();

}, []);

    async function loadConsultations() {

        try {

            const response = await API.get("/consultations/");

            setConsultations(response.data);

        }

        catch (error) {

            console.error(error);

        }

    }



    function handleChange(e) {

        setForm({

            ...form,

            [e.target.name]: e.target.value

        });

    }

    async function saveConsultation(e) {

        e.preventDefault();

        try {

            const payload = {

                diagnosis: form.diagnosis,

                medicine: form.medicine,

                consultation_date: form.consultation_date,

                patient_id: Number(form.patient_id)

            };

            if (editID) {

                await API.put(

                    `/consultations/${editID}`,

                    payload

                );

            }

            else {

                await API.post(

                    "/consultations/",

                    payload

                );

            }

            setForm({

                diagnosis: "",

                medicine: "",

                consultation_date: "",

                patient_id: ""

            });

            setEditID(null);

            loadConsultations();

        }

        catch (error) {

            console.error(error.response?.data || error);

        }

    }

    function openDeleteModal(id) {

        setSelectedConsultationID(id);

        setShowDeleteModal(true);

    }

    function closeDeleteModal() {

        setSelectedConsultationID(null);

        setShowDeleteModal(false);

    }

    async function confirmDelete() {

        if (!selectedConsultationID) return;

        try {

            await API.delete(`/consultations/${selectedConsultationID}`);

            closeDeleteModal();

            loadConsultations();

        }

        catch (error) {

            console.error(error);

        }

    }

    function editConsultation(item) {

        setForm({

            diagnosis: item.diagnosis,

            medicine: item.medicine,

            consultation_date: item.consultation_date,

            patient_id: item.patient_id

        });

        setEditID(item.consultation_id);

    }

    const filteredConsultations = useMemo(() => {

        return consultations.filter((item) => {

            const keyword = search.toLowerCase();

            return (

                String(item.consultation_id).includes(keyword) ||

                    item.patient.firstname.toLowerCase().includes(keyword) ||

                    item.patient.lastname.toLowerCase().includes(keyword) ||

                    item.diagnosis.toLowerCase().includes(keyword) ||

                    item.medicine.toLowerCase().includes(keyword) ||

                    item.consultation_date.includes(keyword)

            );

        });

    }, [consultations, search]);

    const totalPages = Math.ceil(

        filteredConsultations.length / recordsPerPage

    );

    const paginatedConsultations = filteredConsultations.slice(

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

                        Consultation Management

                    </h1>

                    <p className="mt-2 text-gray-500">

                        Manage patient consultations.

                    </p>

                </div>

                <ConsultationForm

                    form={form}

                    handleChange={handleChange}

                    saveConsultation={saveConsultation}

                    editID={editID}

                    patients={patients}

                />

                <div className="rounded-2xl bg-white p-6 shadow">

                    <input

                        type="text"

                        placeholder="🔍 Search by Patient, Diagnosis, Medicine or Date..."

                        value={search}

                        onChange={(e) => setSearch(e.target.value)}

                        className="w-full rounded-lg border border-gray-300 p-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"

                    />

                </div>

                <ConsultationTable

                    consultations={paginatedConsultations}

                    editConsultation={editConsultation}

                    deleteConsultation={openDeleteModal}

                />

                <Pagination

                    currentPage={currentPage}

                    totalPages={totalPages}

                    onPageChange={setCurrentPage}

                />

            </div>

            <DeleteModal

                isOpen={showDeleteModal}

                title="Delete Consultation"

                message="Are you sure you want to delete this consultation? This action cannot be undone."

                onCancel={closeDeleteModal}

                onConfirm={confirmDelete}

            />

        </>

    );

}

export default Consultations;