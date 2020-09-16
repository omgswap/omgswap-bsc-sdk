
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./bsc-sdk.cjs.production.min.js')
} else {
  module.exports = require('./bsc-sdk.cjs.development.js')
}
