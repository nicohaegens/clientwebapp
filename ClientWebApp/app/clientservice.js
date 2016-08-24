"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
///<reference path="HttpClient.ts" />
/// <reference path="../typings/jquery/jquery.d.ts" />
var core_1 = require("@angular/core");
var client_1 = require("./client");
var baseservice_1 = require("./baseservice");
var ClientService = (function (_super) {
    __extends(ClientService, _super);
    function ClientService() {
        _super.call(this);
    }
    ClientService.prototype.createEmptyDataObject = function () {
        return new client_1.Client();
    };
    ClientService.prototype.search = function (name, callback) {
        // testdata til controller supports this.
        var clients = new client_1.Client[1];
        clients[0] = new client_1.Client();
        clients[0].id = 1;
        clients[0].name = "SearchName";
        clients[0].vatNumber = "BESEARCH";
        callback(clients);
        // remove comments once controller supports this.
        // super.searchObjects("?$name=" + name, callback);
    };
    ClientService.prototype.getClients = function (callback) {
        _super.prototype.getObjects.call(this, callback);
    };
    ClientService.prototype.getClient = function (id, callback) {
        _super.prototype.getObject.call(this, id, callback);
    };
    ClientService.prototype.insertClient = function (client, callback) {
        _super.prototype.insertObject.call(this, client, callback);
    };
    ClientService.prototype.updateClient = function (client, callback) {
        _super.prototype.updateObject.call(this, client, callback);
    };
    ClientService.prototype.delete = function (id, callback) {
        _super.prototype.delete.call(this, id, callback);
    };
    ClientService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ClientService);
    return ClientService;
}(baseservice_1.BaseService));
exports.ClientService = ClientService;
//# sourceMappingURL=clientservice.js.map