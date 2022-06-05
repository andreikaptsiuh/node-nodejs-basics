import path from "path";
import fs from "fs";
import zlib from "zlib";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const compress = async () => {
    const fileToCompressPath = path.join(__dirname, "files", "fileToCompress.txt");
    const compressedFilePath = path.join(__dirname, "files", "archive.gz");

    const readStream = fs.createReadStream(fileToCompressPath);
    const gzip = zlib.createGzip(); // transform stream
    const writeStream = fs.createWriteStream(compressedFilePath);

    readStream.pipe(gzip).pipe(writeStream);
};
