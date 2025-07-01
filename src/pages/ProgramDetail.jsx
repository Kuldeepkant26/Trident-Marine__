import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { 
  ArrowLeft,
  Star, 
  Clock, 
  Users,
  Phone,
  Mail,
  Calendar,
  CheckCircle,
  Trophy,
  Compass,
  Shield,
  Award,
  Globe,
  MapPin,
  Camera,
  Quote,
  Anchor,
  Ship,
  Crown,
  Waves,
  ArrowRight,
  Zap,
  Heart,
  Target,
  Settings,
  BookOpen,
  ThumbsUp
} from 'lucide-react'
import '../css/ProgramDetail.css'

function ProgramDetail() {
  const { programId } = useParams()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('overview')
  const [visibleElements, setVisibleElements] = useState(new Set())
  const [selectedImage, setSelectedImage] = useState(0)

  // Program data
  const programsData = {
    'entry': {
      id: 'entry',
      title: 'Entry Program',
      subtitle: 'Perfect Start to Yacht Excellence',
      description: 'Begin your yacht journey with our comprehensive entry program. Designed for those new to yachting, featuring essential services and professional guidance.',
      longDescription: 'Our Entry Program is the perfect starting point for new yacht owners or those looking to upgrade their vessel with professional care. We provide comprehensive basic services that ensure your yacht meets all safety standards while introducing you to the world of professional yacht maintenance and care.',
      features: [
        { icon: Shield, title: 'Basic Maintenance', description: 'Essential maintenance services for your yacht' },
        { icon: BookOpen, title: 'Safety Training', description: 'Comprehensive safety training programs' },
        { icon: Settings, title: 'Essential Systems', description: 'System checks and maintenance' },
        { icon: Award, title: 'Professional Support', description: '24/7 professional assistance' },
        { icon: CheckCircle, title: 'Documentation', description: 'Complete paperwork and certifications' },
        { icon: Target, title: 'Inspection Services', description: 'Thorough vessel inspections' }
      ],
      duration: '2-4 weeks',
      capacity: 'Standard vessels',
      price: 'From $8,500',
      rating: 4.7,
      reviews: 145,
      icon: Anchor,
      gradient: 'from-blue-500 to-cyan-500',
      heroImage: 'https://images.squarespace-cdn.com/content/v1/57585c32d51cd4a103c08e65/7ac89510-a166-45ac-ad1c-f4141bd83d4a/teak-yacht-interior.jpeg',
      gallery: [
        'https://images.squarespace-cdn.com/content/v1/57585c32d51cd4a103c08e65/7ac89510-a166-45ac-ad1c-f4141bd83d4a/teak-yacht-interior.jpeg',
        'https://i.pinimg.com/736x/fc/97/11/fc971178a3db427fb3a727b0877d9bc2.jpg',
        'https://features.boats.com/boat-content/files/2016/03/Restoring_Gelcoat.jpg',
        'https://www.siyachts.com/photos/articles/correct/proper-boat-and-yacht-maintenance3.jpg'
      ],
      itinerary: [
        { day: 1, title: 'Initial Assessment', description: 'Comprehensive vessel inspection and assessment of current condition.' },
        { day: 2, title: 'Safety Systems Check', description: 'Complete safety equipment inspection and testing.' },
        { day: 3, title: 'Basic Maintenance', description: 'Essential maintenance tasks and system checks.' },
        { day: 4, title: 'Documentation Review', description: 'Review and update all vessel documentation and certifications.' },
        { day: 5, title: 'Owner Training', description: 'Basic yacht operation and maintenance training for owners.' }
      ],
      inclusions: [
        'Basic vessel inspection',
        'Safety equipment check',
        'Essential maintenance',
        'Documentation review',
        'Owner orientation',
        'Basic training manual',
        'Follow-up consultation',
        'Service warranty'
      ],
      testimonials: [
        {
          name: 'Mark Stevens',
          location: 'Miami, FL',
          text: 'Perfect introduction to yacht ownership. The team made everything clear and manageable for a first-time owner like me.',
          rating: 5,
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&q=80'
        }
      ]
    },
    'moderate': {
      id: 'moderate',
      title: 'Moderate Program',
      subtitle: 'Enhanced Maritime Excellence',
      description: 'Elevate your yacht experience with our moderate program offering enhanced services, premium materials, and comprehensive maintenance solutions.',
      longDescription: 'Our Moderate Program builds upon the foundation of our Entry Program, offering enhanced services with premium materials and advanced maintenance techniques. Perfect for yacht owners who want to take their vessel to the next level of performance and luxury.',
      features: [
        { icon: Zap, title: 'Advanced Maintenance', description: 'Premium maintenance with advanced techniques' },
        { icon: Award, title: 'Premium Materials', description: 'High-quality materials and components' },
        { icon: Heart, title: 'Interior Upgrades', description: 'Luxury interior enhancements' },
        { icon: Users, title: 'Crew Training', description: 'Professional crew training programs' },
        { icon: Target, title: 'Performance Optimization', description: 'Engine and system optimization' },
        { icon: Shield, title: 'Extended Warranty', description: 'Comprehensive warranty coverage' }
      ],
      duration: '3-6 weeks',
      capacity: 'Mid-size vessels',
      price: 'From $18,000',
      rating: 4.8,
      reviews: 198,
      icon: Ship,
      gradient: 'from-purple-500 to-indigo-500',
      heroImage: 'https://features.boats.com/boat-content/files/2016/03/Restoring_Gelcoat.jpg',
      gallery: [
        'https://features.boats.com/boat-content/files/2016/03/Restoring_Gelcoat.jpg',
        'https://www.barcodealquiler.com/img/de76185d5677f9d88c35eeae7571d164afcb4019.png',
        'https://theluxuryplaybook.com/wp-content/uploads/2024/05/Importance-of-Regular-Yacht-Maintenance-1024x576.png',
        'https://oysteryachts.com/assets/chapter-block/sailing-yacht-service__FillMaxWzE0NDAsMTEwMF0.jpg?width=1920&height=900&rmode=crop&format=webp&quality=60&v=202411251609'
      ],
      itinerary: [
        { day: 1, title: 'Detailed Assessment', description: 'Comprehensive analysis of vessel systems and upgrade opportunities.' },
        { day: 2, title: 'Material Selection', description: 'Selection of premium materials and components for upgrades.' },
        { day: 3, title: 'Advanced Maintenance', description: 'Comprehensive maintenance with premium materials and techniques.' },
        { day: 4, title: 'Interior Enhancements', description: 'Interior upgrades and aesthetic improvements.' },
        { day: 5, title: 'Performance Tuning', description: 'Engine and system optimization for enhanced performance.' },
        { day: 6, title: 'Crew Training', description: 'Advanced training for crew on new systems and procedures.' }
      ],
      inclusions: [
        'Advanced vessel analysis',
        'Premium materials',
        'Interior enhancements',
        'Performance optimization',
        'Crew training program',
        'Extended warranty',
        'Priority support',
        'Maintenance schedule'
      ],
      testimonials: [
        {
          name: 'Captain Sarah Johnson',
          location: 'Newport, RI',
          text: 'The moderate program transformed our yacht. The attention to detail and quality of materials exceeded our expectations.',
          rating: 5,
          image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&q=80'
        }
      ]
    },
    'signature': {
      id: 'signature',
      title: 'Signature Program',
      subtitle: 'Luxury Redefined',
      description: 'Experience the pinnacle of yacht excellence with our signature program featuring bespoke services, luxury finishes, and unparalleled attention to detail.',
      longDescription: 'Our Signature Program represents the ultimate in yacht transformation and luxury services. Every aspect is customized to your specific vision, using only the finest materials and master craftsmen to create a truly unique vessel that reflects your personal style and exceeds the highest standards of luxury yachting.',
      features: [
        { icon: Crown, title: 'Custom Design', description: 'Bespoke design tailored to your vision' },
        { icon: Award, title: 'Luxury Materials', description: 'Finest materials and premium finishes' },
        { icon: Users, title: 'Master Craftsmen', description: 'Expert artisans and master craftsmen' },
        { icon: Heart, title: 'Concierge Service', description: 'Dedicated personal concierge service' },
        { icon: Target, title: 'Bespoke Solutions', description: 'Custom solutions for unique requirements' },
        { icon: Star, title: 'White Glove Service', description: 'Premium white glove treatment' }
      ],
      duration: '6-12 weeks',
      capacity: 'Luxury vessels',
      price: 'From $45,000',
      rating: 5.0,
      reviews: 87,
      icon: Crown,
      gradient: 'from-amber-500 to-orange-500',
      heroImage: 'https://www.boatlagoonyachting.com/wp-content/uploads/2018/06/boat-lagoon-yachting-yacht-management-4.jpg',
      gallery: [
        'https://www.boatlagoonyachting.com/wp-content/uploads/2018/06/boat-lagoon-yachting-yacht-management-4.jpg',
        'https://worldyachtgroup.com/wp-content/uploads/2020/01/165644631.jpg',
        'https://brabbu.com/blog/wp-content/uploads/2016/07/FEATURE.jpg',
        'https://cdn.home-designing.com/wp-content/uploads/2014/05/1-Leather-sofas-1024x684.jpg'
      ],
      itinerary: [
        { day: 1, title: 'Vision Consultation', description: 'Detailed consultation to understand your vision and requirements.' },
        { day: 2, title: 'Custom Design Phase', description: 'Bespoke design development with luxury materials selection.' },
        { day: 3, title: 'Master Craftsmanship', description: 'Implementation by master craftsmen using finest materials.' },
        { day: 4, title: 'Luxury Installation', description: 'Precision installation of custom elements and luxury finishes.' },
        { day: 5, title: 'Quality Perfection', description: 'Meticulous quality control and finishing touches.' },
        { day: 6, title: 'Concierge Setup', description: 'Full concierge service setup and staff training.' },
        { day: 7, title: 'Final Presentation', description: 'Elegant reveal and handover of your transformed vessel.' }
      ],
      inclusions: [
        'Custom design service',
        'Luxury materials',
        'Master craftsmen',
        'Bespoke solutions',
        'Concierge service',
        'White glove treatment',
        'Lifetime support',
        'VIP maintenance'
      ],
      testimonials: [
        {
          name: 'Ambassador Richard Hayes',
          location: 'Monaco',
          text: 'Absolutely extraordinary. The signature program delivered beyond our wildest dreams. True luxury craftsmanship.',
          rating: 5,
          image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&q=80'
        }
      ]
    },
    'sportfish': {
      id: 'sportfish',
      title: 'Sportfish Program',
      subtitle: 'Ultimate Fishing Experience',
      description: 'Specialized program for sportfishing enthusiasts featuring custom installations, professional equipment, and expert guidance for the ultimate fishing experience.',
      longDescription: 'Our Sportfish Program is designed specifically for serious anglers who demand the best fishing experience possible. We transform your vessel into the ultimate fishing machine with custom installations, professional-grade equipment, and expert guidance from tournament-winning captains.',
      features: [
        { icon: Waves, title: 'Custom Fishing Setup', description: 'Professional fishing stations and equipment' },
        { icon: Award, title: 'Professional Equipment', description: 'Tournament-grade fishing equipment' },
        { icon: Users, title: 'Expert Guides', description: 'Professional fishing guides and captains' },
        { icon: Trophy, title: 'Tournament Prep', description: 'Preparation for competitive fishing' },
        { icon: Settings, title: 'Fish Storage Systems', description: 'Advanced fish storage and preservation' },
        { icon: Compass, title: 'Navigation Electronics', description: 'State-of-the-art navigation systems' }
      ],
      duration: '4-8 weeks',
      capacity: 'Sportfish vessels',
      price: 'From $28,000',
      rating: 4.9,
      reviews: 156,
      icon: Waves,
      gradient: 'from-cyan-500 to-blue-500',
      heroImage: 'https://yachtiecareers.com/wp-content/uploads/2022/12/Yacht-Crew-Training-e1677387044273.jpeg',
      gallery: [
        'https://yachtiecareers.com/wp-content/uploads/2022/12/Yacht-Crew-Training-e1677387044273.jpeg',
        'https://www.burgessyachts.com/media-library/media/burgess/miscellaneous/crew/lemon_tree_10000077_vb1827436_2000x1334.jpg?width=1920&height=900&rmode=crop&format=webp&quality=60&v=202411251609',
        'https://boat-float.com/wp-content/uploads/2022/09/shutterstock_1372084805-scaled.jpg',
        'https://akyachts.com/wp-content/uploads/2019/09/yacht-waxer.jpeg'
      ],
      itinerary: [
        { day: 1, title: 'Fishing Assessment', description: 'Analysis of current fishing capabilities and upgrade opportunities.' },
        { day: 2, title: 'Equipment Planning', description: 'Selection of professional fishing equipment and electronics.' },
        { day: 3, title: 'Custom Installation', description: 'Installation of custom fishing stations and equipment.' },
        { day: 4, title: 'Electronics Integration', description: 'Advanced fish finder and navigation electronics setup.' },
        { day: 5, title: 'Expert Training', description: 'Training with professional fishing guides and captains.' },
        { day: 6, title: 'Tournament Preparation', description: 'Preparation for tournament fishing and competition.' }
      ],
      inclusions: [
        'Custom fishing stations',
        'Professional equipment',
        'Navigation electronics',
        'Fish storage systems',
        'Expert training',
        'Tournament preparation',
        'Equipment warranty',
        'Fishing guides network'
      ],
      testimonials: [
        {
          name: 'Captain Mike Rodriguez',
          location: 'Key Largo, FL',
          text: 'The sportfish program took our fishing to championship level. Incredible equipment and expert guidance.',
          rating: 5,
          image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&q=80'
        }
      ]
    },
    'all-programs': {
      id: 'all-programs',
      title: 'All Programs Package',
      subtitle: 'Complete Maritime Solutions',
      description: 'Comprehensive package combining all our programs for the ultimate yacht transformation. Perfect for those seeking complete vessel renovation and services.',
      longDescription: 'Our All Programs Package represents the ultimate yacht transformation experience. This comprehensive package combines every aspect of our Entry, Moderate, Signature, and Sportfish programs to create the perfect vessel that excels in luxury, performance, and functionality. This is the choice for discerning yacht owners who want everything.',
      features: [
        { icon: Trophy, title: 'Complete Renovation', description: 'Total vessel transformation and upgrade' },
        { icon: CheckCircle, title: 'All Services Included', description: 'Every service from all programs included' },
        { icon: Award, title: 'Priority Support', description: 'VIP priority support and assistance' },
        { icon: Shield, title: 'Lifetime Warranty', description: 'Comprehensive lifetime warranty coverage' },
        { icon: Users, title: 'Dedicated Team', description: 'Personal dedicated project team' },
        { icon: Star, title: 'VIP Treatment', description: 'Exclusive VIP treatment and perks' }
      ],
      duration: '12-24 weeks',
      capacity: 'All vessel types',
      price: 'From $95,000',
      rating: 5.0,
      reviews: 42,
      icon: Trophy,
      gradient: 'from-violet-500 to-purple-500',
      heroImage: 'https://www.portdemallorca.com/images/serviciosconcierge.jpg',
      gallery: [
        'https://www.portdemallorca.com/images/serviciosconcierge.jpg',
        'https://www.yachting-pages.com/custom/domain_1/image_files/ckeditor/sitemgr_01-vip-concierge-handing-information-to-guest.jpg',
        'https://static.wixstatic.com/media/192449_c17241ddc8e24d63adcc182360c39980~mv2.jpg/v1/fill/w_640,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/192449_c17241ddc8e24d63adcc182360c39980~mv2.jpg',
        'https://www.tjbsuperyachts.com/wp-content/uploads/2023/06/Yacht-Owners-Sales-Concierge-Services-TJB.jpg'
      ],
      itinerary: [
        { day: 1, title: 'Comprehensive Planning', description: 'Complete vessel analysis and transformation planning.' },
        { day: 2, title: 'Design Integration', description: 'Integration of all program elements into unified design.' },
        { day: 3, title: 'Full Renovation', description: 'Complete vessel renovation with luxury and performance upgrades.' },
        { day: 4, title: 'Systems Integration', description: 'Integration of all advanced systems and technologies.' },
        { day: 5, title: 'Quality Assurance', description: 'Comprehensive testing and quality control.' },
        { day: 6, title: 'Crew Training', description: 'Complete crew training on all systems and procedures.' },
        { day: 7, title: 'Final Delivery', description: 'Grand reveal and handover of your completely transformed vessel.' }
      ],
      inclusions: [
        'Complete vessel transformation',
        'All program benefits',
        'Dedicated project manager',
        'VIP concierge service',
        'Lifetime warranty',
        'Priority support',
        'Ongoing maintenance',
        'Exclusive member benefits'
      ],
      testimonials: [
        {
          name: 'Sir James Wellington',
          location: 'Southampton, UK',
          text: 'The all programs package transformed our yacht into something beyond imagination. Truly exceptional in every way.',
          rating: 5,
          image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&q=80'
        }
      ]
    }
  }

  const program = programsData[programId]

  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const elementName = entry.target.getAttribute('data-animate')
          if (elementName) {
            setVisibleElements(prev => new Set([...prev, elementName]))
          }
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '50px'
    })

    const elements = document.querySelectorAll('[data-animate]')
    elements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  if (!program) {
    return (
      <div className="program-detail-page">
        <div className="not-found">
          <div className="container">
            <h1>Program Not Found</h1>
            <p>The program you're looking for doesn't exist.</p>
            <button onClick={() => navigate('/programs')} className="back-button">
              <ArrowLeft size={20} />
              Back to Programs
            </button>
          </div>
        </div>
      </div>
    )
  }

  const IconComponent = program.icon

  return (
    <div className="program-detail-page">
      {/* Animated Background */}
      <div className="detail-bg">
        <div className="floating-elements">
          {[...Array(12)].map((_, i) => (
            <div key={i} className={`floating-element element-${i + 1}`}>
              <IconComponent />
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
      <section className="detail-hero" data-animate="hero">
        <div className="hero-background">
          <img src={program.heroImage} alt={program.title} />
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <div className={`hero-content ${visibleElements.has('hero') ? 'animate-in' : ''}`}>
            <button className="back-btn" onClick={() => navigate('/programs')}>
              <ArrowLeft size={20} />
              <span>Back to Programs</span>
            </button>

            <div className="hero-header">
              <div className={`program-icon bg-gradient-to-br ${program.gradient}`}>
                <IconComponent size={40} />
              </div>
              <div className="program-meta">
                <div className="program-badge">
                  <Star size={16} fill="currentColor" />
                  <span>Premium Program</span>
                </div>
                <div className="program-rating">
                  <div className="stars">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill={i < Math.floor(program.rating) ? 'currentColor' : 'none'} />
                    ))}
                  </div>
                  <span>{program.rating}</span>
                  <span>({program.reviews} reviews)</span>
                </div>
              </div>
            </div>

            <h1 className="hero-title">{program.title}</h1>
            <p className="hero-subtitle">{program.subtitle}</p>
            <p className="hero-description">{program.description}</p>

            <div className="hero-stats">
              <div className="stat-item">
                <Clock size={20} />
                <div>
                  <span className="stat-label">Duration</span>
                  <span className="stat-value">{program.duration}</span>
                </div>
              </div>
              <div className="stat-item">
                <Users size={20} />
                <div>
                  <span className="stat-label">Capacity</span>
                  <span className="stat-value">{program.capacity}</span>
                </div>
              </div>
              <div className="stat-item">
                <Trophy size={20} />
                <div>
                  <span className="stat-label">Starting From</span>
                  <span className="stat-value">{program.price}</span>
                </div>
              </div>
            </div>

            <div className="hero-actions">
              <button
                className="cta-btn primary"
                onClick={() => navigate('/contact')}
              >
                <Mail size={20} />
                <span>Get Quote</span>
                <ArrowRight size={16} />
              </button>
              <button
                className="cta-btn secondary"
                onClick={() => window.open('tel:+15551234567', '_self')}
              >
                <Phone size={20} />
                <span>Call Now</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="program-nav" data-animate="nav">
        <div className="container">
          <div className={`nav-tabs ${visibleElements.has('nav') ? 'animate-in' : ''}`}>
            {[
              { id: 'overview', name: 'Overview', icon: BookOpen },
              { id: 'features', name: 'Features', icon: Star },
              { id: 'itinerary', name: 'Process', icon: Calendar },
              { id: 'gallery', name: 'Gallery', icon: Camera },
              { id: 'testimonials', name: 'Reviews', icon: ThumbsUp }
            ].map((tab) => (
              <button
                key={tab.id}
                className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <tab.icon size={18} />
                <span>{tab.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="program-content" data-animate="content">
        <div className="container">
          <div className={`content-wrapper ${visibleElements.has('content') ? 'animate-in' : ''}`}>
            {activeTab === 'overview' && (
              <div className="overview-content">
                <div className="content-grid">
                  <div className="content-main">
                    <h2>Program Overview</h2>
                    <p className="long-description">{program.longDescription}</p>

                    <h3>What's Included</h3>
                    <div className="inclusions-grid">
                      {program.inclusions.map((inclusion, index) => (
                        <div key={index} className="inclusion-item">
                          <CheckCircle size={20} />
                          <span>{inclusion}</span>
                        </div>
                      ))}
                    </div>

                    <div className="program-highlights">
                      <h3>Program Highlights</h3>
                      <div className="highlights-grid">
                        <div className="highlight-card">
                          <div className="highlight-icon">
                            <Shield size={24} />
                          </div>
                          <h4>Quality Assured</h4>
                          <p>Premium quality guaranteed on every project</p>
                        </div>
                        <div className="highlight-card">
                          <div className="highlight-icon">
                            <Users size={24} />
                          </div>
                          <h4>Expert Team</h4>
                          <p>Experienced professionals at your service</p>
                        </div>
                        <div className="highlight-card">
                          <div className="highlight-icon">
                            <Award size={24} />
                          </div>
                          <h4>Certified Process</h4>
                          <p>Industry-certified procedures and standards</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="content-sidebar">
                    <div className="booking-card">
                      <h3>Program Details</h3>
                      <div className="booking-details">
                        <div className="detail-row">
                          <Clock size={18} />
                          <span>Duration: {program.duration}</span>
                        </div>
                        <div className="detail-row">
                          <Users size={18} />
                          <span>Capacity: {program.capacity}</span>
                        </div>
                        <div className="detail-row">
                          <Star size={18} />
                          <span>Rating: {program.rating}/5.0 ({program.reviews} reviews)</span>
                        </div>
                      </div>
                      <div className="price-section">
                        <span className="price-label">Starting From</span>
                        <div className="price-amount">{program.price}</div>
                      </div>
                      <button
                        className="book-button"
                        onClick={() => navigate('/contact')}
                      >
                        <Calendar size={18} />
                        <span>Book Consultation</span>
                      </button>
                      <button
                        className="contact-button"
                        onClick={() => navigate('/contact')}
                      >
                        <Phone size={18} />
                        <span>Contact Us</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'features' && (
              <div className="features-content">
                <h2>Program Features</h2>
                <p>Discover the comprehensive features that make our {program.title.toLowerCase()} exceptional.</p>
                
                <div className="features-grid">
                  {program.features.map((feature, index) => (
                    <div key={index} className="feature-card">
                      <div className="feature-icon">
                        <feature.icon size={28} />
                      </div>
                      <div className="feature-content">
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'itinerary' && (
              <div className="itinerary-content">
                <h2>Program Process</h2>
                <p>Our structured approach ensures excellence at every step of your {program.title.toLowerCase()}.</p>
                
                <div className="itinerary-timeline">
                  {program.itinerary.map((item, index) => (
                    <div key={index} className="timeline-item" style={{'--index': index}}>
                      <div className="timeline-marker">
                        Day {item.day}
                      </div>
                      <div className="timeline-content">
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'gallery' && (
              <div className="gallery-content">
                <h2>Program Gallery</h2>
                <p>Explore our {program.title.toLowerCase()} through these stunning visuals.</p>
                
                <div className="gallery-container">
                  <div className="main-image">
                    <img src={program.gallery[selectedImage]} alt={`${program.title} ${selectedImage + 1}`} />
                  </div>
                  <div className="thumbnail-grid">
                    {program.gallery.map((image, index) => (
                      <button
                        key={index}
                        className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                        onClick={() => setSelectedImage(index)}
                      >
                        <img src={image} alt={`${program.title} ${index + 1}`} />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'testimonials' && (
              <div className="testimonials-content">
                <h2>Client Reviews</h2>
                <p>See what our clients have to say about their {program.title.toLowerCase()} experience.</p>
                
                <div className="testimonials-grid">
                  {program.testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial-card">
                      <div className="testimonial-header">
                        <img src={testimonial.image} alt={testimonial.name} />
                        <div className="testimonial-info">
                          <h4>{testimonial.name}</h4>
                          <p>{testimonial.location}</p>
                        </div>
                        <div className="testimonial-rating">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} size={16} fill="currentColor" />
                          ))}
                        </div>
                      </div>
                      <div className="testimonial-content">
                        <Quote size={24} />
                        <p>"{testimonial.text}"</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="program-cta" data-animate="cta">
        <div className="container">
          <div className={`cta-content ${visibleElements.has('cta') ? 'animate-in' : ''}`}>
            <h2>Ready to Get Started?</h2>
            <p>Transform your yacht with our {program.title.toLowerCase()}. Contact our experts today for a personalized consultation and quote.</p>
            
            <div className="cta-actions">
              <button
                className="cta-primary"
                onClick={() => navigate('/contact')}
              >
                <Mail size={20} />
                <span>Get Free Quote</span>
                <ArrowRight size={16} />
              </button>
              <button
                className="cta-secondary"
                onClick={() => window.open('tel:+15551234567', '_self')}
              >
                <Phone size={20} />
                <span>Call Now</span>
              </button>
            </div>

            <div className="cta-features">
              <div className="feature">
                <CheckCircle size={16} />
                <span>Free Consultation</span>
              </div>
              <div className="feature">
                <CheckCircle size={16} />
                <span>Custom Quote</span>
              </div>
              <div className="feature">
                <CheckCircle size={16} />
                <span>Expert Guidance</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProgramDetail
