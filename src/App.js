import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home'
import About from './components/about/About'
import Project from './components/projects/Project'
import Contact from './components/contact/Contact'



function App() {
  return (
    <div>
      <Router>
          <Navbar />
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
          </Routes> 
      </Router>
        
        
        
      
    </div>
  );
}

export default App;
