import { Component, OnInit} from "@angular/core";
import { Router } from "@angular/router";
import { ClientService } from "./clientservice";
import { Client } from "./client";
@Component({
    selector: "dashboard",
    templateUrl: "app/dashboard.component.html",
    styleUrls: ["app/dashboard.component.css"],
    providers: [ClientService]
})
export class DashboardComponent implements OnInit {
    constructor(private clientService: ClientService, private router: Router) {}
    clients: Array<Client>;
    callback(clients: Array<Client>): void {
        this.clients = clients;
    }
    ngOnInit(): void {
        this.clientService.getClients(this.callback);
        // this.clientService.search("SearchName", this.callback);
    }
}