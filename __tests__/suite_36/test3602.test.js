
describe('Test Suite 3602', () => {
    test('addition test case 36020', () => {
        expect(2 + 2).toBe(4);
    });

    test('subtraction test case 36021', () => {
        expect(5 - 3).toBe(2);
    });

    test('multiplication test case 36022', () => {
        expect(3 * 4).toBe(12);
    });

    test('division test case 36023', () => {
        expect(10 / 2).toBe(5);
    });

    test('string concatenation test case 36024', () => {
        expect("hello" + "world").toBe("helloworld");
    });

    test('array manipulation test case 36025', () => {
        expect([1, 2, 3].length).toBe(3);
    });

    test('object properties test case 36026', () => {
        expect({ name: "test" }.name).toBe("test");
    });

    test('boolean operations test case 36027', () => {
        expect(true && true).toBe(true);
    });

    test('number comparison test case 36028', () => {
        expect(10 > 5).toBe(true);
    });

    test('string manipulation test case 36029', () => {
        expect("test".toUpperCase()).toBe("TEST");
    });
});