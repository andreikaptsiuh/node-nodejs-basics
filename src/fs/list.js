import path from "path";
import { fileURLToPath } from "url";
import { readdir } from "fs/promises";
import { fsErrorHandler } from "../errorHandlers/fsErrorHandler.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const list = async () => {
    const redFilesDirPath = path.join(__dirname, "files");

    try {
        const files = await readdir(redFilesDirPath);
        console.log(files);
    } catch (error) {
        fsErrorHandler();
    }
};

list();
