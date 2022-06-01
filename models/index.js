const fs = require('fs');

let moduleExports = {};

const extendExports = (filename) => {
  if (filename === 'index.js') return;
  let key = (filename.split('.')[0]);
  key = key.charAt(0).toUpperCase() + key.slice(1);
  moduleExports[key] = require(`./${filename}`);
};

fs.readdirSync(__dirname).forEach(extendExports);
console.log('Loading models...');
module.exports = moduleExports;