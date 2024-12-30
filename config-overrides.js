const path = require("path");

const resolve = dir => path.resolve(__dirname, dir);

module.exports =  function (config) {
  config.resolve.alias = {
    ...config.resolve.alias,
    '@': resolve('src'),
  };
  return config;
};
