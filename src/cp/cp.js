import { fork } from "child_process";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


export const spawnChildProcess = async (args) => {
    const cpFilePath = path.join(__dirname, "files", "script.js");
    const cp = fork(cpFilePath, args);

    cp.on("close", (code) => {
        console.log(`Child process exited. Code: ${code}`);
    });
};

spawnChildProcess([ 1, 2, 3, 4, 5]);
