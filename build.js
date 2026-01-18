const fs = require('fs');
const path = require('path');

console.log('🔨 Iniciando proceso de build...');

// Lista de archivos necesarios para el proyecto
const requiredFiles = [
  'index.html',
  'style.css',
  'script.js',
  'icon.png'
];

// Verificar que todos los archivos existan
let allFilesExist = true;
requiredFiles.forEach(file => {
  if (fs.existsSync(path.join(__dirname, file))) {
    console.log(`✅ ${file} encontrado`);
  } else {
    console.error(`❌ ${file} NO encontrado`);
    allFilesExist = false;
  }
});

// Verificar el contenido de index.html
if (fs.existsSync('index.html')) {
  const htmlContent = fs.readFileSync('index.html', 'utf8');
  
  // Verificar que tenga las referencias necesarias
  const checks = [
    { name: 'CSS link', regex: /<link.*stylesheet.*style\.css/ },
    { name: 'JavaScript script', regex: /<script.*script\.js/ },
    { name: 'Viewport meta', regex: /<meta.*viewport/ },
    { name: 'Title', regex: /<title>.*<\/title>/ }
  ];

  checks.forEach(check => {
    if (check.regex.test(htmlContent)) {
      console.log(`✅ ${check.name} verificado en index.html`);
    } else {
      console.warn(`⚠️  ${check.name} no encontrado en index.html`);
    }
  });
}

if (allFilesExist) {
  console.log('\n✨ Build completado exitosamente!');
  console.log('📦 Todos los archivos están listos para el despliegue.');
  process.exit(0);
} else {
  console.error('\n❌ Build falló: algunos archivos requeridos no se encontraron.');
  process.exit(1);
}
