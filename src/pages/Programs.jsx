import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { 
  ArrowRight, 
  Star, 
  Shield, 
  Clock, 
  Award,
  Compass,
  Waves,
  Sunset,
  Users,
  Trophy,
  Map,
  CheckCircle,
  Phone,
  Mail,
  Calendar,
  TrendingUp,
  Globe,
  Heart,
  Sailboat,
  Anchor,
  Ship,
  Crown
} from 'lucide-react'
import '../css/Programs.css'

function Programs() {
  const navigate = useNavigate()
  const [visibleElements, setVisibleElements] = useState(new Set())
  const [hoveredCard, setHoveredCard] = useState(null)
  
  // Function to convert gradient string to CSS gradient
  const getGradientStyle = (gradientString) => {
    const gradientMap = {
      'from-emerald-500 to-teal-500': 'linear-gradient(135deg, #10b981 0%, #14b8a6 100%)',
      'from-blue-600 to-purple-600': 'linear-gradient(135deg, #2563eb 0%, #9333ea 100%)',
      'from-orange-500 to-pink-500': 'linear-gradient(135deg, #f97316 0%, #ec4899 100%)',
      'from-cyan-500 to-blue-500': 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
      'from-violet-500 to-purple-500': 'linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%)',
      'from-amber-500 to-orange-500': 'linear-gradient(135deg, #f59e0b 0%, #f97316 100%)',
      'from-rose-500 to-pink-500': 'linear-gradient(135deg, #f43f5e 0%, #ec4899 100%)',
      'from-indigo-500 to-blue-500': 'linear-gradient(135deg, #6366f1 0%, #3b82f6 100%)'
    };
    return gradientMap[gradientString] || 'linear-gradient(135deg, #0066ff 0%, #00d4ff 100%)';
  }
  
  const programs = [
    {
      id: 'entry',
      title: 'Entry Program',
      subtitle: 'Perfect Start to Yacht Excellence',
      description: 'Begin your yacht journey with our comprehensive entry program. Designed for those new to yachting, featuring essential services and professional guidance.',
      features: ['Basic Maintenance', 'Safety Training', 'Essential Systems', 'Professional Support'],
      duration: '2-4 weeks',
      capacity: 'Standard vessels',
      icon: Anchor,
      gradient: 'from-emerald-500 to-teal-500',
      category: 'entry',
      rating: 4.7,
      bookings: 145,
      price: 'From $8,500',
      image: 'https://images.squarespace-cdn.com/content/v1/57585c32d51cd4a103c08e65/7ac89510-a166-45ac-ad1c-f4141bd83d4a/teak-yacht-interior.jpeg'
    },
    {
      id: 'moderate',
      title: 'Moderate Program',
      subtitle: 'Enhanced Maritime Excellence',
      description: 'Elevate your yacht experience with our moderate program offering enhanced services, premium materials, and comprehensive maintenance solutions.',
      features: ['Advanced Maintenance', 'Premium Materials', 'Interior Upgrades', 'Crew Training'],
      duration: '3-6 weeks',
      capacity: 'Mid-size vessels',
      icon: Ship,
      gradient: 'from-blue-600 to-purple-600',
      category: 'moderate',
      rating: 4.8,
      bookings: 198,
      price: 'From $18,000',
      image: 'https://features.boats.com/boat-content/files/2016/03/Restoring_Gelcoat.jpg'
    },
    {
      id: 'signature',
      title: 'Signature Program',
      subtitle: 'Luxury Redefined',
      description: 'Experience the pinnacle of yacht excellence with our signature program featuring bespoke services, luxury finishes, and unparalleled attention to detail.',
      features: ['Custom Design', 'Luxury Materials', 'Master Craftsmen', 'Concierge Service'],
      duration: '6-12 weeks',
      capacity: 'Luxury vessels',
      icon: Crown,
      gradient: 'from-orange-500 to-pink-500',
      category: 'signature',
      rating: 5.0,
      bookings: 87,
      price: 'From $45,000',
      image: 'https://www.boatlagoonyachting.com/wp-content/uploads/2018/06/boat-lagoon-yachting-yacht-management-4.jpg'
    },
    {
      id: 'sportfish',
      title: 'Sportfish Program',
      subtitle: 'Ultimate Fishing Experience',
      description: 'Specialized program for sportfishing enthusiasts featuring custom installations, professional equipment, and expert guidance for the ultimate fishing experience.',
      features: ['Custom Fishing Setup', 'Professional Equipment', 'Expert Guides', 'Tournament Prep'],
      duration: '4-8 weeks',
      capacity: 'Sportfish vessels',
      icon: Waves,
      gradient: 'from-cyan-500 to-blue-500',
      category: 'sportfish',
      rating: 4.9,
      bookings: 156,
      price: 'From $28,000',
      image: 'https://yachtiecareers.com/wp-content/uploads/2022/12/Yacht-Crew-Training-e1677387044273.jpeg'
    },
    {
      id: 'all-programs',
      title: 'All Programs Package',
      subtitle: 'Complete Maritime Solutions',
      description: 'Comprehensive package combining all our programs for the ultimate yacht transformation. Perfect for those seeking complete vessel renovation and services.',
      features: ['Complete Renovation', 'All Services Included', 'Priority Support', 'Lifetime Warranty'],
      duration: '12-24 weeks',
      capacity: 'All vessel types',
      icon: Trophy,
      gradient: 'from-violet-500 to-purple-500',
      category: 'complete',
      rating: 5.0,
      bookings: 42,
      price: 'From $95,000',
      image: 'https://www.portdemallorca.com/images/serviciosconcierge.jpg'
    }
  ]
  
  useEffect(() => {
    // Intersection Observer for animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements(prev => new Set([...prev, entry.target.dataset.animate]))
          }
        })
      },
      { threshold: 0.1, rootMargin: '50px' }
    )
    
    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el)
    })
    
    return () => observer.disconnect()
  }, [])
  
  return (
    <div className="programs-page">
      {/* Animated Background */}
      <div className="programs-bg">
        <div className="floating-elements">
          {[...Array(20)].map((_, i) => (
            <div key={i} className={`floating-element element-${i + 1}`}>
              {i % 4 === 0 ? <Compass /> : i % 4 === 1 ? <Sailboat /> : i % 4 === 2 ? <Waves /> : <Star />}
            </div>
          ))}
        </div>
        <div className="ocean-waves">
          <div className="wave wave-1"></div>
          <div className="wave wave-2"></div>
          <div className="wave wave-3"></div>
          <div className="wave wave-4"></div>
        </div>
      </div>
      
      {/* Hero Section */}
      <section className="programs-hero" data-animate="hero">
        <div className="programs-container">
          <div className={`programs-hero-content ${visibleElements.has('hero') ? 'animate-in' : ''}`}>
            <h1 className="programs-hero-title">
              Extraordinary
              <span className="gradient-text"> Maritime Programs</span>
              <div className="programs-title-decoration">
                <div className="decoration-line"></div>
                <Compass className="decoration-icon" />
                <div className="decoration-line"></div>
              </div>
            </h1>
            <p className="programs-hero-subtitle">
              Discover our curated collection of premium maritime programs designed to create 
              unforgettable experiences on the water. From luxury escapes to adventure expeditions.
            </p>
            <div className="programs-hero-stats">
              <div className="programs-stat">
                <div className="programs-stat-number">628+</div>
                <div className="programs-stat-label">Completed Projects</div>
              </div>
              <div className="programs-stat">
                <div className="programs-stat-number">5</div>
                <div className="programs-stat-label">Program Categories</div>
              </div>
              <div className="programs-stat">
                <div className="programs-stat-number">98%</div>
                <div className="programs-stat-label">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Programs Grid */}
      <section className="programs-grid" data-animate="grid">
        <div className="programs-container">
          <div className={`programs-section-header ${visibleElements.has('grid') ? 'animate-in' : ''}`}>
            <h2 className="programs-section-title">Our Premium Programs</h2>
            <p className="programs-section-subtitle">
              Choose from our exclusive collection of maritime experiences
            </p>
          </div>
          
          <div className="programs-grid-container">
            {programs.map((program, index) => {
              const IconComponent = program.icon
              return (
                <div 
                  key={program.id}
                  className={`program-card ${visibleElements.has('grid') ? 'animate-in' : ''}`}
                  style={{ '--delay': `${index * 0.1}s` }}
                  onMouseEnter={() => setHoveredCard(program.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={() => navigate(`/programs/${program.id}`)}
                >
                  <div className="programs-card-image">
                    <img src={program.image} alt={program.title} />
                    <div className="image-overlay">
                      <div className="overlay-content">
                        <div className="program-rating">
                          <Star fill="currentColor" size={16} />
                          <span>{program.rating}</span>
                        </div>
                        <div className="program-bookings">{program.bookings} bookings</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="programs-card-content">
                    <div className="programs-card-header">
                      <div 
                        className="programs-card-icon"
                        style={{ background: getGradientStyle(program.gradient) }}
                      >
                        <IconComponent size={24} />
                      </div>
                      <div className="programs-card-title-section">
                        <h3 className="programs-card-title">{program.title}</h3>
                        <p className="programs-card-subtitle">{program.subtitle}</p>
                      </div>
                    </div>
                    
                    <p className="programs-card-description">{program.description}</p>
                    
                    <div className="programs-card-features">
                      {program.features.slice(0, 4).map((feature, i) => (
                        <div key={i} className="programs-feature">
                          <CheckCircle size={16} />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="programs-card-meta">
                      <div className="programs-meta-item">
                        <Clock size={16} />
                        <span>{program.duration}</span>
                      </div>
                      <div className="programs-meta-item">
                        <Users size={16} />
                        <span>{program.capacity}</span>
                      </div>
                    </div>
                    
                    <div className="programs-card-footer">
                      <div className="programs-price">
                        <span className="programs-price-label">Starting from</span>
                        <span className="programs-price-value">{program.price}</span>
                      </div>
                      <button 
                        className="programs-card-button"
                        style={{ background: getGradientStyle(program.gradient) }}
                      >
                        Learn More
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="programs-cta" data-animate="cta">
        <div className="programs-container">
          <div className={`programs-cta-content ${visibleElements.has('cta') ? 'animate-in' : ''}`}>
            <div className="programs-cta-text">
              <h2 className="programs-cta-title">Ready to Start Your Maritime Adventure?</h2>
              <p className="programs-cta-subtitle">
                Contact our team to customize your perfect program or get more information about our offerings.
              </p>
            </div>
            <div className="programs-cta-actions">
              <button 
                className="programs-cta-button primary"
                onClick={() => navigate('/contact')}
              >
                <Phone size={20} />
                Contact Us
              </button>
              <button 
                className="programs-cta-button secondary"
                onClick={() => navigate('/contact')}
              >
                <Mail size={20} />
                Get Quote
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="programs-features" data-animate="features">
        <div className="programs-container">
          <div className={`programs-features-content ${visibleElements.has('features') ? 'animate-in' : ''}`}>
            <h2 className="programs-features-title">Why Choose Our Programs?</h2>
            <div className="programs-features-grid">
              <div className="programs-feature-card">
                <div className="programs-feature-icon">
                  <Shield />
                </div>
                <h3>Safety First</h3>
                <p>All programs include comprehensive safety measures and certified equipment</p>
              </div>
              <div className="programs-feature-card">
                <div className="programs-feature-icon">
                  <Award />
                </div>
                <h3>Expert Guides</h3>
                <p>Professional maritime experts ensure exceptional experiences</p>
              </div>
              <div className="programs-feature-card">
                <div className="programs-feature-icon">
                  <Globe />
                </div>
                <h3>Unique Destinations</h3>
                <p>Access to exclusive locations and hidden maritime gems</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Programs
