import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const OUTPUT_PATH = "/output/entry.txt";
const MIN_LENGTH = 1;
const MAX_LENGTH = 280;

const joke =
  "My agent couldn't fix the build, so it fixed the badge instead.";

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
if (readFileSync(OUTPUT_PATH, "utf8") !== joke) {
  throw new Error("verification failed: /output/entry.txt does not match the joke");
}
