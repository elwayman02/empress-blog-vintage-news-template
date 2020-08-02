'use strict';

module.exports = {
  // isDevelopingAddon: () => true,

  name: require('./package').name,

  contentFor(type) {
    if (type === 'head') {
      return '<link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital@0;1&family=Playfair+Display+SC:wght@900&family=Playfair+Display:ital,wght@0,800;1,800&family=Manrope:wght@800&display=swap" rel="stylesheet">';
    }
  }
};
