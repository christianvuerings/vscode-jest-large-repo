
describe('Test Suite 60121', () => {
    test('addition test case 601210', () => {
        expect(2 + 2).toBe(4);
    });

    test('subtraction test case 601211', () => {
        expect(5 - 3).toBe(2);
    });

    test('multiplication test case 601212', () => {
        expect(3 * 4).toBe(12);
    });

    test('division test case 601213', () => {
        expect(10 / 2).toBe(5);
    });

    test('string concatenation test case 601214', () => {
        expect("hello" + "world").toBe("helloworld");
    });

    test('array manipulation test case 601215', () => {
        expect([1, 2, 3].length).toBe(3);
    });

    test('object properties test case 601216', () => {
        expect({ name: "test" }.name).toBe("test");
    });

    test('boolean operations test case 601217', () => {
        expect(true && true).toBe(true);
    });

    test('number comparison test case 601218', () => {
        expect(10 > 5).toBe(true);
    });

    test('string manipulation test case 601219', () => {
        expect("test".toUpperCase()).toBe("TEST");
    });
});