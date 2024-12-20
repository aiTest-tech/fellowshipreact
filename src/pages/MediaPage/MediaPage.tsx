// @ts-nocheck
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useEffect, useState } from "react";
import "../../index.css";
import { useDispatch, useSelector } from "react-redux";
import { useGetMediaDataQuery } from "../../api/mediaApi";

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

const VideoCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mediaSrc, setMediaSrc] = useState(""); // URL of the clicked media

  // Function to open the modal
  const openModal = (src) => {
    setMediaSrc(src);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setMediaSrc("");
  };

  return (
    <>
      {/* YouTube Card */}
      <div className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 my-6">
        <div className="relative group">
          <img
            src="https://i.ytimg.com/vi/T84-zpPbkhM/hqdefault.jpg"
            alt="Video Thumbnail"
            className="w-full object-cover group-hover:opacity-75 transition"
          />
          <div
            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition"
            onClick={() =>
              openModal("https://www.youtube.com/embed/T84-zpPbkhM?t=1s")
            }
          >
            <button className="bg-red-600 text-white p-3 rounded-full shadow-md hover:bg-red-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.752 11.168l-3.197-1.684A1 1 0 0010 10.382v3.236a1 1 0 001.555.832l3.197-1.684a1 1 0 000-1.768z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19.428 15.341A8 8 0 115.513 8.659a8.003 8.003 0 0113.915 6.682z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Inspiring Video Title
          </h3>
          <p className="text-gray-600 text-sm">
            Click to watch the inspiring video and learn more about this topic.
          </p>
        </div>
      </div>

      {/* Modal for Viewing Media */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg shadow-lg overflow-hidden max-w-3xl w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              onClick={closeModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={mediaSrc}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="video"
                className="w-full h-full"
              ></iframe>
            </div>
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
      <div className="relative mt-[140px] max-w-md:mt-[50px] font-sans before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
        <img
          src="assets/img/cm-fellowship.jpg"
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
        <section className="section-pt-110 section-pb-110">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12 col-md-12">
                <div className="section__title port_double">
                  <h2 className="title">
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
          {/* <VideoCard videoUrl='https://www.youtube.com/watch?v=T84-zpPbkhM' /> */}
          <VideoCard />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default MediaPage;
