import React from 'react'
import '../index.css'

const AcademicPartner = () => {
    return (
        <>
            <section className="px-8 py-20">
                <div className="container mx-auto mb-20 text-center">
                    <p className="block antialiased font-sans text-base leading-relaxed text-blue-gray-900 mb-2 font-bold uppercase" />
                    <h1 className="block antialiased tracking-normal font-sans text-5xl font-semibold leading-tight text-blue-gray-900 mb-4 !text-4xl !leading-snug lg:!text-5xl">
                        Our Academic Partner
                    </h1>
                    <p className="block antialiased font-sans text-xl font-normal leading-relaxed text-inherit mx-auto w-full px-4 !text-gray-500 lg:w-8/12 lg:px-8">
                        Learn more about our partnerships and how they benefit our customers.
                    </p>
                </div>
                <div className="container grid items-start grid-cols-1 pb-16 mx-auto gap-y-20 gap-x-8 md:grid-cols-2 lg:grid-cols-3">
                    <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
                        <div className="relative bg-clip-border mx-4 rounded-xl overflow-hidden bg-white text-gray-700 shadow-lg -mt-6 h-64">
                            <img
                                src="https://bucket.material-tailwind.com/magic-ai/e5b11b81800c299dc5bf3058c01a0fd8eab13edffb22d56ea9a04469db456c47.jpg"
                                alt="Partner 1"
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="p-6">
                            <p className="block antialiased font-sans text-sm font-light leading-normal text-blue-500 mb-2 !font-semibold">
                                Technology
                            </p>
                            <a
                                href="#"
                                className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mb-2 normal-case transition-colors hover:text-gray-700"
                            >
                                Partner 1
                            </a>
                            <p className="block antialiased font-sans text-base leading-relaxed text-inherit mb-6 font-normal !text-gray-500">
                                We have partnered with a leading technology company to bring you the
                                latest innovations in e-commerce. Together, we are constantly working
                                to improve our platform and provide you with the best shopping
                                experience.
                            </p>
                            <div className="flex items-center gap-3">
                                <img
                                    src="https://bucket.material-tailwind.com/magic-ai/e98336a5892b5dac519cb848fb56d5c0756094fd462598eac05a5623d181a9f9.jpg"
                                    alt="John Smith"
                                    className="inline-block relative object-cover object-center !rounded-full w-9 h-9 rounded-md"
                                />
                                <div className="flex flex-col">
                                    <p className="block antialiased font-sans text-sm font-light leading-normal text-blue-gray-900 !font-semibold">
                                        John Smith
                                    </p>
                                    <p className="block antialiased font-sans text-inherit text-xs font-normal !text-gray-500">
                                        2022-05-15
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
                        <div className="relative bg-clip-border mx-4 rounded-xl overflow-hidden bg-white text-gray-700 shadow-lg -mt-6 h-64">
                            <img
                                src="https://bucket.material-tailwind.com/magic-ai/223f39399ae07a521437b1cf2c3b9da121acafc2c6fe45d06c5a21406db2c75f.jpg"
                                alt="Partner 2"
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="p-6">
                            <p className="block antialiased font-sans text-sm font-light leading-normal text-blue-500 mb-2 !font-semibold">
                                Logistics
                            </p>
                            <a
                                href="#"
                                className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mb-2 normal-case transition-colors hover:text-gray-700"
                            >
                                Partner 2
                            </a>
                            <p className="block antialiased font-sans text-base leading-relaxed text-inherit mb-6 font-normal !text-gray-500">
                                Our partnership with an international logistics provider allows us to
                                ship products to customers worldwide. With their extensive network and
                                expertise, we can ensure fast and reliable delivery to any
                                destination.
                            </p>
                            <div className="flex items-center gap-3">
                                <img
                                    src="https://bucket.material-tailwind.com/magic-ai/ed039214fedce398fc16d4984cf922030f243bbf540c3d8daf88a2fb24aa28c0.jpg"
                                    alt="Jane Doe"
                                    className="inline-block relative object-cover object-center !rounded-full w-9 h-9 rounded-md"
                                />
                                <div className="flex flex-col">
                                    <p className="block antialiased font-sans text-sm font-light leading-normal text-blue-gray-900 !font-semibold">
                                        Jane Doe
                                    </p>
                                    <p className="block antialiased font-sans text-inherit text-xs font-normal !text-gray-500">
                                        2022-06-01
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
                        <div className="relative bg-clip-border mx-4 rounded-xl overflow-hidden bg-white text-gray-700 shadow-lg -mt-6 h-64">
                            <img
                                src="https://bucket.material-tailwind.com/magic-ai/8b853b8a4d78de25444e9fea9396826cb4befdb0c6d3e392c864afe25e02f55e.jpg"
                                alt="Partner 3"
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="p-6">
                            <p className="block antialiased font-sans text-sm font-light leading-normal text-blue-500 mb-2 !font-semibold">
                                Payment
                            </p>
                            <a
                                href="#"
                                className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mb-2 normal-case transition-colors hover:text-gray-700"
                            >
                                Partner 3
                            </a>
                            <p className="block antialiased font-sans text-base leading-relaxed text-inherit mb-6 font-normal !text-gray-500">
                                To ensure the security of your transactions, we have partnered with a
                                leading payment gateway. Their advanced encryption technology and
                                fraud detection systems protect your sensitive information and provide
                                a seamless checkout process.
                            </p>
                            <div className="flex items-center gap-3">
                                <img
                                    src="https://bucket.material-tailwind.com/magic-ai/891e2015f2b8a2e702f4261569b0f7982320cda1302c127d9a09075449d06444.jpg"
                                    alt="Mark Johnson"
                                    className="inline-block relative object-cover object-center !rounded-full w-9 h-9 rounded-md"
                                />
                                <div className="flex flex-col">
                                    <p className="block antialiased font-sans text-sm font-light leading-normal text-blue-gray-900 !font-semibold">
                                        Mark Johnson
                                    </p>
                                    <p className="block antialiased font-sans text-inherit text-xs font-normal !text-gray-500">
                                        2022-07-10
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <button
                        className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20 inline-flex items-center"
                        type="button"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            aria-hidden="true"
                            data-slot="icon"
                            className="w-5 h-5 mr-2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 4.5v15m0 0 6.75-6.75M12 19.5l-6.75-6.75"
                            />
                        </svg>
                        view more
                    </button>
                </div>
            </section>

        </>
    )
}

export default AcademicPartner