import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importing Navbar and Pages
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Testimonials from './Pages/Testimonials';
import BlogPage from './Pages/BlogPage';

import ScrollToTop from './Components/Helpers/ScrollToTop';
import Blog from './Pages/Blog';
import PageNotFound from './Components/PageNotFound/PageNotFound';

function App() {
  return (
    <div className="App">

      <Router>
        <ScrollToTop/>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/testimonials' element={<Testimonials/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/blog/:id' element={<BlogPage/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
