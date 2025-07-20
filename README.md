# Samari Tech - Dashboard

Sitio web profesional para servicios tecnológicos con formulario de contacto funcional.

## 🚀 Deployment en Render (Gratuito)

### Pasos para subir a Render:

1. **Crear cuenta en Render:**
   - Ve a [render.com](https://render.com)
   - Crea una cuenta gratuita
   - Conecta tu GitHub

2. **Subir código a GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/TU_REPO.git
   git push -u origin main
   ```

3. **Crear servicio en Render:**
   - Clic en "New +" → "Web Service"
   - Conecta tu repositorio de GitHub
   - Configuración automática:
     - **Name:** samari-tech-dashboard
     - **Environment:** Node
     - **Build Command:** `npm install && npm run build`
     - **Start Command:** `npm start`

4. **Configurar variables de entorno:**
   - En tu servicio de Render, ve a "Environment"
   - Agrega estas variables:
     ```
     NODE_ENV = production
     GMAIL_USER = samuchim15@gmail.com
     GMAIL_PASS = uago ksxq xddu appm
     ```

5. **Deploy:**
   - Clic en "Create Web Service"
   - Render construirá y desplegará automáticamente
   - Tu URL será: `https://tu-app.onrender.com`

## 🛠️ Desarrollo Local

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Ejecutar servidor backend
npm run server

# Construir para producción
npm run build
```

## 📧 Configuración de Email

El formulario de contacto usa Gmail con:
- **Cuenta:** samuchim15@gmail.com
- **Contraseña de aplicación:** uago ksxq xddu appm

## 🌐 Características

- ✅ Diseño responsive y moderno
- ✅ Tema oscuro/claro
- ✅ Formulario de contacto funcional
- ✅ Animaciones suaves
- ✅ SEO optimizado
- ✅ Envío automático de emails

## 🔧 Tecnologías

- React 18
- Vite
- TailwindCSS
- Node.js
- Express
- Nodemailer
- SweetAlert2

## 📱 Responsive

- Mobile First
- Tablet optimizado
- Desktop perfecto
- Navegación suave

## 🎨 Temas

- Modo oscuro por defecto
- Toggle de tema
- Colores profesionales
- Gradientes modernos 