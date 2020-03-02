import { Injectable } from "@angular/core";
import { Student } from "./student.model";
import { Observable, from } from "rxjs";
import { Elective } from "./elective.model";

@Injectable()
export class StaticDataSource {
    private students: Student[] = [
        new Student(1, "17csu000", "Student Name", "Branch 1", "G", "1900-01-01", "abc@xyz.com", "0000000000", "XXX", 0, "Elective Choice 1", "Elective Choice 2"),
        new Student(2, "17csu000", "Student Name", "Branch 1", "G", "1900-01-01", "abc@xyz.com", "0000000000", "XXX", 0, "Elective Choice 1", "Elective Choice 2"),
        new Student(3, "17csu000", "Student Name", "Branch 1", "G", "1900-01-01", "abc@xyz.com", "0000000000", "XXX", 0, "Elective Choice 1", "Elective Choice 2"),
        new Student(4, "17csu000", "Student Name", "Branch 2", "G", "1900-01-01", "abc@xyz.com", "0000000000", "XXX", 0, "Elective Choice 1", "Elective Choice 2"),
        new Student(5, "17csu000", "Student Name", "Branch 2", "G", "1900-01-01", "abc@xyz.com", "0000000000", "XXX", 0, "Elective Choice 1", "Elective Choice 2"),
        new Student(6, "17csu000", "Student Name", "Branch 2", "G", "1900-01-01", "abc@xyz.com", "0000000000", "XXX", 0, "Elective Choice 1", "Elective Choice 2"),
        new Student(7, "17csu000", "Student Name", "Branch 3", "G", "1900-01-01", "abc@xyz.com", "0000000000", "XXX", 0, "Elective Choice 1", "Elective Choice 2"),
        new Student(8, "17csu000", "Student Name", "Branch 3", "G", "1900-01-01", "abc@xyz.com", "0000000000", "XXX", 0, "Elective Choice 1", "Elective Choice 2"),
        new Student(9, "17csu000", "Student Name", "Branch 3", "G", "1900-01-01", "abc@xyz.com", "0000000000", "XXX", 0, "Elective Choice 1", "Elective Choice 2"),
        new Student(10, "17csu000", "Student Name", "Branch 4", "G", "1900-01-01", "abc@xyz.com", "0000000000", "XXX", 0, "Elective Choice 1", "Elective Choice 2"),
        new Student(11, "17csu000", "Student Name", "Branch 4", "G", "1900-01-01", "abc@xyz.com", "0000000000", "XXX", 0, "Elective Choice 1", "Elective Choice 2"),
        new Student(12, "17csu000", "Student Name", "Branch 4", "G", "1900-01-01", "abc@xyz.com", "0000000000", "XXX", 0, "Elective Choice 1", "Elective Choice 2")
    ];

    getStudents(): Observable<Student[]> {
        return from([this.students]);
    }

    saveElective(elective: Elective): Observable<Elective> {
        console.log(JSON.stringify(elective));
        return from([elective]);
    }

}
