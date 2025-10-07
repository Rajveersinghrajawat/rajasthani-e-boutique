"use client"
import Image from "next/image";
import "flowbite";
import React, { useState } from 'react'
import { useEffect } from "react";
import { CiHeart } from "react-icons/ci";
import { AiOutlineUser } from "react-icons/ai";
import { FiShoppingBag } from "react-icons/fi";
import { IoMdSearch } from "react-icons/io";
import Link from "next/link";

export default function Header() {

  const [cart, setcart] = useState([2])

  const [isOpen, setIsOpen] = useState(false);


  useEffect(() => {
    import("flowbite"); // Flowbite JS load
  }, []);

  return (
    <>
      {/* top header */}
      <div className="sticky top-0 z-50">
        <div className='bg-gradient-to-r to-[#e77240] from-[#d53f3d]  text-white py-[5px] font-semibold text-center text-[15px]  '>FREE SHIPPING ON DOMESTIC ORDERS ABOVE RS 2,000.</div>

        {/* menu header  */}
        <nav className="bg-white shadow-md ">
          <div className="container flex flex-wrap items-center justify-between px-[20px] mx-auto  ">
            <Link href={'/'}>
              <img src="images/logo.png" className="w-[100px] cursor-pointer" alt="logo" />
            </Link>
            {/* Icons  ye only mobile screen me icons show hoge*/}

            <div className="flex items-center gap-3 md:hidden">
              <div className="flex items-center gap-3">
                <IoMdSearch className="cursor-pointer p-[5px] text-3xl rounded hover:bg-gray-100" />
                <CiHeart className="cursor-pointer p-[5px] text-3xl rounded hover:bg-gray-100" />
                <AiOutlineUser className="cursor-pointer p-[5px] text-3xl rounded hover:bg-gray-100" />
                <Link href={'/cart'}> <FiShoppingBag className="cursor-pointer p-[5px] text-3xl rounded hover:bg-gray-100" /> </Link>
              </div>

              <button onClick={() => setIsOpen(true)} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden bg-white hover:bg-[#e77240] focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-black-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                </svg>
              </button>
            </div>


            <div className="hidden w-full md:block md:w-auto" >
              <ul className=" flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row lg:space-x-6 rtl:space-x-reverse md:mt-0 md:border-0 xl:text-[16px] md:text-[11px]">
                <li>
                  <Link href={'/category'} className="block py-2 px-1 text-[14px]   hover:text-[#d53f3d] " aria-current="page">PRODUCTS </Link>
                </li>
                <li>
                  <a href="#" className="block py-2 px-1 text-[14px] hover:text-[#d53f3d]">PURE POSHAK</a>
                </li>
                <li>
                  <a href="#" className="block py-2 px-1 text-[14px] hover:text-[#d53f3d]">SEMI PURE POSHAK</a>
                </li>
                <li>
                  <a href="#" className="block py-2 px-1 text-[14px] hover:text-[#d53f3d]">STITCHED POSHAKS</a>
                </li>
                <li>
                  <a href="#" className="block py-2 px-1 text-[14px] hover:text-[#d53f3d]">REGULAR SUIT</a>

                </li>
                <li>
                  <a href="#" className="block py-2 px-1 text-[14px] hover:text-[#d53f3d]">FABRIC</a>

                </li>
                <li>
                  <a href="#" className="block py-2 px-1 text-[14px] hover:text-[#d53f3d]">ACCESSORIES</a>

                </li>
              </ul>
            </div>

            {/* ye only Desktop menu per show hoga*/}
            <div className="hidden md:block">
              <div className="flex lg:gap-6 gap-2 items-center">
            
                <CiHeart className="cursor-pointer p-1.5 text-3xl rounded hover:bg-gray-100" />

        
              <Link href={'login-register'}><AiOutlineUser className="cursor-pointer p-1.5 text-3xl rounded hover:bg-gray-100" /></Link>

       
                <Link href="/cart" className="relative">
                  <FiShoppingBag className="cursor-pointer p-1.5 text-3xl rounded hover:bg-gray-100" />
                  <span className="absolute -top-1 -right-4 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                    {cart}
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>


      {/* Mobile Left Drawer Menu */}
      <div
        className={`fixed top-0 left-0 h-screen w-[75%] bg-white shadow-lg z-50 transform ${isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300`}
      >
        {/* Close Button */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-bold">
            <img src="images/logo.png" alt="" className="w-[80px] h-[80px]  text-center" />
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-600 text-3xl"
          >
            &times;
          </button>
        </div>

        {/* Drawer Menu Items */}
        <ul className="flex flex-col gap-4 p-4 text-[15.5px] font-semibold">
          <li className="hover:text-[#d53f3d]">   <Link href={'/category'}>PRODUCTS  </Link></li>
          <li><a href="#" className="hover:text-[#d53f3d]">PURE POSHAK</a></li>
          <li><a href="#" className="hover:text-[#d53f3d]">SEMI PURE POSHAK</a></li>
          <li><a href="#" className="hover:text-[#d53f3d]">STITCHED POSHAKS</a></li>
          <li><a href="#" className="hover:text-[#d53f3d]">REGULAR SUIT</a></li>
          <li><a href="#" className="hover:text-[#d53f3d]">FABRIC</a></li>
          <li><a href="#" className="hover:text-[#d53f3d]">ACCESSORIES</a></li>
        </ul>
      </div>

      {/* Background Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black opacity-50 z-40"
        />
      )}

    </>
  )
}
