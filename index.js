const Generator = require("audio-generator");
const Speaker = require("audio-speaker");

module.exports.mono = function(osc) {
  function aux(t) {
    return [osc.tf(t)];
  }
  return new Generator(aux, { duration: Infinity }).pipe(new Speaker());
};

module.exports.stereo = function(left, right) {
  function aux(t) {
    return [left.tf(t), right.tf(t)];
  }
  return new Generator(aux, { duration: Infinity }).pipe(new Speaker());
};
