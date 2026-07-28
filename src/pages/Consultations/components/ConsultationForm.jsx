import Card from "../../../components/Card/Card";
import PrimaryButton from "../../../components/Button/PrimaryButton";

function ConsultationForm({

    form,

    handleChange,

    saveConsultation,

    editID,

    patients

}) {

    return (

        <Card title={editID ? "Update Consultation" : "Schedule Consultation"}>

            <form

                onSubmit={saveConsultation}

                className="grid gap-4 md:grid-cols-2"

            >

                {/* Diagnosis */}

                <input

                    type="text"

                    name="diagnosis"

                    placeholder="Diagnosis"

                    value={form.diagnosis}

                    onChange={handleChange}

                    className="rounded-lg border border-gray-300 p-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"

                    required

                />

                {/* Medicine */}

                <input

                    type="text"

                    name="medicine"

                    placeholder="Medicine"

                    value={form.medicine}

                    onChange={handleChange}

                    className="rounded-lg border border-gray-300 p-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"

                    required

                />

                {/* Consultation Date */}

                <div>

                    <label className="mb-2 block text-sm font-semibold text-gray-700">

                        Consultation Date

                    </label>

                    <input

                        type="date"

                        name="consultation_date"

                        value={form.consultation_date}

                        onChange={handleChange}

                        className="w-full rounded-lg border border-gray-300 p-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"

                        required

                    />

                </div>

                {/* Consultation Time */}

                <div>

                    <label className="mb-2 block text-sm font-semibold text-gray-700">

                        Consultation Time

                    </label>

                    <input

                        type="time"

                        name="consultation_time"

                        value={form.consultation_time}

                        onChange={handleChange}

                        className="w-full rounded-lg border border-gray-300 p-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"

                        required

                    />

                </div>

                {/* Patient */}

                <div className="md:col-span-2">

                    <label className="mb-2 block text-sm font-semibold text-gray-700">

                        Patient

                    </label>

                    <select

                        name="patient_id"

                        value={form.patient_id}

                        onChange={handleChange}

                        className="w-full rounded-lg border border-gray-300 p-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"

                        required

                    >

                        <option value="">

                            Select Patient

                        </option>

                        {

                            patients.map((patient) => (

                                <option

                                    key={patient.patient_id}

                                    value={patient.patient_id}

                                >

                                    {patient.firstname} {patient.lastname}

                                </option>

                            ))

                        }

                    </select>

                </div>

                {/* Button */}

                <div className="md:col-span-2 flex justify-end">

                    <PrimaryButton type="submit">

                        {

                            editID

                                ? "Update Consultation"

                                : "Schedule Consultation"

                        }

                    </PrimaryButton>

                </div>

            </form>

        </Card>

    );

}

export default ConsultationForm;