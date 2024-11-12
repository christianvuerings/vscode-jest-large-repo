
describe('Test Suite 60122', () => {
    test('addition test case 601220', () => {
        expect(2 + 2).toBe(4);
    });

    test('subtraction test case 601221', () => {
        expect(5 - 3).toBe(2);
    });

    test('multiplication test case 601222', () => {
        expect(3 * 4).toBe(12);
    });

    test('division test case 601223', () => {
        expect(10 / 2).toBe(5);
    });

    test('string concatenation test case 601224', () => {
        expect("hello" + "world").toBe("helloworld");
    });

    test('array manipulation test case 601225', () => {
        expect([1, 2, 3].length).toBe(3);
    });

    test('object properties test case 601226', () => {
        expect({ name: "test" }.name).toBe("test");
    });

    test('boolean operations test case 601227', () => {
        expect(true && true).toBe(true);
    });

    test('number comparison test case 601228', () => {
        expect(10 > 5).toBe(true);
    });

    test('string manipulation test case 601229', () => {
        expect("test".toUpperCase()).toBe("TEST");
    });
});