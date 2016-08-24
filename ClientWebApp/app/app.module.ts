import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule} from "@angular/forms";
import { AppComponent }  from "./app.component";
import { routing, appRoutingProviders } from "./app.routing";
import { ClientComponent}from "./client.component";
import { ClientDetailComponent} from "./client-detail.component";
import { ClientSearchComponent} from "./client-search.component";
import { DashboardComponent} from "./dashboard.component";

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, ClientComponent, ClientDetailComponent, ClientSearchComponent, DashboardComponent],
    bootstrap: [AppComponent],
    providers: [appRoutingProviders]
})
export class AppModule { }