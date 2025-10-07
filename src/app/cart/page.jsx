"use client"
import React, { useEffect, useState } from 'react'
import Header from "../common/Header"
import { RiDeleteBin6Line } from "react-icons/ri";
import { CiHeart } from 'react-icons/ci';
import { FiShoppingBag } from 'react-icons/fi';
import { MdOutlineStar } from 'react-icons/md';
import { FaIndianRupeeSign } from 'react-icons/fa6';
import {NEWARRIVALS } from "../data";

import Footer from "../common/Footer"
import Link from 'next/link';



export default function Cart() {
    const [qty, setQty] = useState(1);
    const [Product, SetProduct] = useState([]);

  useEffect(() => {
    SetProduct(NEWARRIVALS);
  })
  return (
    <>


      <div className='text-center customfont md:text-4xl text-2xl font-extrabold py-[15px] text-[#2c2122] lg:py-[30px] border-y border-gray-200'>
        <h1>Cart Page</h1>
      </div>

      <div className='container lg:px-[40px] px-[20px]  mx-auto '>
        <div className="py-[40px]">

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-200">
              <thead>
                <tr className="bg-gray-100 text-left text-gray-700 text-sm sm:text-base">
                  <th className="p-3 border-b-2 border-[#c37b43]">Delete</th>
                  <th className="p-3 border-b-2 border-[#c37b43]">Image</th>
                  <th className="p-3 border-b-2 border-[#c37b43]">Product</th>
                  <th className="p-3 border-b-2 border-[#c37b43]">Price</th>
                  <th className="p-3 border-b-2 border-[#c37b43]">Quantity</th>
                  <th className="p-3 border-b-2 border-[#c37b43]">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50">

                  <td className="p-3 text-center">
                    <button className="text-[#c37b43] hover:text-red-700">
                      <RiDeleteBin6Line className='text-2xl' />
                    </button>
                  </td>

                  <td className="p-3 text-center">
                    <img src="/images/image.png"
                      alt="Posak"
                      className="w-12 h-12 object-cover rounded" />
                  </td>

                  <td className="p-3">Caroline Study Tables</td>

                  <td className="p-3 font-medium text-gray-700">Rs. 2,500</td>

                  <td className="p-3 py-[20px] flex items-center gap-2">
                    <form action="">
                      <label htmlFor="qty" className="sr-only">Quantity</label>
                      <input 
                        type="number"
                        value={qty}
                        min="1"
                        className="w-16 border rounded-md text-center" />
                    </form>
                  </td>
                  <td className="p-3 font-medium text-gray-700">Rs. 2,500</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
  
      <div className='container mb-6 lg:px-[40px] px-[20px] mx-auto'>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="border border-gray-200 rounded-lg shadow-sm">

            <div className="bg-gradient-to-r to-[#e77240] from-[#d53f3d]  text-white font-semibold  text-xl p-3 rounded-t-lg">
              COUPON
            </div>

            <div className="p-4">
              <p className="text-gray-700 mb-3">Enter your coupon code if you have one.</p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="text"
                  placeholder="Coupon code"
                  className="flex-1 border rounded-md px-3 py-2 "
                />
                <button className="bg-gradient-to-r to-[#e77240] from-[#d53f3d] cursor-pointer text-white text-l px-5 py-2 hover:text-[#eebd2b] -md h rounded-[10px]">
                  APPLY COUPON
                </button>
              </div>
            </div>
          </div>


          <div className="border border-gray-200 rounded-lg shadow-sm">

            <div className="bg-gradient-to-r to-[#e77240] from-[#d53f3d] text-white font-semibold p-3 text-xl rounded-t-lg">
              CART TOTALS
            </div>

            <div className="p-4 space-y-3 text-gray-700">
              <div className="flex justify-between border-b pb-2">
                <span>Subtotal</span>
                <span>Rs. 2,500</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span>Discount (-)</span>
                <span>Rs. 0</span>
              </div>
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>Rs. 2,500</span>
              </div>
              <Link href={'/checkout'}>
              <button className="w-full bg-gradient-to-r to-[#e77240] from-[#d53f3d] hover:text-[#eebd2b] text-l text-white py-3 rounded-md font-semibold hover:opacity-90">
                Proceed To Checkout
              </button></Link>
            </div>
          </div>

        </div>
      </div>

         {/* Best Selling */}
      <section className='container mx-auto'>
        <div className='my-[50px]'>

          <h2 className='text-center text-4xl text-[#2c2122] customfont font-bold'>Best Selling Products</h2>

          <div className='flex justify-center items-center'>
            <p className='border border-[#e68569] w-[100px] text-center my-[20px]'></p>
            <div className='bg-[#eebd2b] h-[12px] w-[12px] rounded-2xl mx-[20px]'></div>
            <p className='border border-[#e68569] w-[100px] text-center my-[20px]'></p>
          </div>

          <p className='text-center text-[#af9bac] font-semibold'>Discover our latest collection of authentic Rajputi poshaks, crafted with traditional <br /> techniques and modern elegance</p>
          <div className='max-w-[100%] mx-auto lg:px-[40px] grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-[40px] py-[40px] px-[10px]'>
            {Product.map((v, i) => {
              return (
                <div key={v.id} className='group shadow-2xl '>
                  <div className=' bg-center w-full h-[300px] p-[20px] rounded-t-lg shadow-[inset_0_-100px_50px_-40px_rgba(0,0,0,0.3)]   cursor-pointer  transition-all duration-500 ease-in-out group-hover:scale-105 
        bg-[length:100%_100%] group-hover:bg-[length:110%_110%] flex flex-col justify-between' style={{ backgroundImage: `url(${v.image})` }}>
                    <div className='flex justify-between h-60'>
                      <div>
                        <div className='bg-[#c91d39] text-white px-[10px] text-[15px] rounded-2xl font-semibold '>NEW</div>
                        <div className='bg-[#f08b42]  px-[10px] text-[15px] rounded-2xl font-semibold my-[10px]'>FREE SHIPPING</div>
                      </div>
                      <div className='h-[40px] w-[40px] text-2xl rounded-3xl flex justify-center items-center bg-[#f08b42] hover:bg-[#c91d39] hover:text-white opacity-0 group-hover:opacity-100 '><CiHeart /></div>
                    </div>
                    <div className=' opacity-0 group-hover:opacity-100 flex justify-center items-center bg-[#c91d39] text-white rounded-2xl gap-[10px] py-[3px] '><FiShoppingBag />Add to Cart</div>
                  </div>
                  <div className=' bg-[#ffffff] h-[200px] transition-all duration-500 ease-in-out group-hover:scale-105     bg-[length:100%_100%] group-hover:bg-[length:110%_110%] rounded-b-lg p-[20px]'>

                    <div className='py-[5px] flex text-[#eebd2b] text-xl'><MdOutlineStar /><MdOutlineStar /><MdOutlineStar /><MdOutlineStar /><MdOutlineStar /></div>
                    <h2 className=' customfont text-xl text-[#432122] group-hover:text-[#c91d39] font-bold'>{v.name}</h2>
                    <p className='text-[black] py-[10px]'>{v.title}</p>
                    <div className="flex items-center justify-between">
                      <h3 className="text-[#c91d39] font-semibold text-xl flex items-center">
                        <FaIndianRupeeSign />
                        <span className="text-[#d92662] flex items-center text-[22px] px-[10px]">
                          {v.sale}
                          <del className="text-[#ccc] mx-2 text-[15px]">{v.price}</del>
                        </span>
                      </h3>
                      <p className="text-[#f09263] text-[12px] font-semibold">FREE Shipping</p>
                    </div>

                  </div>
                </div>
              )
            })}

          </div>

          <button className='text-white bg-gradient-to-r to-[#e77240] from-[#d53f3d] p-[10px_25px] rounded-3xl font-semibold flex justify-center items-center  mx-auto   cursor-pointer'>VIEW ALL PRODUCTS </button>

        </div>
      </section>

</>


  )
}
