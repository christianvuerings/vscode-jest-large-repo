
describe('Test Suite 12130', () => {
    test('addition test case 121300', () => {
        expect(2 + 2).toBe(4);
    });

    test('subtraction test case 121301', () => {
        expect(5 - 3).toBe(2);
    });

    test('multiplication test case 121302', () => {
        expect(3 * 4).toBe(12);
    });

    test('division test case 121303', () => {
        expect(10 / 2).toBe(5);
    });

    test('string concatenation test case 121304', () => {
        expect("hello" + "world").toBe("helloworld");
    });

    test('array manipulation test case 121305', () => {
        expect([1, 2, 3].length).toBe(3);
    });

    test('object properties test case 121306', () => {
        expect({ name: "test" }.name).toBe("test");
    });

    test('boolean operations test case 121307', () => {
        expect(true && true).toBe(true);
    });

    test('number comparison test case 121308', () => {
        expect(10 > 5).toBe(true);
    });

    test('string manipulation test case 121309', () => {
        expect("test".toUpperCase()).toBe("TEST");
    });
});