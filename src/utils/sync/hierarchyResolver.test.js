import hierarchyResolver from './hierarchyResolver';

describe('Suite of tests for the hierarchy resolver util', () => {
    const root = 'children';

    test('should return valid value with hierarchy as string provided', () => {
        const hierarchyString = 'dad';
        const state = {
            dad: {
                children: 'florian',
            },
        };
        expect(hierarchyResolver(root, hierarchyString, state)).toBe(
            state.dad.children,
        );
    });

    test('should return valid value with hierarchy as array provided', () => {
        const hierarchyArray = ['grandpa', 'dad'];
        const state = {
            grandpa: {
                dad: {
                    children: 'tino',
                },
            },
        };
        expect(hierarchyResolver(root, hierarchyArray, state)).toBe(
            state.grandpa.dad.children,
        );
    });

    test('should return valid default value is hierarchy is not a string or array', () => {
        const state = {
            children: 'florian',
        };
        expect(hierarchyResolver(root, null, state)).toBe(
            state.children,
        );
    });
});
