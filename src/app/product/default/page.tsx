"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import TopNavOne from "@/components/Header/TopNav/TopNavOne";
import MenuOne from "@/components/Header/Menu/MenuOne";
import Default from "@/components/Product/Detail/Default";
import Footer from "@/components/Footer/Footer";
import API from "@/apiService/Api";
import { transformProducts } from "@/components/Home1/WhatNewOne";

const ProductDefault = () => {
    const searchParams = useSearchParams();
    let productId = searchParams.get("id");

    if (productId === null) {
        productId = "1";
    }

    const [productData, setProductData] = useState([]);

    const fetchProducts = async (page = 1, limit = 1000, category = "", title = "", price = "") => {
        try {
            const url = `/products?page=${page}&limit=${limit}&category=${category}&title=${title}&price=${price}`;

            const response = await API.get(`${url}`);

            const transformedProducts = transformProducts(response.data.products);

            setProductData(transformedProducts);
        } catch (error) {
            console.log("Error fetching products:", error);
            throw error;
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <>
            <TopNavOne props="style-one bg-black" slogan="New customers save 10% with the code GET10" />
            <div id="header" className="relative w-full mb-10">
                <MenuOne props="bg-white" />
                {/* <BreadcrumbProduct data={productData} productPage="default" productId={productId} /> */}
            </div>
            <Default data={productData} productId={productId} />
            <Footer />
        </>
    );
};

export default ProductDefault;
