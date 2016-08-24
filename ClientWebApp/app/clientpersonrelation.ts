import {Base} from "./base";
import {Client} from "./client";
import {Person} from "./person";
export class ClientPersonRelation extends Base<ClientPersonRelation> {
    client: Client;
    person: Person;
}