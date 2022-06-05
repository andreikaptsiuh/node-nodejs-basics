import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const write = async () => {
    const fileToWritePath = path.join(__dirname, "files", "fileToWrite.txt");
    const writeStream = fs.createWriteStream(fileToWritePath);

    writeStream.on('error', (error) => {
        writeStream.destroy();
    });

    process.stdout.write("\x1b[33m Exit: Cntrl + C \x1b[0m");
    
    process.stdout.write("\nEnter text which should be write: \n");
    process.stdin.pipe(writeStream);
};

write();
