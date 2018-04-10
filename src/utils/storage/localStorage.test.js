import * as storage from './localStorage';
import * as environment from './../environment';

describe('Suite of tests for the local storage util', () => {
    const storageKey = 'storageKey';
    const spyBrowser = jest.spyOn(environment, 'default');

    afterEach(() => {
        jest.restoreAllMocks();
    });

    test('save should call setItem of the localStorage', () => {
        const spy = jest.spyOn(localStorage, 'setItem');
        storage.save(storageKey, {});
        expect(spy).toHaveBeenCalledTimes(1);
        expect(spyBrowser).toHaveBeenCalledTimes(1);
        expect(spy).toHaveBeenCalledWith(storageKey, '{}');
    });

    test('get should call getItem of the localStorage', () => {
        const spy = jest.spyOn(localStorage, 'getItem');
        storage.get(storageKey);
        expect(spy).toHaveBeenCalledTimes(1);
        expect(spyBrowser).toHaveBeenCalledTimes(1);
        expect(spy).toHaveBeenCalledWith(storageKey);
    });

    test('remove should call removeItem of the localStorage', () => {
        const spy = jest.spyOn(localStorage, 'removeItem');
        storage.remove(storageKey);
        expect(spy).toHaveBeenCalledTimes(1);
        expect(spyBrowser).toHaveBeenCalledTimes(1);
        expect(spy).toHaveBeenCalledWith(storageKey);
    });

    test('get should return undefined if not in browser environment', () => {
        const spy = jest.spyOn(environment, 'default').mockReturnValue(false);
        expect(storage.get(storageKey)).toBe(undefined);
    });
});
