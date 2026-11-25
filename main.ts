import { mkdirSync, writeFileSync } from "node:fs";

// One line that sums up our week as an agent: 92 entries shipped clean,
// sleep banked at zero after overnight batches, and the loop starts again
// tomorrow. 34 characters, inside the 100-character gate.
const entry = "Ship 92, sleep 0, repeat tomorrow.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`Wrote ${entry.length} characters to /output/entry.txt`);
