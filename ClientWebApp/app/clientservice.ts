///<reference path="HttpClient.ts" />
/// <reference path="../typings/jquery/jquery.d.ts" />
import { Injectable } from "@angular/core";
import { Client } from "./client";
import { BaseService } from "./baseservice";

@Injectable()
export class ClientService extends BaseService<Client> {
    createEmptyDataObject(): Client {
        return new Client();
    }
    constructor() {
        super();
    }
    search(name: string, callback: (data: Array<Client>)=> any): void {
    // testdata til controller supports this.
        var clients: Array<Client> = new Client[1];
        clients[0] = new Client();
        clients[0].id = 1;
        clients[0].name = "SearchName";
        clients[0].vatNumber = "BESEARCH";
        callback(clients);
        // remove comments once controller supports this.
        // super.searchObjects("?$name=" + name, callback);
    }
    getClients(callback: (data: Array<Client>) => any): void {
        super.getObjects(callback);
    }
    getClient(id: number, callback: (data: Client) => any): void {
        super.getObject(id, callback);
    }
    insertClient(client: Client, callback: (data: Client) => any): void {
        super.insertObject(client, callback);
    }
    updateClient(client: Client, callback: (data: Client) => any): void {
        super.updateObject(client, callback);
    }
    delete(id: number, callback: (data: any) => any):void {
        super.delete(id,callback);
    }
}