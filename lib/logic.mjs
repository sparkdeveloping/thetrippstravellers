export const ESTIMATE_CENTS = 203000;
export const DATES = Object.freeze({
  outbound: "2027-11-26",
  return: "2027-12-06",
  roora: "2027-12-01",
  booking: "January 2027",
});
export function planBudget(people, savedDollars, parts) {
  const count = Number(people),
    saved = Number(savedDollars),
    splits = Number(parts);
  if (!Number.isInteger(count) || count < 1 || count > 8)
    throw new Error("Choose between one and eight travellers.");
  if (!Number.isFinite(saved) || saved < 0)
    throw new Error("Enter a valid amount of zero or more.");
  if (!Number.isInteger(splits) || splits < 1 || splits > 12)
    throw new Error("Choose between one and twelve contributions.");
  const total = count * ESTIMATE_CENTS,
    savedCents = Math.round(saved * 100);
  if (savedCents > total)
    throw new Error("Your amount set aside is above this flight estimate.");
  const remaining = total - savedCents,
    each = Math.floor(remaining / splits),
    remainder = remaining % splits;
  return {
    total,
    saved: savedCents,
    remaining,
    contributions: Array.from(
      {
        length: splits,
      },
      (_, i) => each + (i < remainder ? 1 : 0),
    ),
  };
}
export const money = (cents) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(cents / 100);
export function formatDate(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value || ""))
    throw new Error("Choose a valid date.");
  const date = new Date(`${value}T12:00:00Z`);
  if (Number.isNaN(date.getTime()) || date.toISOString().slice(0, 10) !== value)
    throw new Error("Choose a valid date.");
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}
export function planMessage(name, date) {
  const display = String(name || "")
    .trim()
    .slice(0, 80);
  return `Hi! ${display ? `It's ${display}. ` : ""}I'm planning to begin my Zimbabwe trip payments on ${formatDate(date)}. I'll send a screenshot or confirmation after each transfer so you can update my balance. Thank you!`;
}
export function measurementMessage(values, unit) {
  if (!["cm", "in"].includes(unit))
    throw new Error("Choose centimetres or inches.");
  const labels = {
      chest: "Bust/chest",
      waist: "Waist",
      hips: "Hips",
      shoulder: "Shoulder width",
      inseam: "Inseam",
    },
    entries = [];
  for (const [key, label] of Object.entries(labels)) {
    if (values[key] === "" || values[key] == null) continue;
    const n = Number(values[key]);
    if (!Number.isFinite(n) || n <= 0 || n > (unit === "cm" ? 300 : 120))
      throw new Error(`Check your ${label.toLowerCase()} measurement.`);
    entries.push(`${label}: ${n} ${unit}`);
  }
  if (!entries.length) throw new Error("Add at least one measurement.");
  return `Hi! Here are my clothing measurements in ${unit === "cm" ? "centimetres" : "inches"}:\n${entries.join("\n")}\nPlease let me know if the tailor needs any other measurements or fit details.`;
}
export function convertMeasurement(value, from, to) {
  if (!["cm", "in"].includes(from) || !["cm", "in"].includes(to))
    throw new Error("Unknown measurement unit.");
  if (value === "" || value == null) return "";
  const n = Number(value);
  if (!Number.isFinite(n) || n <= 0) throw new Error("Check the measurement.");
  return String(
    Math.round((from === to ? n : from === "cm" ? n / 2.54 : n * 2.54) * 10) /
      10,
  );
}
export function calendarFile() {
  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//The Tripps Travellers//Zimbabwe 2027//EN",
    "CALSCALE:GREGORIAN",
    "BEGIN:VEVENT",
    "UID:outbound-20271126@thetrippstravellers",
    "DTSTAMP:20261118T000000Z",
    "DTSTART;VALUE=DATE:20271126",
    "DTEND;VALUE=DATE:20271127",
    "SUMMARY:Depart for Zimbabwe - group travel plan",
    "DESCRIPTION:Planned outbound departure. Airports and flight times to be confirmed.",
    "END:VEVENT",
    "BEGIN:VEVENT",
    "UID:roora-20271201@thetrippstravellers",
    "DTSTAMP:20261118T000000Z",
    "DTSTART;VALUE=DATE:20271201",
    "DTEND;VALUE=DATE:20271202",
    "SUMMARY:Natalie and Jordan - Roora Celebration",
    "DESCRIPTION:Traditional roora and family celebration in Zimbabwe. Exact address and arrival time shared with confirmed guests.",
    "END:VEVENT",
    "BEGIN:VEVENT",
    "UID:return-20271206@thetrippstravellers",
    "DTSTAMP:20261118T000000Z",
    "DTSTART;VALUE=DATE:20271206",
    "DTEND;VALUE=DATE:20271207",
    "SUMMARY:Depart Zimbabwe - group return plan",
    "DESCRIPTION:Planned departure from Zimbabwe. Arrival home and flight times to be confirmed.",
    "END:VEVENT",
    "END:VCALENDAR",
    "",
  ].join("\r\n");
}
