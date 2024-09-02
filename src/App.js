import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import all components
import Header from './Components/Header';
import MainSection from './Components/MainSection';
import AboutUs from './Components/AboutUs';
import TrainerSection from './Components/TrainerSection';
import TeamPage from './Components/TeamPage';
import PricingSection from './Components/PricingSection';
import Register from './Components/RegistrationPage';
import Login from './Components/Login';
import Footer from './Components/Footer';

const App = () => {
  return (
    <Router>
       <Header />
      <Routes>
      
        <Route path="/" element={<MainSection />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/training" element={<TrainerSection />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/pricing" element={<PricingSection />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
