import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import {
  Star,
  Users,
  Calendar,
  TrendingUp,
  Anchor,
  Navigation,
  Waves,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Shield,
  Settings,
  Award,
  User,
  Phone,
  Mail,
  MapPin
} from 'lucide-react'
import '../css/Home2.css'

gsap.registerPlugin(ScrollTrigger)

const Home2 = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const videoRef = useRef(null)
  const heroRef = useRef(null)
  const servicesRef = useRef(null)

  const galleryImages = [
    {
      url: 'https://i.pinimg.com/736x/28/5b/7f/285b7f198575aa749b4800bde073c93a.jpg',
      service: 'Interior',
      description: 'Luxury interior design and staging services'
    },
    {
      url: 'https://images.unsplash.com/photo-1559385301-0187cb6eff46?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      service: 'Exterior',
      description: 'Professional exterior care and maintenance'
    },
    {
      url: 'https://i.pinimg.com/736x/78/20/ef/7820ef92870acdfbe374aba604fd48bc.jpg',
      service: 'Maintenance',
      description: 'Comprehensive maintenance and repair services'
    },
    {
      url: 'https://images.unsplash.com/photo-1599582350162-83106f579198?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      service: 'Project Management',
      description: 'Complete project oversight and coordination'
    },
    {
      url: 'https://images.unsplash.com/photo-1561751788-85fcb8b78413?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      service: 'Captain & Crew',
      description: 'Professional captain and crew services'
    },
    {
      url: 'https://img.freepik.com/premium-photo/concierge-booking-luxury-yacht-tour-hotel-guests-with-marina-background_1327465-8959.jpg',
      service: 'Concierge',
      description: 'Personalized concierge and guest services'
    }
  ]

  const services = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Fleet Management',
      description: 'Comprehensive vessel tracking and detailed boat information storage system',
      features: ['Vessel database', 'Fleet tracking', 'Boat specifications', 'Registration management']
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'Maintenance Scheduling',
      description: 'Automated service scheduling and maintenance tracking for optimal fleet performance',
      features: ['Service schedules', 'Maintenance logs', 'Parts inventory', 'Cost tracking']
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: 'Expiration Notifications',
      description: 'Smart alert system for licenses, certifications, and maintenance due dates',
      features: ['License tracking', 'Certification alerts', 'Insurance reminders', 'Inspection schedules']
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Project Management',
      description: 'Complete repair job management with timeline tracking and resource allocation',
      features: ['Repair tracking', 'Job assignments', 'Progress monitoring', 'Budget management']
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Analytics & Reports',
      description: 'Detailed insights into fleet performance, costs, and operational efficiency',
      features: ['Performance metrics', 'Cost analysis', 'Operational reports', 'Trend analysis']
    },
    {
      icon: <User className="w-8 h-8" />,
      title: 'User Management',
      description: 'Role-based access control and team collaboration tools for fleet operations',
      features: ['User roles', 'Access control', 'Team collaboration', 'Activity logs']
    }
  ]

  useEffect(() => {
    // Clean up any existing ScrollTrigger instances
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div className="home-container">
      {/* Navigation */}


      {/* Hero Section */}
      <section className="hp-hero-section" id="home">
        <div className="hp-hero-video-container">
          <video
            ref={videoRef}
            className="hp-hero-video"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="https://videos.pexels.com/video-files/29331539/12643962_1080_1920_60fps.mp4" type="video/mp4" />
          </video>
          <div className="hp-hero-overlay"></div>
        </div>

        <div className="hp-hero-content">
          <h1 className="hp-hero-title">
            Thrill of the
            <br />
            <span className="golden-fleet">Fleet</span>.
          </h1>
          
          <button className="hp-hero-cta-button">
            Go to the new Fleet Management
          </button>
        </div>

        <button 
          className={`hp-hero-play-pause ${isPlaying ? 'hp-paused' : ''}`}
          onClick={togglePlayPause}
          aria-label={isPlaying ? 'Pause video' : 'Play video'}
        >
          <div className="hp-play-pause-icon"></div>
        </button>

        <div className="hp-hero-footer-info">
          Fleet management efficiency combined (system range): 95-98% operational uptime (preliminary value). 
          Maintenance costs reduced (system range): 15-25% cost savings (preliminary value)
        </div>
      </section>

      {/* About Section */}
      <section className="about-section" id="about">
        <div className="section-container">
          <motion.div
            className="about-content"
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="about-text">
              <h2 className="section-title">
                Professional Fleet Management Solution
              </h2>
              <p className="about-description">
                Trident Marine is a comprehensive web-based application designed to streamline your boat fleet management operations.
                Our platform provides all the tools you need to efficiently manage vessel information, track maintenance schedules,
                and handle repair projects with ease.
              </p>
              <p className="about-description">
                From detailed vessel databases to automated expiration notifications, our system ensures your fleet operates
                at peak performance while maintaining compliance with all regulatory requirements. Experience the power of
                centralized fleet management with advanced analytics and reporting capabilities.
              </p>
              <div className="about-features">
                <div className="feature-item">
                  <Star className="w-6 h-6 text-gold" />
                  <span>Complete vessel information storage</span>
                </div>
                <div className="feature-item">
                  <Waves className="w-6 h-6 text-gold" />
                  <span>Automated maintenance scheduling</span>
                </div>
                <div className="feature-item">
                  <Navigation className="w-6 h-6 text-gold" />
                  <span>Smart expiration notifications</span>
                </div>
              </div>
            </div>
            <div className="about-image">
              <img
                src="https://images.unsplash.com/photo-1562281302-809108fd533c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Fleet Management Dashboard"
                className="about-img"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Slider */}
      <section className="gallery-section" id="gallery">
        <div className="section-container">
          <motion.h2
            className="section-title centered"
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Excellence in Every Detail
          </motion.h2>

          <div className="gallery-slider">
            <button className="slider-btn prev" onClick={prevSlide}>
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="slider-container">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  className="slider-image-container"
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src={galleryImages[currentSlide].url}
                    alt={`${galleryImages[currentSlide].service} service`}
                    className="slider-image"
                  />
                  <div className="slider-overlay">
                    <div className="service-info">
                      <h3 className="service-name">{galleryImages[currentSlide].service}</h3>
                      <p className="service-desc">{galleryImages[currentSlide].description}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <button className="slider-btn next" onClick={nextSlide}>
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="slider-dots">
            {galleryImages.map((image, index) => (
              <button
                key={index}
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
                title={image.service}
              />
            ))}
          </div>

          <div className="service-navigation">
            {galleryImages.map((image, index) => (
              <button
                key={index}
                className={`service-nav-btn ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              >
                {image.service}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
     
      {/* Contact Section */}

    </div>
  )
}

export default Home2
