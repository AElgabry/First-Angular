const fs = require('fs');
const path = require('path');

// Simple image optimization script
const publicDir = path.join(__dirname, 'public');

console.log('Image sizes in public folder:');
console.log('============================');

fs.readdirSync(publicDir).forEach(file => {
  if (file.match(/\.(jpg|jpeg|png|gif|webp)$/i)) {
    const filePath = path.join(publicDir, file);
    const stats = fs.statSync(filePath);
    const sizeInKB = (stats.size / 1024).toFixed(2);
    console.log(`${file}: ${sizeInKB} KB`);
  }
});

console.log('\nRecommendations:');
console.log('1. Convert Pic 2.jpg to WebP format (should reduce from 865KB to ~200-300KB)');
console.log('2. Use online tools like TinyPNG or Squoosh to compress images');
console.log('3. Consider using responsive images with different sizes'); 