import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ElectiveRepository } from "../model/elective.repository";
import { Elective } from "../model/elective.model";
import { StudentRepository } from "../model/student.repository";
import { Student } from "../model/student.model";

@Component({
    templateUrl: "electiveForm.component.html",
    styleUrls: ["electiveForm.component.css"]
})

export class ElectiveFormComponent { 
    electiveSent: boolean = false;
    submitted: boolean = false;

    constructor(public repository: ElectiveRepository, public elective: Elective) {}

    submitElective(form: NgForm) {
        this.submitted = true;
        if (form.valid) {
            this.repository.saveElective(this.elective).subscribe(elective => {
                this.electiveSent = true;
                this.submitted = false;
            });
        }
    }
}