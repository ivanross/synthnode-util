require("mocha");
const { expect } = require("chai");
const { Oscillator } = require("synthnode");
const { mono, stereo } = require("./index");

const osc = new Oscillator({ frequency: 220, amplitude: 0.1 });

describe("Tests", () => {
  it("mono", () => {
    expect(() => mono(osc, { duration: 1 })).to.not.throw();
  });
  it("stereo", () => {
    expect(() => stereo(osc, osc, { duration: 1 })).to.not.throw();
  });
});
