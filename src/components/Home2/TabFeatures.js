"use client";

import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import { motion } from "framer-motion";
import API from "@/apiService/Api";
import { transformProducts } from "../Home1/WhatNewOne";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const TabFeatures = ({ data, start, limit }) => {
    const [activeTab, setActiveTab] = useState("on sale");
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true); // Added loading state

    const fetchCategory = async () => {
        try {
            const category = await API.get("products/featured");
            setProduct(category.data);
        } catch (error) {
            console.log(`error : `, error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCategory();
    }, []);

    const handleTabClick = (item) => {
        setActiveTab(item);
    };

    const getFilterData = () => {
        if (activeTab === "on sale") {
            return product?.onSale?.length ? transformProducts(product.onSale) : [];
        }
        if (activeTab === "new arrivals") {
            return product?.newArrivals?.length ? transformProducts(product.newArrivals) : [];
        }
        if (activeTab === "best sellers") {
            return product?.bestSellers?.length ? transformProducts(product.bestSellers) : [];
        }
        return [];
    };

    const filteredProducts = getFilterData();

    return (
        <div className="tab-features-block md:pt-20 pt-10">
            <div className="container">
                <div className="heading flex flex-col items-center text-center">
                    {/* Skeleton for Tabs while loading */}
                    <div className="menu-tab flex items-center gap-2 p-1 bg-surface rounded-2xl">
                        {loading
                            ? [...Array(3)].map((_, index) => <Skeleton key={index} height={40} width={120} borderRadius={20} />)
                            : ["best sellers", "on sale", "new arrivals"].map((item, index) => (
                                  <div
                                      key={index}
                                      className={`tab-item relative text-secondary heading5 py-2 px-5 cursor-pointer duration-500 hover:text-black ${
                                          activeTab === item ? "active" : ""
                                      }`}
                                      onClick={() => handleTabClick(item)}
                                  >
                                      {activeTab === item && <motion.div layoutId="active-pill" className="absolute inset-0 rounded-2xl bg-white"></motion.div>}
                                      <span className="relative heading5 z-[1]">{item}</span>
                                  </div>
                              ))}
                    </div>
                </div>

                {/* Skeleton for Product List */}
                <div className="list-product hide-product-sold grid lg:grid-cols-4 grid-cols-2 sm:gap-[30px] gap-[20px] md:mt-10 mt-6">
                    {loading
                        ? [...Array(8)].map((_, index) => <Skeleton key={index} height={250} borderRadius={15} />)
                        : filteredProducts.slice(start, limit).map((prd, index) => <Product key={index} data={prd} type="grid" />)}
                </div>
            </div>
        </div>
    );
};

export default TabFeatures;
