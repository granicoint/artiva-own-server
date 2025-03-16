"use client";

import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import { motion } from "framer-motion";
import API from "@/apiService/Api";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

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
        sku: product.sku,
        categories: product.categories
    }));
}

const WhatNewOne = ({ data, start, limit }) => {
    const [whatsNewCategory, setWhatsNewCategory] = useState([]);
    const [activeTab, setActiveTab] = useState(null);
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true); // Add loading state
    const [categoryLoading, setCategoryLoading] = useState(true); // Loading state for categories

    const handleTabClick = (type) => {
        setActiveTab(type);
    };

    const filteredProducts = product?.filter((product) => product.categories.some((el) => el._id === activeTab));

    const fetchProducts = async (page = 1, limit = 1000, category = "", title = "", price = "") => {
        try {
            const url = `/products?page=${page}&limit=${limit}&category=${category}&title=${title}&price=${price}`;
            const response = await API.get(`${url}`);
            console.log("response.data.products =:= ", response.data.products);
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
            setActiveTab(newCategory[0]?.id || null);
        } catch (error) {
            console.log(`error : `, error);
        } finally {
            setCategoryLoading(false);
        }
    };

    const fetchData = async () => {
        try {
            setLoading(true);
            const products = await fetchProducts(1, 20);
            setProduct(products);
        } catch (error) {
            console.error("Error fetching products:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
        fetchCategory();
    }, []);

    return (
        <div className="whate-new-block md:pt-20 pt-10">
            <div className="container">
                {/* Header Skeleton */}
                <div className="heading flex flex-col items-center text-center">
                    {categoryLoading ? <Skeleton height={30} width={200} /> : <div className="heading3">{`What's`} new</div>}
                    <div className="menu-tab flex items-center gap-2 p-1 bg-surface rounded-2xl mt-6">
                        {categoryLoading
                            ? [...Array(4)].map((_, i) => <Skeleton key={i} width={80} height={30} borderRadius={15} />)
                            : whatsNewCategory.map((type) => (
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

                {/* Products List */}
                <div className="list-product hide-product-sold grid lg:grid-cols-4 grid-cols-2 sm:gap-[30px] gap-[20px] md:mt-10 mt-6">
                    {loading
                        ? [...Array(8)].map((_, index) => <Skeleton key={index} height={250} borderRadius={10} />)
                        : filteredProducts.slice(start, limit).map((prd, index) => <Product data={prd} type="grid" key={index} />)}
                </div>
            </div>
        </div>
    );
};

export default WhatNewOne;
