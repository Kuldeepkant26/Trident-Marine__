import React, { useState, useEffect } from 'react';
import '../css/Navbar.css';
import { useNavigate, useLocation } from 'react-router-dom';

const servicesList = [
  'Interior',
  'Exterior',
  'Maintenance',
  'Project Management',
  'Captain & Crew',
  'Concierge',
  'All Services',
];

const programList = [
  'Yacht Program',
  'Charter Program',
  'Training Program',
  'Safety Program',
  'All Programs',
];

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [dropdown, setDropdown] = useState('');
  const [sidebarDropdown, setSidebarDropdown] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup timeout on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (dropdownTimeout) {
        clearTimeout(dropdownTimeout);
      }
    };
  }, [dropdownTimeout]);

  // Desktop dropdown handlers with improved UX
  const handleDropdown = (menu) => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setDropdown(menu);
  };
  
  const handleDropdownLeave = () => {
    const timeout = setTimeout(() => {
      setDropdown('');
    }, 150); // Small delay before hiding
    setDropdownTimeout(timeout);
  };

  // Sidebar submenu toggle
  const handleSidebarDropdown = (menu) => setSidebarDropdown(menu === sidebarDropdown ? '' : menu);

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          {/* Logo (always left) */}
          <div className="navbar-logo">
            <span className="logo-text">Trident Marine</span>
          </div>
          {/* Desktop Menu (right) */}
          <ul className="main-nav">
            {location.pathname !== '/' && (
              <li className="nav-item nav-anim" onClick={() => navigate('/')}>
                <span>Home</span>
              </li>
            )}
            <li
              className="nav-item nav-anim nav-dropdown"
              onMouseEnter={() => handleDropdown('services')}
              onMouseLeave={handleDropdownLeave}
            >
              <span>Services</span>
              <div 
                className={`dropdown-list ${dropdown === 'services' ? 'show' : ''}`}
                onMouseEnter={() => handleDropdown('services')}
                onMouseLeave={handleDropdownLeave}
              >
                {servicesList.map((item, idx) => (
                  <div className="dropdown-item" key={idx}>{item}</div>
                ))}
              </div>
            </li>
            <li
              className="nav-item nav-anim nav-dropdown"
              onMouseEnter={() => handleDropdown('program')}
              onMouseLeave={handleDropdownLeave}
            >
              <span>Program</span>
              <div 
                className={`dropdown-list ${dropdown === 'program' ? 'show' : ''}`}
                onMouseEnter={() => handleDropdown('program')}
                onMouseLeave={handleDropdownLeave}
              >
                {programList.map((item, idx) => (
                  <div className="dropdown-item" key={idx}>{item}</div>
                ))}
              </div>
            </li>
            {location.pathname !== '/gallery' && (
              <li className="nav-item nav-anim" onClick={() => navigate('/gallery')}>
                <span>Gallery</span>
              </li>
            )}
            {location.pathname !== '/about' && (
              <li className="nav-item nav-anim" onClick={() => navigate('/about')}>
                <span>About</span>
              </li>
            )}
            <li className="nav-item nav-anim"><span>Contact</span></li>
            <li className="nav-item nav-anim nav-login">
              <button className="login-btn desktop-login" onClick={()=>navigate('/signin')}>
                <i className="ri-user-line"></i>
                <span>Login</span>
              </button>
            </li>
          </ul>
          {/* Hamburger (always right, only visible on mobile) */}
          <button
            className="hamburger-menu"
            onClick={() => setIsSidebarOpen(true)}
            aria-label="Open menu"
          >
            <i className="ri-menu-line"></i>
          </button>
        </div>
      </nav>

      {/* Sidebar (right, mobile only) */}
      <div className={`sidebar right-sidebar ${isSidebarOpen ? 'sidebar-open' : ''}`}>
        <div className="sidebar-header">
          <h3>Menu</h3>
          <button
            className="close-btn"
            onClick={() => setIsSidebarOpen(false)}
            aria-label="Close menu"
          >
            <i className="ri-close-line"></i>
          </button>
        </div>
        <div className="sidebar-content">
          <nav className="sidebar-nav">
            <div className="sidebar-link sidebar-anim mobile-login-container">
              <button className="login-btn mobile-login" onClick={() => {
                navigate('/signin')
                setIsSidebarOpen(false)
              }}>
                <i className="ri-user-line"></i>
                <span>Login</span>
              </button>
            </div>
            {location.pathname !== '/' && (
              <div className="sidebar-link sidebar-anim" onClick={() => {
                navigate('/')
                setIsSidebarOpen(false)
              }}>
                Home
              </div>
            )}
            <div
              className="sidebar-link sidebar-anim"
              onClick={() => handleSidebarDropdown('services')}
            >
              Services
              <span className={`sidebar-arrow ${sidebarDropdown === 'services' ? 'open' : ''}`}></span>
            </div>
            <div
              className={`sidebar-dropdown-list sidebar-collapse ${sidebarDropdown === 'services' ? 'open' : ''}`}
            >
              {servicesList.map((item, idx) => (
                <div 
                  className="sidebar-dropdown-item" 
                  key={idx}
                  onClick={() => setIsSidebarOpen(false)}
                >
                  {item}
                </div>
              ))}
            </div>
            <div
              className="sidebar-link sidebar-anim"
              onClick={() => handleSidebarDropdown('program')}
            >
              Program
              <span className={`sidebar-arrow ${sidebarDropdown === 'program' ? 'open' : ''}`}></span>
            </div>
            <div
              className={`sidebar-dropdown-list sidebar-collapse ${sidebarDropdown === 'program' ? 'open' : ''}`}
            >
              {programList.map((item, idx) => (
                <div 
                  className="sidebar-dropdown-item" 
                  key={idx}
                  onClick={() => setIsSidebarOpen(false)}
                >
                  {item}
                </div>
              ))}
            </div>
            {location.pathname !== '/gallery' && (
              <div className="sidebar-link sidebar-anim" onClick={() => {
                navigate('/gallery')
                setIsSidebarOpen(false)
              }}>
                Gallery
              </div>
            )}
            {location.pathname !== '/about' && (
              <div className="sidebar-link sidebar-anim" onClick={() => {
                navigate('/about')
                setIsSidebarOpen(false)
              }}>
                About
              </div>
            )}
            <div className="sidebar-link sidebar-anim" onClick={() => setIsSidebarOpen(false)}>Contact</div>
          </nav>
        </div>
      </div>
      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className={`sidebar-overlay ${isSidebarOpen ? 'show' : ''}`}
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </>
  );
}

export default Navbar;