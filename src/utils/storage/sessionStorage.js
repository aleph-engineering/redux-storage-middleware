export const save = (key, value) => {
    if (typeof document !== 'undefined') {
        const json = JSON.stringify(value);
        sessionStorage.setItem(key, json);
    }
};

export const get = key => {
    if (typeof document !== 'undefined') {
        const json = sessionStorage.getItem(key);
        return JSON.parse(json);
    }
    return undefined;
};

export const remove = key => {
    if (typeof document !== 'undefined') {
        sessionStorage.removeItem(key);
    }
};
