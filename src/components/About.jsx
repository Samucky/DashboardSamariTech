import React from 'react'

const About = () => {
  const skills = [
    "Reparación de Electrónicos",
    "Mantenimiento de Sistemas",
    "Instalación de Equipos",
    "Diagnóstico Técnico",
    "Soporte Remoto",
    "Consultoría Especializada"
  ]

  const certifications = [
    "Certificación en Electrónica Industrial",
    "Técnico en Sistemas Automatizados",
    "Especialista en Mantenimiento Preventivo",
    "Certificación en Seguridad Eléctrica"
  ]

  return (
    <section id="sobre-mi" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image/Content */}
          <div className="relative">
            <div className="glass-effect rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <h2 className="text-5xl md:text-6xl font-bold mb-8">
                  Sobre <span className="gradient-text">Mí</span>
                </h2>
                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="btn-primary">
                    Descargar CV
                  </button>
                  <button className="px-6 py-3 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
                    Ver Portafolio
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Skills & Certifications */}
          <div className="space-y-8">
            {/* Skills */}
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-3xl font-bold mb-6 gradient-text">Habilidades Técnicas</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-3xl font-bold mb-6 gradient-text">Certificaciones</h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      ✓
                    </div>
                    <div>
                      <p className="text-gray-300 font-medium">{cert}</p>
                      <p className="text-gray-500 text-sm">Certificación oficial</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-effect rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold gradient-text mb-2">10+</div>
                <div className="text-gray-400 text-sm">Años de Experiencia</div>
              </div>
              <div className="glass-effect rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold gradient-text mb-2">500+</div>
                <div className="text-gray-400 text-sm">Proyectos Completados</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-20">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              Mis <span className="gradient-text">Valores</span>
            </h3>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-effect rounded-2xl p-8 text-center">
              <div className="text-5xl mb-6">🎯</div>
              <h4 className="text-2xl font-bold mb-4 gradient-text">Excelencia</h4>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="glass-effect rounded-2xl p-8 text-center">
              <div className="text-5xl mb-6">🤝</div>
              <h4 className="text-2xl font-bold mb-4 gradient-text">Confianza</h4>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="glass-effect rounded-2xl p-8 text-center">
              <div className="text-5xl mb-6">⚡</div>
              <h4 className="text-2xl font-bold mb-4 gradient-text">Innovación</h4>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 