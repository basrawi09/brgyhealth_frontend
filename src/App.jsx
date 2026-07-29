import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";

import Dashboard from "./pages/Dashboard/Dashboard";
import Staff from "./pages/Staff/Staff";
import Patients from "./pages/Patients/Patients";
import Consultations from "./pages/Consultations/Consultations";
import Users from "./pages/Users/Users";
import Calendar from "./pages/Calendar/Calendar";

import Login from "./auth/Login";
import ProtectedRoute from "./auth/ProtectedRoute";

function App() {

    return (

        <BrowserRouter>

            <Routes>

                {/* Public Route */}

                <Route
                    path="/login"
                    element={<Login />}
                />

                {/* Dashboard */}

                <Route
                    path="/"
                    element={
                        <ProtectedRoute>
                            <Layout>
                                <Dashboard />
                            </Layout>
                        </ProtectedRoute>
                    }
                />

                {/* Staff */}

                <Route
                    path="/staff"
                    element={
                        <ProtectedRoute>
                            <Layout>
                                <Staff />
                            </Layout>
                        </ProtectedRoute>
                    }
                />

                {/* Patients */}

                <Route
                    path="/patients"
                    element={
                        <ProtectedRoute>
                            <Layout>
                                <Patients />
                            </Layout>
                        </ProtectedRoute>
                    }
                />

                {/* Consultations */}

                <Route
                    path="/consultations"
                    element={
                        <ProtectedRoute>
                            <Layout>
                                <Consultations />
                            </Layout>
                        </ProtectedRoute>
                    }
                />

                {/* Appointment Calendar */}

                <Route
                    path="/calendar"
                    element={
                        <ProtectedRoute>
                            <Layout>
                                <Calendar />
                            </Layout>
                        </ProtectedRoute>
                    }
                />

                {/* Users */}

                <Route
                    path="/users"
                    element={
                        <ProtectedRoute>
                            <Layout>
                                <Users />
                            </Layout>
                        </ProtectedRoute>
                    }
                />

            </Routes>

        </BrowserRouter>

    );

}

export default App;