import { Injectable } from "@angular/core";
import { Student } from "./student.model";
import { RestDataSource } from "./rest.datasource";

@Injectable()
export class StudentRepository {
    private students: Student[] = [];
    private branches: string[] = [];
    private semesters: string[] = [];

    constructor(private dataSource: RestDataSource) {
        dataSource.getStudents().subscribe(data => {
            this.students = data;
            this.branches = data.map(p => p.branch).filter((c, index, array) => array.indexOf(c) == index).sort();
            this.semesters = data.map(p => p.semester).filter((c, index, array) => array.indexOf(c) == index).sort();
        });
    }

    getStudents(branch: string = null, semester: string = null): Student[] {
        return this.students
            .filter(p => branch == null || branch == p.branch).filter(p => semester == null || semester == p.semester);
    }

    getStudentByRoll(roll: string): Student {
        return this.students.find(s => s.roll == roll);
    }

    getStudent(id: number): Student {
        return this.students.find(p => p.id == id);
    }

    getBranches(): string[] {
        return this.branches;
    }

    getSemesters(): string[] {
        return this.semesters;
    }

    saveStudent(student: Student) {
        if (student.id == null || student.id == 0) {
            this.dataSource.saveStudent(student)
                .subscribe(p => this.students.push(p));
        } else {
            this.dataSource.updateStudent(student)
                .subscribe(p => {
                    this.students.splice(this.students.
                        findIndex(p => p.id == student.id), 1, student);
                });
        }
    }

    deleteStudent(roll: string) {
        this.dataSource.deleteStudent(roll).subscribe(p => {
            this.students.splice(this.students.
                findIndex(p => p.roll == roll), 1);
        })
    }
}