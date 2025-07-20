const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Servir archivos estáticos de React en producción
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'dist')));
}

// Configuración del transporter de Gmail
const transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER || 'samuchim15@gmail.com',
    pass: process.env.GMAIL_PASS || 'uago ksxq xddu appm' // Contraseña de aplicación
  }
});

// Ruta para enviar emails
app.post('/api/send-email', async (req, res) => {
  try {
    const { nombre, email, telefono, servicio, mensaje } = req.body;

    // Configuración del email
    const mailOptions = {
      from: process.env.GMAIL_USER || 'samuchim15@gmail.com',
      to: process.env.GMAIL_USER || 'samuchim15@gmail.com', // También puedes cambiar a samuchim10@gmail.com si quieres
      subject: `Nuevo contacto desde Samari Tech - ${servicio}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3b82f6;">Nuevo Mensaje de Contacto</h2>
          <p>Has recibido un nuevo mensaje de contacto desde tu sitio web <strong>Samari Tech</strong>:</p>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e293b; margin-top: 0;">Información del Cliente:</h3>
            <p><strong>Nombre:</strong> ${nombre}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Teléfono:</strong> ${telefono || 'No proporcionado'}</p>
            <p><strong>Servicio de interés:</strong> ${servicio}</p>
          </div>
          
          <div style="background-color: #e0f2fe; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e293b; margin-top: 0;">Mensaje:</h3>
            <p style="white-space: pre-wrap;">${mensaje}</p>
          </div>
          
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
          <p style="color: #6b7280; font-size: 14px;">
            Este mensaje fue enviado desde el formulario de contacto de Samari Tech.<br>
            Para responder, simplemente responde a este email.
          </p>
        </div>
      `
    };

    // Enviar email
    const info = await transporter.sendMail(mailOptions);
    
    console.log('Email enviado:', info.messageId);
    res.status(200).json({ 
      success: true, 
      message: 'Email enviado correctamente',
      messageId: info.messageId 
    });

  } catch (error) {
    console.error('Error al enviar email:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error al enviar el email',
      error: error.message 
    });
  }
});

// Ruta de prueba
app.get('/api/test', (req, res) => {
  res.json({ message: 'Servidor funcionando correctamente' });
});

// Servir React en todas las rutas no-API en producción
if (process.env.NODE_ENV === 'production') {
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });
}

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
  console.log(`API disponible en: http://localhost:${PORT}/api`);
  console.log(`Modo: ${process.env.NODE_ENV || 'development'}`);
}); 