import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Homepage from './pages/Homepage.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Projectsboard from './pages/Projectsboard.jsx';
import Blog from './pages/Blog.jsx';
import Contact from './pages/Contact.jsx';
import ScrollToHash from "./components/ScrollToHash";
import ServiceRequest from "./pages/ServiceRequest";
import { ServiceProvider } from "./context/ServiceContext";

function App() {


  return (
    <>
      <Navbar />
      <ScrollToHash />
      <ServiceProvider>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/projectsboard' element={<Projectsboard />} />
        <Route path='/blog' element={<Blog />} />
        <Route path="/service-request" element={<ServiceRequest />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      </ServiceProvider>
      <Footer />
    </>
  )
}

export default App
