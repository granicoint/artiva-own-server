"use client";

import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import { ProductType } from "@/type/ProductType";
import { motion } from "framer-motion";
import requests from "@/apiService/Api";
import instance from "@/apiService/Api";
import axios from "axios";

interface Props {
    data: Array<ProductType>;
    start: number;
    limit: number;
}

const WhatNewOne: React.FC<Props> = ({ data, start, limit }) => {
    const [activeTab, setActiveTab] = useState<string>("t-shirt");

    const [product, setProduct] = useState([]);

    const handleTabClick = (type: string) => {
        setActiveTab(type);
    };

    const filteredProducts = data.filter((product) => product.type === activeTab && product.category === "fashion");

    const fetchProducts = async (page = 1, limit = 20, category = "", title = "", price = "") => {
        try {
            const url = `/products?page=${page}&limit=${limit}&category=${category}&title=${title}&price=${price}`;

            console.log(`url : `, url);

            const response = await axios.get(`http://localhost:5055/api/${url}`);

            // http://localhost:5055/api

            // instance.get(url);

            console.log(`response : `, response);

            return response;
        } catch (error) {
            console.log("Error fetching products:", error);
            throw error;
        }
    };

    const fetchData = async () => {
        try {
            const products = await fetchProducts(1, 20);
            // setProduct(products);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    console.log(`product : `, product);

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <div className="whate-new-block md:pt-20 pt-10">
                <div className="container">
                    <div className="heading flex flex-col items-center text-center">
                        <div className="heading3">What{String.raw`'s`} new</div>
                        <div className="menu-tab flex items-center gap-2 p-1 bg-surface rounded-2xl mt-6">
                            {["top", "t-shirt", "dress", "sets", "shirt"].map((type) => (
                                <div
                                    key={type}
                                    className={`tab-item relative text-secondary text-button-uppercase py-2 px-5 cursor-pointer duration-500 hover:text-black ${
                                        activeTab === type ? "active" : ""
                                    }`}
                                    onClick={() => handleTabClick(type)}
                                >
                                    {activeTab === type && <motion.div layoutId="active-pill" className="absolute inset-0 rounded-2xl bg-white"></motion.div>}
                                    <span className="relative text-button-uppercase z-[1]">{type}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="list-product hide-product-sold grid lg:grid-cols-4 grid-cols-2 sm:gap-[30px] gap-[20px] md:mt-10 mt-6">
                        {filteredProducts.slice(start, limit).map((prd, index) => (
                            <Product data={prd} type="grid" key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default WhatNewOne;
