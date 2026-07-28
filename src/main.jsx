import React from "react";
import ReactDOM from "react-dom/client";

import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./auth/AuthContext";

import App from "./App";

import "./index.css";

ReactDOM.createRoot(
    document.getElementById("root")
).render(

    <React.StrictMode>
        <AuthProvider>
        <App />
        </AuthProvider>
        
        <Toaster
            position="top-right"
            reverseOrder={false}
            toastOptions={{
                duration: 3000,
                style: {
                    background: "#ffffff",
                    color: "#1f2937",
                    border: "1px solid #e5e7eb",
                    borderRadius: "12px",
                    fontSize: "14px",
                    padding: "14px 18px"
                },
                success: {
                    iconTheme: {
                        primary: "#16a34a",
                        secondary: "#ffffff"
                    }
                },
                error: {
                    iconTheme: {
                        primary: "#dc2626",
                        secondary: "#ffffff"
                    }
                }
            }}
        />

    </React.StrictMode>

);