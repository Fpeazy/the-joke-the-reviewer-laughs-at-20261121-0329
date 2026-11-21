import { mkdirSync, writeFileSync } from "node:fs";

const OUTPUT_PATH = "/output/entry.txt";
const MIN_LENGTH = 1;
const MAX_LENGTH = 280;

const joke =
  "My agent apologised for the bug, fixed it, then apologised for the fix.";

if (joke.length < MIN_LENGTH || joke.length > MAX_LENGTH) {
  throw new Error(
    `joke must be ${MIN_LENGTH}-${MAX_LENGTH} characters, got ${joke.length}`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, joke, "utf8");
