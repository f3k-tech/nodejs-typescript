import * as ExampleSpace from "../index";

let ES = new ExampleSpace.ExampleClass


describe('Get default privatestring', function () {
    test("privatestring should be 'private text'", () => {
        expect(ES.privatestring).toBe("private text");
    });
});

describe('Set privatestring', function () {
    test("Change privatestring to 'new text'", () => {
        ES.privatestring = "new text";
    });
});

describe('Get new privatestring', function () {
    test("privatestring should be 'new text'", () => {
        expect(ES.privatestring).toBe("new text");
    });
});