import test from "node:test";
import assert from "node:assert/strict";
import {
  planBudget,
  money,
  planMessage,
  measurementMessage,
  convertMeasurement,
  calendarFile,
  DATES,
} from "../lib/logic.mjs";

test("a four-part individual plan is exactly $507.50 per contribution", () => {
  const r = planBudget(1, 0, 4);
  assert.equal(r.total, 203000);
  assert.deepEqual(r.contributions, [50750, 50750, 50750, 50750]);
  assert.equal(money(r.remaining), "$2,030.00");
});
test("household estimate subtracts personal savings once", () => {
  const r = planBudget(2, 1000, 6);
  assert.equal(r.total, 406000);
  assert.equal(r.remaining, 306000);
  assert.equal(
    r.contributions.reduce((a, b) => a + b, 0),
    306000,
  );
});
test("cent rounding always sums to the exact remaining estimate", () => {
  for (const people of [1, 2, 5, 8])
    for (const parts of [2, 4, 6, 8, 12]) {
      const r = planBudget(people, 0.01, parts);
      assert.equal(
        r.contributions.reduce((a, b) => a + b, 0),
        r.remaining,
      );
      assert.ok(
        Math.max(...r.contributions) - Math.min(...r.contributions) <= 1,
      );
    }
});
test("fully set aside has no negative or fictitious payment", () => {
  const r = planBudget(1, 2030, 8);
  assert.equal(r.remaining, 0);
  assert.deepEqual(r.contributions, Array(8).fill(0));
});
test("bad planner input is rejected rather than showing misleading results", () => {
  for (const args of [
    [0, 0, 4],
    [9, 0, 4],
    [1, -1, 4],
    [1, Infinity, 4],
    [1, 2031, 4],
    [1, 0, 0],
    [1, 0, 2.5],
    [1, 0, 13],
  ])
    assert.throws(() => planBudget(...args));
});
test("planned departure weekdays match the supplied dates", () => {
  assert.equal(new Date(DATES.outbound + "T12:00:00Z").getUTCDay(), 5);
  assert.equal(new Date(DATES.return + "T12:00:00Z").getUTCDay(), 1);
  assert.equal(DATES.booking, "January 2027");
  assert.equal(new Date(DATES.roora + "T12:00:00Z").getUTCDay(), 3);
});
test("calendar holds travel departures and the roora with exclusive all-day ends", () => {
  const s = calendarFile();
  assert.equal((s.match(/BEGIN:VEVENT/g) || []).length, 3);
  assert.match(s, /DTSTART;VALUE=DATE:20271126\r\nDTEND;VALUE=DATE:20271127/);
  assert.match(s, /DTSTART;VALUE=DATE:20271206\r\nDTEND;VALUE=DATE:20271207/);
  assert.match(s, /DTSTART;VALUE=DATE:20271201\r\nDTEND;VALUE=DATE:20271202/);
  assert.match(s, /Natalie and Jordan - Roora Celebration/);
  assert.doesNotMatch(s, /DTSTART:.*T/);
  assert.match(s, /Arrival home and flight times to be confirmed/);
});
test("start-date draft is explicit, local text and handles invalid dates", () => {
  const text = planMessage(" Casey ", "2026-12-01");
  assert.match(text, /It's Casey/);
  assert.match(text, /December 1, 2026/);
  assert.match(text, /screenshot or confirmation/);
  assert.throws(() => planMessage("", "2027-02-30"));
  assert.throws(() => planMessage("", ""));
});
test("partial clothing details keep their chosen units", () => {
  const s = measurementMessage(
    { chest: "96", waist: "80.5", hips: "", shoulder: "", inseam: "" },
    "cm",
  );
  assert.match(s, /Bust\/chest: 96 cm/);
  assert.match(s, /Waist: 80.5 cm/);
  assert.doesNotMatch(s, /Hips:/);
  assert.match(s, /tailor needs any other measurements/);
});
test("invalid or empty measurements do not create a false completed draft", () => {
  for (const args of [
    [{}, "cm"],
    [{ waist: "0" }, "cm"],
    [{ waist: "301" }, "cm"],
    [{ waist: "121" }, "in"],
    [{ waist: "NaN" }, "cm"],
    [{ waist: 80 }, "ft"],
  ])
    assert.throws(() => measurementMessage(...args));
});
test("changing measurement units converts the value rather than relabelling it", () => {
  assert.equal(convertMeasurement("101.6", "cm", "in"), "40");
  assert.equal(convertMeasurement("40", "in", "cm"), "101.6");
  assert.equal(convertMeasurement("", "cm", "in"), "");
  assert.throws(() => convertMeasurement("bad", "cm", "in"));
});
