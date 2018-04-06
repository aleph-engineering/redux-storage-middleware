import Sync from './synchronizer';
import * as dataSaver from './../storage/dataSaver';
import * as hierarchyResolver from './../sync/hierarchyResolver';

describe('Suite of tests for the synchronizer function', () => {
    const state = {
        token: 'abhy-12tt-jf78-ml23-jk34-1111',
    };

    beforeEach(() => {
        dataSaver.default = jest.fn();
        hierarchyResolver.default = jest.fn();
    });

    test('should not call hierarchyResolver when hierarchy is not defined in sync object', () => {
        const action = {
            type: 'CHANGE_USER_TOKEN',
            userToken: 'abhy-12tt-jf78-ml23-jk34',
            sync: [
                {
                    name: 'token',
                    where: ['session', 'local'],
                },
            ],
        };
        Sync(action, state);
        expect(hierarchyResolver.default).toHaveBeenCalledTimes(0);
    });

    test('should call hierarchyResolver when hierarchy is defined in sync object', () => {
        const action = {
            type: 'CHANGE_USER_TOKEN',
            userToken: 'abhy-12tt-jf78-ml23-jk34',
            sync: [
                {
                    name: 'token',
                    where: ['session', 'local'],
                    hierarchy: ['user'],
                },
            ],
        };
        Sync(action, state);
        expect(hierarchyResolver.default).toHaveBeenCalledTimes(action.sync.length);
        expect(hierarchyResolver.default).toHaveBeenCalledWith(
            action.sync[0].name,
            action.sync[0].hierarchy,
            state
        );
    });

    test('should call dataSaver with none place parameter if where is not defined', () => {
        const action = {
            type: 'CHANGE_USER_TOKEN',
            userToken: 'abhy-12tt-jf78-ml23-jk34',
            sync: [
                {
                    key: 'userToken',
                    name: 'token',
                },
            ],
        };
        Sync(action, state);
        expect(dataSaver.default).toHaveBeenCalledTimes(1);
        expect(dataSaver.default).toHaveBeenCalledWith({
            key: action.sync[0].key,
            value: state.token,
        });
    });

    test('should call dataSaver with place parameter if where is of type string', () => {
        const action = {
            type: 'CHANGE_USER_TOKEN',
            userToken: 'abhy-12tt-jf78-ml23-jk34',
            sync: [
                {
                    key: 'userToken',
                    name: 'token',
                    where: 'session',
                },
            ],
        };
        Sync(action, state);
        expect(dataSaver.default).toHaveBeenCalledTimes(1);
        expect(dataSaver.default).toHaveBeenCalledWith(
            { key: action.sync[0].key, value: state.token },
            action.sync[0].where
        );
    });

    test('should call dataSaver with place parameter as many times as items has where is of type array', () => {
        const action = {
            type: 'CHANGE_USER_TOKEN',
            userToken: 'abhy-12tt-jf78-ml23-jk34',
            sync: [
                {
                    key: 'userToken',
                    name: 'token',
                    where: ['session', 'local'],
                },
            ],
        };
        Sync(action, state);
        expect(dataSaver.default).toHaveBeenCalledTimes(action.sync[0].where.length);
        expect(dataSaver.default).toHaveBeenCalledWith(
            { key: action.sync[0].key, value: state.token },
            action.sync[0].where[0]
        );
        expect(dataSaver.default).toHaveBeenCalledWith(
            { key: action.sync[0].key, value: state.token },
            action.sync[0].where[1]
        );
    });
});
