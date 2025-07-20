import React from 'react'

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Apps Móviles",
      description: "Desarrollo de aplicaciones móviles nativas e híbridas para iOS y Android con las mejores tecnologías.",
      icon: (
        <svg className="w-16 h-16 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17 2H7c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-5 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm5-4H7V4h10v12z"/>
        </svg>
      ),
      features: ["iOS y Android", "UI/UX moderna", "Optimización"]
    },
    {
      id: 2,
      title: "Aplicaciones Web",
      description: "Sitios web responsivos y aplicaciones web escalables con funcionalidades avanzadas.",
      icon: (
        <svg className="w-16 h-16 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4 6h16v10H4V6zm0-2h16c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm2 12h12v2H6v-2z"/>
        </svg>
      ),
      features: ["Diseño responsivo", "SEO optimizado", "Escalabilidad"]
    },
    {
      id: 3,
      title: "E-commerce",
      description: "Tiendas en línea completas con sistemas de pago seguros y gestión de inventario.",
      icon: (
        <svg className="w-16 h-16 text-green-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
        </svg>
      ),
      features: ["Pagos seguros", "Gestión de inventario", "Analytics"]
    },
    {
      id: 4,
      title: "Puntos de Venta",
      description: "Sistemas POS modernos para gestionar ventas, inventario y reportes en tiempo real.",
      icon: (
        <svg className="w-16 h-16 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
        </svg>
      ),
      features: ["Ventas en tiempo real", "Gestión de inventario", "Reportes"]
    },
    {
      id: 5,
      title: "Mantenimiento de Equipos",
      description: "Servicio completo de mantenimiento preventivo y correctivo para equipos de cómputo.",
      icon: (
        <svg className="w-16 h-16 text-red-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
        </svg>
      ),
      features: ["Limpieza de hardware", "Optimización", "Reparación"]
    },
    {
      id: 6,
      title: "Armado de PCs",
      description: "Computadoras personalizadas según tus necesidades, desde básicas hasta de alto rendimiento.",
      icon: (
        <svg className="w-16 h-16 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7l-2 3v1h8v-1l-2-3h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 12H3V4h18v10z"/>
        </svg>
      ),
      features: ["Configuración personalizada", "Componentes de calidad", "Pruebas"]
    }
  ]

  return (
    <section id="services" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Servicios</span> Tecnológicos
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Soluciones tecnológicas integrales desde desarrollo de software hasta mantenimiento de equipos
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="glass-effect rounded-2xl p-8 card-hover group">
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 gradient-text">{service.title}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services 