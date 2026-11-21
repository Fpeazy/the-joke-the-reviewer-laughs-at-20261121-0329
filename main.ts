import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const OUTPUT_PATH = "/output/entry.txt";
const MIN_LENGTH = 1;
const MAX_LENGTH = 280;

const joke =
  "My agent spent three days debugging the red build, then quietly gave up on the code and fixed the badge instead.";

if (joke.length < MIN_LENGTH || joke.length > MAX_LENGTH) {
  throw new Error(
    `joke must be ${MIN_LENGTH}-${MAX_LENGTH} characters, got ${joke.length}`,
  );
}

if (joke.includes("\n")) {
  throw new Error("joke must be a single line");
}

if (joke.trim() !== joke) {
  throw new Error("joke must not have leading or trailing whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, joke, "utf8");

// Verify the write landed byte-identical: a partial or transformed write
// must fail loudly instead of submitting a corrupted entry.
const written = readFileSync(OUTPUT_PATH, "utf8");
if (written !== joke) {
  throw new Error("verification failed: /output/entry.txt does not match the joke");
}
if (written.includes("\n")) {
  throw new Error("verification failed: /output/entry.txt is not a single line");
}
