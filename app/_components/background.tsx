'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Background() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    // Adiciona o listener de scroll
    window.addEventListener('scroll', handleScroll)

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <Image 
        src="/hero.png" 
        alt="Hero" 
        fill 
        className="object-cover transition-transform duration-75 ease-out mask-alpha mask-l-from-black mask-l-from-50%"
        style={{
          transform: `translateY(${scrollY * 0.5}px) scale(1.1)`,
        }}
        priority
      />
      {/* Overlay para melhorar a legibilidade do texto */}
      <div className="absolute inset-0 bg-white/20" />
    </div>
  )
}
