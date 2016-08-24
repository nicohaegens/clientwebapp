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
var clientservice_1 = require("./clientservice");
var AppComponent = (function () {
    function AppComponent(clientService) {
        this.clientService = clientService;
        this.title = "Clients";
    }
    Object.defineProperty(AppComponent.prototype, "clients", {
        get: function () {
            return this._clients;
        },
        set: function (clients) {
            this._clients = clients;
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.onSelect = function (client) {
        this.selectedClient = client;
    };
    AppComponent.prototype.getClients = function () {
        var localThis = this;
        this.clientService.getClients(function (el) {
            localThis.callBack(el);
        });
    };
    AppComponent.prototype.callBack = function (clients) {
        this.clients = clients;
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getClients();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: "app/app.component.html",
            styleUrls: ["app/app.component.css"],
            providers: [clientservice_1.ClientService]
        }), 
        __metadata('design:paramtypes', [clientservice_1.ClientService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map