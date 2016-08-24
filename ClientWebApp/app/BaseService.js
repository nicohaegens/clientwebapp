"use strict";
///<reference path="HttpClient.ts" />
var HttpClient_1 = require("./HttpClient");
var BaseService = (function () {
    function BaseService(dataObject) {
        if (dataObject) {
            this.dataObject = dataObject;
        }
        else {
            this.dataObject = this.createEmptyDataObject();
        }
        if (this.dataObject != null) {
            this.objectUrl = "api/" + this.dataObject.constructor.name;
        }
        this.httpClient = new HttpClient_1.HttpClient();
        this.baseUri = "http://localhost:13144/";
    }
    BaseService.prototype.searchObjects = function (queryString, callback) {
        this.httpClient.get(this.baseUri + this.objectUrl + "/" + queryString, callback, this.error, this.statusCode);
    };
    BaseService.prototype.getObjects = function (callback) {
        this.httpClient.get(this.baseUri + this.objectUrl, callback, this.error, this.statusCode);
    };
    BaseService.prototype.getObject = function (id, callback) {
        this.httpClient.get(this.baseUri + this.objectUrl + "/" + id, callback, this.error, this.statusCode);
    };
    BaseService.prototype.updateObject = function (item, callback) {
        this.httpClient.put(this.baseUri + this.objectUrl, item, callback, this.error, this.statusCode);
    };
    BaseService.prototype.insertObject = function (item, callback) {
        this.httpClient.post(this.baseUri + this.objectUrl, item, callback, this.error, this.statusCode);
    };
    BaseService.prototype.delete = function (id, callback) {
        this.httpClient.delete(this.baseUri + this.objectUrl + "/" + id, callback, this.error, this.statusCode);
    };
    return BaseService;
}());
exports.BaseService = BaseService;
//# sourceMappingURL=BaseService.js.map