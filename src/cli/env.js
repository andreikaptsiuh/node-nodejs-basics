export const parseEnv = () => {
    const allEnviroment = process.env;

    const res = [];

    for (const env in allEnviroment) {
        const envPrefix = String(env).slice(0,4);

        if (envPrefix === "RSS_") {
            res.push(`${env}=${allEnviroment[env]}`);
        }
    }

    if (res.length > 0) console.log(res.join('; '));
};
