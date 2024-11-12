
describe('Test Suite 1402', () => {
    test('addition test case 14020', () => {
        expect(2 + 2).toBe(4);
    });

    test('subtraction test case 14021', () => {
        expect(5 - 3).toBe(2);
    });

    test('multiplication test case 14022', () => {
        expect(3 * 4).toBe(12);
    });

    test('division test case 14023', () => {
        expect(10 / 2).toBe(5);
    });

    test('string concatenation test case 14024', () => {
        expect("hello" + "world").toBe("helloworld");
    });

    test('array manipulation test case 14025', () => {
        expect([1, 2, 3].length).toBe(3);
    });

    test('object properties test case 14026', () => {
        expect({ name: "test" }.name).toBe("test");
    });

    test('boolean operations test case 14027', () => {
        expect(true && true).toBe(true);
    });

    test('number comparison test case 14028', () => {
        expect(10 > 5).toBe(true);
    });

    test('string manipulation test case 14029', () => {
        expect("test".toUpperCase()).toBe("TEST");
    });
});