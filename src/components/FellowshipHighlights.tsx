// src/components/LatestNews.tsx
import React from "react";

// Define the structure for each news item
interface NewsCard {
    date: string;
    description: string;
}

const newsData: NewsCard[] = [
    {
        date: "11 OCT",
        description: "Under the National e-Governance Plan (NeGP) of Government of India, State Data Centre (SDC) has been identified as one of...",
    },
    {
        date: "12 OCT",
        description: "The Gujarat government is working on creating a sustainable model for water resource management, improving local agriculture...",
    },
    {
        date: "13 OCT",
        description: "India’s first high-speed rail project will connect Ahmedabad and Mumbai, drastically reducing travel time...",
    },
    {
        date: "14 OCT",
        description: "A new initiative has been launched for digitalizing government services across rural areas in Gujarat...",
    },
    {
        date: "15 OCT",
        description: "Gujarat is set to launch a world-class offshore wind farm in Pipavav, bringing in clean energy to the state...",
    },
];

const FellowshipHighlights: React.FC = () => {
    return (
        // <section className="news section-pt-110 section-pb-110">
        //     <img
        //         src="assets/img/frame1.png"
        //         alt="shape"
        //         className="rotateme roate-event-bg"
        //     />
        //     <div className="container">
        //         <div className="text-center">
        //             <h2 className="title mb-5">Why Choose the Sardar Patel Fellowship?</h2>
        //         </div>
        //         <div className="col-lg-3 col-lg-12">
        //             <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        //                 Noteworthy technology acquisitions 2021
        //             </h5>
        //             <p className="font-normal text-gray-700 dark:text-gray-400">
        //                 Here are the biggest enterprise technology acquisitions of 2021 so far, in
        //                 reverse chronological order.
        //             </p>
        //         </div>
        //     </div>
        // </section>
        <section className="section-pt-110 section-pb-110 bg-[url('assets/img/illusion.png')] relative">
            <img
                src="assets/img/frame1.png"
                alt="shape"
                className="rotateme roate-event-bg"
            />
            <div className="max-w-6xl mx-auto px-4 relative z-40">
                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
                    Why Choose the Sardar Patel Fellowship?
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Stipend</h3>
                        <p className="text-lg text-gray-700">₹1,00,000/month</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Duration</h3>
                        <p className="text-lg text-gray-700">2 years</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Training</h3>
                        <p className="text-lg text-gray-700">1-week induction at IIM-A + 3-week on-job training</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Departments</h3>
                        <p className="text-lg text-gray-700">Placement in 20+ government sectors</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Certificate</h3>
                        <p className="text-lg text-gray-700">Recognized jointly by IIM-A and GoG</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Impact</h3>
                        <p className="text-lg text-gray-700">Drive real change in governance processes</p>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default FellowshipHighlights;