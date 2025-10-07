import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <>
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <Link href={'/'} className="hover:text-red-600">
          Home
        </Link>
        <span>/</span>
        <Link href="/cart" className="hover:text-red-600">
          Cart
        </Link>
        <span>/</span>
        <span className="text-gray-900 font-medium">Checkout</span>
      </div>

      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left Section - Billing & Shipping */}
        <div className="lg:col-span-2 space-y-8">
          {/* Billing Details */}
          <div className="border rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Billing Details
            </h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="md:col-span-2 border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="md:col-span-2 border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <input
                type="text"
                placeholder="Street Address"
                className="md:col-span-2 border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <input
                type="text"
                placeholder="City"
                className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <input
                type="text"
                placeholder="Postal Code"
                className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <select className="md:col-span-2 border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500">
                <option>India</option>
                <option>USA</option>
                <option>UK</option>
              </select>
            </form>
          </div>

          {/* Payment Method */}
          <div className="border rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Payment Method
            </h2>
            <div className="space-y-3">
              <label className="flex items-center gap-3">
                <input type="radio" name="payment" defaultChecked />
                <span>Credit / Debit Card</span>
              </label>
              <label className="flex items-center gap-3">
                <input type="radio" name="payment" />
                <span>UPI / Netbanking</span>
              </label>
              <label className="flex items-center gap-3">
                <input type="radio" name="payment" />
                <span>Cash on Delivery</span>
              </label>
            </div>
          </div>
        </div>

        {/* Right Section - Order Summary */}
        <div>
          <div className="border rounded-lg p-6 shadow-sm bg-gray-50">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Order Summary
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>GULABBAAH POSHAK</span>
                <span>₹5,999</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="text-green-600">FREE</span>
              </div>
              <div className="border-t pt-3 flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span className="text-red-600">₹5,999</span>
              </div>
            </div>

            <button className="w-full mt-6 bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-red-700 transition">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
