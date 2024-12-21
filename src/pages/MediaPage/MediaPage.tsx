// @ts-nocheck
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useEffect, useState } from "react";
import "../../index.css";
import { useDispatch, useSelector } from "react-redux";
import { useGetMediaDataQuery } from "../../api/mediaApi";
import { FaYoutube } from "react-icons/fa6";

import Modal from "react-modal";

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
const ResponsiveCard = () => {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);
  const cards = [
    {
      id: 1,
      title:
        "4th edition of the Global Renewable Energy Investors Meet and Expo (4th RE-INVEST) from " +
        "16th to 18th September, 2024 at Mahatma Mandir, Gandhinagar, Gujarat.",
      image: "assets/img/fellows/renuableEnergy.jpeg",
    },
    {
      id: 2,
      title: "Chintan Shibir 2024",
      image: "assets/img/fellows/chintansibir.jpeg",
    },
    {
      id: 3,
      title: "Field visit SWAGAT",
      image: "assets/img/fellows/swagat.jpeg",
    },
    {
      id: 4,
      title: "Field visit at GST bhavan",
      image: "assets/img/fellows/gstbhavan.jpeg",
    },
    // { id: 5, title: "Card 5", image: "https://via.placeholder.com/300" },
    // { id: 6, title: "Card 6", image: "https://via.placeholder.com/300" },
    // { id: 7, title: "Card 7", image: "https://via.placeholder.com/300" },
    // { id: 8, title: "Card 8", image: "https://via.placeholder.com/300" },
  ];

  return (
    <div className={`p-4 ${darkMode && "bg-black"}`}>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {cards.map((card) => (
          <div
            key={card.id}
            className="max-w-sm rounded overflow-hidden shadow-lg bg-white"
          >
            <img
              className="w-full  object-cover"
              src={card.image}
              alt={card.title}
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{card.title}</div>
              <p className="text-gray-700 text-base">
                This is a sample responsive card using React Vite and Tailwind
                CSS.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
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
<<<<<<< HEAD
=======
  };

  const modalStyles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      zIndex: 1000,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    content: {
      position: "relative",
      width: "80%",
      maxWidth: "800px",
      background: "#fff",
      borderRadius: "8px",
      overflow: "hidden",
    },
    close: {
      position: "absolute",
      top: "10px",
      right: "10px",
      fontSize: "20px",
      cursor: "pointer",
      color: "#000",
    },
    iframe: {
      width: "100%",
      height: "450px",
      border: "none",
    },
>>>>>>> be19eaa (dark mode light mode change final)
  };

  return (
    <>
<<<<<<< HEAD
      <section className="ourportfolio section-pt-110 section-pb-110">
        <div className="container">
          <div className="row justify-content-center gutter-24">
            <div className="col-lg-12 col-md-6">
              <div className="portfoliosub">
                <a
                  href="javascript:void(0)"
                  onClick={() =>
                    openModal(
                      "video",
                      "https://www.youtube.com/embed/T84-zpPbkhM?t=1s"
                    )
                  }
                >
                  <img
                    src="https://i.ytimg.com/vi/T84-zpPbkhM/hqdefault.jpg"
                    alt="img"
                    className="bg-contain"
                  />
                </a>
                <div className="pgallery">
                  <img
                    className="cursor-pointer"
                    src="assets/img/videogallery.png"
                    onClick={() =>
                      openModal(
                        "video",
                        "https://www.youtube.com/embed/T84-zpPbkhM?t=1s"
                      )
                    }
                  />
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
=======
      <div className="max-w-full sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl rounded overflow-hidden shadow-lg mx-auto">
        {/* Thumbnail Section */}
        <div className="relative">
          <img
            className="w-full object-cover"
            src="https://i.ytimg.com/vi/T84-zpPbkhM/hqdefault.jpg"
            alt="Video Thumbnail"
          />
          <div>
            <FaYoutube
              className="absolute top-[50%] left-[50%] text-red-500"
              size={50}
              onClick={() =>
                openModal(
                  "video",
                  "https://www.youtube.com/embed/T84-zpPbkhM?t=1s"
                )
              }
            />
          </div>
        </div>
        {/* Content Section */}
        <div className="px-4 py-3">
          {/* Title */}
          <h2 className="text-lg font-semibold text-gray-800 hover:text-blue-600 truncate">
            Sardar Patel Good Governance CM Fellowship Program
          </h2>
          {/* Channel and Date Info */}
          <div className="flex items-center justify-between mt-2 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <img
                className="w-8 h-8 rounded-full"
                src="assets/img/logo.jpeg"
                alt="Channel Avatar"
              />
              <span className="font-semibold text-gray-700">
                Sardar Patel Good Governance CM Fellowship Program
              </span>
            </div>
            {/* <span>1 day ago</span> */}
          </div>
          {/* Views Info */}
          <div className="mt-1 text-sm text-gray-500">
            {/* <span>5.2K views</span> */}
          </div>
        </div>
      </div>
>>>>>>> be19eaa (dark mode light mode change final)

      {/* Modal for Viewing Media */}
      {isModalOpen && (
        <div className="modal" onClick={closeModal} style={modalStyles.overlay}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            style={modalStyles.content}
          >
            <span
              className="close"
              onClick={closeModal}
              style={modalStyles.close}
            >
              ×
            </span>
<<<<<<< HEAD
            {mediaType === "photo" ? (
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
=======
            <div style={modalStyles.videoWrapper}>
              <iframe
                src={mediaSrc}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="YouTube Video"
                style={modalStyles.iframe}
              />
            </div>
>>>>>>> be19eaa (dark mode light mode change final)
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
  const { data, error, isError, isLoading } = useGetMediaDataQuery();
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);
  const language = useSelector((state: RootState) => state.language.language);
  const [scrollProgress, setScrollProgress] = useState(0);
  const updateScrollProgress = () => {
    // Get total scrollable height
    const scrollHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
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
    window.addEventListener("scroll", updateScrollProgress);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
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
      <div className="relative mt-[120px] max-w-md:mt-[50px] font-sans before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
        <img
          src="assets/img/illusion.png"
          alt="Banner Image"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="min-h-[350px] relative z-40 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
          <h2 className="sm:text-4xl text-2xl font-bold mb-6 text-gray-200">
            {language === "English" ? "Gallery" : "ગેલેરી"}
          </h2>
        </div>
      </div>
      <main className="fix">
        {/* <section className="ourportfolio section-pt-110 section-pb-110"> */}
        <section
          className={`${
            darkMode ? "bg-black section-pt-110 section-pb-110" : "section-pt-110 section-pb-110"
          }`}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12 col-md-12">
                <div className="section__title port_double">
                  <h2 className={`title ${darkMode && "text-white"}`}>
                    {language === "English" ? "Our Gallery" : "અમારી ગેલેરી"}
                  </h2>
                </div>
              </div>
            </div>
            {/* <div className="row justify-content-center gutter-24 py-6 ">
                            {
                                data?.map((element, index) => (
                                    <>
                                        <div className="max-w-md rounded overflow-hidden shadow-lg">
                                            <img
                                                className="w-full py-2"
                                                src={element.img}
                                                alt="Sunset in the mountains"
                                            />
                                            <div className="px-6 py-4">
                                                <p className="text-gray-700 text-base">
                                                    {language === 'English' ? `${element.title_eng}` : `${element.title_guj}`}
                                                </p>
                                            </div>
                                        </div>
                                    </>
                                ))
                            }
                        </div> */}

            <div className="flex justify-between flex-wrap">
              {data?.map((element, index) => (
                <>
                  <div class="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
                    <div class="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                      <img src={element.img} alt="card-image" />
                    </div>
                    <div class="p-4">
                      <p class="text-slate-600 leading-normal font-light">
                        {element.title_eng}
                      </p>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
          <ResponsiveCard />
          {/* <VideoCard videoUrl='https://www.youtube.com/watch?v=T84-zpPbkhM' /> */}
          <VideoCard />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default MediaPage;
