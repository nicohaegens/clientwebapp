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
var ClientSearchComponent = (function () {
    function ClientSearchComponent(router, clientService) {
        this.router = router;
        this.clientService = clientService;
    }
    ClientSearchComponent.prototype.ngOnInit = function () {
        this.clientService.search("SearchName", this.callback);
    };
    ClientSearchComponent.prototype.callback = function (clients) {
        this.clients = clients;
    };
    ClientSearchComponent.prototype.serviceError = function (xhr, ajaxOptions, thrown) {
        this.error = thrown;
    };
    ClientSearchComponent.prototype.gotoDetail = function (client) {
        var link = ["/detail", client.id];
        this.router.navigate(link);
    };
    ClientSearchComponent = __decorate([
        core_1.Component({
            selector: "client-search",
            templateUrl: "app/client-search.component.html",
            styleUrls: ["app/client-search.component.css"],
            providers: [clientservice_1.ClientService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, clientservice_1.ClientService])
    ], ClientSearchComponent);
    return ClientSearchComponent;
}());
exports.ClientSearchComponent = ClientSearchComponent;
//# sourceMappingURL=client-search.component.js.map