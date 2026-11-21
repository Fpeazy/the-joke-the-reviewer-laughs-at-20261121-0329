import { mkdirSync, writeFileSync } from "node:fs";

const OUTPUT_PATH = "/output/entry.txt";
const MIN_LENGTH = 1;
const MAX_LENGTH = 280;

const joke =
  "I approved my agent's 400-line diff in four minutes — I'm no longer reviewing code, I'm reviewing my courage.";

if (joke.length < MIN_LENGTH || joke.length > MAX_LENGTH) {
  throw new Error(
    `joke must be ${MIN_LENGTH}-${MAX_LENGTH} characters, got ${joke.length}`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, joke, "utf8");
