# VerdeModa - Sitio Web de Ropa Sustentable

Un sitio web responsivo para una tienda de ropa ecológica, desarrollado con metodología BEM y arquitectura CSS modular.

## 🌟 Características Principales

### 🎨 Diseño y UX
- **Diseño responsivo** con enfoque mobile-first
- **Interfaz moderna** con esquema de colores naturales
- **Filtros** en el catálogo de productos

### 🏗️ Arquitectura CSS
- **Metodología BEM** (Block Element Modifier) para nomenclatura
- **Estructura modular** con separación de responsabilidades
- **Variables CSS personalizadas** para consistencia en el diseño
- **Mobile-first approach** con media queries progresivas

### ♿ Accesibilidad
- **Contraste adecuado** en texto sobre imágenes
- **Navegación semántica** con HTML5 estructurado

## 📁 Estructura del Proyecto

```
/
├── index.html              # Archivo HTML principal
├── assets/
│   ├── css/
│   │   ├──  
│   │   │__variables.css   # Variables CSS
│   │   └── style.css      # Archivo principal
│   ├── img/               # Imágenes del proyecto
│   ├── js/                # Scripts JavaScript
│   └── scss/              # Archivos SCSS 
|       ├── style.css      
│    
└── README.md              # Este archivo
```

## 🎯 Metodología BEM Implementada

### Bloques Principales
- `.header` - Cabecera del sitio
- `.nav` - Navegación principal
- `.hero` - Sección hero de la página principal
- `.product-card` - Tarjetas de productos
- `.footer` - Pie de página

### Ejemplos de Nomenclatura BEM
```css
/* Bloque */
.product-card { }

/* Elemento */
.product-card__image { }
.product-card__title { }

/* Modificador */
.btn--primary { }
.btn--secondary { }
```

## 🎨 Sistema de Diseño

### Paleta de Colores
```css
--color-primary: #4A6B5D;    /* Verde bosque oscuro */
--color-secondary: #A8D5BA;  /* Verde menta claro */
--color-accent: #D9A689;     /* Tono tierra/durazno */
--color-text: #333333;       /* Gris oscuro para texto */
--color-light: #F7F7F7;      /* Fondo claro */
--color-white: #FFFFFF;      /* Blanco */
```

### Tipografía
- **Headings**: 'Playfair Display', serif
- **Body**: 'Montserrat', sans-serif

### Espaciados
Sistema de espaciado consistente con variables CSS:
- `--spacing-xs`: 5px
- `--spacing-sm`: 10px
- `--spacing-md`: 15px
- `--spacing-lg`: 20px
- `--spacing-xl`: 30px
- `--spacing-xxl`: 50px

## 📱 Breakpoints Responsivos

- **Móvil**: < 768px
- **Tablet**: 768px - 1023px
- **Desktop**: > 1024px

## 🚀 Funcionalidades

### Navegación
- **Menú hamburguesa** en dispositivos móviles

### Catálogo de Productos
- **Filtrado** por categorías  

### Rendimiento
- **Imports CSS** modulares para mejor carga

## 🛠️ Tecnologías Utilizadas

- **HTML5** semántico
- **CSS3** con variables personalizadas
- **JavaScript** para interactividad
- **Metodología BEM** para organización CSS
- **Mobile-first design**
- **CSS Grid y Flexbox** para layouts

## 📋 Mejores Prácticas Implementadas

### CSS
- ✅ Metodología BEM consistente
- ✅ Variables CSS para mantenibilidad   

### HTML
- ✅ Semántica HTML5
- ✅ Accesibilidad básica
- ✅ Meta tags responsivos
- ✅ Estructura clara y mantenible

### JavaScript
- ✅ Separación de responsabilidades
- ✅ Código limpio y documentado

## 🎓 Objetivos de Aprendizaje Cumplidos

1. **Estructuración CSS profesional** con metodología BEM
2. **Diseño responsivo** con enfoque mobile-first
3. **Modularidad y escalabilidad** del código CSS
4. **Buenas prácticas** de desarrollo frontend
5. **Arquitectura de carpetas** estándar de la industria

## 🌱 Sostenibilidad y Propósito

Este proyecto representa más que una tienda online; es una declaración de valores hacia la moda sostenible y el desarrollo web responsable, implementando código limpio, eficiente y accesible para todos los usuarios.

---

**Desarrollado con 💚 para un futuro más verde**
