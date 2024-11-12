
describe('Test Suite 4060', () => {
    test('addition test case 40600', () => {
        expect(2 + 2).toBe(4);
    });

    test('subtraction test case 40601', () => {
        expect(5 - 3).toBe(2);
    });

    test('multiplication test case 40602', () => {
        expect(3 * 4).toBe(12);
    });

    test('division test case 40603', () => {
        expect(10 / 2).toBe(5);
    });

    test('string concatenation test case 40604', () => {
        expect("hello" + "world").toBe("helloworld");
    });

    test('array manipulation test case 40605', () => {
        expect([1, 2, 3].length).toBe(3);
    });

    test('object properties test case 40606', () => {
        expect({ name: "test" }.name).toBe("test");
    });

    test('boolean operations test case 40607', () => {
        expect(true && true).toBe(true);
    });

    test('number comparison test case 40608', () => {
        expect(10 > 5).toBe(true);
    });

    test('string manipulation test case 40609', () => {
        expect("test".toUpperCase()).toBe("TEST");
    });
});