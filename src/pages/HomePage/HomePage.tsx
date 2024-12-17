// @ts-nocheck
import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './homepage.css';
import '../../index.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import MediaPage from '../MediaPage/MediaPage';
import Media from '../../components/Media';
import AcademicPartner from '../../components/AcademicPartner';
import FellowshipHighlights from '../../components/FellowshipHighlights';
import ScrollToTopButton from '../../components/ScrollToTopButton';
import { useDispatch, useSelector } from 'react-redux';
import Accasability from '../../components/Accasability';

const HomePage = () => {
    const language = useSelector((state: RootState) => state.language.language);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [showImage, setShowImage] = useState(true); // State to manage the image visibility

    const updateScrollProgress = () => {
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPosition = window.scrollY;
        const progress = (scrollPosition / scrollHeight) * 100;
        setScrollProgress(progress);
    };

    useEffect(() => {
        AOS.init();
        window.addEventListener('scroll', updateScrollProgress);
        return () => {
            window.removeEventListener('scroll', updateScrollProgress);
        };
    }, []);

    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 9000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    // Handler for hiding the image
    const hideImage = () => {
        setShowImage(false);
    };

    return (
        <>
            <div className="w-full fixed top-0 left-0 z-50">
                <Navbar />
            </div>

            {/* Progress Bar */}
            <div
                style={{ width: `${scrollProgress}%` }}
                className="fixed top-0 left-0 h-1 bg-orange-500 transition-all duration-200 ease-in-out z-50"
            ></div>

            <main className="fix md:mt-[140px] max-w-sm:mt-[110px] max-w-md:mt-[50px]">
                {/* Conditionally Render the Image and Cancel Button */}
                {showImage && (
                    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex justify-center items-center">
                        <div className="relative">
                            <img
                                src="https://cmogujarat.gov.in/sites/default/files/2024-11/CM-Fellowship.jpg" // Replace with your image path
                                alt="Popup Image"
                                className="sm:max-w-[80%] max-h-[80%] sm:rounded-lg"
                            />
                            <button
                                onClick={hideImage}
                                className="absolute top-2 right-[88px] bg-red-500 text-white px-2 rounded-full"
                            >
                                X
                            </button>
                        </div>
                    </div>
                )}

                <section className="slider__area section-mb-110">
                    <Slider {...settings} className="slider__active">
                        {
                            language === 'English' ? (
                                <>
                                    <div className="slide">
                                        <img src="assets/img/cmquatos.jpeg" alt="Slide 1" />
                                    </div>
                                </>
                            ) :
                                (
                                    <>
                                        <div className="slide">
                                            <img src="assets/img/cmquotegujarati.jpeg" alt="Slide 1" />
                                        </div>
                                    </>
                                )
                        }
                        <div className="slide">
                            <img src="assets/img/cmwithfellows.jpg" alt="Slide 4" />
                        </div>
                        <div className="slide">
                            <img src="assets/img/pmwithfellowsenhanceimg.png" alt="Slide 3" />
                        </div>
                    </Slider>
                </section>

                <section className="about__area-five section-pb-110 pb-0">
                    <div className="container">
                        {
                            language === 'English' ? (
                                <>
                                    <div className="row gutter-24 d-flex justify-content-end align-items-center">
                                        <div className="text-center relative top-[45px]">
                                            <h2 className="title mb-5">Sardar Patel Good Governance CM Fellowship Program</h2>
                                        </div>
                                        <div className="col-lg-5">
                                            <div className="about-content bg-white shadow py-3 px-4">
                                                <div className="">
                                                    <h1 className="about-title font-extrabold text-2xl font-serif">Sardar Patel Good Governance CM Fellowship Program</h1>
                                                    <div className="about-sub" />
                                                </div>
                                                {/* <div className="py-2">
                                                    Started by the Honorable Prime Minister Shree Narendra Modi in 2009,
                                                    the Sardar Patel Good Governance Chief Minister Fellowship, is one
                                                    of India's flagship program aimed towards fostering young leadership
                                                    talent.
                                                </div>
                                                <p className='py-2'>
                                                    Chief Minister Shri Bhupendra Patel encouraged the fellows by highlighting Gujarat's exceptional en <br/>
                                                    •	Objective <br/>
                                                    •	Focus on infusing innovative and effective approaches into policy-making and service delivery processes <br/>
                                                    Goal of promoting a culture of innovation, efficiency, and excellence within Government departments
                                                    ronment for their fellowship work. He assured them that funding would not hamper the implementation of schemes or new initiatives and emphasized that innovative ideas and suggestions would receive mindful consideration from the government. The Chief Minister further noted that such ideas would benefit crores of citizens across the state
                                                </p> */}
                                                <p className='text-xl py-2'>
                                                    In 2009, the then Chief Minister, Shri Narendra Modi, launched the CM’s Fellowship Program. The objective of this program was to provide young and talented individuals with an opportunity to contribute to social service and support India’s future development.
                                                </p>
                                                <p className='text-xl py-2'>
                                                    Subsequently, the Sardar Patel Good Governance Fellowship Program was relaunched by Chief Minister Shri Bhupendra Patel on October 31, 2023, with revised objectives. The program now focuses on incorporating innovative and effective approaches into policy-making and service delivery processes, aiming to promote a culture of innovation, efficiency, and excellence within government departments.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-lg-1" />
                                        <div className="col-lg-6 about-right">
                                            <div className="about__img-five">
                                                <img
                                                    src="assets/img/about-img2.png"
                                                    alt="img"
                                                    data-aos="fade-left"
                                                    data-aos-delay={200}
                                                    className="img-fluid"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="row gutter-24 d-flex justify-content-end align-items-center">
                                        <div className="text-center relative top-[45px]">
                                            <h2 className="title mb-5">સીએમ ફેલો પ્રોગ્રામ વિશે</h2>
                                        </div>
                                        <div className="col-lg-5">
                                            <div className="about-content bg-white shadow py-3 px-4">
                                                <div className="">
                                                    <h1 className="about-title font-extrabold text-2xl font-serif">સીએમ ફેલો પ્રોગ્રામ</h1>
                                                    <div className="about-sub" />
                                                </div>
                                                <p className='text-xl py-2'>
                                                    2009માં તત્કાલિન મુખ્યમંત્રી શ્રી નરેન્દ્ર મોદીએ સીએમ ફેલોશિપ પ્રોગ્રામ શરૂ કર્યો હતો. આ કાર્યક્રમનો ઉદ્દેશ્ય યુવા અને પ્રતિભાશાળી વ્યક્તિઓને સમાજ સેવામાં યોગદાન આપવાની અને ભારતના ભાવિ વિકાસને ટેકો આપવાની તક પૂરી પાડવાનો હતો.
                                                </p>
                                                <p className='text-xl py-2'>
                                                    ત્યારબાદ, સરદાર પટેલ ગુડ ગવર્નન્સ ફેલોશિપ પ્રોગ્રામને મુખ્યમંત્રી શ્રી ભૂપેન્દ્ર પટેલ દ્વારા 31 ઓક્ટોબર, 2023 ના રોજ સુધારેલા ઉદ્દેશ્યો સાથે ફરીથી શરૂ કરવામાં આવ્યો હતો. આ કાર્યક્રમ હવે નીતિ-નિર્માણ અને સેવા વિતરણ પ્રક્રિયાઓમાં નવીન અને અસરકારક અભિગમોનો સમાવેશ કરવા પર ધ્યાન કેન્દ્રિત કરે છે, જેનો હેતુ સરકારી વિભાગોમાં નવીનતા, કાર્યક્ષમતા અને શ્રેષ્ઠતાની સંસ્કૃતિને પ્રોત્સાહન આપવાનો છે.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-lg-1" />
                                        <div className="col-lg-6 about-right">
                                            <div className="about__img-five">
                                                <img
                                                    src="assets/img/about-img2.png"
                                                    alt="img"
                                                    data-aos="fade-left"
                                                    data-aos-delay={200}
                                                    className="img-fluid"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        }
                    </div>
                </section>

                <FellowshipHighlights />
                <Media />
                <div className="mt-[140px]">
                    <Footer />
                </div>
            </main>
            {/* <Accasability /> */}
        </>
    );
};

export default HomePage;
