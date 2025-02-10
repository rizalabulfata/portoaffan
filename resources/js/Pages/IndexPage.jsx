import { Head, Link } from '@inertiajs/react';
import { Carousel } from "flowbite-react";

export default function IndexPage() {
    return (
        <>
            <div className="bg-gray-100 text-gray-900">

                {/* <!-- Header --> */}
                <header className="bg-blue-600 text-white text-center py-2">
                    <p>THERE ARE 3 COMMISSION SLOTS LEFT IN THIS MONTH</p>
                </header>

                {/* Section menu */}
                <section className='py-8 grid grid-cols-4 md:grid-cols-4 items-center text-center px-4 md:px-10 lg:px-10 xl:px-10 xl:mx-40 md:mx-auto'>
                    <div>Menu 1</div>
                    <div>Menu 2</div>
                    <div>Menu 3</div>
                    <div>Menu 4</div>
                </section>

                {/* <!-- Introduction --> */}
                <section className='py-8 grid grid-cols-2 md:grid-cols-2 items-center px-4 md:px-10 lg:px-10 xl:px-10 xl:mx-40 md:mx-auto'>
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
                <section className='py-8 grid grid-cols-4 md:grid-cols-4 items-center text-center px-4 md:px-10 lg:px-10 xl:px-10 xl:mx-40 md:mx-auto'>

                    <div className='flex justify-center items-center'>
                        <span className='size-8'>
                            <a href="#">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 576 512">
                                    <path
                                        d="M232 237.2c31.8-15.2 48.4-38.2 48.4-74 0-70.6-52.6-87.8-113.3-87.8H0v354.4h171.8c64.4 0 124.9-30.9 124.9-102.9 0-44.5-21.1-77.4-64.7-89.7zM77.9 135.9H151c28.1 0 53.4 7.9 53.4 40.5 0 30.1-19.7 42.2-47.5 42.2h-79v-82.7zm83.3 233.7H77.9V272h84.9c34.3 0 56 14.3 56 50.6 0 35.8-25.9 47-57.6 47zm358.5-240.7H376V94h143.7v34.9zM576 305.2c0-75.9-44.4-139.2-124.9-139.2-78.2 0-131.3 58.8-131.3 135.8 0 79.9 50.3 134.7 131.3 134.7 61.3 0 101-27.6 120.1-86.3H509c-6.7 21.9-34.3 33.5-55.7 33.5-41.3 0-63-24.2-63-65.3h185.1c.3-4.2 .6-8.7 .6-13.2zM390.4 274c2.3-33.7 24.7-54.8 58.5-54.8 35.4 0 53.2 20.8 56.2 54.8H390.4z" />
                                </svg>
                            </a>
                        </span>
                    </div>

                    <div class="flex justify-center items-center">
                        <span className='size-8'>
                            <a href="#">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 640 512">
                                    <path
                                        d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z" />
                                </svg>
                            </a>
                        </span>
                    </div>

                    <div className="flex justify-center items-center">
                        <span class="size-8">
                            <a href="#">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 496 512">
                                    <path
                                        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                                </svg>
                            </a>
                        </span>
                    </div>

                    <div className="flex justify-center items-center" >
                        <span class="size-8">
                            <a href="#">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 448 512">
                                    <path
                                        d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                                </svg>
                            </a>
                        </span>
                    </div>
                </section>

                {/* <!-- Services --> */}
                <section className="py-8 items-center px-4 md:px-10 lg:px-10 xl:px-10 xl:mx-40 md:mx-auto">
                    <h2 className="text-2xl font-bold text-center mb-6">SERVICE!!!</h2>

                    <div className="grid grid-cols-2 justify-items-center gap-2">

                        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
                            <div className="grid grid-cols-1 sm:grid-cols-2">
                                <img src="https://i.pravatar.cc/200" alt="Graphic Design" className="rounded-t-lg" />
                                <div className='ps-4'>
                                    <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Need a help in Claim?</h5>
                                    <p className="mb-3 text-gray-500">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
                                </div>
                            </div>

                        </div>
                        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
                            <div className="grid grid-cols-1 sm:grid-cols-2">
                                <img src="https://i.pravatar.cc/200" alt="Graphic Design" className="rounded-t-lg" />
                                <div className='ps-4'>
                                    <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Need a help in Claim?</h5>
                                    <p className="mb-3 text-gray-500">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
                            <div className="grid grid-cols-1 sm:grid-cols-2">
                                <img src="https://i.pravatar.cc/200" alt="Graphic Design" className="rounded-t-lg" />
                                <div className='ps-4'>
                                    <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Need a help in Claim?</h5>
                                    <p className="mb-3 text-gray-500">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
                            <div className="grid grid-cols-1 sm:grid-cols-2">
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
                <section className="py-8 px-4 md:px-10 lg:px-10 xl:px-10 xl:mx-40 md:mx-auto">
                    <h2 className="text-2xl font-bold text-center mb-6 ">PORTFOLIO</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 max-w-6xl mx-auto">
                        <div className="sm:p-4 h-56 sm:h-64 xl:h-80 2xl:h-96 text-center">
                            <Carousel>
                                <img src="https://i.pravatar.cc/200" alt="Portfolio Image 1" />
                                <img src="https://picsum.photos/200" alt="Portfolio Image 1" />
                            </Carousel>
                            <a href="#" className="text-orange-500 font-bold mt-2 block">SEE MORE</a>
                        </div>
                        <div className="sm:p-4 h-56 sm:h-64 xl:h-80 2xl:h-96 text-center">
                            <Carousel slide={false}>
                                <img src="https://picsum.photos/200" alt="Portfolio Image 1" />
                                <img src="https://i.pravatar.cc/200" alt="Portfolio Image 1" />
                            </Carousel>
                            <a href="#" className="text-orange-500 font-bold mt-2 block">SEE MORE</a>
                        </div>

                        {/* <div className=" p-4 rounded-lg text-center">
                            <img src="https://i.pravatar.cc/200" alt="Portfolio Image 3" className="w-full h-64 object-cover rounded-lg" />
                            <a href="#" className="text-orange-500 font-bold mt-2 block">SEE MORE</a>
                        </div>
                        <div className=" p-4 rounded-lg text-center">
                            <img src="https://i.pravatar.cc/200" alt="Portfolio Image 4" className="w-full h-64 object-cover rounded-lg" />
                            <a href="#" className="text-orange-500 font-bold mt-2 block">SEE MORE</a>
                        </div> */}
                    </div>
                </section>

                {/* <!-- FAQ --> */}
                <section className="py-8 bg-gray-200 px-4 md:px-10 lg:px-10 xl:px-10 xl:mx-40 md:mx-auto">
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