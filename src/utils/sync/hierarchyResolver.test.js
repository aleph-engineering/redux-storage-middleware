import hierarchyResolver from './hierarchyResolver';

describe('Suite of tests for the hierarchy resolver util', () => {
    const root = 'children';
    const hierarchyString = 'dad';
    const hierarchyArray = ['grandpa', 'dad'];
    const stateDefault = {
        children: 'florian',
    };
    const stateSimple = {
        dad: {
            children: 'florian',
        },
    };
    const stateComplex = {
        grandpa: {
            dad: {
                children: 'tino',
            },
        },
    };

    test('should return valid value with hierarchy as string provided', () => {
        expect(hierarchyResolver(root, hierarchyString, stateSimple)).toBe(
            stateSimple.dad.children,
        );
    });

    test('should return valid value with hierarchy as array provided', () => {
        expect(hierarchyResolver(root, hierarchyArray, stateComplex)).toBe(
            stateComplex.grandpa.dad.children,
        );
    });

    test('should return valid default value is hierarchy is not a string or array', () => {
        expect(hierarchyResolver(root, null, stateDefault)).toBe(
            stateDefault.children,
        );
    });
});
