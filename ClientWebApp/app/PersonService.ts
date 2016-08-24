import { Injectable } from "@angular/core";
import { Person } from "./person";
import { BaseService } from "./baseservice";
@Injectable()
export class PersonService extends BaseService<Person> {
    createEmptyDataObject(): Person {
        return new Person();
    }
    constructor() {
        super();
    }
    getPersons(callback: (data: Array<Person>) => any): void {
        super.getObjects(callback);
    }
    getPerson(id: number, callback: (data: Person) => any): void {
        super.getObject(id, callback);
    }
    updatePerson(person: Person, callback: (data: Person) => any): void {
        super.updateObject(person, callback);
    }
    delete(id: number, callback: (data: any) => any): void {
        super.delete(id, callback);
    }

}