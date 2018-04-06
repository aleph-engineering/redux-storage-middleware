import dataSaver from './../storage/dataSaver';
import hierarchyResolver from './hierarchyResolver';

export default (action, state) => {
    if (action.sync) {
        action.sync.forEach(object => {
            const key = object.key || object.name;
            const value = !object.hierarchy
                ? state[object.name]
                : hierarchyResolver(object.name, object.hierarchy, state);
            if (object.where) {
                if (typeof object.where === 'string') {
                    dataSaver({ key, value }, object.where);
                } else if (Array.isArray(object.where)) {
                    object.where.forEach(place => {
                        dataSaver({ key, value }, place);
                    });
                }
            } else {
                dataSaver({ key, value });
            }
        });
    }
};
