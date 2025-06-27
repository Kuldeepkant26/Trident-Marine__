import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  X, 
  Heart, 
  MessageCircle, 
  Share, 
  Download,
  ExternalLink,
  Instagram,
  Calendar,
  MapPin,
  Anchor,
  Camera,
  Filter,
  Grid3X3,
  ChevronLeft,
  ChevronRight,
  Play,
  RefreshCw,
  Loader2
} from 'lucide-react'
import '../css/Gallery.css'

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [isLoading, setIsLoading] = useState(true)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [instagramPosts, setInstagramPosts] = useState([])
  const [error, setError] = useState(null)
  const [refreshing, setRefreshing] = useState(false)
  const [failedImages, setFailedImages] = useState(new Set())

  // API Configuration
  const APIFY_API_TOKEN = import.meta.env.VITE_APIFY_API_TOKEN
  const APIFY_DATASET_ID = 'NRo0lNEFVn34OEYGj'

  // Check if API token is configured
  if (!APIFY_API_TOKEN) {
    console.error('VITE_APIFY_API_TOKEN is not configured. Please check your .env file.')
  }

  // Function to determine post category based on caption/hashtags
  const categorizePost = (caption) => {
    if (!caption) return 'adventure'
    
    const lowercaseCaption = caption.toLowerCase()
    
    if (lowercaseCaption.includes('#sailing') || lowercaseCaption.includes('sail') || lowercaseCaption.includes('anchor')) {
      return 'sailing'
    }
    if (lowercaseCaption.includes('#yacht') || lowercaseCaption.includes('yacht') || lowercaseCaption.includes('boat')) {
      return 'yacht'
    }
    if (lowercaseCaption.includes('#crew') || lowercaseCaption.includes('crew') || lowercaseCaption.includes('captain')) {
      return 'crew'
    }
    if (lowercaseCaption.includes('#luxury') || lowercaseCaption.includes('luxury') || lowercaseCaption.includes('gourmet')) {
      return 'luxury'
    }
    
    return 'adventure' // default category
  }

  // Function to determine post size for masonry layout
  const getPostSize = (index) => {
    const sizePattern = ['small', 'wide', 'medium', 'small', 'tall', 'wide', 'small', 'large', 'medium']
    return sizePattern[index % sizePattern.length]
  }

  // Function to fetch Instagram posts from Apify API
  const fetchInstagramPosts = async () => {
    try {
      setError(null)
      setIsLoading(true)

      // Check if API token is available
      if (!APIFY_API_TOKEN) {
        throw new Error('API token is not configured. Please check your environment variables.')
      }

      const response = await fetch(
        `https://api.apify.com/v2/datasets/${APIFY_DATASET_ID}/items?token=${APIFY_API_TOKEN}&format=json&clean=true`
      )

      if (!response.ok) {
        throw new Error(`API request failed: ${response.status} ${response.statusText}`)
      }

      const data = await response.json()
      console.log('Raw API Response:', data) // For debugging
      console.log('API Response length:', data?.length) // For debugging
      console.log('First post sample:', data?.[0]) // For debugging

      if (!Array.isArray(data) || data.length === 0) {
        console.log('No API data found')
        setInstagramPosts([])
        setIsLoading(false)
        return
      }

      // Transform API data to match our component structure
      const transformedPosts = data
        .filter(post => post.displayUrl || post.videoUrl) // Only posts with media
        .map((post, index) => {
          console.log(`Post ${index}:`, {
            id: post.id,
            displayUrl: post.displayUrl,
            videoUrl: post.videoUrl,
            caption: post.caption
          })
          
          // Create a better image URL with fallback options
          let imageUrl = post.displayUrl || post.videoUrl
          
          // If Instagram image fails, we'll use picsum as fallback
          const fallbackImageUrl = `https://picsum.photos/400/300?random=${post.id || index}`
          
          return {
            id: post.id || `post-${index}`,
            image: imageUrl || fallbackImageUrl,
            fallbackImage: fallbackImageUrl,
            videoUrl: post.videoUrl || null,
            caption: post.caption || 'Beautiful moment captured from @priveseychelles',
            likes: post.likesCount || Math.floor(Math.random() * 1000) + 100,
            comments: post.commentsCount || Math.floor(Math.random() * 50) + 5,
            date: post.timestamp || new Date().toISOString(),
            location: post.locationName || 'Seychelles',
            category: categorizePost(post.caption),
            size: getPostSize(index),
            url: post.url,
            isVideo: !!post.videoUrl,
            type: post.__typename || 'GraphImage'
          }
        })

      console.log('Transformed Posts:', transformedPosts) // For debugging
      console.log('Number of transformed posts:', transformedPosts.length) // For debugging
      console.log('Sample transformed post:', transformedPosts[0]) // For debugging
      
      setInstagramPosts(transformedPosts)
      setIsLoading(false)

    } catch (error) {
      console.error('Error fetching Instagram posts:', error)
      setError(error.message)
      setIsLoading(false)
      
      // Fallback to empty array if API fails
      setInstagramPosts([])
    }
  }

  // Function to refresh posts
  const refreshPosts = async () => {
    setRefreshing(true)
    await fetchInstagramPosts()
    setRefreshing(false)
  }

  const categories = [
    { id: 'all', label: 'All Posts', icon: <Grid3X3 className="gallery-category-icon" /> },
    { id: 'sailing', label: 'Sailing', icon: <Anchor className="gallery-category-icon" /> },
    { id: 'yacht', label: 'Yacht', icon: <Camera className="gallery-category-icon" /> },
    { id: 'adventure', label: 'Adventure', icon: <MapPin className="gallery-category-icon" /> },
    { id: 'luxury', label: 'Luxury', icon: <Filter className="gallery-category-icon" /> }
  ]
 
  useEffect(() => {
    fetchInstagramPosts()
  }, [])

  const filteredPosts = selectedCategory === 'all' 
    ? instagramPosts.filter(post => !failedImages.has(post.id))
    : instagramPosts.filter(post => post.category === selectedCategory && !failedImages.has(post.id))

  const openModal = (post, index) => {
    setSelectedImage(post)
    setCurrentImageIndex(index)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const navigateImage = (direction) => {
    const newIndex = direction === 'next' 
      ? (currentImageIndex + 1) % filteredPosts.length
      : (currentImageIndex - 1 + filteredPosts.length) % filteredPosts.length
    
    setCurrentImageIndex(newIndex)
    setSelectedImage(filteredPosts[newIndex])
  }

  const formatNumber = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k'
    }
    return num.toString()
  }

  // Function to handle successful image load
  const handleImageLoad = (postId) => {
    // Remove from failed images if it was there
    setFailedImages(prev => {
      const newSet = new Set(prev)
      newSet.delete(postId)
      return newSet
    })
  }

  // Function to handle image load failure
  const handleImageError = (postId) => {
    setFailedImages(prev => new Set([...prev, postId]))
  }

  if (isLoading) {
    return (
      <div className="gallery-loading">
        <div className="gallery-loader">
          <Loader2 className="gallery-loader-icon animate-spin" />
          <p>Loading Instagram posts from @priveseychelles...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="gallery-loading">
        <div className="gallery-loader">
          <Instagram className="gallery-loader-icon" />
          <p>Unable to load Instagram posts</p>
          <p className="gallery-error-message">{error}</p>
          <button 
            onClick={refreshPosts} 
            className="gallery-retry-btn"
            disabled={refreshing}
          >
            {refreshing ? (
              <>
                <Loader2 className="gallery-retry-icon animate-spin" />
                Refreshing...
              </>
            ) : (
              <>
                <RefreshCw className="gallery-retry-icon" />
                Try Again
              </>
            )}
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="gallery-page">
      {/* Header Section */}
      <section className="gallery-header">
        <div className="gallery-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="gallery-header-content"
          >
            <div className="gallery-header-text">
              <h1 className="gallery-title">
                Our <span className="gallery-text-gradient">Gallery</span>
              </h1>
              <p className="gallery-subtitle">
                Explore breathtaking moments from our luxury yacht charters through the pristine waters of Seychelles
              </p>
              <div className="gallery-stats">
                <div className="gallery-stat">
                  <Instagram className="gallery-stat-icon" />
                  <span>Follow our journey @priveseychelles</span>
                </div>
                <button 
                  onClick={refreshPosts}
                  className="gallery-refresh-btn"
                  disabled={refreshing}
                  title="Refresh Instagram posts"
                >
                  {refreshing ? (
                    <Loader2 className="gallery-refresh-icon animate-spin" />
                  ) : (
                    <RefreshCw className="gallery-refresh-icon" />
                  )}
                  <span>{refreshing ? 'Refreshing...' : 'Refresh'}</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter - Always show when not loading or in error state */}
      <section className="gallery-filters">
        <div className="gallery-container">
          <div className="gallery-filter-tabs">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`gallery-filter-tab ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.icon}
                <span>{category.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid or Empty State */}
      <section className="gallery-grid-section">
        <div className="gallery-container">
          {filteredPosts.length === 0 ? (
            /* Empty State */
            <div className="gallery-empty-state">
              <div className="gallery-empty-content">
                <Instagram className="gallery-empty-icon" />
                <h3 className="gallery-empty-title">No posts found</h3>
                <p className="gallery-empty-message">
                  {selectedCategory !== 'all' 
                    ? `No posts available in "${categories.find(cat => cat.id === selectedCategory)?.label}" category. Try selecting a different category above.`
                    : 'No posts available at the moment. Please try refreshing or check back later.'
                  }
                </p>
                <div className="gallery-action-buttons">
                  <button 
                    onClick={refreshPosts} 
                    className="gallery-retry-btn"
                    disabled={refreshing}
                  >
                    {refreshing ? (
                      <>
                        <Loader2 className="gallery-retry-icon animate-spin" />
                        Refreshing...
                      </>
                    ) : (
                      <>
                        <RefreshCw className="gallery-retry-icon" />
                        Refresh Posts
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* Gallery Grid */
            <motion.div 
              className="gallery-masonry"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  className={`gallery-item gallery-item-${post.size}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => openModal(post, index)}
                >
                  <div className="gallery-item-inner">
                    {post.isVideo ? (
                      <div className="gallery-video-container">
                        <img 
                          src={post.image} 
                          alt={post.caption}
                          className="gallery-item-image"                      onError={() => handleImageError(post.id)}
                          onLoad={() => handleImageLoad(post.id)}
                          referrerPolicy="no-referrer"
                        />
                        <div className="gallery-video-overlay">
                          <Play className="gallery-play-icon" />
                        </div>
                      </div>
                    ) : (                      <img 
                        src={post.image || post.displayUrl} 
                        alt={post.caption}
                        className="gallery-item-image"
                        onError={() => handleImageError(post.id)}
                        onLoad={() => handleImageLoad(post.id)}
                        referrerPolicy="no-referrer"
                      />
                    )}
                    <div className="gallery-item-overlay">
                      <div className="gallery-item-stats">
                        <div className="gallery-stat-item">
                          <Heart className="gallery-stat-icon-small" />
                          <span>{formatNumber(post.likes)}</span>
                        </div>
                        <div className="gallery-stat-item">
                          <MessageCircle className="gallery-stat-icon-small" />
                          <span>{post.comments}</span>
                        </div>
                      </div>
                      <div className="gallery-item-location">
                        <MapPin className="gallery-location-icon" />
                        <span>{post.location}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="gallery-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="gallery-modal"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="gallery-modal-close" onClick={closeModal}>
                <X className="gallery-close-icon" />
              </button>
              
              <div className="gallery-modal-content">
                <div className="gallery-modal-image-container">
                  {selectedImage.isVideo ? (
                    <video 
                      src={selectedImage.videoUrl}
                      poster={selectedImage.image}
                      controls
                      className="gallery-modal-video"
                      autoPlay
                      muted
                      loop
                    />
                  ) : (
                    <img 
                      src={selectedImage.image} 
                      alt={selectedImage.caption}
                      className="gallery-modal-image"
                      onError={(e) => {
                        console.error('Modal image failed to load:', selectedImage.image)
                        // Show a proper error message instead of random images
                        e.target.style.display = 'none'
                        e.target.parentElement.innerHTML = `
                          <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; color: #6b7280; background: #f9fafb;">
                            <svg width="64" height="64" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                            </svg>
                            <p style="margin: 16px 0 0 0; font-size: 16px;">Image unavailable</p>
                          </div>
                        `
                      }}
                      referrerPolicy="no-referrer"
                    />
                  )}
                  
                  {/* Navigation arrows */}
                  <button 
                    className="gallery-modal-nav gallery-modal-prev"
                    onClick={() => navigateImage('prev')}
                  >
                    <ChevronLeft className="gallery-nav-icon" />
                  </button>
                  <button 
                    className="gallery-modal-nav gallery-modal-next"
                    onClick={() => navigateImage('next')}
                  >
                    <ChevronRight className="gallery-nav-icon" />
                  </button>
                </div>
                
                <div className="gallery-modal-info">
                  <div className="gallery-modal-header">
                    <div className="gallery-modal-profile">
                      <div className="gallery-profile-avatar">
                        <Anchor className="gallery-profile-icon" />
                      </div>
                      <div className="gallery-profile-info">
                        <h4>Prive Seychelles</h4>
                        <span>{selectedImage.location}</span>
                      </div>
                    </div>
                    <a 
                      href={selectedImage.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="gallery-modal-external"
                    >
                      <ExternalLink className="gallery-external-icon" />
                    </a>
                  </div>
                  
                  <div className="gallery-modal-caption">
                    <p>{selectedImage.caption}</p>
                  </div>
                  
                  <div className="gallery-modal-stats">
                    <div className="gallery-modal-stat">
                      <Heart className="gallery-modal-stat-icon" />
                      <span>{formatNumber(selectedImage.likes)} likes</span>
                    </div>
                    <div className="gallery-modal-stat">
                      <MessageCircle className="gallery-modal-stat-icon" />
                      <span>{selectedImage.comments} comments</span>
                    </div>
                    <div className="gallery-modal-stat">
                      <Calendar className="gallery-modal-stat-icon" />
                      <span>{new Date(selectedImage.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  
                  <div className="gallery-modal-actions">
                    <button className="gallery-action-btn gallery-action-like">
                      <Heart className="gallery-action-icon" />
                      <span>Like</span>
                    </button>
                    <button className="gallery-action-btn gallery-action-share">
                      <Share className="gallery-action-icon" />
                      <span>Share</span>
                    </button>
                    <button className="gallery-action-btn gallery-action-download">
                      <Download className="gallery-action-icon" />
                      <span>Save</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Gallery
