"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css/bundle";
import { useRouter } from "next/navigation";
import API from "@/apiService/Api";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Collection = ({ title = "Explore Collections", onTypeClick, className = "" }) => {
    const router = useRouter();
    const [exploreCollection, setExploreCollection] = useState([]);
    const [loading, setLoading] = useState(true); // Added loading state

    const fetchCategory = async () => {
        try {
            const category = await API.get("category/all");
            const newCategory = category.data.filter((el) => !!el.isExploreCollection).map((el) => ({ type: el.name.en, image: el.icon, alt: el.name.en }));

            setExploreCollection(newCategory);
        } catch (error) {
            console.log(`error : `, error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCategory();
    }, []);

    const defaultTypeClick = (type) => {
        router.push(`/shop/breadcrumb1?type=${type}`);
    };

    const handleTypeClick = onTypeClick || defaultTypeClick;

    return (
        <div className={`collection-block md:pt-20 pt-10 ${className}`}>
            <div className="container">
                {/* Header Skeleton */}
                <div className="heading3 text-center">{loading ? <Skeleton height={30} width={250} /> : title}</div>
            </div>
            <div className="list-collection section-swiper-navigation md:mt-10 mt-6 sm:px-5 px-4">
                {loading ? (
                    // Skeleton Loader for Swiper Items
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[...Array(4)].map((_, index) => (
                            <Skeleton key={index} height={250} borderRadius={15} />
                        ))}
                    </div>
                ) : (
                    <Swiper
                        key={exploreCollection.length}
                        spaceBetween={12}
                        slidesPerView={2}
                        navigation
                        loop={true}
                        modules={[Navigation, Autoplay]}
                        breakpoints={{
                            576: {
                                slidesPerView: 2,
                                spaceBetween: 12
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 20
                            },
                            1200: {
                                slidesPerView: 4,
                                spaceBetween: 20
                            }
                        }}
                        className="h-full"
                    >
                        {exploreCollection.map((collection) => (
                            <SwiperSlide key={collection.type}>
                                <div className="collection-item block relative rounded-2xl overflow-hidden cursor-pointer" onClick={() => handleTypeClick(collection.type)}>
                                    <div className="bg-img">
                                        <Image src={collection.image} width={1000} height={600} alt={collection.alt} />
                                    </div>
                                    <div className="collection-name heading5 text-center sm:bottom-8 bottom-4 lg:w-[200px] md:w-[160px] w-[100px] md:py-3 py-1.5 bg-white rounded-xl duration-500">
                                        {collection.type}
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}
            </div>
        </div>
    );
};

export default Collection;
