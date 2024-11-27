import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { useEffect, useState } from 'react';

const MediaPage = () => {
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
            <div className="relative mt-[140px] max-w-md:mt-[50px] font-sans before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
                <img
                    src="https://cmogujarat.gov.in/sites/default/files/2024-08/cm-fellowship.jpg"
                    alt="Banner Image"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="min-h-[350px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
                    <h2 className="sm:text-4xl text-2xl font-bold mb-6 text-gray-200">Gallary</h2>
                </div>
            </div>
            <main className='fix'>
                <section className="ourportfolio section-pt-110 section-pb-110">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-12 col-md-12">
                                <div className="section__title port_double">
                                    <h2 className="title">Our Gallery</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center gutter-24">
                            <div className="col-lg-4 col-md-6">
                                <div className="portfoliosub">
                                    <a href="blog-details.html">
                                        <img src="assets/img/portfolio1.png" alt="img" />
                                    </a>
                                    <div className="pgallery">
                                        <img src="assets/img/photogallery.png" />
                                        <h5>
                                            <a href="#">Photo Gallery</a>
                                        </h5>
                                    </div>
                                    <div className="vector1">
                                        <img src="assets/img/Vector.png" />
                                    </div>
                                    <div className="vector2">
                                        <img src="assets/img/Vector1.png" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="portfoliosub">
                                    <a href="blog-details.html">
                                        <img src="assets/img/portfolio2.png" alt="img" />
                                    </a>
                                    <div className="pgallery">
                                        <img src="assets/img/videogallery.png" />
                                        <h5>
                                            <a href="#">Video Gallery</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="portpartition">
                                    <h4>
                                        Connect with
                                        <br />
                                        <span>Social Media</span>
                                    </h4>
                                    <div className="portsocial">
                                        <div className="d-flex flex-wrap justify-content-between w-100">
                                            <div className="col-lg-4 col-md-4 col-4">
                                                <div className="socialgallery">
                                                    <ul className="socialinner ps-0 d-flex justify-content-center">
                                                        <li>
                                                            <a href="https://www.facebook.com/" target="_blank">
                                                                <i className="fab fa-facebook-f" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-4">
                                                <div className="socialgallery">
                                                    <ul className="socialinner ps-0 d-flex justify-content-center">
                                                        <li>
                                                            <a href="#" target="_blank" className="galleryyoutube">
                                                                <i className="fab fa-youtube" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-4">
                                                <div className="socialgallery">
                                                    <ul className="socialinner ps-0 d-flex justify-content-center">
                                                        <li>
                                                            <a href="#" target="_blank" className="galleryinstagram">
                                                                <i className="fab fa-instagram" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-4">
                                                <div className="socialgallery">
                                                    <ul className="socialinner ps-0 d-flex justify-content-center">
                                                        <li>
                                                            <a
                                                                href="https://www.facebook.com/"
                                                                target="_blank"
                                                                className="gallerytwitter"
                                                            >
                                                                <i className="fab fa-twitter" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-4">
                                                <div className="socialgallery">
                                                    <ul className="socialinner ps-0 d-flex justify-content-center">
                                                        <li>
                                                            <a
                                                                href="https://www.facebook.com/"
                                                                target="_blank"
                                                                className="gallerylinkedin"
                                                            >
                                                                <i className="fab fa-linkedin-in" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-4">
                                                <div className="socialgallery">
                                                    <ul className="socialinner ps-0 d-flex justify-content-center">
                                                        <li>
                                                            <a
                                                                href="https://www.facebook.com/"
                                                                target="_blank"
                                                                className="gallerytelegram"
                                                            >
                                                                <i className="fab fa-telegram" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default MediaPage