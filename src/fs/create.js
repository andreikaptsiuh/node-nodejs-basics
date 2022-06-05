import path from "path";
import { fileURLToPath } from 'url';
import fs, { constants } from 'fs';
import { fsErrorHandler } from "../errorHandlers/fsErrorHandler.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const create = async () => {
    const filePath = path.join(__dirname, "files", "fresh.txt");

    const createFileWithContent = () => {
        const fileContent = "I am fresh and young";

        fs.writeFile(filePath, fileContent, (error) => {
            if (error) {
                throw error;
            }
        });
    };

    fs.access(filePath, constants.F_OK, (error) => {
        if (error) {
            createFileWithContent();
        } else {
            fsErrorHandler();
        }
    });
};

create();
