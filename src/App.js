import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar';


function App() {
  return (
    <div>
      <Router>
          <Navbar />
            <Routes>
            <Route path="/" element={} />
            <Route path="/about" element={} />
            <Route path="/projects" element={} />
            <Route path="/contact" element={} />
          </Routes> 
      </Router>
        
        
        
      
    </div>
  );
}

export default App;
