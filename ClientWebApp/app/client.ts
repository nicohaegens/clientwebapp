import {Base} from "./base";
import {ClientPersonRelation} from "./clientpersonrelation";
export class Client extends Base<Client> {
    name: string;
    vatNumber: string;
    relations: Array<ClientPersonRelation>;
    constructor() {
        super();
        this.relations = new Array<ClientPersonRelation>();
    }
    addRelation(relation: ClientPersonRelation): void {
        this.relations.push(relation);
    };
}