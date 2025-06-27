import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Ship } from 'lucide-react';
import '../css/LoadingScreen.css';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const loadingTexts = [
    "Preparing your yacht experience...",
    "Setting sail for luxury...",
    "Loading pristine waters...",
    "Charting your course...",
    "Welcome aboard Trident Marine"
  ];

  useEffect(() => {
    // Text rotation - synchronized with animation
    const textInterval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % loadingTexts.length);
    }, 800);

    // Progress simulation - 4 seconds total to allow animations to finish
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          clearInterval(textInterval);
          setIsComplete(true);
          setTimeout(() => {
            onComplete();
          }, 800); // Increased delay to let exit animation complete
          return 100;
        }
        return prev + 2.5; // Slower increment for smoother animation
      });
    }, 100); // 100ms intervals for smoother progress

    return () => {
      clearInterval(textInterval);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.1,
            transition: { duration: 0.8, ease: "easeInOut" }
          }}
        >
          {/* Animated Background */}
          <div className="loading-background">
            <div className="loading-wave loading-wave-1"></div>
            <div className="loading-wave loading-wave-2"></div>
            <div className="loading-wave loading-wave-3"></div>
            <div className="loading-gradient-orb loading-orb-1"></div>
            <div className="loading-gradient-orb loading-orb-2"></div>
            <div className="loading-gradient-orb loading-orb-3"></div>
          </div>

          {/* Main Content */}
          <div className="loading-content">
            {/* Logo Animation */}
            <motion.div
              className="loading-logo-container"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                duration: 1.2,
                ease: "easeOut",
                delay: 0.2
              }}
            >
              <motion.div
                className="loading-logo-inner"
                animate={{
                  y: [0, -20, 0],
                  rotateY: [0, 360],
                }}
                transition={{
                  y: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  },
                  rotateY: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear"
                  }
                }}
              >
                <div className="loading-logo-bg">
                  <Ship size={48} color="#1e40af" />
                </div>
              </motion.div>
              
              {/* Floating particles around logo */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="loading-particle"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                    x: [0, Math.cos(i * 60 * Math.PI / 180) * 100],
                    y: [0, Math.sin(i * 60 * Math.PI / 180) * 100],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </motion.div>

            {/* Brand Name */}
            <motion.div
              className="loading-brand"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h1 className="loading-brand-name">
                <span className="loading-brand-part">Trident</span>
                <span className="loading-brand-part loading-brand-accent"> Marine</span>
              </h1>
              <motion.div
                className="loading-brand-line"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 1 }}
              />
            </motion.div>

            {/* Loading Text */}
            <motion.div
              className="loading-text-container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentText}
                  className="loading-text"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  {loadingTexts[currentText]}
                </motion.p>
              </AnimatePresence>
            </motion.div>

            {/* Progress Bar */}
            <motion.div
              className="loading-progress-container"
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "300px" }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <div className="loading-progress-track">
                <motion.div
                  className="loading-progress-fill"
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
                <motion.div
                  className="loading-progress-glow"
                  style={{ left: `${progress}%` }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </div>
              <motion.span
                className="loading-progress-text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
              >
                {progress}%
              </motion.span>
            </motion.div>

            {/* Loading Dots */}
            <motion.div
              className="loading-dots"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
            >
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="loading-dot"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </motion.div>
          </div>

          {/* Bottom Tagline */}
          <motion.div
            className="loading-tagline"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
          >
            <p>Luxury Yacht Charter Experience in Seychelles</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
