'use client'

import React from 'react'
import "../../styles/Home.css"

const Banner = () => {
  return (
    <section className='banner'>
        <video 
            className="banner-video" 
            autoPlay 
            loop 
            muted 
            playsInline
            // Ensure your poster image is also in public/Videos/ or similar
            poster="/Videos/banner-poster.jpg" 
        >
            {/* Paths start with /Videos/ because 'public' is the root */}
            <source src="/Videos/banner-video.webm" type="video/webm" />
            <source src="/Videos/banner-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>

        <div className="banner-overlay"></div>

        <div className="banner-container px-10 py-10">
            <div className="banner-content">
                <h1>Welcome to the Future</h1>
                <p>Experience smooth performance.</p>
            </div>
        </div>
    </section>
  )
}

export default Banner