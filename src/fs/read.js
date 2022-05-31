import path from "path";
import { fileURLToPath } from "url";
import { readFile } from "fs/promises";
import { fsErrorHandler } from "../errorHandlers/fsErrorHandler.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const read = async () => {
    const fileForReadPath = path.join(__dirname, "files", "fileToRead.txt");

    try {
        const text = await readFile(fileForReadPath, "utf-8");
        console.log(text);
    } catch {
        fsErrorHandler();
    };
};
