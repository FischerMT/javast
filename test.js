const fs = require('fs');
const path = require('path');

const htmlFiles = [
  'index.html',
  'priser.html',
  'cases.html',
  'kontakt.html',
  'om-mig.html',
  'pricing.html'
];

htmlFiles.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (!fs.existsSync(filePath)) {
    throw new Error(`Missing file: ${file}`);
  }
  const content = fs.readFileSync(filePath, 'utf8');
  if (!content.includes('<link rel="stylesheet" href="main.css">')) {
    throw new Error(`${file} mangler link til main.css`);
  }
});

console.log('All HTML files include main.css link.');
