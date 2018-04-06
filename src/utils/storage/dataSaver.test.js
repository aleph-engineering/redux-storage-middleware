import dataSaver from './dataSaver';
import * as session from './sessionStorage';
import * as local from './localStorage';

describe('Suite of tests for the data saver util', () => {
    const keyValuePair = { key: 'anyKey', value: 'anyValue' };

    test('should call session.save function if attribute place is not provided', () => {
        const spy = jest.spyOn(session, 'save');
        dataSaver(keyValuePair);
        expect(spy).toHaveBeenCalledTimes(1);
        expect(spy).toHaveBeenCalledWith(keyValuePair.key, keyValuePair.value);
    });

    test('should call session.save function if attribute place is equal to "session"', () => {
        const spy = jest.spyOn(session, 'save');
        dataSaver(keyValuePair, 'session');
        expect(spy).toHaveBeenCalledTimes(2);
        expect(spy).toHaveBeenCalledWith(keyValuePair.key, keyValuePair.value);
    });

    test('should call local.save function if attribute place is equal to "local"', () => {
        const spy = jest.spyOn(local, 'save');
        dataSaver(keyValuePair, 'local');
        expect(spy).toHaveBeenCalledTimes(1);
        expect(spy).toHaveBeenCalledWith(keyValuePair.key, keyValuePair.value);
    });
});