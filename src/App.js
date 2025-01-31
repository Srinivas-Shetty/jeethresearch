import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Service from "./pages/Service";
import Blog from "./pages/Blog";
import ContactUs from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="">
        <Header />

        <div className="mt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/services" element={<Service />} />
            <Route path="/blogs" element={<Blog />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
