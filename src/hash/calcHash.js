import { createHash } from "crypto";
import { readFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const calculateHash = async () => {
    const hash = createHash("sha256");

    const fileForHashPath = path.join(__dirname, "files", "fileToCalculateHashFor.txt");
    const fileForHashData = await readFile(fileForHashPath);

    hash.update(fileForHashData);
    return hash.digest("hex");
};
