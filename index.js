const Generator = require("audio-generator");
const Speaker = require("audio-speaker");

module.exports = function play(osc) {
  function aux(t) {
    return [osc.tf(t)];
  }
  return new Generator(aux, { duration: Infinity }).pipe(new Speaker());
};
