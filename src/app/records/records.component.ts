import { Component } from "@angular/core";
import { Student } from "../model/student.model";
import { StudentRepository } from "../model/student.repository";
import { Router } from "@angular/router";
@Component({
selector: "records",
templateUrl: "records.component.html"
})
export class RecordsComponent {
    public selectedBranch = null;
    public selectedSemester = null;

    constructor(private repository: StudentRepository, private router: Router) { }

    get students(): Student[] {
        return this.repository.getStudents(this.selectedBranch, this.selectedSemester).sort(function(a, b) {
            return b.cgpa - a.cgpa;})
    }
    get branches(): string[] {
        return this.repository.getBranches();
    }
    get semesters(): string[] {
        return this.repository.getSemesters();
    }
    changeBranch(newBranch?: string) {
        this.selectedBranch = newBranch;
    }
    changeSemester(newSemester?: string) {
        this.selectedSemester = newSemester;
    }

}