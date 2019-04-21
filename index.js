const Generator = require("audio-generator");
const Speaker = require("audio-speaker");

module.exports.mono = function mono(osc, options = { duration: Infinity }) {
  function aux(t) {
    return [osc.tf(t)];
  }
  return new Generator(aux, options).pipe(new Speaker());
};

module.exports.stereo = function stereo(
  left,
  right,
  options = { duration: Infinity }
) {
  function aux(t) {
    return [left.tf(t), right.tf(t)];
  }
  return new Generator(aux, options).pipe(new Speaker());
};
