import React from 'react'
import { FaTableCells } from "react-icons/fa6";
import { IoReorderThree } from "react-icons/io5";
import { CiFilter } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { FiShoppingBag } from "react-icons/fi";
import { MdOutlineStar } from "react-icons/md";
import { FaIndianRupeeSign } from "react-icons/fa6";
import Link from 'next/link';


const NEWARRIVALS = [
  { id: 1, heading: "GULABBAAH POSHAK", image: "/images/image.png", title: "Natural crep poshak with intricate thread embroidery and traditional patterns", price: "5,999", delprice: "7,999" },
  { id: 2, heading: "FULBAHAR POSHAK", image: "/images/image1.png", title: "Thread embroidery with zari and sequence work, perfect for special occasions", price: "3,800", delprice: "4,500" },
  { id: 3, heading: "ROYAL MAROON POSHAK", image: "/images/image3.png", title: "Traditional royal maroon poshak with golden thread work and mirror embellishments", price: "4,200", delprice: "5,200" },
  { id: 4, heading: "GULABBAAH POSHAK", image: "/images/image.png", title: "Natural crep poshak with intricate thread embroidery and traditional patterns", price: "5,999", delprice: "7,999" },
  { id: 5, heading: "FULBAHAR POSHAK", image: "/images/image1.png", title: "Thread embroidery with zari and sequence work, perfect for special occasions", price: "3,800", delprice: "4,500" },
  { id: 6, heading: "ROYAL MAROON POSHAK", image: "/images/image3.png", title: "Traditional royal maroon poshak with golden thread work and mirror embellishments", price: "4,200", delprice: "5,200" }
]


