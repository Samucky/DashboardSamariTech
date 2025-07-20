 // Configuración de EmailJS
// Sigue estos pasos para configurar EmailJS:

// 1. Ve a https://www.emailjs.com/ y crea una cuenta gratuita
// 2. Conecta tu cuenta de Gmail (con verificación de dos pasos)
// 3. Crea un Email Service (Gmail)
// 4. Crea un Email Template
// 5. Obtén tus credenciales y reemplázalas abajo

export const emailjsConfig = {
  // Service ID - Lo obtienes al crear un Email Service en EmailJS
  serviceID: 'tu_service_id', // Ejemplo: 'service_abc123'
  
  // Template ID - Lo obtienes al crear un Email Template en EmailJS
  templateID: 'tu_template_id', // Ejemplo: 'template_xyz789'
  
  // Public Key - Lo obtienes en Account > API Keys en EmailJS
  publicKey: 'tu_public_key', // Ejemplo: 'user_def456'
  
  // Email de destino (tu cuenta secundaria)
  toEmail: 'samuchim15@gmail.com'
}

// Template de Email recomendado para EmailJS:
/*
Asunto: Nuevo contacto desde Samari Tech - {{service}}

Hola,

Has recibido un nuevo mensaje de contacto desde tu sitio web Samari Tech:

Nombre: {{from_name}}
Email: {{from_email}}
Teléfono: {{from_phone}}
Servicio de interés: {{service}}

Mensaje:
{{message}}

---
Este mensaje fue enviado desde el formulario de contacto de Samari Tech.
Para responder, simplemente responde a este email.
*/

// INSTRUCCIONES ESPECÍFICAS PARA TU CUENTA:
// 1. En EmailJS, conecta la cuenta: samuchim15@gmail.com
// 2. Usa la contraseña de aplicación: ksxq xddu appm
// 3. Los emails se enviarán DESDE samuchim15@gmail.com HACIA samuchim15@gmail.com
// 4. También puedes configurar que lleguen a samuchim10@gmail.com si lo prefieres 