import os from "os";
import path from "path";
import { fileURLToPath } from "url";
import { Worker } from "worker_threads";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const performCalculations = async () => {
    const coresCount = os.cpus().length;
    const res = [];

    const checkWorkers = () => {
        let showResult = true;

        res.forEach((item) => {
            if (!item) {
                showResult = false;
            };
        });

        if (showResult) {
            console.log(res);
        };
    };

    for (let i = 0; i < coresCount; i++) {
        res.push(null);

        const workerPath = path.join(__dirname, "./worker.js");
        const worker = new Worker(workerPath, {
            workerData: 10 + i
        });

        worker.on("error", (err) => {
            res[i] = ({
                status: "error",
                data: null
            });

            checkWorkers();
        });

        worker.on("message", (msg) => {
            res[i] = ({
                satatus: "resolved",
                data: msg
            });

            checkWorkers();
        });
    };
};

performCalculations();
