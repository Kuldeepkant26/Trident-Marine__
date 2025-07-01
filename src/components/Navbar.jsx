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
  'Entry Program',
  'Moderate Program',
  'Signature Program',
  'Sportfish Program',
  'All Programs',
];

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [dropdown, setDropdown] = useState('');
  const [sidebarDropdown, setSidebarDropdown] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          
          // Update scrolled state for styling
          setIsScrolled(currentScrollY > 10);
          
          // Auto-hide logic with more precise control
          if (currentScrollY < 10) {
            // At top of page - always show navbar
            setIsNavbarVisible(true);
          } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
            // Scrolling down and past threshold - hide navbar
            setIsNavbarVisible(false);
            // Close any open dropdowns when hiding
            setDropdown('');
          } else if (currentScrollY < lastScrollY) {
            // Scrolling up - show navbar
            setIsNavbarVisible(true);
          }
          
          setLastScrollY(currentScrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    const handleMouseMove = (e) => {
      // Show navbar when mouse is near the top of the screen
      if (e.clientY <= 50 && window.scrollY > 100) {
        setIsNavbarVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    
    // Cleanup timeout on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      if (dropdownTimeout) {
        clearTimeout(dropdownTimeout);
      }
    };
  }, [lastScrollY, dropdownTimeout]);

  // Desktop dropdown handlers with improved UX
  const handleDropdown = (menu) => {
    // Don't open dropdown if navbar is hidden
    if (!isNavbarVisible) return;
    
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

  // Handle service navigation
  const handleServiceNavigation = (service) => {
    if (service === 'All Services') {
      navigate('/services');
    } else {
      // Map service names to their correct IDs
      const serviceMapping = {
        'Interior': 'interior',
        'Interior Design & Maintenance': 'interior',
        'Exterior': 'exterior',
        'Exterior Maintenance': 'exterior',
        'Maintenance': 'maintenance',
        'General Maintenance': 'maintenance',
        'Project Management': 'management',
        'Captain & Crew': 'crew',
        'Captain & Crew Services': 'crew',
        'Concierge': 'concierge',
        'Concierge Services': 'concierge'
      };
      
      const serviceId = serviceMapping[service] || service.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-');
      navigate(`/services/${serviceId}`);
    }
  };  // Handle program navigation
  const handleProgramNavigation = (program) => {
    if (program === 'All Programs') {
      navigate('/programs');
    } else {
      // Map program names to their correct IDs
      const programMapping = {
        'Entry Program': 'entry',
        'Moderate Program': 'moderate',
        'Signature Program': 'signature',
        'Sportfish Program': 'sportfish'
      };
      
      const programId = programMapping[program] || program.toLowerCase().replace(/ program/g, '').replace(/ /g, '-');
      navigate(`/programs/${programId}`);
    }
  };

  // Sidebar submenu toggle
  const handleSidebarDropdown = (menu) => setSidebarDropdown(menu === sidebarDropdown ? '' : menu);

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isNavbarVisible ? 'navbar-visible' : 'navbar-hidden'}`}>
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
                  <div 
                    className="dropdown-item" 
                    key={idx}
                    onClick={() => {
                      handleServiceNavigation(item);
                      setDropdown('');
                    }}
                  >
                    {item}
                  </div>
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
                  <div 
                    className="dropdown-item" 
                    key={idx}
                    onClick={() => {
                      handleProgramNavigation(item);
                      setDropdown('');
                    }}
                  >
                    {item}
                  </div>
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
            <li className="nav-item nav-anim" onClick={() => navigate('/contact')}>
              <span>Contact</span>
            </li>
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
                  onClick={() => {
                    handleServiceNavigation(item);
                    setIsSidebarOpen(false);
                  }}
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
                  onClick={() => {
                    handleProgramNavigation(item);
                    setIsSidebarOpen(false);
                  }}
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
            <div className="sidebar-link sidebar-anim" onClick={() => {
              navigate('/contact')
              setIsSidebarOpen(false)
            }}>
              Contact
            </div>
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