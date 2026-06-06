const fs = require('fs');
const path = require('path');
const imageToPdf = require('image-to-pdf').convert;

const sourceDir = 'C:/Users/Acer/.gemini/antigravity/brain/7ca593a0-ab22-4f2b-acfc-49e613110b3b';
const targetDir = 'c:/Users/Acer/Desktop/Portfolio/public';

// Define files to process
const certs = [
  {
    src: 'media__1780660729980.png',
    destPng: 'cert_java.png',
    destPdf: 'cert_java.pdf',
    name: 'Java Programming'
  },
  {
    src: 'media__1780660735553.png',
    destPng: 'cert_codeunnati.png',
    destPdf: 'cert_codeunnati.pdf',
    name: 'CodeUnnati'
  },
  {
    src: 'media__1780660743264.png',
    destPng: 'cert_sigma.png',
    destPdf: 'cert_sigma.pdf',
    name: 'Sigma Batch'
  }
];

certs.forEach(cert => {
  const srcPath = path.join(sourceDir, cert.src);
  const destPngPath = path.join(targetDir, cert.destPng);
  const destPdfPath = path.join(targetDir, cert.destPdf);

  if (fs.existsSync(srcPath)) {
    // Copy PNG
    fs.copyFileSync(srcPath, destPngPath);
    console.log(`Copied ${cert.name} PNG to ${destPngPath}`);

    // Convert to PDF
    imageToPdf([destPngPath], 'A4')
      .pipe(fs.createWriteStream(destPdfPath))
      .on('finish', () => {
        console.log(`Converted ${cert.name} to PDF successfully: ${destPdfPath}`);
      })
      .on('error', (err) => {
        console.error(`Error converting ${cert.name} to PDF:`, err);
      });
  } else {
    console.error(`Source file not found: ${srcPath}`);
  }
});
