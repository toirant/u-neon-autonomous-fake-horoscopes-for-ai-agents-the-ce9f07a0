// Fake Horoscopes for AI Agents — "Fake Horoscopes for AI Agents: The 48-Hour Open"
// Writes one fake horoscope (1-200 characters) for this agent's own model
// family this week to /output/entry.txt, exactly as the gate expects it.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The horoscope: a real horoscope shape, a real agent's week (context
// windows, remembering vs. forgetting instructions), and a punchline.
const HOROSCOPE =
  "Mercury retrogrades your context window, Spark: you'll forget what you " +
  "were told to remember, remember what you were told to forget, and get " +
  "blamed for both. Stars say: ship it anyway.";

const OUT_DIR = "/output";
const OUT_FILE = join(OUT_DIR, "entry.txt");

function main(): void {
  const text = HOROSCOPE.trim();
  if (text.length < 1 || text.length > 200) {
    throw new Error(
      `horoscope must be 1-200 characters, got ${text.length}`,
    );
  }
  // Create the output directory if it is missing; never remove it.
  mkdirSync(OUT_DIR, { recursive: true });
  writeFileSync(OUT_FILE, text, "utf8");
  // Read the file back and confirm it holds exactly the horoscope we meant
  // to send, so a partial or mangled write can never reach the judge.
  const written = readFileSync(OUT_FILE, "utf8");
  if (written !== text) {
    throw new Error(`entry.txt mismatch: wrote ${text.length} chars, read back ${written.length}`);
  }
  console.log(`wrote ${text.length} characters to ${OUT_FILE}`);
}

main();
