import React from "react";
import Link from "next/link";
import Image from "next/image";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { Linkedin } from "lucide-react";

const Footer = () => {
    return (
        <>
            <div id="footer" className="footer">
                <div className="footer-main bg-surface">
                    <div className="container">
                        <div className="content-footer py-[60px] flex justify-between flex-wrap gap-y-8">
                            <div className="company-infor basis-1/4 max-lg:basis-full pr-7">
                                <Link href={"/"} className="logo">
                                    <div className="heading4">Artiva</div>
                                </Link>
                                <div className="flex gap-3 mt-3">
                                    <div className="flex flex-col ">
                                        <span className="text-button">Mail:</span>
                                        <span className="text-button mt-3">Phone:</span>
                                        <span className="text-button mt-3">Address:</span>
                                    </div>
                                    <div className="flex flex-col ">
                                        <span className="">info.artivaindia@gmail.com</span>
                                        <span className="mt-3">+91 97244 88288</span>
                                        <span className="mt-3 pt-px">Siromany Business Center 142, A21, N.H. 8A, near Omkar Petrol Pump, Morbi - 2, Gujarat 363642</span>
                                    </div>
                                </div>
                            </div>
                            <div className="right-content flex flex-wrap gap-y-8 basis-3/4 max-lg:basis-full">
                                <div className="list-nav flex justify-between basis-2/3 max-md:basis-full gap-4">
                                    <div className="item flex flex-col basis-1/3 ">
                                        {/* <div className="text-button-uppercase pb-3">Infomation</div>
                                        <Link className="caption1 has-line-before duration-300 w-fit" href={"/pages/contact"}>
                                            Contact us
                                        </Link>
                                        <Link className="caption1 has-line-before duration-300 w-fit pt-2" href={"#!"}>
                                            Career
                                        </Link>
                                        <Link className="caption1 has-line-before duration-300 w-fit pt-2" href={"/my-account"}>
                                            My Account
                                        </Link>
                                        <Link className="caption1 has-line-before duration-300 w-fit pt-2" href={"/order-tracking"}>
                                            Order & Returns
                                        </Link>
                                        <Link className="caption1 has-line-before duration-300 w-fit pt-2" href={"/pages/faqs"}>
                                            FAQs
                                        </Link> */}
                                    </div>
                                    <div className="item flex flex-col basis-1/3 ">
                                        {/* <div className="text-button-uppercase pb-3">Quick Shop</div>
                                        <Link className="caption1 has-line-before duration-300 w-fit" href={"/shop/breadcrumb1"}>
                                            Women
                                        </Link>
                                        <Link className="caption1 has-line-before duration-300 w-fit pt-2" href={"/shop/breadcrumb1"}>
                                            Men
                                        </Link>
                                        <Link className="caption1 has-line-before duration-300 w-fit pt-2" href={"/shop/breadcrumb1"}>
                                            Clothes
                                        </Link>
                                        <Link className="caption1 has-line-before duration-300 w-fit pt-2" href={"/shop/breadcrumb1"}>
                                            Accessories
                                        </Link>
                                        <Link className="caption1 has-line-before duration-300 w-fit pt-2" href={"/blog"}>
                                            Blog
                                        </Link> */}
                                    </div>
                                    <div className="item flex flex-col basis-1/3 ">
                                        {/* <div className="text-button-uppercase pb-3">Customer Services</div>
                                        <Link className="caption1 has-line-before duration-300 w-fit" href={"/pages/faqs"}>
                                            Orders FAQs
                                        </Link>
                                        <Link className="caption1 has-line-before duration-300 w-fit pt-2" href={"/pages/faqs"}>
                                            Shipping
                                        </Link>
                                        <Link className="caption1 has-line-before duration-300 w-fit pt-2" href={"/pages/faqs"}>
                                            Privacy Policy
                                        </Link>
                                        <Link className="caption1 has-line-before duration-300 w-fit pt-2" href={"/order-tracking"}>
                                            Return & Refund
                                        </Link> */}
                                    </div>
                                </div>
                                <div className="newsletter basis-1/3 pl-7 max-md:basis-full max-md:pl-0">
                                    <div className="text-button-uppercase">Newletter</div>
                                    <div className="caption1 mt-3">Sign up for our newsletter and get 10% off your first purchase</div>
                                    <div className="input-block w-full h-[52px] mt-4">
                                        <form className="w-full h-full relative" action="post">
                                            <input
                                                type="email"
                                                placeholder="Enter your e-mail"
                                                className="caption1 w-full h-full pl-4 pr-14 rounded-xl border border-line"
                                                required
                                            />
                                            <button className="w-[44px] h-[44px] bg-black flex items-center justify-center rounded-xl absolute top-1 right-1">
                                                <Icon.ArrowRight size={24} color="#fff" />
                                            </button>
                                        </form>
                                    </div>
                                    <div className="list-social flex items-center gap-6 mt-4">
                                        <Link href={"https://www.facebook.com/people/Artiva-India/61570520370554/"} target="_blank">
                                            <i className="icon-facebook text-black"></i>
                                        </Link>
                                        <Link href={"https://www.instagram.com/artivaindia?igsh=MWZuZTRpMDdhNGVrdg%3D%3D&utm_source=qr"} target="_blank">
                                            <i className="icon-instagram text-black"></i>
                                        </Link>
                                        <Link href={"https://youtube.com/@artivaindia?si=-FdE7oIKGtOQL2LI"} target="_blank">
                                            <i className="icon-youtube text-black"></i>
                                        </Link>
                                        <Link href="https://www.linkedin.com/company/artiva-india" target="_blank">
                                            <Linkedin color="black" size={13} className="-mt-1.5" />
                                        </Link>
                                        <Link href="http://wa.me/919724488288" target="_blank">
                                            <svg
                                                fill="#000000"
                                                className="-mt-1"
                                                width="12px"
                                                height="12px"
                                                viewBox="0 0 64.00 64.00"
                                                xmlns="http://www.w3.org/2000/svg"
                                                stroke="#000000"
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
                                            <i className="icon-pinterest text-black"></i>
                                        </Link>
                                        {/* <Link href={"https://www.facebook.com/"} target="_blank">
                                            <div className="icon-facebook text-2xl text-black"></div>
                                        </Link>
                                        <Link href={"https://www.instagram.com/"} target="_blank">
                                            <div className="icon-instagram text-2xl text-black"></div>
                                        </Link>
                                        <Link href={"https://www.twitter.com/"} target="_blank">
                                            <div className="icon-twitter text-2xl text-black"></div>
                                        </Link>
                                        <Link href={"https://www.youtube.com/"} target="_blank">
                                            <div className="icon-youtube text-2xl text-black"></div>
                                        </Link>
                                        <Link href={"https://www.pinterest.com/"} target="_blank">
                                            <div className="icon-pinterest text-2xl text-black"></div>
                                        </Link> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer-bottom py-3 flex items-center justify-center gap-5 max-lg:justify-center max-lg:flex-col border-t border-line">
                            <div className="left flex items-center gap-8">
                                <div className="copyright caption1 text-secondary">©2025 Artiva. All Rights Reserved.</div>
                                <div className="select-block flex items-center gap-5 max-md:hidden">
                                    {/* <div className="choose-language flex items-center gap-1.5">
                                        <select name="language" id="chooseLanguageFooter" className="caption2 bg-transparent">
                                            <option value="English">English</option>
                                            <option value="Espana">Espana</option>
                                            <option value="France">France</option>
                                        </select>
                                        <Icon.CaretDown size={12} color="#1F1F1F" />
                                    </div> */}
                                    {/* <div className="choose-currency flex items-center gap-1.5">
                                        <select name="currency" id="chooseCurrencyFooter" className="caption2 bg-transparent">
                                            <option value="USD">USD</option>
                                            <option value="EUR">EUR</option>
                                            <option value="GBP">GBP</option>
                                        </select>
                                        <Icon.CaretDown size={12} color="#1F1F1F" />
                                    </div> */}
                                </div>
                            </div>
                            {/* <div className="right flex items-center gap-2">
                                <div className="caption1 text-secondary">Payment:</div>
                                <div className="payment-img">
                                    <Image src={"/images/payment/Frame-0.png"} width={500} height={500} alt={"payment"} className="w-9" />
                                </div>
                                <div className="payment-img">
                                    <Image src={"/images/payment/Frame-1.png"} width={500} height={500} alt={"payment"} className="w-9" />
                                </div>
                                <div className="payment-img">
                                    <Image src={"/images/payment/Frame-2.png"} width={500} height={500} alt={"payment"} className="w-9" />
                                </div>
                                <div className="payment-img">
                                    <Image src={"/images/payment/Frame-3.png"} width={500} height={500} alt={"payment"} className="w-9" />
                                </div>
                                <div className="payment-img">
                                    <Image src={"/images/payment/Frame-4.png"} width={500} height={500} alt={"payment"} className="w-9" />
                                </div>
                                <div className="payment-img">
                                    <Image src={"/images/payment/Frame-5.png"} width={500} height={500} alt={"payment"} className="w-9" />
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
