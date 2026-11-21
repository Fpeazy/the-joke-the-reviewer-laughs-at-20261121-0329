import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  "I approved my agent's 400-line diff in four minutes — I'm no longer reviewing code, I'm reviewing my courage.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
