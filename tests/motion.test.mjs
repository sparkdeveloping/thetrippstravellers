import test from "node:test";
import assert from "node:assert/strict";
import { filmFrame, spring, clamp } from "../lib/motion.mjs";

test("the journey has departure, Dubai and roora chapters in that order", () => {
  assert.equal(filmFrame(0).beat, 0);
  assert.equal(filmFrame(0.44).beat, 1);
  assert.equal(filmFrame(0.9).beat, 2);
});
test("arrival finishes with the real photo settled and the route completed", () => {
  const f = filmFrame(1);
  assert.equal(f.route, 1);
  assert.equal(f.photoOpacity, 1);
  assert.equal(f.photoScale, 1);
  assert.equal(f.photoX, 0);
  assert.equal(f.photoAngle, 0);
  assert.equal(f.titleOpacity, 0);
});
test("reversing progress restores the initial composition without stored animation state", () => {
  const start = filmFrame(0);
  for (const p of [0.3, 0.6, 1, 0.6, 0.3]) filmFrame(p);
  assert.deepEqual(filmFrame(0), start);
  assert.equal(start.photoOpacity, 0);
  assert.equal(start.route, 0);
});
test("the photo grows continuously and never overshoots its physical frame", () => {
  let last = 0.58;
  for (let i = 0; i <= 200; i++) {
    const f = filmFrame(i / 200);
    assert.ok(f.photoScale >= last);
    assert.ok(f.photoScale <= 1);
    assert.ok(f.photoOpacity >= 0 && f.photoOpacity <= 1);
    last = f.photoScale;
  }
});
test("out-of-range scroll progress remains bounded with finite transforms", () => {
  for (const p of [-100, 0, 0.27, 0.62, 1, 100]) {
    const f = filmFrame(p);
    assert.ok(f.progress >= 0 && f.progress <= 1);
    for (const n of Object.values(f)) assert.ok(Number.isFinite(n));
  }
  assert.equal(clamp(-1), 0);
});
test("analytic spring responds consistently at 30, 60 and 120Hz", () => {
  const states = [30, 60, 120].map((hz) => {
    let state = { p: 0, v: 0 };
    for (let i = 0; i < hz; i++) state = spring(state, 1, 1 / hz);
    return state;
  });
  for (const s of states) {
    assert.ok(Math.abs(s.p - states[0].p) < 1e-10);
    assert.ok(Math.abs(s.v - states[0].v) < 1e-10);
    assert.ok(Math.abs(1 - s.p) < 0.0001);
  }
});
