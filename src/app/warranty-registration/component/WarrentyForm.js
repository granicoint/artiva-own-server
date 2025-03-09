"use client";

import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import API from "@/apiService/Api";
import Link from "next/link";

const WarrantyForm = () => {
    const {
        handleSubmit,
        control,
        setValue,
        formState: { errors },
        reset
    } = useForm();

    const [otherSource, setOtherSource] = useState(false);

    const [loading, setLoading] = useState(false);
    const [maxDate, setMaxDate] = React.useState("");

    React.useEffect(() => {
        // Get current date in local timezone
        const today = new Date();
        // Format date in YYYY-MM-DD format ensuring local timezone
        const localDate = today.getFullYear() + "-" + String(today.getMonth() + 1).padStart(2, "0") + "-" + String(today.getDate()).padStart(2, "0");
        setMaxDate(localDate);
    }, []);

    const onSubmit = async (data) => {
        setLoading(true);
        try {
            const response = await API.post("/warranty", data);
            alert("Warranty registered successfully!");
            reset();
        } catch (error) {
            console.log("Error submitting the form:", error);
            alert("Failed to register warranty. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Link href="/">
                <h1 className="text-3xl font-black text-center justify-center mt-4 flex mx-auto">ARTIVA INDIA</h1>
            </Link>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-6 max-w-[800px] md:mx-auto p-8 bg-white shadow-lg rounded-xl mb-12 mt-4 border border-secondary mx-3"
            >
                <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Warranty Registration</h2>

                <div className="md:flex-row flex-col items-top gap-4 flex">
                    <Controller
                        name="name"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <div className="flex flex-col md:w-1/2 w-full">
                                <label className="text-sm font-medium text-gray-600 mb-2">Name</label>
                                <input
                                    {...field}
                                    type="text"
                                    placeholder="Enter name"
                                    className="p-3 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
                                    required
                                />
                            </div>
                        )}
                    />

                    <Controller
                        name="contactNumber"
                        control={control}
                        defaultValue=""
                        rules={{ minLength: 10, required: true, maxLength: 10 }}
                        render={({ field }) => (
                            <div className="flex flex-col md:w-1/2 w-full">
                                <label className="text-sm font-medium text-gray-600 mb-2">Contact Number</label>
                                <input
                                    {...field}
                                    type="number"
                                    placeholder="Enter mobile number"
                                    className="p-3 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
                                    required
                                />
                                {errors.contactNumber && <span className="text-red-500">* Please enter valid contact number</span>}
                            </div>
                        )}
                    />
                </div>
                <div className="flex flex-col md:flex-row items-center gap-4">
                    <Controller
                        name="dateOfPurchase"
                        control={control}
                        defaultValue=""
                        render={({ field }) => {
                            return (
                                <div className="flex flex-col w-full md:w-1/2">
                                    <label className="text-sm font-medium text-gray-500 mb-2">Date of Purchase</label>
                                    <div className="w-full">
                                        <input
                                            {...field}
                                            type="date"
                                            max={maxDate}
                                            className="w-full min-w-0 p-3 bg-white border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
                                            required
                                        />
                                    </div>
                                </div>
                            );
                        }}
                    />

                    <Controller
                        name="purchaseFrom"
                        control={control}
                        defaultValue="Amazon"
                        render={({ field }) => (
                            <div className="flex flex-col w-full md:w-1/2">
                                <label className="text-sm font-medium text-gray-600 mb-2">Purchased From</label>
                                <select
                                    {...field}
                                    onChange={(e) => {
                                        field.onChange(e.target.value);
                                        setOtherSource(e.target.value === "Other");
                                        if (e.target.value !== "Other") setValue("otherSource", "");
                                    }}
                                    className="p-3 bg-white border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
                                >
                                    <option value="Amazon">Amazon</option>
                                    <option value="Website">Website</option>
                                    <option value="Dealer">Dealer</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                        )}
                    />
                </div>

                {otherSource && (
                    <Controller
                        name="otherSource"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <div className="flex flex-col">
                                <label className="text-sm font-medium text-gray-600 mb-2">Please specify</label>
                                <input
                                    {...field}
                                    type="text"
                                    className="p-3 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
                                    required
                                />
                            </div>
                        )}
                    />
                )}

                <Controller
                    name="address"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <div className="flex flex-col">
                            <label className="text-sm font-medium text-gray-600 mb-2">Address</label>
                            <textarea
                                {...field}
                                placeholder="Enter your address"
                                className="p-3 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
                                required
                            />
                        </div>
                    )}
                />

                <div className="flex gap-4 md:flex-row flex-col">
                    <Controller
                        name="state"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <div className="flex flex-col w-full md:w-1/2">
                                <label className="text-sm font-medium text-gray-600 mb-2">State</label>
                                <input
                                    {...field}
                                    type="text"
                                    placeholder="Enter your state"
                                    className="p-3 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
                                    required
                                />
                            </div>
                        )}
                    />

                    {/* Pincode */}
                    <Controller
                        name="pincode"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <div className="flex flex-col w-full md:w-1/2">
                                <label className="text-sm font-medium text-gray-600 mb-2">Pincode</label>
                                <input
                                    {...field}
                                    type="number"
                                    placeholder="Enter your pincode"
                                    className="p-3 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
                                    required
                                />
                            </div>
                        )}
                    />
                </div>

                {/* Order ID */}
                <Controller
                    name="orderId"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <div className="flex flex-col">
                            <label className="text-sm font-medium text-gray-600 mb-2">Order ID</label>
                            <input
                                {...field}
                                type="text"
                                placeholder="Enter your order ID"
                                className="p-3 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
                                required
                            />
                        </div>
                    )}
                />

                <button
                    type="submit"
                    disabled={loading}
                    className="bg-[#000] disabled:bg-secondary text-white font-semibold py-3 rounded-lg hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-200"
                >
                    {loading ? "Loading... " : "Submit Warranty"}
                </button>
            </form>
        </>
    );
};

export default WarrantyForm;
