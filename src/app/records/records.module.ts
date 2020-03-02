import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import { RecordsComponent } from "./records.component";
import { RouterModule } from "@angular/router";
import { ElectiveFormComponent } from "./electiveForm.component";
// import { CounterDirective } from "./counter.directive";

@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule, RouterModule],
    declarations: [RecordsComponent, ElectiveFormComponent],
    exports: [RecordsComponent, ElectiveFormComponent]
})

export class RecordsModule { }