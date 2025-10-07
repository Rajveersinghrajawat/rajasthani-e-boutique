'use client'
import Link from 'next/link';
import React, { useState } from 'react';

export default function page() {
    const [activeTab, setActiveTab] = useState('dashboard');
    const [selectedTitle, setSelectedTitle] = useState("Mr.");

    return (
        <>
            {/* Breadcrumb */}
            <div className="container py-6">
                <div className="max-w-7xl mx-auto px-4">
                    <h3 className="text-xl font-semibold">My Dashboard</h3>
                    <ul className="flex items-center gap-2 text-sm mt-2 text-gray-600">
                        <li><Link href="/" className="hover:text-red-600">Home</Link></li>
                        <li>&gt;</li>
                        <li>My Dashboard</li>
                    </ul>
                </div>
            </div>

            {/* Main Section */}
            <div className="container py-10 border-b">
                <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-8">

                    {/* Sidebar */}
                    <div className="w-full lg:w-1/4">
                        <ul className="flex flex-col space-y-2 border rounded-lg p-4 bg-white">
                            <li>
                                <button onClick={() => setActiveTab('dashboard')}
                                    className={`w-full text-left px-3 py-2 rounded ${activeTab === 'dashboard' ? 'bg-[#c91d39] text-white' : 'hover:bg-gray-100'}`}>
                                    My Dashboard
                                </button>
                            </li>
                            <li>
                                <button onClick={() => setActiveTab('orders')}
                                    className={`w-full text-left px-3 py-2 rounded ${activeTab === 'orders' ? 'bg-[#c91d39] text-white' : 'hover:bg-gray-100'}`}>
                                    Orders
                                </button>
                            </li>
                            <li>
                                <button onClick={() => setActiveTab('profile')}
                                    className={`w-full text-left px-3 py-2 rounded ${activeTab === 'profile' ? 'bg-[#c91d39] text-white' : 'hover:bg-gray-100'}`}>
                                    My Profile
                                </button>
                            </li>
                            <li>
                                <button onClick={() => setActiveTab('password')}
                                    className={`w-full text-left px-3 py-2 rounded ${activeTab === 'password' ? 'bg-[#c91d39] text-white' : 'hover:bg-gray-100'}`}>
                                    Change Password
                                </button>
                            </li>
                            <li>
                                <Link href="/" className="block px-3 py-2 rounded hover:bg-gray-100">Logout</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Content Area */}
                    <div className="w-full lg:w-3/4 bg-white p-6 rounded-lg shadow">

                        {/* Dashboard Content */}
                        {activeTab === 'dashboard' && (
                            <div>
                                <h3 className="text-lg font-semibold mb-2">My Dashboard</h3>
                                <p className="text-gray-600">
                                    From your account dashboard, you can easily check & view your recent orders,
                                    manage your shipping and billing addresses, and edit your password and account details.
                                </p>
                            </div>
                        )}

                        {/* Orders */}
                        {activeTab === 'orders' && (
                            <div>
                                <h3 className="text-lg font-semibold mb-4">Orders</h3>
                                <div className="overflow-x-auto">
                                    <table className="min-w-full border text-sm">
                                        <thead className="bg-gray-100">
                                            <tr>
                                                <th className="px-4 py-2 border">Order</th>
                                                <th className="px-4 py-2 border">Date</th>
                                                <th className="px-4 py-2 border">Status</th>
                                                <th className="px-4 py-2 border">Total</th>
                                                <th className="px-4 py-2 border">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="px-4 py-2 border">1</td>
                                                <td className="px-4 py-2 border">May 10, 2018</td>
                                                <td className="px-4 py-2 border text-green-600">Completed</td>
                                                <td className="px-4 py-2 border">Rs. 25.00 for 1 item</td>
                                                <td className="px-4 py-2 border">
                                                    <Link href="/product-details/your_product_name" className="text-red-600 hover:underline">View</Link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-2 border">2</td>
                                                <td className="px-4 py-2 border">May 10, 2018</td>
                                                <td className="px-4 py-2 border text-yellow-600">Processing</td>
                                                <td className="px-4 py-2 border">Rs. 17.00 for 1 item</td>
                                                <td className="px-4 py-2 border">
                                                    <Link href="/product-details/your_product_name" className="text-red-600 hover:underline">View</Link>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}

                        {/* Profile */}
                        {activeTab === 'profile' && (
                            <div>
                                <h3 className="text-lg font-semibold mb-4">My Profile</h3>
                                <form className="space-y-4">
                                    <div className="flex gap-6">
                                        <label className="flex items-center gap-2">
                                            <input type="radio" value="Mr." checked={selectedTitle === "Mr."}
                                                onChange={(e) => setSelectedTitle(e.target.value)} />
                                            Mr.
                                        </label>
                                        <label className="flex items-center gap-2">
                                            <input type="radio" value="Mrs." checked={selectedTitle === "Mrs."}
                                                onChange={(e) => setSelectedTitle(e.target.value)} />
                                            Mrs.
                                        </label>
                                    </div>
                                    <div>
                                        <label className="block mb-1">Name*</label>
                                        <input type="text" className="w-full border rounded px-3 py-2" />
                                    </div>
                                    <div>
                                        <label className="block mb-1">Email*</label>
                                        <input type="text" className="w-full border rounded px-3 py-2 bg-gray-100" readOnly />
                                    </div>
                                    <div>
                                        <label className="block mb-1">Mobile Number*</label>
                                        <input type="text" className="w-full border rounded px-3 py-2" maxLength="15" />
                                    </div>
                                    <div>
                                        <label className="block mb-1">Address*</label>
                                        <input type="text" className="w-full border rounded px-3 py-2" />
                                    </div>
                                    <button type="submit" className="bg-red-600 text-white px-5 py-2 rounded uppercase">Update</button>
                                </form>
                            </div>
                        )}

                        {/* Change Password */}
                        {activeTab === 'password' && (
                            <div>
                                <h3 className="text-lg font-semibold mb-4">Change Password</h3>
                                <form className="space-y-4">
                                    <div>
                                        <label className="block mb-1">Current Password</label>
                                        <input type="password" className="w-full border rounded px-3 py-2" />
                                    </div>
                                    <div>
                                        <label className="block mb-1">New Password</label>
                                        <input type="password" className="w-full border rounded px-3 py-2" />
                                    </div>
                                    <div>
                                        <label className="block mb-1">Confirm Password</label>
                                        <input type="password" className="w-full border rounded px-3 py-2" />
                                    </div>
                                    <button type="submit" className="bg-red-600 text-white px-5 py-2 rounded uppercase">Change Password</button>
                                </form>
                            </div>
                        )}


                    </div>
                </div>
            </div>
        </>
    )
}
