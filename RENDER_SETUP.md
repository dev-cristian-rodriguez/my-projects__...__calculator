# Configuración de Render.com para Calculadora Estática

## Problema
El error ocurre porque Render está intentando ejecutar comandos `npm` cuando tu proyecto es un sitio estático simple (HTML/CSS/JS) que no requiere Node.js.

## Soluciones

### Solución 1: Usar el archivo `render.yaml` (Recomendado)

El archivo `render.yaml` ya está creado en tu proyecto. Solo necesitas:

1. **En el Dashboard de Render:**
   - Ve a tu servicio/proyecto
   - Si ya existe un servicio, **elimínalo y crea uno nuevo** seleccionando "Static Site"
   - Al crear el nuevo servicio, Render detectará automáticamente el archivo `render.yaml`

2. **O crea un nuevo Static Site manualmente:**
   - En Render Dashboard, haz clic en "New +" → "Static Site"
   - Conecta tu repositorio de Git
   - Render debería detectar automáticamente la configuración

### Solución 2: Configuración Manual en Render Dashboard

Si prefieres configurarlo manualmente:

1. **Ve a Render Dashboard** y selecciona tu servicio (o crea uno nuevo)

2. **Cambia el tipo de servicio:**
   - Si ya tienes un "Web Service", elimínalo
   - Crea un nuevo **"Static Site"**

3. **Configuración del Static Site:**
   - **Build Command:** Déjalo vacío o elimínalo
   - **Publish Directory:** `.` (punto) o déjalo vacío
   - **Root Directory:** (déjalo vacío si tu `index.html` está en la raíz)

### Solución 3: Si Render no reconoce como Static Site

Si Render sigue intentando ejecutar npm, verifica:

1. **Elimina cualquier configuración de build:**
   - Build Command: vacío
   - Start Command: no es necesario para static sites

2. **Asegúrate de que tu estructura es:**
   ```
   /
   ├── index.html
   ├── style.css
   ├── script.js
   ├── icon.png
   └── render.yaml
   ```

3. **Verifica que `index.html` esté en la raíz del repositorio**

## Verificación

Después de aplicar los cambios:
- Render debería detectar automáticamente los archivos estáticos
- No debería intentar ejecutar `npm install` o `npm start`
- El sitio debería desplegarse directamente sin procesos de build

## Nota Importante

Si ya tienes un servicio configurado como "Web Service" en Render, necesitas:
1. **Eliminarlo completamente**
2. **Crear un nuevo servicio como "Static Site"**

Render trata los Web Services y Static Sites de manera diferente, por eso es importante usar el tipo correcto.
