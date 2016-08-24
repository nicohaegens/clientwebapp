import {Base} from "./base";
import {Role} from "./role";
import {ApplicationRoleSet} from "./applicationroleset";
export class ApplicationRole extends Base<ApplicationRole> {
    roleSet: ApplicationRoleSet;
    role: Role;
}