import Universe from "./Universe";
import About from "./components/about/About";
import ContactUs from "./components/contact/ContactUs";
import Event from "./components/events/Event";
import Home from "./components/homeComponents/Home";
// import Navbar from "./components/navbarComponents/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Schedule from "./components/schedule/Schedule";
import Partners from "./components/partners/Partners";
import Gallery from "./components/gallery/Gallery";
import Footer from "./components/footer/Footer";
import Navbar from "./components/Navbar/Navbar";
// import Login from "./components/registeration/Login";
import MainEvents from "./components/MainEvents/MainEvents";

function App() {
  return (
    <BrowserRouter>
      <div className="relative w-screen h-screen">
        <Navbar
          className="container relative text-white w-screen h-screen"
          style={{ fontFamily: "montserrat" }}
        />
        <Universe />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/events" element={<Event />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/schedule" element={<Schedule />} />
          {/* <Route path="/login" element={<Login />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
