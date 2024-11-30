import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage"
import MediaPage from "./pages/MediaPage/MediaPage"
import Faqs from "./pages/FAQS/Faqs"
import ContactUs from "./ContactUs"
import JoinUs from "./pages/JoinUs/JoinUs"
import AcademicPartner from "./components/AcademicPartner"
import MeetOurFellows from "./pages/MeetOurFellows/MeetOurFellows"
import About from "./pages/About"
import ScrollToTopButton from "./components/ScrollToTopButton"
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><ScrollToTopButton><HomePage /></ScrollToTopButton></>} />
          <Route path="/academic-partner" element={<><ScrollToTopButton><AcademicPartner /></ScrollToTopButton></>} />
          <Route path="/media" element={<><ScrollToTopButton><MediaPage /></ScrollToTopButton></>} />
          <Route path="/faqs" element={<><ScrollToTopButton><Faqs /></ScrollToTopButton></>} />
          <Route path="/contactUs" element={<><ScrollToTopButton><ContactUs /></ScrollToTopButton></>} />
          <Route path="/joinus" element={<><ScrollToTopButton><JoinUs /></ScrollToTopButton></>} />
          <Route path="/meet-our-fellows" element={<><ScrollToTopButton><MeetOurFellows /></ScrollToTopButton></>} />
          <Route path="/about" element={<><ScrollToTopButton><About /></ScrollToTopButton></>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
