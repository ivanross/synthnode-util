const Generator = require("audio-generator");
const Speaker = require("audio-speaker");

module.exports.mono = function mono(osc) {
  function aux(t) {
    return [osc.tf(t)];
  }
  return new Generator(aux, { duration: Infinity }).pipe(new Speaker());
};

module.exports.stereo = function stereo(left, right) {
  function aux(t) {
    return [left.tf(t), right.tf(t)];
  }
  return new Generator(aux, { duration: Infinity }).pipe(new Speaker());
};
