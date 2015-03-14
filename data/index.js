const fs = require('fs')

module.exports = function (name) {
  return fs.createReadStream(pathTo(name, 'png'))
}

module.exports.meta = function (name) {
  return require(pathTo(name, 'json'))
}

module.exports.url = function (name) {
  return require(pathTo(name, 'json')).source.url
}

function pathTo(name, ext) {
  return './' + name + '/' + name + '.' + ext
}