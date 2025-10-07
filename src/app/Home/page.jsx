"use client"

import React, { useEffect, useState } from 'react'
import { FaArrowRight } from "react-icons/fa";
import AnimatedDots from '../common/AnimatedDots';
import { CiHeart } from 'react-icons/ci';
import { FiShoppingBag } from 'react-icons/fi';
import { MdOutlineStar } from 'react-icons/md';
import { FaIndianRupeeSign } from 'react-icons/fa6';
import { PRODUCTS, NEWARRIVALS } from "../data";
import Slider from "react-slick";
import Link from 'next/link';


export const Product = [
  { id: 1, name: "PURE POSHAK", price: 5999, sale: 4999, title: "Authentic traditional poshaks with pure fabrics", image: "/images/image.png" },
  { id: 2, name: "SEMI PURE POSHAK", price: 4500, sale: 3800, title: "Elegant semi-pure designs with rich embroidery", image: "/images/image1.png" },
  { id: 3, name: "STITCHED POSHAK", price: 4200, sale: 4200, title: "Ready-to-wear stitched traditional outfits", image: "/images/image3.png" }
];


export default function Home() {
  const [Product, SetProduct] = useState([]);

  useEffect(() => {
    SetProduct(NEWARRIVALS);
  })

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      {/* banner section */}
      <div className='conatiner w-full h-[70vh] mx-auto overflow-hidden'>
        <Slider {...settings}>
          <div>
            <Link href={'/product'}>
              <img
                src="/images/banner_optimized.png"
                alt="Banner"
                className="w-full h-[70vh] object-cover"
              /> </Link>
          </div>


          <div>
            <Link href={'/product'}>
              <img
                src="/images/banner_optimized.png"
                alt="Banner"
                className="w-full h-[70vh] object-cover"
              /> </Link>
          </div>

        </Slider>
      </div>


      {/* Product Card section*/}
        <section className='container mx-auto'>< ProductCard /></section>
     

      {/* New NEW ARRIVALS */}
      <section className='bg-[#f8f7f2]'>
        <div className='container  mx-auto py-[30px] mb-[50px]'>

          <h2 className='text-center text-4xl text-[#2c2122] customfont font-bold'>NEW ARRIVALS</h2>

          <div className='flex justify-center items-center'>
            <p className='border border-[#e68569] w-[100px] text-center my-[20px]'></p>
            <div className='bg-[#eebd2b] h-[12px] w-[12px] rounded-2xl mx-[20px]'></div>
            <p className='border border-[#e68569] w-[100px] text-center my-[20px]'></p>
          </div>

          <p className='text-center text-[#af9bac] font-semibold'>Discover our latest collection of authentic Rajputi poshaks, crafted with traditional <br /> techniques and modern elegance</p>
          <div className='max-w-[100%] mx-auto lg:px-[40px] grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-[40px] py-[40px] px-[10px]'>
            {Product.map((v, i) => {
              return (
                <div key={v.id} className=' group shadow-2xl '>
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


{/* Product Card section*/ }
function ProductCard() {
  return (
    <div className="p-[25px] my-5 mw-[433px] grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 max-w-[100%] mx-auto gap-[40px]">
      {Product.map((items, index) => (

        <div key={index} className='bg-center w-full p-[15px] rounded-lg shadow-[inset_0_-200px_50px_-40px_rgba(0,0,0,0.3)] group  cursor-pointer  transition-all duration-500 ease-in-out hover:scale-105
    bg-[length:100%_100%] hover:bg-[length:110%_110%] ' style={{ backgroundImage: `url(${items.image})` }}>

          <div className='h-[60px] w-[60px] border-2 border-[#eebd2b] hidden group-hover:block'></div>

          <div className='flex justify-between items-end h-79  group-hover:h-64'>

            <div>
              <h1 className='text-white text-3xl font-semibold customfont group-hover:text-[#eebd2b]'>{items.name}</h1>
              <p className='text-white '>{items.title}</p>
            </div>

            <div className='h-[60px] w-[60px] border-2 border-[#eebd2b]  hidden group-hover:block'></div>

          </div>
        </div>
      ))}
    </div>

  )
}
