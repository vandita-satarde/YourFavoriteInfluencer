import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Navbar from './components/navbar';
import HeroSection from './components/HeroSection';
import Content from './components/content';
import CollaborationEvents from './components/CollaborationEvents';
import Footer from './components/footer';

import ShopMyLife from './components/shopmylife';
import WorkWithMe from './components/WorkWithMe';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <HeroSection />
              <Content />
              <CollaborationEvents/>
              <Footer />
            </>
          }
        />
        <Route path="/shop-my-life" element={<ShopMyLife />} />
        <Route path="/work-with-me" element={<WorkWithMe />} />
        <Route 
          path="/collab" 
          element={
            <>
            <Navbar />
            <CollaborationEvents />
            <Footer />
            </>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
