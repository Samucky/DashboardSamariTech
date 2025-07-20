import React from 'react'

const Hero = () => {
  const scrollToServices = () => {
    document.getElementById('services').scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements - se actualiza dinámicamente */}
      <div id="hero-background" className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 transition-all duration-500"></div>
      
      {/* Floating Elements - REDUCIDOS */}
      <div className="absolute top-20 left-20 w-16 h-16 bg-blue-500/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-20 h-20 bg-purple-500/10 rounded-full blur-xl animate-float" style={{animationDelay: '3s'}}></div>
      
      {/* Content - Layout Simétrico */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Columna Izquierda - Texto */}
          <div className="text-left animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
              <span className="gradient-text animate-gradient">
                Samari Tech
              </span>
              <br />
              <span id="hero-subtitle" className="text-white transition-all duration-500">
                Soluciones Tecnológicas
              </span>
            </h1>
            
            <p id="hero-description" className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-300 max-w-xl animate-slide-up transition-all duration-500" style={{animationDelay: '0.2s'}}>
              Desarrollo de software, mantenimiento de equipos y soluciones tecnológicas integrales
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-slide-up" style={{animationDelay: '0.4s'}}>
              <button onClick={scrollToServices} className="btn-primary hover:animate-pulse">
                Conoce Nuestros Servicios
              </button>
              <button onClick={scrollToContact} id="secondary-button" className="px-6 py-3 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-105">
                Solicitar Cotización
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 animate-slide-up" style={{animationDelay: '0.6s'}}>
              <div className="glass-effect p-4 rounded-xl hover:animate-bounce">
                <div className="text-2xl font-bold text-blue-400 mb-1">30+</div>
                <div id="stats-text" className="text-gray-300 text-sm transition-all duration-500">Proyectos</div>
              </div>
              <div className="glass-effect p-4 rounded-xl hover:animate-bounce" style={{animationDelay: '0.1s'}}>
                <div className="text-2xl font-bold text-purple-400 mb-1">98%</div>
                <div id="stats-text-2" className="text-gray-300 text-sm transition-all duration-500">Satisfacción</div>
              </div>
              <div className="glass-effect p-4 rounded-xl hover:animate-bounce" style={{animationDelay: '0.2s'}}>
                <div className="text-2xl font-bold text-pink-400 mb-1">24/7</div>
                <div id="stats-text-3" className="text-gray-300 text-sm transition-all duration-500">Soporte</div>
              </div>
            </div>
          </div>
          
          {/* Columna Derecha - Logo */}
          <div className="flex justify-center lg:justify-end animate-fade-in" style={{animationDelay: '0.3s'}}>
            <div className="relative">
              {/* Logo Principal */}
              <div className="glass-effect p-8 rounded-3xl relative overflow-hidden group hover:scale-105 transition-all duration-500">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                
                {/* Logo SVG */}
                <div className="relative z-10 text-center">
                  <div className="w-48 h-48 mx-auto mb-6 relative">
                    {/* Círculo exterior animado */}
                    <div className="absolute inset-0 border-4 border-blue-500/30 rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
                    <div className="absolute inset-2 border-4 border-purple-500/30 rounded-full animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}}></div>
                    
                    {/* Logo central */}
                    <div className="absolute inset-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
                      <div className="text-white text-6xl font-bold">S</div>
                    </div>
                    
                    {/* Elementos flotantes del logo */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-400 rounded-full animate-bounce"></div>
                    <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
                    <div className="absolute top-1/2 -right-4 w-3 h-3 bg-pink-400 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
                  </div>
                  
                  <h3 className="text-2xl font-bold gradient-text mb-2">SAMARI TECH</h3>
                  <p className="text-gray-300 text-sm">Soluciones Tecnológicas Integrales</p>
                </div>
              </div>
              
              {/* Elementos decorativos del logo */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500/20 rounded-full blur-sm animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-purple-500/20 rounded-full blur-sm animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
        
        {/* Elementos decorativos mínimos - SOLO 2 CÓDIGOS */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Python - Esquina superior izquierda */}

          
        </div>
      </div>
    </section>
  )
}

export default Hero 