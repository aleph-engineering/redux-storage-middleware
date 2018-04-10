import isBrowserEnv from './../environment';

export const save = (key, value) => {
    if (isBrowserEnv()) {
        const json = JSON.stringify(value);
        sessionStorage.setItem(key, json);
    }
};

export const get = key => {
    if (isBrowserEnv()) {
        const json = sessionStorage.getItem(key);
        return JSON.parse(json);
    }
    return undefined;
};

export const remove = key => {
    if (isBrowserEnv()) {
        sessionStorage.removeItem(key);
    }
};
