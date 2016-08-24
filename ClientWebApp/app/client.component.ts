import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Client } from "./client";
import { ClientService } from "./clientservice";
@Component({
    selector: "client-app",
    templateUrl: "app/client.component.html",
    styleUrls: ["app/client.component.css"]
})
export class ClientComponent implements OnInit {
    clients: Array<Client>;
    selectedClient: Client;
    addingClient: boolean;
    error: string;
    constructor(private clientService: ClientService, private router: Router) {
        this.clients = new Array<Client>();
        this.clientService.error = this.serviceError;
    }

    private callBack(clients: Array<Client>): void {
        this.clients = clients;
    }
    getClients(): void {
        this.clientService.getClients(this.callBack);
    }
    ngOnInit(): void {
        this.getClients();
    }
    onSelect(client: Client): void {
        this.selectedClient = client;
        this.addingClient = false;
    }
    addClient(): void {
        this.addingClient = true;
        this.selectedClient = null;
    }
    close(savedClient: Client): void {
        this.addingClient = false;
        if (savedClient) {
            this.getClients();
        }
    }

    private deleted(client: Client): void {
        this.clients = this.clients.filter((c: Client) => c !== client);
        if (this.selectedClient === client) {
            this.selectedClient = null;
        }
    }
    serviceError(xhr: JQueryXHR, ajaxOptions: string, thrown: string): void {
        this.error = thrown;
    }
    delete(deletedClient: Client, event: any): void {
        event.stopPropagation();
        this.clientService.delete(deletedClient.id, this.deleted);
    }

    goToDetail(): void {
        this.router.navigate(["/detail", this.selectedClient.id]);
    }

}