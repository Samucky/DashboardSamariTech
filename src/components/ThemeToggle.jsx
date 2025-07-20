import React, { useState, useEffect } from 'react'

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    // Verificar el tema guardado en localStorage
    const savedTheme = localStorage.getItem('theme')
    console.log('Tema guardado:', savedTheme)
    
    if (savedTheme) {
      setIsDark(savedTheme === 'dark')
      applyTheme(savedTheme)
    } else {
      // Por defecto, modo oscuro
      setIsDark(true)
      applyTheme('dark')
      localStorage.setItem('theme', 'dark')
    }
  }, [])

  const applyTheme = (theme) => {
    // Cambiar fondo del body
    if (theme === 'dark') {
      document.body.style.background = 'linear-gradient(to bottom right, #0f172a, #581c87, #0f172a)'
      document.body.style.color = 'white'
      document.body.classList.remove('light-mode')
      
      // Cambiar fondo del Hero
      const heroBg = document.getElementById('hero-background')
      if (heroBg) {
        heroBg.className = 'absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 transition-all duration-500'
      }
      
      // Cambiar colores del texto
      const elements = ['hero-subtitle', 'hero-description', 'secondary-button', 'stats-text', 'stats-text-2', 'stats-text-3']
      elements.forEach(id => {
        const element = document.getElementById(id)
        if (element) {
          if (id === 'hero-subtitle') {
            element.className = 'text-white transition-all duration-500'
          } else if (id === 'hero-description') {
            element.className = 'text-lg md:text-xl lg:text-2xl mb-8 text-gray-300 max-w-xl animate-slide-up transition-all duration-500'
          } else if (id === 'secondary-button') {
            element.className = 'px-6 py-3 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-105'
          } else {
            element.className = 'text-gray-300 text-sm transition-all duration-500'
          }
        }
      })
    } else {
      document.body.style.background = 'linear-gradient(to bottom right, #f8fafc, #e2e8f0, #f1f5f9)'
      document.body.style.color = '#1e293b'
      document.body.classList.add('light-mode')
      
      // Cambiar fondo del Hero
      const heroBg = document.getElementById('hero-background')
      if (heroBg) {
        heroBg.className = 'absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 transition-all duration-500'
      }
      
      // Cambiar colores del texto para modo claro con gradientes
      const elements = ['hero-subtitle', 'hero-description', 'secondary-button', 'stats-text', 'stats-text-2', 'stats-text-3']
      elements.forEach(id => {
        const element = document.getElementById(id)
        if (element) {
          if (id === 'hero-subtitle') {
            element.className = 'text-slate-800 transition-all duration-500'
          } else if (id === 'hero-description') {
            element.className = 'text-lg md:text-xl lg:text-2xl mb-8 text-slate-700 max-w-xl animate-slide-up transition-all duration-500'
          } else if (id === 'secondary-button') {
            element.className = 'px-6 py-3 border-2 border-slate-600 text-slate-800 font-semibold rounded-lg hover:bg-slate-800/10 transition-all duration-300 hover:scale-105'
          } else {
            element.className = 'text-slate-700 text-sm transition-all duration-500'
          }
        }
      })
    }
  }

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark'
    console.log('Cambiando a tema:', newTheme)
    
    setIsDark(!isDark)
    applyTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 group hover:scale-110 hover:rotate-12"
      title={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
    >
      {isDark ? (
        // Icono de sol para modo oscuro
        <svg 
          className="w-6 h-6 text-yellow-400 group-hover:rotate-90 transition-all duration-500 group-hover:scale-110" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"/>
        </svg>
      ) : (
        // Icono de luna para modo claro
        <svg 
          className="w-6 h-6 text-slate-700 group-hover:rotate-90 transition-all duration-500 group-hover:scale-110" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"/>
        </svg>
      )}
    </button>
  )
}

export default ThemeToggle 