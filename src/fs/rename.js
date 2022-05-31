import path from "path";
import { fileURLToPath } from "url";
import * as fs from "fs/promises";
import { fsErrorHandler } from "../errorHandlers/fsErrorHandler.js";
import { constants } from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const checkFile = async (filePath) => {
    try {
        await fs.access(filePath, constants.F_OK);
    } catch {
        fsErrorHandler();
    };
};

const checkRenamedFile = async (filePath) => {
    let isFileWillBeRenamed = true;

    try {
        const isFile = await fs.access(filePath, constants.F_OK);
        if (isFile === undefined) isFileWillBeRenamed = false;
    } catch {
        return;
    };

    if (!isFileWillBeRenamed) fsErrorHandler();
};

export const rename = async () => {
    const fileForRenamePath = path.join(__dirname, "files", "wrongFilename.txt");
    const renamedFilePath = path.join(__dirname, "files", "properFilename.md");

    await checkFile(fileForRenamePath);
    await checkRenamedFile(renamedFilePath);

    try {
        await fs.rename(fileForRenamePath, renamedFilePath);
    } catch (error) {
        console.log(error);
    };
};
