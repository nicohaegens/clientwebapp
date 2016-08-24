"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var base_1 = require("./base");
var ApplicationRoleSet = (function (_super) {
    __extends(ApplicationRoleSet, _super);
    function ApplicationRoleSet() {
        _super.call(this);
        this.appRoles = new Array();
    }
    return ApplicationRoleSet;
}(base_1.Base));
exports.ApplicationRoleSet = ApplicationRoleSet;
//# sourceMappingURL=applicationroleset.js.map