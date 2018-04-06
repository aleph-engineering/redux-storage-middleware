export const save = (key, value) => {
    if (typeof document !== 'undefined') {
        const json = JSON.stringify(value);
        localStorage.setItem(key, json);
    }
};

export const get = key => {
    if (typeof document !== 'undefined') {
        const json = localStorage.getItem(key);
        return JSON.parse(json);
    }
    return undefined;
};

export const remove = key => {
    if (typeof document !== 'undefined') {
        localStorage.removeItem(key);
    }
};
