import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

const About = () => {
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
        // Aos.init();

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
            <div className="relative mt-[140px] max-w-md:mt-12 font-sans before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
                <img
                    src="https://cmogujarat.gov.in/sites/default/files/2024-08/cm-fellowship.jpg"
                    alt="Banner Image"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="min-h-[350px] relative z-40 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
                    <h2 className="sm:text-4xl text-2xl font-bold mb-6 text-gray-200">About Us</h2>
                </div>
            </div>

            <main className="fix mt-[140px] max-w-md:mt-[50px])] bg-[url('assets/img/illusion.png')]">
                <section className="about__area section-pb-110">
                    <div className="container">
                        <div className="row gutter-24 d-flex justify-content-center align-items-center">
                            <div className="text-center mb-5">
                                <h2 className="title">About Us</h2>
                            </div>

                            <div className="col-lg-6">
                                <div className="about-content bg-white shadow py-4 px-5">
                                    <h1 className="about-title font-extrabold text-2xl font-serif">Who We Are</h1>
                                    <p className="py-2">
                                        At the heart of our mission lies a commitment to fostering innovation, leadership, and societal progress.
                                        Established with the vision of empowering future leaders, our organization has become a catalyst for change,
                                        bridging the gap between potential and opportunity.
                                    </p>
                                    <h2 className="about-subtitle text-xl font-semibold mt-4">Our Vision</h2>
                                    <p className="py-2">
                                        To inspire and nurture talent, creating a platform where innovation meets impact. We aim to
                                        cultivate a culture that drives sustainable development and addresses critical challenges of our time.
                                    </p>
                                    <h2 className="about-subtitle text-xl font-semibold mt-4">Our Mission</h2>
                                    <p className="py-2">
                                        Through comprehensive programs, strategic collaborations, and a focus on excellence, we strive to
                                        shape leaders who contribute meaningfully to society, leaving a legacy of progress and innovation.
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-6 about-right">
                                {/* <div className="about__img"> */}
                                <img
                                    src="assets/img/cmgujarat.png"
                                    alt="About Us"
                                    data-aos="fade-left"
                                    data-aos-delay={200}
                                    className="img-fluid rounded shadow"
                                />
                                {/* </div> */}
                            </div>
                        </div>
                    </div>
                </section>

                {/* <section className="values__area section-pb-110 py-5">
                    <div className="container">
                        <div className="text-center mb-5">
                            <h2 className="title">Our Core Values</h2>
                        </div>

                        <div className="row gap-4 justify-content-center">
                            <div className="col-lg-3 col-md-6 value-box bg-white shadow p-4 text-center">
                                <h3 className="value-title font-bold text-lg">Innovation</h3>
                                <p>Encouraging creativity and groundbreaking solutions for real-world challenges.</p>
                            </div>
                            <div className="col-lg-3 col-md-6 value-box bg-white shadow p-4 text-center">
                                <h3 className="value-title font-bold text-lg">Integrity</h3>
                                <p>Upholding transparency, honesty, and ethical practices in everything we do.</p>
                            </div>
                            <div className="col-lg-3 col-md-6 value-box bg-white shadow p-4 text-center">
                                <h3 className="value-title font-bold text-lg">Collaboration</h3>
                                <p>Building strong partnerships to amplify our impact and achieve shared goals.</p>
                            </div>
                            <div className="col-lg-3 col-md-6 value-box bg-white shadow p-4 text-center">
                                <h3 className="value-title font-bold text-lg">Excellence</h3>
                                <p>Striving for the highest standards in all our endeavors, driving impactful outcomes.</p>
                            </div>
                        </div>
                    </div>
                </section> */}
            </main>

            <div className=''>
                <Footer />
            </div>
        </>
    )
}

export default About