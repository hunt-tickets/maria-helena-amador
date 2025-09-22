# María Helena Amador - Landing Page

Landing page para el evento **María Helena Amador** en el Colegio Gimnasio Moderno.

## 🎨 Diseño

- **Estilo**: Brutalism minimalista con elementos pop retro
- **Tipografía**: Steelfish para títulos, Arial para texto
- **Colores**: Azul (#0066FF), Verde Lima (#66FF00), Amarillo (#FFCC00), Rosa (#FF6699)
- **Principio**: Simplicidad que complementa el brutalism visual

## 🛠️ Tecnología

- **Framework**: Next.js 14 con App Router
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Despliegue**: Optimizado para Vercel/Netlify

## 📁 Estructura

```
src/
├── app/
│   ├── page.tsx              # Hero page
│   ├── menu/page.tsx         # Menú principal
│   ├── evento/page.tsx       # Información del evento
│   ├── horarios/page.tsx     # Cronograma
│   ├── comidas/page.tsx      # Gastronomía
│   └── ubicacion/page.tsx    # Ubicación y logística
├── components/
│   ├── ui/
│   │   ├── Button.tsx        # Botones brutalist
│   │   └── Card.tsx          # Cards con sombras
│   └── layout/
│       └── Layout.tsx        # Layout base
└── globals.css               # Estilos globales
```

## 🚀 Desarrollo

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Build para producción
npm run build

# Ejecutar producción
npm start
```

## 📱 Características

- ✅ Diseño responsive mobile-first
- ✅ Animaciones sutiles CSS
- ✅ Navegación intuitiva
- ✅ Integración con Hunt Tickets
- ✅ SEO optimizado
- ✅ Performance optimizada

## 🎫 Integración Hunt Tickets

Los enlaces a Hunt Tickets están configurados para:
- Botón principal en Hero page
- Enlaces en cada página de contenido
- URL: `https://hunttickets.com/maria-helena-amador`

## 📝 Próximos Pasos

1. **Añadir imagen de fondo para Hero**: Agregar `hero-bg.jpg` en `/public/`
2. **Revisar contenido**: Actualizar textos con información real del evento
3. **Testing**: Verificar funcionalidad en diferentes dispositivos
4. **Deploy**: Configurar dominio y desplegar

## 🎯 Hunt Tickets

Desarrollado para **Hunt Tickets** - Plataforma de boletería digital.
