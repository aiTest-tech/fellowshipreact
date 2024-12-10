// @ts-nocheck
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { useEffect, useState } from 'react';
import '../../index.css'
import { useDispatch, useSelector } from 'react-redux';


import Modal from 'react-modal';

// interface VideoCardProps {
//     videoUrl: string;
// }

// const VideoCard: React.FC<VideoCardProps> = ({ videoUrl }) => {
//     const [isModalOpen, setIsModalOpen] = useState(false);

//     const openModal = () => {
//         setIsModalOpen(true);
//     };

//     const closeModal = () => {
//         setIsModalOpen(false);
//     };

//     return (
//         <div>
//             {/* Card */}
//             <div
//                 className="card"
//                 style={cardStyle}
//                 onClick={openModal}
//             >
//                 <h3>Click to Watch Video</h3>
//                 <p>Click this card to open a YouTube video</p>
//             </div>

//             {/* Modal for YouTube Video */}
//             <Modal
//                 isOpen={isModalOpen}
//                 onRequestClose={closeModal}
//                 contentLabel="YouTube Video Modal"
//                 style={modalStyle}
//             >
//                 <button onClick={closeModal} style={closeButtonStyle}>Close</button>
//                 <div style={iframeWrapperStyle}>
//                     <iframe
//                         width="100%"
//                         height="315"
//                         src={videoUrl}
//                         title="YouTube video player"
//                         frameBorder="0"
//                         allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
//                         allowFullScreen
//                     />
//                 </div>
//             </Modal>
//         </div>
//     );
// };

// // Card Style
// const cardStyle: React.CSSProperties = {
//     width: '300px',
//     padding: '20px',
//     border: '1px solid #ccc',
//     borderRadius: '8px',
//     cursor: 'pointer',
//     textAlign: 'center',
//     backgroundColor: '#f9f9f9',
// };

// const modalStyle = {
//     content: {
//         top: '50%',
//         left: '50%',
//         right: 'auto',
//         bottom: 'auto',
//         transform: 'translate(-50%, -50%)',
//         width: '80%',
//         maxWidth: '600px',
//         backgroundColor: '#fff',
//         padding: '20px',
//         borderRadius: '8px',
//         boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
//     },
//     overlay: {
//         backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     },
// };

// const closeButtonStyle: React.CSSProperties = {
//     position: 'absolute',
//     top: '10px',
//     right: '10px',
//     backgroundColor: 'transparent',
//     border: 'none',
//     fontSize: '20px',
//     cursor: 'pointer',
// };

// const iframeWrapperStyle: React.CSSProperties = {
//     position: 'relative',
//     paddingBottom: '56.25%',
//     height: '0',
//     overflow: 'hidden',
//     maxWidth: '100%',
// };

// VideoCard;


