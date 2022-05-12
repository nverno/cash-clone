const path = require('path')

module.exports = {
  process(src, filename, config, options = {}) {
    switch (options.type) {
      case 'filename':
        return {
          code: `module.exports = ${JSON.stringify(path.basename(filename))};`,
        }

      default:
        return {
          code: `module.exports = '';`,
        }
    }
  },
}
