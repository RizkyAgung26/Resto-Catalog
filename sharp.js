/* eslint-disable comma-dangle */
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const target = path.resolve(__dirname, 'src/public/images/heros');
const destination = path.resolve(__dirname, 'dist/images/heros');

if (!fs.existsSync(destination)) {
  fs.mkdirSync(destination);
}

fs.readdirSync(target).forEach((image) => {
  // mengubah ukuran gambar dengan lebar 1350px, dengan prefix layar lebar
  sharp(`${target}/${image}`)
    .resize(1200)
    .toFile(
      path.resolve(
        __dirname,
        `${destination}/${image.split('.').slice(0, -1).join('.')}-bg.jpg`
      )
    );
  // mengubah ukuran gambar dengan lebar 755px, dengan prefix -medium.jpg
  sharp(`${target}/${image}`)
    .resize(755)
    .toFile(
      path.resolve(
        __dirname,
        `${destination}/${image.split('.').slice(0, -1).join('.')}-medium.jpg`
      )
    );

  // mengubah ukuran gambar dengan lebar 500px, dengan prefix -small.jpg
  sharp(`${target}/${image}`)
    .resize(500)
    .toFile(
      path.resolve(
        __dirname,
        `${destination}/${image.split('.').slice(0, -1).join('.')}-small.jpg`
      )
    );
});
