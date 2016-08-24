import {Base} from "./base";
import {Address} from "./address";
import {Place} from "./place";
export class Person extends Base<Person> {
    firstName: string;
    lastName: string;
    mainResidence: Address;
    constructor() {
        super();
    }
}