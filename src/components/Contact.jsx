import React, { useState } from 'react'
import Swal from 'sweetalert2'

const Contact = () => {
  // Estado del formulario
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    servicio: '',
    mensaje: ''
  })

  // Estado de carga
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Función para manejar cambios en los inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // Función para enviar el formulario
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // URL del backend (desarrollo o producción)
      const apiUrl = process.env.NODE_ENV === 'production' 
        ? '/api/send-email' 
        : 'http://localhost:5000/api/send-email'

      // Enviar email usando el backend
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      const result = await response.json()

      if (result.success) {
        // Mostrar SweetAlert de éxito
        await Swal.fire({
          icon: 'success',
          title: '¡Mensaje Enviado!',
          text: 'Gracias por contactarnos. Te responderemos pronto.',
          confirmButtonText: 'Perfecto',
          confirmButtonColor: '#3b82f6',
          background: '#1e293b',
          color: '#ffffff',
          customClass: {
            popup: 'glass-effect',
            title: 'gradient-text',
            confirmButton: 'btn-primary'
          }
        })
        
        // Limpiar formulario
        setFormData({
          nombre: '',
          email: '',
          telefono: '',
          servicio: '',
          mensaje: ''
        })
      } else {
        throw new Error(result.message || 'Error al enviar el mensaje')
      }

    } catch (error) {
      console.error('Error:', error)
      
      // Mostrar SweetAlert de error
      await Swal.fire({
        icon: 'error',
        title: 'Error al Enviar',
        text: 'Hubo un problema al enviar tu mensaje. Por favor, intenta de nuevo.',
        confirmButtonText: 'Entendido',
        confirmButtonColor: '#ef4444',
        background: '#1e293b',
        color: '#ffffff',
        customClass: {
          popup: 'glass-effect',
          title: 'gradient-text',
          confirmButton: 'btn-primary'
        }
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: (
        <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
      ),
      title: "Ubicación",
      value: "Merida Yucatan, Mexico",
      link: "https://maps.app.goo.gl/TZMX8dJ3EtLMmfJy9"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
        </svg>
      ),
      title: "Horarios",
      value: "Lun - Vie: 9:00 AM - 6:00 PM",
      link: "https://wa.me/529996139500"
    }
  ]

  const features = [
    {
      icon: (
        <svg className="w-8 h-8 text-green-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13 2.05v3.03c3.39.49 6 3.39 6 6.92 0 .9-.18 1.75-.5 2.54l2.6 1.53c.56-1.24.9-2.62.9-4.07 0-5.18-3.95-9.45-9-9.95zM12 19c-3.87 0-7-3.13-7-7 0-3.53 2.61-6.43 6-6.92V2.05c-5.05.5-9 4.76-9 9.95 0 5.52 4.47 10 9.99 10 3.31 0 6.24-1.61 8.06-4.09l-2.6-1.53C16.17 17.98 14.21 19 12 19z"/>
        </svg>
      ),
      title: "Desarrollo Rápido",
      description: "Entregas en tiempo récord"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      title: "Calidad Premium",
      description: "Código limpio y escalable"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-red-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
        </svg>
      ),
      title: "Soporte 24/7",
      description: "Atención cuando lo necesites"
    }
  ]

  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Contacto</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            ¿Necesitas servicios tecnológicos? ¡Conversemos! Estamos aquí para ayudarte
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Columna Izquierda - Información y Características */}
          <div className="space-y-8">
            {/* Información de Contacto */}
            <div className="glass-effect rounded-3xl p-8">
              <h3 className="text-3xl font-bold mb-8 gradient-text">Información de Contacto</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="flex-shrink-0">{info.icon}</div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">{info.title}</h4>
                      <a 
                        href={info.link} 
                        className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Características Destacadas */}
            <div className="glass-effect rounded-3xl p-8">
              <h3 className="text-3xl font-bold mb-8 gradient-text">¿Por qué elegirnos?</h3>
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4 group hover:scale-105 transition-transform duration-300">
                    <div className="flex-shrink-0 group-hover:animate-bounce">{feature.icon}</div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
                      <p className="text-gray-400">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Estadísticas */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-effect rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold gradient-text mb-2">30+</div>
                <div className="text-gray-400 text-sm">Proyectos Exitosos</div>
              </div>
              <div className="glass-effect rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold gradient-text mb-2">98%</div>
                <div className="text-gray-400 text-sm">Clientes Satisfechos</div>
              </div>
            </div>

            {/* Elementos Decorativos */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500/20 rounded-full blur-sm animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-purple-500/20 rounded-full blur-sm animate-pulse" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-1/2 -left-2 w-4 h-4 bg-pink-500/20 rounded-full blur-sm animate-pulse" style={{animationDelay: '2s'}}></div>
            </div>
          </div>

          {/* Columna Derecha - Formulario */}
          <div className="glass-effect rounded-3xl p-8">
            <h3 className="text-3xl font-bold mb-8 gradient-text">Envíame un Mensaje</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-medium mb-2 transition-colors duration-300">Nombre</label>
                  <input 
                    type="text" 
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                    placeholder="Tu nombre completo"
                  />
                </div>
                <div>
                  <label className="block font-medium mb-2 transition-colors duration-300">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block font-medium mb-2 transition-colors duration-300">Teléfono</label>
                <input 
                  type="tel" 
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                  placeholder="+52 999 123 4567"
                />
              </div>
              
              <div>
                <label className="block font-medium mb-2 transition-colors duration-300">Servicio de Interés</label>
                <div className="relative">
                  <select 
                    name="servicio"
                    value={formData.servicio}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-blue-500 transition-colors duration-300 appearance-none cursor-pointer"
                  >
                    <option value="">Selecciona un servicio</option>
                    <option value="Apps Móviles">Apps Móviles</option>
                    <option value="Aplicaciones Web">Aplicaciones Web</option>
                    <option value="E-commerce">E-commerce</option>
                    <option value="Puntos de Venta">Puntos de Venta</option>
                    <option value="Mantenimiento de Equipos">Mantenimiento de Equipos</option>
                    <option value="Armado de PCs">Armado de PCs</option>
                  </select>
                  {/* Ícono personalizado del dropdown */}
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div>
                <label className="block font-medium mb-2 transition-colors duration-300">Mensaje</label>
                <textarea 
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-300 resize-none"
                  placeholder="Cuéntame sobre tu proyecto o necesidad tecnológica..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`btn-primary w-full text-lg py-4 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
              </button>
            </form>
          </div>
        </div>

        {/* Sección Adicional */}
        <div className="mt-16">
          <div className="glass-effect rounded-3xl p-8 text-center">
            <h3 className="text-3xl font-bold mb-6 gradient-text">Nuestro Enfoque</h3>
            <p className="text-xl text-gray-400 mb-8">
              Trabajamos con metodologías ágiles y técnicas probadas para entregar soluciones de alta calidad
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <svg className="w-12 h-12 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-2 gradient-text">Soluciones Integrales</h4>
                <p className="text-gray-400">Desde desarrollo de software hasta mantenimiento de hardware</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <svg className="w-12 h-12 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-2 gradient-text">Calidad Garantizada</h4>
                <p className="text-gray-400">Trabajo profesional con garantía en todos nuestros servicios</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <svg className="w-12 h-12 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-2 gradient-text">Atención Personalizada</h4>
                <p className="text-gray-400">Cada cliente recibe atención especializada según sus necesidades</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact 