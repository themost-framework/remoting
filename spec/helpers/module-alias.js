const {addAliases} = require('module-alias');
const path = require('path');
addAliases({
    '@themost/remoting': path.resolve(process.cwd(), 'src/index')
});