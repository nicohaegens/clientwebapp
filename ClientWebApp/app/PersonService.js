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
var core_1 = require("@angular/core");
var person_1 = require("./person");
var baseservice_1 = require("./baseservice");
var PersonService = (function (_super) {
    __extends(PersonService, _super);
    function PersonService() {
        _super.call(this);
    }
    PersonService.prototype.createEmptyDataObject = function () {
        return new person_1.Person();
    };
    PersonService.prototype.getPersons = function (callback) {
        _super.prototype.getObjects.call(this, callback);
    };
    PersonService.prototype.getPerson = function (id, callback) {
        _super.prototype.getObject.call(this, id, callback);
    };
    PersonService.prototype.updatePerson = function (person, callback) {
        _super.prototype.updateObject.call(this, person, callback);
    };
    PersonService.prototype.delete = function (id, callback) {
        _super.prototype.delete.call(this, id, callback);
    };
    PersonService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], PersonService);
    return PersonService;
}(baseservice_1.BaseService));
exports.PersonService = PersonService;
//# sourceMappingURL=PersonService.js.map