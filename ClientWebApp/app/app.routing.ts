import { Routes, RouterModule } from "@angular/router";

import { DashboardComponent }   from "./dashboard.component";
import { ClientComponent }      from "./client.component";
import { ClientDetailComponent }  from "./client-detail.component";

const appRoutes: Routes = [
    {
        path: "",
        redirectTo: "/dashboard",
        pathMatch: "full"
    },
    {
        path: "dashboard",
        component: DashboardComponent
    },
    {
        path: "detail/:id",
        component: ClientDetailComponent
    },
    {
        path: "client",
        component: ClientComponent
    }
];

export const routing = RouterModule.forRoot(appRoutes);
export const appRoutingProviders: any[] = [
];

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/