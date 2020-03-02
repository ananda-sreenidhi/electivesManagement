import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AuthComponent } from "./auth.component";
import { AdminComponent } from "./admin.component";
import { AuthGuard } from "./auth.guard";
import { StudentTableComponent } from "./studentTable.component";
import { StudentEditorComponent } from "./studentEditor.component";
import { ElectiveTableComponent } from "./electiveTable.component";

let routing = RouterModule.forChild([
    { path: "auth", component: AuthComponent },
    { path: "main", component: AdminComponent, canActivate: [AuthGuard],
        children: [
            { path: "students/:mode/:id", component: StudentEditorComponent },
            { path: "students/:mode", component: StudentEditorComponent },
            { path: "students", component: StudentTableComponent },
            { path: "details/:mode/:id", component: ElectiveTableComponent },
            { path: "**", redirectTo: "students" }
        ]
    },
    { path: "**", redirectTo: "auth" }
]);

@NgModule({
    imports: [CommonModule, FormsModule, routing],
    providers: [AuthGuard],
    declarations: [AuthComponent, AdminComponent, StudentTableComponent, StudentEditorComponent, ElectiveTableComponent]
})

export class AdminModule { }