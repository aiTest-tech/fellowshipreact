import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

// Define a type for the FAQ item
type FaqItem = {
    question: string;
    answer: string;
};

// Define the FAQ data based on the provided questions and answers
const faqData: FaqItem[] = [
    {
        question: "What is the Sardar Patel Chief Minister Fellowship Program by the Government of Gujarat?",
        answer: "To contribute to the enhancement of Governance in the state of Gujarat by infusing innovative and effective approaches into policy-making and service delivery processes. To serve as a catalyst for transformation within government departments promoting a culture of innovation, efficiency, and excellence."
    },
    {
        question: "Who launched the Chief Minister Fellowship Program?",
        answer: "The Program was launched by Hon CM Shri Bhupendrabhai Patel on 31st Oct 2023."
    },
    {
        question: "What is the duration of the Chief Minister Fellowship, 2024?",
        answer: "Fellows will be engaged for a fixed period of 1 year, which may be extended by 1 year at a time. However, their continuation in their respective positions beyond the first year would depend on a satisfactory Annual Performance Review based on clearly defined Key Performance Indicators."
    },
    {
        question: "When can I apply for the Chief Minister Fellowship, 2023?",
        answer: "The application process for the Chief Minister Fellowship starts on 2nd Dec 2023. The last date for the submission of the application is 30th Dec, 2023."
    },
    {
        question: "How much is the application fee for the Chief Minister Fellowship, 2023?",
        answer: "The application fee for the Chief Minister Fellowship is Rs. 500."
    },
    {
        question: "What is the Educational Qualifications, Age and Experience required for Fellowship?",
        answer: "• Standard 10th and 12th passed with minimum 60%\n• Bachelor’s Degree with minimum 60%\n• Importance will be given to the prime national institutes\n• Age shall not be more than 35 years on last date of application\n• Minimum 3 years of experience of relevant subject"
    },
    {
        question: "What are the various stages of the selection process?",
        answer: "The selection process for the Sardar Patel Good Governance CM Fellowship in Gujarat adheres to specific guidelines and regulations set by the government. Interested applicants must apply through the official website https://spipa.gujarat.gov.in and pay an application fee of Rs. 500/-. The selection process follows principles of equal access, open competition, and transparency. Initially, a Scrutiny & Shortlisting Committee (SSC) reviews applications, shortlisting eligible candidates. Personal Statement will be evaluated by experts from IIM-Ahmedabad. The final selection is conducted by a Selection Committee (SC), considering educational qualifications, work experience (40% weightage), personal statement (20% evaluated by IIM-A), and a personal interview (40% weightage). The SC may also include outside experts on a case-by-case basis, a reserve list valid for a year."
    },
    {
        question: "How Many Fellows will be selected?",
        answer: "20 fellows will be appointed at the end of the selection process in the fellowship programme, however, the actual need will be determined over time."
    },
    {
        question: "What will be the Stipend paid to the Fellows?",
        answer: "Fellows selected for this program will receive a monthly stipend of Rs. 1,00,000. The continuation of the fellowship will be determined by mutual consent, and Individual Fellows will get a 10% increase in their Stipend."
    },
    {
        question: "Do I require the original documents at the time of application?",
        answer: "The original documents are not required at the time of application. The information from these documents is to be filled in the application form. The original documents of candidates selected for the interviews are verified on the day of interview. The candidate may get debarred or may have to face the legal proceedings for any discrepancy in the stated information and original documents."
    },
    {
        question: "As a fellow, who will I report to?",
        answer: "Fellows will work directly under the senior government officials, who will mentor the fellows. Fellows will interact frequently with these officials and update them on their assignments. Fellows will have to submit their monthly report to their mentors. Hon’ble Chief Minister will also review the assignments of the fellows as and when required."
    },
    {
        question: "What is the nature of work / assignments undertaken by fellows?",
        answer: "The task will revolve around specific topics, each accompanied by a predetermined problem statement to guide the assignment. The Topics are as follows:\n\n• Improvement in implementation of PM Poshan (MDM) and ICDS schemes\n• Developmental Areas/Block Programme: Reducing wasting/stunting in children\n• To improve enrolment of students in science and mathematics stream at secondary / higher secondary level.\n• Improvement in total Students enrolment in secondary and higher secondary Schools\n• Revising the annual revenue share of government hospitals/facilities under PMJAY scheme\n• To develop a strategy for adoption of light house technology in Government for public programs\n• Recycling of Municipal Waste – Liquid and Solid Waste\n• Develop strategies to promote natural farming in the state\n• Achievement of complete irrigation capacity and optimal utilization of Narmada water resources\n• Tourism Promotion: Heritage, Wildlife, Beach, Conference, Sports, City, Border, Religious, Circuit etc\n• Pollution Control: Industrial and Urban: Problem Statement on the said subject\n• Policy Intelligence Unit Framework\n• To establish Training and Capacity building as a Good Governance practice.\n• Recycling of Rural Waste – Liquid and Solid Waste\n• Technical and financial - work of DISCOMs\n• Viksit 2047 Gujarat Goal and working of various indices\n• Study of cultural relations between Gujarat and other states\n• MBKVY – Mukhyamantri Bhavishyalakshi Kaushalya Vikas Yojana\n• Scholarship Program for International Studies offered by the developing cast welfare Department (Videsh Abhyas Loan Yojana)\n• Financial Assistance Scheme to the Elderly and Handicapped\n• Sustainable livelihood for economic and social development in tribal area"
    },
    {
        question: "Is there a provision of training for the fellows?",
        answer: "Upon enrolment, a mandatory two-week training program will be arranged for all Individual Fellows, jointly conducted by SPIPA and IIM-A. The training includes a two-week attachment with the Head of Department (HOD) and introductory sessions within the department."
    },
    {
        question: "What are the future career opportunities available to fellows?",
        answer: "The experience of working with an important and mammoth institution like the government is a very rare and unique experience. The fellowship program enhances various skills related to management, communication, problem solving, resourcefulness, etc. This experience presents various academic and career opportunities to fellows. Careers in civil services, public policy, policy making, management, consultancy, social sector are some of the avenues."
    }
];

const Faq: React.FC = () => {
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
    // State to track which question's answer is open
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    // Handle the toggling of the answer visibility
    const toggleAnswer = (index: number) => {
        // Toggle the selected question's answer
        setOpenIndex(openIndex === index ? null : index);
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
                <div className="min-h-[350px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
                    <h2 className="sm:text-4xl text-2xl font-bold mb-6 text-gray-200">Frequently Asked Questions</h2>
                </div>
            </div>
            <div className="w-full  bg-[url('assets/img/illusion.png')] bg-repeat-y">
                <div className="container py-3 ">
                    <div className="row align-items-center">
                        <div className="col-lg-12 col-md-12">
                            <div className="section__title port_double">
                                <h2 className="title">Frequently Asked Questions</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-3xl mx-auto py-8 px-4">
                    <h2 className="text-3xl font-semibold mb-6">Sardar Patel Chief Minister Fellowship Program - Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {faqData.map((item, index) => (
                            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
                                <button
                                    onClick={() => toggleAnswer(index)}
                                    className="w-full px-4 py-3 text-left bg-gray-100 hover:bg-gray-200 focus:outline-none">
                                    <span className="font-medium text-lg">{item.question}</span>
                                </button>
                                {openIndex === index && (
                                    <div className="px-4 py-3 text-gray-700 bg-gray-50">
                                        <p>{item.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Faq;
