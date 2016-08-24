"use strict";
var router_1 = require("@angular/router");
var dashboard_component_1 = require("./dashboard.component");
var client_component_1 = require("./client.component");
var client_detail_component_1 = require("./client-detail.component");
var appRoutes = [
    {
        path: "",
        redirectTo: "/dashboard",
        pathMatch: "full"
    },
    {
        path: "dashboard",
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: "detail/:id",
        component: client_detail_component_1.ClientDetailComponent
    },
    {
        path: "client",
        component: client_component_1.ClientComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
exports.appRoutingProviders = [];
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=app.routing.js.map