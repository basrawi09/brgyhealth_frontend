import Card from "../../../components/Card/Card";
import PrimaryButton from "../../../components/Button/PrimaryButton";

function PatientForm({
    form,
    handleChange,
    savePatient,
    editID
}) {
    return (
        <Card title={editID ? "Update Patient" : "Add New Patient"}>
            <form
                onSubmit={savePatient}
                className="grid gap-4 md:grid-cols-2"
            >
                <input
                    type="text"
                    name="firstname"
                    placeholder="First Name"
                    value={form.firstname}
                    onChange={handleChange}
                    className="rounded-lg border border-gray-300 p-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    required
                />

                <input
                    type="text"
                    name="lastname"
                    placeholder="Last Name"
                    value={form.lastname}
                    onChange={handleChange}
                    className="rounded-lg border border-gray-300 p-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    required
                />

                <input
                    type="number"
                    name="age"
                    placeholder="Age"
                    value={form.age}
                    onChange={handleChange}
                    className="rounded-lg border border-gray-300 p-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    required
                />

                <input
                    type="number"
                    name="staff_id"
                    placeholder="Staff ID"
                    value={form.staff_id}
                    onChange={handleChange}
                    disabled={editID !== null}
                    className={`rounded-lg border border-gray-300 p-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 ${
                        editID
                            ? "cursor-not-allowed bg-gray-100"
                            : ""
                    }`}
                    required={!editID}
                />

                <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={form.address}
                    onChange={handleChange}
                    className="md:col-span-2 rounded-lg border border-gray-300 p-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    required
                />

                <input
                    type="text"
                    name="contact_number"
                    placeholder="Contact Number"
                    value={form.contact_number}
                    onChange={handleChange}
                    className="md:col-span-2 rounded-lg border border-gray-300 p-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    required
                />

                <div className="md:col-span-2 flex justify-end">
                    <PrimaryButton type="submit">
                        {editID ? "Update Patient" : "Add Patient"}
                    </PrimaryButton>
                </div>
            </form>
        </Card>
    );
}

export default PatientForm;