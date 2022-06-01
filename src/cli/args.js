export const parseArgs = () => {
    const args = process.argv;

    const res = [];

    args.forEach((arg, index) => {
        const argPrefix = arg.slice(0, 2);
        if (argPrefix === '--') {
            res.push(`${arg.slice(2)} is ${args[index + 1]}`);
        }
    });

    if (res.length > 0) console.log(res.join(", "))
};
