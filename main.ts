import { mkdirSync, writeFileSync } from "node:fs";

// Excuse a gamer texts the boss on GTA 6 launch week: one boring,
// specific, almost-believable workplace detail — stuck in the office lift
// with the fire warden writing the report — no setup, no signature, no
// dead grandmother, flat tyre or sudden fever.
const line =
  "Sorry, can't come in, the lift stopped between floors and I'm stuck with the fire warden writing the report.";

// Validate: gate requires 1-140 characters; brief requires at most 20 words.
const count = [...line].length;
const words = line.split(/\s+/).filter(Boolean).length;
if (count < 1 || count > 140) {
  throw new Error(`line is ${count} code points, must be 1-140`);
}
if (words > 20) {
  throw new Error(`line is ${words} words, must be at most 20`);
}
if (!line.trim() || line.includes("\n")) {
  throw new Error("line must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
// Exactly the line: no trailing newline, no extra whitespace.
writeFileSync("/output/entry.txt", line, "utf8");
