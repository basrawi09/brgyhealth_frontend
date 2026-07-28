import Card from "../../../components/Card/Card";
import PrimaryButton from "../../../components/Button/PrimaryButton";

function StaffForm({
    form,
    handleChange,
    saveStaff,
    editID
}) {
    return (
        <Card title={editID ? "Update Staff" : "Add New Staff"}>
            <form
                onSubmit={saveStaff}
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
                    type="text"
                    name="position"
                    placeholder="Position"
                    value={form.position}
                    onChange={handleChange}
                    className="rounded-lg border border-gray-300 p-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    required
                />

                <input
                    type="text"
                    name="contact_number"
                    placeholder="Contact Number"
                    value={form.contact_number}
                    onChange={handleChange}
                    className="rounded-lg border border-gray-300 p-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    required
                />

                <div className="md:col-span-2 flex justify-end">
                    <PrimaryButton type="submit">
                        {editID ? "Update Staff" : "Staff List"}
                    </PrimaryButton>
                </div>
            </form>
        </Card>
    );
}

export default StaffForm;