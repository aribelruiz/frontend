import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importing Navbar and Pages
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';

function App() {
  return (
    <div className="App">

      <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
        {/* <Footer/> */}
      </Router>
    </div>
  );
}

export default App;
