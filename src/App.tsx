import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage"
import MediaPage from "./pages/MediaPage/MediaPage"
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/media" element={<MediaPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
