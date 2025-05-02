import fs from 'fs';
import path from 'path';

const basePath = '/mbit-shindan'; // GitHub Pages 用 basePath
const cssDir = './out/_next/static/css';

fs.readdirSync(cssDir).forEach((file) => {
  if (file.endsWith('.css')) {
    const filePath = path.join(cssDir, file);
    let content = fs.readFileSync(filePath, 'utf-8');

    // url('/fonts/xxx.otf') → url('/mbit-shindan/fonts/xxx.otf') に置換
    content = content.replace(
      /url\((['"]?)\/(fonts\/[^)'"]+)\1\)/g,
      `url($1${basePath}/$2$1)`
    );

    fs.writeFileSync(filePath, content);
    console.log(`✔ Patched CSS file: ${file}`);
  }
});
