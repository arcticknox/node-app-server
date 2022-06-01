const fs = require('fs');

let moduleExports = {};

const exportModules = (filename) => {
    if (filename === 'index.js') return;
    let key = (filename.split('.')[0]);
    key = key.charAt(0).toUpperCase() + key.slice(1) + 'Service';
    moduleExports[key] = require(`./${filename}`)
}

fs.readdirSync(__dirname).forEach(exportModules)
module.exports = moduleExports;