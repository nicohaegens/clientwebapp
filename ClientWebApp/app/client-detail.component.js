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
var client_1 = require("./client");
var clientservice_1 = require("./clientservice");
var router_1 = require("@angular/router");
var ClientDetailComponent = (function () {
    function ClientDetailComponent(clientService, route) {
        this.clientService = clientService;
        this.route = route;
        this.close = new core_1.EventEmitter();
        this.navigated = false;
        clientService.error = this.serviceError;
    }
    ClientDetailComponent.prototype.serviceError = function (xhr, ajaxOptions, thrown) {
        this.error = thrown;
    };
    ClientDetailComponent.prototype.callBack = function (client) {
        this.client = client;
    };
    ClientDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var idKey = "id";
        this.route.params.forEach(function (params) {
            if (params[idKey] !== undefined) {
                var id = +params[idKey];
                _this.navigated = true;
                _this.clientService.getClient(id, _this.callBack);
            }
            else {
                _this.navigated = false;
                _this.client = new client_1.Client();
            }
        });
    };
    ClientDetailComponent.prototype.goBack = function (savedClient) {
        if (savedClient === void 0) { savedClient = null; }
        this.close.emit(savedClient);
        if (this.navigated) {
            window.history.back();
        }
    };
    ClientDetailComponent.prototype.save = function () {
        this.clientService.updateClient(this.client, this.callBack);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', client_1.Client)
    ], ClientDetailComponent.prototype, "client", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ClientDetailComponent.prototype, "close", void 0);
    ClientDetailComponent = __decorate([
        core_1.Component({
            selector: "client-detail",
            templateUrl: "app/client-detail.component.html",
            styleUrls: ["app/client-detail.component.css"]
        }), 
        __metadata('design:paramtypes', [clientservice_1.ClientService, router_1.ActivatedRoute])
    ], ClientDetailComponent);
    return ClientDetailComponent;
}());
exports.ClientDetailComponent = ClientDetailComponent;
//# sourceMappingURL=client-detail.component.js.map