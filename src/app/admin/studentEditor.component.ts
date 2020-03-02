import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { NgForm } from "@angular/forms";
import { Student } from "../model/student.model";
import { StudentRepository } from "../model/student.repository";
@Component({
    templateUrl: "studentEditor.component.html"
})
export class StudentEditorComponent {
    editing: boolean = false;
    student: Student = new Student();
    constructor(private repository: StudentRepository,
        private router: Router,
        activeRoute: ActivatedRoute) {
        this.editing = activeRoute.snapshot.params["mode"] == "edit";
        if (this.editing) {
            Object.assign(this.student,
                repository.getStudent(activeRoute.snapshot.params["id"]));
        }
    }
    save(form: NgForm) {
        this.repository.saveStudent(this.student);
        this.router.navigateByUrl("/admin/main/students");
    }
}