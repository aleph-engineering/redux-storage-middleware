export default (root, hierarchy, state) => {
    if (typeof hierarchy === 'string') {
        return state[hierarchy][root];
    } else if (Array.isArray(hierarchy)) {
        let value = state;
        hierarchy.forEach(object => {
            value = value[object];
        });
        return value[root];
    }
    return state[root];
};
