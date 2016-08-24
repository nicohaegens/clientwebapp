import { Component, OnInit } from "@angular/core";
import { Client } from "./client";
import { ClientService } from "./clientservice";

@Component({
    selector: "my-app",
    templateUrl: "app/app.component.html",
    styleUrls: ["app/app.component.css"],
    providers: [ClientService]
})
export class AppComponent implements OnInit {
    title = "Clients";
    selectedClient: Client;
    private _clients: Array<Client>;
    get clients(): Array<Client> {
        return this._clients;
    }
    set clients(clients: Array<Client>) {
        this._clients = clients;
    }
    onSelect(client: Client): void {
        this.selectedClient = client;
    }
    constructor(private clientService: ClientService) {}
    getClients(): void {
        let localThis: AppComponent = this;
        this.clientService.getClients((el: Array<Client>) => {
            localThis.callBack(el);
        });
    }

    callBack(clients: Array<Client>):void {
        this.clients = clients;
    }
    ngOnInit(): void {
        this.getClients();
    }
}