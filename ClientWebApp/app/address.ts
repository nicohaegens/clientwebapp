import {Base} from "./base";
import {Place} from "./place";
export class Address extends Base<Address> {
    street: string;
    streetNumber: string;
    place: Place;
}