const VideoCard = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [mediaType, setMediaType] = useState(""); // 'photo' or 'video'
    const [mediaSrc, setMediaSrc] = useState(""); // URL of the clicked media

    // Function to open the modal
    const openModal = (type, src) => {
        setMediaType(type);
        setMediaSrc(src);
        setIsModalOpen(true);
    };

    // Function to close the modal
    const closeModal = () => {
        setIsModalOpen(false);
        setMediaSrc(""); // Clear the media source
    };

    return (
        <>
            <section className="ourportfolio section-pt-110 section-pb-110">
                <div className="container">

                    <div className="row justify-content-center gutter-24">
                        <div className="col-lg-12 col-md-6">
                            <div className="portfoliosub">
                                <a href="javascript:void(0)" onClick={() => openModal('video', 'https://www.youtube.com/embed/T84-zpPbkhM?t=1s')}>
                                    <img src="https://i.ytimg.com/vi/T84-zpPbkhM/hqdefault.jpg" alt="img" className='bg-contain' />
                                </a>
                                <div className="pgallery">
                                    <img className='cursor-pointer' src="assets/img/videogallery.png" onClick={() => openModal('video', 'https://www.youtube.com/embed/T84-zpPbkhM?t=1s')} />
                                    {/* <h5>
                                        <a href="javascript:void(0)" >
                                            Video Gallery
                                        </a>
                                    </h5> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modal for Viewing Media */}
            {isModalOpen && (
                <div className="modal" onClick={closeModal} style={modalStyles.overlay}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()} style={modalStyles.content}>
                        <span className="close" onClick={closeModal} style={modalStyles.close}>×</span>
                        {mediaType === 'photo' ? (
                            <img src={mediaSrc} alt="media" style={modalStyles.media} />
                        ) : (
                            <div style={modalStyles.videoWrapper}>
                                <iframe
                                    src={mediaSrc}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    title="video"
                                    style={modalStyles.iframe}
                                />
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

// Modal styles
const modalStyles = {
    overlay: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
    },
    content: {
        position: "relative",
        backgroundColor: "#fff",
        padding: "20px",
        borderRadius: "8px",
        maxWidth: "90%",
        maxHeight: "80%",
        overflow: "auto",
    },
    close: {
        position: "absolute",
        top: "10px",
        right: "10px",
        fontSize: "30px",
        cursor: "pointer",
    },
    media: {
        width: "100%",
        height: "auto",
        maxHeight: "80vh", // Limit the max height to 80% of viewport height
    },
    videoWrapper: {
        position: "relative",
        paddingTop: "56.25%", // 16:9 Aspect Ratio (height = 9 / 16 * width)
        width: "100%",
        maxHeight: "80vh", // Adjust the height of the video to be responsive
    },
    iframe: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
    },
};



const MediaPage = () => {
    const language = useSelector((state: RootState) => state.language.language);
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
                <div className="min-h-[350px] relative z-40 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
                    <h2 className="sm:text-4xl text-2xl font-bold mb-6 text-gray-200">{language === 'English' ? 'Gallery' : 'ગેલેરી'}</h2>
                </div>
            </div>
            <main className='fix'>
                {/* <section className="ourportfolio section-pt-110 section-pb-110"> */}
                <section className="section-pt-110 section-pb-110">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-12 col-md-12">
                                <div className="section__title port_double">
                                    <h2 className="title">{language === 'English' ? 'Our Gallery' : "અમારી ગેલેરી"}</h2>
                                </div>
                            </div>
                        </div>
                        {/* <div className="row justify-content-center gutter-24">
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
                        </div> */}
                        <div className="row justify-content-center gutter-24 py-6 ">
                            <div className="max-w-md rounded overflow-hidden shadow-lg">
                                <img
                                    className="w-full py-2"
                                    src="assets/img/fellows/fellow1.jpeg"
                                    alt="Sunset in the mountains"
                                />
                                <div className="px-6 py-4">
                                    <p className="text-gray-700 text-base">
                                        {language === 'English' ? "4th edition of the Global Renewable Energy Investors Meet and Expo (4th RE-INVEST) from 16th to 18th September, 2024 at Mahatma Mandir, Gandhinagar, Gujarat." : "16 થી 18 સપ્ટેમ્બર, 2024 દરમિયાન મહાત્મા મંદિર, ગાંધીનગર, ગુજરાત ખાતે ગ્લોબલ રિન્યુએબલ એનર્જી ઇન્વેસ્ટર્સ મીટ અને એક્સ્પો (ચોથી રિ-ઇન્વેસ્ટ) ની ચોથી આવૃત્તિ."}
                                    </p>
                                </div>
                            </div>

                            <div className="max-w-md rounded overflow-hidden shadow-lg">
                                <img
                                    className="w-full py-2"
                                    src="assets/img/fellows/fellow2.jpeg"
                                    alt="Sunset in the mountains"
                                />
                                <div className="px-6 py-4">
                                    <p className="text-gray-700 text-base">
                                        {language === 'English' ? "Field visit at GST bhavan" : "GST ભવન ખાતે ક્ષેત્રની મુલાકાત"}
                                    </p>
                                </div>
                            </div>

                            <div className="max-w-md rounded overflow-hidden shadow-lg">
                                <img
                                    className="w-full py-2"
                                    src="assets/img/fellows/fellow3.jpeg"
                                    alt="Sunset in the mountains"
                                />
                                <div className="px-6 py-4">
                                    <p className="text-gray-700 text-base">
                                        {language === 'English' ? "Field visit SWAGAT" : "ક્ષેત્ર મુલાકાત SWAGAT"}
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* <VideoCard videoUrl='https://www.youtube.com/watch?v=T84-zpPbkhM' /> */}
                    <VideoCard />
                </section>
            </main>
            <Footer />
        </>
    )
}

export default MediaPage