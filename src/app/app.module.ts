import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { RecordsModule } from "./records/records.module";
import { RecordsComponent } from "./records/records.component";
import { ElectiveFormComponent } from "./records/electiveForm.component";
import { RouterModule } from "@angular/router";
import { RecordsFirstGuard } from "./recordsFirst.guard";

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, RecordsModule, RouterModule.forRoot([
        { path: "records", component: RecordsComponent, canActivate: [RecordsFirstGuard]},
        { path: "electiveForm", component: ElectiveFormComponent, canActivate: [RecordsFirstGuard] },
        { path: "admin", loadChildren: "./admin/admin.module#AdminModule", canActivate: [RecordsFirstGuard]},
        { path: "**", redirectTo: "/records", canActivate: [RecordsFirstGuard]}
        ])],
    providers: [RecordsFirstGuard],
    bootstrap: [AppComponent]
})

export class AppModule { }