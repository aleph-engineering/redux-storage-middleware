import Sync from './../src/utils/sync/synchronizer';

const reduxSorageSync = store => next => action => {
    next(action);
    Sync(action, store.getState());
};

export default reduxSorageSync;
