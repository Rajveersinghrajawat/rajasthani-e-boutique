import React from 'react'

export default function page() {
    return (
        <>

            <div className="container mx-auto py-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        {/* Login */}
                        <div className="account_form border border-gray-200 p-6 rounded-md shadow-sm">
                            <h2 className="text-lg font-semibold mb-4">Login</h2>
                            <form className='login' action="#">
                                <p className="mb-4">
                                    <label className="block text-sm font-medium mb-1">
                                        Username or email <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full border border-gray-300 px-3 py-2 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
                                        required
                                    />
                                </p>
                                <p className="mb-4">
                                    <label className="block text-sm font-medium mb-1">
                                        Password <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="password"
                                        className="w-full border border-gray-300 px-3 py-2 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
                                        required
                                    />
                                </p>
                                <div className="login_submit flex items-center justify-between">
                                    {/* <a href="#" className="text-sm text-blue-600 hover:underline">
                                        Lost your password?
                                    </a> */}
                                    <div className="flex items-center space-x-2">
                                        <input id="remember" type="checkbox" className="h-4 w-4" />
                                        <label htmlFor="remember" className="text-sm">Remember me</label>
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="mt-4 w-full bg-[#c91d39] text-white py-2 rounded-md transition"
                                >
                                    Login
                                </button>
                            </form>
                        </div>

                        {/* Register */}
                        <div className="account_form border border-gray-200 p-6 rounded-md shadow-sm">
                            <h2 className="text-lg font-semibold mb-4">Register</h2>
                            <form className='register' action="#">
                                 <p className="mb-4">
                                    <label className="block text-sm font-medium mb-1">
                                        Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full border border-gray-300 px-3 py-2 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
                                        required
                                    />
                                </p>
                                 <p className="mb-4">
                                    <label className="block text-sm font-medium mb-1">
                                        Email address <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        className="w-full border border-gray-300 px-3 py-2 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
                                        required
                                    />
                                </p>
                                <p className="mb-4">
                                    <label className="block text-sm font-medium mb-1">
                                        Phone Number <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        className="w-full border border-gray-300 px-3 py-2 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
                                    />
                                </p>
                                <p className="mb-4">
                                    <label className="block text-sm font-medium mb-1">
                                        Password <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="password"
                                        className="w-full border border-gray-300 px-3 py-2 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
                                    />
                                </p>
                                <button
                                    type="submit"
                                    className="mt-4 w-full bg-[#c91d39] text-white py-2 rounded-md hover:bg-green-700 transition"
                                >
                                    Register
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}
