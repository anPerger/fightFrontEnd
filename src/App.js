import logo from './logo.svg';
import './App.css';
import Fighters from './components/Fighters';
import Navbar from './components/Navbar';
import Home from './components/Home';
import {BrowserRouter as Router, Routes, Route, link} from 'react-router-dom';

export default function App() {
  
  return (
    <Router>
    
    <div className="App">
      
         <div>
          <Navbar />
          
   
          <Routes>
            
          <Route path="/" element={<Home />} />
          <Route path="/fighters" element={<Fighters />} />
          
          </Routes>
      </div>
    
    
    </div>
    </Router>
  )
}

