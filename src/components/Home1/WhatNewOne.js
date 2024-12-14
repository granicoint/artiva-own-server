"use client";

import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import { motion } from "framer-motion";
import API from "@/apiService/Api";

export function transformProducts(products) {
    return products.map((product) => ({
        id: product._id || "",
        category: product.category?.name?.en || product.categories?.[0]?.name?.en || "",
        type: product.category._id,
        name: product.title?.en || "",
        new: product.isNewArrivals || false,
        sale: product.isOnSale || false,
        rate: 0,
        price: product.prices?.price || 0,
        originPrice: product.prices?.originalPrice || 0,
        brand: "",
        sold: 0,
        quantity: product.stock || 0,
        quantityPurchase: 1,
        sizes: product.specification?.map((spec) => spec.value) || [],
        variation: product.variants,
        thumbImage: product.image || [],
        images: product.image || [],
        description: product.description?.en || "",
        action: "quick shop",
        slug: product.slug || "",
        isBestSellers: product.isBestSellers || false,
        status: product.status || "",
        tag: product?.saleTag,
        specification: product.specification,
    }));
}

const WhatNewOne = ({ data, start, limit }) => {
    const [whatsNewCategory, setWhatsNewCategory] = useState([]);

    const [activeTab, setActiveTab] = useState(null);

    const [product, setProduct] = useState([]);

    const handleTabClick = (type) => {
        setActiveTab(type);
    };

    const filteredProducts = product?.filter((product) => product.type === activeTab);

    const fetchProducts = async (page = 1, limit = 1000, category = "", title = "", price = "") => {
        try {
            const url = `/products?page=${page}&limit=${limit}&category=${category}&title=${title}&price=${price}`;

            const response = await API.get(`${url}`);

            const transformedProducts = transformProducts(response.data.products);

            return transformedProducts;
        } catch (error) {
            console.log("Error fetching products:", error);
            throw error;
        }
    };

    const fetchCategory = async () => {
        try {
            const category = await API.get("category/all");

            const newCategory = category.data.filter((el) => !!el.isWhatsNew)?.map((el) => ({ name: el.name.en, id: el._id }));

            setWhatsNewCategory(newCategory);

            setActiveTab(newCategory[0].id);
        } catch (error) {
            console.log(`error : `, error);
        }
    };

    const fetchData = async () => {
        try {
            const products = await fetchProducts(1, 20);

            setProduct(products);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    useEffect(() => {
        fetchData();
        fetchCategory();
    }, []);

    return (
        <>
            <div className="whate-new-block md:pt-20 pt-10">
                <div className="container">
                    <div className="heading flex flex-col items-center text-center">
                        <div className="heading3">What{String.raw`'s`} new</div>
                        <div className="menu-tab flex items-center gap-2 p-1 bg-surface rounded-2xl mt-6">
                            {whatsNewCategory.map((type) => (
                                <div
                                    key={type.id}
                                    className={`tab-item relative text-secondary text-button-uppercase py-2 px-5 cursor-pointer duration-500 hover:text-black ${
                                        activeTab === type.id ? "active" : ""
                                    }`}
                                    onClick={() => handleTabClick(type.id)}
                                >
                                    {activeTab === type.id && <motion.div layoutId="active-pill" className="absolute inset-0 rounded-2xl bg-white"></motion.div>}
                                    <span className="relative text-button-uppercase z-[1]">{type.name}</span>
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
