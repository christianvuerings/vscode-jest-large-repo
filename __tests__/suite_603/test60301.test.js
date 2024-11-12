
describe('Test Suite 60301', () => {
    test('addition test case 603010', () => {
        expect(2 + 2).toBe(4);
    });

    test('subtraction test case 603011', () => {
        expect(5 - 3).toBe(2);
    });

    test('multiplication test case 603012', () => {
        expect(3 * 4).toBe(12);
    });

    test('division test case 603013', () => {
        expect(10 / 2).toBe(5);
    });

    test('string concatenation test case 603014', () => {
        expect("hello" + "world").toBe("helloworld");
    });

    test('array manipulation test case 603015', () => {
        expect([1, 2, 3].length).toBe(3);
    });

    test('object properties test case 603016', () => {
        expect({ name: "test" }.name).toBe("test");
    });

    test('boolean operations test case 603017', () => {
        expect(true && true).toBe(true);
    });

    test('number comparison test case 603018', () => {
        expect(10 > 5).toBe(true);
    });

    test('string manipulation test case 603019', () => {
        expect("test".toUpperCase()).toBe("TEST");
    });
});