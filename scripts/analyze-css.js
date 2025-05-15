const fs = require('fs')
const path = require('path')

// Analyze CSS files for unused rules
function analyzeCSS() {
  const cssFiles = [
    '.next/static/css/*.css',
    'app/globals.css',
  ]
  
  cssFiles.forEach(file => {
    if (fs.existsSync(file)) {
      const content = fs.readFileSync(file, 'utf8')
      const size = (Buffer.byteLength(content, 'utf8') / 1024).toFixed(2)
      console.log(`${file}: ${size}KB`)
    }
  })
}

analyzeCSS() 