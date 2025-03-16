"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { Linkedin } from "lucide-react";

interface Props {
    props: string;
    slogan: string;
}

const TopNavOne: React.FC<Props> = ({ props, slogan }) => {
    const [isOpenLanguage, setIsOpenLanguage] = useState(false);
    const [isOpenCurrence, setIsOpenCurrence] = useState(false);
    const [language, setLanguage] = useState("English");
    const [currence, setCurrence] = useState("USD");

    return (
        <>
            <div className={`top-nav md:h-[44px] h-[30px] ${props}`}>
                <div className="container mx-auto h-full">
                    <div className="top-nav-main flex justify-between max-md:justify-center h-full">
                        <div className="left-content flex items-center gap-5 max-md:hidden">
                            {/* <div
                                className="choose-type choose-language flex items-center gap-1.5"
                                onClick={() => {
                                    setIsOpenLanguage(!isOpenLanguage)
                                    setIsOpenCurrence(false)
                                }}
                            >
                                <div className="select relative">
                                    <p className="selected caption2 text-white">{language}</p>
                                    <ul className={`list-option bg-white ${isOpenLanguage ? 'open' : ''}`}>
                                        {
                                            ['English', 'Espana', 'France'].map((item, index) => (
                                                <li key={index} className="caption2" onClick={() => setLanguage(item)}>{item}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                                <Icon.CaretDown size={12} color='#fff' />
                            </div>
                            <div
                                className="choose-type choose-currency flex items-center gap-1.5"
                                onClick={() => {
                                    setIsOpenCurrence(!isOpenCurrence)
                                    setIsOpenLanguage(false)
                                }}
                            >
                                <div className="select relative">
                                    <p className="selected caption2 text-white">{currence}</p>
                                    <ul className={`list-option bg-white ${isOpenCurrence ? 'open' : ''}`}>
                                        {
                                            ['USD', 'EUR', 'GBP'].map((item, index) => (
                                                <li key={index} className="caption2" onClick={() => setCurrence(item)}>{item}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                                <Icon.CaretDown size={12} color='#fff' />
                            </div> */}
                        </div>
                        <div className="text-center text-button-uppercase text-white flex items-center">{slogan}</div>
                        <div className="right-content flex items-center gap-5 max-md:hidden">
                            <Link href={"https://www.facebook.com/people/Artiva-India/61570520370554/"} target="_blank">
                                <i className="icon-facebook text-white"></i>
                            </Link>
                            <Link href={"https://www.instagram.com/artivaindia?igsh=MWZuZTRpMDdhNGVrdg%3D%3D&utm_source=qr"} target="_blank">
                                <i className="icon-instagram text-white"></i>
                            </Link>
                            <Link href={"https://youtube.com/@artivaindia?si=-FdE7oIKGtOQL2LI"} target="_blank">
                                <i className="icon-youtube text-white"></i>
                            </Link>
                            <Link href="https://www.linkedin.com/company/artiva-india" target="_blank">
                                {/* <i className="icon-linkedin text-white"></i> */}
                                <Linkedin color="white" size={13} className="-mt-1.5" />
                            </Link>
                            <Link href="http://wa.me/919724488288" target="_blank">
                                <svg
                                    fill="#FFFFFF"
                                    className="-mt-1"
                                    width="12px"
                                    height="12px"
                                    viewBox="0 0 64.00 64.00"
                                    xmlns="http://www.w3.org/2000/svg"
                                    stroke="#FFFFFF"
                                    stroke-width="2"
                                >
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="1.536"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <title></title>
                                        <path d="M6,59a1,1,0,0,1-.95-1.32L9,46.06A27.1,27.1,0,0,1,13,13,26.93,26.93,0,0,1,51,13h0A26.94,26.94,0,0,1,20.22,56.23L6.2,59Zm14.35-4.85a1,1,0,0,1,.45.11A24.94,24.94,0,0,0,49.63,14.37h0a24.93,24.93,0,0,0-35.26,0,25.08,25.08,0,0,0-3.4,31,1,1,0,0,1,.1.86L7.51,56.72,20.17,54.2Z"></path>
                                        <path d="M39.17,46a8.46,8.46,0,0,1-.92,0c-5.31-.58-12-5.83-13.89-7.68h0c-1.85-1.85-7.11-8.58-7.68-13.89-.46-4.24,2.37-7.12,3.61-8.17a2.87,2.87,0,0,1,2-.69l2.7.09a1,1,0,0,1,.9.65c.6,1.59,2.54,6.88,2.54,8.25,0,1.2-1.06,2.13-2,2.95-.2.17-.47.41-.63.58a28.74,28.74,0,0,0,3.61,5.16,28.77,28.77,0,0,0,5.16,3.61c.17-.17.41-.44.58-.63.82-.94,1.75-2,3-2,1.37,0,6.66,1.94,8.25,2.54a1,1,0,0,1,.65.9l.09,2.7a3,3,0,0,1-.69,2A9.82,9.82,0,0,1,39.17,46ZM25.78,36.88c1.65,1.65,8,6.6,12.69,7.11,3.29.35,5.59-1.92,6.43-2.91a1,1,0,0,0,.22-.66l-.07-2a47.65,47.65,0,0,0-6.92-2.18c-.32,0-1.11.93-1.45,1.32-.68.78-1.22,1.39-2,1.39-1.27,0-5.7-3.28-6.69-4.27S23.75,29.23,23.75,28c0-.75.61-1.29,1.39-2,.38-.34,1.29-1.12,1.32-1.45a47.7,47.7,0,0,0-2.18-6.92l-2-.07a1,1,0,0,0-.66.22c-1,.84-3.27,3.14-2.91,6.42.51,4.72,5.46,11,7.11,12.69Zm9,0Z"></path>
                                    </g>
                                </svg>
                            </Link>
                            <Link href={"https://in.pinterest.com/Artivaindia/"} target="_blank">
                                <i className="icon-pinterest text-white"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TopNavOne;
