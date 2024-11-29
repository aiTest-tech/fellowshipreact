import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage"
import MediaPage from "./pages/MediaPage/MediaPage"
import Faqs from "./pages/FAQS/Faqs"
import ContactUs from "./ContactUs"
import JoinUs from "./pages/JoinUs/JoinUs"
import AcademicPartner from "./components/AcademicPartner"
import MeetOurFellows from "./pages/MeetOurFellows/MeetOurFellows"
import About from "./pages/About"
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/media" element={<MediaPage />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/joinus" element={<JoinUs />} />
          <Route path="/academic-partner" element={<AcademicPartner />} />
          <Route path="/meet-our-fellows" element={<MeetOurFellows />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
