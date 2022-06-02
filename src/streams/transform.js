import { Transform } from "stream";

export const transform = async () => {
    const transformStream = new Transform({ 
        transform(chunk, encoding, callback) {
            const transformedText = chunk.toString().split("").reverse().join("");
            callback(null, transformedText);
        }
    });

    process.stdin.pipe(transformStream).pipe(process.stdout);

    process.stdout.write("\x1b[33m Exit: Cntrl + C \x1b[0m");
    process.stdout.write("\nEnter text which should be transformed: \n");
};
