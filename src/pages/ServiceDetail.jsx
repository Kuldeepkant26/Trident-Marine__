import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {
    ArrowLeft,
    ArrowRight,
    Star,
    Shield,
    Clock,
    Award,
    CheckCircle,
    Phone,
    Mail,
    Calendar,
    Users,
    Zap,
    Crown,
    Ship,
    Wrench,
    Briefcase,
    Anchor,
    TrendingUp,
    Globe,
    Download,
    Share2,
    Heart,
    MessageCircle
} from 'lucide-react'
import '../css/ServiceDetail.css'

function ServiceDetail() {
    const { serviceId } = useParams()
    const navigate = useNavigate()
    const [visibleElements, setVisibleElements] = useState(new Set())
    const [activeTab, setActiveTab] = useState('overview')
    const [selectedImage, setSelectedImage] = useState(0)

    const services = {
        interior: {
            id: 'interior',
            title: 'Interior Design & Maintenance',
            subtitle: 'Luxury Living Spaces Redefined',
            description: 'Transform your yacht\'s interior with our expert design and maintenance services. From custom furniture to complete renovations, we create luxurious living spaces that reflect your personal style while maintaining the highest standards of maritime functionality.',
            longDescription: 'Our interior design team combines decades of experience with cutting-edge design trends to create spaces that are both beautiful and practical. We understand the unique challenges of marine environments and use only the finest materials and craftsmanship to ensure your yacht\'s interior remains stunning for years to come.',
            icon: Crown,
            gradient: 'from-purple-500 to-pink-500',
            rating: 4.9,
            projects: 150,
            price: 'From $15,000',
            duration: '2-8 weeks',
            category: 'Design & Aesthetics',
            images: [
                'https://images.squarespace-cdn.com/content/v1/57585c32d51cd4a103c08e65/7ac89510-a166-45ac-ad1c-f4141bd83d4a/teak-yacht-interior.jpeg',
                'https://i.pinimg.com/736x/fc/97/11/fc971178a3db427fb3a727b0877d9bc2.jpg',
                'https://brabbu.com/blog/wp-content/uploads/2016/07/FEATURE.jpg',
                'https://cdn.home-designing.com/wp-content/uploads/2014/05/1-Leather-sofas-1024x684.jpg'
            ],
            features: [
                {
                    title: 'Custom Design Consultation',
                    description: 'Personalized design sessions to understand your vision and requirements',
                    icon: Users
                },
                {
                    title: 'Premium Materials',
                    description: 'Access to the finest marine-grade materials and luxury finishes',
                    icon: Award
                },
                {
                    title: 'Expert Installation',
                    description: 'Professional installation by certified marine craftsmen',
                    icon: Shield
                },
                {
                    title: 'Ongoing Maintenance',
                    description: 'Regular maintenance services to keep your interior pristine',
                    icon: Clock
                }
            ],
            process: [
                {
                    step: 1,
                    title: 'Initial Consultation',
                    description: 'We meet with you to discuss your vision, requirements, and budget',
                    duration: '1-2 days'
                },
                {
                    step: 2,
                    title: 'Design Development',
                    description: 'Our team creates detailed designs and material specifications',
                    duration: '1-2 weeks'
                },
                {
                    step: 3,
                    title: 'Material Procurement',
                    description: 'We source and prepare all materials and custom elements',
                    duration: '2-4 weeks'
                },
                {
                    step: 4,
                    title: 'Installation & Finishing',
                    description: 'Expert installation and final touches to complete your space',
                    duration: '1-3 weeks'
                }
            ],
            testimonials: [
                {
                    name: 'Captain James Mitchell',
                    role: 'Yacht Owner',
                    content: 'The interior transformation exceeded all expectations. The attention to detail and quality of craftsmanship is absolutely outstanding.',
                    rating: 5,
                    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&q=80'
                },
                {
                    name: 'Sarah Johnson',
                    role: 'Interior Designer',
                    content: 'Working with Trident Marine was a pleasure. Their team understood our vision perfectly and executed it flawlessly.',
                    rating: 5,
                    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&q=80'
                }
            ],
            packages: [
                {
                    name: 'Essential',
                    price: '$15,000',
                    description: 'Basic interior refresh with quality materials',
                    features: ['Design consultation', 'Basic materials', 'Standard installation', '6-month warranty']
                },
                {
                    name: 'Premium',
                    price: '$35,000',
                    description: 'Complete interior renovation with luxury finishes',
                    features: ['Full design service', 'Premium materials', 'Expert installation', '2-year warranty', 'Maintenance package']
                },
                {
                    name: 'Luxury',
                    price: '$75,000',
                    description: 'Bespoke interior design with exclusive materials',
                    features: ['Custom design', 'Exclusive materials', 'Master craftsmen', '5-year warranty', 'Priority maintenance', 'Concierge service']
                }
            ]
        },
        exterior: {
            id: 'exterior',
            title: 'Exterior Maintenance',
            subtitle: 'Pristine Vessel Care & Protection',
            description: 'Keep your yacht looking immaculate with our comprehensive exterior maintenance services including hull care, deck maintenance, and protective coatings that ensure your vessel remains in perfect condition.',
            longDescription: 'Our exterior maintenance services are designed to protect your investment while keeping your yacht looking spectacular. We use advanced techniques and premium products to maintain your vessel\'s appearance and structural integrity in challenging marine environments.',
            icon: Ship,
            gradient: 'from-blue-500 to-cyan-500',
            rating: 4.8,
            projects: 320,
            price: 'From $8,000',
            duration: '1-4 weeks',
            category: 'Maintenance & Care',
            images: [
                'https://features.boats.com/boat-content/files/2016/03/Restoring_Gelcoat.jpg',
                'https://www.barcodealquiler.com/img/de76185d5677f9d88c35eeae7571d164afcb4019.png',
                'https://theluxuryplaybook.com/wp-content/uploads/2024/05/Importance-of-Regular-Yacht-Maintenance-1024x576.png',
                'https://boat-float.com/wp-content/uploads/2022/09/shutterstock_1372084805-scaled.jpg'
            ],
            features: [
                {
                    title: 'Hull Cleaning & Care',
                    description: 'Professional hull cleaning and antifouling treatments',
                    icon: Ship
                },
                {
                    title: 'Deck Restoration',
                    description: 'Complete deck refinishing and protective treatments',
                    icon: Shield
                },
                {
                    title: 'Paint & Coating',
                    description: 'Premium marine paints and protective coatings',
                    icon: Award
                },
                {
                    title: 'Weather Protection',
                    description: 'Advanced weather protection systems and treatments',
                    icon: Clock
                }
            ],
            process: [
                {
                    step: 1,
                    title: 'Inspection & Assessment',
                    description: 'Thorough evaluation of exterior condition and requirements',
                    duration: '1 day'
                },
                {
                    step: 2,
                    title: 'Preparation & Planning',
                    description: 'Surface preparation and detailed work planning',
                    duration: '2-3 days'
                },
                {
                    step: 3,
                    title: 'Treatment & Application',
                    description: 'Professional application of treatments and coatings',
                    duration: '1-3 weeks'
                },
                {
                    step: 4,
                    title: 'Quality Control',
                    description: 'Final inspection and quality assurance checks',
                    duration: '1-2 days'
                }
            ],
            testimonials: [
                {
                    name: 'Captain Robert Hayes',
                    role: 'Professional Captain',
                    content: 'Exceptional exterior maintenance service. My yacht has never looked better and the protection is outstanding.',
                    rating: 5,
                    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&q=80'
                }
            ],
            packages: [
                {
                    name: 'Basic Care',
                    price: '$8,000',
                    description: 'Essential exterior cleaning and maintenance',
                    features: ['Hull cleaning', 'Basic deck care', 'Standard products', '6-month warranty']
                },
                {
                    name: 'Complete Care',
                    price: '$18,000',
                    description: 'Comprehensive exterior maintenance and protection',
                    features: ['Full hull service', 'Deck restoration', 'Premium coatings', '1-year warranty', 'Maintenance schedule']
                },
                {
                    name: 'Premium Protection',
                    price: '$35,000',
                    description: 'Advanced protection with premium materials',
                    features: ['Complete restoration', 'Advanced coatings', 'Weather protection', '2-year warranty', 'Priority service', 'Seasonal maintenance']
                }
            ]
        },
        maintenance: {
            id: 'maintenance',
            title: 'General Maintenance',
            subtitle: 'Complete Vessel Care & Systems',
            description: 'Comprehensive maintenance services to keep your yacht in perfect condition. From engine servicing to electrical systems, we ensure every component operates at peak performance.',
            longDescription: 'Our general maintenance services cover all aspects of yacht care, from mechanical systems to safety equipment. Our certified technicians use the latest diagnostic tools and premium parts to ensure your vessel remains reliable and safe.',
            icon: Wrench,
            gradient: 'from-green-500 to-teal-500',
            rating: 4.9,
            projects: 450,
            price: 'From $5,000',
            duration: '1-3 weeks',
            category: 'Technical Services',
            images: [
                'https://www.siyachts.com/photos/articles/correct/proper-boat-and-yacht-maintenance3.jpg',
                'https://oysteryachts.com/assets/chapter-block/sailing-yacht-service__FillMaxWzE0NDAsMTEwMF0.jpg',
                'https://yatcowpmedialibrary.nyc3.cdn.digitaloceanspaces.com/wp-content/uploads/2025/01/introduction-to-yacht-maintenance-4.jpg',
                'https://akyachts.com/wp-content/uploads/2019/09/yacht-waxer.jpeg'
            ],
            features: [
                {
                    title: 'Engine Service',
                    description: 'Complete engine maintenance and performance optimization',
                    icon: Wrench
                },
                {
                    title: 'Electrical Systems',
                    description: 'Full electrical system inspection and maintenance',
                    icon: Zap
                },
                {
                    title: 'Plumbing & Systems',
                    description: 'Comprehensive plumbing and water system services',
                    icon: Globe
                },
                {
                    title: 'Safety Equipment',
                    description: 'Safety equipment inspection and certification',
                    icon: Shield
                }
            ],
            process: [
                {
                    step: 1,
                    title: 'System Diagnostics',
                    description: 'Comprehensive diagnostic testing of all yacht systems',
                    duration: '1-2 days'
                },
                {
                    step: 2,
                    title: 'Maintenance Planning',
                    description: 'Detailed maintenance schedule and parts ordering',
                    duration: '1-2 days'
                },
                {
                    step: 3,
                    title: 'Service Execution',
                    description: 'Professional maintenance and repair services',
                    duration: '1-2 weeks'
                },
                {
                    step: 4,
                    title: 'Testing & Certification',
                    description: 'System testing and safety certification',
                    duration: '1-2 days'
                }
            ],
            testimonials: [
                {
                    name: 'Michael Thompson',
                    role: 'Yacht Owner',
                    content: 'Their maintenance service is thorough and professional. I trust them completely with my yacht\'s technical needs.',
                    rating: 5,
                    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&h=60&fit=crop&q=80'
                }
            ],
            packages: [
                {
                    name: 'Basic Service',
                    price: '$5,000',
                    description: 'Essential maintenance for key systems',
                    features: ['Basic engine service', 'Safety check', 'Standard parts', '6-month warranty']
                },
                {
                    name: 'Full Service',
                    price: '$12,000',
                    description: 'Comprehensive maintenance for all systems',
                    features: ['Complete engine service', 'All systems check', 'Premium parts', '1-year warranty', 'Service schedule']
                },
                {
                    name: 'Premium Care',
                    price: '$25,000',
                    description: 'Advanced maintenance with premium service',
                    features: ['Complete overhaul', 'Performance optimization', 'Premium parts', '2-year warranty', 'Priority support', 'Emergency service']
                }
            ]
        },
        management: {
            id: 'management',
            title: 'Project Management',
            subtitle: 'Seamless Execution & Oversight',
            description: 'Professional project management for yacht renovations, maintenance schedules, and custom installations with dedicated oversight and quality control.',
            longDescription: 'Our project management services ensure your yacht projects are completed on time, within budget, and to the highest standards. We coordinate all aspects of your project from planning to completion.',
            icon: Briefcase,
            gradient: 'from-orange-500 to-red-500',
            rating: 5.0,
            projects: 200,
            price: 'From $3,000',
            duration: 'Project-based',
            category: 'Management Services',
            images: [
                'https://www.boatlagoonyachting.com/wp-content/uploads/2018/06/boat-lagoon-yachting-yacht-management-4.jpg',
                'https://worldyachtgroup.com/wp-content/uploads/2020/01/165644631.jpg',
                'https://storage.googleapis.com/iyc-web-storage/Crew_placement_5c97ed0428.jpg',
                'https://cdn.northropandjohnson.com/uploads/Yacht-Management_Main_Cropped.jpg?auto=format&q=35&h=1&ar=16%3A9&fit=crop'

            ],
            features: [
                {
                    title: 'Timeline Management',
                    description: 'Detailed project scheduling and milestone tracking',
                    icon: Calendar
                },
                {
                    title: 'Quality Control',
                    description: 'Rigorous quality assurance and inspection processes',
                    icon: Shield
                },
                {
                    title: 'Vendor Coordination',
                    description: 'Expert coordination of all contractors and suppliers',
                    icon: Users
                },
                {
                    title: 'Progress Reporting',
                    description: 'Regular updates and transparent communication',
                    icon: TrendingUp
                }
            ],
            process: [
                {
                    step: 1,
                    title: 'Project Planning',
                    description: 'Comprehensive project planning and resource allocation',
                    duration: '1-2 weeks'
                },
                {
                    step: 2,
                    title: 'Team Assembly',
                    description: 'Selection and coordination of specialist teams',
                    duration: '1 week'
                },
                {
                    step: 3,
                    title: 'Execution Management',
                    description: 'Day-to-day project management and oversight',
                    duration: 'Project duration'
                },
                {
                    step: 4,
                    title: 'Project Completion',
                    description: 'Final inspection and project handover',
                    duration: '1 week'
                }
            ],
            testimonials: [
                {
                    name: 'David Wilson',
                    role: 'Project Coordinator',
                    content: 'Outstanding project management. Every detail was handled professionally and the project finished ahead of schedule.',
                    rating: 5,
                    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=60&h=60&fit=crop&q=80'
                }
            ],
            packages: [
                {
                    name: 'Basic Management',
                    price: '$3,000',
                    description: 'Essential project coordination and oversight',
                    features: ['Project planning', 'Basic coordination', 'Progress reports', 'Quality assurance']
                },
                {
                    name: 'Full Management',
                    price: '$8,000',
                    description: 'Comprehensive project management services',
                    features: ['Complete planning', 'Full coordination', 'Regular reporting', 'Quality control', 'Risk management']
                },
                {
                    name: 'Premium Management',
                    price: '$15,000',
                    description: 'Premium project management with dedicated oversight',
                    features: ['Strategic planning', 'Dedicated manager', 'Daily reporting', 'Complete oversight', 'Risk mitigation', 'Warranty support']
                }
            ]
        },
        crew: {
            id: 'crew',
            title: 'Captain & Crew Services',
            subtitle: 'Professional Maritime Staff',
            description: 'Experienced captains and crew members for your yacht operations. From day trips to extended voyages with certified professionals who ensure safety and exceptional service.',
            longDescription: 'Our captain and crew services provide you with experienced, certified maritime professionals who understand luxury yacht operations. Every team member is carefully vetted and trained to deliver exceptional service while maintaining the highest safety standards.',
            icon: Users,
            gradient: 'from-indigo-500 to-purple-500',
            rating: 4.9,
            projects: 800,
            price: 'From $1,200/day',
            duration: 'As needed',
            category: 'Crew Services',
            images: [
                'https://yachtiecareers.com/wp-content/uploads/2022/12/Yacht-Crew-Training-e1677387044273.jpeg',
                'https://www.burgessyachts.com/media-library/media/burgess/miscellaneous/crew/lemon_tree_10000077_vb1827436_2000x1334.jpg?width=1920&height=900&rmode=crop&format=webp&quality=60&v=202411251609',
                'https://www.superyachtcontent.com/wp-content/uploads/2023/11/How-to-become-a-Superyacht-Stewardess.jpeg',
                'https://www.yachting-pages.com/custom/domain_1/image_files/ckeditor/sitemgr_smallwoods-yachtwear-superyacht-crew.jpg'
            ],
            features: [
                {
                    title: 'Licensed Captains',
                    description: 'Fully licensed and experienced yacht captains',
                    icon: Award
                },
                {
                    title: 'Trained Crew',
                    description: 'Professional crew members with luxury service training',
                    icon: Users
                },
                {
                    title: 'Safety Certified',
                    description: 'All crew members are safety certified and trained',
                    icon: Shield
                },
                {
                    title: 'Flexible Scheduling',
                    description: 'Crew available for day trips or extended voyages',
                    icon: Calendar
                }
            ],
            process: [
                {
                    step: 1,
                    title: 'Requirements Assessment',
                    description: 'Understanding your voyage needs and crew requirements',
                    duration: '1 day'
                },
                {
                    step: 2,
                    title: 'Crew Selection',
                    description: 'Matching the perfect crew to your specific needs',
                    duration: '1-2 days'
                },
                {
                    step: 3,
                    title: 'Pre-Voyage Briefing',
                    description: 'Detailed briefing and preparation for your voyage',
                    duration: '1 day'
                },
                {
                    step: 4,
                    title: 'Service Delivery',
                    description: 'Professional crew service throughout your voyage',
                    duration: 'Voyage duration'
                }
            ],
            testimonials: [
                {
                    name: 'Ambassador Charles Reed',
                    role: 'Yacht Charter Guest',
                    content: 'The crew was absolutely exceptional. Professional, knowledgeable, and provided service beyond our expectations.',
                    rating: 5,
                    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&q=80'
                }
            ],
            packages: [
                {
                    name: 'Day Crew',
                    price: '$1,200/day',
                    description: 'Professional crew for day trips and short voyages',
                    features: ['Licensed captain', '2 crew members', 'Safety equipment', 'Basic service']
                },
                {
                    name: 'Extended Crew',
                    price: '$2,500/day',
                    description: 'Full crew service for extended voyages',
                    features: ['Captain & first mate', '4 crew members', 'Full service', 'Meal preparation', 'Entertainment']
                },
                {
                    name: 'Luxury Crew',
                    price: '$5,000/day',
                    description: 'Premium crew service with luxury amenities',
                    features: ['Master captain', '6+ crew members', 'Luxury service', 'Personal chef', 'Concierge service', 'Water sports']
                }
            ]
        },
        concierge: {
            id: 'concierge',
            title: 'Concierge Services',
            subtitle: 'Luxury Lifestyle Support',
            description: 'Premium concierge services for yacht owners including provisioning, event planning, and personalized assistance to enhance your yachting experience.',
            longDescription: 'Our concierge services are designed to make your yachting experience effortless and memorable. From provisions and reservations to special events and personal assistance, we handle every detail so you can focus on enjoying your time on the water.',
            icon: Anchor,
            gradient: 'from-yellow-500 to-orange-500',
            rating: 4.8,
            projects: 600,
            price: 'From $500/day',
            duration: 'Ongoing',
            category: 'Luxury Services',
            images: [
                'https://www.portdemallorca.com/images/serviciosconcierge.jpg',
                'https://www.yachting-pages.com/custom/domain_1/image_files/ckeditor/sitemgr_01-vip-concierge-handing-information-to-guest.jpg',
                'https://static.wixstatic.com/media/192449_c17241ddc8e24d63adcc182360c39980~mv2.jpg/v1/fill/w_640,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/192449_c17241ddc8e24d63adcc182360c39980~mv2.jpg',
                'https://www.tjbsuperyachts.com/wp-content/uploads/2023/06/Yacht-Owners-Sales-Concierge-Services-TJB.jpg'
            ],
            features: [
                {
                    title: 'Provisioning Services',
                    description: 'Premium food, beverage, and supply provisioning',
                    icon: Anchor
                },
                {
                    title: 'Event Planning',
                    description: 'Complete event planning and coordination services',
                    icon: Calendar
                },
                {
                    title: 'Travel Coordination',
                    description: 'Comprehensive travel and itinerary planning',
                    icon: Globe
                },
                {
                    title: '24/7 Support',
                    description: 'Round-the-clock concierge support and assistance',
                    icon: Clock
                }
            ],
            process: [
                {
                    step: 1,
                    title: 'Preference Consultation',
                    description: 'Understanding your preferences and requirements',
                    duration: '1 day'
                },
                {
                    step: 2,
                    title: 'Service Planning',
                    description: 'Creating a customized concierge service plan',
                    duration: '1-2 days'
                },
                {
                    step: 3,
                    title: 'Service Delivery',
                    description: 'Ongoing concierge support and service delivery',
                    duration: 'Ongoing'
                },
                {
                    step: 4,
                    title: 'Continuous Improvement',
                    description: 'Regular feedback and service enhancement',
                    duration: 'Ongoing'
                }
            ],
            testimonials: [
                {
                    name: 'Elizabeth Martinez',
                    role: 'Yacht Owner',
                    content: 'The concierge service is impeccable. They anticipate our needs and handle everything with such professionalism.',
                    rating: 5,
                    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&q=80'
                }
            ],
            packages: [
                {
                    name: 'Essential Concierge',
                    price: '$500/day',
                    description: 'Basic concierge services for daily needs',
                    features: ['Basic provisioning', 'Reservation assistance', 'Local recommendations', 'Standard support']
                },
                {
                    name: 'Full Concierge',
                    price: '$1,200/day',
                    description: 'Comprehensive concierge services',
                    features: ['Premium provisioning', 'Event planning', 'Travel coordination', 'Priority support', 'Personal assistant']
                },
                {
                    name: 'Luxury Concierge',
                    price: '$2,500/day',
                    description: 'Ultimate luxury concierge experience',
                    features: ['Exclusive provisioning', 'Event management', 'Private arrangements', '24/7 support', 'Dedicated concierge', 'VIP access']
                }
            ]
        }
    }

    const service = services[serviceId]

    useEffect(() => {
        if (!service) {
            navigate('/services')
            return
        }

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
    }, [service, navigate])

    if (!service) {
        return null
    }

    return (
        <div className="service-detail-page">
            {/* Animated Background */}
            <div className="detail-bg">
                <div className="floating-elements">
                    {[...Array(12)].map((_, i) => (
                        <div key={i} className={`floating-element element-${i + 1}`}>
                            <service.icon />
                        </div>
                    ))}
                </div>
                <div className="gradient-orbs">
                    <div className="orb orb-1"></div>
                    <div className="orb orb-2"></div>
                </div>
            </div>

            {/* Hero Section */}
            <section className="detail-hero" data-animate="hero">
                <div className="container">
                    <div className={`hero-content ${visibleElements.has('hero') ? 'animate-in' : ''}`}>
                        <button className="back-btn" onClick={() => navigate('/services')}>
                            <ArrowLeft size={20} />
                            <span>Back to Services</span>
                        </button>

                        <div className="hero-header">
                            <div className={`service-icon bg-gradient-to-br ${service.gradient}`}>
                                <service.icon size={40} />
                            </div>
                            <div className="service-meta">
                                <div className="service-category">{service.category}</div>
                                <div className="service-rating">
                                    <div className="stars">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} size={16} fill={i < Math.floor(service.rating) ? 'currentColor' : 'none'} />
                                        ))}
                                    </div>
                                    <span>{service.rating}</span>
                                    <span>({service.projects}+ projects)</span>
                                </div>
                            </div>
                        </div>

                        <h1 className="hero-title">{service.title}</h1>
                        <p className="hero-subtitle">{service.subtitle}</p>
                        <p className="hero-description">{service.description}</p>

                        <div className="hero-actions">
                            <button
                                className="cta-btn primary"
                                onClick={() => navigate('/contact')}
                            >
                                <MessageCircle size={20} />
                                <span>Contact Us</span>
                                <ArrowRight size={16} />
                            </button>
                            <button className="cta-btn secondary">
                                <Share2 size={20} />
                                <span>Share Service</span>
                            </button>
                        </div>

                        <div className="quick-info">
                            <div className="info-item">
                                <span className="label">Starting Price</span>
                                <span className="value">{service.price}</span>
                            </div>
                            <div className="info-item">
                                <Clock size={16} />
                                <span className="value">{service.duration}</span>
                            </div>
                            <div className="info-item">
                                <Award size={16} />
                                <span className="value">Premium Quality</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Image Gallery */}
            <section className="image-gallery" data-animate="gallery">
                <div className="container">
                    <div className={`gallery-container ${visibleElements.has('gallery') ? 'animate-in' : ''}`}>
                        <div className="main-image">
                            <img src={service.images[selectedImage]} alt={service.title} />
                        </div>
                        <div className="thumbnail-grid">
                            {service.images.map((image, index) => (
                                <button
                                    key={index}
                                    className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                                    onClick={() => setSelectedImage(index)}
                                >
                                    <img src={image} alt={`${service.title} ${index + 1}`} />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Tabs */}
            <section className="content-tabs" data-animate="tabs">
                <div className="container">
                    <div className={`tabs-container ${visibleElements.has('tabs') ? 'animate-in' : ''}`}>
                        <div className="tab-nav">
                            {[
                                { id: 'overview', name: 'Overview' },
                                { id: 'process', name: 'Process' },
                                { id: 'packages', name: 'Packages' },
                                { id: 'testimonials', name: 'Reviews' }
                            ].map((tab) => (
                                <button
                                    key={tab.id}
                                    className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                                    onClick={() => setActiveTab(tab.id)}
                                >
                                    {tab.name}
                                </button>
                            ))}
                        </div>

                        <div className="tab-content">
                            {activeTab === 'overview' && (
                                <div className="overview-content">
                                    <div className="content-grid">
                                        <div className="content-main">
                                            <h2>Service Overview</h2>
                                            <p>{service.longDescription}</p>

                                            <h3>Key Features</h3>
                                            <div className="features-grid">
                                                {service.features.map((feature, index) => (
                                                    <div key={index} className="feature-card">
                                                        <div className="feature-icon">
                                                            <feature.icon size={24} />
                                                        </div>
                                                        <div className="feature-content">
                                                            <h4>{feature.title}</h4>
                                                            <p>{feature.description}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="content-sidebar">
                                            <div className="info-card">
                                                <h3>Service Details</h3>
                                                <div className="detail-items">
                                                    <div className="detail-item">
                                                        <span className="label">Duration</span>
                                                        <span className="value">{service.duration}</span>
                                                    </div>
                                                    <div className="detail-item">
                                                        <span className="label">Starting Price</span>
                                                        <span className="value">{service.price}</span>
                                                    </div>
                                                    <div className="detail-item">
                                                        <span className="label">Projects Completed</span>
                                                        <span className="value">{service.projects}+</span>
                                                    </div>
                                                    <div className="detail-item">
                                                        <span className="label">Rating</span>
                                                        <span className="value">{service.rating}/5.0</span>
                                                    </div>
                                                </div>
                                                <button
                                                    className="contact-btn"
                                                    onClick={() => navigate('/contact')}
                                                >
                                                    <Phone size={18} />
                                                    <span>Get Quote</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'process' && (
                                <div className="process-content">
                                    <h2>Our Process</h2>
                                    <p>We follow a structured approach to ensure the highest quality results for every project.</p>

                                    <div className="process-steps">
                                        {service.process.map((step, index) => (
                                            <div key={index} className="process-step">
                                                <div className="step-number">{step.step}</div>
                                                <div className="step-content">
                                                    <h3>{step.title}</h3>
                                                    <p>{step.description}</p>
                                                    <div className="step-duration">
                                                        <Clock size={16} />
                                                        <span>{step.duration}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {activeTab === 'packages' && (
                                <div className="packages-content">
                                    <h2>Service Packages</h2>
                                    <p>Choose the package that best fits your needs and budget.</p>

                                    <div className="packages-grid">
                                        {service.packages.map((pkg, index) => (
                                            <div key={index} className={`package-card ${index === 1 ? 'featured' : ''}`}>
                                                {index === 1 && <div className="featured-badge">Most Popular</div>}
                                                <h3>{pkg.name}</h3>
                                                <div className="package-price">{pkg.price}</div>
                                                <p>{pkg.description}</p>
                                                <ul className="package-features">
                                                    {pkg.features.map((feature, idx) => (
                                                        <li key={idx}>
                                                            <CheckCircle size={16} />
                                                            <span>{feature}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                                <button
                                                    className="package-btn"
                                                    onClick={() => navigate('/contact')}
                                                >
                                                    Choose Package
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {activeTab === 'testimonials' && (
                                <div className="testimonials-content">
                                    <h2>Client Reviews</h2>
                                    <p>See what our clients have to say about our {service.title.toLowerCase()} services.</p>

                                    <div className="testimonials-grid">
                                        {service.testimonials.map((testimonial, index) => (
                                            <div key={index} className="testimonial-card">
                                                <div className="testimonial-header">
                                                    <img src={testimonial.image} alt={testimonial.name} />
                                                    <div className="testimonial-info">
                                                        <h4>{testimonial.name}</h4>
                                                        <p>{testimonial.role}</p>
                                                    </div>
                                                    <div className="testimonial-rating">
                                                        {[...Array(testimonial.rating)].map((_, i) => (
                                                            <Star key={i} size={16} fill="currentColor" />
                                                        ))}
                                                    </div>
                                                </div>
                                                <p className="testimonial-content">"{testimonial.content}"</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="detail-cta" data-animate="cta">
                <div className="container">
                    <div className={`cta-content ${visibleElements.has('cta') ? 'animate-in' : ''}`}>
                        <div className="cta-hero">
                            <h2>Ready to Get Started?</h2>
                            <p>Contact our experts to discuss your {service.title.toLowerCase()} needs and get a personalized quote.</p>

                            <div className="cta-actions">
                                <button
                                    className="cta-btn primary"
                                    onClick={() => navigate('/contact')}
                                >
                                    <Mail size={20} />
                                    <span>Contact Us</span>
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
                                    <span>Expert Advice</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ServiceDetail
