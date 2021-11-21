import * as ExampleSpace from "../index";

let ES = new ExampleSpace.ExampleClass


describe('Get default publicNumber', function () {
    test("publicNumber should be 1234", () => {
        expect(ES.publicNumber).toBe(1234);
    });
});