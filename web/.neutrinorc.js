const { join } = require('path');

const nodeModulesDir = join(process.cwd(), 'node_modules')

module.exports = {
  use: [
    '@neutrinojs/standardjs',
    [
      '@neutrinojs/react',
      {
        html: {
          title: 'test'
        }
      }
    ],
    '@neutrinojs/jest',
    (neutrino) => {
      neutrino.config.resolve.extensions.prepend('.web.jsx').prepend('.web.js')
      neutrino.config.module
        .rule('compile')
          .include
            .add(join(nodeModulesDir, 'react-native-elements'))
            .add(join(nodeModulesDir, 'react-native-vector-icons'))
            .add(join(nodeModulesDir, 'react-native-ratings'))
            .add(join(nodeModulesDir, 'react-native-status-bar-height'))
            .add(join(nodeModulesDir, 'react-native-touchable-scale'))
            .end();
    }
  ]
};
