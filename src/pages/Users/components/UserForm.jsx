import Card from "../../../components/Card/Card";
import PrimaryButton from "../../../components/Button/PrimaryButton";

function UserForm({

    form,

    handleChange,

    saveUser,

    editID

}) {

    return (

        <Card title={editID ? "Update User" : "Create User"}>

            <form

                onSubmit={saveUser}

                className="grid gap-4 md:grid-cols-2"

            >

                <input

                    type="text"

                    name="username"

                    placeholder="Username"

                    value={form.username}

                    onChange={handleChange}

                    className="rounded-lg border border-gray-300 p-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"

                    required

                />

                {!editID && (

                    <input

                        type="password"

                        name="password"

                        placeholder="Password"

                        value={form.password}

                        onChange={handleChange}

                        className="rounded-lg border border-gray-300 p-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"

                        required

                    />

                )}

                <select

                    name="role"

                    value={form.role}

                    onChange={handleChange}

                    className="rounded-lg border border-gray-300 p-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"

                >

                    <option value="staff">

                        STAFF

                    </option>

                    <option value="admin">

                        ADMIN

                    </option>

                </select>

                <input

                    type="number"

                    name="staff_id"

                    placeholder="Staff ID"

                    value={form.staff_id}

                    onChange={handleChange}

                    disabled={editID !== null}

                    className={`rounded-lg border border-gray-300 p-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 ${
                        editID
                            ? "cursor-not-allowed bg-gray-100"
                            : ""
                    }`}

                    required={!editID}

                />

                <div className="md:col-span-2 flex justify-end">

                    <PrimaryButton type="submit">

                        {editID

                            ? "Update User"

                            : "Create User"}

                    </PrimaryButton>

                </div>

            </form>

        </Card>

    );

}

export default UserForm;