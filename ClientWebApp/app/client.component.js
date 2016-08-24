"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var clientservice_1 = require("./clientservice");
var ClientComponent = (function () {
    function ClientComponent(clientService, router) {
        this.clientService = clientService;
        this.router = router;
        this.clients = new Array();
        this.clientService.error = this.serviceError;
    }
    ClientComponent.prototype.callBack = function (clients) {
        this.clients = clients;
    };
    ClientComponent.prototype.getClients = function () {
        this.clientService.getClients(this.callBack);
    };
    ClientComponent.prototype.ngOnInit = function () {
        this.getClients();
    };
    ClientComponent.prototype.onSelect = function (client) {
        this.selectedClient = client;
        this.addingClient = false;
    };
    ClientComponent.prototype.addClient = function () {
        this.addingClient = true;
        this.selectedClient = null;
    };
    ClientComponent.prototype.close = function (savedClient) {
        this.addingClient = false;
        if (savedClient) {
            this.getClients();
        }
    };
    ClientComponent.prototype.deleted = function (client) {
        this.clients = this.clients.filter(function (c) { return c !== client; });
        if (this.selectedClient === client) {
            this.selectedClient = null;
        }
    };
    ClientComponent.prototype.serviceError = function (xhr, ajaxOptions, thrown) {
        this.error = thrown;
    };
    ClientComponent.prototype.delete = function (deletedClient, event) {
        event.stopPropagation();
        this.clientService.delete(deletedClient.id, this.deleted);
    };
    ClientComponent.prototype.goToDetail = function () {
        this.router.navigate(["/detail", this.selectedClient.id]);
    };
    ClientComponent = __decorate([
        core_1.Component({
            selector: "client-app",
            templateUrl: "app/client.component.html",
            styleUrls: ["app/client.component.css"]
        }), 
        __metadata('design:paramtypes', [clientservice_1.ClientService, router_1.Router])
    ], ClientComponent);
    return ClientComponent;
}());
exports.ClientComponent = ClientComponent;
//# sourceMappingURL=client.component.js.map