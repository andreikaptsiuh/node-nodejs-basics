import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const read = async () => {
    const readFilePath = path.join(__dirname, "files", "fileToRead.txt");
    const readStream = fs.createReadStream(readFilePath);

    readStream.on('error', (error) => {
        readStream.destroy();
    });

    readStream.pipe(process.stdout);
};
