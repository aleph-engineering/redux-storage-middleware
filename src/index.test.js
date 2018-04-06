import mockStore from './utils/mocks/mockStore';
import reduxSorage from './index';
import * as Sync from './../src/utils/sync/synchronizer';

describe('Suite of tests for the redux storage middleware', () => {
    const store = mockStore();
    const next = () => {};
    const action = 'anyAction';

    test('should call Sync function with valid parameters', () => {
        Sync.default = jest.fn();
        reduxSorage(store)(next)(action);
        expect(Sync.default).toHaveBeenCalledTimes(1);
        expect(Sync.default).toHaveBeenCalledWith(action, store.getState());
    });
});
