import React, { useEffect, useState } from 'react'
import '../index.css'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'

const AcademicPartner = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const updateScrollProgress = () => {
        // Get total scrollable height
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPosition = window.scrollY;

        // Calculate the percentage of page scrolled
        const progress = (scrollPosition / scrollHeight) * 100;

        // Update state with the calculated progress
        setScrollProgress(progress);
    };

    useEffect(() => {
        // Initialize AOS for animations
        // AOS.init();

        // Add scroll event listener
        window.addEventListener('scroll', updateScrollProgress);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', updateScrollProgress);
        };
    }, []);
    return (
        <>
            <div className="w-full fixed top-0 left-0 z-50">
                <Navbar />
            </div>
            <div
                style={{ width: `${scrollProgress}%` }}
                className="fixed top-0 left-0 h-1 bg-orange-500 transition-all duration-200 ease-in-out z-50"
            ></div>
            {/* <div className="relative mt-[140px] max-w-md:mt-[50px] font-sans before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
                <img
                    src="https://cmogujarat.gov.in/sites/default/files/2024-08/cm-fellowship.jpg"
                    alt="Banner Image"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="min-h-[350px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
                    <h2 className="sm:text-4xl text-2xl font-bold mb-6 text-gray-200">Academic Paetner</h2>
                </div>
            </div> */}
            <main className="fix mt-[140px]">
                <div className="min-h-screen bg-[url('assets/img/illusion.png')] py-10">
                    <div className="container py-3 ">
                        <div className="row align-items-center">
                            <div className="col-lg-12 col-md-12">
                                <div className="section__title port_double">
                                    <h2 className="title">Academic Partner</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
                            {/* Header with image */}
                            <div className="relative font-sans before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
                                <img
                                    src="https://content.jdmagicbox.com/comp/ahmedabad/62/079pf018562/catalogue/indian-institute-of-management-ahmedabad-vastrapur-ahmedabad-management-institutes-sorrvixey6.jpg"
                                    alt="Banner Image"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                <div className="min-h-[350px] relative z-40 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
                                    <h2 className="sm:text-4xl text-2xl font-bold mb-6 text-gray-200">IIM-A Role in Fellowship Program</h2>
                                </div>
                            </div>


                            {/* Content Section */}
                            <div className="py-8 px-6 sm:px-12">
                                <div className="space-y-6 text-gray-700">
                                    <p className="text-xl">
                                        The Indian Institute of Management Ahmedabad (IIM-A) plays a significant role in a program involving the selection and training of fellows. Here's an overview of the roles and responsibilities of IIM-A in this context:
                                    </p>

                                    {/* List of Responsibilities */}
                                    <div className="space-y-4">
                                        <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                                            <h2 className="text-2xl font-semibold">• Evaluation of Personal Statement by IIM-A</h2>
                                        </div>

                                        <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                                            <h2 className="text-2xl font-semibold">• Concurrent Selection & Recommendation Committee (SRC):</h2>
                                            <ul className="list-disc pl-6">
                                                <li>IIM-A is a part of the Committee as an Expert panelist. This committee is responsible for the final recommendation of fellows.</li>
                                            </ul>
                                        </div>

                                        <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                                            <h2 className="text-2xl font-semibold">• Training Program:</h2>
                                            <ul className="list-disc pl-6">
                                                <li>Duration: The training program lasts for one week.</li>
                                                <li>Sessions: There are four sessions per day, each lasting 1 hour and 15 minutes.</li>
                                                <li>Teaching Methodology: The program utilizes the "Case Method" for immersive learning.</li>
                                            </ul>
                                        </div>

                                        <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                                            <h2 className="text-2xl font-semibold">• Fellow Evaluation:</h2>
                                            <ul className="list-disc pl-6">
                                                <li>IIM-A is also involved in the evaluation of the fellows during their tenure. The evaluation process likely includes criteria related to the fellow's engagement, contributions, and overall development during the program.</li>
                                            </ul>
                                        </div>

                                        <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                                            <h2 className="text-2xl font-semibold">• Awarding Certification:</h2>
                                            <ul className="list-disc pl-6">
                                                <li>After the completion of the fellow's tenure, IIM-A collaborates with the GoG to award Fellowship Certification.</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Faculty Section */}
                                    <div className="bg-white p-6 rounded-lg shadow-md mt-8">
                                        <h2 className="text-2xl font-semibold">Faculty Resources</h2>
                                        <p className="mt-2 text-lg">
                                            Prof Satish Deodhar is the Dean (Faculty) and Professor of Economics at IIM-A. He has a Bachelor's and a Master's in Economics from the Gokhale Institute of Politics and Economics, and a PhD in Agricultural Economics from The Ohio State University. He is the recipient of the Outstanding PhD Dissertation Award from the Food Distribution Research Society, USA.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />

        </>
    )
}

export default AcademicPartner