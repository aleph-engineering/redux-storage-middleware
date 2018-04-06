import * as session from './sessionStorage';
import * as local from './localStorage';

export default ({ key, value }, place) => {
    switch (place) {
        case 'session':
            session.save(key, value);
            break;
        case 'local':
            local.save(key, value);
            break;
        default:
            session.save(key, value);
            break;
    }
};
