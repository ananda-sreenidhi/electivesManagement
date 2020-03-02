import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Student } from "../model/student.model";
import { StudentRepository } from "../model/student.repository";

@Component({
    templateUrl: "electiveTable.component.html"
})
export class ElectiveTableComponent {
    view: boolean = false;
    s: Student = new Student();
    constructor(private repository: StudentRepository, private router: Router,
        activeRoute: ActivatedRoute) {
            this.view = activeRoute.snapshot.params["mode"] == "view";
            if (this.view) {
                Object.assign(this.s, repository.getStudent(activeRoute.snapshot.params["id"]));
            }
        }
    getStudents(): Student[] {
        return this.repository.getStudents();
    }
}