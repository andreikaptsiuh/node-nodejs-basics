import path from "path";
import { fileURLToPath } from "url";
import { unlink } from "fs/promises";
import { fsErrorHandler } from "../errorHandlers/fsErrorHandler.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const remove = async () => {
    const fileForRemovePath = path.join(__dirname, "files", "fileToRemove.txt");

    try {
        await unlink(fileForRemovePath);
    } catch {
        fsErrorHandler();
    }
};

remove();
