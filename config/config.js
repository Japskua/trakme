var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'trakme'
    },
    port: 3000,
    db: 'mongodb://localhost/trakme-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'trakme'
    },
    port: 3000,
    db: 'mongodb://localhost/trakme-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'trakme'
    },
    port: 3000,
    db: 'mongodb://localhost/trakme-production'
  }
};

module.exports = config[env];
