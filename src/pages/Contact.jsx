import React, { useState, useEffect, useRef } from 'react'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  MessageCircle, 
  Waves,
  Ship,
  ArrowRight,
  CheckCircle,
  User,
  Calendar,
  Globe,
  Star
} from 'lucide-react'
import '../css/Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    location: '',
    message: '',
    preferredContact: 'email',
    urgency: 'normal'
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [activeCard, setActiveCard] = useState(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [visibleElements, setVisibleElements] = useState(new Set())
  
  const heroRef = useRef(null)
  const formRef = useRef(null)
  const mapRef = useRef(null)
  
  const services = [
    // Services
    { id: 'interior', name: 'Interior Design', type: 'service' },
    { id: 'exterior', name: 'Exterior Maintenance', type: 'service' },
    { id: 'maintenance', name: 'General Maintenance', type: 'service' },
    { id: 'management', name: 'Project Management', type: 'service' },
    { id: 'crew', name: 'Captain & Crew', type: 'service' },
    { id: 'concierge', name: 'Concierge Services', type: 'service' },
    // Programs (from Navbar)
    { id: 'entry-program', name: 'Entry Program', type: 'program' },
    { id: 'moderate-program', name: 'Moderate Program', type: 'program' },
    { id: 'signature-program', name: 'Signature Program', type: 'program' },
    { id: 'sportfish-program', name: 'Sportfish Program', type: 'program' }
  ]
  
  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      subtitle: 'Speak directly with our experts',
      value: '+1 (555) 123-YACHT',
      action: 'tel:+15551234968',
      gradient: 'from-blue-500 to-cyan-500',
      animation: 'phone-ring'
    },
    {
      icon: Mail,
      title: 'Email Us',
      subtitle: '24/7 response guarantee',
      value: 'hello@tridentmarine.com',
      action: 'mailto:hello@tridentmarine.com',
      gradient: 'from-purple-500 to-pink-500',
      animation: 'email-pulse'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      subtitle: 'Instant support available',
      value: 'Start Conversation',
      action: '#',
      gradient: 'from-green-500 to-teal-500',
      animation: 'chat-bounce'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      subtitle: 'Marina Bay, Luxury District',
      value: '123 Harbor View Drive',
      action: '#',
      gradient: 'from-orange-500 to-red-500',
      animation: 'map-pin'
    }
  ]
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    
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
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      observer.disconnect()
    }
  }, [])
  
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '', email: '', phone: '', serviceType: '',
        location: '', message: '', preferredContact: 'email', urgency: 'normal'
      })
    }, 3000)
  }
  
  return (
    <div className="contact-page">
      {/* Animated Background */}
      <div className="contact-bg">
        <div className="floating-elements">
          {[...Array(20)].map((_, i) => (
            <div key={i} className={`floating-element element-${i + 1}`}>
              {i % 3 === 0 ? <Ship /> : i % 3 === 1 ? <Waves /> : <Star />}
            </div>
          ))}
        </div>
        <div className="gradient-orbs">
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
          <div className="orb orb-3"></div>
        </div>
      </div>
      
      {/* Hero Section */}
      <section className="contact-hero" ref={heroRef} data-animate="hero">
        <div className="container">
          <div className={`hero-content ${visibleElements.has('hero') ? 'animate-in' : ''}`}>
            <h1 className="hero-title">
              Let's Create Something
              <span className="gradient-text"> Extraordinary</span>
              <div className="title-decoration">
                <div className="decoration-line"></div>
                <Ship className="decoration-icon" />
                <div className="decoration-line"></div>
              </div>
            </h1>
            <p className="hero-subtitle">
              Ready to elevate your maritime experience? Our world-class team is standing by 
              to transform your vision into reality with precision, luxury, and unmatched expertise.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-number">500+</div>
                <div className="stat-label">Yachts Serviced</div>
              </div>
              <div className="stat">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Support Available</div>
              </div>
              <div className="stat">
                <div className="stat-number">15min</div>
                <div className="stat-label">Response Time</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mouse follower */}
        <div 
          className="mouse-follower"
          style={{
            left: mousePosition.x,
            top: mousePosition.y
          }}
        ></div>
      </section>
      
      {/* Contact Form Section (Second Section) */}
      <section className="contact-form-main">
        <div className="container">
          <div className="contact-form-section" data-animate="form">
            <div className={`form-container ${visibleElements.has('form') ? 'animate-in' : ''}`}>
              <div className="form-header">
                <h2>Start Your Journey</h2>
                <p>Tell us about your project and we'll craft a personalized solution</p>
              </div>
              
              <form onSubmit={handleSubmit} className="contact-form" ref={formRef}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">
                      <User size={18} />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">
                      <Mail size={18} />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">
                      <Phone size={18} />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="serviceType">
                      <Ship size={18} />
                      Service or Program Type *
                    </label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select a service or program</option>
                      <optgroup label="Services">
                        {services.filter(item => item.type === 'service').map(service => (
                          <option key={service.id} value={service.id}>
                            {service.name}
                          </option>
                        ))}
                      </optgroup>
                      <optgroup label="Programs">
                        {services.filter(item => item.type === 'program').map(program => (
                          <option key={program.id} value={program.id}>
                            {program.name}
                          </option>
                        ))}
                      </optgroup>
                    </select>
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="location">
                      <Globe size={18} />
                      Location/Marina
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      placeholder="Marina Bay, Miami"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="urgency">
                      <Clock size={18} />
                      Project Urgency
                    </label>
                    <select
                      id="urgency"
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleInputChange}
                    >
                      <option value="normal">Standard Timeline</option>
                      <option value="urgent">Urgent (Within 1 week)</option>
                      <option value="emergency">Emergency (ASAP)</option>
                    </select>
                  </div>
                </div>
                
                <div className="form-group full-width">
                  <label htmlFor="message">
                    <MessageCircle size={18} />
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="6"
                    placeholder="Tell us about your project, specific requirements, timeline, and any other details that would help us provide the best service..."
                  ></textarea>
                </div>
                
                <div className="form-preferences">
                  <div className="preference-group">
                    <label>
                      <MessageCircle size={18} />
                      Preferred Contact Method
                    </label>
                    <div className="contact-methods-simple">
                      {[
                        { value: 'email', label: 'Email', icon: Mail },
                        { value: 'phone', label: 'Phone', icon: Phone },
                        { value: 'text', label: 'Text', icon: MessageCircle }
                      ].map(method => (
                        <label key={method.value} className="method-option">
                          <input
                            type="radio"
                            name="preferredContact"
                            value={method.value}
                            checked={formData.preferredContact === method.value}
                            onChange={handleInputChange}
                          />
                          <div className="method-button">
                            <method.icon size={16} />
                            <span>{method.label}</span>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
                
                <button
                  type="submit"
                  className={`submit-btn ${isSubmitting ? 'submitting' : ''} ${isSubmitted ? 'submitted' : ''}`}
                  disabled={isSubmitting || isSubmitted}
                >
                  <span className="btn-text">
                    {isSubmitted ? (
                      <>
                        <CheckCircle size={20} />
                        Message Sent Successfully!
                      </>
                    ) : isSubmitting ? (
                      <>
                        <div className="loading-spinner"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                        <ArrowRight size={16} />
                      </>
                    )}
                  </span>
                  <div className="btn-effect"></div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Methods (Third Section) */}
      <section className="contact-methods" data-animate="methods">
        <div className="container">
          <div className={`methods-grid ${visibleElements.has('methods') ? 'animate-in' : ''}`}>
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className={`method-card ${activeCard === index ? 'active' : ''}`}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
                onClick={() => window.open(method.action, '_blank')}
              >
                <div className={`method-icon bg-gradient-to-br ${method.gradient}`}>
                  <method.icon size={24} />
                  <div className={`icon-animation ${method.animation}`}></div>
                </div>
                <div className="method-content">
                  <h3 className="method-title">{method.title}</h3>
                  <p className="method-subtitle">{method.subtitle}</p>
                  <div className="method-value">{method.value}</div>
                </div>
                <div className="method-arrow">
                  <ArrowRight size={20} />
                </div>
                <div className="method-glow"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Info & Map Section (Fourth Section) */}
      <section className="contact-info-main">
        <div className="container">
          <div className="contact-info-section" data-animate="info">
            <div className={`info-container ${visibleElements.has('info') ? 'animate-in' : ''}`}>
              
              {/* Office Locations */}
              <div className="office-locations">
                <h3>Our Locations</h3>
                <div className="locations-grid">
                  <div className="location-card primary">
                    <div className="location-header">
                      <MapPin size={20} />
                      <span className="location-badge">Headquarters</span>
                    </div>
                    <h4>Miami Marina District</h4>
                    <p>123 Harbor View Drive<br />Miami, FL 33101</p>
                    <div className="location-features">
                      <span>24/7 Operations</span>
                      <span>Full Service Facility</span>
                    </div>
                  </div>
                  
                  <div className="location-card">
                    <div className="location-header">
                      <MapPin size={20} />
                      <span className="location-badge">Branch</span>
                    </div>
                    <h4>Newport Harbor</h4>
                    <p>456 Yacht Club Blvd<br />Newport, RI 02840</p>
                    <div className="location-features">
                      <span>Seasonal Services</span>
                      <span>Emergency Support</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Business Hours */}
              <div className="business-hours">
                <h3>
                  <Clock size={20} />
                  Business Hours
                </h3>
                <div className="hours-grid">
                  <div className="hours-item">
                    <span className="day">Monday - Friday</span>
                    <span className="time">8:00 AM - 8:00 PM</span>
                  </div>
                  <div className="hours-item">
                    <span className="day">Saturday</span>
                    <span className="time">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="hours-item">
                    <span className="day">Sunday</span>
                    <span className="time">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="hours-item emergency">
                    <span className="day">Emergency Service</span>
                    <span className="time">Available 24/7</span>
                  </div>
                </div>
              </div>
              
              {/* Interactive Map */}
              <div className="map-container" ref={mapRef}>
                <h3>Find Us</h3>
                <div className="map-placeholder">
                  <div className="map-overlay">
                    <MapPin size={40} />
                    <h4>Trident Marine</h4>
                    <p>Miami Marina District</p>
                    <button className="map-btn">
                      Get Directions
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section (Fifth Section) */}
      <section className="contact-faq" data-animate="faq">
        <div className="container">
          <div className={`faq-content ${visibleElements.has('faq') ? 'animate-in' : ''}`}>
            <h2>Frequently Asked Questions</h2>
            <div className="faq-grid">
              <div className="faq-item">
                <h4>How quickly can you respond to emergency calls?</h4>
                <p>We guarantee a 15-minute response time for all emergency calls, with our team available 24/7 year-round.</p>
              </div>
              <div className="faq-item">
                <h4>Do you provide services internationally?</h4>
                <p>Yes, we offer international services and can coordinate with partner marinas worldwide for seamless support.</p>
              </div>
              <div className="faq-item">
                <h4>What's included in your maintenance packages?</h4>
                <p>Our packages include preventive maintenance, emergency repairs, crew management, and concierge services tailored to your needs.</p>
              </div>
              <div className="faq-item">
                <h4>Can you handle superyachts over 200ft?</h4>
                <p>Absolutely. We specialize in luxury superyachts and have the expertise and equipment for vessels of any size.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  )
}

export default Contact
