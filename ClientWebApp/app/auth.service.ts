import { Injectable } from "@angular/core";

import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/of";
import "rxjs/add/operator/do";
import "rxjs/add/operator/delay";

@Injectable()
export class AuthService {
    isLoggedIn: boolean = false;

    // store the URL so we can redirect after logging in
    redirectUrl: string;

    login(callback: (loggedIn: boolean) => any) {
        this.isLoggedIn = true;
        callback(this.isLoggedIn);
    }

    logout() {
        this.isLoggedIn = false;
    }
}