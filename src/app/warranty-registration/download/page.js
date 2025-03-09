"use client";

import React, { useState } from "react";
import API from "@/apiService/Api";

const AdminPage = () => {
    const [adminId, setAdminId] = useState("");
    const [adminPassword, setAdminPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleLogin = () => {
        const correctId = process.env.NEXT_PUBLIC_ADMIN_ID;
        const correctPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;

        if (adminId === correctId && adminPassword === correctPassword) {
            setIsAuthenticated(true);
            setErrorMessage("");
            handleDownload();
        } else {
            setErrorMessage("Invalid ID or Password. Please try again.");
        }
    };

    const handleDownload = async () => {
        try {
            const response = await API.get("/warranty/download", { responseType: "blob" });
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", "warranty_data.xlsx");
            document.body.appendChild(link);
            link.click();
            link.remove();
            alert("Excel data is downloaded!");
        } catch (error) {
            console.error("Error downloading the file:", error);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-8">
            {!isAuthenticated ? (
                <>
                    <h2 className="text-2xl font-bold text-secondary mb-6">Admin Login</h2>

                    {errorMessage && <div className="text-red mb-4">{errorMessage}</div>}
                    <div className="flex flex-col gap-4 w-full max-w-md">
                        <input
                            type="text"
                            placeholder="Admin ID"
                            value={adminId}
                            onChange={(e) => setAdminId(e.target.value)}
                            className="p-3 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
                            required
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={adminPassword}
                            onChange={(e) => setAdminPassword(e.target.value)}
                            className="p-3 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
                            required
                        />
                        <button onClick={handleLogin} className="bg-black text-white font-semibold py-3 rounded-lg hover:opacity-90 transition duration-200">
                            Login
                        </button>
                    </div>
                </>
            ) : (
                <div className="mt-6">
                    <button onClick={handleDownload} className="bg-success text-black font-semibold py-3 rounded-lg hover:opacity-90 transition duration-200 px-2">
                        Download Warranty Data
                    </button>
                </div>
            )}
        </div>
    );
};

export default AdminPage;
