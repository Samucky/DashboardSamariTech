import React from 'react'
import Hero from './components/Hero'
import Services from './components/Services'
import Contact from './components/Contact'
import WhatsAppButton from './components/WhatsAppButton'
import ThemeToggle from './components/ThemeToggle'

function App() {
  return (
    <div className="min-h-screen">
      {/* Theme Toggle Button */}
      <ThemeToggle />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Services Section */}
      <Services />
      
      {/* Contact Section */}
      <Contact />
      
      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  )
}

export default App 