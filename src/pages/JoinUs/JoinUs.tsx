// @ts-nocheck
import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { IoCloseSharp } from "react-icons/io5";
import { FaRegEye } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';


const JoinUs = () => {
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
    const [isPdfOpen, setIsPdfOpen] = useState(false);
    const [pdfSrc, setPdfSrc] = useState("");

    // Sample array of project data (replace with actual data)
    const projects = [
        
        {
            name: "Government Resolution no. GAD/MSM/e-file/1/2024/6058/ARTD2 dated 18/11/2024 in Gujarati.",
            viewUrl: "assets/docs/GAD_MSM_E-file_1_2023_6058_ARTD2_18112024_GU.pdf",
            downloadUrl: "assets/docs/GAD_MSM_E-file_1_2023_6058_ARTD2_18112024_GU.pdf"
        },
        {
            name: "Last Advertisement for the SARDAR PATEL GOOD GOVERNANCE CM FELLOWSHIP PROGRAM 2025-26",
            viewUrl: "assets/docs/Last_Advertisement_2025_26.pdf",
            downloadUrl: "assets/docs/Last_Advertisement_2025_26.pdf"
        },
        {
            name: "General Administration Department Government Resolution no. GAD/MSM/e-file/1/2023/7162/ARTD2 dated 24/11/2023 in Gujarati",
            viewUrl: "assets/docs/GAD_MSM_e-file_1_2023_7162_ARTD2_24112023_GU.pdf",
            downloadUrl: "assets/docs/GAD_MSM_e-file_1_2023_7162_ARTD2_24112023_GU.pdf"
        },
    ];

    const handleOpenPdf = (url) => {
        setPdfSrc(url); // Set the URL of the PDF to be viewed
        setIsPdfOpen(true);
    };

    const handleClosePdf = () => {
        setIsPdfOpen(false);
    };

    return (
        <>
            <div className="w-full fixed top-0 left-0 z-50">
                <Navbar />
            </div>
            <div
                style={{ width: `${scrollProgress}%` }}
                className="fixed top-0 left-0 h-1 bg-orange-500 transition-all duration-200 ease-in-out z-50"
            ></div>
            <div className="relative mt-[140px] max-w-md:mt-[50px] font-sans before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
                <img
                    src="https://cmogujarat.gov.in/sites/default/files/2024-08/cm-fellowship.jpg"
                    alt="Banner Image"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="min-h-[350px] relative z-40 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
                    <h2 className="sm:text-4xl text-2xl font-bold mb-6 text-gray-200">Join Us</h2>
                </div>
            </div>
            <div className="min-h-screen bg-[url('assets/img/illusion.png')] p-8">
                <div className="container py-3 ">
                    <div className="row align-items-center">
                        <div className="col-lg-12 col-md-12">
                            <div className="section__title port_double">
                                <h2 className="title">Join Us</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-5xl mx-auto">
                    
                    {/* Title Section */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h1 className="text-3xl font-semibold text-center">Useful information for CM Fellow Recruitment</h1>
                        <p className="mt-4 text-center">Please read the instructions and follow carefully</p>
                    </div>

                    {/* Key Information */}
                    <div className="bg-white p-6 rounded-lg shadow-lg mt-6">
                        <h2 className="text-xl font-semibold">Key Information</h2>
                        <ul className="list-disc pl-6 space-y-2 mt-4">
                            <li><strong>Monthly Stipend:</strong> Rs. 1,00,000/- + Rs. 10,000 (LTA)</li>
                            <li><strong>Age Criteria:</strong> Should not be more than 35 years as on the last date of application</li>
                            <li><strong>Application Fees:</strong> Rs. 500/- (Non-refundable)</li>
                        </ul>
                    </div>

                    {/* Important Things to Consider */}
                    <div className="bg-white p-6 rounded-lg shadow-lg mt-6">
                        <h2 className="text-xl font-semibold">Important Things to Consider While Applying</h2>
                        <ul className="list-disc pl-6 space-y-2 mt-4">
                            <li>Applicants must fill their name as per the name in the SSC marksheet.</li>
                            <li>Applicants must have passed 10th, 12th, and graduation with 60% marks.</li>
                            <li>Applicant also has to fill the details if graduation or post graduation is done from Prime national institute </li>
                            <li>Applicant also has to fill the details if graduation or post graduation is done from International/foreign University/Institute</li>
                            <li>If the applicant has experience in a Government/Private organization for a period of three years or more, it should be indicated.</li>
                            <li>In the online application, the applicant has to write a personal statement in 1000 to 1200 words about his/her suitability as a fellow And don't use special characters</li>
                            <li>The subject/project mentioned in row-12, column-2 of the sheet mentioned in Annexure-2 of the resolution dated 24/11/2023 attached herewith shall be considered valid.</li>
                        </ul>
                    </div>

                    {/* Document Download */}
                    <div className="bg-white p-6 rounded-lg shadow-lg mt-6">
                        <h2 className="text-xl font-semibold">Government Resolutions</h2>
                        <p className="mt-4">
                            The following document contains the General Administration Department GR no. GAD/MSM/e-file/1/202/7162/ARTD2 dated 24/11/2023 in Gujarati and English and GR no. GAD/MSM/e-file/1/2024/6058/ARTD2 dated 18/11/2024 in Gujarati.
                        </p>
                        <p className='py-2'>
                            In case of any issue concerning out of the GR, the Gujarati version will be considered final.
                        </p>
                        {/* <div className="space-x-4">
                            <a
                                href="assets/docs/useful.pdf"
                                className="text-blue-600 hover:text-blue-800 mt-2 inline-block"
                                download
                            >
                            </a>
                        </div> */}

                        {/* PDF Viewer Modal */}
                        {isPdfOpen && (
                            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                                <div className="bg-white p-2 rounded-lg w-3/4 h-full overflow-auto">
                                    <button
                                        onClick={handleClosePdf}
                                        className="absolute top-2 right-2 text-white bg-red-500 p-2 rounded-full"
                                    >
                                        <IoCloseSharp />
                                    </button>
                                    {/* Embed PDF inside a modal */}
                                    <embed
                                        src={pdfSrc}
                                        type="application/pdf"
                                        className="w-full h-full"
                                    />
                                </div>
                            </div>
                        )}

                        <div className="relative overflow-x-auto">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            Annexure
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Document
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {projects.map((project, index) => (
                                        <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <th
                                                scope="row"
                                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black"
                                            >
                                                {project.name}
                                            </th>
                                            <td className="px-6 py-4">
                                                <div className='flex justify-between items-center gap-2'>
                                                    <div className='cursor-pointer'>
                                                        <FaRegEye onClick={() => handleOpenPdf(project.viewUrl)} />
                                                    </div>
                                                    <div className='cursor-pointer'>
                                                        <a href={project.downloadUrl} download>
                                                            <FaDownload />
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default JoinUs;
