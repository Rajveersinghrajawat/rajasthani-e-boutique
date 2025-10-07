import React from 'react'
import { FiFacebook } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io";
import { CiTwitter } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <div className='max-w-[100%]  bg-[#661926] lg:py-[60px] py-[40px] border-b border-[#ceb6b9]'>
                <div className='container mx-auto px-5 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[30px]'>
                    <div>
                        <ul>
                            <li className='customfont text-[#eebd2b] text-4xl font-extrabold'>Ravarti Culture</li>
                            <li className='text-[#ceb6b9] font-semibold'>By Rajveer Singh</li>
                            <li className='py-[20px]'>
                                <p className='text-[#ceb6b9] font-semibold'>Preserving the rich heritage of Rajputi fashion with authentic traditional poshaks, crafted with love and attention to detail for the modern woman.</p>
                            </li>
                            <li>
                                <div className='flex text-white gap-[30px] text-xl'><FiFacebook /> <IoLogoInstagram /> <CiTwitter /></div>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <ul>
                            <li className='customfont text-[#eebd2b] text-xl font-extrabold pb-[15px] '>Quick Links</li>
                            <li className='text-[#ceb6b9] font-semibold py-[2px] hover:text-[#eebd2b] cursor-pointer'>About Us</li>
                            <li className='text-[#ceb6b9] font-semibold py-[2px] hover:text-[#eebd2b] cursor-pointer'>Size Guide</li>
                            <li className='text-[#ceb6b9] font-semibold py-[2px] hover:text-[#eebd2b] cursor-pointer'>Shipping Info</li>
                            <li className='text-[#ceb6b9] font-semibold py-[2px] hover:text-[#eebd2b] cursor-pointer'>Return Policy</li>
                            <li className='text-[#ceb6b9] font-semibold py-[2px] hover:text-[#eebd2b] cursor-pointer'>Terms Policy</li>
                            <li className='text-[#ceb6b9] font-semibold py-[2px] hover:text-[#eebd2b] cursor-pointer'>Privacy Policy</li>

                        </ul>
                    </div>


                    <div>
                        <ul>
                            <li className='customfont text-[#eebd2b] text-xl font-extrabold pb-[15px] '>Categories</li>
                            <li className='text-[#ceb6b9] font-semibold py-[2px] hover:text-[#eebd2b] cursor-pointer'>Pure Poshak</li>
                            <li className='text-[#ceb6b9] font-semibold py-[2px] hover:text-[#eebd2b] cursor-pointer'>Semi Pure Poshak</li>
                            <li className='text-[#ceb6b9] font-semibold py-[2px] hover:text-[#eebd2b] cursor-pointer'>Stitched Poshaks</li>
                            <li className='text-[#ceb6b9] font-semibold py-[2px] hover:text-[#eebd2b] cursor-pointer'>Regular Suits</li>
                            <li className='text-[#ceb6b9] font-semibold py-[2px] hover:text-[#eebd2b] cursor-pointer'>Fabrics</li>
                            <li className='text-[#ceb6b9] font-semibold py-[2px] hover:text-[#eebd2b] cursor-pointer'>Accessoires</li>

                        </ul>
                    </div>


                    <div>
                        <ul>
                            <li className='customfont text-[#eebd2b] text-xl font-extrabold pb-[15px] '>Get In Touch</li>
                            <li>
                                <div className='flex gap-[10px] items-center py-[5px]'>
                                    <h1><IoCallOutline className='text-xl text-[#eebd2b]' /></h1>
                                    <p className='text-[#ceb6b9] font-semibold'>+91 9358004791</p>
                                </div>
                            </li>
                            <li>
                                <div className='flex gap-[10px] items-center py-[5px]'>
                                    <h1><MdOutlineMail className='text-xl text-[#eebd2b]' /></h1>
                                    <p className='text-[#ceb6b9] font-semibold'>info@ravarticulture.com</p>
                                </div>
                            </li>
                            <li>
                                <div className='flex gap-[10px] items-center py-[5px]'>
                                    <h1> <IoLocationOutline className='text-xl text-[#eebd2b]' /></h1>
                                    <p className='text-[#ceb6b9] font-semibold'>Tirupati Nagar, Nandri, Rajasthan, India</p>
                                </div>
                            </li>
                            <li className='text-[#eebd2b] py-[10px]'>Newsletter</li>
                            <li className='text-[#ceb6b9] text-[14px] font-semibold'>Subscribe for latest collections & offers</li>
                            <li>

                                <form className='flex gap-[10px] '>
                                    <input type="email" name='email' placeholder='Your email' className='border my-[10px] text-white border-white rounded p-[5px] bg-[#76303c]' />
                                    <button className='bg-[#eebd2b] rounded my-[10px] p-[5px_15px] text-[13px] cursor-pointer'>Subscribe</button>
                                </form>

                            </li>
                        </ul>
                    </div>

                </div>
            </div>

            <section className='bg-[#661926]'>
            <div className='container mx-auto py-[20px]  px-[10px] flex justify-between items-center'>
                <p className='text-[#ceb6b9] font-semibold lg:text-[15px] text-[10px]'>© {currentYear} RAVARTI CULTURE. All rights reserved.</p>
                <p className='text-[#ceb6b9] font-semibold lg:text-[15px] text-[10px]'>Made & Develop By CodeSavvyNest</p>
            </div>
            </section>
        </>
    )
}
