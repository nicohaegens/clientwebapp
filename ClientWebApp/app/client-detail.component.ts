import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {Client} from "./client";
import {ClientService} from "./clientservice";
import {ActivatedRoute, Params} from "@angular/router";
@Component({
    selector: "client-detail",
    templateUrl: "app/client-detail.component.html",
    styleUrls: ["app/client-detail.component.css"]
})
export class ClientDetailComponent implements OnInit {
    error: string;
    @Input()
    client: Client;
    @Output() close = new EventEmitter();
    serviceError(xhr: JQueryXHR, ajaxOptions: string, thrown: string): void {
        this.error = thrown;
    }
    navigated = false;
    constructor(private clientService: ClientService, private route: ActivatedRoute) {
        clientService.error = this.serviceError;
    }
    callBack(client: Client): void {
        this.client = client;
    }
    ngOnInit(): void {
        const idKey: string = "id";
        this.route.params.forEach((params: Params) => {
            if (params[idKey] !== undefined) {
                let id: number = +params[idKey];
                this.navigated = true;
                this.clientService.getClient(id, this.callBack);
            } else {
                this.navigated = false;
                this.client = new Client();
            }
        });
    }
    goBack(savedClient: Client = null): void {
        this.close.emit(savedClient);
        if (this.navigated) {
            window.history.back();
        }
    }
    save(): void {
        this.clientService.updateClient(this.client, this.callBack);
    }
}