import React from 'react';
import Navbar from '../components/Navbar';
import FirstSection from '../components/FirstSection';
import SecondSection from '../components/SecondSection';
import ThirdSection from '../components/ThirdSection';
import FourthSection from '../components/FourthSection';
import FifthSection from '../components/FifthSection';
import Footer from '../components/Footer';


import "../../src/styles.css";
import "../../src/response.css";

const App = () => {
  return (
    <div>
        <Navbar />
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
        <Footer />
        
    </div>
  )
}

export default App;