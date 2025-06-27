import React, { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import LoadingScreen from './components/LoadingScreen'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import About from './pages/About'
import Gallery from './pages/Gallery'

function App() {
  const location = useLocation();
  const hideNavbarRoutes = ['/signin', '/signup'];
  const shouldShowNavbar = !hideNavbarRoutes.includes(location.pathname);
  
  // Loading screen state - show on every page load/refresh
  const [showLoadingScreen, setShowLoadingScreen] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Always show loading screen on page load/refresh
    setShowLoadingScreen(true);
    setIsLoading(false);
  }, []);

  const handleLoadingComplete = () => {
    setShowLoadingScreen(false);
  };

  // Show nothing while determining whether to show loading screen
  if (isLoading) {
    return null;
  }

  return (
    <div>
      {/* Loading Screen - only on first visit */}
      {showLoadingScreen && (
        <LoadingScreen onComplete={handleLoadingComplete} />
      )}
      
      {/* Main App Content - always render but conditionally hide */}
      <div style={{ display: showLoadingScreen ? 'none' : 'block' }}>
        <ScrollToTop />
        {shouldShowNavbar && <Navbar />}
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/signin' element={<Signin/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/gallery' element={<Gallery/>}></Route>
        </Routes>
        {shouldShowNavbar && <Footer />}
      </div>
    </div>
  )
}

export default App
