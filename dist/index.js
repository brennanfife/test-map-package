
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./testmappackage.cjs.production.min.js')
} else {
  module.exports = require('./testmappackage.cjs.development.js')
}
