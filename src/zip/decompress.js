import path from "path";
import fs, { constants } from "fs";
import zlib from "zlib";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const decompress = async () => {
    const fileToCompressPath = path.join(__dirname, "files", "archive.gz");
    const compressedFilePath = path.join(__dirname, "files", "fileToCompress.txt");

    fs.access(fileToCompressPath, constants.F_OK, (error) => {
        if (error) {
           throw new Error("File for decompress wasn't found");
        } else {
            const readStream = fs.createReadStream(fileToCompressPath);
            const unzip = zlib.createUnzip();
            const writeStream = fs.createWriteStream(compressedFilePath);

            readStream.pipe(unzip).pipe(writeStream);
        }
    });
};
