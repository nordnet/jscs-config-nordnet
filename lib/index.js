/**
 * @param {Configuration} conf
 */
module.exports = function (conf) {
  conf.registerPreset('nordnet', require('./presets/nordnet-preset.json'));
};
