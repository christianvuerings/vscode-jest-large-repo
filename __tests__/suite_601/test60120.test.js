
describe('Test Suite 60120', () => {
    test('addition test case 601200', () => {
        expect(2 + 2).toBe(4);
    });

    test('subtraction test case 601201', () => {
        expect(5 - 3).toBe(2);
    });

    test('multiplication test case 601202', () => {
        expect(3 * 4).toBe(12);
    });

    test('division test case 601203', () => {
        expect(10 / 2).toBe(5);
    });

    test('string concatenation test case 601204', () => {
        expect("hello" + "world").toBe("helloworld");
    });

    test('array manipulation test case 601205', () => {
        expect([1, 2, 3].length).toBe(3);
    });

    test('object properties test case 601206', () => {
        expect({ name: "test" }.name).toBe("test");
    });

    test('boolean operations test case 601207', () => {
        expect(true && true).toBe(true);
    });

    test('number comparison test case 601208', () => {
        expect(10 > 5).toBe(true);
    });

    test('string manipulation test case 601209', () => {
        expect("test".toUpperCase()).toBe("TEST");
    });
});