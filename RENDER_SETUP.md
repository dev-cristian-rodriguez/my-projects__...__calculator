# Configuración de Render.com para Calculadora

## Configuración Actual

El proyecto ahora está configurado como un **Web Service con Node.js** que incluye:

- ✅ `package.json` - Configuración de npm con scripts de build
- ✅ `build.js` - Script de verificación y build
- ✅ `server.js` - Servidor HTTP simple para servir los archivos estáticos
- ✅ `render.yaml` - Configuración de Render

## Proceso de Build y Despliegue

### Comandos NPM disponibles:

1. **`npm install`** - Instala las dependencias (aunque no hay dependencias externas)
2. **`npm run build`** - Ejecuta el script de verificación de archivos
3. **`npm start`** - Inicia el servidor HTTP en el puerto configurado

### Flujo en Render:

1. Render ejecuta: `npm install` (instala las dependencias, si las hay)
2. Render ejecuta: `npm run build` (verifica que todos los archivos existan)
3. Render ejecuta: `npm start` (inicia el servidor en el puerto asignado)

## Configuración en Render Dashboard

1. **Tipo de Servicio:** Web Service (no Static Site)
2. **Build Command:** `npm install && npm run build`
3. **Start Command:** `npm start`
4. **Environment:** Node

## Archivos del Proyecto

```
/
├── package.json      # Configuración npm y scripts
├── build.js          # Script de verificación/build
├── server.js         # Servidor HTTP simple
├── render.yaml       # Configuración de Render
├── index.html        # Página principal
├── style.css         # Estilos
├── script.js         # Lógica de la calculadora
└── icon.png          # Icono de la aplicación
```

## Variables de Entorno

El servidor usa automáticamente:
- `PORT` - Puerto asignado por Render (por defecto 3000)
- `NODE_ENV` - Entorno de producción

## Verificación Local

Para probar localmente:

```bash
# Instalar (aunque no hay dependencias)
npm install

# Ejecutar build
npm run build

# Iniciar servidor
npm start
```

Luego abre: http://localhost:3000

## Notas Importantes

- El servidor servirá todos los archivos estáticos correctamente
- El build script verifica que todos los archivos necesarios existan
- Render asignará automáticamente un puerto, el servidor lo detecta desde `process.env.PORT`
- No hay dependencias externas, por lo que `npm install` será muy rápido
