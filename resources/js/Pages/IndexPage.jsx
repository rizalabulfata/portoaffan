import { Head, Link } from '@inertiajs/react';
import { Carousel } from "flowbite-react";

export default function IndexPage() {
    return (
        <>
            <div className="bg-gray-100 text-gray-900">

                {/* <!-- Header --> */}
                <header className="bg-blue-600 text-white text-center py-4">
                    <p>THERE ARE 3 COMMISSION SLOTS LEFT IN THIS MONTH</p>
                </header>

                {/* Section menu */}
                <section className='py-8 grid grid-cols-4 md:grid-cols-4 items-center text-center px-4 lg:mx-80 mx-auto'>
                    <div>Menu 1</div>
                    <div>Menu 2</div>
                    <div>Menu 3</div>
                    <div>Menu 4</div>
                </section>

                {/* <!-- Introduction --> */}
                <section className='py-8 grid grid-cols-2 md:grid-cols-2 items-center px-4 lg:mx-80 mx-auto'>
                    <div className='justify-start'>
                        <h1 className="lg:text-6xl sm:text-4xl font-bold mb-4">DO YOU HAVE PROBLEM WITH GRAPHIC DESIGN?</h1>
                        <p className="mb-6">LET'S TOUCH YOUR AUDIENCE WITH STUNNING GRAPHIC DESIGN</p>
                        <a href="#" className="bg-green-500 text-white px-4 py-2 rounded">Let's Talk !!!</a>
                    </div>
                    <div className='flex justify-end'>
                        <img src="https://i.pravatar.cc/300" alt="Graphic Design" className="object-contain rounded shadow-md" />
                    </div>
                </section>

                {/* Social media */}
                <section className='py-8 grid grid-cols-4 md:grid-cols-4 items-center text-center px-4 lg:mx-80 mx-auto'>
                    <div>Menu 1</div>
                    <div>Menu 2</div>
                    <div>Menu 3</div>
                    <div>Menu 4</div>
                </section>

                {/* <!-- Services --> */}
                <section className="py-8 items-center px-4 lg:mx-80 mx-auto'">
                    <h2 className="text-2xl font-bold text-center mb-6">SERVICE!!!</h2>

                    <div className="grid grid-cols-2 justify-items-center gap-2">

                        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
                            <div className="grid grid-cols-2">
                                <img src="https://i.pravatar.cc/200" alt="Graphic Design" className="rounded-t-lg" />
                                <div className='ps-4'>
                                    <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Need a help in Claim?</h5>
                                    <p className="mb-3 text-gray-500">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
                            <div className="grid grid-cols-2">
                                <img src="https://i.pravatar.cc/200" alt="Graphic Design" className="rounded-t-lg" />
                                <div className='ps-4'>
                                    <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Need a help in Claim?</h5>
                                    <p className="mb-3 text-gray-500">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
                            <div className="grid grid-cols-2">
                                <img src="https://i.pravatar.cc/200" alt="Graphic Design" className="rounded-t-lg" />
                                <div className='ps-4'>
                                    <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Need a help in Claim?</h5>
                                    <p className="mb-3 text-gray-500">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
                            <div className="grid grid-cols-2">
                                <img src="https://i.pravatar.cc/200" alt="Graphic Design" className="rounded-t-lg" />
                                <div className='ps-4'>
                                    <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Need a help in Claim?</h5>
                                    <p className="mb-3 text-gray-500">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </section>

                {/* <!-- Portfolio --> */}
                <section className="py-8">
                    <h2 className="text-2xl font-bold text-center mb-6 ">PORTFOLIO</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
                        <div className=" p-4 rounded-lg text-center">
                            <img src="https://i.pravatar.cc/200" alt="Portfolio Image 1" className="w-full h-64 object-cover rounded-lg" />
                            <a href="#" className="text-orange-500 font-bold mt-2 block">SEE MORE</a>
                        </div>
                        <div className=" p-4 rounded-lg text-center">
                            <img src="https://i.pravatar.cc/200" alt="Portfolio Image 2" className="w-full h-64 object-cover rounded-lg" />
                            <a href="#" className="text-orange-500 font-bold mt-2 block">SEE MORE</a>
                        </div>
                        <div className=" p-4 rounded-lg text-center">
                            <img src="https://i.pravatar.cc/200" alt="Portfolio Image 3" className="w-full h-64 object-cover rounded-lg" />
                            <a href="#" className="text-orange-500 font-bold mt-2 block">SEE MORE</a>
                        </div>
                        <div className=" p-4 rounded-lg text-center">
                            <img src="https://i.pravatar.cc/200" alt="Portfolio Image 4" className="w-full h-64 object-cover rounded-lg" />
                            <a href="#" className="text-orange-500 font-bold mt-2 block">SEE MORE</a>
                        </div>
                    </div>
                </section>

                {/* <!-- FAQ --> */}
                <section className="py-8 bg-gray-200">
                    <h2 className="text-2xl font-bold text-center mb-6">FAQ</h2>
                    <div className="max-w-2xl mx-auto">
                        <div className="bg-white shadow-md rounded p-4 mb-4">
                            <h3 className="text-xl font-semibold mb-2">What is your turnaround time?</h3>
                            <p className="text-gray-700">Time processing depends on the detail of the idea...</p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}