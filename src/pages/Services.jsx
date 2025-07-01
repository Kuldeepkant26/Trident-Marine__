import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { 
  ArrowRight, 
  Star, 
  Shield, 
  Clock, 
  Award,
  Anchor,
  Ship,
  Wrench,
  Users,
  Crown,
  Briefcase,
  CheckCircle,
  Phone,
  Mail,
  Calendar,
  TrendingUp,
  Globe,
  Heart
} from 'lucide-react'
import '../css/Services.css'

function Services() {
  const navigate = useNavigate()
  const [visibleElements, setVisibleElements] = useState(new Set())
  const [hoveredCard, setHoveredCard] = useState(null)
  
  // Function to convert gradient string to CSS gradient
  const getGradientStyle = (gradientString) => {
    const gradientMap = {
      'from-purple-500 to-pink-500': 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
      'from-blue-500 to-cyan-500': 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)',
      'from-green-500 to-teal-500': 'linear-gradient(135deg, #22c55e 0%, #14b8a6 100%)',
      'from-orange-500 to-red-500': 'linear-gradient(135deg, #f97316 0%, #ef4444 100%)',
      'from-indigo-500 to-purple-500': 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
      'from-yellow-500 to-orange-500': 'linear-gradient(135deg, #eab308 0%, #f97316 100%)'
    };
    return gradientMap[gradientString] || 'linear-gradient(135deg, #0066ff 0%, #00d4ff 100%)';
  }
  
  const services = [
    {
      id: 'interior',
      title: 'Interior Design & Maintenance',
      subtitle: 'Luxury Living Spaces',
      description: 'Transform your yacht\'s interior with our expert design and maintenance services. From custom furniture to complete renovations.',
      features: ['Custom Design', 'Premium Materials', 'Expert Installation', 'Ongoing Maintenance'],
      price: 'From $15,000',
      duration: '2-8 weeks',
      icon: Crown,
      gradient: 'from-purple-500 to-pink-500',
      category: 'design',
      rating: 4.9,
      projects: 150,
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop&q=80'
    },
    {
      id: 'exterior',
      title: 'Exterior Maintenance',
      subtitle: 'Pristine Vessel Care',
      description: 'Keep your yacht looking immaculate with our comprehensive exterior maintenance services including hull care, deck maintenance, and protective coatings.',
      features: ['Hull Cleaning', 'Deck Restoration', 'Paint & Coating', 'Weather Protection'],
      price: 'From $8,000',
      duration: '1-4 weeks',
      icon: Ship,
      gradient: 'from-blue-500 to-cyan-500',
      category: 'maintenance',
      rating: 4.8,
      projects: 320,
      image: 'https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=600&h=400&fit=crop&q=80'
    },
    {
      id: 'maintenance',
      title: 'General Maintenance',
      subtitle: 'Complete Vessel Care',
      description: 'Comprehensive maintenance services to keep your yacht in perfect condition. From engine servicing to electrical systems.',
      features: ['Engine Service', 'Electrical Systems', 'Plumbing', 'Safety Equipment'],
      price: 'From $5,000',
      duration: '1-3 weeks',
      icon: Wrench,
      gradient: 'from-green-500 to-teal-500',
      category: 'maintenance',
      rating: 4.9,
      projects: 450,
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop&q=80'
    },
    {
      id: 'management',
      title: 'Project Management',
      subtitle: 'Seamless Execution',
      description: 'Professional project management for yacht renovations, maintenance schedules, and custom installations with dedicated oversight.',
      features: ['Timeline Management', 'Quality Control', 'Vendor Coordination', 'Progress Reporting'],
      price: 'From $3,000',
      duration: 'Project-based',
      icon: Briefcase,
      gradient: 'from-orange-500 to-red-500',
      category: 'management',
      rating: 5.0,
      projects: 200,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&q=80'
    },
    {
      id: 'crew',
      title: 'Captain & Crew Services',
      subtitle: 'Professional Maritime Staff',
      description: 'Experienced captains and crew members for your yacht operations. From day trips to extended voyages with certified professionals.',
      features: ['Licensed Captains', 'Trained Crew', 'Safety Certified', 'Flexible Scheduling'],
      price: 'From $1,200/day',
      duration: 'As needed',
      icon: Users,
      gradient: 'from-indigo-500 to-purple-500',
      category: 'crew',
      rating: 4.9,
      projects: 800,
      image: 'https://images.unsplash.com/photo-1520637836862-4d197d17c962?w=600&h=400&fit=crop&q=80'
    },
    {
      id: 'concierge',
      title: 'Concierge Services',
      subtitle: 'Luxury Lifestyle Support',
      description: 'Premium concierge services for yacht owners including provisioning, event planning, and personalized assistance.',
      features: ['Provisioning', 'Event Planning', 'Travel Coordination', '24/7 Support'],
      price: 'From $500/day',
      duration: 'Ongoing',
      icon: Anchor,
      gradient: 'from-yellow-500 to-orange-500',
      category: 'luxury',
      rating: 4.8,
      projects: 600,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop&q=80'
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
    <div className="services-page">
      {/* Animated Background */}
      <div className="services-bg">
        <div className="floating-shapes">
          {[...Array(15)].map((_, i) => (
            <div key={i} className={`floating-shape shape-${i + 1}`}>
              {i % 3 === 0 ? <Anchor /> : i % 3 === 1 ? <Ship /> : <Star />}
            </div>
          ))}
        </div>
        <div className="gradient-waves">
          <div className="wave wave-1"></div>
          <div className="wave wave-2"></div>
          <div className="wave wave-3"></div>
        </div>
      </div>
      
      {/* Hero Section */}
      <section className="services-hero" data-animate="hero">
        <div className="container">
          <div className={`hero-content ${visibleElements.has('hero') ? 'animate-in' : ''}`}>
            <h1 className="hero-title">
              Exceptional
              <span className="gradient-text"> Marine Services</span>
              <div className="title-decoration">
                <div className="decoration-line"></div>
                <Ship className="decoration-icon" />
                <div className="decoration-line"></div>
              </div>
            </h1>
            <p className="hero-subtitle">
              From luxury interior design to complete vessel maintenance, our comprehensive suite of 
              premium services ensures your yacht remains in pristine condition and ready for any adventure.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-number">500+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat">
                <div className="stat-number">98%</div>
                <div className="stat-label">Client Satisfaction</div>
              </div>
              <div className="stat">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Grid */}
      <section className="services-grid-section" data-animate="grid">
        <div className="container">
          <div className={`services-grid ${visibleElements.has('grid') ? 'animate-in' : ''}`}>
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`service-card ${hoveredCard === service.id ? 'hovered' : ''}`}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="card-header">
                  <div 
                    className="service-icon"
                    style={{ background: getGradientStyle(service.gradient) }}
                  >
                    <service.icon size={28} />
                    <div className="icon-glow"></div>
                  </div>
                  <div className="service-meta">
                    <div className="service-rating">
                      <Star size={16} fill="currentColor" />
                      <span>{service.rating}</span>
                    </div>
                    <div className="service-projects">
                      {service.projects}+ projects
                    </div>
                  </div>
                </div>
                
                <div className="card-content">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-subtitle">{service.subtitle}</p>
                  <p className="service-description">{service.description}</p>
                  
                  <div className="service-features">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="feature-item">
                        <CheckCircle size={16} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="service-details">
                    <div className="detail-item">
                      <span className="detail-label">Starting from</span>
                      <span className="detail-value">{service.price}</span>
                    </div>
                    <div className="detail-item">
                      <Clock size={16} />
                      <span className="detail-value">{service.duration}</span>
                    </div>
                  </div>
                </div>
                
                <div className="card-footer">
                  <button
                    className="learn-more-btn"
                    onClick={() => navigate(`/services/${service.id}`)}
                  >
                    <span>Learn More</span>
                    <ArrowRight size={16} />
                  </button>
                  <button
                    className="contact-btn"
                    onClick={() => navigate('/contact')}
                  >
                    <Phone size={16} />
                    <span>Get Quote</span>
                  </button>
                </div>
                
                <div className="card-glow"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="why-choose-us" data-animate="why">
        <div className="container">
          <div className={`why-content ${visibleElements.has('why') ? 'animate-in' : ''}`}>
            <div className="section-header">
              <h2>Why Choose Trident Marine</h2>
              <p>Experience the difference of working with industry leaders</p>
            </div>
            
            <div className="benefits-grid">
              <div className="benefit-card">
                <div className="benefit-icon">
                  <Award />
                </div>
                <h3>Expert Craftsmanship</h3>
                <p>Our team consists of certified marine professionals with decades of experience in luxury yacht services.</p>
              </div>
              
              <div className="benefit-card">
                <div className="benefit-icon">
                  <Shield />
                </div>
                <h3>Quality Guarantee</h3>
                <p>We stand behind our work with comprehensive warranties and quality assurance on all services.</p>
              </div>
              
              <div className="benefit-card">
                <div className="benefit-icon">
                  <Clock />
                </div>
                <h3>Timely Delivery</h3>
                <p>Projects completed on schedule with transparent communication throughout the entire process.</p>
              </div>
              
              <div className="benefit-card">
                <div className="benefit-icon">
                  <Heart />
                </div>
                <h3>Personalized Service</h3>
                <p>Every yacht is unique, and we tailor our services to meet your specific needs and preferences.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="services-cta" data-animate="cta">
        <div className="container">
          <div className={`cta-content ${visibleElements.has('cta') ? 'animate-in' : ''}`}>
            <div className="cta-header">
              <h2>Ready to Transform Your Yacht?</h2>
              <p>Let our experts help you choose the perfect services for your vessel</p>
            </div>
            
            <div className="cta-actions">
              <button 
                className="cta-btn primary"
                onClick={() => navigate('/contact')}
              >
                <Mail size={20} />
                <span>Get Free Consultation</span>
                <ArrowRight size={16} />
              </button>
              <button 
                className="cta-btn secondary"
                onClick={() => window.open('tel:+15551234968', '_self')}
              >
                <Phone size={20} />
                <span>Call Now</span>
              </button>
            </div>
            
            <div className="cta-features">
              <div className="cta-feature">
                <CheckCircle size={16} />
                <span>Free Consultation</span>
              </div>
              <div className="cta-feature">
                <CheckCircle size={16} />
                <span>Custom Quotes</span>
              </div>
              <div className="cta-feature">
                <CheckCircle size={16} />
                <span>Expert Advice</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
