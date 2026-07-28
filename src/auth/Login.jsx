import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import API from "../services/api";
import { useAuth } from "./AuthContext";

function Login() {

    const navigate = useNavigate();

const {

    user,

    loading,

    login

} = useAuth();

    const [form, setForm] = useState({
        username: "",
        password: ""
    });

    useEffect(() => {

        if (!loading && user) {

            navigate("/", { replace: true });

        }

    }, [user, loading, navigate]);

    function handleChange(e) {

        setForm({

            ...form,

            [e.target.name]: e.target.value

        });

    }

    async function handleSubmit(e) {

        e.preventDefault();

        try {

            const response = await API.post(
                "/auth/login",
                form
            );

            const token = response.data.access_token;

        await login(token);

        toast.success("Login successful!");

        navigate("/", {

            replace: true

        });

        }

        catch (error) {

            toast.error("Invalid username or password.");

        }

    }

    if (loading) {

        return null;

    }

    return (

        <div className="flex min-h-screen items-center justify-center bg-gray-100">

            <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">

                <h1 className="mb-2 text-center text-3xl font-bold">
                    Barangay Health Center
                </h1>

                <p className="mb-8 text-center text-gray-500">
                    Login to continue
                </p>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                >

                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={form.username}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-300 p-3"
                        required
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={form.password}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-300 p-3"
                        required
                    />

                    <button
                        type="submit"
                        className="w-full rounded-lg bg-blue-600 py-3 text-white hover:bg-blue-700"
                    >
                        Login
                    </button>

                </form>

            </div>

        </div>

    );

}

export default Login;