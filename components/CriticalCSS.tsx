"use client"

import { useEffect } from 'react'

export function CriticalCSS() {
  useEffect(() => {
    // Load non-critical CSS after page load
    const loadDeferredStyles = () => {
      // Use programmatic loading rather than manipulating noscript content
      const linkElement = document.createElement('link')
      linkElement.rel = 'stylesheet'
      linkElement.href = '/css/non-critical.css'
      document.head.appendChild(linkElement)
    }

    // Load deferred styles after initial render
    requestAnimationFrame(() => {
      loadDeferredStyles()
    })
  }, [])

  return (
    <>
      {/* Critical CSS - inline for above-the-fold content */}
      <style jsx>{`
        /* Critical styles for above-the-fold content */
        body {
          font-family: var(--font-inter), system-ui, sans-serif;
          background: #000;
          color: #fff;
          margin: 0;
        }
        
        .hero-section {
          height: 100vh;
          position: relative;
          overflow: hidden;
        }
        
        .navbar {
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 50;
          backdrop-filter: blur(12px);
        }
        
        /* Critical layout styles */
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }
        
        /* Critical button styles */
        .btn-primary {
          background: linear-gradient(to right, #f59e0b, #f97316);
          color: #111827;
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem;
          border: none;
          font-weight: 600;
          cursor: pointer;
        }
      `}</style>
    </>
  )
} 