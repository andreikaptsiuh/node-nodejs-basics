import path from "path";
import { fileURLToPath } from 'url';
import fs from 'fs';
import { readdir, mkdir, lstat } from 'fs/promises';
import { fsErrorHandler } from "../errorHandlers/fsErrorHandler.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const checkSourceDir = (dirPath) => {
    fs.stat(dirPath, (err) => {
        if (err) {
            fsErrorHandler();
        }
    });
};

const readAndCopyDir = async (sourcePath, targetPath) => {
    try {
        await mkdir(targetPath);
    } catch {
        fsErrorHandler();
    }

    try {
        const files = await readdir(sourcePath);

        for (const file of files) {
            const currentSource = path.join(sourcePath, file);
            const currentTarget = path.join(targetPath, file);

            const stat = await lstat(currentSource);

            if (stat.isDirectory()) {
                readAndCopyDir(currentSource, currentTarget);
            } else {
                fs.copyFile(currentSource, currentTarget, (err) => {
                    if (err) throw err;
                });
            };
        };
    } catch {
        fsErrorHandler();
    }
};

export const copy = async () => {
    const dirPath = path.join(__dirname, "files");

    checkSourceDir(dirPath);
    
    const dirForCopiedPath = path.join(__dirname, "files_copy");

    await readAndCopyDir(dirPath, dirForCopiedPath);
};
