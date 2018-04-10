import isBrowserEnv from './../environment';

export const save = (key, value) => {
    if (isBrowserEnv()) {
        const json = JSON.stringify(value);
        localStorage.setItem(key, json);
    }
};

export const get = key => {
    if (isBrowserEnv()) {
        const json = localStorage.getItem(key);
        return JSON.parse(json);
    }
    return undefined;
};

export const remove = key => {
    if (isBrowserEnv()) {
        localStorage.removeItem(key);
    }
};
