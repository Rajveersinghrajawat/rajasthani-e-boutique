"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import { NEWARRIVALS } from "../data";
import { CiHeart } from "react-icons/ci";
import { FiShoppingBag } from "react-icons/fi";
import { MdOutlineStar } from "react-icons/md";
import { FaIndianRupeeSign } from "react-icons/fa6";

export default function ProductPage() {
  const images = [
    "/images/image.png",
    "/images/image1.png",
    "/images/image3.png",
  ];

  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState("details");
  const [Product, SetProduct] = useState([]);

  useEffect(() => {
    SetProduct(NEWARRIVALS);
  })

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-red-600">Home</Link>
        <span>/</span>
        <Link href="/products" className="hover:text-red-600">Products</Link>
        <span>/</span>
        <span className="text-gray-900">GULABBAAH POSHAK</span>
      </div>

      {/* Back Button */}
      <Link
        href="/products"
        className="inline-flex items-center border border-[#eeeaea] px-4 py-2 rounded-md mb-6 hover:bg-gray-100"
      >
        <svg
          className="h-4 w-4 mr-2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        Back to Products
      </Link>

      {/* Product Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Images */}
        <div className="space-y-4">
          <div className="aspect-square overflow-hidden rounded-lg">
            <img
              src={images[selectedImage]}
              alt="Product"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-3 gap-2">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setSelectedImage(i)}
                className={`aspect-square overflow-hidden rounded-md border-2 ${
                  selectedImage === i ? "border-red-500" : "border-gray-200"
                }`}
              >
                <img src={img} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="space-y-6">
          <div>
            <span className="inline-block mb-2 px-2 py-1 text-xs font-semibold rounded-[20px] bg-red-600 text-white">
              NEW ARRIVAL
            </span>
            <h1 className="text-3xl font-bold mb-2">GULABBAAH POSHAK</h1>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-1 text-yellow-500">★★★★★</div>
              <span className="text-sm text-gray-500">(24 reviews)</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold text-red-600">₹5,999</span>
              <span className="text-xl text-gray-400 line-through">₹7,899</span>
              <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-sm rounded">
                25% OFF
              </span>
            </div>
            <p className="text-sm text-green-600 font-medium">
              FREE Shipping on this product
            </p>
          </div>

          <p className="text-gray-600">
            This exquisite Gulabbaah Poshak is crafted from natural crepe fabric and features
            intricate thread embroidery with traditional Rajasthani patterns. Perfect for
            weddings and festivals.
          </p>

          {/* Sizes */}
          <div>
            <h3 className="font-semibold mb-3">Size</h3>
            <div className="flex gap-2">
              {["S", "M", "L", "XL"].map((s) => (
                <button
                  key={s}
                  className="w-12 h-12 border rounded hover:bg-[#c91d39] hover:text-white"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div>
              <span className="text-sm text-gray-500">In Stock</span>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="flex-1 flex items-center justify-center gap-2 bg-[#c91d39] text-white py-3 rounded hover:bg-red-700">
              Add to Cart
            </button>
            <button className="w-12 border rounded hover:bg-gray-100">♡</button>
          </div>

          {/* Features */}
          <div className="space-y-3 pt-4 border-t">
            <div className="flex items-center gap-3 text-sm">
              🚚 <span>Free shipping on orders above ₹2,000</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              ✅ <span>100% authentic products</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              🔄 <span>Easy 7-day returns</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-16">
        <div className="grid grid-cols-3 border-b">
          <button
            onClick={() => setActiveTab("details")}
            className={`py-2 font-medium ${
              activeTab === "details"
                ? "border-b-2 border-red-600 text-red-600"
                : "text-gray-500"
            }`}
          >
            Product Details
          </button>
          <button
            onClick={() => setActiveTab("care")}
            className={`py-2 font-medium ${
              activeTab === "care"
                ? "border-b-2 border-[#c91d39] text-[#c91d39]"
                : "text-gray-500"
            }`}
          >
            Care Instructions
          </button>
          <button
            onClick={() => setActiveTab("reviews")}
            className={`py-2 font-medium ${
              activeTab === "reviews"
                ? "border-b-2 border-red-600 text-red-600"
                : "text-gray-500"
            }`}
          >
            Reviews (24)
          </button>
        </div>

        {activeTab === "details" && (
          <div className="p-6 border rounded-b">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Specifications</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li><strong>SKU:</strong> RAN-GP-001</li>
                  <li><strong>Fabric:</strong> Natural Crepe</li>
                  <li><strong>Work:</strong> Thread Embroidery</li>
                  <li><strong>Occasion:</strong> Festival, Wedding</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Description</h4>
                <p className="text-sm text-gray-600">
                  This beautiful poshak represents the rich cultural heritage of Rajasthan.
                  Each piece is carefully crafted by artisans using traditional techniques.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "care" && (
          <div className="p-6 border rounded-b">
            <h4 className="font-semibold mb-4">Care Instructions</h4>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Dry clean only</li>
              <li>• Store in cool, dry place</li>
              <li>• Avoid direct sunlight</li>
              <li>• Handle embroidery with care</li>
              <li>• Iron on low heat</li>
            </ul>
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="p-6 border rounded-b">
            <h4 className="font-semibold mb-4">Customer Reviews</h4>
            <p className="text-gray-600">Reviews coming soon...</p>
          </div>
        )}
      </div>

      {/* Related Products */}
      <div>
        <h2 className="text-2xl font-bold mb-8">You might also like</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
      </div>
    </div>
  );
}
