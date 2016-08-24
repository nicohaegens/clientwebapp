import { Component, OnInit }  from "@angular/core";
import { ActivatedRoute }     from "@angular/router";
import { Observable }         from "rxjs/Observable";
import "rxjs/add/operator/map";

@Component({
    templateUrl: "app/client-admin.component.html"
})
export class ClientAdminComponent implements OnInit {
    sessionId: Observable<string>;
    token: Observable<string>;

    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {
        // capture the session ID if available
/*        this.sessionId = this.route
            .queryParams
            .map(params => params['session_id'] || 'None');

        // capture the fragment if available
        this.token = this.route
            .fragment
            .map(fragment => fragment || 'None');*/
    }
}