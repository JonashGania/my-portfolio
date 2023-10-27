import Navbar from "../components/Navbar"
import Home from "../components/Home"
import About from "../components/About"
import Projects from "../components/Projects"
import Experience from "../components/Experience"
import { Routes, Route } from "react-router-dom"
import Footer from "../components/Footer"


function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
