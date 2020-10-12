const esModules = ['react-icons'].join('|');
module.exports = {
  transformIgnorePatterns: [`/node_modules/(?!${esModules})`],
};
