import {Base} from "./base"
import {Application} from "./application";
import {ApplicationRole} from "./applicationrole";
export class ApplicationRoleSet extends Base<ApplicationRoleSet> {
    app: Application;
    appRoles : Array<ApplicationRole>;
    constructor() {
        super();
        this.appRoles = new Array<ApplicationRole>();
    }
}