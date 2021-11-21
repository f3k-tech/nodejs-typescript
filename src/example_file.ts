import * as ExampleSpace from "./index";

export class ExampleClass {
    /** @ignore */
    #privatestring: string = "private text"

    /**
     * This is a public variable/endpoint which you can access directly
     * ```js
     * // Example
     * const ES = ExampleSpace.ExampleClass()
     * ES.publicnumber = 1234
     * ```
     */
    public publicnumber: number = 1234

    /**
     * With getters and setters you can add logic to your variables/endpoints
     * ```js
     * // Example
     * const ES = ExampleSpace.ExampleClass()
     * ES.privatestring = "My Pretty String"
     * ```
     */
    public set privatestring(privatestring: string) {
        // Add logic here
        this.#privatestring = privatestring
    }
    public get privatestring() {
        // Add logic here
        return this.#privatestring
    }
}