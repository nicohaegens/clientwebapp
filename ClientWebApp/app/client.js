"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var base_1 = require("./base");
var Client = (function (_super) {
    __extends(Client, _super);
    function Client() {
        _super.call(this);
        this.relations = new Array();
    }
    Client.prototype.addRelation = function (relation) {
        this.relations.push(relation);
    };
    ;
    return Client;
}(base_1.Base));
exports.Client = Client;
//# sourceMappingURL=client.js.map