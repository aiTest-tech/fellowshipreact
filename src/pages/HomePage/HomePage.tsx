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
import { useEffect } from 'react'
import MediaPage from '../MediaPage/MediaPage';
import Media from '../../components/Media';
import AcademicPartner from '../../components/AcademicPartner';
import FellowshipHighlights from '../../components/FellowshipHighlights';


const HomePage = () => {
    const settings = {
        infinite: true,      // Infinite loop
        slidesToShow: 1,     // Show 2 slides at a time
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
            <main className="fix mt-[140px] max-w-md:mt-[50px]">

                <section className="slider__area section-mb-110">
                    <Slider {...settings} className="slider__active">
                        {/* Slide 1 */}
                        <div className="slide">
                            <img src="assets\img\pmwithfellowsenhanceimg.png" alt="Slide 1" />
                        </div>

                        {/* Slide 2 */}
                        <div className="slide">
                            <img src="assets/img/cmwithfellows.jpg" alt="Slide 2" />
                        </div>

                        {/* Slide 3 */}
                        {/* <div className="slide">
                            <img src="assets/img/bann-1.png" alt="Slide 3" />
                        </div> */}
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
                <Media />





                <section className="why-area section-pt-110 section-pb-110 request__area">
                    <div className="container">
                        <div className="text-center">
                            <h2 className="title mb-3 mt-2">Why Invest in Gujarat</h2>
                        </div>
                        <div className="row">
                            <div className="request__nav d-flex justify-content-center">
                                <ul className="nav nav-tabs border-bottom" id="myTab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link active"
                                            id="Infrastructure-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#Infrastructure-tab-pane"
                                            type="button"
                                            role="tab"
                                            aria-controls="Infrastructure-tab-pane"
                                            aria-selected="true"
                                        >
                                            Infrastructure
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link"
                                            id="Sector-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#Sector-tab-pane"
                                            type="button"
                                            role="tab"
                                            aria-controls="Sector-tab-pane"
                                            aria-selected="false"
                                            tabIndex={-1}
                                        >
                                            Sector
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link"
                                            id="leaving-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#leaving-tab-pane"
                                            type="button"
                                            role="tab"
                                            aria-controls="leaving-tab-pane"
                                            aria-selected="false"
                                            tabIndex={-1}
                                        >
                                            Ease of Leaving
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div className="request__tab-wrap">
                                <div className="tab-content" id="myTabContent">
                                    <div
                                        className="tab-pane active show"
                                        id="Infrastructure-tab-pane"
                                        role="tabpanel"
                                        aria-labelledby="Infrastructure-tab"
                                        tabIndex={0}
                                    >
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="services__tab-img mt-4">
                                                    <div className="tab-content" id="myTabContent">
                                                        <div
                                                            className="tab-pane show active"
                                                            id="landbanks-tab-pane"
                                                            role="tabpanel"
                                                            aria-labelledby="landbanks-tab"
                                                            tabIndex={0}
                                                        >
                                                            <div className="row">
                                                                <div className="col-lg-6">
                                                                    <div className="sector-title">Land Banks</div>
                                                                    <ul className="landbank-list">
                                                                        <li>
                                                                            <span>200 +</span> Industrial Estates
                                                                        </li>
                                                                        <li>
                                                                            <span>33,000 +</span> hectare of industrial land
                                                                        </li>
                                                                        <li>
                                                                            <span>100 ~</span> Private Industrial, Logistics,
                                                                            Textiles &amp; Apparel Parks
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="col-lg-6">
                                                                    <div className="swiper-container land_bank_slider">
                                                                        <div className="swiper-wrapper mt-2">
                                                                            <div className="swiper-slide">
                                                                                <div className="img-infra position-relative p-3">
                                                                                    <img
                                                                                        src="assets/img/landbankslide.png"
                                                                                        className="img-fluid"
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                            <div className="swiper-slide">
                                                                                <div className="img-infra position-relative p-3">
                                                                                    <img
                                                                                        src="assets/img/landbankslide1.png"
                                                                                        className="img-fluid"
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                            <div className="swiper-slide">
                                                                                <div className="img-infra position-relative p-3">
                                                                                    <img
                                                                                        src="assets/img/landbankslide.png"
                                                                                        className="img-fluid"
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                            <div className="swiper-slide">
                                                                                <div className="img-infra position-relative p-3">
                                                                                    <img
                                                                                        src="assets/img/landbankslide1.png"
                                                                                        className="img-fluid"
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                            <div className="swiper-slide">
                                                                                <div className="img-infra position-relative p-3">
                                                                                    <img
                                                                                        src="assets/img/landbankslide.png"
                                                                                        className="img-fluid"
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="tab-pane"
                                                            id="utilities-tab-pane"
                                                            role="tabpanel"
                                                            aria-labelledby="utilities-tab"
                                                            tabIndex={0}
                                                        >
                                                            <div className="row">
                                                                <div className="col-lg-6">
                                                                    <div className="sector-title">Power Abundant</div>
                                                                    <ul className="landbank-list">
                                                                        <li>
                                                                            <span>30 ~</span> GW power generation capacity for
                                                                            24x7 un-interrupted supply at peak power of 15 GW
                                                                        </li>
                                                                        <li>
                                                                            <span>33,000 +</span> hectare of industrial land
                                                                        </li>
                                                                        <li>
                                                                            <span>100 ~</span> Private Industrial, Logistics,
                                                                            Textiles &amp; Apparel Parks
                                                                        </li>
                                                                    </ul>
                                                                    <div className="sector-title">Gas Grid</div>
                                                                    <ul className="landbank-list">
                                                                        <li>
                                                                            Over <span>2600</span> km operational pipeline gas
                                                                            grid network across 25 districts connecting major
                                                                            industrial hubs
                                                                        </li>
                                                                        <li>
                                                                            <span>35</span> MMSCMD transmitted through grid
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="col-lg-6">
                                                                    <div className="swiper-container land_bank_slider">
                                                                        <div className="swiper-wrapper mt-2">
                                                                            <div className="swiper-slide">
                                                                                <div className="img-infra position-relative p-3">
                                                                                    <img
                                                                                        src="assets/img/utilities-slider1.png"
                                                                                        className="img-fluid"
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                            <div className="swiper-slide">
                                                                                <div className="img-infra position-relative p-3">
                                                                                    <img
                                                                                        src="assets/img/utilities-slider2.png"
                                                                                        className="img-fluid"
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                            <div className="swiper-slide">
                                                                                <div className="img-infra position-relative p-3">
                                                                                    <img
                                                                                        src="assets/img/utilities-slider1.png"
                                                                                        className="img-fluid"
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                            <div className="swiper-slide">
                                                                                <div className="img-infra position-relative p-3">
                                                                                    <img
                                                                                        src="assets/img/utilities-slider2.png"
                                                                                        className="img-fluid"
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="tab-pane"
                                                            id="Megaparks-tab-pane"
                                                            role="tabpanel"
                                                            aria-labelledby="Megaparks-tab"
                                                            tabIndex={0}
                                                        >
                                                            <div className="row">
                                                                <div className="col-lg-6">
                                                                    <div className="sector-title">Mega Parks/SIR/SEZ</div>
                                                                    <ul className="landbank-list">
                                                                        <li>
                                                                            Petroleum, Chemicals &amp; Petrochemicals
                                                                            Investment Region (PCPIR)
                                                                        </li>
                                                                        <li>Dholera Special Investment Region (SIR)</li>
                                                                        <li>
                                                                            <span>20</span> Functional SEZ in Gujarat
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="col-lg-6">
                                                                    <div className="swiper-container land_bank_slider">
                                                                        <div className="swiper-wrapper mt-2">
                                                                            <div className="swiper-slide">
                                                                                <div className="img-infra position-relative p-3">
                                                                                    <img
                                                                                        src="assets/img/Megaparks_slide.png"
                                                                                        className="img-fluid"
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                            <div className="swiper-slide">
                                                                                <div className="img-infra position-relative p-3">
                                                                                    <img
                                                                                        src="assets/img/Megaparks_slide.png"
                                                                                        className="img-fluid"
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                            <div className="swiper-slide">
                                                                                <div className="img-infra position-relative p-3">
                                                                                    <img
                                                                                        src="assets/img/Megaparks_slide.png"
                                                                                        className="img-fluid"
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="tab-pane"
                                                            id="connectivity-tab-pane"
                                                            role="tabpanel"
                                                            aria-labelledby="connectivity-tab"
                                                            tabIndex={0}
                                                        >
                                                            <div className="row">
                                                                <div className="col-lg-6">
                                                                    <div className="sector-title">Air Connectivity</div>
                                                                    <ul className="landbank-list">
                                                                        <li>
                                                                            <span>19</span> operational airports &amp;
                                                                            airstrips with <span>3</span> International
                                                                            airports
                                                                        </li>
                                                                        <li>Upcoming India’s largest airport in Dholera</li>
                                                                    </ul>
                                                                    <div className="sector-title">Rail Connectivity</div>
                                                                    <ul className="landbank-list">
                                                                        <li>
                                                                            Railway route length <span> &gt;5,200 kms</span>
                                                                        </li>
                                                                        <li>
                                                                            Upcoming High Speed Rail between Ahmedabad &amp;
                                                                            Mumbai Port Connectivity
                                                                        </li>
                                                                    </ul>
                                                                    <div className="sector-title">Port Connectivity</div>
                                                                    <ul className="landbank-list">
                                                                        <li>
                                                                            <span>48</span> ports handling over{" "}
                                                                            <span>514 Million</span> tonnes cargo (2018-19)
                                                                        </li>
                                                                        <li>
                                                                            <span>40%</span> of India’s Port Cargo handled by
                                                                            Gujarat ports
                                                                        </li>
                                                                    </ul>
                                                                    <div className="sector-title">Road Connectivity</div>
                                                                    <ul className="landbank-list">
                                                                        <li>
                                                                            <span>~1.5 lakh kms.</span> well-surfaced roads
                                                                            providing excellent connectivity
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="col-lg-6">
                                                                    <div className="swiper-container land_bank_slider">
                                                                        <div className="swiper-wrapper mt-2">
                                                                            <div className="swiper-slide">
                                                                                <div className="img-infra position-relative p-3">
                                                                                    <img
                                                                                        src="assets/img/connectivity_slide1.png"
                                                                                        className="img-fluid"
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                            <div className="swiper-slide">
                                                                                <div className="img-infra position-relative p-3">
                                                                                    <img
                                                                                        src="assets/img/connectivity_slide2.png"
                                                                                        className="img-fluid"
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                            <div className="swiper-slide">
                                                                                <div className="img-infra position-relative p-3">
                                                                                    <img
                                                                                        src="assets/img/connectivity_slide3.png"
                                                                                        className="img-fluid"
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                            <div className="swiper-slide">
                                                                                <div className="img-infra position-relative p-3">
                                                                                    <img
                                                                                        src="assets/img/connectivity_slide4.png"
                                                                                        className="img-fluid"
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="infra_nav-wrap">
                                                    <ul
                                                        className="nav nav-tabs bg-white box-shadow border-0 infra-tab d-flex justify-content-lg-center justify-content-start"
                                                        id="myTab"
                                                        role="tablist"
                                                    >
                                                        <li className="nav-item" role="presentation">
                                                            <button
                                                                className="nav-link active"
                                                                id="landbanks-tab"
                                                                data-bs-toggle="tab"
                                                                data-bs-target="#landbanks-tab-pane"
                                                                type="button"
                                                                role="tab"
                                                                aria-controls="landbanks-tab-pane"
                                                                aria-selected="true"
                                                            >
                                                                <img src="assets/img/bank%20%282%29.png" />
                                                                <div className="left-content">Land Banks</div>
                                                            </button>
                                                        </li>
                                                        <li className="nav-item" role="presentation">
                                                            <button
                                                                className="nav-link"
                                                                id="utilities-tab"
                                                                data-bs-toggle="tab"
                                                                data-bs-target="#utilities-tab-pane"
                                                                type="button"
                                                                role="tab"
                                                                aria-controls="utilities-tab-pane"
                                                                aria-selected="false"
                                                                tabIndex={-1}
                                                            >
                                                                <img src="assets/img/utilization.png" />
                                                                <div className="left-content">Utilities</div>
                                                            </button>
                                                        </li>
                                                        <li className="nav-item" role="presentation">
                                                            <button
                                                                className="nav-link"
                                                                id="Megaparks-tab"
                                                                data-bs-toggle="tab"
                                                                data-bs-target="#Megaparks-tab-pane"
                                                                type="button"
                                                                role="tab"
                                                                aria-controls="Megaparks-tab-pane"
                                                                aria-selected="false"
                                                                tabIndex={-1}
                                                            >
                                                                <img src="assets/img/park.png" />
                                                                <div className="left-content">Mega Parks/SIR/SEZ</div>
                                                            </button>
                                                        </li>
                                                        <li className="nav-item" role="presentation">
                                                            <button
                                                                className="nav-link"
                                                                id="connectivity-tab"
                                                                data-bs-toggle="tab"
                                                                data-bs-target="#connectivity-tab-pane"
                                                                type="button"
                                                                role="tab"
                                                                aria-controls="connectivity-tab-pane"
                                                                aria-selected="false"
                                                                tabIndex={-1}
                                                            >
                                                                <img src="assets/img/network.png" />
                                                                <div className="left-content">Connectivity</div>
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane"
                                        id="Sector-tab-pane"
                                        role="tabpanel"
                                        aria-labelledby="Sector-tab"
                                        tabIndex={0}
                                    >
                                        <div className="col-lg-12">
                                            <div className="services__tab-img mt-4">
                                                <div className="tab-content" id="myTabContent">
                                                    <div
                                                        className="tab-pane show active"
                                                        id="infra1-tab-pane"
                                                        role="tabpanel"
                                                        aria-labelledby="infra1-tab"
                                                        tabIndex={0}
                                                    >
                                                        <div className="row">
                                                            <div className="col-lg-6">
                                                                <div className="services__thumb-two">
                                                                    <a href="#">
                                                                        <img
                                                                            src="assets/img/food-processing.jpg"
                                                                            alt="img"
                                                                        />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <div className="h-200">
                                                                    <div className="sector-title">Food Processing</div>
                                                                    <p>
                                                                        Gujarat boasts of more than 30,000 food processing
                                                                        units, 340 cold storages and about 104
                                                                        MPEDA-approved fish and fishery product processing
                                                                        establishments
                                                                    </p>
                                                                    <p>
                                                                        The state has the presence of 52 dairy plants.
                                                                        During the year 2021-22, per day 233.40 lakh litres
                                                                        of milk was procured from 22 cooperative dairy
                                                                        unions whose per day milk processing capacity is
                                                                        313.67 Lakh liters per day. The state is divided
                                                                        into 7 sub Agro-climatic&nbsp;zones and 3
                                                                        Agri-export zones.
                                                                    </p>
                                                                </div>
                                                                <a
                                                                    href="#"
                                                                    className="btn sector-btn mt-3"
                                                                    type="button"
                                                                >
                                                                    Visit Sector
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="tab-pane"
                                                        id="infra2-tab-pane"
                                                        role="tabpanel"
                                                        aria-labelledby="infra2-tab"
                                                        tabIndex={0}
                                                    >
                                                        <div className="row">
                                                            <div className="col-lg-6">
                                                                <div className="services__thumb-two">
                                                                    <a href="#">
                                                                        <img src="assets/img/automobile.jpg" alt="img" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <div className="h-200">
                                                                    <div className="sector-title">
                                                                        Automobile &amp; Auto-Components
                                                                    </div>
                                                                    <p>
                                                                        Gujarat contributes 9% to India’s output of
                                                                        transport equipment. The state has established
                                                                        auto-clusters in Ahmedabad-Sanand, Mandal Becharaji,
                                                                        Hansalpur–Vithalpur, Vadodara-Halol and Rajkot
                                                                    </p>
                                                                    <p>
                                                                        The state’s stronghold in heavy and light
                                                                        engineering sector complements the existing
                                                                        automobile industries in the state. Gujarat has
                                                                        emerged as a top automotive manufacturing hub in the
                                                                        world.
                                                                    </p>
                                                                    <p>
                                                                        The state has sound automotive clusters comprising
                                                                        of auto components and ancillaries manufacturing
                                                                        facilities near Rajkot and Ahmedabad. A Japanese
                                                                        industrial zone has been set up in the
                                                                        Sanand-Mandal-Becharaji Investment Region.
                                                                    </p>
                                                                    <p>
                                                                        Gujarat is well connected to the rest of the country
                                                                        and has port connectivity making it an ideal export
                                                                        hub.
                                                                    </p>
                                                                </div>
                                                                <a
                                                                    href="#"
                                                                    className="btn sector-btn mt-3"
                                                                    type="button"
                                                                >
                                                                    Visit Sector
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="tab-pane"
                                                        id="infra3-tab-pane"
                                                        role="tabpanel"
                                                        aria-labelledby="infra3-tab"
                                                        tabIndex={0}
                                                    >
                                                        <div className="row">
                                                            <div className="col-lg-6">
                                                                <div className="services__thumb-two">
                                                                    <a href="#">
                                                                        <img src="assets/img/chemicals.jpg" alt="img" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <div className="h-200">
                                                                    <div className="sector-title">Chemicals</div>
                                                                    <p>
                                                                        Gujarat ranks first in India’s chemical
                                                                        manufacturing output. The state has India's first
                                                                        Petroleum, Chemicals &amp; Petrochemicals Investment
                                                                        Region for manufacturing of petroleum products,
                                                                        chemicals and petrochemicals
                                                                    </p>
                                                                    <p>
                                                                        The state accounts for 62% of India’s petrochemical
                                                                        production, 30% of other chemical production and 41%
                                                                        of chemical and petrochemicals exports. The state is
                                                                        also the major producer of bio-fertilizers, seeds,
                                                                        urea and other fertilizer.
                                                                    </p>
                                                                </div>
                                                                <a
                                                                    href="#"
                                                                    className="btn sector-btn mt-3"
                                                                    type="button"
                                                                >
                                                                    Visit Sector
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="tab-pane"
                                                        id="infra4-tab-pane"
                                                        role="tabpanel"
                                                        aria-labelledby="infra4-tab"
                                                        tabIndex={0}
                                                    >
                                                        <div className="row">
                                                            <div className="col-lg-6">
                                                                <div className="services__thumb-two">
                                                                    <a href="#">
                                                                        <img src="assets/img/itbpm.jpg" alt="img" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <div className="h-200">
                                                                    <div className="sector-title">IT and BPM</div>
                                                                    <p>
                                                                        Gujarat accounts for 16% of investments made in
                                                                        IT/ITeS sector in the country
                                                                    </p>
                                                                    <p>
                                                                        Gujarat is home to 5000+ thriving small, medium and
                                                                        large high performing ICT Industries
                                                                    </p>
                                                                </div>
                                                                <a
                                                                    href="#"
                                                                    className="btn sector-btn mt-3"
                                                                    type="button"
                                                                >
                                                                    Visit Sector
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="tab-pane"
                                                        id="infra5-tab-pane"
                                                        role="tabpanel"
                                                        aria-labelledby="infra5-tab"
                                                        tabIndex={0}
                                                    >
                                                        <div className="row">
                                                            <div className="col-lg-6">
                                                                <div className="services__thumb-two">
                                                                    <a href="#">
                                                                        <img src="assets/img/pharma.jpg" alt="img" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <div className="h-200">
                                                                    <div className="sector-title">
                                                                        Pharmaceuticals &amp; Biotechnology
                                                                    </div>
                                                                    <p>
                                                                        Gujarat is a major producer of pharmaceuticals in
                                                                        India{" "}
                                                                    </p>
                                                                    <p>
                                                                        Gujarat accounts for 33% of the country's sector
                                                                        turnover and 28% of exports. The state is also
                                                                        amongst India's top 5 biotech destinations.
                                                                    </p>
                                                                </div>
                                                                <a
                                                                    href="#"
                                                                    className="btn sector-btn mt-3"
                                                                    type="button"
                                                                >
                                                                    Visit Sector
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="tab-pane"
                                                        id="infra6-tab-pane"
                                                        role="tabpanel"
                                                        aria-labelledby="infra6-tab"
                                                        tabIndex={0}
                                                    >
                                                        <div className="row">
                                                            <div className="col-lg-6">
                                                                <div className="services__thumb-two">
                                                                    <a href="#">
                                                                        <img src="assets/img/texttiles.jpg" alt="img" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <div className="h-200">
                                                                    <div className="sector-title">
                                                                        Textile and Garments
                                                                    </div>
                                                                    <p>
                                                                        Gujarat is the largest producer and exporter of
                                                                        cotton in India, producing 37% of the country’s
                                                                        total output
                                                                    </p>
                                                                    <p>
                                                                        Gujarat is known as the “Manchester of the East and
                                                                        Denim City”. Gujarat's 6% of total Industrial
                                                                        Production comes from textile industry. It is the
                                                                        largest producer (35%) and exporter (60%) of cotton
                                                                        and is the third largest denim producer in the
                                                                        world. It offers India's 12% textile exports.
                                                                    </p>
                                                                </div>
                                                                <a
                                                                    href="#"
                                                                    className="btn sector-btn mt-3"
                                                                    type="button"
                                                                >
                                                                    Visit Sector
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="tab-pane"
                                                        id="infra7-tab-pane"
                                                        role="tabpanel"
                                                        aria-labelledby="infra6-tab"
                                                        tabIndex={0}
                                                    >
                                                        <div className="row">
                                                            <div className="col-lg-6">
                                                                <div className="services__thumb-two">
                                                                    <a href="#">
                                                                        <img src="assets/img/male-front.jpg" alt="img" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <div className="h-200">
                                                                    <div className="sector-title">
                                                                        Tourism and Hospitality
                                                                    </div>
                                                                    <p>
                                                                        Gujarat is home to several UNESCO identified
                                                                        heritage sites, world’s largest temple complex and
                                                                        Asiatic lions
                                                                    </p>
                                                                    <p>
                                                                        Gujarat, the land of legends is blessed with every
                                                                        ingredient from historical sites &amp; monuments to
                                                                        modern day marquee, heritage buildings to modern bus
                                                                        ports, white desert to lush green forest, hills to
                                                                        1600 Km long coastline and offers excellent
                                                                        connectivity across the state through air, rail, and
                                                                        roads.
                                                                    </p>
                                                                    <p>
                                                                        The contribution of tourism to the GDP of Gujarat
                                                                        was estimated to be around 10.2% of the state's
                                                                        total gross domestic product in the year 2022.
                                                                    </p>
                                                                </div>
                                                                <a
                                                                    href="#"
                                                                    className="btn sector-btn mt-3"
                                                                    type="button"
                                                                >
                                                                    Visit Sector
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="infra_nav-wrap">
                                                <ul
                                                    className="nav nav-tabs bg-white box-shadow border-0 infra-tab d-flex justify-content-lg-center justify-content-start"
                                                    id="myTab"
                                                    role="tablist"
                                                >
                                                    <li className="nav-item" role="presentation">
                                                        <button
                                                            className="nav-link active"
                                                            id="infra1-tab"
                                                            data-bs-toggle="tab"
                                                            data-bs-target="#infra1-tab-pane"
                                                            type="button"
                                                            role="tab"
                                                            aria-controls="infra1-tab-pane"
                                                            aria-selected="true"
                                                        >
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={50}
                                                                height={47}
                                                            >
                                                                <path
                                                                    fill="#5A5874"
                                                                    fillRule="evenodd"
                                                                    d="M48.74 9.463L37.416 20.935a6.377 6.377 0 0 1-6.689 1.532l-2.853 3.257 14.583 13.112c.098.085.188.168.272.254 1.783 1.807 1.783 4.747-.001 6.555A4.534 4.534 0 0 1 39.493 47a4.534 4.534 0 0 1-3.485-1.63L23.334 30.905 10.661 45.37A4.534 4.534 0 0 1 7.176 47a4.531 4.531 0 0 1-3.236-1.356 4.634 4.634 0 0 1-1.34-3.277 4.638 4.638 0 0 1 1.611-3.531l10.391-9.342a.871.871 0 0 1 1.242.075.9.9 0 0 1-.074 1.258L5.373 40.176l-.015.012a2.855 2.855 0 0 0-.998 2.179c0 .762.293 1.478.825 2.017a2.794 2.794 0 0 0 4.141-.176l.012-.015 16.631-18.981.005-.005.004-.005 3.848-4.392a.87.87 0 0 1 1.037-.212 4.63 4.63 0 0 0 5.309-.923L47.496 8.203a.872.872 0 0 1 1.244 0 .898.898 0 0 1 0 1.26zM24.51 29.562l12.82 14.631.012.015a2.794 2.794 0 0 0 4.142.176 2.883 2.883 0 0 0-.174-4.196l-.014-.012-14.59-13.119-2.196 2.505zm12.389-13.73a.872.872 0 0 1-1.244 0 .9.9 0 0 1 0-1.261l9.123-9.241a.872.872 0 0 1 1.244 0 .9.9 0 0 1 0 1.26l-9.123 9.242zm-2.481-2.474a.87.87 0 0 1-1.244 0 .9.9 0 0 1 0-1.261l9.123-9.241a.872.872 0 0 1 1.244 0 .9.9 0 0 1 0 1.261l-9.123 9.241zm-4.842-.365a4.776 4.776 0 0 0-.911 5.377.9.9 0 0 1-.21 1.051l-7.834 7.044a.87.87 0 0 1-1.243-.075l-3.316-3.785c-3.408 1.754-7.546 1.114-10.294-1.67-2.729-2.764-4.65-5.967-5.408-9.016-.791-3.184-.263-5.914 1.488-7.688 1.751-1.773 4.445-2.308 7.588-1.507 3.011.768 6.172 2.714 8.901 5.479a9.05 9.05 0 0 1 1.648 10.427l3.349 3.012 3.485-3.134a6.58 6.58 0 0 1 1.513-6.776L39.656.26a.872.872 0 0 1 1.244 0 .9.9 0 0 1 0 1.261L29.576 12.993zm-11.289 6.494a.9.9 0 0 1-.165-1.134 7.26 7.26 0 0 0-1.03-8.89c-2.507-2.54-5.379-4.319-8.086-5.01-2.518-.642-4.619-.273-5.914 1.039-1.295 1.312-1.659 3.44-1.025 5.991.681 2.743 2.437 5.652 4.945 8.192 2.346 2.377 5.955 2.805 8.776 1.043a.872.872 0 0 1 1.12.167l3.202 3.655 1.899-1.707-3.722-3.346z"
                                                                ></path>
                                                            </svg>
                                                            <div className="left-content">Food Processing</div>
                                                        </button>
                                                    </li>
                                                    <li className="nav-item" role="presentation">
                                                        <button
                                                            className="nav-link"
                                                            id="infra2-tab"
                                                            data-bs-toggle="tab"
                                                            data-bs-target="#infra2-tab-pane"
                                                            type="button"
                                                            role="tab"
                                                            aria-controls="infra2-tab-pane"
                                                            aria-selected="false"
                                                            tabIndex={-1}
                                                        >
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={52}
                                                                height={51}
                                                            >
                                                                <path
                                                                    fill="#5A5874"
                                                                    fillRule="evenodd"
                                                                    d="M43.415 50.766v-4.912h1.635v-8.189h-4.085a3.275 3.275 0 0 1-3.266 3.275 3.274 3.274 0 0 1-3.267-3.275V34.39H18.094v3.275a3.274 3.274 0 0 1-3.266 3.275 3.274 3.274 0 0 1-3.268-3.275H7.477v8.189H9.11v4.912H.942v-4.912h1.634V0h4.901v2.923l2.135-1.285h33.302l2.136 1.285V0h4.901v45.854h1.633v4.912h-8.169zm-7.351-13.101c0 .903.733 1.637 1.635 1.637.9 0 1.633-.734 1.633-1.637V34.39h-3.268v3.275zm-22.87 0c0 .903.733 1.637 1.634 1.637.9 0 1.633-.734 1.633-1.637V34.39h-3.267v3.275zm27.771-4.913a.818.818 0 0 0 0-1.637h-3.266v-1.639h1.633v-6.025a.82.82 0 0 0-.657-.803l-3.427-.688v-7.221a.82.82 0 0 0-.816-.819H18.094a.82.82 0 0 0-.816.819v7.221l-3.427.688a.82.82 0 0 0-.657.803v6.025h22.87v1.639H11.56a.818.818 0 0 0 0 1.637h29.405zM11.56 36.028V34.39a2.457 2.457 0 0 1 0-4.914v-4.093H7.477v10.645h4.083zM5.843 1.638H4.209v40.939h1.634V1.638zm0 42.578H4.209v1.638h1.634v-1.638zM2.576 47.49v1.639h4.901V47.49H2.576zM45.05 4.832l-2.589-1.557H10.064L7.477 4.832v1.91l3.04-1.829h31.491l3.042 1.829v-1.91zm0 3.819l-3.493-2.1H10.97l-3.493 2.1v15.095h4.083v-.295c0-1.168.829-2.18 1.971-2.41l2.114-.423v-5.879a2.456 2.456 0 0 1 2.449-2.457h16.338c1.35 0 2.45 1.102 2.45 2.457v5.879l2.113.423a2.461 2.461 0 0 1 1.97 2.41v.295h4.085V8.651zm0 16.732h-4.085v4.093a2.458 2.458 0 0 1 0 4.914v1.638h4.085V25.383zm3.267-23.745h-1.634v40.939h1.634V1.638zm0 42.578h-1.634v1.638h1.634v-1.638zm1.634 3.274H45.05v1.639h4.901V47.49zM32.798 25.383a2.457 2.457 0 0 1 2.45-2.457 2.458 2.458 0 0 1 0 4.914 2.457 2.457 0 0 1-2.45-2.457zm3.266 0a.819.819 0 0 0-.816-.819.819.819 0 0 0 0 1.637c.45 0 .816-.368.816-.818zm-17.152-9.826h14.702v5.732H18.912v-5.732zm1.633 4.094H31.98v-2.457H20.545v2.457zm-.816 5.732c0 1.354-1.1 2.457-2.451 2.457a2.457 2.457 0 0 1 0-4.914 2.458 2.458 0 0 1 2.451 2.457zm-2.451-.819a.82.82 0 0 0 0 1.637.819.819 0 0 0 0-1.637zm13.886 1.638h-9.802v-1.638h9.802v1.638z"
                                                                ></path>
                                                            </svg>
                                                            <div className="left-content">
                                                                Automobile&nbsp;&amp; AutoComponents
                                                            </div>
                                                        </button>
                                                    </li>
                                                    <li className="nav-item" role="presentation">
                                                        <button
                                                            className="nav-link"
                                                            id="infra3-tab"
                                                            data-bs-toggle="tab"
                                                            data-bs-target="#infra3-tab-pane"
                                                            type="button"
                                                            role="tab"
                                                            aria-controls="infra3-tab-pane"
                                                            aria-selected="false"
                                                            tabIndex={-1}
                                                        >
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={54}
                                                                height={41}
                                                            >
                                                                <path
                                                                    fill="#5A5874"
                                                                    fillRule="evenodd"
                                                                    d="M53.177 18.39l-2.533 2.481v14.696c-.003 2.986-2.472 5.405-5.518 5.408h-9.934a5.532 5.532 0 0 1-4.372-2.145 5.281 5.281 0 0 1-1.393 1.303 5.439 5.439 0 0 1-2.911.842H6.415c-3.005 0-5.441-2.387-5.441-5.333 0-.951.26-1.884.751-2.704l10.286-17.136V2.034c0-.598.495-1.082 1.104-1.082h5.52c.609 0 1.104.484 1.104 1.082v13.738l9.933 15.048V18.26c0-2.39 1.978-4.327 4.414-4.327h17.206c1.472 0 2.665 1.171 2.664 2.613a2.589 2.589 0 0 1-.779 1.844zM29.165 34.038L17.708 16.683a1.05 1.05 0 0 1-.176-.586V3.116H14.22v12.981c0 .192-.053.382-.153.548L3.623 34.036c-.906 1.508-.392 3.451 1.147 4.338a3.302 3.302 0 0 0 1.645.439h20.101c1.743-.001 3.156-1.387 3.156-3.096a3.056 3.056 0 0 0-.507-1.679zm22.451-17.81a.454.454 0 0 0-.324-.131H34.086c-1.217 0-2.206.968-2.206 2.163v17.307c0 1.793 1.484 3.245 3.312 3.245h9.934c1.828 0 3.311-1.452 3.311-3.245V20.423c0-.287.116-.561.323-.765l2.855-2.797a.442.442 0 0 0 .001-.633zm-6.49 20.42H40.71v-2.162h3.311V20.423h2.208v15.144c0 .598-.494 1.081-1.103 1.081zm-11.04-7.571h3.313v2.163h-3.313v-2.163zm2.21 6.49h-2.21v-2.164h2.21v2.164zM23.05 33.403h2.207v2.164H23.05v-2.164zm-8.831 1.083v2.162H6.551a1.09 1.09 0 0 1-1.104-1.08c0-.193.052-.384.153-.549l9.371-15.613 1.903 1.096-8.393 13.984h5.738z"
                                                                ></path>
                                                            </svg>
                                                            <div className="left-content">Chemicals</div>
                                                        </button>
                                                    </li>
                                                    <li className="nav-item" role="presentation">
                                                        <button
                                                            className="nav-link"
                                                            id="infra4-tab"
                                                            data-bs-toggle="tab"
                                                            data-bs-target="#infra4-tab-pane"
                                                            type="button"
                                                            role="tab"
                                                            aria-controls="infra4-tab-pane"
                                                            aria-selected="false"
                                                            tabIndex={-1}
                                                        >
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={67}
                                                                height={45}
                                                            >
                                                                <path
                                                                    fill="#5A5874"
                                                                    fillRule="evenodd"
                                                                    d="M61.416 45H0v-2.25h42.433V1.125c0-.622.5-1.125 1.117-1.125h17.866a1.12 1.12 0 0 1 1.117 1.125V42.75H67V45h-5.584zM60.3 2.25H44.667v40.5H60.3V2.25zm-2.233 5.625H46.9v-2.25h11.167v2.25zm-3.35 11.25c1.847 0 3.35 1.514 3.35 3.375s-1.503 3.375-3.35 3.375c-1.847 0-3.35-1.514-3.35-3.375s1.503-3.375 3.35-3.375zm0 4.5c.616 0 1.117-.504 1.117-1.125s-.501-1.125-1.117-1.125-1.117.504-1.117 1.125.501 1.125 1.117 1.125zM39.083 36H21.217v3.375h4.466v2.25H14.517v-2.25h4.466V36H2.233a1.12 1.12 0 0 1-1.116-1.125V11.25a1.12 1.12 0 0 1 1.116-1.125h36.85A1.12 1.12 0 0 1 40.2 11.25v23.625A1.12 1.12 0 0 1 39.083 36zm-1.116-23.625H3.35V33.75h34.617V12.375zM8.606 23.295a1.106 1.106 0 0 1-1.579 0 1.13 1.13 0 0 1 0-1.59l6.7-6.75a1.11 1.11 0 0 1 1.579 0 1.13 1.13 0 0 1 0 1.59l-6.7 6.75z"
                                                                ></path>
                                                            </svg>
                                                            <div className="left-content">IT &amp;&nbsp;BPM</div>
                                                        </button>
                                                    </li>
                                                    <li className="nav-item" role="presentation">
                                                        <button
                                                            className="nav-link"
                                                            id="infra5-tab"
                                                            data-bs-toggle="tab"
                                                            data-bs-target="#infra5-tab-pane"
                                                            type="button"
                                                            role="tab"
                                                            aria-controls="infra5-tab-pane"
                                                            aria-selected="false"
                                                            tabIndex={-1}
                                                        >
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={43}
                                                                height={52}
                                                            >
                                                                <path
                                                                    fill="#5A5874"
                                                                    fillRule="evenodd"
                                                                    d="M39.971 51.995H15.244c-1.676 0-3.04-1.372-3.04-3.06V48.5a5.718 5.718 0 0 1-1.873-1.471L9.29 45.782a.764.764 0 0 1 .093-1.07.749.749 0 0 1 1.062.094l1.041 1.247c.213.255.455.482.718.678v-7.872a5.721 5.721 0 0 1-.981-.782l-3.747 3.168 1.015 1.216c.267.321.226.8-.093 1.07a.747.747 0 0 1-1.062-.093l-1.5-1.797v-.001l-.001-.001-4.494-5.388c-2.028-2.432-1.714-6.072.702-8.114a5.706 5.706 0 0 1 3.684-1.345l-1.464-3.248c-1.303-2.891-.026-6.311 2.846-7.623a5.727 5.727 0 0 1 5.095.189v-1.073c0-1.47.927-2.78 2.305-3.262l2.91-1.017A1.936 1.936 0 0 0 18.71 8.93v-.592a2.226 2.226 0 0 1-1.987-2.217V2.239c0-1.228.993-2.228 2.214-2.228h17.796c1.22 0 2.212 1 2.212 2.228v3.882a2.223 2.223 0 0 1-2.212 2.229h-.23v.58c0 .823.518 1.558 1.292 1.828l2.909 1.017a3.453 3.453 0 0 1 2.305 3.262v33.898c0 1.688-1.363 3.06-3.038 3.06zM3.013 29.301a4.22 4.22 0 0 0-1.487 2.878 4.234 4.234 0 0 0 .97 3.096l4.01 4.806 3.795-3.208a6.461 6.461 0 0 1-.262-.511l-3.6-7.99a4.202 4.202 0 0 0-3.426.929zm9.191-11.363a4.217 4.217 0 0 0-4.471-.634c-2.115.966-3.055 3.484-2.095 5.613l2.576 5.718 3.99-1.824v-8.873zm0 10.541l-3.367 1.538 2.576 5.717c.2.443.467.84.791 1.181v-8.436zM36.733 6.83a.708.708 0 0 0 .704-.709V2.239a.709.709 0 0 0-.704-.709H18.937a.708.708 0 0 0-.705.709v3.882c0 .392.316.709.705.709h17.796zm4.768 13.064h-5.813a.755.755 0 0 1-.754-.758c0-.419.337-.76.754-.76h5.813v-3.339c0-.823-.519-1.557-1.291-1.828l-2.911-1.017a3.452 3.452 0 0 1-2.304-3.262v-.581H20.219v.581c0 1.47-.927 2.781-2.305 3.262l-2.909 1.017a1.937 1.937 0 0 0-1.292 1.828v3.339h18.929c.417 0 .755.341.755.76a.757.757 0 0 1-.755.759H13.713v11.338h27.788V19.894zm0 12.858H13.713v8.227h27.788v-8.227zm0 9.745H13.713v6.438c0 .85.686 1.541 1.531 1.541h24.727c.843 0 1.53-.691 1.53-1.541v-6.438zM28.053 22.469l.014.014.021-.02a2.498 2.498 0 0 1 3.547 0c.474.477.735 1.111.735 1.785 0 .674-.261 1.309-.735 1.787l-2.867 2.887a.98.98 0 0 1-.7.291.983.983 0 0 1-.701-.291l-2.862-2.882a2.542 2.542 0 0 1 0-3.571 2.5 2.5 0 0 1 3.548 0zm-2.481 2.498l2.496 2.511 2.501-2.518c.189-.19.293-.443.293-.712 0-.268-.104-.521-.293-.712a.997.997 0 0 0-1.414 0l-.387.39a.978.978 0 0 1-.701.292.978.978 0 0 1-.7-.292l-.381-.383a.994.994 0 0 0-1.414 0 1.015 1.015 0 0 0 0 1.424z"
                                                                ></path>
                                                            </svg>
                                                            <div className="left-content">
                                                                Pharmaceuticals &amp;&nbsp;Biotechnology
                                                            </div>
                                                        </button>
                                                    </li>
                                                    <li className="nav-item" role="presentation">
                                                        <button
                                                            className="nav-link"
                                                            id="infra6-tab"
                                                            data-bs-toggle="tab"
                                                            data-bs-target="#infra6-tab-pane"
                                                            type="button"
                                                            role="tab"
                                                            aria-controls="infra6-tab-pane"
                                                            aria-selected="false"
                                                            tabIndex={-1}
                                                        >
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={29}
                                                                height={51}
                                                            >
                                                                <path
                                                                    fill="#5A5874"
                                                                    fillRule="evenodd"
                                                                    d="M28.794 11.39l-3.583 11.166a16.563 16.563 0 0 0 .233 10.75 24.812 24.812 0 0 1 1.61 9.741l-.218 5.974c-.018.506-.391.93-.892 1.014A68.698 68.698 0 0 1 14.483 51c-3.829 0-7.658-.322-11.46-.965a1.07 1.07 0 0 1-.893-1.014l-.218-5.974a24.812 24.812 0 0 1 1.611-9.741l.006-.017a16.564 16.564 0 0 0 .226-10.733L.172 11.39a3.498 3.498 0 0 1 .231-2.706A3.527 3.527 0 0 1 2.494 6.94l6.109-1.901a1.803 1.803 0 0 0 1.244-1.455l.214-1.495A2.451 2.451 0 0 1 12.479 0h4.009c1.207 0 2.247.898 2.418 2.089l.214 1.495c.098.679.586 1.25 1.243 1.455l6.11 1.901a3.525 3.525 0 0 1 2.09 1.744c.439.842.521 1.803.231 2.706zM26.66 9.669a1.398 1.398 0 0 0-.827-.689l-5.291-1.647a6.972 6.972 0 0 1-.3.525 1.074 1.074 0 0 1-1.48.328 1.065 1.065 0 0 1-.33-1.474c.047-.073.091-.147.134-.223a3.94 3.94 0 0 1-1.569-2.603l-.214-1.495a.3.3 0 0 0-.295-.255h-4.009a.3.3 0 0 0-.295.255l-.214 1.495a3.94 3.94 0 0 1-1.569 2.603c.042.076.087.15.133.223a1.065 1.065 0 0 1-.329 1.474 1.072 1.072 0 0 1-1.48-.328 6.478 6.478 0 0 1-.301-.525L3.134 8.98c-.36.111-.654.356-.827.689a1.387 1.387 0 0 0-.092 1.071l1.736 5.41c.555.13 1.118.253 1.677.364a1.068 1.068 0 1 1-.417 2.095c-.168-.033-.336-.07-.505-.105l1.092 3.402a18.6 18.6 0 0 1 .884 5.784c.526.068.933.515.933 1.058 0 .587-.476 1.063-1.065 1.068a18.552 18.552 0 0 1-1.009 4.212l-.012.033a22.946 22.946 0 0 0-1.235 4.711c.444.101.889.198 1.334.286a1.069 1.069 0 1 1-.417 2.095 45.906 45.906 0 0 1-1.136-.239 22.342 22.342 0 0 0-.019 2.055l.186 5.1a66.365 66.365 0 0 0 20.483 0l.186-5.1c.023-.634.018-1.267-.011-1.897-.389.08-.779.157-1.167.227a1.067 1.067 0 0 1-1.247-.859 1.067 1.067 0 0 1 .863-1.242c.448-.082.899-.172 1.348-.267a22.898 22.898 0 0 0-1.26-4.871l-.015-.04a18.522 18.522 0 0 1-1.007-4.207 1.07 1.07 0 0 1-1.018-1.065c0-.527.384-.963.887-1.051a18.625 18.625 0 0 1 .885-5.791l1.04-3.242c-.159.03-.318.062-.476.091a1.071 1.071 0 0 1-1.247-.86c-.106-.58.28-1.136.863-1.242a46.647 46.647 0 0 0 1.608-.322l1.794-5.591a1.386 1.386 0 0 0-.091-1.071zm-6.07 9.553c-.651.075-1.311.138-1.964.188a1.07 1.07 0 0 1-.163-2.13 47.187 47.187 0 0 0 1.879-.18 1.071 1.071 0 0 1 1.189.937 1.07 1.07 0 0 1-.941 1.185zm-2.934-8.991c-.45.235-.927.421-1.417.551a1.072 1.072 0 0 1-1.312-.758 1.068 1.068 0 0 1 .761-1.307c.336-.089.662-.216.97-.377a1.075 1.075 0 0 1 1.448.448 1.067 1.067 0 0 1-.45 1.443zm-2.217 7.182c.586 0 1.065.47 1.072 1.055a1.07 1.07 0 0 1-1.059 1.081c-.2.003-.402.002-.601.004-.455 0-.917-.006-1.372-.019a1.07 1.07 0 0 1-1.042-1.097 1.067 1.067 0 0 1 1.101-1.038c.436.012.878.018 1.314.018h.005c.19 0 .379-.001.569-.004h.013zm-2.437-6.596c-.091 0-.184-.011-.276-.036a6.809 6.809 0 0 1-1.418-.551 1.066 1.066 0 0 1-.449-1.443 1.074 1.074 0 0 1 1.448-.447c.308.161.634.288.97.377.572.151.913.736.76 1.306a1.071 1.071 0 0 1-1.035.794zm-1.529 7.562a1.072 1.072 0 0 1-1.167.966 49.548 49.548 0 0 1-1.96-.22 1.068 1.068 0 1 1 .282-2.117c.62.081 1.252.152 1.875.209a1.07 1.07 0 0 1 .97 1.162zm-.97 21.383a1.07 1.07 0 0 1 .97 1.161 1.072 1.072 0 0 1-1.167.966 51.498 51.498 0 0 1-1.96-.219 1.07 1.07 0 0 1-.922-1.2 1.072 1.072 0 0 1 1.204-.918c.62.082 1.252.152 1.875.21zM9.26 29.816a1.07 1.07 0 0 1-1.073-1.068c0-.59.481-1.068 1.073-1.068h1.686a1.07 1.07 0 0 1 1.072 1.068c0 .59-.48 1.068-1.072 1.068H9.26zm4.403 0a1.07 1.07 0 0 1-1.072-1.068c0-.59.48-1.068 1.072-1.068h1.686a1.07 1.07 0 0 1 1.073 1.068c0 .59-.48 1.068-1.073 1.068h-1.686zm-.155 10.126a47.476 47.476 0 0 0 1.918.016h.013a1.07 1.07 0 0 1 1.072 1.055 1.07 1.07 0 0 1-1.059 1.081 48.551 48.551 0 0 1-1.973-.016 1.07 1.07 0 0 1 .029-2.136zm4.558-12.262h1.687a1.07 1.07 0 0 1 1.072 1.068c0 .59-.48 1.068-1.072 1.068h-1.687a1.07 1.07 0 0 1-1.072-1.068c0-.59.48-1.068 1.072-1.068zm.397 12.144a47.187 47.187 0 0 0 1.879-.18 1.072 1.072 0 0 1 1.189.937 1.07 1.07 0 0 1-.941 1.185c-.651.075-1.311.139-1.964.188a1.07 1.07 0 0 1-1.151-.983 1.07 1.07 0 0 1 .988-1.147z"
                                                                ></path>
                                                            </svg>
                                                            <div className="left-content">
                                                                Textile &amp;&nbsp;Garments
                                                            </div>
                                                        </button>
                                                    </li>
                                                    <li className="nav-item" role="presentation">
                                                        <button
                                                            className="nav-link"
                                                            id="infra7-tab"
                                                            data-bs-toggle="tab"
                                                            data-bs-target="#infra7-tab-pane"
                                                            type="button"
                                                            role="tab"
                                                            aria-controls="infra7-tab-pane"
                                                            aria-selected="false"
                                                            tabIndex={-1}
                                                        >
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={57}
                                                                height={44}
                                                            >
                                                                <path
                                                                    fill="#5A5874"
                                                                    fillRule="evenodd"
                                                                    d="M57.008 16.421c-.047-1.446-1.259-2.611-2.76-2.662l-.395-.004c-.921 0-3.48.086-6.644.68-.566-4.124-1.713-7.052-1.808-7.286a2.795 2.795 0 0 0-1.566-1.544 2.952 2.952 0 0 0-2.238.023c-.209.089-2.511 1.091-5.383 3.04-2.517-4.619-5.429-7.597-5.643-7.811a2.904 2.904 0 0 0-2.06-.85c-.777 0-1.521.307-2.059.849-.214.214-3.129 3.197-5.647 7.821-2.866-1.944-5.17-2.96-5.379-3.049a2.937 2.937 0 0 0-2.238-.024 2.803 2.803 0 0 0-1.566 1.543c-.094.235-1.241 3.161-1.807 7.287-3.166-.594-5.723-.679-6.645-.679l-.397.004c-1.5.051-2.713 1.216-2.76 2.662-.017.515-.32 12.713 7.543 20.298C14.74 43.65 26.013 44 28.2 44l.292-.003c.006 0 .012.003.017.003l.018-.003.292.003c2.187 0 13.46-.35 20.644-7.281 7.866-7.585 7.563-19.783 7.545-20.298zM42.744 8.145s1.142 2.886 1.664 6.935a30.772 30.772 0 0 0-5.07 1.846 29.416 29.416 0 0 0-1.885-5.719c2.911-2.034 5.291-3.062 5.291-3.062zm-28.466 0s2.38 1.023 5.293 3.058a29.34 29.34 0 0 0-1.889 5.738 30.93 30.93 0 0 0-5.069-1.857c.522-4.052 1.665-6.939 1.665-6.939zm-4.705 26.63c-7.082-6.831-6.711-18.266-6.711-18.266s.107-.004.307-.004c1.493 0 8.15.229 14.049 3.295a23.52 23.52 0 0 0-.108 2.204c0 8.464 4.762 15.614 7.489 19.019-4.086-.468-10.518-1.899-15.026-6.248zm19.001 6.412a3.433 3.433 0 0 1-.18-.06c-1.003-1.055-8.434-9.211-8.434-19.123 0-10.63 8.551-19.248 8.551-19.248s8.551 8.618 8.551 19.248c0 10.2-7.852 18.525-8.488 19.183zm18.876-6.412c-4.508 4.349-10.94 5.78-15.026 6.248 2.726-3.405 7.488-10.555 7.488-19.019 0-.751-.039-1.489-.11-2.217 5.899-3.064 12.559-3.282 14.051-3.282.2 0 .307.002.307.002s.372 11.437-6.71 18.268z"
                                                                ></path>
                                                            </svg>
                                                            <div className="left-content">
                                                                Tourism &amp;&nbsp;Hospitality
                                                            </div>
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane"
                                        id="leaving-tab-pane"
                                        role="tabpanel"
                                        aria-labelledby="leaving-tab"
                                        tabIndex={0}
                                    >
                                        <div className="swiper-container ease_of_leaving_silder">
                                            <div className="swiper-wrapper mt-2">
                                                <div className="swiper-slide">
                                                    <div className="card">
                                                        <img
                                                            src="assets/img/MostLiveable.png"
                                                            className="img-fluid"
                                                        />
                                                        <div className="card-body">
                                                            <h5 className="card-title font-weight-bold">
                                                                Most Liveable
                                                            </h5>
                                                            <p className="card-text">
                                                                {" "}
                                                                Gujarat’s 12 cities among top 50 cleanest cities in the
                                                                Swachh Survekshan 2020 (Surat ranked 2nd, Ahmedabad
                                                                ranked 5th, Rajkot ranked 6th and Vadodara ranked 10th)
                                                                .
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="swiper-slide">
                                                    <div className="card">
                                                        <img
                                                            src="assets/img/healthcare.png"
                                                            className="img-fluid"
                                                        />
                                                        <div className="card-body">
                                                            <h5 className="card-title font-weight-bold">
                                                                Healthcare
                                                            </h5>
                                                            <p className="card-text">
                                                                {" "}
                                                                Gujarat has over 25 world class medical facilities and
                                                                super multi-specialty hospitals like Apollo, Zydus,
                                                                Sterling, Civil etc. that attracts patients from Middle
                                                                East, Africa and European countries.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="swiper-slide">
                                                    <div className="card">
                                                        <img src="assets/img/education.png" className="img-fluid" />
                                                        <div className="card-body">
                                                            <h5 className="card-title font-weight-bold">Education</h5>
                                                            <p className="card-text">
                                                                {" "}
                                                                Gujarat is home to prestigious institutes like IIM-A,
                                                                NID, MICA,NIFT, CEPT, IIT Gn, IIIT Vadodara, NIT Surat,
                                                                B.J. Medical College.IIM-A secured 1<sup>st</sup>{" "}
                                                                position in the management categoryof the NIRF Ranking
                                                                2020 while Gujarat University attained 60th rank in the
                                                                overall category.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="swiper-slide">
                                                    <div className="card">
                                                        <img
                                                            src="assets/img/SmartCities.png"
                                                            className="img-fluid"
                                                        />
                                                        <div className="card-body">
                                                            <h5 className="card-title font-weight-bold">
                                                                Smart Cities
                                                            </h5>
                                                            <p className="card-text">
                                                                Of the total 6 smart cities in Gujarat, Ahmedabad,
                                                                Vadodara andSurat rank in the top 10 cities in the Smart
                                                                City Rankings by MoHUA.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="swiper-slide">
                                                    <div className="card">
                                                        <img src="assets/img/Wealth.png" className="img-fluid" />
                                                        <div className="card-body">
                                                            <h5 className="card-title font-weight-bold">
                                                                Wealth of Talent
                                                            </h5>
                                                            <p className="card-text">
                                                                Gujarat ranks 2nd in terms of Knowledge workers as per
                                                                NITI Aayog’s India Innovation Index – 2019. Gujarat has
                                                                the lowest unemployment rate of 3.4% as per the Periodic
                                                                Labour Force Survey (2018-19)
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="services__area-three section-pt-110 section-pb-110">
                    <img
                        src="assets/img/event-round.png"
                        alt="shape"
                        className="rotateme roate-event-bg"
                    />
                    <div className="container">
                        <div className="text-center mb-4">
                            <h2 className="title text-white mb-2">Explore Gujarat </h2>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="services__nav-wrap">
                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className="nav-link active"
                                                id="freight-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#freight-tab-pane"
                                                type="button"
                                                role="tab"
                                                aria-controls="freight-tab-pane"
                                                aria-selected="true"
                                            >
                                                <span className="left-content">
                                                    <span>Tourism</span>
                                                </span>
                                                <span className="arrow">
                                                    <i className="flaticon-right-up" />
                                                </span>
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className="nav-link"
                                                id="ocean-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#ocean-tab-pane"
                                                type="button"
                                                role="tab"
                                                aria-controls="ocean-tab-pane"
                                                aria-selected="false"
                                            >
                                                <span className="left-content">
                                                    <span>Sports</span>
                                                </span>
                                                <span className="arrow">
                                                    <i className="flaticon-right-up" />
                                                </span>
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className="nav-link"
                                                id="rail-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#rail-tab-pane"
                                                type="button"
                                                role="tab"
                                                aria-controls="rail-tab-pane"
                                                aria-selected="false"
                                            >
                                                <span className="left-content">
                                                    <span>Culture</span>
                                                </span>
                                                <span className="arrow">
                                                    <i className="flaticon-right-up" />
                                                </span>
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className="nav-link"
                                                id="land-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#land-tab-pane"
                                                type="button"
                                                role="tab"
                                                aria-controls="land-tab-pane"
                                                aria-selected="false"
                                            >
                                                <span className="left-content">
                                                    <span>Wildlife</span>
                                                </span>
                                                <span className="arrow">
                                                    <i className="flaticon-right-up" />
                                                </span>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="services__tab-img">
                                    <div className="tab-content" id="myTabContent">
                                        <div
                                            className="tab-pane show active wow img-custom-anim-left"
                                            id="freight-tab-pane"
                                            role="tabpanel"
                                            aria-labelledby="freight-tab"
                                            tabIndex={0}
                                        >
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="text-white explore-tab-details">
                                                        Gujarat is one of the most diverse States in India. Its
                                                        history stretches over a long years from the age old
                                                        Harappan Civilization to the Mughal period. Gujarat's
                                                        endless journey from Roots to Wings is timeless with
                                                        historical and cultural traditions glorifying the State.
                                                        <div>
                                                            <b>The Land of the Legends</b>
                                                        </div>
                                                        Gujarat, the Land of the Legends, is the birthplace of many
                                                        Freedom fighters like the legendary Mahatma Gandhi, Sardar
                                                        Vallabhbhai Patel and many others who fought the freedom
                                                        struggle, infusing the qualities of tolerance, brotherhood,
                                                        non-violence and patriotism into Indians.
                                                    </div>
                                                    <a href="#">Read More...</a>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="services__thumb-two">
                                                        <a href="#">
                                                            <img src="assets/img/Tourism.png" alt="img" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="tab-pane wow img-custom-anim-left"
                                            id="ocean-tab-pane"
                                            role="tabpanel"
                                            aria-labelledby="ocean-tab"
                                            tabIndex={0}
                                        >
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="text-white explore-tab-details">
                                                        Gujarat Sports and Recreation acts as a catalyst for Health
                                                        and well being Therapy. It rejuvenates, relaxes, inspires
                                                        and enlightens. There are many independent sports
                                                        associations with National and Regional affiliate in
                                                        Gujarat. They conduct a variety of tournaments, as well as
                                                        coaching activity in the state. The Gujarat Cricket
                                                        Association, an affiliate of the BCCI conducts its own
                                                        tournaments in the open (without age restrictions) as well
                                                        as age group related circuits. The Sports Authority of
                                                        Gujarat also conducts state level tournaments for under 19
                                                        age group.
                                                    </div>
                                                    <a href="#">Read More...</a>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="services__thumb-two">
                                                        <a href="#">
                                                            <img src="assets/img/Sports.png" alt="img" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="tab-pane wow img-custom-anim-left"
                                            id="rail-tab-pane"
                                            role="tabpanel"
                                            aria-labelledby="rail-tab"
                                            tabIndex={0}
                                        >
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="text-white explore-tab-details">
                                                        Experience the aesthetic appeal with the Arts, Culture and
                                                        Lifestyles in Gujarat. It earns the reputation of finer
                                                        things in life as Arts reflects medium of expression and
                                                        communication, culture reflects the finer details of moral
                                                        and traditional values and Lifestyles is the very existence
                                                        of Gujaratis, unmatched ‘lifestyle living’ in the country.
                                                        In Gujarat, Arts is an expression. The brilliant blend of
                                                        Arts, culture and Lifestyle make spaces for peace and
                                                        soulful well being. In Gujarat, there is freedom for Artists
                                                        as they create an image on a canvass or click a photograph
                                                        that appeals to the eye. With ample mediums to work on
                                                        innovative, witty and submissive forms, Arts present
                                                        something to our sense – perceptions as they make way to
                                                        articulate lifestyles. Gujarat stand unique with Arts as a
                                                        form of expression as it is a home to many world renowned
                                                        Artists and flourishing talents shaping up the Art World.
                                                        The State also has a fantastic pool of artists and a new
                                                        breed of collectors and investors in the Art Talents.
                                                    </div>
                                                    <a href="#">Read More...</a>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="services__thumb-two">
                                                        <a href="#">
                                                            <img src="assets/img/Culture.png" alt="img" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="tab-pane wow img-custom-anim-left"
                                            id="land-tab-pane"
                                            role="tabpanel"
                                            aria-labelledby="land-tab"
                                            tabIndex={0}
                                        >
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="text-white explore-tab-details">
                                                        Gujarat is the dream of an explorer who quest for nature and
                                                        wild life. Gujarat possesses varied Landforms with the dry
                                                        deciduous forests, majestic grasslands, marine ecosystems,
                                                        wetlands and rich moist deciduous forests. These habitats
                                                        are home to rare wild life inhabitants. The Land of the
                                                        Legends is symbolically known for its wildlife icon of Lions
                                                        that are found in the Gir reserve and happen to be a major
                                                        attraction for tourists in Gujarat.
                                                    </div>
                                                    <a href="#">Read More...</a>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="services__thumb-two">
                                                        <a href="#">
                                                            <img src="assets/img/Wildlife.png" alt="img" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="schemes section-pt-110 section-pb-110">
                    <div className="container">
                        <div className="text-center mt-4">
                            <h2 className="title">Gujarat Government Schemes &amp; Policies</h2>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="scheme1">
                                    <div className="scheme">
                                        <div className="d-flex">
                                            <div className="img">
                                                <img src="assets/img/scheme1.png" />
                                            </div>
                                            <div className="ms-4">
                                                <div className="scheme-title">Total Schemes</div>
                                                <div className="scheme-number">
                                                    <span className="counter-number">345</span>+
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="scheme2">
                                    <div className="scheme">
                                        <div className="d-flex">
                                            <div className="img">
                                                <img src="assets/img/scheme2.png" />
                                            </div>
                                            <div className="ms-4">
                                                <div className="scheme-title">Start Ups</div>
                                                <div className="scheme-number">
                                                    <span className="counter-number">12900</span>+
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="scheme3">
                                    <div className="scheme">
                                        <div className="d-flex">
                                            <div className="img">
                                                <img src="assets/img/scheme3.png" />
                                            </div>
                                            <div className="ms-4">
                                                <div className="scheme-title">Policies</div>
                                                <div className="scheme-number">
                                                    <span className="counter-number">345</span>+
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="service_section section-pt-110 section-pb-110">
                    <div className="container">
                        <div className="text-center">
                            <h2 className="title text-white">Key E- governance Projects</h2>
                        </div>
                        <div className="swiper-container projects">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="service text-center">
                                        <div>
                                            <div className="d-flex justify-content-center">
                                                <div className="icon">
                                                    <img src="assets/img/service1.png" />
                                                </div>
                                            </div>
                                            <div className="service_Content">
                                                <div className="title">
                                                    Digital Gujarat <br /> Project
                                                </div>
                                                <div className="line" />
                                                <p>
                                                    The Digital Gujarat Portal provides government services
                                                    through both online and physical assistance counters in
                                                    district, taluka, and e-gram centers.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="service text-center">
                                        <div>
                                            <div className="d-flex justify-content-center">
                                                <div className="icon">
                                                    <img src="assets/img/service1.png" />
                                                </div>
                                            </div>
                                            <div className="service_Content">
                                                <div className="title">
                                                    Gujarat State Data <br /> Centre
                                                </div>
                                                <div className="line" />
                                                <p>
                                                    Under the National e-Governance Plan (NeGP) of Government of
                                                    India, State Data Centre (SDC) has been identified as one of
                                                    the core and critical infrastructure components needed for
                                                    consolidation and hosting of applications that are essential
                                                    for the delivery of e-Governance services.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="service text-center">
                                        <div>
                                            <div className="d-flex justify-content-center">
                                                <div className="icon">
                                                    <img src="assets/img/service1.png" />
                                                </div>
                                            </div>
                                            <div className="service_Content">
                                                <div className="title">
                                                    GSWAN (Gujarat State Wide Area Network)
                                                </div>
                                                <div className="line" />
                                                <p>
                                                    Gujarat State Wide Area Network (GSWAN) is one of the largest
                                                    IP based Multi Service (Voice, Data and Video) IT
                                                    infrastructure connecting 26 Districts, 225 Talukas to State
                                                    capital Gandhinagar.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="service text-center">
                                        <div>
                                            <div className="d-flex justify-content-center">
                                                <div className="icon">
                                                    <img src="assets/img/service1.png" />
                                                </div>
                                            </div>
                                            <div className="service_Content">
                                                <div className="title">
                                                    Sachivalya Integrated Communication Network
                                                </div>
                                                <div className="line" />
                                                <p>
                                                    The main objective of SICN Project is to providing Safe Voice
                                                    Communication Services in the Capital of Gujarat Gandhinagar
                                                    connecting almost all the Govt. offices and Boards &amp;
                                                    Corporations Offices.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="Initiatives-area section-pt-110 section-pb-110">
                    <div className="text-center">
                        <h2 className="title mb-3">Major Initiatives</h2>
                    </div>
                    <div className="container Initiatives-container">
                        <div className="row">
                            <div className="col-lg-9">
                                <div className="Initiatives__tab-img">
                                    <div className="tab-content" id="myTabContent">
                                        <div
                                            className="tab-pane active show"
                                            id="one-tab-pane"
                                            role="tabpanel"
                                            aria-labelledby="one-tab"
                                            tabIndex={0}
                                        >
                                            <div className="row">
                                                <div className="col-12">
                                                    <h2 className="pt-2 text-center">E-governance</h2>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="Initiatives_img Initiatives_img py-3 wow img-custom-anim-left  animated">
                                                        <img
                                                            src="assets/img/initiatives-awards.jpg"
                                                            className="img-fluid"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="Initiatives_details py-3">
                                                        Awarded for Best e-Governance, Gujarat is a frontline State
                                                        in the implementation of e-governance policies &amp;
                                                        projects and setting up of key infrastructure for
                                                        E-Governance. Gujarat Government focus on growth and
                                                        development of new &amp; emerging technology areas. It has
                                                        been increasingly using the ICT (Information and
                                                        Communication Technologies) to offer citizen based service
                                                        as per convenient location with an initiative to improve the
                                                        reach, make services more transparent and reduce response
                                                        time with reducing costs. The Government is also proactive
                                                        in its Initiatives and ranks first state in the country to
                                                        have made e-Governance functional in all its Municipalities
                                                        and Municipal Corporations. Gujarat Government promotes
                                                        information sharing with the citizen by way of display and
                                                        disclosure of information of large number of functional
                                                        departments and their subordinate organizations through
                                                        their respective websites which act as ‘Information tools’
                                                        in the State.
                                                    </div>
                                                    <a href="#">Read More...</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="tab-pane"
                                            id="two-tab-pane"
                                            role="tabpanel"
                                            aria-labelledby="two-tab"
                                            tabIndex={0}
                                        >
                                            <div className="row">
                                                <div className="col-12">
                                                    <h2 className="pt-2 text-center">Education</h2>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="Initiatives_img py-3">
                                                        <img
                                                            src="assets/img/education-initative.jpg"
                                                            className="img-fluid"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="Initiatives_details py-3">
                                                        ‘Smart Goals’ with a future vision 'Education for All' is a
                                                        major Project of the Education Department with its
                                                        Continuous Education and Literacy Policies geared to promote
                                                        Literacy, reduce drop out rates, Focus on Girl Education,
                                                        Teachers’ Training and a series of other Initiatives being
                                                        implemented. Girl Education, Infrastructure, Health and
                                                        Sanitation are the many areas in the process of continuous
                                                        Education, Literacy, Edu Awareness and on path to
                                                        enhancement in quality implementation. The Government vision
                                                        is for SEE (Socio-Economic-Education) growth with primary
                                                        education, secondary education, higher education, continuous
                                                        education, literacy education, technical education, pharmacy
                                                        education etc.
                                                    </div>
                                                    <a href="#">Read More...</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="tab-pane"
                                            id="three-tab-pane"
                                            role="tabpanel"
                                            aria-labelledby="three-tab"
                                            tabIndex={0}
                                        >
                                            <div className="row">
                                                <div className="col-12">
                                                    <h2 className="pt-2 text-center">Agriculture</h2>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="Initiatives_img py-3">
                                                        <img
                                                            src="assets/img/krushi-mahotsav.jpg"
                                                            className="img-fluid"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="Initiatives_details py-3">
                                                        Leading as Second in ‘Green Revolution’ – Gujarat has
                                                        achieved Agricultural Growth table at 9.6% and have carved a
                                                        niche in the field of Agricultural Development in India. As
                                                        of 2009, Gujarat’s agriculture growth rate has been three
                                                        times more than the national growth rate. The department is
                                                        confident to change the lives of farmers with its
                                                        Agriculture Policies and the unique Initiative of the
                                                        ‘Krushi Mahotsav’ in the State. In 2001, the State was on
                                                        verge of less water resources but today, it stand as World’s
                                                        biggest water resource Narmada Canal. Where the dust took to
                                                        wind storm, there are green fields and where the farmers
                                                        tilled the land with 1-2 crops, they have sort for 3-4
                                                        crops. Continuous hard work of seven years and planned
                                                        efforts of the Government have resulted in Green Revolution
                                                        taking shape in Gujarat.
                                                    </div>
                                                    <a href="#">Read More...</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="tab-pane"
                                            id="four-tab-pane"
                                            role="tabpanel"
                                            aria-labelledby="four-tab"
                                            tabIndex={0}
                                        >
                                            <div className="row">
                                                <div className="col-12">
                                                    <h2 className="pt-2 text-center">
                                                        Women and Child Development
                                                    </h2>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="Initiatives_img py-3">
                                                        <img
                                                            src="assets/img/woman-child-development-initative.jpg"
                                                            className="img-fluid"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="Initiatives_details py-3">
                                                        The constitution of India resolves to constitute India into
                                                        a Sovereign Socialist Secular Democratic Republic and secure
                                                        to all citizens its Fundamental Rights. The Principle of
                                                        Gender equality grants equality to women and empowers the
                                                        State to adopt measures of positive discrimination in favor
                                                        of women. The WCD Department with the ICDS and IWDS
                                                        (Integrated Child Development Service and Integrated Women’s
                                                        Development Service) functions for the Empowerment,
                                                        upliftment and welfare of Women and children under its
                                                        various schemes. Initiated by GOI, the ICDS and IWDS scheme
                                                        was launched in 1975 and expanded to over 5000 + projects
                                                        spread over 35 states benefiting 35 million children (0-6
                                                        years) and about 6.6 million pregnant and lactating mothers
                                                        through a network of 6 lac Anganwadi centres.
                                                    </div>
                                                    <a href="#">Read More...</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="tab-pane"
                                            id="five-tab-pane"
                                            role="tabpanel"
                                            aria-labelledby="five-tab"
                                            tabIndex={0}
                                        >
                                            <div className="row">
                                                <div className="col-12">
                                                    <h2 className="pt-2 text-center">Global Warming</h2>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="Initiatives_img py-3">
                                                        <img
                                                            src="assets/img/environment-initative.jpg"
                                                            className="img-fluid"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="Initiatives_details py-3">
                                                        The Environment wing of the Department is the apex body in
                                                        the Gujarat State for implementation of all the environment
                                                        related matters to achieve the sustainable development in
                                                        the State and introducing the sound environmental management
                                                        practices. The Department has four executing agencies viz
                                                        Gujarat Pollution Control Board, Gujarat Ecology Commission,
                                                        Gujarat Institute of Desert Ecology and Gujarat
                                                        Environmental Management Institute, for discharging its
                                                        functions. Various studies are initiated for Environmental
                                                        Management and sustainable development in the State of
                                                        Gujarat by identifying the critical areas that need special
                                                        attention for Green Cover. The Forest and Environment
                                                        initiatives have been implemented at length as 60% of
                                                        Population in Gujarat dwells in rural areas who rely for
                                                        living on Forest regions. Hence, the regeneration,
                                                        maintaining the productivity level and sustainability of the
                                                        non-forest lands, particularly the common lands has become
                                                        imperative for the state for a continuous supply of rural
                                                        needs
                                                    </div>
                                                    <a href="#">Read More...</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="tab-pane"
                                            id="six-tab-pane"
                                            role="tabpanel"
                                            aria-labelledby="six-tab"
                                            tabIndex={0}
                                        >
                                            <div className="row">
                                                <div className="col-12">
                                                    <h2 className="pt-2 text-center">Infrastructure</h2>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="Initiatives_img py-3">
                                                        <img
                                                            src="assets/img/infrastructure-initative.jpg"
                                                            className="img-fluid"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="Initiatives_details py-3">
                                                        Gujarat has always believed that it is the infrastructure
                                                        which will drive growth in various sectors of the economy as
                                                        well as social well-being. Therefore Gujarat is the first
                                                        state in the country to enact a legal framework for PPP in
                                                        infrastructure sector – the Gujarat Infrastructure
                                                        Development Board (GIDB). GIDB was created in 1995 and was
                                                        soon given the statutory status by enacting the Gujarat
                                                        Infrastructure Development (GID) Act 1999. The GID Act
                                                        provides a puts in a fair, transparent and dependable
                                                        mechanism for selection of developers. Developers can be
                                                        selected either through competitive bidding, Swiss challenge
                                                        route or through direct negotiation after following certain
                                                        criterion. GIDB has the mandate to shape up the projects and
                                                        co-ordinate with various agencies.
                                                    </div>
                                                    <a href="#">Read More...</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 pe-0">
                                <div className="Initiatives_nav-wrap">
                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className="nav-link active"
                                                id="one-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#one-tab-pane"
                                                type="button"
                                                role="tab"
                                                aria-controls="one-tab-pane"
                                                aria-selected="false"
                                                tabIndex={-1}
                                            >
                                                E-governance
                                                <span className="arrow">
                                                    <i className="flaticon-right-up" />
                                                </span>
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className="nav-link"
                                                id="two-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#two-tab-pane"
                                                type="button"
                                                role="tab"
                                                aria-controls="two-tab-pane"
                                                aria-selected="false"
                                                tabIndex={-1}
                                            >
                                                <span className="left-content">
                                                    <span>Education</span>
                                                </span>
                                                <span className="arrow">
                                                    <i className="flaticon-right-up" />
                                                </span>
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className="nav-link"
                                                id="three-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#three-tab-pane"
                                                type="button"
                                                role="tab"
                                                aria-controls="three-tab-pane"
                                                aria-selected="false"
                                                tabIndex={-1}
                                            >
                                                <span className="left-content">
                                                    <span>Agriculture</span>
                                                </span>
                                                <span className="arrow">
                                                    <i className="flaticon-right-up" />
                                                </span>
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className="nav-link"
                                                id="four-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#four-tab-pane"
                                                type="button"
                                                role="tab"
                                                aria-controls="four-tab-pane"
                                                aria-selected="false"
                                                tabIndex={-1}
                                            >
                                                <span className="left-content">
                                                    <span>Women and Child Development</span>
                                                </span>
                                                <span className="arrow">
                                                    <i className="flaticon-right-up" />
                                                </span>
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className="nav-link"
                                                id="five-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#five-tab-pane"
                                                type="button"
                                                role="tab"
                                                aria-controls="five-tab-pane"
                                                aria-selected="false"
                                                tabIndex={-1}
                                            >
                                                <span className="left-content">
                                                    <span>Global Warming</span>
                                                </span>
                                                <span className="arrow">
                                                    <i className="flaticon-right-up" />
                                                </span>
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className="nav-link"
                                                id="six-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#six-tab-pane"
                                                type="button"
                                                role="tab"
                                                aria-controls="six-tab-pane"
                                                aria-selected="false"
                                                tabIndex={-1}
                                            >
                                                <span className="left-content">
                                                    <span>Infrastructure</span>
                                                </span>
                                                <span className="arrow">
                                                    <i className="flaticon-right-up" />
                                                </span>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>















            </main>
            <div className='mt-[140px]'>
                <Footer />
            </div>
        </>
    )
}

export default HomePage