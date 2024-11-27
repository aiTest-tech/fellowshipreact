import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './homepage.css'


// import 'swiper/swiper-bundle.min.css';
import '../../index.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react'
import MediaPage from '../MediaPage/MediaPage';
import Media from '../../components/Media';
import AcademicPartner from '../../components/AcademicPartner';
import FellowshipHighlights from '../../components/FellowshipHighlights';


const HomePage = () => {
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
        AOS.init();

        // Add scroll event listener
        window.addEventListener('scroll', updateScrollProgress);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', updateScrollProgress);
        };
    }, []);
    const settings = {
        infinite: true,      // Infinite loop
        slidesToShow: 1,     // Show 2 slides at a time
        slidesToScroll: 1,   // Scroll 1 slide at a time
        autoplay: true,      // Enable autoplay
        autoplaySpeed: 9000, // Slide change speed in ms
        pauseOnHover: true,  // Pause on hover
        responsive: [
            {
                breakpoint: 768, // For smaller screens
                settings: {
                    slidesToShow: 1, // Show 1 slide on small screens
                    slidesToScroll: 1,
                }
            }
        ]
    };

    const settings2 = {
        infinite: true,      // Infinite loop
        slidesToShow: 2,     // Show 2 slides at a time
        slidesToScroll: 1,   // Scroll 1 slide at a time
        autoplay: true,      // Enable autoplay
        autoplaySpeed: 2000, // Slide change speed in ms
        pauseOnHover: true,  // Pause on hover
        responsive: [
            {
                breakpoint: 768, // For smaller screens
                settings: {
                    slidesToShow: 1, // Show 1 slide on small screens
                    slidesToScroll: 1,
                }
            }
        ]
    };
    useEffect(() => {
        AOS.init();
    }, [])
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
            <main className="fix mt-[140px] max-w-md:mt-[50px]">

                <section className="slider__area section-mb-110">
                    <Slider {...settings} className="slider__active">
                        {/* Slide 1 */}
                        <div className="slide">
                            <img src="assets/img/cmquatos.jpeg" alt="Slide 1" />
                        </div>

                        {/* Slide 2 */}
                        {/* <div className="slide">
                            <img src="public\assets\img\timeline.jpeg" alt="Slide 2" />
                        </div> */}

                        {/* Slide 3 */}


                        {/* Slide 4 */}
                        <div className="slide">
                            <img src="assets/img/cmwithfellows.jpg" alt="Slide 4" />
                        </div>

                        <div className="slide">
                            <img src="assets\img\pmwithfellowsenhanceimg.png" alt="Slide 3" />
                        </div>
                    </Slider>
                </section>

                <section className="about__area-five  section-pb-110 pb-0">
                    <div className="container">
                        <div className="row gutter-24 d-flex justify-content-end align-items-center">
                            <div className="text-center relative top-[45px]">
                                <h2 className="title mb-5">About CM Fellow Program</h2>
                            </div>
                            <div className="col-lg-5">
                                <div className="about-content bg-white shadow py-3 px-4">
                                    <div className="">
                                        <h1 className="about-title font-extrabold text-2xl font-serif">CM Fellows Program</h1>
                                        <div className="about-sub" />
                                    </div>
                                    <div className="">
                                        Started by the Honorable Prime Minister Shree Narendra Modi in 2009,
                                        the Sardar Patel Good Governance Chief Minister Fellowship, is one
                                        of India's flagship program aimed towards fostering young leadership
                                        talent.
                                    </div>
                                    <p className='py-2'>
                                        Chief Minister Shri Bhupendra Patel encouraged the fellows by highlighting Gujarat's exceptional environment for their fellowship work. He assured them that funding would not hamper the implementation of schemes or new initiatives and emphasized that innovative ideas and suggestions would receive mindful consideration from the government. The Chief Minister further noted that such ideas would benefit crores of citizens across the state
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
                    </div>
                </section>
                <FellowshipHighlights />
                {/* <AcademicPartner /> */}
                <section className="bg-[url('assets/img/illusion.png')]">
                    <div className="col-lg-12">
                        <div className="d-flex justify-content-center flex-wrap gap-3">
                            <div className="w-45">
                                <img src="assets/img/GOL-1.png" />
                                <div className="Portfolio_details">
                                    <div className="Portfolio_number1">1,96,024 sq km</div>
                                    <div className="Portfolio_title">Class Size</div>
                                </div>
                            </div>
                            <div className="w-45">
                                <img src="assets/img/GOL-2.png" />
                                <div className="Portfolio_details">
                                    <div className="Portfolio_number2">6,038,3628</div>
                                    <div className="Portfolio_title">Work Experience</div>
                                </div>
                            </div>
                            <div className="w-45">
                                <img src="assets/img/GOL-5.png" />
                                <div className="Portfolio_details">
                                    <div className="Portfolio_number5">33</div>
                                    <div className="Portfolio_title">Average Age</div>
                                </div>
                            </div>
                            <div className="w-45">
                                <img src="assets/img/GOL-4.png" />
                                <div className="Portfolio_details">
                                    <div className="Portfolio_number4">252</div>
                                    <div className="Portfolio_title">Diversity</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
                <Media />





















            </main>
            <div className='mt-[140px]'>
                <Footer />
            </div>
        </>
    )
}

export default HomePage