export default function Product() {
  return (
    <>

      <div className='container lg:px-[40px] px-[20px] mx-auto lg:py-[40px] py-[20px] '>
        <h1 className='customfont lg:text-[40px] text-[30px] font-extrabold text-[#2c2122]'>Our Products</h1>
        <p className='text-[#a98c97] lg:text-[17px] text-[12px] font-semibold'>Explore our exquisite collection of traditional Rajputi poshaks, crafted with authentic techniques <br />and premium materials.</p>

      </div>

      {/* product features section*/}
      {/* ye only Desktop ke liye hai */}
      <div className='container  hidden md:block max-w-[100%] lg:px-[40px] px-[20px] mx-auto '>
        <div className='flex justify-between'>
          <h1 className='text-[#a98c97] font-semibold'>Showing 6 products</h1>
          <div className='flex justify-between gap-[20px]'>
            <form action="">
              <select name="" id="" className='p-[3px] border border-gray-500 rounded'>
                <option value="">Featured</option>
                <option value="Price: Low to High">Price: Low to High</option>
                <option value="Price: High to Low">Price: High to Low</option>
                <option value="Newest First">Newest First</option>
                <option value="Highest Rated">Highest Rated</option>
              </select>
            </form>
            <div className='flex justify-between items-center  gap-[10px] px-[5px] border-2 border-gray-500 hover:bg-[#c91d39] hover:text-white rounded cursor-pointer'>
              <div className='w-[20px] '>< FaTableCells /></div>
              <div className='w-[20px]  '><IoReorderThree /></div>
            </div>
          </div>
        </div>
      </div>

      {/* ye only mobile ke liye hai filter section */}
      <div className='block md:hidden px-[20px]'>
        <div className=' flex justify-between items-center'>
          <div className='flex justify-between items-center border border-gray-500 gap-[20px] p-[5px] rounded '>
            <h1><CiFilter /></h1>
            <p className='text-bold'>Filters</p>
          </div>
          <div><p className='text-[#a98c97] text-[15px] font-semibold'>Showing 6 Product</p></div>
        </div>
      </div>

      {/* ye only mobile me show hoga options sections */}
      <div className='block md:hidden px-[20px]'>
        <div className='flex justify-between items-center my-[20px]'>
          <form action="">
            <select name="" id="" className='p-[3px] border border-gray-500 rounded'>
              <option value="">Featured</option>
              <option value="Price: Low to High">Price: Low to High</option>
              <option value="Price: High to Low">Price: High to Low</option>
              <option value="Newest First">Newest First</option>
              <option value="Highest Rated">Highest Rated</option>
            </select>
          </form>
          <div className='flex justify-between items-center  gap-[10px] px-[5px] border-2 border-gray-500 hover:bg-[#c91d39] hover:text-white rounded cursor-pointer'>
            <div className='p-[3px] '>< FaTableCells /></div>
            <div className='p-[3px]  '><IoReorderThree /></div>
          </div>
        </div>
      </div>


      {/* Listing section */}
      <div className='container lg:px-[40px] px-[20px] mx-auto lg:py-[20px]'>
        <div className='flex justify-between'>
          <div className='w-[18%]'>
            <div className='p-[10px] border border-gray-500 rounded'>
              <h3 className='text-[#2e2123] text-2xl font-semibold py-[10px]'>Category</h3>
              <div className='flex gap-[10px] items-center py-[3px]'>
                <input type="checkbox" name='' className='border ' />
                <p>Pure Poshak</p>
              </div>
              <div className='flex gap-[10px] items-center py-[3px]'>
                <input type="checkbox" name='' className='border ' />
                <p>Semi Pure Poshak</p>
              </div>
              <div className='flex gap-[10px] items-center py-[3px]'>
                <input type="checkbox" name='' className='border ' />
                <p>Stitched Poshaks</p>
              </div>
              <div className='flex gap-[10px] items-center py-[3px]'>
                <input type="checkbox" name='' className='border ' />
                <p>Regular Suit</p>
              </div>
            </div>

            <form action="" className='p-[10px] border border-gray-500 rounded mt-[30px]'>
              <h1 className='text-[#2e2123] text-2xl font-semibold py-[10px]'>Price Range</h1>
              <div className='flex gap-[10px] items-center py-[3px]'>
                <input type="checkbox" name='' className='border ' />
                <p>Under ₹3,000</p>
              </div>
              <div className='flex gap-[10px] items-center py-[3px]'>
                <input type="checkbox" name='' className='border ' />
                <p>₹3,000 - ₹5,000</p>
              </div>
              <div className='flex gap-[10px] items-center py-[3px]'>
                <input type="checkbox" name='' className='border ' />
                <p>₹5,000 - ₹8,000</p>
              </div>
              <div className='flex gap-[10px] items-center py-[3px]'>
                <input type="checkbox" name='' className='border ' />
                <p>Above ₹8,000</p>
              </div>
            </form>

            <form action="" className='p-[10px] border border-gray-500 rounded mt-[30px]'>
              <h1 className='text-[#2e2123] text-2xl font-semibold py-[10px]'>Features</h1>
              <div className='flex gap-[10px] items-center py-[3px]'>
                <input type="checkbox" name='' className='border ' />
                <p>Free Shipping</p>
              </div>
              <div className='flex gap-[10px] items-center py-[3px]'>
                <input type="checkbox" name='' className='border ' />
                <p>New Arrivals</p>
              </div>
              <div className='flex gap-[10px] items-center py-[3px]'>
                <input type="checkbox" name='' className='border ' />
                <p>On Sale</p>
              </div>
            </form>
          </div>

          <div className='w-[80%]  '>
            <div className='max-w-[100%] mx-auto grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-[40px] px-[10px]'>
              {NEWARRIVALS.map((items, index) => (
                
                <div key={index}>
                  <Link href={'/product'}>
                  <div className='h-[500px] group shadow-2xl '>
                    <div className='  bg-center w-full h-[300px] p-[20px] rounded-t-lg shadow-[inset_0_-100px_50px_-40px_rgba(0,0,0,0.3)]   cursor-pointer  transition-all duration-500 ease-in-out group-hover:scale-105 
                 bg-[length:100%_100%] group-hover:bg-[length:110%_110%] flex flex-col justify-between  ' style={{ backgroundImage: `url(${items.image})` }}>
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

                      <div className=' py-[5px] flex text-[#eebd2b] text-xl'><MdOutlineStar /><MdOutlineStar /><MdOutlineStar /><MdOutlineStar /><MdOutlineStar /></div>
                      <h1 className=' customfont text-xl text-[#432122] group-hover:text-[#c91d39] font-bold'>{items.heading}</h1>
                      <p className='text-[#c9a29e] py-[10px]' style={{fontSize:14.5}}>{items.title}</p>
                      <div className='flex justify-between '>
                        <h1 className='text-[#c91d39] font-semibold text-xl flex items-center  '><FaIndianRupeeSign /> {items.price}
                          <span className='text-[#c9a29e] flex items-center text-[15px] px-[10px]'><FaIndianRupeeSign /><del>{items.delprice}</del></span></h1>
                        <p className='text-[#f09263] text-[12px] font-semibold'>FREE Shipping</p>
                      </div>
                    </div>
                  </div>
                  </Link>
                </div>

              ))}

            </div>

          </div>
        </div>
      </div>
    </>
  )
}