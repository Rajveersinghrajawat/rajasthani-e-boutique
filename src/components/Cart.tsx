import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Trash2 } from 'lucide-react'
import BestSellProducts from './BestSellProducts'

export default function Cart() {
    return (
        <>
            <Header />

            <section className="py-5 border-b">
                {/* Page Title */}
                <div className="container mb-4 border-b py-3">
                    <h1 className="text-center text-4xl font-serif font-bold text-foreground mb-4">
                        Cart Page
                    </h1>
                </div>

                {/* Cart Table */}
                <div className="container overflow-x-auto py-5">
                    <table className="w-full border border-gray-200 text-center">
                        <thead className="bg-gray-100 border-b-2 border-b-amber-700">
                            <tr>
                                <th className="p-3">Delete</th>
                                <th className="p-3">Image</th>
                                <th className="p-3">Product</th>
                                <th className="p-3">Price</th>
                                <th className="p-3">Quantity</th>
                                <th className="p-3">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b">
                                <td className="p-3 text-amber-700">
                                    <button className="text-amber-700 hover:text-red-600">
                                        <Trash2 size={22} strokeWidth={2} />
                                    </button>
                                </td>
                                <td className="p-3">
                                    <img
                                        src="https://via.placeholder.com/120"
                                        alt="Product"
                                        className="w-28 h-auto mx-auto"
                                    />
                                </td>
                                <td className="p-3 font-medium">Caroline Study Tables</td>
                                <td className="p-3 font-bold">Rs. 2,500</td>
                                <td className="p-3">
                                    <div className="flex items-center justify-center gap-2">
                                        <span>Quantity</span>
                                        <input
                                            type="number"
                                            value={1}
                                            min={1}
                                            className="w-16 border border-gray-300 p-1 text-center"
                                        />
                                    </div>
                                </td>
                                <td className="p-3 font-bold">Rs. 2,500</td>
                            </tr>
                        </tbody>
                    </table>

                </div>

                {/* Coupon & Totals */}
                <div className="container mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Coupon */}
                    <div className="border border-gray-200">
                        <div className="bg-gradient-royal text-white p-3 font-bold">COUPON</div>
                        <div className="p-4">
                            <p className="mb-3">Enter your coupon code if you have one.</p>
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    placeholder="Coupon code"
                                    className="border border-gray-300 px-3 py-1 w-[70%]"
                                />
                                <button className="bg-gradient-royal text-white px-4 py-2 hover:text-royal-gold">
                                    APPLY COUPON
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Cart Totals */}
                    <div className="border border-gray-200">
                        <div className="bg-gradient-royal text-white p-3 font-bold">CART TOTALS</div>
                        <div className="p-4 space-y-3">
                            <div className="flex justify-between border-b pb-1">
                                <span>Subtotal</span>
                                <span>Rs. 2,500</span>
                            </div>
                            <div className="flex justify-between border-b pb-1">
                                <span>Discount (-)</span>
                                <span>Rs. 0</span>
                            </div>
                            <div className="flex justify-between font-bold text-lg">
                                <span>Total</span>
                                <span>Rs. 2,500</span>
                            </div>
                            <button className="bg-gradient-royal text-white px-5 py-2 w-full hover:text-royal-gold">
                                Proceed To Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </section>


            <BestSellProducts />

            <Footer />
        </>
    )
}


