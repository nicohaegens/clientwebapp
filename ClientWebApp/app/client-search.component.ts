import { Component, OnInit } from "@angular/core";
import { Router }            from "@angular/router";
import { Client } from "./client";
import { ClientService } from "./clientservice";

@Component({
    selector: "client-search",
    templateUrl: "app/client-search.component.html",
    styleUrls: ["app/client-search.component.css"],
    providers: [ClientService]
})
export class ClientSearchComponent implements OnInit {
    clients: Array<Client>;
    error: string;
    constructor(private router: Router, private clientService: ClientService) {
    }
    ngOnInit(): void {
        this.clientService.search("SearchName", this.callback);
    }
    callback(clients: Array<Client>): void {
        this.clients = clients;
    }
    serviceError(xhr: JQueryXHR, ajaxOptions: string, thrown: string): void {
        this.error = thrown;
    }
    gotoDetail(client: Client): void {
        let link: any[] = ["/detail", client.id];
        this.router.navigate(link);
    }
}