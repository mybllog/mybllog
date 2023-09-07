import React from 'react';
import './index.css';
import Home from './pages/Home';
import Navbar from '../src/components/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Services } from './pages/Services';
import { Businessreg } from './pages/Businessreg';
import { Sign } from './pages/Sign';
import Signin from './components/Signin';
import User from './components/User';
import Confirm from './pages/Confirm';
import Footers from './components/Footer';
function App() {
  return (
    <Router>
      {/* Your application components and routes */}
      <Navbar />
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/business" element={<Businessreg />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/newuser" element={<User />} />
        <Route path="/siginup" element={<Signin/>} />
        <Route path="/confirm" element={<Confirm/>} />
      </Routes>
      <Footers/>
    </Router>
  );
}

export default App;
