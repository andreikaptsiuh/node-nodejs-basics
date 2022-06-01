export const parseEnv = () => {
    const allEnvironment = process.env;

    const res = [];

    for (const env in allEnvironment) {
        const envPrefix = String(env).slice(0,4);

        if (envPrefix === "RSS_") {
            res.push(`${env}=${allEnvironment[env]}`);
        }
    }

    if (res.length > 0) console.log(res.join("; "));
};
