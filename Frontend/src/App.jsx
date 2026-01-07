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

function App() {


  return (
    <>
      <Navbar />
      <ScrollToHash />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/projectsboard' element={<Projectsboard />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
   
    </>
  )
}

export default App
